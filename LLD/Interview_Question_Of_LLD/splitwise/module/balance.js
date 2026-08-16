class Balance {
    constructor(fromUser, toUser, amount) {
        this.fromUser = fromUser;
        this.toUser = toUser;
        this.amount = amount;
    }

    settle(amount) {
        if (amount > this.amount) {
            throw new Error("Cannot pay more than owed amount");
        }

        this.amount -= amount;

        console.log(
            `${this.fromUser.name} paid ₹${amount} to ${this.toUser.name}`
        );
    }
}
module.exports = Balance;