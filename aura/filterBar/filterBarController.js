({
	processFiltering : function(component, event, helper) {
		var maxPrice = component.get("v.maximumPrice");
		var isExecutive = component.get("v.isExecutive");

		console.log("---");
		console.log("max Price: " + maxPrice);
		console.log("is Executive: " + isExecutive);
		console.log("---");

		if(!isExecutive) {
			isExecutive = null;
		}

		console.log("is " + isExecutive);

		var filtersEvent = $A.get("e.c:searchFilters");
		filtersEvent.setParams({
			"maximumPrice" : maxPrice,
			"isExecutive" : isExecutive
		});
		filtersEvent.fire();
		console.log("Filters Event sent!");
	},

	checkboxChange : function(component, event, helper) {
		var value = event.getSource().get('v.checked');
		if(!value) {
			value = null;
		}
		component.set("v.isExecutive", value);
	}
})