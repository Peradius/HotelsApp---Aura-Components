public with sharing class SummaryPopupController {
    @AuraEnabled
    public static Reservation__c createReservation(Guest__c guest, Room__c room, Date checkIn, Date checkOut, Decimal totalPrice){
        Reservation__c reservation = new Reservation__c(
        Check_In__c = checkIn,
        Check_Out__c = checkOut,
        Confirmed__c = true,
        Guest__c = guest.Id,
        Room__c = room.Id
        );

        insert reservation;
        updateCharge(guest, totalPrice);
        return reservation;
    }

    private static void updateCharge(Guest__c guest, Decimal amount) {
        Guest__c guestToUpdate = [SELECT Charge__c FROM Guest__c WHERE Id = :guest.Id];
        guestToUpdate.Charge__c = guestToUpdate.Charge__c + amount;

        update guestToUpdate;
    }
}