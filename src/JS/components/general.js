var chart = Highcharts.chart('q-class', {
    chart: {
        style: {
            fontFamily: 'Gotham', fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'What class are you in?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#1f3a93'],
    xAxis: {
         categories: ['Junior', 'Lower', 'Upper', 'Senior'],
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
    series: [{
        data: [214, 275, 271, 286],
        type: 'bar',
        dataLabels: {
            enabled: true
        },
        name: 'Responses'
    }]
});

var pieColors = (function () {
    var colors = [],
        base = '#1f3a93',
        i;

    for (i = 0; i < 10; i += 1) {
        colors.push(Highcharts.Color(base).brighten((i) / 4).get());
    }
    return colors;
}());

var chart = Highcharts.chart('q-boarding', {
    chart: {
        type: 'pie',
        style: {
            fontFamily: 'Gotham', fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Are you a boarding student?',
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
            borderWidth: 0,
            borderColors: null,
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
            y: 772,
        },
        {
            name: 'No',
            y: 278
        }]
    }]
});

// d3.selectAll(".map").each(function(){
//   var total = 0,
//       regionNames = ["Discontinguous", "Northeast", "South", "West", "Midwest", "International"];
//
//   var accent = d3.color(this.dataset.accent);
//
//   var colors = ["#abdde3","#74cee0","#42b6da", "#13659d","#0c3d8b","#182552"];
//
//   var responses = this.dataset.responses.split(",").map(function(element, i){
//     total += parseInt(element);
//     return {
//       responses: parseInt(element),
//       name: regionNames[i]
//     };
//   });
//
//   var colorSort = responses.slice().sort(function(a, b) {
//     return a.responses - b.responses;
//   });
//
//   responses = responses.map(function(element, i){
//     return {
//       responses: element.responses,
//       name: element.name,
//       color: colors[colorSort.indexOf(element)]
//     };
//   });
//
//   var currentElement = this,
//       tooltipText,
//       tooltip = d3.select(this.firstChild);
//
//   d3.svg(this.dataset.url).then(function(res){
//     var svg = res.documentElement;
//     d3.select(currentElement).node().appendChild(svg);
//     d3.select(svg).selectAll("*")
//       .data(responses)
//       .style("fill", function(d, i){
//         return d3.rgb(d.color);
//       })
//       .on("mouseover", function(d, i){
//         d3.select(this).style("fill", d3.rgb(accent.brighter(0.3)));
//         tooltipText = generateTooltip({title: d.name, responses: d.responses, percentage: d.responses / total});
//         tooltip.classed("hidden", false).html(tooltipText);
//       })
//       .on("mousemove", function(d){
//         var mouse = d3.mouse(currentElement);
//
//         tooltip.style("left", mouse[0] - Math.round(tooltip.node().offsetWidth / 2) + "px")
//           .style("top", mouse[1] - Math.round(tooltip.node().offsetHeight) - 10 + "px");
//       })
//       .on("mouseout", function(d){
//         d3.select(this).style("fill", d3.rgb(d.color));
//         tooltip.classed("hidden", true);
//       });
//   });
// });

var chart = Highcharts.chart('q-ethnicity', {
    chart: {
        style: {
            fontFamily: 'Gotham', fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'What is your ethonicity?',
        style: {
          fontWeight: 'bold'
        }
    },
    subtitle: {
        text: '<i>Note: respondents may have selected more than one</i>',
    },
    colors: ['#1f3a93'],
    xAxis: {
         categories: ['African', 'African American', 'Asian American', 'East Asian', 'Ethnically Jewish', 'Hispanic', 'Latinx', 'Middle Eastern', 'Native American', 'Pacific Islander', 'South Asian', 'Southeast Asian', 'West Indian/Caribbean', 'White', 'White Hispanic', 'Other']
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
        data: [25, 67, 292, 143, 58, 53, 56, 33, 14, 6, 53, 53, 20, 551, 34, 12],
        type: 'bar',
        dataLabels: {
            enabled: true
        },
        name: 'Responses'
    }]
});

var chart = Highcharts.chart('q-financial', {
    chart: {
        type: 'pie',
        style: {
            fontFamily: 'Gotham', fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'Are you on any form of financial aid?',
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
            borderWidth: 0,
            borderColors: null,
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
            name: 'Yes, from Andover',
            y: 483,
        },
        {
            name: 'Yes, from outside of Andover',
            y: 50,
        },
        {
            name: 'No',
            y: 536
        }]
    }]
});
