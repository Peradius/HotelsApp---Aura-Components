({
    createNewGuest : function(component, event, helper) {
        var validGuest = component.find('guestform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validGuest){
            // Create new guest
            var newGuest = component.get("v.newGuest");
            helper.createGuest(component, newGuest);
        }
    }
})