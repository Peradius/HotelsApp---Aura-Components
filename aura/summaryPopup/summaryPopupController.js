({
    handleHotelDataEvent :  function(component, event, helper){
        console.log("* sendHotelData received in summaryPopupController *");

        var hotel = event.getParam("hotel");
        component.set("v.hotel", hotel);
    },

    handleRoomDataEvent :  function(component, event, helper){
        console.log("* sendRoomData received in summaryPopupController *");

        var room = event.getParam("room");
        component.set("v.room", room);
    },

    handleGuestDataEvent :  function(component, event, helper){
        console.log("* sendGuestData received in summaryPopupController *");

        var guest = event.getParam("guest");
        component.set("v.guest", guest);
    },

    handleReservationDataEvent :  function(component, event, helper){
        console.log("* sendReservationData received in summaryPopupController *");

        var checkIn = event.getParam("checkIn");
        var checkOut = event.getParam("checkOut");

        component.set("v.checkIn", checkIn);
        component.set("v.checkOut", checkOut);
    },

    confirmBooking : function(component, event, helper) {
        helper.handleConfirmBooking(component);
    },

    cancelBooking : function(component, event, helper) {
        helper.sendTraverseEvent(false, true);
    }
})