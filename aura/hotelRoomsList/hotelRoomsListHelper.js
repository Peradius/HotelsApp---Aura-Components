({
	getRooms : function(component, Id, maximumPrice, peopleInRoom) {
		var action = component.get("c.getRooms")
		action.setParams({
			"id" : Id,
			"maxPrice" : maximumPrice,
			"peopleInRoom" : peopleInRoom
		});

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				var rooms = action.getReturnValue();
				component.set("v.rooms", rooms);
				console.log("Component(Rooms) set!");
			}
		});

		$A.enqueueAction(action);
	},

	bookTheRoom : function(Id) {
		
	}
})