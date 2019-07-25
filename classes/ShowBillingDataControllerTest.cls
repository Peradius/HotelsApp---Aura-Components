@isTest
private class ShowBillingDataControllerTest {
    
    @isTest static void ShowBillingDataControllerTest() {
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

        // INSERT GUEST
        Guest__c newGuest = new Guest__c(
            First_Name__c = 'Peter',
            Last_Name__c = 'Alloy',
            Email__c = 'testcase@test.com'
        );
        insert newGuest;

        // INSERT RESERVATION

        Reservation__c newReservation = new Reservation__c(
            Check_In__c	= Date.newInstance(2019,7,4),
            Check_Out__c = Date.newInstance(2019,7,7),
            Guest__c = newGuest.Id,
            Room__c	= newRoom.Id,
            Reservation_Cost__c = 100
        );
        insert newReservation;

        // INSERT SERVICE

        Service__c newService = new Service__c(
        	Name = 'Test service',
            Hotel__c = newHotel.Id,
            Price__c = 20
        );
        insert newService;

        //INSERT BILLING

        Billing__c newBilling = new Billing__c(
            Name = newService.Name,
            Reservation__c = newReservation.Id,
            Service__c = newService.Id
        );
        insert newBilling;

        Test.startTest();

        String reservationId = newReservation.Id;
        List<Billing__c> billingList = ShowBillingDataController.getBillings(reservationId);

        Test.stopTest();

        System.assertEquals(1, billingList.size());


    }
}