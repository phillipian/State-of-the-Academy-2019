//#6abf8f

Highcharts.chart('q-sleep-overall', {
    chart: {
        type: 'area',
        height: 350,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'On average, how many hours of sleep do you get per night?',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + ' hours</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.35).toFixed(1) + '%</b>';
        }
    },
    xAxis: {
        categories: ['>=10', '9', '8', '7', '6', '5', '4', '3', '<=2'],
        title: {
            text: 'Amount of sleep in hours',
            style: {
              color: 'black',
              fontWeight: 'bold'
            }
        }
    },
    yAxis: {
      min: 0,
      max: 500,
      title: {
          text: 'Responses',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
      }
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5,
            color: "#6abf8f"
        },
        dataLabels: {
          enabled: false
        }
    },
    series: [{
        name: 'Responses',
        data: [2, 36, 201, 448, 249, 78, 18, 1, 2]
    }]
});

var chart = Highcharts.chart('q-sleep-class', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'On average, how many hours of sleep do you get per night?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#6abf8f'],
  xAxis: {
    categories: ['2019', '2020', '2021', '2022'],
    title: {
      text: 'Class',
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
  tooltip: {
      formatter: function () {
          return '<b>' + this.x + '</b><br>' +
              this.series.name + ': <b>' + this.y + ' hours</b>';
      }
  },
  series: [{
    data: [6.7, 6.8, 6.9, 7.0],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Average'
  }]
});

var chart = Highcharts.chart('q-you-happy', {
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
    text: 'Generally speaking, do you consider yourself happy at Andover?',
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
          return '<b>' + this.series.name + '</b><br>' + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [853],
      color: '#6abf8f'
  }, {
      name: 'No',
      data: [183],
      color: '#8ee3b3'
  }]
});

var chart = Highcharts.chart('q-andover-happy', {
  chart: {
      type: 'bar',
      height: 150,
      marginTop: 0,
      marginBottom: 30,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'In general, do you think that Andover students are happy?',
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
          return '<b>' + this.series.name + '</b><br>' + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [689],
      color: '#6abf8f'
  }, {
      name: 'No',
      data: [344],
      color: '#8ee3b3'
  }]
});

var pieColors = (function() {
  var colors = [],
    base = '#6abf8f',
    i;

  for (i = 0; i < 10; i += 1) {
    colors.push(Highcharts.Color(base).brighten((i) / 9).get());
  }
  return colors;
}());

var chart = Highcharts.chart('q-counselor', {
  chart: {
    height: 350,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever been to Graham House or the Sykes Wellness Center to see a counselor?',
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
      size: 200,
      dataLabels: {
        enabled: false
      }
    }
  },
  labels: {
    items: [{
        html: 'Overall',
        style: {
            left: 155,
            top: 230,
            color: 'black',
            fontWeight: 'bold'
        }
      }, {
        html: 'Man',
        style: {
            left: 475,
            top: 230,
            color: 'black',
            fontWeight: 'bold'
        }
      }, {
        html: 'Woman',
        style: {
            left: 775,
            top: 230,
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
      y: 439
    }, {
      name: 'No',
      y: 597
    }],
    center: [160, 100]
  }, {
    type: 'pie',
    name: 'Man',
    data: [{
      name: 'Yes',
      y: 154
    }, {
      name: 'No',
      y: 323
    }],
    center: [470, 100]
  }, {
    type: 'pie',
    name: 'Woman',
    data: [{
      name: 'Yes',
      y: 275
    }, {
      name: 'No',
      y: 270
    }],
    center: [780, 100],
    showInLegend: true
  }]
});

