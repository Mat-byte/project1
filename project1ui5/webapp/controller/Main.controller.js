// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (Controller, JSONModel, MessageToast) {
        "use strict";

        const areasModel = new JSONModel();

        function onInit() {

            areasModel.loadData("./localService/mockdata/Areas.json", "false");
            this.getView().setModel(areasModel, "areasModel");
            
        }

        function onShowBoss(oEvent) {

            var selectedArea = areasModel.getProperty("/selectedArea");
            var areas = areasModel.getProperty("/Areas");

            for (let i = 0; i < areas.length; i++) {

                if (selectedArea == areas[i].area ) {
                    
                    sap.m.MessageToast.show(areas[i].boss);

                }
                 
            }
             
        }

        const Main = Controller.extend("mcc.project1ui5.controller.Main", {});
        Main.prototype.onInit = onInit;
        Main.prototype.onShowBoss = onShowBoss;

        return Main

        /*return Controller.extend("mcc.projectoneui5.controller.Main", {
            onInit: function () {

            }
        });*/

    });