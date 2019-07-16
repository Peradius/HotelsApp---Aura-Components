({
	getRooms : function(component, Id, maximumPrice, peopleInRoom, checkInDate, checkOutDate) {
		var action = component.get("c.getRooms")
		action.setParams({
			"hotelId" : Id,
			"maxPrice" : maximumPrice,
			"peopleInRoom" : peopleInRoom,
			"checkIn" : checkInDate,
			"checkOut" : checkOutDate
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
	},

	sendEvent : function(room) {
		var sendRoomDataEvent = $A.get("e.c:sendRoomData");
		console.log("sendRoomData room: " + room.Single_Beds__c);
		sendRoomDataEvent.setParams({
			"room" : room
		});
		sendRoomDataEvent.fire();
		console.log("Send Room Data Event sent!");
	}
})