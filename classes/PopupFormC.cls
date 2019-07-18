public class PopupFormC {

    @AuraEnabled
    public static List<Account> fetchAcc (){
        return [SELECT Id, Name, Phone FROM Account ORDER BY CreatedDate desc];
    }

	@AuraEnabled
    public static void saveDetails (Account regForm1){ 
    	INSERT regForm1;
    }
}