Highcharts.chart('q-gpa', {
    chart: {
        type: 'area',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'What was your rounded Winter 2017-2018 (unweighted) G.P.A.?',
        style: {
          fontWeight: 'bold'
        }
    },
    subtitle: {
      text: '<i>Note: If respondents were between two numbers, they were instructed to round up to the next closest decimal — a 5.3 G.P.A. would round to a 5.4</i>'
    },
    legend: {
        enabled: false
    },
    xAxis: {
        categories: ['6.0', '5.8', '5.6', '5.4', '5.2', '5.0', '4.8', '4.6', '4.4', '4.2', '4.0', '3.8', '3.6', '3.4', '3.2', '3.0', '2,8', '2.6', '2.4', '2.2', '2.0'],
    },
    yAxis: {
        title: {
            text: 'Respondents'
        }
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5,
            color: "#663399"
        },
        dataLabels: {
          enabled: true,
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    series: [{
        name: 'Responses',
        data: [29, 42, 69, 72, 71, 57, 46, 36, 12, 8, 11, 5, 1, 3, 0, 0, 0, 0, 0, 0, 2]
    }]
});
