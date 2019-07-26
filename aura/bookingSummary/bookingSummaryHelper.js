({
	sendHeaderEvent : function(header, description) {
        let headerEvent = $A.get("e.c:hotelHeaderEvent");
        headerEvent.setParams({
            "header" : header,
            "description" : description
        });
        headerEvent.fire();
        console.log("* hotelHeaderEvent sent from bookingSummaryHelper *");
	}
})