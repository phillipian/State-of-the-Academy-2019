var chart = Highcharts.chart('q-faculty-diversity', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you think the faculty is lacking in diversity? If so, check all facets that you think are lacking.',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#089181'],
  xAxis: {
    categories: ['Not applicable', 'Ability', 'Ethnicity', 'Gender', 'Political belief', 'Race', 'Religion', 'Sexual orientation', 'Socioeconomic status']
  },
  yAxis: {
    min: 0,
    max: 500,
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.53).toFixed(1) + "%</b>";
      }
  },
  series: [{
    data: [313, 285, 333, 129, 460, 326, 225, 272, 252],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-social-divide', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you feel like there is a social divide at Andover between students of different _________? <br>Check all that apply.',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#089181'],
  xAxis: {
    categories: ['Not applicable', 'Ability', 'Ethnicity', 'Gender', 'Political belief', 'Race', 'Religion', 'Sexual orientation', 'Socioeconomic status']
  },
  yAxis: {
    min: 0,
    max: 700,
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.03).toFixed(1) + "%</b>";
      }
  },
  series: [{
    data: [89, 290, 513, 371, 569, 688, 152, 396, 621],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-identity-comfortable-overall', {
  chart: {
    height: 400,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'While at Andover, have any of the following aspects of your identity significantly and consistently affected your level of comfort in a classroom setting? Check all that apply.',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#089181'],
  xAxis: {
    categories: ['Not applicable', 'Ability', 'Ethnicity', 'Gender', 'Political belief', 'Race', 'Religion', 'Sexual orientation', 'Socioeconomic status']
  },
  yAxis: {
    min: 0,
    max: 700,
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.01).toFixed(1) + "%</b>";
      }
  },
  series: [{
    data: [321, 192, 238, 256, 325, 307, 122, 129, 253],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

Highcharts.chart('q-identity-comfortable-gender', {
    chart: {
        type: 'bar',
        height: 400,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'While at Andover, have any of the following aspects of your identity significantly and consistently affected your level of comfort in a classroom setting? Check all that apply.',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#089181'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '%</b>';
        }
    },
    xAxis: {
        categories: ['Agender', 'Gender fluid', 'Gender queer', 'Man', 'Nonbinary', 'Woman'],
        title: {
          text: 'Gender',
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
        text: 'Responses in percentage',
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
      data: [66.7, 0.0, 66.7, 14.3, 75.0, 34.3],
      dataLabels: {
        enabled: false
      },
      name: 'Percent'
    }]
});

Highcharts.chart('q-identity-comfortable-race', {
    chart: {
        type: 'bar',
        height: 400,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'While at Andover, have any of the following aspects of your identity significantly and consistently affected your level of comfort in a classroom setting? Check all that apply.',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#089181'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '%</b>';
        }
    },
    xAxis: {
        categories: ['Asian', 'Black', 'Native Hawaiian/<br>Pacific Islander', 'Indigenous Peoples <br>of the Americas', 'White'],
        title: {
          text: 'Race',
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
        text: 'Responses in percentage',
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
      data: [35.1, 49.0, 25.0, 40.0, 15.6],
      dataLabels: {
        enabled: false
      },
      name: 'Percent'
    }]
});

Highcharts.chart('q-identity-comfortable-sexual-orientation', {
    chart: {
        type: 'bar',
        height: 400,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'While at Andover, have any of the following aspects of your identity significantly and consistently affected your level of comfort in a classroom setting? Check all that apply.',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#089181'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '%</b>';
        }
    },
    xAxis: {
        categories: ['Asexual', 'Bisexual', 'Demisexual', 'Heterosexual', 'Homosexual', 'Pansexual', 'Other', 'Unsure'],
        title: {
          text: 'Sexual Orientation',
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
        text: 'Responses in percentage',
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
      data: [33.3, 37.5, 20.0, 5.7, 69.6, 72.7, 50.0, 20.0],
      dataLabels: {
        enabled: false
      },
      name: 'Percent'
    }]
});

