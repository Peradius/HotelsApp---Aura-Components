({
	handleClickReservation : function(component, event){
		let reservation = event.getSource().get("v.value");
		component.set("v.showReservationDetails", true);
		this.queryServices(component, reservation);
		this.sendShowDetailsEvent(component);
    },
    
    queryServices : function(component, reservation) {
		var action = component.get("c.getServices");
		action.setParams({
			"reservationId" : reservation.Id
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				var services = action.getReturnValue();
				component.set("v.services", services);
                console.log("Success setting services in userMenuReservations");
                this.sendServicesEvent(services, reservation);
			} else {
				console.log("Error retrieving services");
				console.log(response);
			}
		});
		$A.enqueueAction(action);
    },
    
    sendServicesEvent : function(services, reservation) {
		var sendServicesEvent = $A.get("e.c:servicesData");
		console.log("Reservation = " + reservation);
		sendServicesEvent.setParams({
			"services" : services,
			"reservation" : reservation
		});
		sendServicesEvent.fire();
		console.log("* sendServicesEvent sent from userMenuReservationsHelper *");
	},

	sendShowDetailsEvent : function(component) {
		var sendShowServicesEvent = component.getEvent("showReservationDetailsEvent");
		sendShowServicesEvent.setParams({
			"showReservationDetails" : true
		});
		sendShowServicesEvent.fire();
		console.log("* sendShowServicesEvent sent from userMenuReservationsHelper *");
	}
})