({
    confirmBooking : function(component, event, helper) {
        var guest = component.get("v.guest");
        var room = component.get("v.room");
        var checkIn = component.get("v.checkIn");
        var checkOut = component.get("v.checkOut");
        var totalPrice = component.get("v.totalPrice");

        helper.createReservation(component, guest, room, checkIn, checkOut, totalPrice);

        alert("Reservation successful!");
        var traverseEvent = $A.get("e.c:pageTraverseEvent");
        traverseEvent.setParams({
            "pageOne" : true,
            "pageTwo" : false,
            "pageThree" : false,
            "pageFour" : false
        });
        traverseEvent.fire();
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