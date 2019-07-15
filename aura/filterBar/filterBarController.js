({
	handleHotelEvent : function(component, event) {
		var hotel = event.getParam("hotel");
		component.set("v.hotel", hotel);
		console.log("Hotel in filterBarController set!");
	},

	processFiltering : function(component, event, helper) {
		var hotel = component.get("v.hotel");
		var checkInDate = component.get("v.checkInDate");
		var checkOutDate = component.get("v.checkOutDate");
		var peopleInRoom = component.get("v.peopleInRoom");
		var maxPrice = component.get("v.maximumPrice");
		var isExecutive = component.get("v.isExecutive");

		console.log("---");
		console.log("hotel ID: " + hotel);
		console.log("Check-In date: " + checkInDate);
		console.log("Check-Out date: " + checkOutDate);
		console.log("People in the room: " + peopleInRoom);
		console.log("max Price: " + maxPrice);
		console.log("is Executive: " + isExecutive);
		console.log("---");

		var filtersEvent = $A.get("e.c:searchFilters");
		filtersEvent.setParams({
			"hotelId" : hotel,
			"checkInDate" : checkInDate,
			"checkOutDate" : checkOutDate,
			"peopleInRoom" : peopleInRoom,
			"maximumPrice" : maxPrice,
			"isExecutive" : isExecutive
		});
		filtersEvent.fire();
		console.log("Filters Event sent!");
	}
})