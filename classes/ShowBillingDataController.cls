public with sharing class ShowBillingDataController {
    @AuraEnabled
    public static List<Billing__c> getBillings(String reservationId){
        return [SELECT Name, Date__c, Service__r.Price__c FROM Billing__c WHERE Reservation__r.Id = :reservationId];
    }
}