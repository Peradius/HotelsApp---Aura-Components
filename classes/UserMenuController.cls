public with sharing class UserMenuController {
    @AuraEnabled
    public static List<Reservation__c> getReservations(String guestId){
        return [SELECT Check_In__c, Check_Out__c, Reservation_Cost__c, Reservation_Date__c, Name, Room__r.Photo__c, Room__r.Name, Room__r.Single_Beds__c, Room__r.Double_Beds__c FROM Reservation__c  WHERE Guest__c = :guestId];
    }

    @AuraEnabled
    public static List<Service__c> getServices(String reservationId){
        String hotelId = getHotelId(reservationId);
        return [SELECT Name, Price__c, Description__c FROM Service__c WHERE Hotel__c = :hotelId];
    }

    @AuraEnabled
    public static Service_Billing__c addBilling(Reservation__c reservation, Service__c service){
        Id billingId = ShowBillingDataController.getBillingByReservationId(reservation.Id);
        System.debug('billingId: ' + billingId);

        Service_Billing__c newServiceBilling = new Service_Billing__c(
            Name = service.Name,
            Service__c = service.Id,
            Billing__c = billingId
        );
    
        insert newServiceBilling;
        System.debug('newServiceBilling inserted');
        return newServiceBilling;
    }

    private static String getHotelId(String reservationId){
        List<Reservation__c> hotel = [SELECT Room__r.Hotel__c FROM Reservation__c WHERE Id = :reservationId LIMIT 1];
        return hotel.get(0).Room__r.Hotel__c;
    }
}