const SplitStrategy = require('../../interface/splitStrategy');

class PercentageSplit extends SplitStrategy {
    split(expense) {
        return expense.participants.map(p => ({
            user: p.user,
            amount: expense.amount * p.value / 100
        }));
    }
}
module.exports = PercentageSplit;