({
	receiveBasicFilterData : function(component, event, helper) {
		helper.handleBasticFilters(component, event);
	},

	receiveAdditionalFilterData : function(component, event, helper) {
		helper.handleAdditionalFilters(component, event);
	},

	bookThisRoom : function(component, event, helper) {
		helper.handleBookRoom(component, event);
	}
})