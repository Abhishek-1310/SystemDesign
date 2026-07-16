import Credit from "./card";

class Creditcard extends Credit{
    constructor(cardNo:string,userName:string){
        super(cardNo,userName);
    }

    pay(): void {
        console.log("This is a Credit Card");
    }
}

export default Creditcard;