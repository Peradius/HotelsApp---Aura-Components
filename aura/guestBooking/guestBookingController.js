({
    submitNewGuest : function(component, event, helper) {
        helper.handleNewGuest(component);
    },

    submitEmail : function(component, event, helper) {
        helper.findEmail(component);
    },

    switchToggle : function(component, event, helper) {
        var toggleValue = component.find("accountToggle");
        component.set("v.newGuestsAccount", toggleValue);
    }
})