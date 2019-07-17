({
	receiveBasicFilterData : function(component, event, helper) {
		console.log("Basic Filter Data Event received!");

		var hotelId = event.getParam("hotelId");
		var checkInDate = event.getParam("checkInDate");
		var checkOutDate = event.getParam("checkOutDate");
		var peopleInRoom = event.getParam("peopleInRoom");
		
		var startDate = new Date(checkInDate); 
    	var endDate = new Date(checkOutDate);
		var totalDays = (endDate - startDate) / 8.64e7;
		console.log("Days: " + totalDays);

		console.log("receiveBasicFilterData hotelId: " + hotelId);
		console.log("receiveBasicFilterData checkInDate: " + checkInDate);
		console.log("receiveBasicFilterData checkInDate: " + checkOutDate);

		component.set("v.hotelId", hotelId);
		component.set("v.checkInDate", checkInDate);
		component.set("v.checkOutDate", checkOutDate);
		component.set("v.peopleInRoom", peopleInRoom);
		component.set("v.totalDays", totalDays);



		helper.getRooms(component, hotelId, null, peopleInRoom, checkInDate, checkOutDate);
	},

	receiveAdditionalFilterData : function(component, event, helper) {
		console.log("Additional Filters Data Event received!");

		var hotelId = component.get("v.hotelId");
		var checkInDate = component.get("v.checkInDate");
		var checkOutDate = component.get("v.checkOutDate");
		var peopleInRoom = component.get("v.peopleInRoom");

		var maximumPrice = event.getParam("maximumPrice");
		// Forces the maximumPrice to be null if the field is blank. That means the user will see all the available rooms
		if(maximumPrice == '') {
			maximumPrice = null;
		}
		var isExecutive = event.getParam("isExecutive");

		console.log("ReceiveAdditionalFilterData maximumPrice: " + maximumPrice);

		helper.getRooms(component, hotelId, maximumPrice, peopleInRoom, checkInDate, checkOutDate);
	},

	bookThisRoom : function(component, event, helper) {
		var room = event.getSource().get("v.value");
		helper.sendEvent(room);
	}
})