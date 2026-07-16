class PaymentService {
    pay(amount, paymentType) {
        if (paymentType === 'CreditCard') {
            console.log(`paid ${amount} $ using ${paymentType}`);
        } else if (paymentType === 'UPI') {
            console.log(`paid ${amount} $ using ${paymentType}`);
        } else if (paymentType === 'debitCard') {
            console.log(`paid ${amount} $ using ${paymentType}`);
        } else {
            console.log('invalid payment type')
        }
    }
}
const payment = new PaymentService();

payment.pay(500, 'CreditCard');
payment.pay(500, 'UPI');
payment.pay(500, 'phonepay');

// what is the problem in this :- suppose tomorrow company says add phonePay now u modify Pay() method whenever wan to add new
// payment method we have to change pay() and at last it will become huge
// problem violates open/closed priciple, tight coupling , hard to maintain

// Strategy pattern
// instead of one gaint class
// create one class for each payment method
// every payment class know only one things:- how to pay