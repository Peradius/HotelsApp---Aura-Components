({
	handleChangePageEvent : function(component, event, handler) {
		console.log("Event received");
		var mainMenu = event.getParam("mainMenu");
		var userMenu = event.getParam("userMenu");

		component.set("v.mainMenuOpened", mainMenu);
		component.set("v.userMenuOpened", userMenu);
	}
})