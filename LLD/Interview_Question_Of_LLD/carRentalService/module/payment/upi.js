const PaymentStratgy = require('../../interface/paymentStratgy');

class Upi extends PaymentStratgy {
    pay(amount) {
        console.log(`${amount} is paid via upi`);
    }
}
module.exports = Upi;