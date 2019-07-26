({
    handleConfirmBooking : function(component) {
        var guest = component.get("v.guest");
        var room = component.get("v.room");
        var checkIn = component.get("v.checkIn");
        var checkOut = component.get("v.checkOut");

        this.createReservation(component, guest, room, checkIn, checkOut);
        this.sendTraverseEvent(true, false);
        alert("Reservation successful!");
    },

    sendTraverseEvent : function(pageOne, pageThree) {
        let traverseEvent = $A.get("e.c:pageTraverseEvent");
        traverseEvent.setParams({
            "pageOne" : pageOne,
            "pageTwo" : false,
            "pageThree" : pageThree,
            "pageFour" : false
        });
        traverseEvent.fire();
        console.log("* pageTraverseEvent sent from summaryPopupHelper *");
    },

    createReservation : function(component, guest, room, checkIn, checkOut) {
        var action = component.get("c.createReservation");
        action.setParams({
            "guest" : guest,
            "room" : room,
            "checkIn" : checkIn,
            "checkOut" : checkOut
        });

		$A.enqueueAction(action);
    }
})