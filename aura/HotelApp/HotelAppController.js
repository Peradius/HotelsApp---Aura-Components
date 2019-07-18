({
	handlePageTraverseEvent : function(component, event, helper) {
		var pageOne = event.getParam("pageOne");
		var pageTwo = event.getParam("pageTwo");
		var pageThree = event.getParam("pageThree");
		var pageFour = event.getParam("pageFour");

		component.set("v.pageOneOpened", pageOne);
		component.set("v.pageTwoOpened", pageTwo);
		component.set("v.pageThreeOpened", pageThree);
		component.set("v.pageFourOpened", pageFour);
	}
})