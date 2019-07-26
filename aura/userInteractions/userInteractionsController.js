({
	bookRoomClicked : function(component, event, helper) {
		helper.sendMainPageEvent(true, false);
	},

	viewAccountClicked : function(component, event, helper) {
		helper.sendMainPageEvent(false, true);
	}
})