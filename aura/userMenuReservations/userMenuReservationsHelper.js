({
	handleClickReservation : function(component, event){
		let reservation = event.getSource().get("v.value");
		component.set("v.showReservationDetails", true);
		this.queryServices(component, reservation.Id);
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
                console.log("Success setting services in userMenuReservations");
                this.sendServicesEvent(services);
			} else {
				console.log("Error retrieving services");
				console.log(response);
			}
		});
		$A.enqueueAction(action);
    },
    
    sendServicesEvent : function(services) {
		var sendServicesEvent = $A.get("e.c:sendGuestData");
		sendServicesEvent.setParams({
			"services" : services
		});
		sendServicesEvent.fire();
		console.log("* sendServicesEvent sent from userMenuReservationsHelper *");
	},
})
