function updateUI() {
    let list = document.getElementById("transactionList");
    list.innerHTML = "";

    transactions.forEach(transaction => {
        let row = document.createElement("tr");
        let amountClass = transaction.type === "Expense" ? "expense" : "income";
        
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.desc}</td>
            <td>${transaction.type}</td>
            <td class="${amountClass}">$${transaction.amount.toFixed(2)}</td>
        `;
        list.appendChild(row);
    });

    document.getElementById("total").textContent = total.toFixed(2);
}