var chart = Highcharts.chart('q-counseling-sufficient', {
  chart: {
    height: 300,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you think that the mental health and counseling resources <br>provided by the Sykes Wellness Center are sufficient?',
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
            top: 170,
            color: 'black',
            fontWeight: 'bold'
        }
      }, {
        html: 'Man',
        style: {
            left: 275,
            top: 170,
            color: 'black',
            fontWeight: 'bold'
        }
      }, {
        html: 'Woman',
        style: {
            left: 465,
            top: 170,
            color: 'black',
            fontWeight: 'bold'
        }
      }, {
        html: 'Had Counseling',
        style: {
            left: 630,
            top: 170,
            color: 'black',
            fontWeight: 'bold'
        }
      }, {
        html: 'Not had counseling',
        style: {
            left: 820,
            top: 170,
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
      y: 406
    }, {
      name: 'No',
      y: 547
    }],
    center: [70, 70]
  }, {
    type: 'pie',
    name: 'Man',
    data: [{
      name: 'Yes',
      y: 299
    }, {
      name: 'No',
      y: 172
    }],
    center: [270, 70]
  }, {
    type: 'pie',
    name: 'Woman',
    data: [{
      name: 'Yes',
      y: 181
    }, {
      name: 'No',
      y: 363
    }],
    center: [470, 70]
  }, {
    type: 'pie',
    name: 'Had counseling',
    data: [{
      name: 'Yes',
      y: 149
    }, {
      name: 'No',
      y: 290
    }],
    center: [670, 70]
  }, {
    type: 'pie',
    name: 'Not had counseling',
    data: [{
      name: 'Yes',
      y: 332
    }, {
      name: 'No',
      y: 257
    }],
    center: [870, 70],
    showInLegend: true
  }]
});

var chart = Highcharts.chart('q-support-system', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'What is your mental and/or emotional support system on campus? Select all that apply.',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#6abf8f'],
  xAxis: {
    categories: ['Faculty/Staff', 'Family', 'Friends', 'Self', 'Other', 'No one']
  },
  yAxis: {
    min: 0,
    max: 950,
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
    data: [511, 704, 922, 791, 71, 41],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-adequate-support-system', {
  chart: {
      type: 'bar',
      height: 150,
      marginTop: 0,
      marginBottom: 0,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you feel as though you have an adequate mental and/or emotional support system on campus?',
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
          return '<b>' + this.series.name + '</b><br>' + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [74.9],
      color: '#6abf8f'
  }, {
      name: 'No',
      data: [25.1],
      color: '#8ee3b3'
  }]
});

Highcharts.chart('q-social-media-hrs', {
    chart: {
        type: 'area',
        height: 350,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Approximately how many hours a day do you spend on social media?',
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
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.36).toFixed(1) + '%</b>';
        }
    },
    xAxis: {
        categories: ['>=5 hours', '4 hours', '3 hours', '2 hours', '1 hour', '<=30 minutes'],
        title: {
            text: 'Hours spent on social media',
            style: {
              color: 'black',
              fontWeight: 'bold'
            }
        }
    },
    yAxis: {
      min: 0,
      max: 350,
      title: {
          text: 'Responses',
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
      }
    },
    plotOptions: {
        area: {
            fillOpacity: 0.5,
            color: "#6abf8f"
        },
        dataLabels: {
          enabled: false
        }
    },
    series: [{
        name: 'Responses',
        data: [23, 69, 243, 298, 250, 153]
    }]
});

