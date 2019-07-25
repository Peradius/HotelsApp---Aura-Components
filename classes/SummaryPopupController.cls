public with sharing class SummaryPopupController {
    @AuraEnabled
    public static Reservation__c createReservation(Guest__c guest, Room__c room, Date checkIn, Date checkOut){
        Billing__c billing = createBilling(guest, room);

        Reservation__c reservation = new Reservation__c(
        Billing__c = billing.Id,
        Check_In__c = checkIn,
        Check_Out__c = checkOut,
        Confirmed__c = true,
        Guest__c = guest.Id,
        Room__c = room.Id
        );

        insert reservation;
        return reservation;
    }

    private static Billing__c createBilling(Guest__c guest, Room__c room){
        Billing__c billing = new Billing__c(
            Name = guest.Last_Name__c + ' ' + guest.First_Name__c + ' : ' + room.Name
        );
        insert billing;
        return billing;
    }
}