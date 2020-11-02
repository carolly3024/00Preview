import {Mobile} from "./mobile"
import {MobileLibrary} from "./mobileLibrary"

    let nokia3210 = new Mobile ("Nokia3210", "2G", "loquesea", "20gb", "Negro",  0, "lolo", 100);
    let iphone3g = new Mobile ("iPhone3G", "2G", "loquesea", "20gb", "Negro",  3, "lolo", 100);
    let SamsugG = new Mobile ("Samsug Galaxy", "2G", "loquesea", "20gb", "Negro",  3, "lolo", 100);


var arraymoviles=[nokia3210,iphone3g,SamsugG];

var mylibreria = new MobileLibrary (arraymoviles,"Madrid","libreria1");

console.log(mylibreria.totalPriceCalculation());

arraymoviles.forEach(function(elem){elem.imprimir()});