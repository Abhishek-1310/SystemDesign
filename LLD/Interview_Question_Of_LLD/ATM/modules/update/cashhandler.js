class CashHandler {
    constructor(nextHandler = null) {
        this.nextHandler = nextHandler;
    }

    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(amount) {
        throw new Error("handle() must be implemented");
    }
}

class FiveHundredHandler extends CashHandler {
    constructor(atm) {
        super();
        this.atm = atm;
    }

    handle(amount) {
        const count = Math.floor(amount / 500);

        if (count > 0) {
            console.log(`Dispensing ${count} x ₹500`);
            this.atm.cashDispenser.availableCash -= count * 500;
            amount -= count * 500;
        }

        if (amount === 0) {
            return true;
        }

        if (this.nextHandler) {
            return this.nextHandler.handle(amount);
        }

        return false;
    }
}

class TwoHundredHandler extends CashHandler {
    constructor(atm) {
        super();
        this.atm = atm;
    }

    handle(amount) {
        const count = Math.floor(amount / 200);

        if (count > 0) {
            console.log(`Dispensing ${count} x ₹200`);
            this.atm.cashDispenser.availableCash -= count * 200;
            amount -= count * 200;
        }

        if (amount === 0) {
            return true;
        }

        if (this.nextHandler) {
            return this.nextHandler.handle(amount);
        }

        return false;
    }
}

class HundredHandler extends CashHandler {
    constructor(atm) {
        super();
        this.atm = atm;
    }

    handle(amount) {
        const count = Math.floor(amount / 100);

        if (count > 0) {
            console.log(`Dispensing ${count} x ₹100`);
            this.atm.cashDispenser.availableCash -= count * 100;
            amount -= count * 100;
        }

        if (amount === 0) {
            return true;
        }

        if (this.nextHandler) {
            return this.nextHandler.handle(amount);
        }

        return false;
    }
}

module.exports = {
    CashHandler,
    FiveHundredHandler,
    TwoHundredHandler,
    HundredHandler
};