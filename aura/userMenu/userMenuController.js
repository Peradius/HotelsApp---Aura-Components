({
    handleGuestDataEvent :  function(component, event, helper){
		helper.handleGuestData(component, event);
	},

	handleChangeUserDataModal : function(component, event, helper) {
		console.log("* showChangeUserDataModal received in userMenuHelper *");

		var value = event.getParam("showModal");
		component.set("v.showUserChangeData", value);
	},

	handleShowBilling : function(component, event, helper) {
		console.log("* billingTraverseEvent received in userMenuHelper *");

		var value = event.getParam("showBillingPage");
		component.set("v.showBillingPage", value);
	},

	handleShowReservationDetails : function(component, event, helper) {
		console.log("* showReservationDetailsEvent received in userMenuHelper *");

		var value = event.getParam("showReservationDetails");
		component.set("v.showReservationDetails", value);
	},

	showBilling : function(component, event, helper) {
		component.set("v.showBillingPage", true);
	},

	changeUserData :  function(component, event, helper) {
		component.set("v.showUserChangeData", true);
	}
})