({
	receiveHotelData : function(component, event, helper) {
		var hotel = event.getParam("hotel");
		component.set("selectedHotel", hotel);
	},

	receiveRoomData : function(component, event, helper) {
		var room = event.getParam("room");
		component.set("selectedRoom", room);
	}


})