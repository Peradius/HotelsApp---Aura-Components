({
	receiveHotelData : function(component, event, helper) {
		console.log("Hotels Event received!");
		var receivedHotel = event.getParam("hotel");
		// var maxPrice = event.getParam("maximumPrice");
		console.log("ReceiveHotelData hotelID: " + receivedHotel);
		// console.log("ReceiveFiltersData maximumPrice: " + maxPrice);

		helper.getRooms(component, receivedHotel);
	},

	receiveFiltersData : function(component, event, helper) {
		console.log("Filters Event received!");
	},

	roomClicked : function(component, event, helper) {
		var roomId = event.getSource().get("v.value").Id;
		console.log("Clicked: " + roomId);
	}
})