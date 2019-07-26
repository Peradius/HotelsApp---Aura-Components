({
	confirm : function(component, event, helper) {
		helper.handleConfirm(component);
	}, 
	
	cancel : function(component, event, helper) {
		helper.closeModal(component);
	}
})