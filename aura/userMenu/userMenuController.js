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
	
	clickReservation : function(component, event, helper) {
		helper.handleClickReservation(component, event);
	},

	orderClicked : function(component, event, helper) {
		helper.orderService(component, event);
	},

	showBilling : function(component, event, helper) {
		component.set("v.showBillingPage", true);
	},

	changeUserData :  function(component, event, helper) {
		component.set("v.showUserChangeData", true);
	}
})