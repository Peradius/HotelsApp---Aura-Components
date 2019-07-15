public with sharing class HotelRoomsListController {
    @AuraEnabled
    public static List<Room__c> getRooms(String id, Decimal maxPrice, Decimal peopleInRoom) {
        return [SELECT Name, Single_Beds__c, Double_Beds__c, Price_for_Night__c, Maximum_People_in_the_Room__c, Executive_Room__c
                FROM Room__c 
                WHERE (Hotel__c = :id AND Price_for_Night__c <= :maxPrice AND Maximum_People_in_the_Room__c >= :peopleInRoom)];
                // 
	}
	
	    // @AuraEnabled
    // public static Expense__c saveExpense(Expense__c expense) {
    //     // Perform isUpdateable() checking first, then
    //     upsert expense;
    //     return expense;
	// }
}