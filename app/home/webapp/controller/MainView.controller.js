sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	function (Controller) {
		"use strict";

		return Controller.extend("com.hong.home.controller.MainView", {
			onInit: function () {
        // 현재 compoennt의 model
        // console.log(this.getOwnerComponent().getModel());
        this.getView().setModel(this.getOwnerComponent().getModel());
			},

      press: function (oEvent) {
        const oSource = oEvent.getSource();
        if (this.byId('treeTableTile') === oSource) {
          console.log('treeTableTile');
        } else if (this.byId('bookshopTile') === oSource) {
          console.log('bookshopTile');
        }
      }
      
		});
	});
