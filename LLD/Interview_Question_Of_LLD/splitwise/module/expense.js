class Expense {
    constructor(id, amount, paidBy, participants, strategy) {
        this.id = id;
        this.amount = amount;
        this.paidBy = paidBy;
        this.participants = participants;
        this.strategy = strategy;
    }

    split() {
        return this.strategy.split(this);
    }
}

module.exports = Expense;