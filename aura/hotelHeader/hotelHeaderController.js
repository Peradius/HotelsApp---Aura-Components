({
	handleHotelHeader : function(component, event, helper) {
		var header = event.getParam("header");
		var description = event.getParam("description");

		component.set("v.header", header);
		component.set("v.description", description);
	}
})