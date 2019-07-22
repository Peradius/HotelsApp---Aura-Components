({
	updateFiltersTop : function(component, event, helper) {
		var hotelId = component.get("v.hotel").Id;
		var checkInDate = component.get("v.checkInDate");
		var checkOutDate = component.get("v.checkOutDate");
		var peopleInRoom = component.get("v.peopleInRoom");

		var isDateError = false;

		var todayDate = new Date();
		var day = todayDate.getDate();
        var month = todayDate.getMonth() + 1;
		var year = todayDate.getFullYear();
		
    	 // if date is less then 10, then append 0 before date   
        if(day < 10) {
            day = '0' + day;
        } 
   		 // if month is less then 10, then append 0 before date    
        if(month < 10) {
            month = '0' + month;
		}

		var todayDateFormatted = year + '-' + month + '-' + day;

		console.log("CheckInDate: " + checkInDate);
		console.log("CheckOutDate: " + checkOutDate);
		console.log("todayDate: " + todayDateFormatted);

		// First validation : is not null
		if(checkInDate == null || checkOutDate == null) {
			component.set("v.errorMessage", "Please select the dates!");
			isDateError = true;
		} else {
			// Second validation : CheckIn Date is today or in the future
			if(checkInDate < todayDateFormatted) {
				component.set("v.errorMessage", "Check In must be today or in the future!");
				isDateError = true;
			} else {
				//Third validation : Check out is at least one day later after CheckIn
				if(checkOutDate <= checkInDate) {
					component.set("v.errorMessage", "Check Out must be at least one day after Check In!");
					isDateError = true;
				} else {
					// Dates are valid
					isDateError = false;
					component.set("v.errorMessage", "");
				}
			}
		}

		if(!isDateError && peopleInRoom != null) {
			var filtersEvent = $A.get("e.c:basicFilters");
			filtersEvent.setParams({
				"hotelId" : hotelId,
				"checkInDate" : checkInDate,
				"checkOutDate" : checkOutDate,
				"peopleInRoom" : peopleInRoom
			});
			filtersEvent.fire();
			console.log("Basic Filters Event sent!");
		}

	}
})