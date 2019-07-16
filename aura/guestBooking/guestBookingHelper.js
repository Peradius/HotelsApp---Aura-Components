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
	},

	findEmail : function(component, emailValue) {
		var action = component.get("c.findEmail");
		action.setParams({
			"email" : emailValue
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				console.log("Email found!");
				component.set("v.emailNotFound", false);
			} else {
				console.log("Email " + emailValue + " not found!");
				console.log(response);
				component.set("v.emailNotFound", true);
			}
		});

		$A.enqueueAction(action);
	}
})