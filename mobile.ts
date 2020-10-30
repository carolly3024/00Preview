export class Mobile {
    public name: string;
    public model: string;
    public trademark: string;
    public sdSide: string;
    public color: string;
    public cameraNumber: number;
    public is5G: string;
    public price: number;




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
    toString(): string {
        return (`\n\Name : ${this.name} \n\Model: ${this.model} \n\Trademark : ${this.trademark} \n\SdSide : ${this.sdSide} \n\Color : ${this.color} \n\CameraNumber : ${this.cameraNumber} \n\is5G : ${this.is5G} \n\Price : ${this.price}\n`)
    }

    setModel(newModel:string)
    {
        this.model = newModel
    }
    getModel():string
    {
        return this.model
    }

    setNumber(newNumber:number)
    {
        this.cameraNumber = newNumber
    }
    getNumber():number
    {
        return this.cameraNumber
    }
}

