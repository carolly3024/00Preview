import{Mobile} from "./mobile" 


export class MobileLibrary{
    private name:string;
    private location:string;
    private mobiles:Mobile[];
    private totalprice:number;
    constructor(mobiles:Mobile[],location:string,name:string)
    {
        this.mobiles=mobiles;
        this.location=location;
        this.name=name;
        this.totalprice= this.totalPriceCalculation();
    }

    getName():string{
        return this.name;
    }

    getLocation():string{
        return this.location;
    }

    getMobiles():Mobile[]{
        return this.mobiles;
    }
    getTotalprice():number{
        return this.totalprice;
    }

    setName(nuevonombre:string){
        this.name=nuevonombre;
    }
    setLocation(nuevalocation:string){
        this.location=nuevalocation;
    }

    setMobiles(nuevosMobiles:Mobile[]){
        this.mobiles=nuevosMobiles;
    }

    totalPriceCalculation():number{
        var resultado=0;
        for (let i=0;i<this.mobiles.length;i++){
            resultado+=this.mobiles[i].getPrice();
        }
        return resultado
    }

    todoslosmodelos(){
        var texto="";
        for (let i=0;i<this.mobiles.length;i++){
        texto+= this.mobiles[i].imprimir()+ "\n";
        }
    return texto; 
    }   
    public printLibrary(){
    console.log("Estos son todos los moviles\n" + this.todoslosmodelos() + "Precio total : " + this.getTotalprice());
    }

    }

    let nokia3210 = new Mobile ("Nokia3210", "2G", "loquesea", "20gb", "Negro",  0, "lolo", 100);
    let iphone3g = new Mobile ("iPhone3G", "2G", "loquesea", "20gb", "Negro",  3, "lolo", 100);
    let SamsugG = new Mobile ("Samsug Galaxy", "2G", "loquesea", "20gb", "Negro",  3, "lolo", 100);

    let mylibrary22= new MobileLibrary ([nokia3210,iphone3g,SamsugG],"Barcelona","superalmacen");

    mylibrary22.printLibrary();
    
