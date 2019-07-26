({
	filterClicked : function(component, event, helper) {
        helper.processFiltering(component);
	},

	checkboxChange : function(component, event, helper) {
		helper.handleCheckboxChange(component, event);
	}
})