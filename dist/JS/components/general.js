var chart = Highcharts.chart('q-class', {
    chart: {
        style: {
            fontFamily: 'Gotham', fontSize: '15px'
        }
    },
    title: {
        text: 'What class are you in?'
    },
    colors: ['#1f3a93'],
    xAxis: {
         categories: ['Junior', 'Lower', 'Upper', 'Senior'],
         title: {
            text: 'Class'
         }
    },
    yAxis: {
      min: 0,
         title: {
            text: 'Responses',
            verticalAlign: 'center'
         },
         labels: {
            overflow: 'justify'
         }
    },
    legend: {
      enabled: false
    },
    series: [{
        data: [214, 275, 271, 286],
        type: 'bar',
        dataLabels: {
            enabled: true
        },
        name: 'Classes'
    }]
});
