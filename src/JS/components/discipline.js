var chart = Highcharts.chart('q-dc', {
  chart: {
      type: 'bar',
      height: 120,
      marginTop: 0,
      marginBottom: 0,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever sat before a Disciplinary Committee (DC)?',
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
          return '<b>' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*1011).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [6.53],
      color: '#da5251'
  }, {
      name: 'No',
      data: [93.47],
      color: '#f97170'
  }]
});

var chart = Highcharts.chart('q-censure-warning', {
  chart: {
      type: 'bar',
      height: 120,
      marginTop: 0,
      marginBottom: 0,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever received a censure or warning?',
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
          return '<b>' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*1009).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [11.99],
      color: '#da5251'
  }, {
      name: 'No',
      data: [88.01],
      color: '#f97170'
  }]
});

var chart = Highcharts.chart('q-probation', {
  chart: {
      type: 'bar',
      height: 120,
      marginTop: 0,
      marginBottom: 0,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever received probation?',
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
          return '<b>' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*1011).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [4.15],
      color: '#da5251'
  }, {
      name: 'No',
      data: [95.85],
      color: '#f97170'
  }]
});

var pieColors = (function() {
  var colors = [],
    base = '#da5251',
    i;

  for (i = 0; i < 10; i += 1) {
    colors.push(Highcharts.Color(base).brighten((i) / 8).get());
  }
  return colors;
}());

var chart = Highcharts.chart('q-major-offense', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever committed a major offense without being caught?',
    style: {
      fontWeight: 'bold'
    }
  },
  subtitle: {
    text: '<i>Major offenses include, but are not limited to: </i><br><i>academic dishonesty, drugs and alcohol, cruising, gambling, and downloading/sharing sexually explicit content</i>'
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
        y: 423,
      },
      {
        name: 'No',
        y: 586,
      }
    ]
  }]
});

var chart = Highcharts.chart('q-cheating', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever cheated on any tests, quizzes, or in-class assessments while at Andover?',
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
        y: 291,
      },
      {
        name: 'No',
        y: 719,
      }
    ]
  }]
});

var chart = Highcharts.chart('q-plagiarism', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever plagiarized while at Andover? ',
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
        y: 109,
      },
      {
        name: 'No',
        y: 901,
      }
    ]
  }]
});

Highcharts.chart('q-parietal', {
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
        text: 'Have you ever had a parietal?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#da5251'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.07).toFixed(1) + '%</b>';
        }
    },
    xAxis: {
        categories: ['Yes, legal', 'Yes, illegal', 'Yes, both legal and illegal', 'No']
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
      data: [113, 112, 250, 532],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

var chart = Highcharts.chart('q-dc-overall', {
  chart: {
      type: 'bar',
      height: 200,
      marginTop: 0,
      marginBottom: 0,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you think that the DC system effectively disciplines <br>students who are caught breaking school rules?',
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
          return '<b>' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*1007).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [46.18],
      color: '#da5251'
  }, {
      name: 'No, discipline should be harsher',
      data: [16.68],
      color: '#f97170'
  }, {
      name: 'No, discipline should be more lenient',
      data: [37.14],
      color: '#ff9190'
  }]
});

var chart = Highcharts.chart('q-dc-censure', {
  chart: {
      type: 'bar',
      height: 200,
      marginTop: 0,
      marginBottom: 0,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you think that the DC system effectively disciplines <br>students who are caught breaking school rules?',
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
          return '<b>' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*121).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [33.06],
      color: '#da5251'
  }, {
      name: 'No, discipline should be harsher',
      data: [8.26],
      color: '#f97170'
  }, {
      name: 'No, discipline should be more lenient',
      data: [58.68],
      color: '#ff9190'
  }]
});

var chart = Highcharts.chart('q-dc-probation', {
  chart: {
      type: 'bar',
      height: 200,
      marginTop: 0,
      marginBottom: 0,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you think that the DC system effectively disciplines <br>students who are caught breaking school rules?',
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
          return '<b>' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*42).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [16.67],
      color: '#da5251'
  }, {
      name: 'No, discipline should be harsher',
      data: [2.38],
      color: '#f97170'
  }, {
      name: 'No, discipline should be more lenient',
      data: [80.95],
      color: '#ff9190'
  }]
});

var chart = Highcharts.chart('q-dc-privilege', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you think that the school’s disciplinary system favors students of privileged backgrounds?',
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
        y: 810,
      },
      {
        name: 'No',
        y: 200,
      }
    ]
  }]
});

var chart = Highcharts.chart('q-search-dorm', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you think that the administration should have the right <br>to search an entire dorm for contraband material?',
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
        y: 432,
      },
      {
        name: 'No',
        y: 572,
      }
    ]
  }]
});

Highcharts.chart('q-room-visit-overall', {
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
        text: 'Do you support a change in room visit rules?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#da5251'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.10).toFixed(1) + '%</b>';
        }
    },
    xAxis: {
        categories: ['Yes, they should be stricter', 'No, they should remain the same', 'Yes, they should be more lenient']
    },
    yAxis: {
      min: 0,
      max: 900,
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
      data: [10, 112, 888],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

Highcharts.chart('q-room-visit-no-sexual', {
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
        text: 'Do you support a change in room visit rules?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#da5251'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/5.79).toFixed(1) + '%</b>';
        }
    },
    xAxis: {
        categories: ['Yes, they should be stricter', 'No, they should remain the same', 'Yes, they should be more lenient']
    },
    yAxis: {
      min: 0,
      max: 900,
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
      data: [9, 91, 479],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

Highcharts.chart('q-room-visit-yes-sexual', {
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
        text: 'Do you support a change in room visit rules?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#da5251'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/4.28).toFixed(1) + '%</b>';
        }
    },
    xAxis: {
        categories: ['Yes, they should be stricter', 'No, they should remain the same', 'Yes, they should be more lenient']
    },
    yAxis: {
      min: 0,
      max: 900,
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
      data: [0, 22, 406],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

Highcharts.chart('q-dc-overtime', {
    chart: {
        type: 'column',
        height: 200,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Discipline over time',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#da5251'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '%</b><br>';
        }
    },
    xAxis: {
        categories: ['2019', '2018', '2017', '2016', '2015', '2014'],
        title: {
          text: 'Years',
          verticalAlign: 'center',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Percentage',
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
      data: [6.5, 5.9, 4.8, 4.4, 4.4, 7.4],
      dataLabels: {
        enabled: false
      },
      name: 'Percentage'
    }]
});
