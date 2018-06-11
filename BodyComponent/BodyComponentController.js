({
    UserPersonalDetailsEvent : function(component, event, helper) {
        var msg= event.getParam("message");
        if(msg == 'PersonalDetails' || msg == undefined){
            component.set("v.tab" ,msg)
        }
        
        if(msg == 'Certificates'){
            component.set("v.tab" ,msg)
        }
        
        if(msg == 'Emergencycontact'){
            component.set("v.tab" ,msg)
        }
        
        if(msg == 'knowYourColleagues'){
            component.set("v.tab" ,msg)
            
        }
    },
    
    searchContact : function(component, event, helper) {
        var searchValue = component.find("keyword").get('v.value');
        helper.searchContact(component, searchValue);        
    },
    
    colleaguesDetails : function(component, event, helper) {
        var Value = event.getSource().get("v.value");
        //console.log(Value);
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": Value,
            "isredirect" : "true",
            "slideDevName": "related"
        });
        navEvt.fire();        
    },
    
    handleDeleteRecord: function(component, event, helper) {
        var deleterecordId = event.getSource().get("v.value");
        console.log(deleterecordId);
        component.set("v.deleterecordId" ,deleterecordId);
        
    },
    
    deleteContactEvent: function(component, event, helper) {
        component.find("recordHandler").deleteRecord($A.getCallback(function(deleteResult) {
            // NOTE: If you want a specific behavior(an action or UI behavior) when this action is successful 
            // then handle that in a callback (generic logic when record is changed should be handled in recordUpdated event handler)
            if (deleteResult.state === "SUCCESS" || deleteResult.state === "DRAFT") {
                // record is deleted
                
                console.log("Record is deleted.");
                $A.get('e.force:refreshView').fire();
                var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Deleted",
                    "message": "The record was deleted."
                });
                resultsToast.fire();
                
            } else if (deleteResult.state === "INCOMPLETE") {
                console.log("User is offline, device doesn't support drafts.");
            } else if (deleteResult.state === "ERROR") {
                console.log('Problem deleting record, error: ' + JSON.stringify(deleteResult.error));
            } else {
                console.log('Unknown problem, state: ' + deleteResult.state + ', error: ' + JSON.stringify(deleteResult.error));
            }
            component.re
        }));
    },
    
    editdata: function(component, event, helper) {
        console.log("Edit called");
        var EditData = event.getSource().get("v.value");
        console.log(EditData);
        component.set("v.modal" ,true);
        component.set("v.editdetailsId" ,EditData)
    }
     
})