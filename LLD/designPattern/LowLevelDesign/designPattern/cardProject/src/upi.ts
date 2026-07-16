import IPayment from "./IPayment";

class Upi implements IPayment {
    constructor(private upiId: string) {}

    pay(): void {
        console.log(`Payment done via UPI: ${this.upiId}`);
    }
}

export default Upi;
