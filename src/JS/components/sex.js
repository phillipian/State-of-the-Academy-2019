var pieColors = (function() {
  var colors = [],
    base = '#dc308a',
    i;

  for (i = 0; i < 10; i += 1) {
    colors.push(Highcharts.Color(base).brighten((i) / 8).get());
  }
  return colors;
}());

var chart = Highcharts.chart('q-sex-overall', {
    chart: {
        type: 'column',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Have you ever engaged in sexual activity?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#dc308a'],
    xAxis: {
        categories: ['Anal', 'Digital','Oral','Vaginal','Not Applicable'],
        title: {
          text: 'Sexual Act',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    yAxis: {
      min: 0,
      max: 600,
      title: {
        text: 'Responses',
        verticalAlign: 'center',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
      },
      labels: {
        overflow: 'justify'
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Responses',
      data: [58, 363, 377, 252, 586]
    }],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' + this.series.name + ': <b>' + this.y + '</b><br>' +
            'Percentage: ' + '<b>' + ((this.y)/16.36).toFixed(1) + '%</b><br>';
        }
    }
});

var chart = Highcharts.chart('q-sex-senior', {
    chart: {
        type: 'column',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Have you ever engaged in sexual activity?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#dc308a'],
    xAxis: {
        categories: ['Anal', 'Digital','Oral','Vaginal','Not Applicable'],
        title: {
          text: 'Sexual Act',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    yAxis: {
      min: 0,
      max: 600,
      title: {
        text: 'Responses',
        verticalAlign: 'center',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
      },
      labels: {
        overflow: 'justify'
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Responses',
      data: [25, 154, 162, 121, 102]
    }],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' + this.series.name + ': <b>' + this.y + '</b><br>' +
            'Percentage: ' + '<b>' + ((this.y)/5.64).toFixed(1) + '%</b><br>';
        }
    }
});

Highcharts.chart('q-sex-upper', {
    chart: {
        type: 'column',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Have you ever engaged in sexual activity?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#dc308a'],
    xAxis: {
        categories: ['Anal', 'Digital','Oral','Vaginal','Not Applicable'],
        title: {
          text: 'Sexual Act',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    yAxis: {
      min: 0,
      max: 600,
      title: {
        text: 'Responses',
        verticalAlign: 'center',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
      },
      labels: {
        overflow: 'justify'
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Responses',
      data: [25, 105, 119, 88, 133]
    }],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' + this.series.name + ': <b>' + this.y + '</b><br>' +
            'Percentage: ' + '<b>' + ((this.y)/4.70).toFixed(1) + '%</b><br>';
        }
    }
});

Highcharts.chart('q-sex-lower', {
    chart: {
        type: 'column',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Have you ever engaged in sexual activity?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#dc308a'],
    xAxis: {
        categories: ['Anal', 'Digital','Oral','Vaginal','Not Applicable'],
        title: {
          text: 'Sexual Act',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    yAxis: {
      min: 0,
      max: 600,
      title: {
        text: 'Responses',
        verticalAlign: 'center',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
      },
      labels: {
        overflow: 'justify'
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Responses',
      data: [6, 74, 74, 30, 177]
    }],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' + this.series.name + ': <b>' + this.y + '</b><br>' +
            'Percentage: ' + '<b>' + ((this.y)/3.61).toFixed(1) + '%</b><br>';
        }
    }
});

Highcharts.chart('q-sex-junior', {
    chart: {
        type: 'column',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Have you ever engaged in sexual activity?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#dc308a'],
    xAxis: {
        categories: ['Anal', 'Digital','Oral','Vaginal','Not Applicable'],
        title: {
          text: 'Sexual Act',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    yAxis: {
      min: 0,
      max: 600,
      title: {
        text: 'Responses',
        verticalAlign: 'center',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
      },
      labels: {
        overflow: 'justify'
      }
    },
    legend: {
      enabled: false
    },
    series: [{
      name: 'Responses',
      data: [2, 30, 22, 13, 174]
    }],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' + this.series.name + ': <b>' + this.y + '</b><br>' +
            'Percentage: ' + '<b>' + ((this.y)/2.41).toFixed(1) + '%</b><br>';
        }
    }
});

var chart = Highcharts.chart('q-masturbation-frequency', {
    chart: {
        type: 'bar',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'If you masturbate, how frequently, on average, do you do so?',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    colors: pieColors,
    xAxis: {
        categories: ['Man', 'Woman']
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Responses',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Responses: <b>' + this.y + '</b><br>';
        }
    },
    series: [{
        name: 'Daily',
        data: [193, 34],
    }, {
        name: 'Weekly',
        data: [210, 141],
    }, {
        name: 'About once per month',
        data: [22, 76],
    }, {
        name: 'Several times a year',
        data: [10, 32],
    }, {
        name: 'Once a year or less',
        data: [5, 27],
    }, {
        name: 'Not applicable, I have never masturbated',
        data: [24, 231],
    }]
});

var chart = Highcharts.chart('q-masturbation-comfortable-man', {
  chart: {
      type: 'bar',
      height: 140,
      marginTop: 40,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Would you feel comfortable telling your friends that you masturbate?',
    style: {
      fontWeight: 'bold'
    }
  },
  subtitle: {
    text: 'Man',
    style: {
      fontWeight: 'bold'
    }
  },
  xAxis: {
      visible: false
  },
  yAxis: {
      visible: false,
      reversedStacks: false
  },
  legend: {
      enabled: false
  },
  tooltip: {
      formatter: function () {
          return '<b>' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*465).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
      }
  },
  plotOptions: {
      series: {
          stacking: 'percent',
          pointWidth: 50
      }
  },
  series: [{
      name: 'Yes',
      data: [77.2],
      color: '#dc308a'
  }, {
      name: 'No',
      data: [22.8],
      color: '#ff85df'
  }]
});

var chart = Highcharts.chart('q-masturbation-comfortable-woman', {
  chart: {
      type: 'bar',
      height: 140,
      marginTop: 25,
      marginBottom: 40,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: null
  },
  subtitle: {
    text: 'Woman',
    style: {
      fontWeight: 'bold'
    }
  },
  xAxis: {
      visible: false
  },
  yAxis: {
      visible: false,
      reversedStacks: false
  },
  legend: {
      enabled: true,
      y: 10
  },
  tooltip: {
      formatter: function () {
          return '<b>' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*541).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
      }
  },
  plotOptions: {
      series: {
          stacking: 'percent',
          pointWidth: 50
      }
  },
  series: [{
      name: 'Yes',
      data: [32.9],
      color: '#dc308a'
  }, {
      name: 'No',
      data: [67.1],
      color: '#ff85df'
  }]
});

var pieColors = (function() {
  var colors = [],
    base = '#dc308a',
    i;

  for (i = 0; i < 10; i += 1) {
    colors.push(Highcharts.Color(base).brighten((i) / 3).get());
  }
  return colors;
}());

var chart = Highcharts.chart('q-relationship-overall', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever been in a committed relationship?',
    style: {
      fontWeight: 'bold'
    }
  },
  tooltip: {
    formatter: barTooltipFormatter
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: '100%',
      showInLegend: true,
      dataLabels: {
        enabled: false
      }
    }
  },
  series: [{
    name: 'Responses',
    colorByPoint: true,
    data: [{
        name: 'Yes, but not currently',
        y: 328
      },
      {
        name: 'Yes, currently',
        y: 145
      },
      {
        name: 'No',
        y: 544
      }
    ]
  }]
});

