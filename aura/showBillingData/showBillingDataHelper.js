({
	showFinances : function(component, event) {
		var reservation = event.getSource().get("v.value");
		component.set("v.reservation", reservation);
		
		this.queryBilling(component, reservation);
	},

	handleBack : function(component) {
		let billingEvent = component.getEvent("billingTraverseEvent");
		billingEvent.setParams({
			"showBillingPage" : false
		});
		billingEvent.fire();
		console.log("* billingTraverseEvent sent from showBillingDataHelper *");
	},

	queryBilling : function(component, reservation) {
		var action = component.get("c.getBillings");
		action.setParams({
			"reservationId" : reservation.Id
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				let billings = action.getReturnValue();
				
				if (billings != null) {
					component.set("v.billings", billings);
					console.log("Success setting billings in showBillingData");
					this.calculateTotalBilling(component, billings);
				} else {
					console.log("There is no additional billings");
					this.calculateTotalBilling(component, null);
				}
				
			} else {
				console.log("Error retrieveing billings");
				console.log(response);
			}
		});
		$A.enqueueAction(action);
	},

	calculateTotalBilling : function(component, billings) {
		// Initial cost : price for the room reservation
		var sum = component.get("v.reservation").Reservation_Cost__c;

		if(billings != null) {
			// Another costs : additional services
			for(var i = 0; i < billings.length; i++) {
				sum += billings[i].Service__r.Price__c;
			}
		}

		component.set("v.reservationTotalBilling", sum);
		component.set("v.showTotalCost", true);
	}
})