
document.addEventListener("DOMContentLoaded", function () {
    //도넛차트
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['blue', 'yellow', 'purple', 'pink'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
               
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 99, 132, 0.2)'
               
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
           
            y: {
                beginAtZero: true,
                display:false
            }
        },
        plugins: {
            legend: {
              display: true,
              position: 'bottom'
            },
            title: {
                display: true,
                position:'top',
                text: "color chart",
                font: {
                  size: 18,
                  color:'#333'
                }
              }
          }
    }
});
    //S 바 차트
    const newtBar = document.getElementById('tBar');
    const tBar = new Chart(newtBar, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
        label: '# test name',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
        }]
    },
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
    });
    //E 바 차트
});