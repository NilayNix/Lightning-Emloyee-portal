({
    UserPersonalDetailsEvent : function(component, event, helper) {
        var msg= event.getParam("message");
        if(msg == 'PersonalDetails'){
            component.set("v.tab" ,msg)
            helper.helpermethod(component);
        }
        
        if(msg == 'Certificates'){
            component.set("v.tab" ,msg)
            helper.certificatesDetails(component);
        }
        
        if(msg == 'Emergencycontact'){
            component.set("v.tab" ,msg)
            helper.Emergencycontacts(component);
        }
        
        if(msg == 'knowYourColleagues'){
            component.set("v.tab" ,msg)
            //var searchValue = component.find("knowYourColleagues").get('v.value');
            //console.log(searchValue);
            //helper.searchContact(component);
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
    }
    
})