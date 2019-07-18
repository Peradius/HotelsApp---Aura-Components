({
    handleHotelDataEvent :  function(component, event, helper){
        var hotel = event.getParam("hotel");
        component.set("v.hotel", hotel);
    },

    handleRoomDataEvent :  function(component, event, helper){
        var room = event.getParam("room");
        component.set("v.room", room);
    },

    handleGuestDataEvent :  function(component, event, helper){
        var guest = event.getParam("guest");
        component.set("v.guest", guest);
    },

    confirmBooking : function(component, event, helper) {
        console.log("Booking to Salesforce!");
    },

    cancelBooking : function(component, event, helper) {
        var traverseEvent = $A.get("e.c:pageTraverseEvent");
        traverseEvent.setParams({
            "pageOne" : false,
            "pageTwo" : false,
            "pageThree" : true,
            "pageFour" : false
        });
        traverseEvent.fire();
    }
})