var chart = Highcharts.chart('q-discriminated-overall', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever felt discriminated against at Andover due to your _________? <br>Check all that apply.',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#089181'],
  xAxis: {
    categories: ['Not applicable', 'Ability', 'Ethnicity', 'Gender', 'Political belief', 'Race', 'Religion', 'Sexual orientation', 'Socioeconomic status']
  },
  yAxis: {
    min: 0,
    max: 700,
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.00).toFixed(1) + "%</b>";
      }
  },
  series: [{
    data: [448, 102, 191, 199, 196, 259, 76, 72, 162],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

Highcharts.chart('q-discriminated-gender', {
    chart: {
        type: 'bar',
        height: 400,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Have you ever felt discriminated against at Andover due to your _________? <br>Check all that apply.',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#089181'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '%</b>';
        }
    },
    xAxis: {
        categories: ['Agender', 'Gender fluid', 'Gender queer', 'Man', 'Nonbinary', 'Woman'],
        title: {
          text: 'Gender',
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
        text: 'Responses in percentage',
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
      data: [66.7, 100.0, 33.3, 10.4, 25.0, 27.3],
      dataLabels: {
        enabled: false
      },
      name: 'Percent'
    }]
});

Highcharts.chart('q-discriminated-ethnicity', {
    chart: {
        type: 'bar',
        height: 400,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Have you ever felt discriminated against at Andover due to your _________? <br>Check all that apply.',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#089181'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '%</b>';
        }
    },
    xAxis: {
        categories: ['African', 'African American', 'Asian American', 'East Asian', 'Ethnically Jewish', 'Hispanic', 'Latinx', 'Middle Eastern', 'Native American', 'Pacific Islander', 'South Asian', 'Southeast Asian', 'West Indian/Caribbean', 'White', 'White Hispanic', 'Other'],
        title: {
          text: 'Ethnicity',
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
        text: 'Responses in percentage',
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
      data: [66.7, 52.5, 62.1, 63.0, 44.4, 51.0, 61.1, 40.0, 53.9, 50.0, 70.6, 58.8, 68.4, 43.1, 48.5, 45.5],
      dataLabels: {
        enabled: false
      },
      name: 'Percent'
    }]
});

Highcharts.chart('q-discriminated-sexual-orientation', {
    chart: {
        type: 'bar',
        height: 400,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Have you ever felt discriminated against at Andover due to your _________? <br>Check all that apply.',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#089181'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '%</b>';
        }
    },
    xAxis: {
        categories: ['Asexual', 'Bisexual', 'Demisexual', 'Heterosexual', 'Homosexual', 'Pansexual', 'Other', 'Unsure'],
        title: {
          text: 'Sexual Orientation',
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
        text: 'Responses in percentage',
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
      data: [13.3, 24.0, 0.0, 3.2, 34.8, 40.9, 50.0, 10.0],
      dataLabels: {
        enabled: false
      },
      name: 'Percent'
    }]
});

var pieColors = (function() {
  var colors = [],
    base = '#089181',
    i;

  for (i = 0; i < 10; i += 1) {
    colors.push(Highcharts.Color(base).brighten((i) / 5).get());
  }
  return colors;
}());

var chart = Highcharts.chart('q-day-student-overall', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you think day students are able to integrate enough with boarding students on campus?',
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
        y: 553,
      },
      {
        name: 'No',
        y: 455,
      }
    ]
  }]
});

var chart = Highcharts.chart('q-day-student-man', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you think day students are able to integrate enough with boarding students on campus?',
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
        y: 294,
      },
      {
        name: 'No',
        y: 164,
      }
    ]
  }]
});

var chart = Highcharts.chart('q-day-student-woman', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you think day students are able to integrate enough with boarding students on campus?',
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
        y: 252,
      },
      {
        name: 'No',
        y: 286,
      }
    ]
  }]
});

