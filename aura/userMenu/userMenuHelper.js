({
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
				console.log("Reservations retrieved!");
				console.log("Check in: " + component.get("v.reservations")[0].Check_In__c);
				console.log("Room Name: " + component.get("v.reservations")[0].Room__r.Name);
			} else {
				console.log("Error retrieveing reservations");
				console.log(response);
			}
		});
		$A.enqueueAction(action);
	},

	queryServices : function(component, reservationId) {
		var action = component.get("c.getServices");
		action.setParams({
			"reservationId" : reservationId
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				var services = action.getReturnValue();
				component.set("v.services", services);
				console.log("Services retrieved!");
			} else {
				console.log("Error retrieveing services");
				console.log(response);
			}
		});
		$A.enqueueAction(action);
	},

	orderService : function(component, reservation, service) {
		var action = component.get("c.addService");
		console.log("oderService entered");
		action.setParams({
			"reservation" : reservation,
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