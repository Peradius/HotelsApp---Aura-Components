public with sharing class UserMenuHotelServicesController {
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

    private static Id getBillingByReservationId(Id reservationId){
        List<Reservation__c> billing = [SELECT Billing__r.Id FROM Reservation__c WHERE Reservation__c.Id = :reservationId];
        return billing[0].Billing__r.Id;
    }
}