var pieColors = (function() {
  var colors = [],
    base = '#EE601B',
    i;

  for (i = 0; i < 10; i += 1) {
    colors.push(Highcharts.Color(base).brighten((i) / 7).get());
  }
  return colors;
}());

var chart = Highcharts.chart('q-alcohol', {
  chart: {
    height: 300,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever consumed alcohol?',
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
      name: 'Yes, on and off campus',
      y: 278
    }, {
      name: 'Yes, on campus',
      y: 11
    }, {
      name: 'Yes, off campus',
      y: 375
    }, {
      name: 'No',
      y: 358
    }],
    center: [70, 70]
  }, {
    type: 'pie',
    name: 'Seniors',
    data: [{
      name: 'Yes, on and off campus',
      y: 111
    }, {
      name: 'Yes, on campus',
      y: 2
    }, {
      name: 'Yes, off campus',
      y: 111
    }, {
      name: 'No',
      y: 54
    }],
    center: [270, 70]
  }, {
    type: 'pie',
    name: 'Uppers',
    data: [{
      name: 'Yes, on and off campus',
      y: 79
    }, {
      name: 'Yes, on campus',
      y: 2
    }, {
      name: 'Yes, off campus',
      y: 109
    }, {
      name: 'No',
      y: 76
    }],
    center: [470, 70]
  }, {
    type: 'pie',
    name: 'Lowers',
    data: [{
      name: 'Yes, on and off campus',
      y: 71
    }, {
      name: 'Yes, on campus',
      y: 7
    }, {
      name: 'Yes, off campus',
      y: 76
    }, {
      name: 'No',
      y: 114
    }],
    center: [670, 70]
  }, {
    type: 'pie',
    name: 'Juniors',
    data: [{
      name: 'Yes, on and off campus',
      y: 15
    }, {
      name: 'Yes, on campus',
      y: 0
    }, {
      name: 'Yes, off campus',
      y: 78
    }, {
      name: 'No',
      y: 113
    }],
    center: [870, 70],
    showInLegend: true
  }]
});

var chart = Highcharts.chart('q-tobacco', {
  chart: {
    height: 300,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever used any tobacco products (e.g. dipping and chewing tobacco, cigarettes)?',
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
      name: 'Yes, on and off campus',
      y: 107
    }, {
      name: 'Yes, on campus',
      y: 8
    }, {
      name: 'Yes, off campus',
      y: 97
    }, {
      name: 'No',
      y: 811
    }],
    center: [70, 70]
  }, {
    type: 'pie',
    name: 'Seniors',
    data: [{
      name: 'Yes, on and off campus',
      y: 42
    }, {
      name: 'Yes, on campus',
      y: 3
    }, {
      name: 'Yes, off campus',
      y: 47
    }, {
      name: 'No',
      y: 186
    }],
    center: [270, 70]
  }, {
    type: 'pie',
    name: 'Uppers',
    data: [{
      name: 'Yes, on and off campus',
      y: 34
    }, {
      name: 'Yes, on campus',
      y: 1
    }, {
      name: 'Yes, off campus',
      y: 29
    }, {
      name: 'No',
      y: 202
    }],
    center: [470, 70]
  }, {
    type: 'pie',
    name: 'Lowers',
    data: [{
      name: 'Yes, on and off campus',
      y: 20
    }, {
      name: 'Yes, on campus',
      y: 4
    }, {
      name: 'Yes, off campus',
      y: 13
    }, {
      name: 'No',
      y: 233
    }],
    center: [670, 70]
  }, {
    type: 'pie',
    name: 'Juniors',
    data: [{
      name: 'Yes, on and off campus',
      y: 9
    }, {
      name: 'Yes, on campus',
      y: 0
    }, {
      name: 'Yes, off campus',
      y: 8
    }, {
      name: 'No',
      y: 188
    }],
    center: [870, 70],
    showInLegend: true
  }]
});

var chart = Highcharts.chart('q-juul', {
  chart: {
    height: 300,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever "juuled" or used a similar e-cigarette/pod vape nicotine-based product?',
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
      name: 'Yes, on and off campus',
      y: 240
    }, {
      name: 'Yes, on campus',
      y: 32
    }, {
      name: 'Yes, off campus',
      y: 113
    }, {
      name: 'No',
      y: 633
    }],
    center: [70, 70]
  }, {
    type: 'pie',
    name: 'Seniors',
    data: [{
      name: 'Yes, on and off campus',
      y: 82
    }, {
      name: 'Yes, on campus',
      y: 13
    }, {
      name: 'Yes, off campus',
      y: 41
    }, {
      name: 'No',
      y: 141
    }],
    center: [270, 70]
  }, {
    type: 'pie',
    name: 'Uppers',
    data: [{
      name: 'Yes, on and off campus',
      y: 71
    }, {
      name: 'Yes, on campus',
      y: 4
    }, {
      name: 'Yes, off campus',
      y: 35
    }, {
      name: 'No',
      y: 155
    }],
    center: [470, 70]
  }, {
    type: 'pie',
    name: 'Lowers',
    data: [{
      name: 'Yes, on and off campus',
      y: 58
    }, {
      name: 'Yes, on campus',
      y: 9
    }, {
      name: 'Yes, off campus',
      y: 21
    }, {
      name: 'No',
      y: 180
    }],
    center: [670, 70]
  }, {
    type: 'pie',
    name: 'Juniors',
    data: [{
      name: 'Yes, on and off campus',
      y: 27
    }, {
      name: 'Yes, on campus',
      y: 6
    }, {
      name: 'Yes, off campus',
      y: 16
    }, {
      name: 'No',
      y: 155
    }],
    center: [870, 70],
    showInLegend: true
  }]
});

