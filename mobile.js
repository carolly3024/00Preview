"use strict";
exports.__esModule = true;
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, model, trademark, sdSide, color, cameraNumber, is5G, price) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSide = sdSide;
        this.color = color;
        this.cameraNumber = cameraNumber;
        this.is5G = is5G;
        this.price = price;
    }
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.setNumber = function (newNumber) {
        this.cameraNumber = newNumber;
    };
    Mobile.prototype.setTrademark = function (newtrademark) {
        this.trademark = newtrademark;
    };
    Mobile.prototype.setsdSide = function (newSide) {
        this.sdSide = newSide;
    };
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Mobile.prototype.setIs5G = function (newIs5G) {
        this.is5G = newIs5G;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    ///setter
    Mobile.prototype.getName = function () {
        return this.name;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.getNumber = function () {
        return this.cameraNumber;
    };
    Mobile.prototype.getTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getsdSide = function () {
        return this.sdSide;
    };
    Mobile.prototype.getColor = function () {
        return this.color;
    };
    Mobile.prototype.getIs5G = function () {
        return this.is5G;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.toStringN = function () {
        return "\t Name - " + this.name + " \n \t Model - " + this.model + " \n \t Trademark - " + this.trademark + " \n \t SD Size - " + this.sdSide + " \n \t Color - " + this.color + " \n \t Is5g - " + this.is5G + " \n \t Number of Cameras - " + this.cameraNumber + " \n \t Price - " + this.price + "\n\n";
    };
    Mobile.prototype.imprimir = function () {
        return ("Las características del modelo " + this.getName() + " son: \n " + this.toStringN());
    };
    return Mobile;
}());
exports.Mobile = Mobile;
//let nokia3210 = new Mobile ("Nokia3210", "2G", "loquesea", "20gb", "Negro",  0, "lolo", 100);
//console.log(nokia3210.imprimir());
