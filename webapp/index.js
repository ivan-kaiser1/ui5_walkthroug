sap.ui.define([
     "sap/ui/core/ComponentContainer",
], (ComponentContainer) =>{
    "use strict";

    new ComponentContainer({
        name: "ui5_walkthroug",
        settings: { id: "ui5_walkthroug" },
        async: true
    }).placeAt("content");  
});