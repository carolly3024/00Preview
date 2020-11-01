import{Mobile} from "./mobile" 


let nokia3210 = new Mobile ("Nokia3210", "2G", "loquesea", "20gb", "Negro",  0, "lolo", 100);
let iphone3g = new Mobile ("iPhone3G", "2G", "loquesea", "20gb", "Negro",  3, "lolo", 100);
let SamsugG = new Mobile ("Samsug Galaxy", "2G", "loquesea", "20gb", "Negro",  3, "lolo", 100);


let mobiles:Mobile[]=[nokia3210,iphone3g,SamsugG];

mobiles.forEach(function(elem){
    elem.imprimir()
    console.log(mobiles)
});





