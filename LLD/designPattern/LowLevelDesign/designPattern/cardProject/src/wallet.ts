import IPayment from "./IPayment";

class Wallet implements IPayment {
    constructor(private walletName: string) {}

    pay(): void {
        console.log(`Payment done via Wallet: ${this.walletName}`);
    }
}

export default Wallet;
