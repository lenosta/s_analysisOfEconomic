$(function(){
    var o1_2 = {
        title: {
            text: '工业用品监测',
            padding: '2',
            textStyle: {
                fontSize: '16'
            },show:false
        },
        tooltip: {
            trigger: 'item',
            enterable: false
        },
        grid:{
            y:10,
            x:60,
            x2:60,
        },
        legend: {
            show: false,
            data: ['', '']
        },
        xAxis: [{
            type: 'time',
            boundaryGap: [0.05, 0.1],
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                    width: 0
                }
            }
        }],
        yAxis: [{
            show:false,
            max: 1000,
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                    width: 1
                }
            }

        }],
        series: [{
            "name": "",
            "type": "eventRiver",
            "weight": 123,
            "data": [{
                "name": "橡胶价格140.99元/吨，下降7.8%",
                "weight": 113,
                "evolution": [{
                    "time": "2014-05-01",
                    "value": 44
                }, {
                    "time": "2014-05-02",
                    "value": 34
                }, {
                    "time": "2014-05-03",
                    "value": 60
                }, {
                    "time": "2014-05-04",
                    "value": 40
                }, {
                    "time": "2014-05-05",
                    "value": 30
                }, {
                    "time": "2014-05-06",
                    "value": 30
                }, {
                    "time": "2014-05-07",
                    "value": 40
                }, {
                    "time": "2014-05-08",
                    "value": 20
                }, {
                    "time": "2014-05-09",
                    "value": 20
                }]
            }, {
                "name": "聚乙烯价格  6.93元/吨，上涨8.3%",
                "weight": 123,
                "evolution": [{
                    "time": "2014-05-01",
                    "value": 30
                }, {
                    "time": "2014-05-02",
                    "value": 30
                }, {
                    "time": "2014-05-03",
                    "value": 34
                }, {
                    "time": "2014-05-04",
                    "value": 40
                }, {
                    "time": "2014-05-05",
                    "value": 10
                }, {
                    "time": "2014-05-06",
                    "value": 15
                }, {
                    "time": "2014-05-07",
                    "value": 22
                }, {
                    "time": "2014-05-08",
                    "value": 33
                }, {
                    "time": "2014-05-09",
                    "value": 14
                }, {
                    "time": "2014-05-10",
                    "value": 50
                }]
            }, {
                "name": "硫酸价格   17.85元/吨，上涨3.01%",
                "weight": 123,
                "evolution": [{
                    "time": "2014-05-03",
                    "value": 24
                }, {
                    "time": "2014-05-04",
                    "value": 34
                }, {
                    "time": "2014-05-05",
                    "value": 50
                }, {
                    "time": "2014-05-06",
                    "value": 30
                }, {
                    "time": "2014-05-07",
                    "value": 20
                }, {
                    "time": "2014-05-08",
                    "value": 30
                }, {
                    "time": "2014-05-09",
                    "value": 33
                }, {
                    "time": "2014-05-10",
                    "value": 44
                }, {
                    "time": "2014-05-11",
                    "value": 20
                }, {
                    "time": "2014-05-12",
                    "value": 22
                }]
            }]
        }, {
            "name": "",
            "type": "eventRiver",
            "weight": 123,
            "data": [{
                "name": "工业用煤价格 3.38元/吨，下降4.5%",
                "weight": 123,
                "evolution": [{
                    "time": "2014-05-08",
                    "value": 45
                }, {
                    "time": "2014-05-09",
                    "value": 34
                }, {
                    "time": "2014-05-10",
                    "value": 30
                }, {
                    "time": "2014-05-11",
                    "value": 20
                }, {
                    "time": "2014-05-12",
                    "value": 55
                }, {
                    "time": "2014-05-13",
                    "value": 30
                }, {
                    "time": "2014-05-14",
                    "value": 30
                }, {
                    "time": "2014-05-15",
                    "value": 20
                }, {
                    "time": "2014-05-16",
                    "value": 33
                }]
            }, {
                "name": "铜价格    2.43元/吨，下降4.5%",
                "weight": 123,
                "evolution": [{
                    "time": "2014-05-11",
                    "value": 44
                }, {
                    "time": "2014-05-12",
                    "value": 24
                }, {
                    "time": "2014-05-13",
                    "value": 40
                }, {
                    "time": "2014-05-14",
                    "value": 20
                }, {
                    "time": "2014-05-15",
                    "value": 35
                }, {
                    "time": "2014-05-16",
                    "value": 50
                }, {
                    "time": "2014-05-17",
                    "value": 20
                }, {
                    "time": "2014-05-18",
                    "value": 60
                }, {
                    "time": "2014-05-19",
                    "value": 50
                }]
            }]
        }]
    };
    var o4 = {
        title: {
            text: '',
            textStyle: {
                fontSize: 12
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        calculable: true,
        legend: {
            data: ["钢材", "水泥"],
            x: 20
        },
        xAxis: [{
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLine: {
                lineStyle: {
                    color: "red",
                    width: 1
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#333'
                }
            },
            splitLine: {
                show: true,

            },
        }],
        color: ["#ff9600", "#3cd3ff", '#fa1200', "#a7e6af"],
        yAxis: [{
            type: 'value',
            name: '',
            axisLabel: {
                formatter: '{value}万元／吨',
                textStyle: {
                    color: '#333'
                }
            },
            axisLine: {
                lineStyle: {
                    color: "red",
                    width: 1
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#ccc',
                    type: "solid"
                }
            },
            axisTick: {
                show: false
            },

        }, {
            type: 'value',
            name: '',
            axisLabel: {
                show: false,
                formatter: '{value}'
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: "#ccc",
                    width: 1
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(0,0,0,0)',
                    type: "dashed"
                }
            },
            axisTick: {
                show: false
            }
        }],
        grid: {
            x: '90',
            x2: '30',
            y: '40',
            y2: '60'
        },
        series: [{
            name: '钢材',
            type: 'line',
            data: [6.2, 7.6, 6.7, 7.6, 7.2, 8, 6]
        }, {
            name: '水泥',
            type: 'line',
            yAxisIndex: 1,
            data: [12.3, 13.2, 15.3, 12.4, 13.0, 15, 14]
        }]
    };
    //返回echarts对象
    var myChart3 = echarts.init(document.getElementById('box1'));
    myChart3.setOption(o1_2); 

    var myChart5 = echarts.init(document.getElementById('box4'));
    myChart5.setOption(o4);   
})