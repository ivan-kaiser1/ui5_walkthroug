sap.ui.define([
     "sap/ui/core/mvc/XMLView"
], (XMLView) =>{
    "use strict";

    XMLView.create({
        viewName: "ui5_walkthroug.view.App"
    }).then(function (oView) {
        oView.placeAt("content");
    });
});