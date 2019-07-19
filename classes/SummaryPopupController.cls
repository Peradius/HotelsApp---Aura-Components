public with sharing class SummaryPopupController {
    @AuraEnabled
    public static Reservation__c createReservation(Guest__c guest, Room__c room, Date checkIn, Date checkOut){
        Reservation__c reservation = new Reservation__c(
        Check_In__c = checkIn,
        Check_Out__c = checkOut,
        Confirmed__c = true,
        Guest__c = guest.Id,
        Room__c =  room.Id
        );

        insert reservation;
        return reservation;
    }
}