class Payment {
    constructor(bill, paymentStrategy) {
        this.bill = bill;
        this.paymentStrategy = paymentStrategy;
    }

    pay() {
        let amount = this.bill.calculateAmount()
        this.paymentStrategy.pay(amount);
        console.log('your amount is paid');
    }
}
module.exports = Payment;