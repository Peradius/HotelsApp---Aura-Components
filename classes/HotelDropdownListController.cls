public with sharing class HotelDropdownListController {
    @AuraEnabled
    public static List<Hotel__c> getHotels() {
        return [SELECT Id, Name, Address__c, City__c, Phone__c, Email__c, Rating__c, Website__c
                FROM Hotel__c];
    }
}