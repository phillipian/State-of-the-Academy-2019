var chart = Highcharts.chart('q-class', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'What class are you in?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#0c3d8b'],
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
  tooltip: {
      formatter: function () {
          return '<b>' + this.x + '</b><br>' +
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.46).toFixed(1) + '%</b>';
      }
  },
  series: [{
    data: [214, 275, 271, 286],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var pieColors = (function() {
  var colors = [],
    base = '#0c3d8b',
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
      fontFamily: 'Gotham',
      fontSize: '15px'
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
        y: 772,
      },
      {
        name: 'No',
        y: 278
      }
    ]
  }]
});

Highcharts.chart('q-region', {
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
        text: 'Where are you from?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#0c3d8b'],
    xAxis: {
        categories: ['Northeast', 'International','West','South','Midwest','Discontiguous'],
        title: {
          text: 'Regions',
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
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.49).toFixed(1) + '%</b>';
        }
    },
    series: [{
      data: [639, 165, 96, 105, 42, 2],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

// highcharts for map - needs fix
// $(function() {
//   $('#q-origin').highcharts('Map', {
//     chart: {
//       style: {
//         fontFamily: 'Gotham',
//         fontSize: '15px'
//       },
//       backgroundColor: "#ECF0F1"
//     },
//     title: {
//       text: 'Where are you from?',
//       style: {
//         fontWeight: 'bold'
//       }
//     },
//     series: [{
//       "type": "map",
//       "data": [{
//           "name": "Discontiguous",
//           "path": "M130,-556L133,-548L136,-550L145,-548L144,-544L153,-540L158,-542L170,-535L181,-533L185,-531L192,-533L201,-528L207,-525L207,-525L207,-465L207,-379L214,-378L221,-374L226,-368L233,-358L240,-367L248,-372L252,-365L257,-359L265,-353L271,-343L280,-327L295,-320L296,-311L292,-303L287,-308L280,-312L276,-324L265,-335L260,-348L252,-349L240,-349L231,-352L215,-367L208,-370L195,-376L185,-375L170,-382L162,-389L154,-386L155,-376L150,-375L141,-373L134,-369L126,-367L126,-376L131,-390L139,-393L137,-397L127,-390L121,-381L109,-372L113,-364L105,-355L96,-350L87,-347L84,-341L71,-336L67,-320L56,-326L51,-328L43,-326L34,-323L26,-320L11,-320L10,-322L21,-326L30,-329L40,-334L50,-334L55,-338L68,-345L70,-347L77,-351L80,-362L85,-369L76,-367L74,-370L69,-365L66,-374L62,-369L61,-377L53,-373L48,-374L49,-382L52,-387L49,-393L38,-393L34,-401L30,-406L33,-414L29,-422L34,-429L42,-436L46,-443L52,-443L56,-439L63,-445L67,-442L74,-446L74,-453L71,-457L77,-461L73,-462L65,-460L63,-458L58,-462L49,-463L40,-469L40,-476L34,-487L45,-491L61,-494L66,-493L63,-486L76,-483L73,-494L67,-501L65,-510L61,-518L55,-526L60,-533L71,-531L80,-536L83,-543L90,-550L96,-550L108,-555L113,-553L123,-561L130,-556zM2,-467L5,-463L10,-463L14,-457L20,-453L19,-452L13,-450L9,-455L7,-459L1,-460L0,-462L2,-467zM26,-398L21,-397L17,-401L14,-406L22,-407L27,-404L26,-398zM112,-339L103,-334L100,-339L100,-345L108,-349L112,-351L117,-349L120,-345L112,-339zM374,-443L371,-443L369,-446L368,-450L370,-451L373,-450L377,-447L376,-446L374,-443zM391,-416L390,-413L387,-414L386,-416L385,-417L385,-417L383,-418L384,-425L386,-423L390,-423L389,-418L391,-416zM402,-399L398,-400L392,-406L395,-407L402,-399zM402,-396L402,-393L406,-391L407,-386L407,-384L404,-384L399,-387L401,-391L399,-393L399,-396L401,-397L402,-396zM394,-353L391,-352L388,-356L392,-362L394,-369L401,-371L402,-374L403,-375L404,-375L410,-363L410,-360L409,-358L410,-357L409,-355L410,-351L404,-351L399,-353L394,-353z",
//           "value": 2
//         },
//         {
//           "name": "Northeast",
//           "path": "M957,-869L955,-868L954,-871L950,-873L950,-875L937,-913L942,-919L945,-930L944,-948L951,-967L957,-963L966,-970L974,-966L983,-937L997,-928L1000,-919L988,-908L974,-898L961,-880zM931,-853L918,-850L914,-868L912,-867L911,-868L911,-872L909,-877L909,-882L907,-885L905,-891L905,-894L904,-898L932,-906L932,-906L932,-899L934,-897L934,-894L932,-890L929,-889L929,-886L930,-883L929,-877L928,-875L928,-870L929,-865L928,-864L929,-858L929,-855zM903,-815L901,-814L899,-808L897,-806L899,-803L898,-800L898,-797L900,-796L901,-794L907,-790L906,-787L903,-783L902,-782L899,-779L895,-779L894,-778L893,-776L878,-773L864,-770L852,-767L847,-766L832,-763L814,-760L811,-780L806,-809L806,-809L817,-818L817,-818L818,-812L843,-817L867,-821L888,-826L893,-824L895,-822L895,-820L897,-817L900,-816zM917,-810L914,-798L919,-798L920,-782L911,-763L909,-768L905,-768L900,-773L898,-772L897,-776L899,-779L902,-782L903,-783L906,-787L907,-790L901,-794L900,-796L898,-797L898,-800L899,-803L897,-806L899,-808L901,-814L903,-815zM945,-841L949,-829L948,-826L942,-823L933,-819L921,-811L920,-814L923,-817L921,-818L918,-835L930,-837zM918,-850L918,-835L921,-818L923,-817L920,-814L921,-811L943,-820L949,-817L928,-805L918,-802L917,-810L903,-815L900,-816L897,-817L895,-820L895,-822L893,-824L888,-826L867,-821L843,-817L818,-812L817,-818L828,-833L828,-835L828,-835L824,-841L832,-845L845,-847L858,-848L868,-857L865,-866L863,-869L863,-869L863,-869L863,-869L875,-887L881,-892L904,-898L905,-894L905,-891L907,-885L909,-882L909,-877L911,-872L911,-868L912,-867L914,-868zM956,-863L959,-852L967,-842L974,-844L970,-851L976,-847L976,-841L967,-835L959,-833L958,-836L955,-838L952,-843L945,-841L930,-837L918,-835L918,-850L931,-853L950,-858L951,-861L954,-863zM959,-833L948,-826L949,-829L945,-841L952,-843L955,-838L958,-836zM957,-869L956,-863L954,-863L951,-861L950,-858L931,-853L929,-855L929,-858L928,-864L929,-865L928,-870L928,-875L929,-877L930,-883L929,-886L929,-889L932,-890L934,-894L934,-897L932,-899L932,-906L932,-906L932,-911L937,-913L950,-875L950,-873L954,-871L955,-868z",
//           "value": 639
//         },
//         {
//           "name": "South",
//           "path": "M784,-726L785,-724L785,-720L788,-717L789,-714L792,-711L794,-709L798,-709L792,-702L787,-698L786,-696L785,-694L780,-691L779,-688L776,-686L771,-684L759,-682L744,-681L739,-680L728,-680L718,-679L709,-678L698,-676L697,-677L694,-677L694,-674L669,-672L672,-674L675,-676L675,-680L675,-682L674,-685L675,-687L680,-687L684,-685L686,-687L685,-692L689,-694L692,-696L690,-698L692,-701L692,-702L694,-702L694,-705L699,-703L702,-706L708,-703L709,-705L713,-708L717,-706L718,-708L721,-713L722,-710L726,-709L729,-716L731,-717L733,-721L735,-723L735,-727L739,-727L742,-729L745,-729L745,-731L743,-735L744,-736L750,-737L753,-735L758,-731L762,-729L765,-728L769,-729L772,-728L776,-730L779,-731L781,-728zM872,-640L867,-624L854,-607L837,-593L833,-594L831,-594L831,-598L828,-602L824,-604L825,-605L823,-608L821,-612L815,-616L812,-621L807,-624L805,-626L798,-630L795,-634L791,-640L788,-641L782,-644L785,-649L786,-651L788,-652L797,-657L814,-659L822,-659L823,-658L824,-659L828,-656L828,-654L848,-657zM771,-684L797,-687L806,-689L806,-686L807,-683L803,-682L801,-678L798,-678L792,-673L790,-674L786,-671L787,-669L783,-667L782,-665L778,-662L774,-661L771,-660L768,-657L768,-654L764,-652L764,-648L755,-646L741,-645L718,-643L695,-641L675,-640L657,-638L659,-640L659,-647L661,-650L662,-654L665,-656L666,-659L666,-661L667,-666L668,-670L669,-672L694,-674L694,-677L697,-677L698,-676L709,-678L718,-679L728,-680L739,-680L744,-681L759,-682zM832,-763L834,-752L836,-755L838,-758L841,-759L843,-762L848,-762L850,-764L853,-766L858,-766L861,-763L863,-761L862,-756L852,-760L852,-754L850,-752L847,-748L845,-745L844,-746L843,-742L842,-739L841,-737L839,-736L836,-737L833,-738L833,-733L830,-729L830,-726L827,-722L826,-718L826,-715L826,-713L824,-711L822,-711L820,-709L818,-710L818,-708L811,-705L809,-706L804,-703L801,-704L799,-705L798,-709L794,-709L792,-711L789,-714L788,-717L785,-720L785,-724L784,-726L788,-728L790,-731L789,-736L791,-741L794,-741L794,-738L795,-739L796,-742L796,-746L799,-750L801,-750L803,-751L805,-752L809,-758L809,-760L809,-765L810,-771L810,-776L809,-779L811,-780L814,-760zM863,-761L865,-760L868,-759L867,-757L871,-756L875,-754L876,-753L876,-751L877,-750L874,-747L873,-742L876,-741L878,-743L880,-740L893,-730L899,-721L899,-720L907,-708L888,-704L870,-700L835,-693L806,-689L797,-687L771,-684L776,-686L779,-688L780,-691L785,-694L786,-696L787,-698L792,-702L798,-709L799,-706L801,-704L804,-703L809,-706L811,-705L818,-708L818,-710L820,-709L822,-711L824,-711L826,-713L826,-716L826,-718L827,-722L830,-726L830,-729L833,-733L833,-738L836,-737L839,-736L841,-737L842,-739L843,-742L844,-746L845,-745L847,-748L850,-752L852,-754L852,-760L862,-756L863,-761zM901,-722L902,-722L908,-741L904,-740L903,-738L901,-722zM741,-645L749,-618L755,-597L759,-591L761,-587L758,-583L758,-576L760,-572L760,-568L760,-564L761,-561L762,-559L724,-555L713,-552L713,-551L718,-546L717,-541L716,-538L699,-539L696,-573L696,-608L697,-637L695,-641L718,-643zM666,-661L666,-659L665,-656L662,-654L661,-650L659,-647L659,-640L657,-638L657,-637L654,-635L654,-632L652,-626L650,-624L647,-621L645,-616L642,-608L642,-603L644,-598L643,-593L628,-593L608,-592L590,-591L590,-604L586,-604L583,-603L582,-605L582,-624L582,-645L578,-669L599,-669L619,-669L638,-670L658,-670L660,-667L658,-665L656,-662L655,-660zM876,-751L876,-753L875,-754L876,-756L878,-754zM899,-779L897,-776L898,-772L904,-761L912,-752L900,-749L893,-776L894,-778L895,-779zM830,-563L835,-547L845,-530L856,-515L858,-507L870,-486L875,-466L874,-446L866,-441L856,-442L851,-451L842,-455L829,-472L817,-487L813,-498L815,-511L809,-523L794,-534L782,-541L762,-529L757,-535L737,-543L716,-538L717,-541L718,-546L713,-551L713,-552L724,-555L762,-559L766,-553L785,-555L816,-556L818,-552L821,-555L819,-562L822,-563L826,-562zM786,-651L785,-649L782,-644L788,-641L791,-640L795,-634L798,-630L805,-626L807,-624L812,-621L815,-616L821,-612L823,-608L825,-605L824,-604L828,-602L831,-598L831,-594L833,-594L837,-593L831,-576L830,-563L826,-562L822,-563L819,-562L821,-555L818,-552L816,-556L785,-555L766,-553L762,-559L761,-561L760,-564L760,-568L760,-572L758,-576L758,-583L761,-587L759,-591L755,-597L749,-618L741,-645L755,-646L764,-648zM643,-593L645,-592L643,-589L646,-584L646,-582L648,-578L646,-576L645,-571L642,-568L640,-563L639,-558L637,-555L638,-550L654,-550L672,-551L672,-547L671,-543L672,-541L675,-538L676,-535L677,-533L675,-523L682,-510L655,-508L639,-511L627,-515L612,-518L596,-518L594,-521L596,-524L599,-527L599,-532L597,-533L599,-538L600,-541L601,-549L600,-552L597,-557L596,-562L594,-565L591,-568L590,-591L608,-592L628,-593zM893,-776L900,-749L912,-752L913,-750L908,-741L904,-740L903,-738L892,-746L888,-762L887,-754L891,-736L880,-740L878,-743L876,-741L873,-742L874,-747L877,-750L876,-751L878,-754L876,-756L875,-754L871,-756L867,-757L868,-759L865,-760L863,-761L861,-763L858,-766L853,-766L850,-764L848,-762L843,-762L841,-759L838,-758L836,-755L834,-752L832,-763L847,-766L852,-767L864,-770L878,-773zM695,-641L697,-637L696,-608L696,-573L699,-539L688,-533L677,-533L676,-535L675,-538L672,-541L671,-543L672,-547L672,-551L654,-550L638,-550L637,-555L639,-558L640,-563L642,-568L645,-571L646,-576L648,-578L646,-582L646,-584L643,-589L645,-592L643,-593L644,-598L642,-603L642,-608L645,-616L647,-621L650,-624L652,-626L654,-632L654,-635L657,-637L657,-638L675,-640zM907,-708L914,-687L907,-669L891,-657L878,-643L872,-640L848,-657L828,-654L828,-656L824,-659L823,-658L822,-659L814,-659L797,-657L788,-652L786,-651L764,-648L764,-652L768,-654L768,-657L771,-660L774,-661L778,-662L782,-665L783,-667L787,-669L786,-671L790,-674L792,-673L798,-678L801,-678L803,-682L807,-683L806,-686L806,-689L835,-693L870,-700L888,-669L582,-645L582,-624L582,-605L574,-609L568,-611L564,-610L558,-610L554,-610L551,-608L548,-607L545,-608L539,-607L536,-611L533,-608L528,-609L523,-613L518,-611L516,-616L507,-616L502,-617L496,-619L493,-623L488,-622L485,-624L481,-627L482,-648L483,-669L465,-670L447,-671L430,-672L431,-683L448,-682L464,-681L482,-680L499,-679L531,-679L562,-678L578,-679L578,-679zM582,-605L583,-603L586,-604L590,-604L590,-591L591,-568L594,-565L596,-562L597,-557L600,-552L601,-549L600,-541L599,-538L597,-533L599,-532L599,-527L596,-524L594,-521L596,-518L579,-513L561,-496L542,-487L531,-476L526,-466L526,-451L527,-440L531,-433L523,-432L508,-437L493,-445L488,-455L484,-471L473,-484L466,-498L457,-513L444,-523L428,-524L415,-507L399,-515L390,-523L386,-535L381,-547L371,-558L362,-566L356,-575L354,-578L354,-580L371,-578L405,-575L422,-574L425,-615L430,-672L447,-671L465,-670L483,-669L482,-648L481,-627L485,-624L488,-622L493,-623L496,-619L502,-617L507,-616L516,-616L518,-611L523,-613L528,-609L533,-608L536,-611L539,-607L545,-608L548,-607L551,-608L554,-610L558,-610L564,-610L568,-611L574,-609zM325,-695L307,-572L270,-577L231,-600L205,-616L208,-620L210,-620L213,-624L210,-627L210,-631L210,-635L215,-639L218,-648L224,-652L222,-656L220,-661L220,-665L219,-668L219,-670L221,-674L221,-679L222,-683L223,-687L222,-691L224,-693L227,-692L230,-690L233,-689L234,-692L235,-692L239,-710L267,-705L300,-699zM431,-683L430,-672L425,-615L422,-574L405,-575L371,-578L354,-580L354,-578L356,-575L324,-579L322,-570L307,-572L325,-695L352,-691L380,-688L410,-685z",
//           "value": 105
//         },
//         {
//           "name": "West",
//           "path": "M452,-748L450,-714L448,-682L431,-683L410,-685L380,-688L352,-691L325,-695L337,-782L354,-779L370,-777L404,-774L420,-772L453,-770L452,-748zM337,-782L325,-695L300,-699L267,-705L239,-710L260,-817L308,-808L305,-787zM260,-817L239,-710L235,-692L234,-692L233,-689L230,-690L227,-692L224,-693L222,-691L223,-687L222,-683L221,-679L221,-674L219,-670L196,-704L172,-739L148,-776L165,-840L212,-828L212,-828zM317,-863L317,-862L308,-808L260,-817L212,-828L222,-866L224,-872L224,-875L221,-877L222,-881L225,-885L230,-888L234,-895L237,-900L239,-902L239,-906L237,-908L234,-913L235,-917L235,-920L241,-951L248,-978L262,-975L258,-952L260,-945L260,-941L262,-937L265,-935L266,-931L269,-923L272,-919L277,-918L274,-914L271,-908L271,-902L269,-901L268,-896L271,-893L274,-895L276,-898L278,-897L279,-893L280,-886L282,-883L282,-877L282,-875L285,-874L287,-871L288,-865L292,-867L297,-865L298,-867L306,-865L310,-865L313,-869L314,-868L315,-864zM430,-881L427,-861L402,-863L374,-867L349,-870L319,-875L317,-864L317,-863L315,-864L314,-868L313,-869L310,-865L306,-865L298,-867L297,-865L292,-867L288,-865L287,-871L285,-874L282,-875L282,-877L282,-883L280,-886L279,-893L278,-897L276,-898L274,-895L271,-893L268,-896L269,-901L271,-902L271,-908L274,-914L277,-918L272,-919L269,-923L266,-931L265,-935L262,-937L260,-941L260,-945L258,-952L262,-975L305,-966L348,-959L391,-953L435,-948L432,-908zM427,-861L424,-816L420,-772L404,-774L370,-777L354,-779L337,-782L305,-787L308,-808L317,-862L317,-863L317,-864L319,-875L349,-870L374,-867L402,-863zM248,-978L241,-951L235,-920L235,-917L234,-913L203,-921L197,-920L194,-922L190,-921L184,-920L178,-922L174,-921L170,-921L168,-923L163,-926L160,-926L153,-925L150,-926L147,-928L146,-931L147,-935L146,-940L142,-942L139,-945L134,-947L131,-948L133,-966L137,-988L156,-977L157,-959L162,-963L165,-982L164,-1001L206,-989zM234,-913L237,-908L239,-906L239,-902L237,-900L234,-895L230,-888L225,-885L222,-881L221,-877L224,-875L224,-872L222,-866L212,-828L212,-828L165,-840L99,-859L98,-873L110,-893L118,-917L131,-948L134,-947L139,-945L142,-942L146,-940L147,-935L146,-931L147,-928L150,-926L153,-925L160,-926L163,-926L168,-923L170,-921L174,-921L178,-922L184,-920L190,-921L194,-922L197,-920L203,-921zM165,-840L148,-776L172,-739L196,-704L219,-670L219,-668L220,-665L220,-661L222,-656L224,-652L218,-648L215,-639L210,-635L210,-631L210,-627L213,-624L210,-620L208,-620L184,-623L163,-626L163,-634L158,-647L142,-665L135,-667L129,-676L115,-682L112,-686L113,-698L102,-724L97,-758L99,-762L94,-772L87,-793L90,-811L85,-825L94,-841L99,-859z",
//           "value": 96
//         },
//         {
//           "name": "Midwest",
//           "path": "M578,-679L562,-678L531,-679L499,-679L482,-680L464,-681L448,-682L450,-714L452,-748L452,-748L481,-746L503,-745L542,-744L565,-744L569,-741L571,-741L572,-738L569,-734L571,-732L573,-728L577,-726L578,-702zM630,-754L629,-749L631,-742L634,-738L637,-734L641,-732L643,-731L645,-727L645,-723L647,-722L650,-724L654,-720L653,-716L652,-713L651,-709L654,-706L657,-703L659,-703L664,-699L666,-698L667,-693L667,-690L670,-684L672,-685L675,-682L675,-680L675,-676L672,-674L669,-672L668,-670L667,-666L666,-661L655,-660L656,-662L658,-665L660,-667L658,-670L638,-670L619,-669L599,-669L578,-669L578,-679L578,-679L578,-702L577,-726L573,-728L571,-732L569,-734L572,-738L571,-741L569,-741L565,-744L563,-749L560,-752L557,-755L557,-757L572,-757L587,-757L606,-758L625,-759L628,-756zM536,-943L536,-941L537,-937L537,-935L536,-932L537,-928L537,-924L539,-920L540,-915L541,-910L541,-908L541,-905L542,-898L542,-897L542,-892L543,-888L544,-884L545,-881L545,-877L516,-876L491,-877L459,-878L430,-881L432,-908L435,-948L486,-945zM546,-799L547,-797L548,-793L548,-791L551,-787L552,-783L552,-778L553,-778L554,-775L556,-769L556,-765L556,-761L557,-757L557,-755L560,-752L563,-749L565,-744L542,-744L503,-745L481,-746L452,-748L452,-748L452,-748L453,-770L420,-772L424,-816L455,-813L479,-812L512,-811L516,-808L522,-806L523,-807L527,-807L533,-807L537,-804L541,-802L542,-800L544,-799zM546,-821L544,-821L544,-816L546,-813L546,-810L545,-807L544,-803L546,-801L546,-799L544,-799L542,-800L541,-802L537,-804L533,-807L527,-807L523,-807L522,-806L516,-808L512,-811L479,-812L455,-813L424,-816L427,-861L430,-881L459,-878L491,-877L516,-876L545,-877L545,-873L542,-871L541,-868L542,-865L545,-863L547,-842zM639,-892L639,-892L640,-892L640,-892L643,-891L644,-888L658,-885L667,-881L671,-882L674,-882L675,-878L679,-877L681,-874L680,-872L680,-868L683,-869L682,-865L685,-863L685,-863L685,-862L685,-862L679,-854L682,-851L692,-867L694,-867L688,-849L686,-834L684,-821L687,-810L687,-805L687,-805L687,-805L674,-804L657,-803L641,-802L639,-805L634,-807L632,-810L632,-812L631,-817L633,-819L630,-822L630,-823L629,-826L629,-831L629,-833L623,-836L619,-839L618,-841L616,-843L611,-846L609,-846L604,-850L604,-855L604,-861L605,-866L602,-870L604,-875L607,-877L611,-879L611,-879L610,-892L614,-893L614,-893L629,-899zM811,-780L809,-779L810,-776L810,-771L809,-765L809,-760L809,-758L805,-752L803,-751L801,-750L799,-750L796,-746L796,-742L795,-739L794,-738L794,-741L791,-741L789,-736L790,-731L788,-728L784,-726L781,-728L779,-731L776,-730L772,-728L769,-729L765,-728L762,-729L758,-731L753,-735L750,-737L744,-736L742,-751L740,-773L737,-792L746,-794L753,-795L759,-796L759,-796L759,-796L770,-792L778,-793L790,-797L798,-805L806,-809zM630,-823L630,-822L633,-819L631,-817L632,-812L632,-810L634,-807L639,-805L641,-802L642,-800L644,-799L645,-797L647,-795L649,-793L649,-787L646,-782L645,-781L641,-779L636,-778L634,-774L637,-772L637,-769L635,-765L635,-762L630,-758L630,-754L628,-756L625,-759L606,-758L587,-757L572,-757L557,-757L556,-761L556,-765L556,-769L554,-775L553,-778L552,-778L552,-783L551,-787L548,-791L548,-793L547,-797L546,-799L546,-801L544,-803L545,-807L546,-810L546,-813L544,-816L544,-821L546,-821L564,-821L586,-822L609,-823zM687,-805L687,-805L687,-799L693,-788L693,-788L693,-788L695,-763L698,-738L696,-731L698,-730L699,-726L699,-723L698,-722L697,-718L694,-713L692,-707L692,-702L692,-701L690,-698L692,-696L689,-694L685,-692L686,-687L684,-685L680,-687L675,-687L674,-685L675,-682L672,-685L670,-684L667,-690L667,-693L666,-698L664,-699L659,-703L657,-703L654,-706L651,-709L652,-713L653,-716L654,-720L650,-724L647,-722L645,-723L645,-727L643,-731L641,-732L637,-734L634,-738L631,-742L629,-749L630,-754L630,-758L635,-762L635,-765L637,-769L637,-772L634,-774L636,-778L641,-779L645,-781L646,-782L649,-787L649,-793L647,-795L645,-797L644,-799L642,-800L641,-802L657,-803L674,-804L687,-805L687,-805zM737,-792L740,-773L742,-751L744,-736L743,-735L745,-731L745,-729L742,-729L739,-727L735,-727L735,-723L733,-721L731,-717L729,-716L726,-709L722,-710L721,-713L718,-708L717,-706L713,-708L709,-705L708,-703L702,-706L699,-703L694,-705L694,-702L692,-702L692,-707L694,-713L697,-718L698,-722L699,-723L699,-726L698,-730L696,-731L698,-738L695,-763L693,-788L693,-788L694,-787L700,-787L704,-790L704,-790L722,-792L737,-794zM728,-899L728,-899L733,-899L733,-899L732,-897L740,-889L727,-885L727,-885L714,-886L703,-880L693,-877L685,-862L685,-863L685,-863L682,-865L683,-869L680,-868L680,-872L681,-874L679,-877L675,-878L674,-882L671,-882L667,-881L658,-885L644,-888L643,-891L640,-892L640,-892L639,-892L639,-892L639,-892L651,-898L662,-906L675,-914L671,-902L680,-900L691,-893L704,-899L719,-903L723,-897L728,-897L728,-899zM772,-826L772,-826L772,-826L766,-813L764,-805L764,-805L759,-796L759,-796L753,-795L746,-794L737,-792L737,-794L722,-792L704,-790L704,-790L704,-790L707,-794L713,-805L712,-819L705,-832L705,-842L708,-853L711,-861L716,-867L719,-860L720,-871L723,-873L724,-882L738,-879L751,-872L753,-862L753,-852L746,-842L747,-837L750,-837L759,-848L765,-847L770,-835L772,-826L772,-826zM649,-924L649,-924L634,-916L624,-906L614,-896L614,-893L610,-892L611,-879L611,-879L607,-877L604,-875L602,-870L605,-866L604,-861L604,-855L604,-850L609,-846L611,-846L616,-843L618,-841L619,-839L623,-836L629,-833L629,-831L629,-826L630,-823L609,-823L586,-822L564,-821L546,-821L547,-842L545,-863L542,-865L541,-868L542,-871L545,-873L545,-877L545,-881L544,-884L543,-888L542,-892L542,-897L542,-898L541,-905L541,-908L541,-910L540,-915L539,-920L537,-924L537,-928L536,-932L537,-935L537,-937L536,-941L536,-943L566,-943L566,-951L571,-952L574,-939L578,-936L589,-934L604,-931L619,-925L630,-929L649,-924z",
//           "value": 42
//         }
//       ]
//     }]
//   });
// });

var chart = Highcharts.chart('q-community', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'What type of community do you currently live in?',
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
        name: 'Urban',
        y: 327,
      },
      {
        name: 'Suburban',
        y: 660,
      },
      {
        name: 'Rural',
        y: 62
      }
    ]
  }]
});

