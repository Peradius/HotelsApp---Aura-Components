({
	handleConfirm : function(component) {
		var validGuest = component.find('guestform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validGuest){
            // update an existing guest
			var guest = component.get("v.guest");
           	this.updateGuest(component, guest);
		}
	},

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
		console.log("* sendGuestData sent from changeUserDataModalHelper *");
	},

	closeModal : function(component) {
		var closeEvent = component.getEvent("showChangeUserDataModal");
		closeEvent.setParams({
			"showModal" : false
		});
		closeEvent.fire();
		console.log("* showChangeUserDataModal sent from changeUserDataModalHelper *");
	}
})