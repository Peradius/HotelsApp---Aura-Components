({
	handleGuestData : function(component, event) {
		console.log("* sendGuestData received in userMenuHelper *");

		var guest = event.getParam("guest");
		component.set("v.guest", guest);
		component.set("v.loggedIn", true);
		this.queryReservations(component, guest);	
	},

	queryReservations : function(component, guest) {
		var action = component.get("c.getReservations");
		action.setParams({
			"guestId" : guest.Id
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				var reservations = action.getReturnValue();
				component.set("v.reservations", reservations);
				console.log("Success setting reservations in userMenu");
			} else {
				console.log("Error retrieveing reservations");
				console.log(response);
			}
		});
		$A.enqueueAction(action);
	},

	orderService : function(component, event) {
		var service = event.getSource().get("v.value");
		var reservation = component.get("v.reservation");

		console.log("orderService = = reservation : " + reservation.Id + " | service : " + service.Id);
		var action = component.get("c.addBilling");
		action.setParams({
			"reservationId" : reservation.Id,
			"service" : service
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				console.log("Billing added!");
			} else {
				console.log("Error updating charge");
				console.log(response);
			}
		});
		$A.enqueueAction(action);
	}
})