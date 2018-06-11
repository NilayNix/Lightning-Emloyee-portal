({
	doInit : function(component, event, helper) {
        var greettime = new Date().getHours();
        var greet = "";
        //console.log(greettime);
        
        if (greettime < 12) {
            greet = "Good Morning ";
            component.set("v.greeting" ,greet);
            
        } else if (greettime < 17) {
            greet = "Good Afternoon ";
            component.set("v.greeting" ,greet);
            
        } else {
            greet = "Good Evening ";
            component.set("v.greeting" ,greet);
        }
    }
})