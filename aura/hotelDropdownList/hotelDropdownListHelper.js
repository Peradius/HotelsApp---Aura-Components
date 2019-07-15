({
	getHotelById : function(component, Id) {
		var action = component.get("c.getSingleHotel")
		action.setParams({
			"id" : Id
		});

		console.log("Id set");

		action.setCallback(this, function(response){
			var state = response.getState();
			if (state === "SUCCESS") {
				var hotel = action.getReturnValue();
				console.log("Hotel ID: " + hotel.Id);
				component.set("v.chosenHotel", hotel);
				console.log("Component set!");
			}
		});

		$A.enqueueAction(action);
	}
})