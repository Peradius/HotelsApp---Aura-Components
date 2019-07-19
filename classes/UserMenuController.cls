public with sharing class UserMenuController {
    @AuraEnabled
    public static List<Object> getReservations(String guestId){
        return [SELECT Check_In__c, Check_Out__c, Name, Room__r.Photo__c, Room__r.Name, Room__r.Single_Beds__c, Room__r.Double_Beds__c FROM Reservation__c  WHERE Guest__c = :guestId];
    }
}