// Facade Pattern provides a single, simplified interface to a complex subsystem, hiding its internal complexity from the client.
class UserService {
    validateUser(id) {
        console.log("User Validated");
    }
}
class InventoryService {
    checkStock(id) {
        console.log("Stock Available");
    }
}
class PaymentService {
    makePayment(amount) {
        console.log("Payment Successful");
    }
}
class OrderService {
    createOrder(id) {
        console.log("Order Created");
    }
}
class OrderFacade {

    constructor() {
        this.user = new UserService();
        this.inventory = new InventoryService();
        this.payment = new PaymentService();
        this.order = new OrderService();
    }

    placeOrder(userId, productId, amount) {

        this.user.validateUser(userId);

        this.inventory.checkStock(productId);

        this.payment.makePayment(amount);

        this.order.createOrder(productId);

        console.log("Order Placed Successfully");

    }

}

const order = new OderFacade();
order.placeOrder(1, 102, 5000);

// Why is it called "Facade"?
// A facade is the front face of a building.
// You only see the front.
// The complex structure behind it is hidden.


// simplified, decoupling, centerized system