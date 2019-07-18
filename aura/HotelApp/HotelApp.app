<aura:application extends="force:slds">
    <aura:attribute name="pageOneOpened" type="boolean" default="true" />
    <aura:attribute name="pageTwoOpened" type="boolean" default="false" />
    <aura:attribute name="pageThreeOpened" type="boolean" default="false" />
    <aura:attribute name="pageFourOpened" type="boolean" default="false" />

    <aura:handler event="c:pageTraverseEvent" action="{!c.handlePageTraverseEvent}"/>

                            <!-- pageOne : c:searchHotels
                            pageTwo : c:searchRooms 
                            pageThree : c:bookingSummary 
                            pageFour : c:summaryPopup -->

    <aura:if isTrue="{!v.pageOneOpened}" >
        <c:searchHotels />
    </aura:if>

    <aura:if isTrue="{!v.pageTwoOpened}" >
        <c:searchRooms />
    </aura:if>

    <aura:if isTrue="{!v.pageThreeOpened}" >
        <c:bookingSummary />
    </aura:if>

    <aura:if isTrue="{!v.pageFourOpened}" >
        <c:summaryPopup />
    </aura:if>
    
</aura:application>