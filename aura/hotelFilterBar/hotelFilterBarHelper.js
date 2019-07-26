({
	processFiltering : function(component) {
		var minRating = component.get("v.minimumRating");
		var city = component.get("v.city");

		if(minRating == ''){
			minRating = null;
		}
		if(city == ''){
			city = null;
		}

		console.log("** Hotel Filters Values **");
		console.log("min Rating: " + minRating);
		console.log("city: " + city);
		console.log("**");

		this.sendHotelFiltersEvent();
	},

	sendHotelFiltersEvent : function() {
		var filtersEvent = $A.get("e.c:hotelFilters");
		filtersEvent.setParams({
			"rating" : minRating,
			"city" : city
		});
		filtersEvent.fire();
		console.log("* hotelFilters sent from hotelFilterBarHelper *");
	}
})