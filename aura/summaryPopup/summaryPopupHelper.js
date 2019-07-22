({
    showPopupHelper: function(component, componentId, className){
        var modal = component.find(componentId);
        $A.util.removeClass(modal, className + 'hide');
        $A.util.addClass(modal, className + 'open');
    },
    
    hidePopupHelper: function(component, componentId, className){
        var modal = component.find(componentId);
        $A.util.addClass(modal, className+'hide');
        $A.util.removeClass(modal, className+'open');
        component.set("v.body", "");
    },

    createReservation : function(component, guest, room, checkIn, checkOut, totalPrice) {
        var action = component.get("c.createReservation");
        action.setParams({
            "guest" : guest,
            "room" : room,
            "checkIn" : checkIn,
            "checkOut" : checkOut,
            "totalPrice" : totalPrice
        });

        action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				console.log("Reservation inserted!");
			} else {
				console.log("Error setting guests");
				console.log(response);
			}
		});
        $A.enqueueAction(action);
    }
})