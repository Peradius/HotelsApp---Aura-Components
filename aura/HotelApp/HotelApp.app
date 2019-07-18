<aura:application extends="force:slds">
    <aura:attribute name="pageOneOpened" type="boolean" default="true" />
    <aura:attribute name="pageTwoOpened" type="boolean" default="false" />
    <aura:attribute name="pageThreeOpened" type="boolean" default="true" />
    <aura:attribute name="pageFourOpened" type="boolean" default="false" />

    <aura:attribute name="hotel" type="Hotel__c" />
    <aura:attribute name="room" type="Room__c" />
    <aura:attribute name="guest" type="Guest__c" />
    <aura:attribute name="checkIn" type="Date" />
    <aura:attribute name="checkOut" type="Date" />

    <aura:handler event="c:sendHotelData" action="{!c.handleHotelDataEvent}"/>
    <aura:handler event="c:sendRoomData" action="{!c.handleRoomDataEvent}"/>
    <aura:handler event="c:sendGuestData" action="{!c.handleGuestDataEvent}"/>
    <aura:handler event="c:sendReservationData" action="{!c.handleReservationDataEvent}"/>
    <aura:handler event="c:pageTraverseEvent" action="{!c.handlePageTraverseEvent}"/>

                            <!-- pageOne : c:searchHotels
                            pageTwo : c:searchRooms 
                            pageThree : c:bookingSummary 
                            pageFour : c:summaryPopup -->

    <aura:if isTrue="{!v.pageOneOpened}" >
        <c:searchHotels />
    </aura:if>

    <aura:if isTrue="{!v.pageTwoOpened}" >
        <c:searchRooms hotel="{!v.hotel}"/>
    </aura:if>

    <aura:if isTrue="{!v.pageThreeOpened}" >
        <c:bookingSummary hotel="{!v.hotel}" room="{!v.room}"/>
    </aura:if>

    <aura:if isTrue="{!v.pageFourOpened}" >
        <c:summaryPopup hotel="{!v.hotel}" room="{!v.room}" guest="{!v.guest}" 
            checkIn="{!v.checkIn}" checkOut="{!v.checkOut}"/>
    </aura:if>
    
</aura:application>