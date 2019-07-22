({
    doInit: function(component, event, helper) {
        var headerEvent = $A.get("e.c:hotelHeaderEvent");
        headerEvent.setParams({
            "header" : "HotelApp",
            "description" : "Book a Room"
        });
        headerEvent.fire();
    }
})