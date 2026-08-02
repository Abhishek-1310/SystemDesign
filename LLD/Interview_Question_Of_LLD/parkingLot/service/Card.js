const PaymentService = require('../interface/paymentService')

class Card extends PaymentService {
    pay(amount) {
        console.log('you have successfully paid your bill from card')
    }
}
module.exports = Card;