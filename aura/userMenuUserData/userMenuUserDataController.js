({
	changeUserData :  function(component, event, helper) {
		component.set("v.showUserChangeData", true);
	},

	showBilling : function(component, event, helper) {
		helper.sendShowBillingPage(component);
	},

	handleChangeUserDataModal : function(component, event, helper) {
		console.log("* showChangeUserDataModal received in userMenuHelper *");

		var value = event.getParam("showModal");
		component.set("v.showUserChangeData", value);
	},
})