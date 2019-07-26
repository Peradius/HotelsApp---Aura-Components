({
    handleAdditionalHotelFilters : function(component, event) {
        console.log("* hotelFilters in hotelDropdownList received *");

        var rating = event.getParam("rating");
        var city = event.getParam("city");
        
        component.set("v.minimumRating", rating);
        component.set("v.city", city);

        this.queryHotels(component, rating, city);
    },

    queryHotels : function(component, rating, city) {
        // Lowest rating to show all hotels
        if(rating == null) {
            rating = 1;
        }

        var action = component.get("c.getHotels");
        action.setParams({
            "rating" : rating,
            "city" : city
        })
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var hotels = response.getReturnValue();
                component.set("v.hotels", hotels);
                console.log("Success setting hotels in hotelDropdownList");
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },

    handleSelectHotel : function(event) {
        var selectedHotel = event.getSource().get("v.value");

        this.sendHotelDataEvent(selectedHotel);
        this.sendPageTraverseEvent();      
    },

    sendHotelDataEvent : function(hotel) {
        var hotelEvent = $A.get("e.c:sendHotelData");
		hotelEvent.setParams({
			"hotel" : hotel
		});
        hotelEvent.fire();
        console.log("* sendHotelData sent from hotelDropdownListHelper *");
    },

    sendPageTraverseEvent : function() {
        var traverseEvent = $A.get("e.c:pageTraverseEvent");
        traverseEvent.setParams({
            "pageOne" : false,
            "pageTwo" : true,
            "pageThree" : false,
            "pageFour" : false
        });
        traverseEvent.fire();
		console.log("* pageTraverseEvent sent from hotelDropdownListHelper *");
    }
})