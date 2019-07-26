public with sharing class ShowBillingDataController {

    @AuraEnabled
    public static List<Service_Billing__c> getBillings(Id reservationId){
        Id billingId = getBillingByReservationId(reservationId);

        List<Service_Billing__c> servicebillings = [SELECT Name, Date__c, Service__r.Name, Service__r.Price__c, Service__r.Description__c 
                FROM Service_Billing__c 
                WHERE Billing__c = :billingId
                ORDER BY Date__c];

        if (servicebillings.size() > 0){
          return servicebillings;
        }

        return null;
    }

    private static Id getBillingByReservationId(Id reservationId){
        List<Reservation__c> billing = [SELECT Billing__r.Id FROM Reservation__c WHERE Reservation__c.Id = :reservationId];
        return billing[0].Billing__r.Id;
    }
}