var chart = Highcharts.chart('q-relationship-senior', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever been in a committed relationship?',
    style: {
      fontWeight: 'bold'
    }
  },
  tooltip: {
    formatter: barTooltipFormatter
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: '100%',
      showInLegend: true,
      dataLabels: {
        enabled: false
      }
    }
  },
  series: [{
    name: 'Responses',
    colorByPoint: true,
    data: [{
        name: 'Yes, but not currently',
        y: 89
      },
      {
        name: 'Yes, currently',
        y: 60
      },
      {
        name: 'No',
        y: 128
      }
    ]
  }]
});

var chart = Highcharts.chart('q-relationship-upper', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever been in a committed relationship?',
    style: {
      fontWeight: 'bold'
    }
  },
  tooltip: {
    formatter: barTooltipFormatter
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: '100%',
      showInLegend: true,
      dataLabels: {
        enabled: false
      }
    }
  },
  series: [{
    name: 'Responses',
    colorByPoint: true,
    data: [{
        name: 'Yes, but not currently',
        y: 86
      },
      {
        name: 'Yes, currently',
        y: 48
      },
      {
        name: 'No',
        y: 132
      }
    ]
  }]
});

var chart = Highcharts.chart('q-relationship-lower', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever been in a committed relationship?',
    style: {
      fontWeight: 'bold'
    }
  },
  tooltip: {
    formatter: barTooltipFormatter
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: '100%',
      showInLegend: true,
      dataLabels: {
        enabled: false
      }
    }
  },
  series: [{
    name: 'Responses',
    colorByPoint: true,
    data: [{
        name: 'Yes, but not currently',
        y: 97
      },
      {
        name: 'Yes, currently',
        y: 25
      },
      {
        name: 'No',
        y: 147
      }
    ]
  }]
});

var chart = Highcharts.chart('q-relationship-junior', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever been in a committed relationship?',
    style: {
      fontWeight: 'bold'
    }
  },
  tooltip: {
    formatter: barTooltipFormatter
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: '100%',
      showInLegend: true,
      dataLabels: {
        enabled: false
      }
    }
  },
  series: [{
    name: 'Responses',
    colorByPoint: true,
    data: [{
        name: 'Yes, but not currently',
        y: 56
      },
      {
        name: 'Yes, currently',
        y: 12
      },
      {
        name: 'No',
        y: 137
      }
    ]
  }]
});

