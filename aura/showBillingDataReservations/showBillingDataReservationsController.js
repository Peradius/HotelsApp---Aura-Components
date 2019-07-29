({
	financesClicked : function(component, event, helper) {
		helper.sendReservationEvent(component, event);
	},

	backClicked : function(component, event, helper) {
		helper.handleBack();
	}
})