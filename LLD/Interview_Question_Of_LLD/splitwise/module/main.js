const User = require('./user');
const Group = require('./group');
const Expense = require('./expense');

const EqualSplit = require('./split/equalSplit');
const ExactSplit = require('./split/exactSplit');
const PercentageSplit = require('./split/percentageSplit');

const user1 = new User(1, 'abhishek');
const user2 = new User(2, 'ravi');
const user3 = new User(3, 'raj');
const user4 = new User(4, 'adi');
const user5 = new User(5, 'rahul');
const user6 = new User(6, 'dean');

const equalSplit = new EqualSplit();

const equalExpense = new Expense(1, 2000, user1, [{ user: user1 },
{ user: user2 },
{ user: user3 }], equalSplit);

const percentageSplit = new PercentageSplit();

const percentageExpense = new Expense(2, 1000, user2, [
    { user: user1, value: 50 },
    { user: user2, value: 30 },
    { user: user3, value: 20 }], percentageSplit
);

const exactSplit = new ExactSplit();

const exactExpense = new Expense(3, 900, user3, [{ user: user1, value: 400 }, { user: user2, value: 300 },
{ user: user3, value: 200 }], exactSplit);

const group = new Group(1, 'keralaTrip');

group.addUser(user1);
group.addUser(user2);
group.addUser(user3);

group.addExpense(equalExpense);
group.addExpense(percentageExpense);
group.addExpense(exactExpense);

// group.showBalances();

group.settleBalance(user3, user1, 166);

group.settleBalance(user2, user1, 166);

group.showBalances();
