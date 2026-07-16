class UserService {

    validateUser(userId) {
        console.log("User Validated");
    }

}
class PaymentService {

    makePayment(amount) {
        console.log("Payment Successful");
    }

}
class OrderService {

    createOrder(productId) {
        console.log("Order Created");
    }

}
const user = new UserService();
const payment = new PaymentService();
const order = new OrderService();

user.validateUser(1);
payment.makePayment(1000);
order.createOrder(101);

// What's wrong?
// The client needs to know:
// Which service to call.
// The correct order of calls.
// All service classes.
// Suppose tomorrow you add:

// Coupon Service
// Shipping Service
// Tax Service
// Email Service

// Every client needs updating.
// The client becomes tightly coupled.