@isTest
private class UserMenuControllerTest {
    @isTest static void getReservationsTest() {
        // INSERT HOTEL
        Hotel__c newHotel = new Hotel__c(
            Name = 'Hotel Test', 
            Address__c = 'Testowa 1',
            City__c = 'Testowo',
            Rating__c = 2
        );
        insert newHotel;

        // INSERT ROOMS
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

        Reservation__c newReservation = new Reservation__c(
            Check_In__c	= Date.newInstance(2019,7,4),
            Check_Out__c = Date.newInstance(2019,7,7),
            Guest__c = newGuest.Id,
            Room__c	= newRoom.Id
        );
        insert newReservation;
        
        Test.startTest();
        
        List<Reservation__c> reservations = UserMenuController.getReservations(newGuest.Id);
        
        Test.stopTest();
        
        System.assertEquals(1, reservations.size());
    }
    
    @isTest static void getServicesTest() {
                // INSERT HOTEL
        Hotel__c newHotel = new Hotel__c(
            Name = 'Hotel Test', 
            Address__c = 'Testowa 1',
            City__c = 'Testowo',
            Rating__c = 2
        );
        insert newHotel;

        // INSERT ROOMS
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

        Reservation__c newReservation = new Reservation__c(
            Check_In__c	= Date.newInstance(2019,7,4),
            Check_Out__c = Date.newInstance(2019,7,7),
            Guest__c = newGuest.Id,
            Room__c	= newRoom.Id
        );
        insert newReservation;
        
        // INSERT SERVICES TO HOTEL
        Service__c newService = new Service__c(
        	Name = 'Test service',
            Hotel__c = newHotel.Id,
            Price__c = 20
        );
        insert newService;
        
        Test.startTest();
        
        List<Service__c> services = UserMenuController.getServices(newReservation.Id);
        
        Test.stopTest();
        
        System.assertEquals(1, services.size());
    }
    
    @isTest static void updateChargeTest() {
        // TBA
    }
}