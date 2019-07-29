({
	sendShowBillingPage : function(component) {
		var sendShowBillingPageEvent = component.getEvent("showBillingPageEvent");
		sendShowBillingPageEvent.setParams({
			"showPage" : true
		});
		sendShowBillingPageEvent.fire();
		console.log("* sendShowBillingPageEvent sent from userMenuReservationsHelper *");
	}
})