sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment"
],

    (Controller, MessageToast, MessageBox, Filter, FilterOperator, Fragment) => {
        "use strict";
        /**
         * 
         * @param {sap.ui.core.mvc.Controller} Controller 
         * @param {*} MessageToast 
         * @param {*} MessageBox
         * @param {*} JSONModel 
         * @param {*} ResourceModel 
         * @returns 
         */
        return Controller.extend("ui5_walkthroug.controller.App", {

            onInit: function () {
                // let oVorname = this.byId("idVorname");
                // oVorname.setEditable(false);
            },

            onSuggest: function (oEvent) {
                var sTerm = oEvent.getParameter("suggestValue");
                var aFilters = [];
                if (sTerm) {
                    aFilters.push(new Filter("BusinessPartnerID", FilterOperator.StartsWith, sTerm));
                }

                oEvent.getSource().getBinding("suggestionItems").filter(aFilters);
            },

            onOpenDialog: function () {
                var oView = this.getView();

                if (!this._oDialog) {
                    Fragment.load({
                        id: oView.getId(),   // ✅ sehr wichtig!
                        name: "ui5_walkthroug.view.AppViewFragment",
                        controller: this
                    }).then(function (oDialog) {
                        this._oDialog = oDialog;
                        oView.addDependent(oDialog); // ✅ Pflicht
                        this._oDialog.open();
                    }.bind(this));
                } else {
                    this._oDialog.open();
                }
            },

            onCloseDialog: function () {
                var oDialog = this.byId("myDialog");
                oDialog.getContent().forEach(function (oControl) {
                    if (oControl.isA("sap.m.Input")) {
                        oControl.setValue("");
                    }
                });
                this.byId("myDialog").close();
            },
            // onPress: function () {
            //     /** @type {sap.m.Input} */
            //     const oInput = this.byId("idInputField");
            //     const sValue = oInput.getValue();

            //     MessageBox.show(
            //         "Hallo " + sValue,
            //         {
            //             title: "Hallo",
            //             icon: MessageBox.Icon.INFORMATION,
            //             actions: [MessageBox.Action.OK]
            //         }
            //     );
            // },  


            // onClickMe() {
            //     // read message from i18n model
            //     const oBundle = this.getView().getModel("i18n").getResourceBundle()
            //     const sTerm = this.getView().getModel().getProperty("/terms/name2");
            //     const text = oBundle.getText("helloMsg", [sTerm]);
            //     MessageToast.show(text);
            // },

            // onSelectionChange: function (oEvent) {
            //     debugger;
            //         var oSelectedItem = oEvent.getParameter("listItem");
            //         var oBindingContext = oSelectedItem.getBindingContext();
            //         var sPath = oBindingContext.getPath();
            //         var oForm = this.byId("adressForm");

            //         oForm.bindElement(sPath + "/Adresse");
            //     }

        });
    });