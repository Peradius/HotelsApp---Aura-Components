public with sharing class HotelDropdownListController {
    @AuraEnabled
    public static List<Hotel__c> getHotels() {
        return [SELECT Id, Name 
                FROM Hotel__c];
    }

    @AuraEnabled
    public static Hotel__c getSingleHotel(String id){
        return [SELECT Id, Name, Address__c, City__c, Phone__c, Email__c, Rating__c, Website__c 
                FROM Hotel__c 
                WHERE Id = :id 
                LIMIT 1];
    }
}
