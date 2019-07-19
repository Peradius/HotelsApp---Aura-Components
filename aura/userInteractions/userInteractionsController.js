({
	bookRoomClicked : function(component, event, helper) {
		var changePageEvent = $A.get("e.c:changeMainPageEvent");
        changePageEvent.setParams({
            "mainMenu" : true,
            "userMenu" : false,
        });
		changePageEvent.fire();
		console.log("book room clicked event sent");
	},

	viewAccountClicked : function(component, event, helper) {
		var changePageEvent = $A.get("e.c:changeMainPageEvent");
        changePageEvent.setParams({
            "mainMenu" : false,
            "userMenu" : true,
        });
		changePageEvent.fire();
		console.log("user menu clicked event sent");
	}
})