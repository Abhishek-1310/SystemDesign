import Credit from "./card";

class DebitCard extends Credit{
    constructor(cardNo:string,userName:string){
        super(cardNo,userName);
    }

    pay(): void {
        console.log("This is a Debit Card");
    }
}

export default DebitCard;