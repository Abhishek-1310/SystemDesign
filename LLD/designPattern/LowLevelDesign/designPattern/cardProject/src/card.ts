import IPayment from "./IPayment";

abstract class Credit implements IPayment{
    cardNo:string;
    userName:string;
    constructor(cardNo:string, userName:string){
        this.cardNo = cardNo;
        this.userName = userName;
    }
    public getCardNo(){
        console.log("your card no is",this.cardNo);
    }
    public getUserName(){
        console.log("your account is",this.userName);
    }

    // I don't know the implementation, child class will decide
    abstract pay(): void;
}

export default Credit;

// class Credit {
//     // No need for lines 2 & 3 at the top!
//     constructor(public cardNo: string, public userName: string) {
//         // No need for this.cardNo = cardNo either!
//     }
// }