"use strict";
exports.__esModule = true;
var mobile_1 = require("./mobile");
var nokia3210 = new mobile_1.Mobile("Nokia3210", "2G", "loquesea", "20gb", "Negro", 0, "lolo", 100);
var iphone3g = new mobile_1.Mobile("iPhone3G", "2G", "loquesea", "20gb", "Negro", 3, "lolo", 100);
var SamsugG = new mobile_1.Mobile("Samsug Galaxy", "2G", "loquesea", "20gb", "Negro", 3, "lolo", 100);
nokia3210.setModel("4G");
nokia3210.setNumber(7);
console.log(nokia3210.toString());
