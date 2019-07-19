public with sharing class UserMenuController {
    @AuraEnabled
    public static List<Reservation__c> getReservations(String guestId){
        return [SELECT Check_In__c, Check_Out__c,  Name, Room__r.Photo__c, Room__r.Name, Room__r.Single_Beds__c, Room__r.Double_Beds__c FROM Reservation__c  WHERE Guest__c = :guestId];
    }

    @AuraEnabled
    public static List<Service__c> getServices(String reservationId){
        String hotelId = getHotelId(reservationId);
        return [SELECT Name, Price__c, Description__c FROM Service__c WHERE Hotel__c = :hotelId];
    }

    @AuraEnabled
    public static Guest__c updateCharge(String guestId, Decimal cost){
        System.debug('Guest not yet updated!');
        Guest__c oldGuest = [SELECT Charge__c from Guest__c WHERE Id =: guestId LIMIT 1];
        if(oldGuest.Charge__c == null) {
            oldGuest.Charge__c = 0;
        }
        System.debug(oldGuest);
        System.debug(oldGuest.Charge__c);
        oldGuest.Charge__c = oldGuest.Charge__c + cost;
        System.debug('Guest updated!');
        System.debug(oldGuest.Charge__c);
        update oldGuest;
        return oldGuest;
    }

    private static String getHotelId(String reservationId){
        List<Reservation__c> hotel = [SELECT Room__r.Hotel__c FROM Reservation__c WHERE Id = :reservationId LIMIT 1];
        return hotel.get(0).Room__r.Hotel__c;
    }
}