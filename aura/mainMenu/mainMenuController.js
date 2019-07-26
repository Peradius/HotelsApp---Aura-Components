({
	handlePageTraverseEvent : function(component, event, helper) {
		helper.handlePageTraverse(component, event);
	},

	handleReservationDataEvent :  function(component, event, helper){
		helper.handleReservationData(component, event);
    },
	
	handleHotelDataEvent : function(component, event, helper) {
		console.log("* sendHotelData received in mainMenuController *");

		var hotel = event.getParam("hotel");
		component.set("v.hotel", hotel);
	},

	handleRoomDataEvent : function(component, event, helper) {
		console.log("* sendRoomData received in mainMenuController *");

		var room = event.getParam("room");
		component.set("v.room", room);
	},

	handleGuestDataEvent : function(component, event, helper) {
		console.log("* sendGuestData received in mainMenuController *");

		var guest = event.getParam("guest");
		component.set("v.guest", guest);
	}
})