public with sharing class HotelRoomsListController {
    @AuraEnabled
    public static List<Room__c> getRooms(String hotelId, Decimal maxPrice, Decimal peopleInRoom, Date checkIn, Date checkOut, Boolean isExecutive) {
        List<Room__c> allRooms = [SELECT Name, Single_Beds__c, Double_Beds__c, Price_for_Night__c, Maximum_People_in_the_Room__c, Executive_Room__c, Photo__c
                FROM Room__c 
                WHERE (Hotel__c = :hotelId AND Price_for_Night__c <= :maxPrice AND Maximum_People_in_the_Room__c >= :peopleInRoom AND Executive_Room__c	=: isExecutive)];

        List<Room__c> availableRooms = new List<Room__c>();
        List<Reservation__c> reservations = new List<Reservation__c>();
        Integer i = 0;

        for(Room__c room : allRooms) {
            // List of reservations for the specific room in given data timelines
            reservations = [SELECT Name 
                FROM Reservation__c 
                WHERE Room__r.Hotel__c = :hotelId AND Room__r.Id = :room.Id AND Check_In__c <= :checkOut AND Check_Out__c >= :checkIn];
                i++;
                // If the list is empty, that means there is no reservation at that time and we can display the room
                // as available for booking
            if(reservations.size() == 0) {
                availableRooms.add(room);
                reservations.clear();
            } else {
                System.debug(room.Name + ' has already a reservation');
                reservations.clear();
            }
        }

        return availableRooms;
	}
}