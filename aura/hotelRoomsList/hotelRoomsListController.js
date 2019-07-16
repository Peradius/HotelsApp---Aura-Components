({
	receiveHotelData : function(component, event, helper) {
		console.log("Hotels Event received!");

		var hotelId = event.getParam("hotelId");
		var checkInDate = event.getParam("checkInDate");
		var checkOutDate = event.getParam("checkOutDate");
		var peopleInRoom = event.getParam("peopleInRoom");
		var maximumPrice = event.getParam("maximumPrice");
		var isExecutive = event.getParam("isExecutive");

		console.log("ReceiveHotelData hotelID: " + hotelId);
		console.log("ReceiveHotelData maximumPrice: " + maximumPrice);
		console.log("ReceiveHotelData peopleInRoom: " + peopleInRoom);
		console.log("ReceiveHotelData checkInDate: " + checkInDate);
		console.log("ReceiveHotelData checkOutDate: " + checkOutDate);

		helper.getRooms(component, hotelId, maximumPrice, peopleInRoom, checkInDate, checkOutDate);
	},

	bookThisRoom : function(component, event, helper) {
		var roomId = event.getSource().get("v.value").Id;
		console.log("Clicked: " + roomId);
		   
	}
})