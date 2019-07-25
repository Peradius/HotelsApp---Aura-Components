({
	queryBilling : function(component, reservation) {
		var action = component.get("c.getBillings");
		action.setParams({
			"reservationId" : reservation.Id
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				var billings = action.getReturnValue();
				component.set("v.billings", billings);

				// Initial cost : price for the room reservation
				var res = component.get("v.reservation").Check_In__c;
				var sum = component.get("v.reservation").Reservation_Cost__c; 
				console.log(" =========== reservation : " + res);
				console.log(" =========== sum : " + sum);

				// Another costs : additional services
				for(var i = 0; i < billings.length; i++) {
					sum += billings[i].Service__r.Price__c;
				}

				component.set("v.reservationTotalBilling", sum);
				component.set("v.showTotalCost", true);
			} else {
				console.log("Error retrieveing billings");
				console.log(response);
			}
		});
		$A.enqueueAction(action);
	}
})