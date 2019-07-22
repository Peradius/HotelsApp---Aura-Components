({
	updateGuest : function(component, guest) {
		var action = component.get("c.updateGuest");
		action.setParams({
			"guest" : guest
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				component.set("v.guest", guest);
				this.sendGuestData(guest);
				this.closeModal(component);
			} else {
				console.log("Error updating guest");
				console.log(response);
				this.closeModal(component);
			}
		});
		$A.enqueueAction(action);
	},

	sendGuestData : function(guest) {
		var sendGuestDataEvent = $A.get("e.c:sendGuestData");
		console.log(guest.Phone__c);
		sendGuestDataEvent.setParams({
			"guest" : guest
		});
		sendGuestDataEvent.fire();
		console.log("Send Guest Data Event sent!");
	},

	closeModal : function(component) {
		var closeEvent = component.getEvent("showChangeUserDataModal");
		closeEvent.setParams({
			"showModal" : false
		});
		closeEvent.fire();
	}
})