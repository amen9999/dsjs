let transactions = [];
let total = 0;

document.getElementById("addTransaction").addEventListener("click", function() {
    let date = document.getElementById("date").value;
    let desc = document.getElementById("desc").value;
    let amount = parseFloat(document.getElementById("amount").value);
    let type = document.getElementById("type").value;

    if (date && desc && amount) {
        transactions.push({ date, desc, type, amount });
        total += type === "Expense" ? -amount : amount;
        updateUI();
        saveToLocalStorage();
    }
});

document.getElementById("clearAll").addEventListener("click", function() {
    transactions = [];
    total = 0;
    localStorage.removeItem("transactions");
    updateUI();
});

function saveToLocalStorage() {
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function loadFromLocalStorage() {
    transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    total = transactions.reduce(
        (sum, transaction) => sum + (transaction.type === "Expense" ? -transaction.amount : transaction.amount),
        0
    );
    updateUI();
}

loadFromLocalStorage();