var chart = Highcharts.chart('q-bullied-hazed', {
  chart: {
    height: 300,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever been bullied or hazed while at Andover?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#089181'],
  xAxis: {
    categories: ['Yes, bullied', 'Yes, hazed', 'Yes, bullied and hazed', 'No']
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
  tooltip: {
      formatter: function () {
          return '<b>' + this.x + '</b><br>' +
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.36).toFixed(1) + "%</b>";
      }
  },
  series: [{
    data: [72, 51, 25, 888],
    type: 'column',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-andover-character', {
  chart: {
    height: 300,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'In general, has attending Andover significantly affected your character?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#089181'],
  xAxis: {
    categories: ['Yes, positively', 'Yes, negatively', 'No']
  },
  yAxis: {
    min: 0,
    max: 800,
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.15).toFixed(1) + "%</b>";
      }
  },
  series: [{
    data: [764, 118, 133],
    type: 'column',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-andover-family-relationship', {
  chart: {
    height: 300,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Has attending Andover affected your relationship with your family?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#089181'],
  xAxis: {
    categories: ['Yes, positively', 'Yes, negatively', 'No']
  },
  yAxis: {
    min: 0,
    max: 500,
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.13).toFixed(1) + "%</b>";
      }
  },
  series: [{
    data: [442, 297, 274],
    type: 'column',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-considered-leaving', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever considered leaving Andover permanently?',
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
        y: 433,
      },
      {
        name: 'No',
        y: 585,
      }
    ]
  }]
});

var chart = Highcharts.chart('q-retrospect-come', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'In retrospect, would you still make the decision to come to Andover?',
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
        y: 909,
      },
      {
        name: 'No',
        y: 108,
      }
    ]
  }]
});

var chart = Highcharts.chart('q-child-andover', {
  chart: {
    height: 300,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Would you want your children to attend Andover?',
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
      size: 150,
      dataLabels: {
        enabled: false
      }
    }
  },
  labels: {
    items: [{
        html: 'Overall',
        style: {
            left: 65,
            top: 180,
            color: 'black',
            fontWeight: 'bold'
        }
      }, {
        html: '2019',
        style: {
            left: 275,
            top: 180,
            color: 'black',
            fontWeight: 'bold'
        }
      }, {
        html: '2020',
        style: {
            left: 475,
            top: 180,
            color: 'black',
            fontWeight: 'bold'
        }
      }, {
        html: '2021',
        style: {
            left: 675,
            top: 180,
            color: 'black',
            fontWeight: 'bold'
        }
      }, {
        html: '2022',
        style: {
            left: 875,
            top: 180,
            color: 'black',
            fontWeight: 'bold'
        }
      }]
  },
  series: [{
    type: 'pie',
    name: 'Overall',
    data: [{
      name: 'Yes',
      y: 780
    }, {
      name: 'No',
      y: 238
    }],
    center: [70, 70]
  }, {
    type: 'pie',
    name: 'Seniors',
    data: [{
      name: 'Yess',
      y: 188
    }, {
      name: 'No',
      y: 89
    }],
    center: [270, 70]
  }, {
    type: 'pie',
    name: 'Uppers',
    data: [{
      name: 'Yes',
      y: 197
    }, {
      name: 'No',
      y: 70
    }],
    center: [470, 70]
  }, {
    type: 'pie',
    name: 'Lowers',
    data: [{
      name: 'Yes',
      y: 212
    }, {
      name: 'No',
      y: 54
    }],
    center: [670, 70]
  }, {
    type: 'pie',
    name: 'Juniors',
    data: [{
      name: 'Yes',
      y: 180
    }, {
      name: 'No',
      y: 24
    }],
    center: [870, 70],
    showInLegend: true
  }]
});

var chart = Highcharts.chart('q-teacher-care', {
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
    text: 'Do you think that the majority of your teachers care about your health and well-being?',
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
          return '<b>' + this.series.name + '</b><br>' + 'Responses: <b>' + (this.y/100*1016).toFixed(0) + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [78.8],
      color: '#089181'
  }, {
      name: 'No',
      data: [21.2],
      color: '#3bc4b4'
  }]
});
