({
	processFiltering : function(component, event, helper) {
		var checkInDate = component.get("v.checkInDate");
		var checkOutDate = component.get("v.checkOutDate");
		var singleBeds = component.get("v.singleBedsNum");
		var doubleBeds = component.get("v.doubleBedsNum");
		var minPrice = component.get("v.minimumPrice");
		var maxPrice = component.get("v.maximumPrice");
		var isExecutive = component.get("v.isExecutive");

		console.log("Check-In date: " + checkInDate);
		console.log("Check-Out date: " + checkOutDate);
		console.log("Single beds: " + singleBeds);
		console.log("Double beds: " + doubleBeds);
		console.log("min Price: " + minPrice);
		console.log("max Price: " + maxPrice);
		console.log("is Executive: " + isExecutive);

		var filtersEvent = $A.get("e.c:searchFilters");
		filtersEvent.setParams({
			"checkInDate" : checkInDate,
			"checkOutDate" : checkOutDate,
			"singleBedsNum" : singleBeds,
			"doubleBedsNum" : doubleBeds,
			"minimumPrice" : minPrice,
			"maximumPrice" : maxPrice,
			"isExecutive" : isExecutive
		});
		filtersEvent.fire();
		console.log("Filters Event sent!");
	}
})