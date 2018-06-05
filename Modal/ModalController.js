({
    hidemodal : function(component, event, helper) {
        console.log("hidemodal");
        component.set("v.modal" ,false);
    },
    save : function(component,event,helper) {
        
        var action = component.get("c.addEmployeeCertificates");
        var certiname = component.find("Certificate name").get('v.value');
        var certifLink = component.find("certificate Link").get('v.value');
        var validtill = component.find("Valid till").get('v.value');
        console.log(typeof validtill);
        console.log(JSON.stringify(component.get("v.certificate")));
        action.setParams({"certiname":certiname,
                          "certifLink": certifLink,
                          "validtill": validtill});
        action.setCallback(this,function(result){
            console.log('Check result -' ,result);
            component.set("v.modal",false); 
        });
        $A.enqueueAction(action);
        
        
    },
    
    addCertificate : function(component, event, helper) {
        console.log("Add certification called");
        component.set("v.modal" ,true);        
    }
})