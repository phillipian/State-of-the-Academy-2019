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
      max: 200,
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
            'Percentage: ' + '<b>' + ((this.y)/2.86).toFixed(2) + '%</b><br>';
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
      max: 200,
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
            'Percentage: ' + '<b>' + ((this.y)/2.71).toFixed(2) + '%</b><br>';
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
      max: 200,
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
            'Percentage: ' + '<b>' + ((this.y)/2.75).toFixed(2) + '%</b><br>';
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
      max: 200,
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
            'Percentage: ' + '<b>' + ((this.y)/2.14).toFixed(2) + '%</b><br>';
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
    colors: ['#dc308a'],
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

var chart = Highcharts.chart('q-masturbation-comfortable', {
  chart: {
      type: 'bar',
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
  colors: ['#dc308a'],
  xAxis: {
      categories: ['Man', 'Woman']
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
          return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Responses: <b>' + this.y + '</b><br>';
      }
  },
  plotOptions: {
      series: {
          stacking: 'normal'
      }
  },
  series: [{
      name: 'No',
      data: [106, 363]
  }, {
      name: 'Yes',
      data: [359, 178]
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
    pointFormat: '{series.name}: <b>{point.y}</b>'
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: 320,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
      }
    }
  },
  series: [{
    name: 'Responses',
    colorByPoint: true,
    data: [{
        name: 'Yes, but I am not currently in a committed relationship',
        y: 89,
      },
      {
        name: 'Yes, I am currently in a committed relationship',
        y: 60
      },
      {
        name: 'No, I have never been in a committed relationship',
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
    pointFormat: '{series.name}: <b>{point.y}</b>'
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: 320,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
      }
    }
  },
  series: [{
    name: 'Responses',
    colorByPoint: true,
    data: [{
        name: 'Yes, but I am not currently in a committed relationship',
        y: 86,
      },
      {
        name: 'Yes, I am currently in a committed relationship',
        y: 48
      },
      {
        name: 'No, I have never been in a committed relationship',
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
    pointFormat: '{series.name}: <b>{point.y}</b>'
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: 320,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
      }
    }
  },
  series: [{
    name: 'Responses',
    colorByPoint: true,
    data: [{
        name: 'Yes, but I am not currently in a committed relationship',
        y: 97,
      },
      {
        name: 'Yes, I am currently in a committed relationship',
        y: 25
      },
      {
        name: 'No, I have never been in a committed relationship',
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
    pointFormat: '{series.name}: <b>{point.y}</b>'
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: 320,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
      }
    }
  },
  series: [{
    name: 'Responses',
    colorByPoint: true,
    data: [{
        name: 'Yes, but I am not currently in a committed relationship',
        y: 56,
      },
      {
        name: 'Yes, I am currently in a committed relationship',
        y: 12
      },
      {
        name: 'No, I have never been in a committed relationship',
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
    colors: ['#dc308a'],
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
    pointFormat: '{series.name}: <b>{point.y}</b>'
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: 320,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
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
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.23).toFixed(2) + '%</b>';
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
    colors: ['#dc308a'],
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
    colors: ['#dc308a'],
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
    pointFormat: '{series.name}: <b>{point.y}</b>'
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: 320,
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: 'black',
          fontWeight: 'bold'
        }
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
    colors: ['#dc308a'],
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
        data: [753, 697, 0, 0],
    }, {
        name: 'No',
        data: [268, 352, 0, 0],
    }]
});
