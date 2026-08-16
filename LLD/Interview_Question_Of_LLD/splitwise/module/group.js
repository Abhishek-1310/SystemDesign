const Balance = require('./balance');
class Group {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.users = [];
        this.expenses = [];
        this.balances = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    addExpense(expense) {
        this.expenses.push(expense);

        const contributions = expense.split();

        for (const contribution of contributions) {
            if (contribution.user !== expense.paidBy) {
                this.addBalance(
                    new Balance(
                        contribution.user,
                        expense.paidBy,
                        contribution.amount
                    )
                );
            }
        }
    }

    addBalance(balance) {
        for (let existBalance of this.balances) {

            // Same direction
            if (
                existBalance.fromUser === balance.fromUser &&
                existBalance.toUser === balance.toUser
            ) {
                existBalance.amount += balance.amount;
                return;
            }

            // Reverse direction
            if (
                existBalance.fromUser === balance.toUser &&
                existBalance.toUser === balance.fromUser
            ) {
                if (existBalance.amount > balance.amount) {

                    existBalance.amount -= balance.amount;
                    return;

                } else if (existBalance.amount === balance.amount) {

                    const index = this.balances.indexOf(existBalance);
                    this.balances.splice(index, 1);
                    return;

                } else {

                    const newAmount =
                        balance.amount - existBalance.amount;

                    const index = this.balances.indexOf(existBalance);
                    this.balances.splice(index, 1);

                    this.balances.push(
                        new Balance(
                            balance.fromUser,
                            balance.toUser,
                            newAmount
                        )
                    );

                    return;
                }
            }
        }

        // No related balance found
        this.balances.push(balance);
    }

    showBalances() {
        for (const balance of this.balances) {
            console.log(
                `${balance.fromUser.name} owes ${balance.toUser.name} ₹${balance.amount}`
            );
        }
    }
    settleBalance(fromUser, toUser, amount) {
        let balance = this.balances.find(b => (b.fromUser == fromUser && b.toUser == toUser));

        if (!balance) {
            console.log('there is nothing to settle');
            return;
        }
        balance.settle(amount);

        this.balances = this.balances.filter(b => b.amount > 0);
    }
}

module.exports = Group;


// Same direction       → add
// Reverse, existing >  → subtract
// Reverse, equal       → remove
// Reverse, new >       → reverse direction
// No related balance   → add new