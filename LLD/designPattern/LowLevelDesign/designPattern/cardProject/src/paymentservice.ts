import IPayment from "./IPayment";

class PaymentService {

    private paymentMethods: Map<string, IPayment>;

    constructor() {
        this.paymentMethods = new Map();
    }

    public addPaymentMethod(name: string, paymentMethod: IPayment): void {
        this.paymentMethods.set(name, paymentMethod);
        console.log(`Payment method '${name}' added.`);
    }

    public pay(name: string): void {
        const method = this.paymentMethods.get(name);
        if (method) {
            method.pay();
        } else {
            console.log(`Payment method '${name}' not found.`);
        }
    }
}

export default PaymentService;
