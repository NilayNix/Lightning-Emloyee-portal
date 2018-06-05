({
    helperMethod : function(component) {
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
        
        //--------------------
        
        // Create a callback that is executed after 
        // the server-side action returns
        var action = component.get("c.getUserInfo");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Alert the user with the value returned 
                // from the server
                // alert("From server: " + response.getReturnValue());
                
                component.set("v.username" ,response.getReturnValue());
                
                // You would typically fire a event here to trigger 
                // client-side notification that the server-side 
                // action is complete
            }
            else if (state === "INCOMPLETE") {
                // do something
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        
        // optionally set storable, abortable, background flag here
        
        // A client-side action could cause multiple events, 
        // which could trigger other events and 
        // other server-side action calls.
        // $A.enqueueAction adds the server-side action to the queue.
        $A.enqueueAction(action);
    }
})