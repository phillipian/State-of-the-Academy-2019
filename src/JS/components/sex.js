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
