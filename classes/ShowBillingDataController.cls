public with sharing class ShowBillingDataController {

    @AuraEnabled
    public static List<Service_Billing__c> getBillings(Id reservationId){
        Id billingId = getBillingByReservationId(reservationId);
        System.debug('billingId : ' + billingId);
        return [SELECT Name, Service__r.Name, Service__r.Price__c, Service__r.Description__c FROM Service_Billing__c WHERE Billing__c = :billingId];
    }

    public static Id getBillingByReservationId(Id reservationId){
        List<Reservation__c> billing = [SELECT Billing__r.Id FROM Reservation__c WHERE Reservation__c.Id = :reservationId];
        return billing[0].Billing__r.Id;
    }
}