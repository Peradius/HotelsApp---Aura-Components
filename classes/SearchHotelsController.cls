public with sharing class SearchHotelsController {
    @AuraEnabled
    public static List<Hotel__c> getHotels() {
        // Perform isAccessible() checking first, then
        return [SELECT Id, Name 
                FROM Hotel__c];
    }

    @AuraEnabled
    public static List<Room__c> getRooms(Id id) {
        // Perform isAccessible() checking first, then
        return [SELECT Name, Single_Beds__c, Double_Beds__c, Price_for_Night__c, Maximum_People_in_the_Room__c
                FROM Room__c WHERE Id = :id];
    }
}