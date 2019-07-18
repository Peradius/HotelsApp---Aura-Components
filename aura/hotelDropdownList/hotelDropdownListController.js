({
	doInit: function(component, event, helper) {
        helper.queryHotels(component, null, null);
    },
    
    selectHotel: function(component, event, helper) {
        var selectedHotel = event.getSource().get("v.value");

        var hotelEvent = $A.get("e.c:sendHotelData");
		hotelEvent.setParams({
			"hotel" : selectedHotel
		});
        hotelEvent.fire();
        console.log("Hotel Event from hotelDropdownListController sent!");
        
        var traverseEvent = $A.get("e.c:pageTraverseEvent");
        traverseEvent.setParams({
            "pageOne" : false,
            "pageTwo" : true,
            "pageThree" : false,
            "pageFour" : false
        });
        traverseEvent.fire();
		console.log("Page Traverse Event from hotelDropdownListController sent!");
    },

    handleHotelFilters : function(component, event, helper) {
        var rating = event.getParam("rating");
        var city = event.getParam("city");
        
        component.set("v.minimumRating", rating);
        component.set("v.city", city);

        helper.queryHotels(component, rating, city);
    }
})