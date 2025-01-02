let incomeButton = document.getElementById('incomeButton');
let expenseButton = document.getElementById('expenseButton');

incomeButton.addEventListener('click', () => {
    let inputTransaction = document.getElementById('inputTransaction').value;
    let inputAmount = document.getElementById('inputAmount').value;
    let incomeTransaction = document.getElementById('incomeTransaction');

    incomeTransaction.innerHTML += `<li>${inputTransaction} <span>${inputAmount}</span></li>`;
});

expenseButton.addEventListener('click', () => {
    let inputTransaction = document.getElementById('inputTransaction').value;
    let inputAmount = document.getElementById('inputAmount').value;
    let expenseTransaction = document.getElementById('expenseTransaction');

    expenseTransaction.innerHTML += `<li>${inputTransaction} <span>${inputAmount}</span></li>`;
})

console.log(incomeButton, expenseButton);