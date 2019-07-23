@isTest
private class HotelRoomListControllerTest {
	@isTest static void getRoomsTest() {
        // INSERT HOTEL
        Hotel__c newHotel = new Hotel__c(
            Name = 'Hotel Test', 
            Address__c = 'Testowa 1',
            City__c = 'Testowo',
            Rating__c = 2
        );
        insert newHotel;

        // INSERT ROOMS
        List<Room__c> newRooms = new List<Room__c>();
            // free room 1
        Room__c newRoom = new Room__c(
            Name = 'Room 1',
            Hotel__c = newHotel.Id,
            Single_Beds__c = 2,
            Double_Beds__c = 2,
            Price_for_Night__c = 50,
            Executive_Room__c = false
        );
        newRooms.add(newRoom);

            // free room 2
        newRoom = new Room__c(
            Name = 'Room 2',
            Hotel__c = newHotel.Id,
            Single_Beds__c = 2,
            Double_Beds__c = 3,
            Price_for_Night__c = 60,
            Executive_Room__c = false
        );
        newRooms.add(newRoom);

            // occupied room 1
        Room__c bookedRoom = new Room__c(
            Name = 'Room 3',
            Hotel__c = newHotel.Id,
            Single_Beds__c = 1,
            Double_Beds__c = 2,
            Price_for_Night__c = 40,
            Executive_Room__c = false
        );
        insert newRooms;
        insert bookedRoom;

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
            Room__c	= bookedRoom.Id
        );
        insert newReservation;

        Test.startTest();

        String hotelId = newHotel.Id;
        Decimal maxPrice = 100;
        Decimal peopleInRoom = 1;
        Date checkIn1 = Date.newInstance(2019, 7, 8);
        Date checkIn2 = Date.newInstance(2019, 7, 5);
        Date checkOut = Date.newInstance(2019, 7, 9);
        Boolean isExecutive = false;
        
        List<Room__c> availableRoomsAll = HotelRoomsListController.getRooms(hotelId, maxPrice, peopleInRoom, checkIn1, checkOut, isExecutive);
        List<Room__c> availableRoomsNoBooked = HotelRoomsListController.getRooms(hotelId, maxPrice, peopleInRoom, checkIn2, checkOut, isExecutive);

        Test.stopTest();

        System.assertEquals(2, availableRoomsNoBooked.size());
        System.assertEquals(3, availableRoomsAll.size());
    }
}