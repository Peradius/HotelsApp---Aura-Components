@isTest
private class ChangeUserDataModalControllerTest {
    @testSetup static void setup() {
        Guest__c newGuest = new Guest__c(
            First_Name__c = 'Peter', 
            Last_Name__c = 'Alloy', 
            Email__c = 'testcase@test.com'
        );
        
        insert newGuest;
    }

    @isTest static void updateGuestTest() {
        Guest__c newGuest = [SELECT First_Name__c FROM Guest__c LIMIT 1];
        String guestId = newGuest.Id;
        
        Guest__c theGuest = [SELECT First_Name__c FROM Guest__c WHERE Id = :guestId LIMIT 1];
        String oldName = theGuest.First_Name__c;

        Test.startTest();

        theGuest.First_Name__c = 'Alex';
        ChangeUserDataModalController.updateGuest(theGuest);

        theGuest = [SELECT First_Name__c FROM Guest__c WHERE Id = :guestId LIMIT 1];
        String newName = theGuest.First_Name__c;
        Test.stopTest();

        System.assertEquals('Peter', oldName);
        System.assertEquals('Alex', newName);
    }
}