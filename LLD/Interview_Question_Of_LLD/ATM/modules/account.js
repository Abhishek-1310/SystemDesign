class Account {
    constructor(accountNo, balance) {
        this.accountNo = accountNo;
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    hasSufficentBalance(amt) {
        if (this.balance < amt) {
            console.log('you have unsufficent balance in your account', this.accountNo);
            return false;
        }
        return true;
    }
    withdraw(amount) {
        this.balance -= amount;
        console.log(`${amount} is debited from your account ${this.accountNo}`);
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`${amount} is credited to your account ${this.accountNo}`);
    }
}
module.exports = Account;