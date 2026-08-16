const { NoCardState } = require('./state');

// updated
const {
    FiveHundredHandler,
    TwoHundredHandler,
    HundredHandler
} = require("./update/cashhandler");
//updated

class ATM {
    constructor(cashDispenser) {
        this.card = null;
        this.state = new NoCardState(this);
        this.cashDispenser = cashDispenser;
        this.transactions = [];

        //updated
        this.cashHandler = new FiveHundredHandler(this);

        const twoHundred = new TwoHundredHandler(this);
        const hundred = new HundredHandler(this);

        this.cashHandler.setNext(twoHundred);
        twoHundred.setNext(hundred);
        // update
    }

    setState(state) {
        this.state = state;
    }
    insertCard(card) {
        this.card = card;
        this.state.insertCard();
    }
    enterPin(pin) {
        this.state.enterPin(pin);
    }
    withdraw(amt) {
        this.state.withdraw(amt);
    }
    deposit(amt) {
        this.state.deposit(amt);
    }
    checkBalance() {
        return this.state.checkBalance();
    }
    ejectCard() {
        this.state.ejectCard();
    }

}
module.exports = ATM;