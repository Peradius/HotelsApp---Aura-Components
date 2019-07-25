public with sharing class GuestBookingController {
     @AuraEnabled
     public static Guest__c createGuest(Guest__c guest) {
         insert guest;
         System.debug('Inside createGuest method: guest Id -' + guest.Id);
         return guest;
     }

     @AuraEnabled
     public static Guest__c findEmail(String email){
        List <Guest__c> guests = [SELECT Name, First_Name__c, Last_Name__c, Email__c, Phone__c FROM Guest__c WHERE Email__c = :email];
        if (guests.size()==1){
            return guests[0];
        }
        return null;     
     }
}