import PaymentService from "./paymentservice";
import Creditcard from "./creditCard";
import DebitCard from "./debitCard";
import Upi from "./upi";
import Wallet from "./wallet";

const service = new PaymentService();

// Add all payment methods
service.addPaymentMethod("credit", new Creditcard("1111-2222-3333", "Abhishek"));
service.addPaymentMethod("debit", new DebitCard("4444-5555-6666", "Abhishek"));
service.addPaymentMethod("upi", new Upi("abhishek@upi"));
service.addPaymentMethod("wallet", new Wallet("Paytm"));

// Make payments
service.pay("credit");
service.pay("debit");
service.pay("upi");
service.pay("wallet");
service.pay("cod")


//how to run project
// ./node_modules/.bin/tsc
// node dist/client.js