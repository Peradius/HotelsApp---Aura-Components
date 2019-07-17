({
	receiveHotelData : function(component, event, helper) {
		var hotel = event.getParam("hotel");
		component.set("hotel", hotel);
	},

	receiveRoomData : function(component, event, helper) {
		var room = event.getParam("room");
		component.set("room", room);
	}
})