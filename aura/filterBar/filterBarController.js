({
	processFiltering : function(component, event, helper) {
		var maxPrice = component.get("v.maximumPrice");
		var isExecutive = component.get("v.isExecutive");

		console.log("---");
		console.log("max Price: " + maxPrice);
		console.log("is Executive: " + isExecutive);
		console.log("---");

		var filtersEvent = $A.get("e.c:searchFilters");
		filtersEvent.setParams({
			"maximumPrice" : maxPrice,
			"isExecutive" : isExecutive
		});
		filtersEvent.fire();
		console.log("Filters Event sent!");
	}
})