({
	handleServicesDataEvent :  function(component, event, helper){
		helper.handleServiceData(component, event);
	},

	orderClicked : function(component, event, helper) {
		helper.orderService(component, event);
	}
})