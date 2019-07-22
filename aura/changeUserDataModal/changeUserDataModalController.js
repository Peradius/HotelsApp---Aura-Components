({
	confirm : function(component, event, helper) {
		console.log("Confirm clicked!");
		var validGuest = component.find('guestform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validGuest){
            // update an existing guest
			var guest = component.get("v.guest");
			console.log("Calling the helper");
            helper.updateGuest(component, guest);
		}
	}, 
	
	cancel : function(component, event, helper) {
		helper.closeModal(component);
	}
})