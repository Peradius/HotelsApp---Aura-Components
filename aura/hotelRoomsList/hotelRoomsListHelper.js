({
	handleBasticFilters : function(component, event) { 
		console.log("* basicFilters received in hotelRoomsList *");

		var hotelId = event.getParam("hotelId");
		var checkInDate = event.getParam("checkInDate");
		var checkOutDate = event.getParam("checkOutDate");
		var peopleInRoom = event.getParam("peopleInRoom");
		
		// Calculate num of days of guest's stay
		var startDate = new Date(checkInDate); 
    	var endDate = new Date(checkOutDate);
		var totalDays = (endDate - startDate) / 8.64e7;

		component.set("v.hotelId", hotelId);
		component.set("v.checkInDate", checkInDate);
		component.set("v.checkOutDate", checkOutDate);
		component.set("v.peopleInRoom", peopleInRoom);
		component.set("v.totalDays", totalDays);

		this.getRooms(component, hotelId, null, peopleInRoom, checkInDate, checkOutDate, null);
	},

	handleAdditionalFilters : function(component, event) {
		console.log("* searchFilters received in hotelRoomsList *");

		var hotelId = component.get("v.hotelId");
		var checkInDate = component.get("v.checkInDate");
		var checkOutDate = component.get("v.checkOutDate");
		var peopleInRoom = component.get("v.peopleInRoom");
		var maximumPrice = event.getParam("maximumPrice");
		var isExecutive = event.getParam("isExecutive");

		// Forces the maximumPrice to be null if the field is blank. 
		// That means the user will see all the available rooms
		if(maximumPrice == '') {
			maximumPrice = null;
		}

		helper.getRooms(component, hotelId, maximumPrice, peopleInRoom, checkInDate, checkOutDate, isExecutive);
	},

	getRooms : function(component, Id, maximumPrice, peopleInRoom, checkInDate, checkOutDate, isExecutive) {
		var action = component.get("c.getRooms");
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
				console.log("Success setting rooms in hotelRoomsList");
			} else {
				console.log("Error setting rooms");
			}
		});

		$A.enqueueAction(action);
	},

	handleBookRoom : function(component, event) {
		var room = event.getSource().get("v.value");

		this.sendRoomEvent(room);

		var checkIn = component.get("v.checkInDate");
		var checkOut = component.get("v.checkOutDate");
		var totalDays = component.get("v.totalDays");
		var totalPrice = totalDays * room.Price_for_Night__c;

		this.sendReservationEvent(checkIn, checkOut, totalPrice);
		this.sendPageTraverseEvent();
	},

	sendRoomEvent : function(room) {
		var sendRoomDataEvent = $A.get("e.c:sendRoomData");
		sendRoomDataEvent.setParams({
			"room" : room
		});
		sendRoomDataEvent.fire();
		console.log("* sendRoomData sent from hotelRoomsListHelper *");
	},

	sendReservationEvent : function(checkIn, checkOut, totalPrice) {
		var sendReservationDataEvent = $A.get("e.c:sendReservationData");
		sendReservationDataEvent.setParams({
			"checkIn" : checkIn, 
			"checkOut" : checkOut,
			"totalPrice" : totalPrice
		});
		sendReservationDataEvent.fire();
		console.log("* sendReservationData sent from hotelDropdownListHelper *");
	},

	sendPageTraverseEvent : function() {
		var traverseEvent = $A.get("e.c:pageTraverseEvent");
        traverseEvent.setParams({
            "pageOne" : false,
            "pageTwo" : false,
            "pageThree" : true,
            "pageFour" : false
        });
        traverseEvent.fire();
		console.log("* pageTraverseEvent sent from hotelDropdownListHelper *");
    }
})