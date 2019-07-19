({
    handleGuestDataEvent :  function(component, event, helper){
		console.log("I have received the guest data in user menu");
		var guest = event.getParam("guest");
		console.log(guest.First_Name__c);
		component.set("v.guest", guest);
		component.set("v.loggedIn", "true");
		helper.queryReservations(component, guest);
	},
	
	clickReservation : function(component, event, helper) {
		var reservationId = event.getSource().get("v.value").Id;
		component.set("v.showReservationDetails", "true");
		console.log(component.get("v.guest").Charge__c);
		helper.queryServices(component, reservationId);
	},

	orderService : function(component, event, helper) {
		var service = event.getSource().get("v.value");
		console.log("Service clicked: " + service.Id);
		var guest = component.get("v.guest");
		helper.orderService(component, guest, service);
	}
})