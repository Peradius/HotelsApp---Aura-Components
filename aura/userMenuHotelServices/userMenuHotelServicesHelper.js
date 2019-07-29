({
	handleServiceData : function(component, event) {
		console.log("* servicesData received in userMenuHotelServices *");
		var services = event.getParam("services");
		var reservation = event.getParam("reservation");
		console.log("Obtained reservation: " + reservation);

		component.set("v.services", services);
		component.set("v.reservation", reservation);
	},

	orderService : function(component, event) {
		console.log("clicked");
		var service = event.getSource().get("v.value");
		var reservation = component.get("v.reservation");

		console.log(service);
		console.log(reservation);

		// console.log("orderService = = reservation : " + reservation.Id + " | service : " + service.Id);
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