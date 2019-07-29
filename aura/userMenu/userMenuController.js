({
    handleGuestDataEvent :  function(component, event, helper){
		helper.handleGuestData(component, event);
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

	handleshowBillingPageEvent : function(component, event, helper) {
		console.log("* showBillingPage received in userMenuHelper *");

		var value = event.getParam("showPage");
		component.set("v.showBillingPage", value);
	}
})