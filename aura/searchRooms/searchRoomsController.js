({
	doInit: function(component, event, helper) {
		helper.sendHeaderEvent("HotelApp", "Select a Room");
	},
	
	updateFiltersTop : function(component, event, helper) {
		helper.updateBasicFilters(component);
	}
})