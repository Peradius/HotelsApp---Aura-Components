({
    queryHotels : function(component, rating, city) {
        var action = component.get("c.getHotels");
        action.setParams({
            "rating" : rating,
            "city" : city
        })
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
    }
})