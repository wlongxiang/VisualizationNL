var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

var data = [
                                  {
                                    "name": "Randwijck West",
                                    "value": 2235
                                  },
                                  {
                                    "name": "Randwijck Oost",
                                    "value": 3720
                                  },
                                  {
                                    "name": "Oranjebuurt",
                                    "value": 880
                                  },
                                  {
                                    "name": "Patrimonium",
                                    "value": 2265
                                  },
                                  {
                                    "name": "Elsrijk West",
                                    "value": 3465
                                  },
                                  {
                                    "name": "Kruiskerkbuurt",
                                    "value": 2395
                                  },
                                  {
                                    "name": "Vredeveldbuurt",
                                    "value": 1785
                                  },
                                  {
                                    "name": "Elsrijk Oost",
                                    "value": 3830
                                  },
                                  {
                                    "name": "Stadshart",
                                    "value": 3290
                                  },
                                  {
                                    "name": "Uilenstede",
                                    "value": 3440
                                  },
                                  {
                                    "name": "Kronenburg",
                                    "value": 30
                                  },
                                  {
                                    "name": "Heldenbuurt",
                                    "value": 2990
                                  },
                                  {
                                    "name": "Zeestratenbuurt",
                                    "value": 2010
                                  },
                                  {
                                    "name": "Boekenbuurt",
                                    "value": 2700
                                  },
                                  {
                                    "name": "Operabuurt",
                                    "value": 2290
                                  },
                                  {
                                    "name": "Middelpolder",
                                    "value": 370
                                  },
                                  {
                                    "name": "Buurt over Ouderkerk",
                                    "value": 430
                                  },
                                  {
                                    "name": "Oude Dorp",
                                    "value": 635
                                  },
                                  {
                                    "name": "Kastanjebuurt",
                                    "value": 2270
                                  },
                                  {
                                    "name": "Van der Leekbuurt",
                                    "value": 2140
                                  },
                                  {
                                    "name": "Populierenbuurt",
                                    "value": 3475
                                  },
                                  {
                                    "name": "Augustinuspark",
                                    "value": 3075
                                  },
                                  {
                                    "name": "Startbaanbuurt",
                                    "value": 790
                                  },
                                  {
                                    "name": "Langerhuize",
                                    "value": 1360
                                  },
                                  {
                                    "name": "Alpen Rondwegbuurt",
                                    "value": 1615
                                  },
                                  {
                                    "name": "In de Wolkenbuurt",
                                    "value": 1060
                                  },
                                  {
                                    "name": "Watercirkelbuurt",
                                    "value": 2130
                                  },
                                  {
                                    "name": "Kringloopbuurt",
                                    "value": 1960
                                  },
                                  {
                                    "name": "Beroepenbuurt",
                                    "value": 1560
                                  },
                                  {
                                    "name": "Hemellichamenbuurt",
                                    "value": 2625
                                  },
                                  {
                                    "name": "Punterbuurt",
                                    "value": 2850
                                  },
                                  {
                                    "name": "Molenbuurt",
                                    "value": 2840
                                  },
                                  {
                                    "name": "Galjoenbuurt",
                                    "value": 3255
                                  },
                                  {
                                    "name": "Bovenkerk",
                                    "value": 3040
                                  },
                                  {
                                    "name": "Buitenplaatsenbuurt",
                                    "value": 1360
                                  },
                                  {
                                    "name": "Betsy Perkbuurt",
                                    "value": 1755
                                  },
                                  {
                                    "name": "Legmeer",
                                    "value": 190
                                  },
                                  {
                                    "name": "Landschappenbuurt",
                                    "value": 2030
                                  },
                                  {
                                    "name": "Theaterbuurt",
                                    "value": 2380
                                  },
                                  {
                                    "name": "Kastelenbuurt",
                                    "value": 3010
                                  },
                                  {
                                    "name": "Schrijversbuurt",
                                    "value": 2125
                                  },
                                  {
                                    "name": "Kruidenbuurt",
                                    "value": 2540
                                  },
                                  {
                                    "name": "De Scheg",
                                    "value": 45
                                  },
                                  {
                                    "name": "Nes aan de Amstel",
                                    "value": 1005
                                  },
                                  {
                                    "name": "Legmeerpolder",
                                    "value": 225
                                  },
                                  {
                                    "name": "Amsterdamse Bos Noord",
                                    "value": 100
                                  },
                                  {
                                    "name": "Amsterdamse Bos Zuid",
                                    "value": 10
                                  }
                                ]

myChart.showLoading();

$.get('./data/processed/amstelveen-geometry.json', function (amstelveenJson) {
    myChart.hideLoading();
    console.log(amstelveenJson);

    echarts.registerMap('amstelveen', amstelveenJson);
//    $.getJSON('./data/processed/amstelveen-aantal-inwoners.json', function(returndata){
//    console.log(returndata)
//    });

    option = {
        title: {
            text: 'Amstelveen 2020',
            subtext: 'Data From CBS',
            sublink: 'https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/wijk-en-buurtkaart-2020#:~:text=De%20Wijk%2D%20en%20Buurtkaart%202020,%E2%84%A2%2Dfgdb%20en%20geopackage).',
            left: 'right'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                console.log(params);
                console.log(params.value);
                var value = (params.value + '').split('.');
                value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,');
                return params.seriesName + '<br/>' + params.name + ': ' + value;
            }
        },
        visualMap: {
            left: 'right',
            min: 0,
            max: 5000,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            calculable: true
        },
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'AmstelveenData',
                type: 'map',
                roam: true,
                map: 'amstelveen',
//                nameProperty: "buurtnaam",
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data:data
            }
        ]



    };

    myChart.setOption(option);
});

option && myChart.setOption(option);
