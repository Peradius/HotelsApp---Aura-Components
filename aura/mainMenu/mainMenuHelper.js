({
	handlePageTraverse : function(component, event) {
		console.log("* basicFilters received in hotelRoomsList *");

		var pageOne = event.getParam("pageOne");
		var pageTwo = event.getParam("pageTwo");
		var pageThree = event.getParam("pageThree");
		var pageFour = event.getParam("pageFour");

		component.set("v.pageOneOpened", pageOne);
		component.set("v.pageTwoOpened", pageTwo);
		component.set("v.pageThreeOpened", pageThree);
		component.set("v.pageFourOpened", pageFour);
	},

	handleReservationData : function(component, event) {
		console.log("* sendReservationData received in hotelRoomsList *");

		var checkIn = event.getParam("checkIn");
		var checkOut = event.getParam("checkOut");
		var totalPrice = event.getParam("totalPrice");

        component.set("v.checkIn", checkIn);
		component.set("v.checkOut", checkOut);
		component.set("v.totalPrice", totalPrice);
	}
})