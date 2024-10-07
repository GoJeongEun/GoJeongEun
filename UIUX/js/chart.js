
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
               
                'rgba(54, 162, 235, 0.0)', // 채우기 컬러 X
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
        maintainAspectRatio: false, // 비율이 아닌 부모의 크기에 맞춰 조절
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
            title: { //차트 타이틀 추가
                display: true,
                position:'top',
                text: "color chart",
                font: {
                  size: 18,
                  color:'#000'
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
        borderWidth: 1 //차트 border
        }, //데이터 추가 시 
        {
            label:'# test name2',
            data: [1, 12, 30, 2, 5, 10],
            borderWidth:1
        }
    
    ]
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

    //S 레이더 차트
    const newRbar = document.getElementById('radar');
    const radar = new Chart(newRbar, {
        type: 'radar',
        data: {
            labels: [
                'Eating',
                'Drinking',
                'Sleeping',
                'Designing',
                'Coding',
                'Cycling',
                'Running'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
              }, {
                label: 'My Second Dataset',
                data: [28, 48, 40, 19, 96, 27, 100],
                fill: '-1', //https://www.chartjs.org/docs/latest/charts/area.html option 참고
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
              }]
        }
    });
    //E 레이더 차트

    //S 믹스 차트(line & bar)
    const newScatter = document.getElementById('scatter');
    const scatter = new Chart(newScatter, {
        type: 'scatter',
        data: {
            labels: [
                'Eating',
                'Drinking',
                'Sleeping',
                'Designing',
                'Coding',
                'Cycling',
                'Running'
              ],
              datasets: [{
                type: 'bar',
                label: 'mix bar',
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true, 
                //type: bar의 경우 차트마다 색상을 각각 줄 수 있음 
                backgroundColor: [ 
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(0, 0, 128, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
              }, {
                type: 'line',
                label: 'mix line',
                data: [28, 48, 40, 19, 96, 27, 100],
                borderWidth: 2,
                fill: true, //색상채우기
                backgroundColor: 'rgba(174, 250, 60, 0.2)',
                borderColor: 'rgb(174, 250, 60)',
                pointBackgroundColor: 'rgb(174, 250, 60)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(174, 250, 60)'
              }]
        }
    });
    //E 믹스 차트(line & bar)
});