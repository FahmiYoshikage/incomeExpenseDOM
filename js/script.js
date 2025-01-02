let incomeButton = document.getElementById('incomeButton');
let expenseButton = document.getElementById('expenseButton');

incomeButton.addEventListener('click', () => {
    let inputTransaction = document.getElementById('inputTransaction');
    let inputAmount = document.getElementById('inputAmount');

    console.log(inputTransaction.value, inputAmount.value);
});

console.log(incomeButton, expenseButton);