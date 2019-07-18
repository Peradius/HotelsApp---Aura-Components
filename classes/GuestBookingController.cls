public class GuestBookingController {
     @AuraEnabled
     public static Guest__c createGuest(Guest__c guest) {
         upsert guest;
         return guest;
     }

     @AuraEnabled
     public static Guest__c findEmail(String email){
         return [SELECT Name, First_Name__c, Last_Name__c, Email__c, Phone__c FROM Guest__c WHERE Email__c = :email];
     }
}