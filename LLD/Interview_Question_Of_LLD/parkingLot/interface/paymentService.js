class PaymentService {
    pay(amount) {
        throw new Error('implement in sub class');
    }
}
module.exports = PaymentService;