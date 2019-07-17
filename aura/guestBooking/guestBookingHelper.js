({
	sendGuestData : function(component) {
		var sendGuestDataEvent = $A.get("e.c:sendGuestData");
		var guest = component.get("v.guest");
		console.log("sendGuestData guest: " + guest.First_Name__c);
		sendGuestDataEvent.setParams({
			"guest" : guest
		});
		sendGuestDataEvent.fire();
		console.log("Send Guest Data Event sent!");
	},

	createGuest : function(component, guest) {
		var action = component.get("c.createGuest");
		action.setParams({
			"guest" : guest
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				console.log("Component(Guest) set!");
				console.log("Guest name " + guest.First_Name__c);
				component.set("v.guest", guest);
				this.sendGuestData(component);
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
				component.set("v.guest", response.getReturnValue());
				component.set("v.emailNotFound", false);
				this.sendGuestData(component);
			} else {
				console.log("Email " + emailValue + " not found!");
				console.log(response);
				component.set("v.emailNotFound", true);
			}
		});

		$A.enqueueAction(action);
	}
})