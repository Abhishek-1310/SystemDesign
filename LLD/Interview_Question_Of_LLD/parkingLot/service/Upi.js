const PaymentService = require('../interface/paymentService')

class Upi extends PaymentService {
    pay(amount) {
        console.log('you have successfully paid your bill from upi')
    }
}
module.exports = Upi;