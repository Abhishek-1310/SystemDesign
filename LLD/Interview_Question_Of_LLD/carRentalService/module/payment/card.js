const PaymentStratgy = require('../../interface/paymentStratgy');

class Card extends PaymentStratgy {
    pay(amount) {
        console.log(`${amount} is paid via card`);
    }
}
module.exports = Card;