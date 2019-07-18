({
	receiveHotelData : function(component, event, helper) {
		var hotel = event.getParam("hotel");
		component.set("v.hotel", hotel);
	},

	receiveRoomData : function(component, event, helper) {
		var room = event.getParam("room");
		component.set("v.room", room);
	}
})