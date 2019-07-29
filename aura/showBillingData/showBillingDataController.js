({
    handleReservationEvent : function(component, event, helper) {
        console.log("Retrieved reservation data in showBillingDataController");
        let reservation = event.getParam("reservation");
        component.set("v.reservation", reservation);

        helper.queryBilling(component, reservation);
    }
})