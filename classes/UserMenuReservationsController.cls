public with sharing class UserMenuReservationsController {
   @AuraEnabled
    public static List<Service__c> getServices(Id reservationId){
        Id hotelId = getHotelId(reservationId);
        List<Service__c> services = [SELECT Name, Price__c, Description__c FROM Service__c WHERE Hotel__c = :hotelId];
        
        if (services.size() > 0){
          return services;
        }
        return null;
    }

    private static Id getHotelId(Id reservationId){
        List<Reservation__c> hotel = [SELECT Room__r.Hotel__c FROM Reservation__c WHERE Id = :reservationId LIMIT 1];
        return hotel.get(0).Room__r.Hotel__c;
    }
}