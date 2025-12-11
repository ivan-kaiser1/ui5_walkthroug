sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"

], (Controller, MessageToast ) =>{
    "use strict"; 

    return Controller.extend("ui5_walkthroug.controller.App", {
        onClickMe() {
            let text = "Button was clicked!";
            MessageToast.show(text);         
     }    
   });
});