({
    onFatchDetailClick : function(component, event, helper) {	//function is for getting details of personal details
        var id = event.getSource().getLocalId();
        console.log(id);
        var appEvent = $A.get("e.c:UserPersonalDetails");
        appEvent .setParams({"message" : id});
        appEvent .fire();
        
    }
})