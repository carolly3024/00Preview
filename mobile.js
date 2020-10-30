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
    Mobile.prototype.toString = function () {
        return ("\nName : " + this.name + " \nModel: " + this.model + " \nTrademark : " + this.trademark + " \nSdSide : " + this.sdSide + " \nColor : " + this.color + " \nCameraNumber : " + this.cameraNumber + " \nis5G : " + this.is5G + " \nPrice : " + this.price + "\n");
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.getModel = function () {
        return this.model;
    };
    Mobile.prototype.setNumber = function (newNumber) {
        this.cameraNumber = newNumber;
    };
    Mobile.prototype.getNumber = function () {
        return this.cameraNumber;
    };
    return Mobile;
}());
exports.Mobile = Mobile;
