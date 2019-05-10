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
        text: 'What was your rounded Winter 2018-2019 (unweighted) G.P.A.?',
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
                this.series.name + ': <b>' + this.y + '</b><br>'  + 'Percentage: <b>' + (this.y/10.09).toFixed(1) + '%</b>';
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
        data: [65, 119, 141, 184, 158, 119, 93, 58, 26, 12, 14, 7, 4, 4, 2, 0, 1, 0, 0, 0, 2]
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
    formatter: barTooltipFormatter
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: 300,
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
        height: 300,
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
        text: 'Average GPA by hours spent on coursework',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        formatter: function () {
            return '<b>Time spent: ' + this.x + '</b><br>' +
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
        name: 'Average',
        data: [5.54, 4.96, 5.34, 5.30, 5.35, 5.29, 5.27, 5.17, 5.14, 4.93]
    }]
});

Highcharts.chart('q-gpaVsSleep', {
    chart: {
        type: 'area',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Average GPA by amount of sleep',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        formatter: function () {
            return '<b>Sleep: ' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>';
        }
    },
    xAxis: {
        categories: ['>=10', '9', '8', '7', '6', '5', '4', '3', '2'],
        title: {
            text: 'Amount of sleep in hours',
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
        name: 'Average',
        data: [5.60, 5.20, 5.30, 5.28, 5.14, 5.15, 5.12, 4.80, 4.90]
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
    formatter: barTooltipFormatter
  },
  plotOptions: {
    pie: {
      colors: pieColors,
      borderWidth: 1,
      borderColors: 'white',
      size: 300,
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
        text: '"4" as a good grade by course preference',
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
            return '<b>' + this.x + ": " + this.series.name + '</b><br>' +
                'Percentage: <b>' + this.y + '%</b><br>';
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

var chart = Highcharts.chart('q-grading-disparity', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'In which department(s), if any, is/are there an unreasonable grading disparity between teachers?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#14195c'],
  xAxis: {
    categories: ['Art', 'Computer Science', 'English', 'History and Social Science', 'Mathematics', 'Music', 'Natural Sciences', 'Philosophy and Religious Studies', 'Physical Education', 'Statistics', 'Theatre and Dance', 'World Languages', 'Not Applicable']
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.18).toFixed(1) + "%</b>";
      }
  },
  series: [{
    data: [331, 40, 855, 634, 166, 127, 208, 271, 31, 33, 59, 277, 72],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-switch-teacher', {
  chart: {
      type: 'bar',
      height: 200,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever switched or attempted to switch teachers within the same course <br>in order to attain a better grade?',
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
      enabled: true
  },
  tooltip: {
      formatter: function () {
          return '<b>' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*1020).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [42.55],
      color: '#14195c'
  }, {
      name: 'No',
      data: [57.45],
      color: '#53589b'
  }]
});

var chart = Highcharts.chart('q-extracurricular', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you participate in any extracurriculars because you think <br>they will increase your chances of getting into a selective college?',
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
      size: 300,
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
        name: 'Yes, solely',
        y: 42,
      },
      {
        name: 'Yes, mostly',
        y: 140,
      },
      {
        name: 'Yes, partly',
        y: 536,
      },
      {
        name: 'No',
        y: 297,
      }
    ]
  }]
});

var chart = Highcharts.chart('q-andover-college-senior', {
  chart: {
      type: 'bar',
      height: 150,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you think attending Andover affects your chances of attending a selective college?',
    style: {
      fontWeight: 'bold'
    }
  },
  subtitle: {
    text: 'Senior',
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
          return '<b>Senior: ' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*276).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
      }
  },
  plotOptions: {
      series: {
          stacking: 'percent',
          pointWidth: 50
      }
  },
  series: [{
      name: 'Yes, positively',
      data: [50.72],
      color: '#14195c'
  }, {
      name: 'Yes, negatively',
      data: [43.84],
      color: '#53589b'
  }, {
      name: 'No',
      data: [5.43],
      color: '#9398db'
  }]
});

var chart = Highcharts.chart('q-andover-college-upper', {
  chart: {
      type: 'bar',
      height: 150,
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
    text: 'Upper',
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
          return '<b>Upper: ' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*276).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
      }
  },
  plotOptions: {
      series: {
          stacking: 'percent',
          pointWidth: 50
      }
  },
  series: [{
      name: 'Yes, positively',
      data: [45.32],
      color: '#14195c'
  }, {
      name: 'Yes, negatively',
      data: [48.31],
      color: '#53589b'
  }, {
      name: 'No',
      data: [6.37],
      color: '#9398db'
  }]
});

var chart = Highcharts.chart('q-andover-college-lower', {
  chart: {
      type: 'bar',
      height: 150,
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
    text: 'Lower',
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
          return '<b>Lower: ' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*276).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
      }
  },
  plotOptions: {
      series: {
          stacking: 'percent',
          pointWidth: 50
      }
  },
  series: [{
      name: 'Yes, positively',
      data: [61.36],
      color: '#14195c'
  }, {
      name: 'Yes, negatively',
      data: [32.2],
      color: '#53589b'
  }, {
      name: 'No',
      data: [6.44],
      color: '#9398db'
  }]
});

var chart = Highcharts.chart('q-andover-college-junior', {
  chart: {
      type: 'bar',
      height: 200,
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
    text: 'Junior',
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
      enabled: true
  },
  tooltip: {
      formatter: function () {
          return '<b>Junior: ' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*276).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
      }
  },
  plotOptions: {
      series: {
          stacking: 'percent',
          pointWidth: 50
      }
  },
  series: [{
      name: 'Yes, positively',
      data: [64.36],
      color: '#14195c'
  }, {
      name: 'Yes, negatively',
      data: [28.71],
      color: '#53589b'
  }, {
      name: 'No',
      data: [6.93],
      color: '#9398db'
  }]
});
