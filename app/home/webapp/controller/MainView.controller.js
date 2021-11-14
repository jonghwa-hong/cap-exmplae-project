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
        const sHeader = oSource.getHeader();
        const TREE_TABLE = 'Tree Table';
        const BOOKSHOP_ABLE = 'BookShop Table';
        const oRouter = this.getOwnerComponent().getRouter();
        
        if (sHeader === TREE_TABLE) {
          oRouter.navTo('hierarchy');
        } else if (sHeader === BOOKSHOP_ABLE) {
          oRouter.navTo('bookshop');
        }
      }
		});
	});