var chart = Highcharts.chart('q-ethnicity', {
  chart: {
    height: 450,
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'What is your ethnicity?',
    style: {
      fontWeight: 'bold'
    }
  },
  subtitle: {
    text: '<i>Note: respondents may have selected more than one</i>',
  },
  colors: ['#0c3d8b'],
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
  tooltip: {
      formatter: function () {
          return '<b>' + this.x + '</b><br>' +
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.50).toFixed(1) + '%</b>';
      }
  },
  series: [{
    data: [25, 67, 202, 143, 58, 53, 56, 33, 14, 6, 53, 54, 20, 552, 34, 12],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-financial', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
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
        name: 'Yes, from Andover',
        y: 483,
      },
      {
        name: 'Yes, from outside of Andover',
        y: 50,
      },
      {
        name: 'No',
        y: 537
      }
    ]
  }]
});

var chart = Highcharts.chart('q-parentsCollege', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Did your parents attend college?',
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
        name: 'Both',
        y: 917,
      },
      {
        name: 'One',
        y: 93,
      },
      {
        name: 'None',
        y: 38
      }
    ]
  }]
});

Highcharts.chart('q-sexual-orientation', {
    chart: {
        type: 'column',
        height: 350,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'What is your sexual orientation – “a person\'s sexual identity in relation to the gender to which they are attracted\” (Oxford Dictionaries)?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#0c3d8b'],
    xAxis: {
        categories: ['Asexual', 'Bisexual','Demisexual','Heterosexual','Homosexual','Pansexual', 'Other', 'Unsure'],
        title: {
          text: 'Category*',
          verticalAlign: 'center',
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
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.50).toFixed(1) + '%</b>';
        }
    },
    series: [{
      data: [15, 100, 12, 832, 23, 23, 2, 43],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

Highcharts.chart('q-romantic-orientation', {
    chart: {
        type: 'column',
        height: 350,
        style: {
          fontFamily: 'Gotham',
          fontSize: '15px'
        },
        backgroundColor: "#ECF0F1"
    },
    title: {
        text: 'What is your romantic orientation – “an individual\'s pattern of romantic attraction based on a person\'s gender\” (AVENwiki)?',
        style: {
          fontWeight: 'bold'
        }
    },
    colors: ['#0c3d8b'],
    xAxis: {
        categories: ['Aromantic', 'Biromantic', 'Demiromantic', 'Heteroromantic', 'Homoromantic', 'Panromantic', 'Other', 'Unsure'],
        title: {
          text: 'Category*',
          verticalAlign: 'center',
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
                this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.50).toFixed(1) + '%</b>';
        }
    },
    series: [{
      data: [8, 81, 16, 852, 24, 26, 2, 41],
      dataLabels: {
        enabled: false
      },
      name: 'Responses'
    }]
});

var chart = Highcharts.chart('q-pgp', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'What are your preferred gender pronouns (PGPs)?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#0c3d8b'],
  xAxis: {
    categories: ['He/him/his', 'She/her/hers', 'They/them/their(s)', 'Ze/hir/hirs', 'Unsure', 'Other']
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.51).toFixed(1) + '%</b>';
      }
  },
  series: [{
    data: [488, 553, 3, 2, 3, 2],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-sex', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'What is your sex?',
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
        name: 'Female',
        y: 559,
      },
      {
        name: 'Male',
        y: 488
      },
      {
        name: 'Intersex',
        y: 2
      }
    ]
  }]
});

