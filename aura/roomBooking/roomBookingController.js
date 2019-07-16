({
	handleGuestEvent : function(component, event, helper) {
		var guest = event.getParam("guest");
		component.set("v.guest", guest);
		console.log("Guest Data received!")
		console.log("Guest name: " + guest.First_Name__c)
		
		// We don't care about the room data, because guest data is sent
		// when a room is selected, therefore we assume the room data
		// is always here when guest data comes with event
		component.set("v.receivedAllData", true);

	},

	handleRoomEvent : function(component, event, helper) {
		var room = event.getParam("room");
		component.set("v.room", room);
		console.log("Room Data received!");
		console.log("Room number: " + room.Name);
	}
})