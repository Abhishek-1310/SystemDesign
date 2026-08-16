class CashDispenser {
    constructor(cash) {
        this.availableCash = cash;
    }
    canDispen(amt) {
        if (this.availableCash < amt) {
            console.log('sorry we are sort of money, try later');
            return false;
        }
        return true;
    }
    dispense(amt) {
        this.availableCash -= amt;
        console.log(`here is your ${amt} cash.`);
        return true
    }
}
module.exports = CashDispenser;