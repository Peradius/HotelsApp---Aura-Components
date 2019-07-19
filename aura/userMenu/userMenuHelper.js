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
	}
})