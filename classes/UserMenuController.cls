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
}