var chart = Highcharts.chart('q-sex-pressure', {
    chart: {
        type: 'bar',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Have you ever felt pressured by a partner to engage in sexual activity?',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    colors: pieColors,
    xAxis: {
        categories: ['Man', 'Woman']
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Responses',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Responses: <b>' + this.y + '</b><br>';
        }
    },
    series: [{
        name: 'Yes',
        data: [39, 129],
    }, {
        name: 'No',
        data: [290, 206],
    }, {
        name: 'Not Applicable',
        data: [137, 209],
    }]
});

var chart = Highcharts.chart('q-consent', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you consistently ask your partner for verbal consent?',
    style: {
      fontWeight: 'bold'
    }
  },
  tooltip: {
    formatter: barTooltipFormatter
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: '100%',
      showInLegend: true,
      dataLabels: {
        enabled: false
      }
    }
  },
  series: [{
    name: 'Responses',
    colorByPoint: true,
    data: [{
        name: 'Yes',
        y: 355,
      },
      {
        name: 'No',
        y: 103
      },
      {
        name: 'Not Applicable',
        y: 566
      }
    ]
  }]
});

Highcharts.chart('q-protection', {
    chart: {
        type: 'column',
        height: 350,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Do you use barrier method protection while engaging in sexual activity?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#dc308a'],
    xAxis: {
        categories: ['Yes, condoms', 'Yes, dental dams','Yes, other','No','Not Applicable'],
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Responses',
        verticalAlign: 'center',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
      },
      labels: {
        overflow: 'justify'
      }
    },
    legend: {
      enabled: false
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.23).toFixed(1) + '%</b>';
        }
    },
    series: [{
      data: [225, 2, 12, 113, 671],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

var pieColors2 = (function() {
  var colors = [],
    base = '#dc308a',
    i;

  for (i = 0; i < 10; i += 1) {
    colors.push(Highcharts.Color(base).brighten((i) / 8).get());
  }
  return colors;
}());

var chart = Highcharts.chart('q-sexual-harass', {
    chart: {
        type: 'bar',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Have you ever been sexually harassed<br> (received unwanted sexual advances or obscene sexual remarks)?',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    colors: pieColors2,
    xAxis: {
        categories: ['Man', 'Woman']
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Responses',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Responses: <b>' + this.y + '</b><br>';
        }
    },
    series: [{
        name: 'Yes, on and off campus',
        data: [11, 88],
    }, {
        name: 'Yes, on campus',
        data: [12, 23],
    }, {
        name: 'Yes, off campus',
        data: [30, 171],
    }, {
        name: 'No',
        data: [414, 262],
    }]
});

var chart = Highcharts.chart('q-sexual-assault', {
    chart: {
        type: 'bar',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Have you ever been sexually assaulted<br> (received unwanted, nonconsensual sexual contact)?',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    colors: pieColors2,
    xAxis: {
        categories: ['Man', 'Woman']
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Responses',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Responses: <b>' + this.y + '</b><br>';
        }
    },
    series: [{
        name: 'Yes, on and off campus',
        data: [1, 12],
    }, {
        name: 'Yes, on campus',
        data: [10, 22],
    }, {
        name: 'Yes, off campus',
        data: [13, 71],
    }, {
        name: 'No',
        data: [442, 438],
    }]
});

var chart = Highcharts.chart('q-hookup', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you believe that there is a hook-up culture at Andover?',
    style: {
      fontWeight: 'bold'
    }
  },
  subtitle: {
    text: '<i>In the 2018 survey, 90.9% responded "yes" to this question</i>'
  },
  tooltip: {
    formatter: barTooltipFormatter
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: '100%',
      showInLegend: true,
      dataLabels: {
        enabled: false
      }
    }
  },
  series: [{
    name: 'Responses',
    colorByPoint: true,
    data: [{
        name: 'Yes',
        y: 903,
      },
      {
        name: 'No',
        y: 123
      }]
  }]
});

var chart = Highcharts.chart('q-sexEd', {
    chart: {
        type: 'column',
        height: 350,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Do you think that your sexual education at Andover has been/is adequate?',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    colors: pieColors,
    xAxis: {
        categories: ['2019', '2018', '2017', '2016'],
        title: {
          text: 'Years',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
          text: 'Percentage by category',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Percentage: <b>' + this.y + '%</b><br>';
        }
    },
    series: [{
        name: 'Yes',
        data: [73.8, 66.0, 62.0, 53.0],
    }, {
        name: 'No',
        data: [26.2, 34.0, 38.0, 47.0],
    }]
});
