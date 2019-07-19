({
    handleGuestDataEvent :  function(component, event, helper){
		console.log("I have received the guest data in user menu");
		var guest = event.getParam("guest");
		console.log(guest.First_Name__c);
		component.set("v.guest", guest);
		component.set("v.loggedIn", "true");
		helper.queryReservations(component, guest);
    }
})