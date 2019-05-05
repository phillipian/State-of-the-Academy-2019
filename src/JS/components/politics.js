var chart = Highcharts.chart('q-affiliation', {
    chart: {
        type: 'column',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'What is your political affiliation?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#521a7e'],
    xAxis: {
        categories: ['Conservative', 'Independent','Liberal','Libertarian','Other', 'Unsure'],
        title: {
          text: 'Political Affiliation',
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
      data: [168, 147, 442, 29, 18, 237]
    }],
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + '</b><br>' + this.series.name + ': <b>' + this.y + '</b><br>' +
            'Percentage: ' + '<b>' + ((this.y)/10.41).toFixed(1) + '%</b><br>';
        }
    }
});

var chart = Highcharts.chart('q-affiliation-gender', {
    chart: {
        type: 'column',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Political affiliation by gender',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    colors: ['#521a7e'],
    xAxis: {
        categories: ['Conservative', 'Independent', 'Liberal', 'Libertarian', 'Other', 'Unsure'],
        title: {
          text: 'Political Affiliation',
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
            return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Response: <b>' + this.y + '</b><br>';
        }
    },
    series: [{
        name: 'Man',
        data: [108, 89, 158, 22, 13, 90],
    }, {
        name: 'Woman',
        data: [58, 56, 275, 5, 5, 147],
    }]
});

var pieColors = (function() {
  var colors = [],
    base = '#521a7e',
    i;

  for (i = 0; i < 10; i += 1) {
    colors.push(Highcharts.Color(base).brighten((i) / 5).get());
  }
  return colors;
}());

var chart = Highcharts.chart('q-censor-overall', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'While at Andover, have you ever felt the need to censor yourself due to your political leaning?',
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
        y: 636,
      },
      {
        name: 'No',
        y: 405
      }
    ]
  }]
});

var chart = Highcharts.chart('q-censor-conservative', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'While at Andover, have you ever felt the need to censor yourself due to your political leaning?',
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
        y: 160,
      },
      {
        name: 'No',
        y: 8
      }
    ]
  }]
});

var chart = Highcharts.chart('q-censor-independent', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'While at Andover, have you ever felt the need to censor yourself due to your political leaning?',
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
        y: 112,
      },
      {
        name: 'No',
        y: 35
      }
    ]
  }]
});

var chart = Highcharts.chart('q-censor-liberal', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'While at Andover, have you ever felt the need to censor yourself due to your political leaning?',
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
        y: 203,
      },
      {
        name: 'No',
        y: 239
      }
    ]
  }]
});

var chart = Highcharts.chart('q-censor-libertarian', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'While at Andover, have you ever felt the need to censor yourself due to your political leaning?',
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
        y: 25,
      },
      {
        name: 'No',
        y: 4
      }
    ]
  }]
});

var chart = Highcharts.chart('q-censor-other', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'While at Andover, have you ever felt the need to censor yourself due to your political leaning?',
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
        y: 15,
      },
      {
        name: 'No',
        y: 3
      }
    ]
  }]
});

var chart = Highcharts.chart('q-censor-unsure', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'While at Andover, have you ever felt the need to censor yourself due to your political leaning?',
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
        y: 121,
      },
      {
        name: 'No',
        y: 115
      }
    ]
  }]
});

Highcharts.chart('q-informed', {
    chart: {
        type: 'column',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'How informed do you believe you are about politics and/or current events?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#521a7e'],
    xAxis: {
        categories: ['Extremely informed', 'Very informed','Moderately informed','Slightly informed','Not at all informed'],
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.41).toFixed(1) + '%</b>';
        }
    },
    series: [{
      data: [89, 229, 500, 198, 25],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

var chart = Highcharts.chart('q-affirmative-action', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you support affirmative action in academic institutions,<br>“the practice or policy of favoring individuals belonging to groups <br>known to have been discriminated against previously” (Oxford Dictionaries)?',
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
        y: 619,
      },
      {
        name: 'No',
        y: 411
      }
    ]
  }]
});

var chart = Highcharts.chart('q-reverse-racism-overall', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you believe that reverse racism – “prejudice, discrimination, or antagonism on the basis of race directed against a member of a dominant or privileged racial group” (Oxford Dictionaries) – exists?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#521a7e'],
  xAxis: {
    categories: ['Yes', 'No']
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
        return '<b>' + this.x + '<br>Response: <b>' + this.y + '</b><br>';
    }
  },
  series: [{
    data: [426, 606],
    type: 'bar',
    dataLabels: {
      enabled: false
    }
  }]
});