var chart = Highcharts.chart('q-family-income', {
  chart: {
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'What is your net family income?',
    style: {
      fontWeight: 'bold'
    }
  },
  colors: ['#0c3d8b'],
  xAxis: {
    categories: ['$500,000 or more', '$250,000 to $499,999', '$150,000 to $249,999', '$100,000 to $149,999', '$60,000 to $99,999', '$35,000 to $59,999', '$34,999 or less', 'Unsure'],
    title: {
      text: 'Net family income',
      verticalAlign: 'center',
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
              this.series.name + ': <b>' + this.y + '</b><br>' + 'Percentage: <b>' + (this.y/10.44).toFixed(1) + '%</b>';
      }
  },
  series: [{
    data: [246, 160, 131, 121, 60, 40, 33, 253],
    type: 'bar',
    dataLabels: {
      enabled: false
    },
    name: 'Responses'
  }]
});

var chart = Highcharts.chart('q-family-income-perceived-class', {
  chart: {
      type: 'bar',
      style: {
        fontFamily: 'Gotham',
        fontSize: '15px'
      },
      backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Perceived socioeconomic class by annual net family income',
    style: {
      fontWeight: 'bold'
    }
  },
  xAxis: {
      categories: ['$500,000 or more', '$250,000 to $499,999', '$150,000 to $249,999', '$100,000 to $149,999', '$60,000 to $99,999', '$35,000 to $59,999', '$34,999 or less', 'Unsure'],
      title: {
        text: 'Net family income',
        verticalAlign: 'center',
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
      reversedStacks: false
  },
  legend: {
      enabled: true
  },
  tooltip: {
      formatter: function () {
          return '<b>' + this.x + ": " + this.series.name + '</b><br>' + 'Percentage: <b>' + this.y + '%</b>';
      }
  },
  plotOptions: {
      series: {
          stacking: 'percent'
      }
  },
  series: [{
      name: 'Upper class',
      data: [71.7, 25.6, 9.16, 1.7, 0.0, 2.5, 0.0, 13.1],
      color: '#0c3d8b'
  }, {
      name: 'Upper-middle class',
      data: [26.2, 66.9, 64.9, 46.3, 23.3, 2.5, 3.0, 50.8],
      color: '#0b88c0'
  }, {
      name: 'Middle class',
      data: [1.6, 6.3, 25.2, 43.8, 45.0, 22.5, 15.2, 30.2],
      color: '#55a5cf'
  }, {
      name: 'Lower-middle class',
      data: [0.0, 1.3, 0.76, 7.4, 30.0, 47.5, 27.3, 4.8],
      color: '#87c6e3'
  }, {
      name: 'Lower class',
      data: [0.4, 0.0, 0.0, 0.8, 1.7, 25.0, 54.6, 1.2],
      color: '#b5dbea'
  }]
});

var chart = Highcharts.chart('q-varsity', {
  chart: {
    type: 'pie',
    style: {
      fontFamily: 'Gotham',
      fontSize: '15px'
    },
    backgroundColor: "#ECF0F1"
  },
  title: {
    text: 'Are you a varsity athlete?',
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
        y: 497,
      },
      {
        name: 'No',
        y: 551
      }
    ]
  }]
});