var chart = Highcharts.chart('q-marijuana', {
  chart: {
    height: 300,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever used marijuana?',
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
      name: 'Yes, on and off campus',
      y: 242
    }, {
      name: 'Yes, on campus',
      y: 34
    }, {
      name: 'Yes, off campus',
      y: 104
    }, {
      name: 'No',
      y: 644
    }],
    center: [70, 70]
  }, {
    type: 'pie',
    name: 'Seniors',
    data: [{
      name: 'Yes, on and off campus',
      y: 92
    }, {
      name: 'Yes, on campus',
      y: 10
    }, {
      name: 'Yes, off campus',
      y: 42
    }, {
      name: 'No',
      y: 134
    }],
    center: [270, 70]
  }, {
    type: 'pie',
    name: 'Uppers',
    data: [{
      name: 'Yes, on and off campus',
      y: 69
    }, {
      name: 'Yes, on campus',
      y: 8
    }, {
      name: 'Yes, off campus',
      y: 28
    }, {
      name: 'No',
      y: 161
    }],
    center: [470, 70]
  }, {
    type: 'pie',
    name: 'Lowers',
    data: [{
      name: 'Yes, on and off campus',
      y: 60
    }, {
      name: 'Yes, on campus',
      y: 13
    }, {
      name: 'Yes, off campus',
      y: 21
    }, {
      name: 'No',
      y: 176
    }],
    center: [670, 70]
  }, {
    type: 'pie',
    name: 'Juniors',
    data: [{
      name: 'Yes, on and off campus',
      y: 19
    }, {
      name: 'Yes, on campus',
      y: 3
    }, {
      name: 'Yes, off campus',
      y: 13
    }, {
      name: 'No',
      y: 171
    }],
    center: [870, 70],
    showInLegend: true
  }]
});

var chart = Highcharts.chart('q-juul-2019', {
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
    text: 'Juul usage over time',
    style: {
      fontWeight: 'bold'
    }
  },
  subtitle: {
    text: '2019',
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
      data: [38],
      color: '#ee601b'
  }, {
      name: 'No',
      data: [62],
      color: '#ffa863'
  }]
});

var chart = Highcharts.chart('q-juul-2018', {
  chart: {
      type: 'bar',
      height: 120,
      marginTop: 10,
      marginBottom: 0,
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
    text: '2018',
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
          return '<b>' + this.series.name + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [39],
      color: '#ee601b'
  }, {
      name: 'No',
      data: [61],
      color: '#ffa863'
  }]
});

var chart = Highcharts.chart('q-juul-2017', {
  chart: {
      type: 'bar',
      height: 140,
      marginTop: 30,
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
    text: '2017',
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
      data: [29],
      color: '#ee601b'
  }, {
      name: 'No',
      data: [71],
      color: '#ffa863'
  }]
});

var chart = Highcharts.chart('q-marijuana-2019', {
  chart: {
      type: 'bar',
      height: 140,
      marginTop: 40,
      marginBottom: 0,
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Marijuana usage over time',
    style: {
      fontWeight: 'bold'
    }
  },
  subtitle: {
    text: '2019',
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
      data: [37.1],
      color: '#ee601b'
  }, {
      name: 'No',
      data: [62.9],
      color: '#ffa863'
  }]
});

var chart = Highcharts.chart('q-marijuana-2018', {
  chart: {
      type: 'bar',
      height: 120,
      marginTop: 10,
      marginBottom: 0,
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
    text: '2018',
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
          return '<b>' + this.series.name + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      color: '#ee601b'
  }, {
      name: 'No',
      data: [67.1],
      color: '#ffa863'
  }]
});

var chart = Highcharts.chart('q-marijuana-2017', {
  chart: {
      type: 'bar',
      height: 120,
      marginTop: 10,
      marginBottom: 0,
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
    text: '2017',
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
      enabled: false,
      y: 10
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
      data: [30.9],
      color: '#ee601b'
  }, {
      name: 'No',
      data: [69.1],
      color: '#ffa863'
  }]
});

var chart = Highcharts.chart('q-marijuana-2016', {
  chart: {
      type: 'bar',
      height: 120,
      marginTop: 10,
      marginBottom: 0,
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
    text: '2016',
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
      data: [30.0],
      color: '#ee601b'
  }, {
      name: 'No',
      data: [79.0],
      color: '#ffa863'
  }]
});

var chart = Highcharts.chart('q-marijuana-2015', {
  chart: {
      type: 'bar',
      height: 140,
      marginTop: 30,
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
    text: '2015',
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
          return '<b>' + this.series.name + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
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
      data: [32.2],
      color: '#ee601b'
  }, {
      name: 'No',
      data: [67.8],
      color: '#ffa863'
  }]
});

var chart = Highcharts.chart('q-hard-drug', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Have you ever used hallucinogens or hard drugs?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#ee601b'],
  xAxis: {
    categories: ['Cocaine', 'DXM', 'Heroin', 'Ketamine', 'LSD', 'Mescaline peyote', 'MDMA (Molly)', 'Psilocybin mushrooms', 'Other', 'Not applicable']
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.05).toFixed(1) + "%</b>";
      }
  },
  series: [{
    data: [41, 11, 8, 8, 39, 4, 15, 23, 24, 911],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});
