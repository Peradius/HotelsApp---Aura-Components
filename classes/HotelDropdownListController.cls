public with sharing class HotelDropdownListController {
    @AuraEnabled
    public static List<Hotel__c> getHotels(Decimal rating, String city) {
        List<Hotel__c> allHotels = [SELECT Id, Name, Address__c, City__c, Phone__c, Email__c, Rating__c, Website__c, Photo__c
                FROM Hotel__c
                WHERE (Rating__c  >= :rating)];

        if(city == null) {
            if (allHotels.size() > 0){
                return allHotels;
            } else {
                return null;
            }
        } else {
            List<Hotel__c> hotelsFromCity = new List<Hotel__c>();

            for(Hotel__c hotel : allHotels) {
                if(hotel.City__c == city) {
                    hotelsFromCity.add(hotel);
                }
            }
            
            if (hotelsFromCity.size() > 0){
                return hotelsFromCity;
            } else {
                return null;
            }
        }
    }
}