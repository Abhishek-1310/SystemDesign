const Transaction = require('./transaction');
class ATMState {
    insertCard() {
        throw Error('implement in sub class');
    }
    enterPin() {
        throw Error('implement in sub class');
    }
    withdraw() {
        throw Error('implement in sub class');
    }
    deposit() {
        throw Error('implement in sub class');
    }
    checkBalance() {
        throw Error('implement in sub class');
    }
    ejectCard() {
        throw Error('implement in sub class');
    }
}

class NoCardState extends ATMState {
    constructor(atm) {
        super();
        this.atm = atm;
    }
    insertCard() {
        this.atm.setState(new CardInsertedState(this.atm))
    }
}

class CardInsertedState extends ATMState {
    constructor(atm) {
        super();
        this.atm = atm;
    }
    enterPin(pin) {
        if (this.atm.card.validatePin(pin)) {
            this.atm.setState(new PinVerifiedState(this.atm));
        }
    }
}

class PinVerifiedState extends ATMState {

    constructor(atm) {
        super();
        this.atm = atm;
    }
    withdraw(amt) {
        const transaction = new Transaction(Date.now(), "WITHDRAW", amt);

        const account = this.atm.card.account;
        const dispenser = this.atm.cashDispenser;
        if (!account.hasSufficentBalance(amt)) {
            transaction.fail();
            return;
        }
        if (!dispenser.canDispen(amt)) {
            transaction.fail();
            return;
        }
        account.withdraw(amt);
        const success = this.atm.cashHandler.handle(amt);

        if (success) {
            transaction.success();
        } else {
            transaction.fail();
        }
        dispenser.dispense(amt);
        this.atm.transactions.push(transaction);
    }
    deposit(amt) {
        const transaction = new Transaction(Date.now(), "DEPOSIT", amt);
        this.atm.card.account.deposit(amt);
        transaction.success();
        this.atm.transactions.push(transaction);
    }
    checkBalance() {
        return this.atm.card.account.getBalance();
    }
    ejectCard() {
        this.atm.setState(new NoCardState(this.atm))
        this.atm.card = null;
    }

}
module.exports = {
    ATMState,
    NoCardState,
    CardInsertedState,
    PinVerifiedState
};