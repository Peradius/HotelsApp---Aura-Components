({
	doInit: function(component, event, helper) {
        helper.queryHotels(component, null, null);
    },
    
    selectHotel: function(component, event, helper) {
        helper.handleSelectHotel(event);
    },

    handleHotelFilters : function(component, event, helper) {
        helper.handleAdditionalHotelFilters(component, event);
    }
})