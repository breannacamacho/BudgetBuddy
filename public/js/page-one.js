// Any javascript needed for the dataOne goes here
// hint- remember to import them in your handlebars!

document.addEventListener('DOMContentLoaded', () => {
    const pi = document.getElementById('pieChart').getContext('2d')

    const dataChart = new Chart(pi,
        {
            type: 'doughnut',
            data: {
                labels: ['red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'test',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [ // Background colors for each section
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [ // Border colors for each section
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
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
                        return tooltipItem.label + ': ' + tooltipItem.raw;
                    }
                }
            }
        }
    )
})
console.log("This is page-one.js talking!");
