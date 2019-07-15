({
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
    
    selectHotel: function(component, event, helper) {
        var selectedHotel = event.getSource().get("v.value");
        helper.getHotelById(component, selectedHotel);

        var hotelEvent = $A.get("e.c:sendHotelData");
		hotelEvent.setParams({
			"hotel" : selectedHotel
		});
		hotelEvent.fire();
		console.log("Hotel Event from hotelDropdownListController sent!");
    }
})