var chart = Highcharts.chart('q-reverse-racism-gender', {
    chart: {
        type: 'bar',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        marginBottom: 90,
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Belief in reverse racism by gender',
        style: {
          fontWeight: 'bold'
        }
    },
    subtitle: {
      text: '*Editor\'s note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, and nonbinary <br>have been removed in an effort to protect the complete anynomity of these respondents.',
      verticalAlign: 'bottom',
      y: -10
    },
    legend: {
        enabled: false
    },
    colors: ['#521a7e'],
    xAxis: {
        categories: ['Man', 'Woman', 'Other*']
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
            return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Response: <b>' + this.y + '</b><br>';
        }
    },
    series: [{
        name: 'Yes',
        data: [336, 291, null],
    }, {
        name: 'No',
        data: [144, 255, null],
    }]
});

var chart = Highcharts.chart('q-reverse-racism-class', {
    chart: {
        type: 'bar',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Reverse racism by class',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    colors: ['#521a7e'],
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
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Response: <b>' + this.y + '</b><br>';
        }
    },
    series: [{
        name: 'Yes',
        data: [100, 88, 117, 118],
    }, {
        name: 'No',
        data: [181, 178, 155, 90],
    }]
});

var chart = Highcharts.chart('q-rape-culture-overall', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you believe there is rape culture –  “a society or environment <br>whose prevailing social attitudes have the effect of normalizing or trivializing <br>sexual assault and abuse” (Oxford Dictionaries) – at Andover?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#521a7e'],
  xAxis: {
    categories: ['Yes', 'No']
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
        return '<b>' + this.x + '<br>Response: <b>' + this.y + '</b><br>';
    }
  },
  series: [{
    data: [473, 562],
    type: 'bar',
    dataLabels: {
      enabled: false
    }
  }]
});

var chart = Highcharts.chart('q-rape-culture-gender', {
    chart: {
        type: 'bar',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        marginBottom: 90,
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Belief in rape culture by gender',
        style: {
          fontWeight: 'bold'
        }
    },
    subtitle: {
      text: '*Editor\'s note: Correlated statistics from respondents who identify as agender, genderfluid, genderqueer, and nonbinary <br>have been removed in an effort to protect the complete anynomity of these respondents.',
      verticalAlign: 'bottom',
      y: -10
    },
    legend: {
        enabled: false
    },
    colors: ['#521a7e'],
    xAxis: {
        categories: ['Man', 'Woman', 'Other*']
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
            return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Response: <b>' + this.y + '</b><br>';
        }
    },
    series: [{
        name: 'Yes',
        data: [143, 320, null],
    }, {
        name: 'No',
        data: [336, 226, null],
    }]
});

var chart = Highcharts.chart('q-rape-culture-class', {
    chart: {
        type: 'bar',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Rape culture by class',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    colors: ['#521a7e'],
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
          style: {
            color: 'black',
            fontWeight: 'bold'
          }
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Response: <b>' + this.y + '</b><br>';
        }
    },
    series: [{
        name: 'Yes',
        data: [133, 124, 139, 77],
    }, {
        name: 'No',
        data: [150, 145, 133, 134],
    }]
});

var chart = Highcharts.chart('q-all-gender', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you support All-Gender Housing at Andover?',
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
        name: 'Yes, as it exists now',
        y: 558
      },
      {
        name: 'Yes, it should be expanded',
        y: 403
      },
      {
        name: 'No',
        y: 79
      }
    ]
  }]
});

var chart = Highcharts.chart('q-feminism', {
    chart: {
        type: 'column',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Do you support “the advocacy of women’s rights on the ground of the equality of the sexes?” <br>(Oxford Dictionaries) <br>vs <br>Do you consider yourself a feminist?',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    colors: ['#521a7e'],
    xAxis: {
        categories: ['In support', 'Feminist'],
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
            return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Response: <b>' + this.y + '</b><br>';
        }
    },
    series: [{
        name: 'Yes',
        data: [1003, 704],
    }, {
        name: 'No',
        data: [38, 335],
    }]
});

var chart = Highcharts.chart('q-feminism-class', {
    chart: {
        type: 'column',
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Feminism by class',
        style: {
          fontWeight: 'bold'
        }
    },
    legend: {
        enabled: false
    },
    colors: ['#521a7e'],
    xAxis: {
        categories: ['2019', '2020', '2021', '2022'],
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
            return '<b>' + this.x + ': ' + this.series.name + '</b><br>' + 'Response: <b>' + this.y + '</b><br>';
        }
    },
    series: [{
        name: 'Yes',
        data: [210, 198, 172, 121],
    }, {
        name: 'No',
        data: [72, 71, 101, 89],
    }]
});

var chart = Highcharts.chart('q-black-lives', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Do you support the Black Lives Matter movement?',
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
        y: 893
      },
      {
        name: 'No',
        y: 145
      }
    ]
  }]
});
