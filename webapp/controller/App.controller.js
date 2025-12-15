sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
],

    (Controller, MessageToast, JSONModel, ResourceModel) => {
        "use strict";

        return Controller.extend("ui5_walkthroug.controller.App", {

            onInit: function () {
                let oVorname = this.byId("idVorname");
                oVorname.setEditable(false);

            },

            onClickMe() {
                // read message from i18n model
                const oBundle = this.getView().getModel("i18n").getResourceBundle()
                const sTerm = this.getView().getModel().getProperty("/terms/name2");
                const text = oBundle.getText("helloMsg", [sTerm]);

                MessageToast.show(text);
            },

            onSelectionChange: function (oEvent) {
                debugger;
                    var oSelectedItem = oEvent.getParameter("listItem");
                    var oBindingContext = oSelectedItem.getBindingContext();
                    var sPath = oBindingContext.getPath();
                    var oForm = this.byId("adressForm");

                    oForm.bindElement(sPath + "/Adresse");
                }
            
            });
    });