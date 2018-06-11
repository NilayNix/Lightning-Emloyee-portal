({
    hidemodal : function(component, event, helper) {
        console.log("hidemodal");
        component.set("v.modal" ,false);
    },
    handleSaveRecord: function(component, event, helper) {
        
        console.log("handleSaveRecord called");
        component.set("v.modal",false)
        component.find("recordEditor").saveRecord($A.getCallback(function(saveResult) {
            
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                console.log("Save completed successfully.");
            } else if (saveResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (saveResult.state === "ERROR") {
                console.log('Problem saving record, error: ' + 
                           JSON.stringify(saveResult.error));
            } else {
                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
            }
        }));}
})