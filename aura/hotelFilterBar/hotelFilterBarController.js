({
	processFiltering : function(component, event, helper) {
		var minRating = component.get("v.minimumRating");
		var city = component.get("v.city");

		if(minRating == ''){
			minRating = null;
		}
		if(city == ''){
			city = null;
		}

		console.log("---");
		console.log("min Rating: " + minRating);
		console.log("city: " + city);
		console.log("---");

		var filtersEvent = $A.get("e.c:hotelFilters");
		filtersEvent.setParams({
			"rating" : minRating,
			"city" : city
		});
		filtersEvent.fire();
		console.log("Hotel Filters Event sent!");
	}
})