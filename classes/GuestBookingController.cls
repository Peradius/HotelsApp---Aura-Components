public class GuestBookingController {
     @AuraEnabled
     public static Guest__c createGuest(Guest__c guest) {
         Guest__c newGuest = new Guest__c();
         newGuest.First_Name__c = guest.First_Name__c;
         newGuest.Last_Name__c = guest.Last_Name__c;
         newGuest.Phone__c = guest.Phone__c;
         newGuest.Charge__c = guest.Charge__c;
         newGuest.Email__c = guest.Email__c;
         insert newGuest;
         System.debug('Inside createGuest method: guest Id -' + newGuest.Id);
         return newGuest;
     }

     @AuraEnabled
     public static Guest__c findEmail(String email){
         return [SELECT Name, Charge__c, First_Name__c, Last_Name__c, Email__c, Phone__c FROM Guest__c WHERE Email__c = :email];
     }
}