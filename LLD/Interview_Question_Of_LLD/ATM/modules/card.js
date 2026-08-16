class Card {
    constructor(cardNo, pin, account) {
        this.cardNo = cardNo;
        this.pin = pin;
        this.account = account;
        this.failedAttempt = 0;
        this.blocked = false
    }

    validatePin(pin) {
        if (this.pin == pin) {
            console.log('pin is correct u can procced');
            return true;
        }
        if (this.incFailedAttempt() === 3) {
            this.block();
        }
        console.log('wrong pin');
        return false;
    }

    incFailedAttempt() {
        return this.failedAttempt++;
    }

    block() {
        console.log('your card is blocked you cant perform any opration');
        this.blocked = true;
    }

}
module.exports = Card;