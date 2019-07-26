({
	sendMainPageEvent : function(mainMenu, userMenu) {
		var changePageEvent = $A.get("e.c:changeMainPageEvent");
        changePageEvent.setParams({
            "mainMenu" : mainMenu,
            "userMenu" : userMenu,
        });
		changePageEvent.fire();
		console.log("* changeMainPageEvent sent from userInteractionsHelper *");
	}
})