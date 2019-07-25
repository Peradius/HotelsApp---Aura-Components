({
	createGuest : function(component, guest) {
		var action = component.get("c.createGuest");
		action.setParams({
			"guest" : guest
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				var newGuest = response.getReturnValue();
				console.log("Inserted Guest Id " + newGuest.Id);
				component.set("v.guest", newGuest);
				this.sendGuestData(newGuest);
				this.sendPageTraverseEvent(component);
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
			console.log(state);
			if (state === "SUCCESS") {
				console.log("Email found!");
				var guest = response.getReturnValue();
				component.set("v.guest", guest);
				component.set("v.emailNotFound", false);
				this.sendPageTraverseEvent(component);
				this.sendGuestData(guest);
				
			} else {
				console.log("Email " + emailValue + " not found!");
				console.log(response);
				component.set("v.emailNotFound", true);
			}
		});

		$A.enqueueAction(action);
	},

	sendGuestData : function(guest) {
		var sendGuestDataEvent = $A.get("e.c:sendGuestData");
		console.log(guest.Id);
		sendGuestDataEvent.setParams({
			"guest" : guest
		});
		sendGuestDataEvent.fire();
		console.log("Send Guest Data Event sent!");
	},

	sendPageTraverseEvent : function() {
        var traverseEvent = $A.get("e.c:pageTraverseEvent");
        traverseEvent.setParams({
            "pageOne" : false,
            "pageTwo" : false,
            "pageThree" : false,
            "pageFour" : true
        });
		traverseEvent.fire();
		console.log("Traverse Event sent!");
    }
})