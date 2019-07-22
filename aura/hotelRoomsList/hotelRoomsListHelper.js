({
	getRooms : function(component, Id, maximumPrice, peopleInRoom, checkInDate, checkOutDate, isExecutive) {
		var action = component.get("c.getRooms")
		action.setParams({
			"hotelId" : Id,
			"maxPrice" : maximumPrice,
			"peopleInRoom" : peopleInRoom,
			"checkIn" : checkInDate,
			"checkOut" : checkOutDate,
			"isExecutive" : isExecutive
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				var rooms = action.getReturnValue();
				component.set("v.rooms", rooms);
				console.log("Component(Rooms) set!");
			} else {
				console.log("Error setting rooms");
			}
		});

		$A.enqueueAction(action);
	}
})