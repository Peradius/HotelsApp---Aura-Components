({
    handleGuestDataEvent :  function(component, event, helper){
		var guest = event.getParam("guest");
		console.log(guest.First_Name__c);
		component.set("v.guest", guest);
		component.set("v.loggedIn", "true");
		helper.queryReservations(component, guest);
	},

	handleChangeUserDataModal : function(component, event, helper) {
		var value = event.getParam("showModal");
		component.set("v.showUserChangeData", value);
	},

	showBilling : function(component, event, helper) {
		component.set("v.showBillingData", true);
	},
	
	clickReservation : function(component, event, helper) {
		var reservation = event.getSource().get("v.value");
		component.set("v.reservation", reservation);
		component.set("v.showReservationDetails", "true");
		helper.queryServices(component, reservation.Id);
	},

	orderService : function(component, event, helper) {
		var service = event.getSource().get("v.value");
		console.log("Service clicked: " + service.Id);
		var reservation = component.get("v.reservation");
		helper.orderService(component, reservation, service);
	},

	changeUserData :  function(component, event, helper) {
		component.set("v.showUserChangeData", true);
	}
})