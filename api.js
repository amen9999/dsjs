function fetchBudgetData() {
    fetch("https://api.example.com/budget")
        .then(response => response.json())
        .then(data => console.log("Fetched Budget Data:", data))
        .catch(error => console.error("Error fetching data:", error));
}

fetchBudgetData();