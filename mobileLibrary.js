"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var mobile_1 = require("./mobile");
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(mobiles, location, name) {
        this.mobiles = mobiles;
        this.location = location;
        this.name = name;
        this.totalprice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.getName = function () {
        return this.name;
    };
    MobileLibrary.prototype.getLocation = function () {
        return this.location;
    };
    MobileLibrary.prototype.getMobiles = function () {
        return this.mobiles;
    };
    MobileLibrary.prototype.getTotalprice = function () {
        return this.totalprice;
    };
    MobileLibrary.prototype.setName = function (nuevonombre) {
        this.name = nuevonombre;
    };
    MobileLibrary.prototype.setLocation = function (nuevalocation) {
        this.location = nuevalocation;
    };
    MobileLibrary.prototype.setMobiles = function (nuevosMobiles) {
        this.mobiles = nuevosMobiles;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        var resultado = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            resultado += this.mobiles[i].getPrice();
        }
        return resultado;
    };
    MobileLibrary.prototype.todoslosmodelos = function () {
        var texto = "";
        for (var i = 0; i < this.mobiles.length; i++) {
            texto += this.mobiles[i].imprimir() + "\n";
        }
        return texto;
    };
    MobileLibrary.prototype.printLibrary = function () {
        console.log("Estos son todos los moviles\n" + this.todoslosmodelos() + "Precio total : " + this.getTotalprice());
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
var nokia3210 = new mobile_1.Mobile("Nokia3210", "2G", "loquesea", "20gb", "Negro", 0, "lolo", 100);
var iphone3g = new mobile_1.Mobile("iPhone3G", "2G", "loquesea", "20gb", "Negro", 3, "lolo", 100);
var SamsugG = new mobile_1.Mobile("Samsug Galaxy", "2G", "loquesea", "20gb", "Negro", 3, "lolo", 100);
var mylibrary22 = new MobileLibrary([nokia3210, iphone3g, SamsugG], "Barcelona", "superalmacen");
mylibrary22.printLibrary();
