// Any javascript needed for the dataOne goes here
// hint- remember to import them in your handlebars!

document.addEventListener('DOMContentLoaded', async () => {
    const pi = document.getElementById('pieChart').getContext('2d')

    const response = await fetch("/api/userdata", {
        method: "GET",
    })

    //console.log(response)
    const userdata = await response.json();
    console.log(userdata.expenses)
    console.log(userdata.incomes)
    const expensesData = userdata.expenses.map(expense => expense.amount);
    const incomeData = userdata.incomes.map(income => income.amount);

    const dataChart = new Chart(pi,
        {
            type: 'doughnut',
            data: {
                labels: ['Expenses', 'Income'],
                datasets: [{
                    label: 'User Data',
                    data: [expensesData.reduce((a, b) => a + b, 0), incomeData.reduce((a, b) => a + b, 0)],
                    backgroundColor: [ // Background colors for each section
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',

                    ],
                    borderColor: [ // Border colors for each section
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 1 // Border width for each section
                }]
            },
            options: {
                responsive: true,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const dataset = data.datasets[tooltipItem.datasetIndex];
                        const total = dataset.data.reduce((acc, val) => acc + val, 0);
                        const currentValue = dataset.data[tooltipItem.index];
                        const percentage = ((currentValue / total) * 100).toFixed(2);
                        return `${data.labels[tooltipItem.index]}: ${currentValue} (${percentage}%)`;
                    }
                }
            }
        }
    )
})
console.log("This is page-one.js talking!");

