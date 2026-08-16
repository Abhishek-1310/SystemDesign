const SplitStrategy = require('../../interface/splitStrategy');

class ExactSplit extends SplitStrategy {
    split(expense) {
        return expense.participants.map(p => ({
            user: p.user,
            amount: p.value
        }));
    }
}
module.exports = ExactSplit;