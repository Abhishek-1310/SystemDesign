const SplitStrategy = require('../../interface/splitStrategy');

class EqualSplit extends SplitStrategy {
    split(expense) {
        const amountPerPerson =
            expense.amount / expense.participants.length;

        return expense.participants.map(p => ({
            user: p.user,
            amount: amountPerPerson
        }));
    }
}

module.exports = EqualSplit;