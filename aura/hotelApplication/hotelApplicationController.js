({
	handleChangePageEvent : function(component, event, handler) {
		console.log("* handleChangePageEvent received in hotelApplicationController *");
		var mainMenu = event.getParam("mainMenu");
		var userMenu = event.getParam("userMenu");

		component.set("v.mainMenuOpened", mainMenu);
		component.set("v.userMenuOpened", userMenu);
	}
})