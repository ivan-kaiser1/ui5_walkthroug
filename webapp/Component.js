sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel) => {
    "use strict";

    return UIComponent.extend("ui5.walkthrough.Component", {
       
        metadata: {
            manifest: "json" },
            
        init() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data model on view
            const oData = {
                "personen": [
                    {
                        "Vorname": "Meike",
                        "Nachname": "Müller",
                        "Geburtsdatum": "12.12.1922",
                        "Adresse": {
                            "Strasse": "Putzbrunner Str",
                            "Hausnummer": 14,
                            "PLZ": 81737,
                            "Stadt": "Neuperlach"
                        }
                    },
                    {
                        "Vorname": "Heike",
                        "Nachname": "Huber",
                        "Geburtsdatum": "15.01.1977",
                        "Adresse": {
                            "Strasse": "Huberstraße",
                            "Hausnummer": 12,
                            "PLZ": 70174,
                            "Stadt": "Stuttgart"
                        }
                    },
                    {
                        "Vorname": "Rainer",
                        "Nachname": "Herbst",
                        "Geburtsdatum": "04.03.1980",
                        "Adresse": {
                            "Strasse": "Herbststraße",
                            "Hausnummer": 25,
                            "PLZ": 68219,
                            "Stadt": "Mannheim"
                        }
                    },
                    {
                        "Vorname": "Fritz",
                        "Nachname": "Sebastian",
                        "Geburtsdatum": "03.05.2010",
                        "Adresse": {
                            "Strasse": "Sebastiangasse",
                            "Hausnummer": 23,
                            "PLZ": 24505,
                            "Stadt": "Rostock"
                        }
                    },
                    {
                        "Vorname": "Patrick",
                        "Nachname": "Scholz",
                        "Geburtsdatum": "03.01.1950",
                        "Adresse": {
                            "Strasse": "Reventlouallee",
                            "Hausnummer": 9,
                            "PLZ": 24105,
                            "Stadt": "Kiel"
                        }
                    }
                ]
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);
        }
    });
});
