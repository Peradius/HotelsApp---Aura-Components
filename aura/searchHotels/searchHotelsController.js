({
    doInit: function(component, event, helper) {
        var headerEvent = $A.get("e.c:hotelHeaderEvent");
        headerEvent.setParams({
            "header" : "HotelApp",
            "description" : "Select a Hotel"
        });
        headerEvent.fire();
    }
})