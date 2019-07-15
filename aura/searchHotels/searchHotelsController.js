({
    fetchData: function(component, event, helper) {
       // Create the action
       var action = component.get("c.getRooms");
       var hotelDropList = component.find("hotelDropList");


       var hotelID = hotelDropList.get("v.Hotel__c.Id");

       
       action.setParams({Id : hotelID});
       // Add callback behavior for when response is received
       action.setCallback(this, function(response) {
           var state = response.getState();
           if (state === "SUCCESS") {
               component.set("v.rooms", response.getReturnValue());
           }
           else {
               console.log("Failed with state: " + state);
           }
       });
       // Send action off to be executed
       $A.enqueueAction(action);
    },
    
    // Load hotels from Salesforce
    doInit: function(component, event, helper) {
        // Create the action
        var action = component.get("c.getHotels");
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.hotels", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        // Send action off to be executed
        $A.enqueueAction(action);
    },


})