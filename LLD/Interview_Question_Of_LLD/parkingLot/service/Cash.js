const PaymentService = require('../interface/paymentService')

class Cash extends PaymentService {
    pay(amount) {
        console.log('you have successfully paid your bill from cash')
    }
}
module.exports = Cash;