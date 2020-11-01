export class Mobile {
    private name: string;
    private model: string;
    private trademark: string;
    private sdSide: string;
    private color: string;
    private cameraNumber: number;
    private is5G: string;
    private price: number;




        constructor(name: string, model: string, trademark: string, sdSide: string, color: string, cameraNumber: number, is5G: string, price: number) {
            this.name = name;
            this.model = model;
            this.trademark = trademark;
            this.sdSide = sdSide;
            this.color = color;
            this.cameraNumber = cameraNumber;
            this.is5G = is5G;
            this.price = price
    }
    
    public setName(newName:string)
    {
        this.name = newName
    } 
    public setModel(newModel:string)
    {
        this.model = newModel
    } 
    public setNumber(newNumber:number)
    {
        this.cameraNumber = newNumber
    }
    public setTrademark(newtrademark:string)
    {
        this.trademark = newtrademark
    }
    public setsdSide(newSide:string)
    {
        this.sdSide = newSide
    }
    public setColor(newColor:string)
    {
        this.color = newColor
    }
    public setIs5G(newIs5G:string)
    {
        this.is5G = newIs5G
    }
    public setPrice(newPrice:number)
    {
        this.price = newPrice
    }
    
    ///setter
    public getName():string
    {
        return this.name
    }

    public getModel():string
    {
        return this.model
    }
    public getNumber():number
    {
        return this.cameraNumber
    }
    public getTrademark():string
    {
        return this.trademark
    }
    public getsdSide():string
    {
        return this.sdSide
    }
    public getColor():string
    {
        return this.color
    }
    public getIs5G():string
    {
        return this.is5G
    }
    public getPrice():number
    {
        return this.price
    }


    public toStringN():string{
        return `\t Name - ${this.name} \n \t Model - ${this.model} \n \t Trademark - ${this.trademark} \n \t SD Size - ${this.sdSide} \n \t Color - ${this.color} \n \t Is5g - ${this.is5G} \n \t Number of Cameras - ${this.cameraNumber} \n \t Price - ${this.price}\n\n`;
      
      }

      public imprimir():string{
        return ("Las características del modelo " + this.getName() +  " son: \n "  + this.toStringN() );
    }
      

    /* public toString(): string {
        return (`\n\Name : ${this.name} \n\Model: ${this.model} \n\Trademark : ${this.trademark} \n\SdSide : ${this.sdSide} \n\Color : ${this.color} \n\CameraNumber : ${this.cameraNumber} \n\is5G : ${this.is5G} \n\Price : ${this.price}\n`)
    } */    
}

        //let nokia3210 = new Mobile ("Nokia3210", "2G", "loquesea", "20gb", "Negro",  0, "lolo", 100);

     //console.log(nokia3210.imprimir());



