@isTest
private class SummaryPopupControllerTest {
    @isTest static void createReservationTest() {
        // INSERT HOTEL
        Hotel__c newHotel = new Hotel__c(
            Name = 'Hotel Test', 
            Address__c = 'Testowa 1',
            City__c = 'Testowo',
            Rating__c = 2
        );
        insert newHotel;

        // INSERT ROOM
        Room__c newRoom = new Room__c(
            Name = 'Room 1',
            Hotel__c = newHotel.Id,
            Single_Beds__c = 2,
            Double_Beds__c = 2,
            Price_for_Night__c = 50,
            Executive_Room__c = false
        );
        insert newRoom;

        // INSERT GUEST AND RESERVATION
        Guest__c newGuest = new Guest__c(
            First_Name__c = 'Peter',
            Last_Name__c = 'Alloy',
            Email__c = 'testcase@test.com'
        );
        insert newGuest;

        Test.startTest();

        Date checkIn = Date.newInstance(2019,7,4);
        Date checkOut = Date.newInstance(2019,7,7);
        Decimal totalPrice = 100;

        SummaryPopupController.createReservation(newGuest, newRoom, checkIn, checkOut, totalPrice);

        Test.stopTest();

        List<Reservation__c> reservations = [SELECT Id FROM Reservation__c];
        
        System.assertEquals(1, reservations.size());
    }
}