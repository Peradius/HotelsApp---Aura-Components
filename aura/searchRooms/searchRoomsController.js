({
	updateFiltersTop : function(component, event, helper) {
		console.log(component.get("v.hotel").Id);
		console.log(component.get("v.checkInDate"));
		console.log(component.get("v.checkOutDate"));
		console.log(component.get("v.peopleInRoom"));
		var source = event.getSource();
		console.log(source.get("v.value"));

		var hotelId = component.get("v.hotel").Id;
		var checkInDate = component.get("v.checkInDate");
		var checkOutDate = component.get("v.checkOutDate");
		var peopleInRoom = component.get("v.peopleInRoom");
		
		if(checkInDate != null && checkOutDate != null && peopleInRoom != null) {
			var filtersEvent = $A.get("e.c:basicFilters");
			filtersEvent.setParams({
				"hotelId" : hotelId,
				"checkInDate" : checkInDate,
				"checkOutDate" : checkOutDate,
				"peopleInRoom" : peopleInRoom
			});
			filtersEvent.fire();
			console.log("Basic Filters Event sent!");
		}
	}
})