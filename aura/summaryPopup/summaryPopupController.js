({
    function_name :  function(component, event, helper){
        //called on clicking your button
        //run your form render code after that, run the following lines
        helper.showPopupHelper(component, 'modaldialog', 'slds-fade-in-');
        helper.showPopupHelper(component,'backdrop','slds-backdrop--');
    }
})