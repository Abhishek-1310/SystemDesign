class Transaction {
    constructor(id, type, amount) {
        this.id = id;
        this.type = type;
        this.amount = amount;
        this.status = "PENDING";
    }

    success() {
        this.status = "SUCCESS";
    }

    fail() {
        this.status = "FAILED";
    }
}
module.exports = Transaction;