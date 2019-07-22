public with sharing class ChangeUserDataModalController {
    @AuraEnabled
    public static Guest__c updateGuest(Guest__c guest){
        update guest;
        System.debug('Guest updated!');
        return guest;
    }
}