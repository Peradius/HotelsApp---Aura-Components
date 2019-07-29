({
	sendReservationEvent : function(component, event) {
		let reservation = event.getSource().get("v.value");

		let reservationEvent = component.getEvent("reservationFinancesEvent");
	
        reservationEvent.setParams({
            "reservation" : reservation
		});
        reservationEvent.fire();
        console.log("* reservationFinancesEvent sent from searchRoomsHelper *");
	},

	handleBack : function() {
		let billingEvent = $A.get("e.c:billingTraverseEvent");
		billingEvent.setParams({
			"showBillingPage" : false
		});
		billingEvent.fire();
		console.log("* billingTraverseEvent sent from showBillingDataHelper *");
	}
})