sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/odata/v2/ODataModel"
],
	function (Controller,ODataModel) {
		"use strict";

		return Controller.extend("com.hong.hierarchy.controller.MainView", {
			onInit: function () {
					this.setTreeTableModel(this.getTreeTable());
			},
			
			setTreeTableModel: function (oTable) {
				const oModel = new ODataModel('/v2/service/hierarchyService');
				oTable.setModel(oModel);
				oTable.bindRows({
					path: '/Hierarchy',
					parameters : {
						countMode: 'Inline',
						numberOfExpandedLevels: 5
					}
				});
			},

			getTreeTable: function() {
				return this.byId('treeTable');
			}
		});
	});
