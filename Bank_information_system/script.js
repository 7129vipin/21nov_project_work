// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; // Assume all accounts are initially active
}

// Add methods to the BankAccount prototype
BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    } else {
        console.log("Invalid deposit amount.");
    }
};

BankAccount.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
        console.log("Invalid withdrawal amount or insufficient balance.");
    }
};

BankAccount.prototype.checkBalance = function() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
};

BankAccount.prototype.isActive = function() {
    return this.active;
};

// Function to calculate and return the total balance of all active accounts
function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}

// Create multiple BankAccount objects
const account1 = new BankAccount(1, "John Doe", "Savings", 1000);
const account2 = new BankAccount(2, "Jane Doe", "Checking", 1500);
const account3 = new BankAccount(3, "Bob Smith", "Savings", 2000);

// Perform operations on accounts
account1.deposit(500);
account2.withdraw(200);
account3.deposit(1000);
account1.checkBalance();
account2.checkBalance();
account3.checkBalance();

// Test isActive method
console.log(`Account 1 active: ${account1.isActive()}`);
console.log(`Account 2 active: ${account2.isActive()}`);
console.log(`Account 3 active: ${account3.isActive()}`);

// Test getTotalBalance function
const allAccounts = [account1, account2, account3];
const totalBalance = getTotalBalance(allAccounts);
console.log(`Total balance of all active accounts: ${totalBalance}`);
