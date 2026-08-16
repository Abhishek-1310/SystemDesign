const PaymentStratgy = require('../../interface/paymentStratgy');

class Cash extends PaymentStratgy {
    pay(amount) {
        console.log(`${amount} is paid via cash`);
    }
}
module.exports = Cash;