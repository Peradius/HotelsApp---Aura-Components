public with sharing class UserMenuController {
    @AuraEnabled
    public static List<Reservation__c> getReservations(Id guestId){
        List<Reservation__c> reservations = [SELECT Check_In__c, Check_Out__c, Reservation_Cost__c, Reservation_Date__c, Name, 
                Room__r.Photo__c, Room__r.Name, Room__r.Single_Beds__c, Room__r.Double_Beds__c 
                FROM Reservation__c  WHERE Guest__c = :guestId];
        
        if (reservations.size() > 0){
          return reservations;
        }
        return null;
    }

    @AuraEnabled
    public static List<Service__c> getServices(Id reservationId){
        Id hotelId = getHotelId(reservationId);
        List<Service__c> services = [SELECT Name, Price__c, Description__c FROM Service__c WHERE Hotel__c = :hotelId];
        
        if (services.size() > 0){
          return services;
        }
        return null;
    }

    @AuraEnabled
    public static Service_Billing__c addBilling(ID reservationId, Service__c service){
        Id billingId = getBillingByReservationId(reservationId);

        Service_Billing__c newServiceBilling = new Service_Billing__c(
            Name = service.Name,
            Service__c = service.Id,
            Billing__c = billingId
        );
    
        insert newServiceBilling;
        System.debug('newServiceBilling inserted');
        return newServiceBilling;
    }

    private static Id getHotelId(Id reservationId){
        List<Reservation__c> hotel = [SELECT Room__r.Hotel__c FROM Reservation__c WHERE Id = :reservationId LIMIT 1];
        return hotel.get(0).Room__r.Hotel__c;
    }

    private static Id getBillingByReservationId(Id reservationId){
        List<Reservation__c> billing = [SELECT Billing__r.Id FROM Reservation__c WHERE Reservation__c.Id = :reservationId];
        return billing[0].Billing__r.Id;
    }
}