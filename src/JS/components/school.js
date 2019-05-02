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
      text: '<i>Note: If respondents were between two numbers, they were instructed to round up</i><br><i>to the next closest decimal — a 5.3 G.P.A. would round to a 5.4</i>'
    },
    legend: {
        enabled: false
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>';
        }
    },
    xAxis: {
        categories: ['6.0', '5.8', '5.6', '5.4', '5.2', '5.0', '4.8', '4.6', '4.4', '4.2', '4.0', '3.8', '3.6', '3.4', '3.2', '3.0', '2,8', '2.6', '2.4', '2.2', '<=2.0'],
    },
    yAxis: {
        title: {
            text: 'Respondents',
            style: {
              color: 'black',
              fontWeight: 'bold'
            }
        }
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5,
            color: "#14195c"
        },
        dataLabels: {
          enabled: false,
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

var pieColors = (function() {
  var colors = [],
    base = '#14195c',
    i;

  for (i = 0; i < 10; i += 1) {
    colors.push(Highcharts.Color(base).brighten((i) / 4).get());
  }
  return colors;
}());

var chart = Highcharts.chart('q-four', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you think a "4" is a good grade?',
    style: {
      fontWeight: 'bold'
    }
  },
  subtitle: {
    text: '<i>According to the Blue Book...</i>'
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
        y: 214,
      },
      {
        name: 'No',
        y: 803,
      }
    ]
  }]
});

Highcharts.chart('q-avghrs', {
    chart: {
        type: 'column',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'How many hours do you spend on coursework outside of class each day?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#14195c'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>';
        }
    },
    xAxis: {
        categories: ['>=10', '9', '8', '7', '6', '5', '4', '3', '2', '<=1'],
        title: {
          text: 'Time spent in hours',
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
      data: [7, 5, 10, 25, 74, 193, 305, 258, 114, 29],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

Highcharts.chart('q-gpaVsHrs', {
    chart: {
        type: 'area',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Average GPA by Hours spent on coursework',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>';
        }
    },
    xAxis: {
        categories: ['>=10', '9', '8', '7', '6', '5', '4', '3', '2', '<=1'],
        title: {
            text: 'Time spent on coursework in hours',
            style: {
              color: 'black',
              fontWeight: 'bold'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Average GPA',
            style: {
              color: 'black',
              fontWeight: 'bold'
            }
        }
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5,
            color: "#14195c"
        },
        dataLabels: {
          enabled: false
        }
    },
    series: [{
        name: 'Responses',
        data: [4.56, 5.24, 5.25, 5.20, 5.21, 5.26, 5.22, 5.12, 4.95, 5.12]  // TODO: add real data
    }]
});

var chart = Highcharts.chart('q-pref', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you typically prefer STEM courses or humanities courses?',
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
        name: 'STEM',
        y: 444,
      },
      {
        name: 'Humanities',
        y: 360,
      },
      {
        name: 'No Preference',
        y: 214,
      }
    ]
  }]
});

var chart = Highcharts.chart('q-gpaVsPref', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Average GPA by Course preference',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#14195c'],
  xAxis: {
    categories: ['STEM', 'Humanities', 'No Preference'],
    title: {
      text: 'Course Preference',
      style: {
        color: 'black',
        fontWeight: 'bold'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'GPA',
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
              this.series.name + ': <b>' + this.y + '</b><br>';
      }
  },
  series: [{
    data: [5.26, 5.18, 5.26],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Average'
  }]
});

var chart = Highcharts.chart('q-fourVsPref', {
    chart: {
        type: 'bar',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: '"4" as a good grade by Course preference',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    colors: ['#14195c'],
    xAxis: {
        categories: ['STEM', 'Humanities', 'No Preference'],
        title: {
          text: 'Course Preference',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Responses in percent',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br>' +
                this.x + ': <b>' + this.y + '%</b><br>';
        }
    },
    series: [{
        name: 'Yes',
        data: [17.65, 22.56, 25.23],
    }, {
        name: 'No',
        data: [82.35, 77.44, 74.77],
    }]
});
