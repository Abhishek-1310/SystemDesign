const ATM = require("./atm");
const Card = require("./card");
const Account = require("./account");
const CashDispenser = require("./cashDispenser");

const account = new Account(101, 5000);
const card = new Card(1234, 1111);
card.account = account;

const dispenser = new CashDispenser(10000);

const atm = new ATM(dispenser);

// 1. Insert card
atm.insertCard(card);

// 2. Enter PIN
atm.enterPin(1111);

// 3. Check balance
console.log("Balance:", atm.checkBalance());

console.log("Balance:", atm.checkBalance());

// Withdraw
console.log("\n--- Withdraw ₹1800 ---");
atm.withdraw(1800);

console.log("Balance:", atm.checkBalance());

// // 4. Withdraw
// atm.withdraw(500);

// // 5. Check balance
// console.log("Balance:", atm.checkBalance());

// // 6. Deposit
// atm.deposit(1000);

// // 7. Check balance
// console.log("Balance:", atm.checkBalance());

// 8. Eject
atm.ejectCard();

console.log(atm.state.constructor.name);