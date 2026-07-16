// Strategy pattern
// no class know each other all strategy in diff class

class PaymentStrategy {
    pay(amount) {
        throw new Error('You have to Implement Pay Method');
    }
}

class CreditCard extends PaymentStrategy {
    pay(amount) {
        console.log(`paid ${amount} using CreditCard`);
    }
}

class DebitCard extends PaymentStrategy {
    pay(amount) {
        console.log(`paid ${amount} using DebitCard`);
    }
}

class UPI extends PaymentStrategy {
    pay(amount) {
        console.log(`paid ${amount} using UPI`);
    }
}

class PaymentService {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    checkout(amount) {
        this.strategy.pay(amount);
    }
}

const payemnt = new PaymentService(new UPI());
payemnt.checkout(500);

payemnt.setStrategy(new CreditCard());
payemnt.checkout(600);


// se no if else

// Observer is about communication ("notify everyone when something changes").
// Strategy is about choosing one behavior ("pick one algorithm to perform a task").
// Memento is about saving and restoring state.

// class diagram
//                    +----------------------+
//                    |  PaymentStrategy     |
//                    +----------------------+
//                    | + pay(amount)        |
//                    +----------------------+
//                              ▲
//           ┌──────────────────┼──────────────────┐
//           │                  │                  │
//           ▼                  ▼                  ▼
// +------------------+ +------------------+ +------------------+
// | CreditCardPayment| | PayPalPayment    | | UPIPayment       |
// +------------------+ +------------------+ +------------------+
// | + pay(amount)    | | + pay(amount)    | | + pay(amount)    |
// +------------------+ +------------------+ +------------------+

//                  uses
//                    ▲
//                    │
//          +----------------------+
//          |   PaymentService     |
//          +----------------------+
//          | - strategy           |
//          +----------------------+
//          | + setStrategy()      |
//          | + checkout()         |
//          +----------------------+

// enable an object to change its behavior at runtime by selecting from different algorithms


// he Strategy pattern allows an object to change its behavior at runtime by selecting from different algorithms or strategies.
// This provides flexibility in choosing the best algorithm based on the context