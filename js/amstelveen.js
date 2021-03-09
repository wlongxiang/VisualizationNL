var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;
var aantal_inwoners_data = [];

myChart.showLoading();

// load data
$.getJSON('./data/processed/cities/amstelveen/amstelveen-aantal-inwoners.json', function(data){
 aantal_inwoners_data = data;
});

$.get('./data/processed/cities/amstelveen/amstelveen-geometry.json', function (amstelveenJson) {
    myChart.hideLoading();
    echarts.registerMap('amstelveen', amstelveenJson); //register geojson as map
    option = {
        title: {
            text: 'Amstelveen 2020',
            subtext: 'Data From CBS',
            sublink: 'https://www.cbs.nl/nl-nl/dossier/nederland-regionaal/geografische-data/wijk-en-buurtkaart-2020#:~:text=De%20Wijk%2D%20en%20Buurtkaart%202020,%E2%84%A2%2Dfgdb%20en%20geopackage).',
            left: 'center'
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
                name: 'Population',
                type: 'map',
                roam: true,
                map: 'amstelveen',
//                nameProperty: "buurtnaam", // if you use a key other than "name"
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data:aantal_inwoners_data
            }
        ]



    };

    myChart.setOption(option);
});

option && myChart.setOption(option);
