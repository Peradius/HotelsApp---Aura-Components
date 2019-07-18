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
            this.sendPageTraverseEvent();
        }
    },

    checkForEmail : function(component, event, helper) {
        var emailValue = component.get("v.email");
        console.log("Entered email: " + emailValue);
        helper.findEmail(component, emailValue);
        this.sendPageTraverseEvent();
    },

    switchToggle : function(component, event, helper) {
        var toggleValue = component.find("accountToggle");
        component.set("v.newGuestsAccount", toggleValue);
    },

    sendPageTraverseEvent : function(component, event, helper) {
        var traverseEvent = $A.get("e.c:pageTraverseEvent");
        traverseEvent.setParams({
            "pageOne" : false,
            "pageTwo" : false,
            "pageThree" : false,
            "pageFour" : true
        });
        traverseEvent.fire();
    }
})