Highcharts.chart('q-social-media-overall', {
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
        text: 'What social media platforms do you use at Andover? Check all that apply.',
        style: {
          fontWeight: 'bold'
        }
    },
    subtitle: {
      text: '<i>Note: Respondents may have selected more than one</i>'
    },
    colors: ['#6abf8f'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>';
        }
    },
    xAxis: {
        categories: ['Facebook', 'Instagram', 'Reddit', 'Snapchat', 'Twitter', 'Tinder', 'Tumblr', 'VSCO', 'Not applicable']
    },
    yAxis: {
      min: 0,
      max: 950,
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
      data: [366, 912, 208, 820, 232, 50, 71, 266, 33],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

Highcharts.chart('q-social-media-senior', {
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
        text: 'What social media platforms do you use at Andover? Check all that apply.',
        style: {
          fontWeight: 'bold'
        }
    },
    subtitle: {
      text: '<i>Note: Respondents may have selected more than one</i>'
    },
    colors: ['#6abf8f'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>';
        }
    },
    xAxis: {
        categories: ['Facebook', 'Instagram', 'Reddit', 'Snapchat', 'Twitter', 'Tinder', 'Tumblr', 'VSCO', 'Not applicable']
    },
    yAxis: {
      min: 0,
      max: 950,
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
      data: [187, 247, 76, 218, 69, 28, 23, 56, 7],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

Highcharts.chart('q-social-media-upper', {
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
        text: 'What social media platforms do you use at Andover? Check all that apply.',
        style: {
          fontWeight: 'bold'
        }
    },
    subtitle: {
      text: '<i>Note: Respondents may have selected more than one</i>'
    },
    colors: ['#6abf8f'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>';
        }
    },
    xAxis: {
        categories: ['Facebook', 'Instagram', 'Reddit', 'Snapchat', 'Twitter', 'Tinder', 'Tumblr', 'VSCO', 'Not applicable']
    },
    yAxis: {
      min: 0,
      max: 950,
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
      data: [104, 245, 57, 216, 63, 9, 20, 73, 7],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

Highcharts.chart('q-social-media-lower', {
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
        text: 'What social media platforms do you use at Andover? Check all that apply.',
        style: {
          fontWeight: 'bold'
        }
    },
    subtitle: {
      text: '<i>Note: Respondents may have selected more than one</i>'
    },
    colors: ['#6abf8f'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>';
        }
    },
    xAxis: {
        categories: ['Facebook', 'Instagram', 'Reddit', 'Snapchat', 'Twitter', 'Tinder', 'Tumblr', 'VSCO', 'Not applicable']
    },
    yAxis: {
      min: 0,
      max: 950,
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
      data: [51, 241, 43, 221, 73, 10, 16, 88, 8],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

Highcharts.chart('q-social-media-junior', {
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
        text: 'What social media platforms do you use at Andover? Check all that apply.',
        style: {
          fontWeight: 'bold'
        }
    },
    subtitle: {
      text: '<i>Note: Respondents may have selected more than one</i>'
    },
    colors: ['#6abf8f'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>';
        }
    },
    xAxis: {
        categories: ['Facebook', 'Instagram', 'Reddit', 'Snapchat', 'Twitter', 'Tinder', 'Tumblr', 'VSCO', 'Not applicable']
    },
    yAxis: {
      min: 0,
      max: 950,
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
      data: [24, 179, 32, 165, 27, 3, 12, 49, 11],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

var chart = Highcharts.chart('q-social-media-effect', {
  chart: {
    height: 350,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'How does social media impact your life?',
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
      size: 200,
      dataLabels: {
        enabled: false
      }
    }
  },
  labels: {
    items: [{
        html: 'Overall',
        style: {
            left: 155,
            top: 230,
            color: 'black',
            fontWeight: 'bold'
        }
      }, {
        html: 'Man',
        style: {
            left: 475,
            top: 230,
            color: 'black',
            fontWeight: 'bold'
        }
      }, {
        html: 'Woman',
        style: {
            left: 775,
            top: 230,
            color: 'black',
            fontWeight: 'bold'
        }
      }]
  },
  series: [{
    type: 'pie',
    name: 'Overall',
    data: [{
      name: 'More positively than negatively',
      y: 324
    }, {
      name: 'Equally positively and negatively',
      y: 487
    }, {
      name: 'More negatively than positively',
      y: 178
    }, {
      name: 'Not applicable (I do not use social media)',
      y: 48
    }],
    center: [160, 100]
  }, {
    type: 'pie',
    name: 'Man',
    data: [{
      name: 'More positively than negatively',
      y: 170
    }, {
      name: 'Equally positively and negatively',
      y: 220
    }, {
      name: 'More negatively than positively',
      y: 69
    }, {
      name: 'Not applicable (I do not use social media)',
      y: 18
    }],
    center: [470, 100]
  }, {
    type: 'pie',
    name: 'Woman',
    data: [{
      name: 'More positively than negatively',
      y: 150
    }, {
      name: 'Equally positively and negatively',
      y: 264
    }, {
      name: 'More negatively than positively',
      y: 104
    }, {
      name: 'Not applicable',
      y: 28
    }],
    center: [780, 100],
    showInLegend: true
  }]
});

var chart = Highcharts.chart('q-self-harm', {
  chart: {
    height: 300,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever engaged, or do you currently engage, in self-harm?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#6abf8f'],
  xAxis: {
    categories: ['Yes, only before Andover', 'Yes, only while attending Andover', 'Yes, both before and while attending Andover', 'No']
  },
  yAxis: {
    min: 0,
    max: 1000,
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.37).toFixed(1) + "%</b>";
      }
  },
  plotOptions: {
      series: {
          pointWidth: 40
      }
  },
  series: [{
    data: [54, 71, 59, 853],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-eating-disorder', {
  chart: {
    height: 300,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever had, or do you currently have, an eating disorder?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#6abf8f'],
  xAxis: {
    categories: ['Yes, only before Andover', 'Yes, only while attending Andover', 'Yes, both before and while attending Andover', 'No']
  },
  yAxis: {
    min: 0,
    max: 1000,
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.66).toFixed(1) + "%</b>";
      }
  },
  plotOptions: {
      series: {
          pointWidth: 40
      }
  },
  series: [{
    data: [30, 72, 88, 876],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-skip-meal', {
  chart: {
    height: 300,
    marginLeft: 195,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you skip meals in order to get more sleep and/or do school work?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#6abf8f'],
  xAxis: {
    categories: ['Yes, always', 'Yes, regularly', 'Yes, sometimes', 'No']
  },
  yAxis: {
    min: 0,
    max: 1000,
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.37).toFixed(1) + "%</b>";
      }
  },
  plotOptions: {
      series: {
          pointWidth: 40
      }
  },
  series: [{
    data: [92, 188, 367, 390],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-depression', {
  chart: {
    height: 250,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever been diagnosed with depression?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#6abf8f'],
  xAxis: {
    categories: ['Yes, before coming to Andover', 'Yes, after coming to Andover', 'No']
  },
  yAxis: {
    min: 0,
    max: 1000,
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.37).toFixed(1) + "%</b>";
      }
  },
  plotOptions: {
      series: {
          pointWidth: 40
      }
  },
  series: [{
    data: [48, 93, 896],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-anxiety', {
  chart: {
    height: 250,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever been diagnosed with anxiety?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#6abf8f'],
  xAxis: {
    categories: ['Yes, before coming to Andover', 'Yes, after coming to Andover', 'No']
  },
  yAxis: {
    min: 0,
    max: 1000,
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
  plotOptions: {
      series: {
          pointWidth: 40
      }
  },
  series: [{
    data: [71, 112, 853],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-add-adhd', {
  chart: {
    height: 250,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever been diagnosed with ADD/ADHD?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#6abf8f'],
  xAxis: {
    categories: ['Yes, before coming to Andover', 'Yes, after coming to Andover', 'No']
  },
  yAxis: {
    min: 0,
    max: 1000,
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
  plotOptions: {
      series: {
          pointWidth: 40
      }
  },
  series: [{
    data: [39, 37, 960],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

Highcharts.chart('q-physical-insecurity-man', {
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
        text: 'Do you feel insecure about your body, physical health, and/or appearance?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#6abf8f'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/4.77).toFixed(1) + '%</b>';
        }
    },
    xAxis: {
        categories: ['Yes, always', 'Yes, regularly', 'Yes, sometimes', 'No']
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
      data: [30, 69, 181, 197],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

Highcharts.chart('q-physical-insecurity-woman', {
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
        text: 'Do you feel insecure about your body, physical health, and/or appearance?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#6abf8f'],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' +
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/5.45).toFixed(1) + '%</b>';
        }
    },
    xAxis: {
        categories: ['Yes, always', 'Yes, regularly', 'Yes, sometimes', 'No']
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
      data: [126, 155, 205, 59],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

var chart = Highcharts.chart('q-academic-insecurity', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you feel insecure about your academic ability and/or intelligence?',
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
        name: 'Yes, always',
        y: 157,
      },
      {
        name: 'Yes, regularly',
        y: 230,
      },
      {
        name: 'Yes, sometimes',
        y: 394,
      },
      {
        name: 'No',
        y: 256,
      }
    ]
  }]
});
