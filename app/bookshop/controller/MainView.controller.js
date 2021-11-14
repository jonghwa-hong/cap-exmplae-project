sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, ODataModel) {
		"use strict";

		return Controller.extend("com.hong.bookshop.controller.MainView", {
			onInit: function () {
					const oModel = new ODataModel('/v2/service/bookshopService');
					this.byId('smartFilterBar').setModel(oModel);
					this.byId('smartFilterBar').setEntitySet('Books')
					this.byId('smartTable').setModel(oModel);
					this.byId('smartTable').setEntitySet('Books');
			}
		});
	});
