({
	showFinances : function(component, event, helper) {
		var reservation = event.getSource().get("v.value");
		component.set("v.reservation", reservation);
		
		helper.queryBilling(component, reservation);
	}
})