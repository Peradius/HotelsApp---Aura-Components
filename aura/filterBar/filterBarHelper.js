({
	processFiltering : function(component) {
        var maxPrice = component.get("v.maximumPrice");
		var isExecutive = component.get("v.isExecutive");

		console.log("** Additional Room Filters Values **");
		console.log("max Price: " + maxPrice);
		console.log("is Executive: " + isExecutive);
		console.log("**");

        // If not checked, then it's null
		if(!isExecutive) {
			isExecutive = null;
		}

		this.sendFiltersEvent();
	},

	handleCheckboxChange : function(component, event) {
		var value = event.getSource().get('v.checked');
		if(!value) {
			value = null;
		}
		component.set("v.isExecutive", value);
	},

	sendFiltersEvent : function() {
		var filtersEvent = $A.get("e.c:searchFilters");
		filtersEvent.setParams({
			"maximumPrice" : maxPrice,
			"isExecutive" : isExecutive
		});
		filtersEvent.fire();
		console.log("* searchFilters sent from filterBarHelper *");
	}
})