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
	

    // @AuraEnabled
    // public static List<Room__c> getRooms(Id id) {
    //     // Perform isAccessible() checking first, then
    //     return [SELECT Name, Single_Beds__c, Double_Beds__c, Price_for_Night__c, Maximum_People_in_the_Room__c
    //             FROM Room__c WHERE Id = :id];
    // }
    
    // @AuraEnabled
    // public static Expense__c saveExpense(Expense__c expense) {
    //     // Perform isUpdateable() checking first, then
    //     upsert expense;
    //     return expense;
    // }
}