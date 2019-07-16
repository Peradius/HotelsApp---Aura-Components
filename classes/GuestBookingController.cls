public class GuestBookingController {
     @AuraEnabled
     public static Guest__c createGuest(Guest__c guest) {
         upsert guest;
         return guest;
     }
}