({
	handleGuestEvent : function(component, event, helper) {
		var guest = event.getParam("guest");
		component.set("v.guest", guest);
		console.log("Guest Data received!")
		console.log("Guest name: " + guest.First_Name__c)
	},

	handleRoomEvent : function(component, event, helper) {
		var room = event.getParam("room");
		component.set("v.room", room);
		console.log("Room Data received!");
		console.log("Room number: " + room.Name);
	}
})