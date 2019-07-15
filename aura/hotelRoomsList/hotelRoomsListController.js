({
	receiveHotelData : function(component, event, helper) {
		console.log("Hotels Event received!");

		var hotel = event.getParam("hotelId");
		var checkInDate = event.getParam("checkInDate");
		var checkOutDate = event.getParam("checkOutDate");
		var peopleInRoom = event.getParam("peopleInRoom");
		var maximumPrice = event.getParam("maximumPrice");
		var isExecutive = event.getParam("isExecutive");

		console.log("ReceiveHotelData hotelID: " + hotel);
		console.log("ReceiveHotelData maximumPrice: " + maximumPrice);
		console.log("ReceiveHotelData peopleInRoom: " + peopleInRoom);

		helper.getRooms(component, hotel, maximumPrice, peopleInRoom);
	},

	receiveFiltersData : function(component, event, helper) {
		console.log("Filters Event received!");
	},

	roomClicked : function(component, event, helper) {
		var roomId = event.getSource().get("v.value").Id;
		console.log("Clicked: " + roomId);
	}
})