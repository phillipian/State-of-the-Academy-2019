Highcharts.chart('q-sex-senior', {
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
