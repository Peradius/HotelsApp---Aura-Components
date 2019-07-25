@isTest
private class GuestBookingControllerTest {
    @testSetup static void setup() {
        Guest__c newGuest = new Guest__c(First_Name__c = 'Peter', Last_Name__c = 'Alloy', Email__c = 'testcase@test.com');
        insert newGuest;
    }
    
    @isTest static void createGuest() {
        Guest__c newGuest = new Guest__c(First_Name__c = 'Adam', Last_Name__c = 'Malloc', Email__c = 'malloc@test.com');
        Test.startTest();

        guestBookingController.createGuest(newGuest);

        Test.stopTest();

         List<Guest__c> guests = [SELECT Id FROM Guest__c WHERE Id = :newGuest.id];

         System.AssertEquals(1,guests.size());
    }
    
    @isTest static void findEmailTrue() {
        String email = 'testcase@test.com';
        Test.startTest();

        guestBookingController.findEmail(email);

        Test.stopTest();

        List<Guest__c> emails = [SELECT Id FROM Guest__c WHERE Email__c = :email];
        System.assertEquals(1, emails.size());
    }

    @isTest static void findEmailFalse() {
        String email = 'notExists@test.com';
        Test.startTest();

        guestBookingController.findEmail(email);

        Test.stopTest();

        List<Guest__c> emails = [SELECT Id FROM Guest__c WHERE Email__c = :email];
        System.assertEquals(0, emails.size());
    }
}