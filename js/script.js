// DOM getElementById
let incomeButton = document.getElementById('incomeButton');
let expenseButton = document.getElementById('expenseButton');
let totalBalanceElement = document.getElementById('totalBalance');

// Global Variable
let Transaction = {
    income: [],
    expense: []
}

let totalBalance = 0;

// Function
function updateTotalBalance() {
    totalBalanceElement.innerHTML = `Rp. ${totalBalance},00`;
}

// DOM addEventListener
incomeButton.addEventListener('click', () => {
    let inputTransaction = document.getElementById('inputTransaction').value;
    let inputAmount = document.getElementById('inputAmount').value;
    let incomeTransaction = document.getElementById('incomeTransaction');

    incomeTransaction.innerHTML = '';

    let tempObj = {
        transaction: inputTransaction,
        amount: +inputAmount
    }

    Transaction.income.push(tempObj);

    Transaction.income.forEach(item => {
        incomeTransaction.innerHTML += `<li>${item.transaction} 
        <span>Rp. ${item.amount},00</span>
        </li>`;
    })
    totalBalance += +inputAmount;
    updateTotalBalance();
});

expenseButton.addEventListener('click', () => {
    let inputTransaction = document.getElementById('inputTransaction').value;
    let inputAmount = document.getElementById('inputAmount').value;
    let expenseTransaction = document.getElementById('expenseTransaction');

    expenseTransaction.innerHTML = '';

    let tempObj = {
        transaction: inputTransaction,
        amount: +inputAmount
    }

    Transaction.expense.push(tempObj);

    Transaction.expense.forEach(item => {
        expenseTransaction.innerHTML += `<li>${item.transaction} 
        <span>Rp. ${item.amount},00</span>
        </li>`;
    })
    totalBalance -= +inputAmount;
    updateTotalBalance();
})

// Call Function
updateTotalBalance();