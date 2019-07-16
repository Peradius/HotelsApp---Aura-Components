({
	createGuest : function(component, guest) {
		var action = component.get("c.createGuest");
		action.setParams({
			"guest" : guest
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				console.log("Component(Guest) set!");
			} else {
				console.log("Error setting guests");
				console.log(response);
			}
		});

		$A.enqueueAction(action);
	}
})