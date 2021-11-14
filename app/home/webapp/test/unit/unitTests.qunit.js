/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comhong./home/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
