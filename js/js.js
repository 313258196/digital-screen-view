const BASE_URL = "http://192.168.2.44:9014/"
const get = (url) => new Promise((resolve, reject) => {
    fetch(`${BASE_URL}${url}`).then(res => res.text()).then(res => resolve(JSON.parse(res))).catch(err => reject(err))
})
const post = (url, params) => new Promise((resolve, reject) => {
    fetch(`${BASE_URL}${url}`, {
        method: "POST",
        body: params,
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(res => res.text()).then(res => resolve(JSON.parse(res))).catch(err => reject(err))
})
// 深度复制
const deepCopy = data => JSON.parse(JSON.stringify(data))
// 生成泡泡element
const getProp = list => list.map((item, index) => `<a class="b0${index % 5 + 1} co0${index % 5 + 1}" href="javascript:void(0)">${item[1]}</a>`).join(",")

$(function () {
    const initData = async () => {
        try {
            // 总劳动人数
            dataTotal = await get("getMIdTopData")

            // 人员区域分布
            dataArea = await get("getuserCountByCity")
            dataArea = dataArea.reverse()
            console.log("dataArea...", dataArea)

            // 性别年龄学历
            dataGender = await get("getuserByGender")
            dataAge = await get("getUserByAge")
            dataAge = dataAge.map(item => ({ ...item, name: item.name.indexOf("以上") !== -1 ? item.name : `${item.name}岁` }))
            dataEducation = await get("getUserByEducation")

            // 求职热度
            dataJobWantedHot = await get("getUserByIndustry")
            // dataJobWantedHot = dataJobWantedHot.map(item => [item.value, item.name]).reverse()
            dataJobWantedHot = dataJobWantedHot.reverse()

            // 招聘职位热度
            dataJobHot = await get("getWorkByIndustry")
            // dataJobHot = dataJobHot.map(item => [item.value, item.name]).reverse()
            dataJobHot = dataJobHot.reverse()

            // 求职意愿、企业用工数走势图
            dataJobWanted = await get("getJobHuntingByWeek")

            // 地图数据
            // const rsData = await get("getuserCountByArea")
            // dataMap.data = rsData.map(item => ({ name: item.name, value: item.value }))
            // let json = {}
            // rsData.forEach(item => json[item.name] = [item.longitude, item.latitude])
            // dataMap.geoCoordMap = json

            // 前五省份
            dataProvinces = await get("getuserCountByProvince")

            // 行业薪资岗位 柱状图
            dataJobSalary = await get("getWorkByWage")
            dataJobSalary = dataJobSalary.reverse()
            console.log(222, dataJobSalary)
            // dataJobSalary = dataJobSalary.map(item => [item.valueA, item.name, item.values]).reverse()

            dataWorkIndustry = await get("getWorkIndustryByWage")
            dataWorkIndustry.forEach(item => item.value = item.valueA)

            // 平台求职能力图
            dataPlatformJob = await get("getuserRadar")
            dataPlatformJobVal = dataPlatformJob.map(item => item.value)

            // 地图数据
            dataMapProvince = await get("getuserMapByProvince")
        } catch (err) {
            console.log("request failed...", err)
        } finally {
            echarts_1();
            echarts_1right();
            echarts_2right();
            echarts_1left();
            echarts_2left();
            echarts_4left();
            echarts_5left();
            echarts3();
            echarts_312();
            echarts_item123();

            // echarts_3124();
            // map();
            initMap();
        }
    }
    initData()

    function echarts_3124() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb011'));
        var myChart2 = echarts.init(document.getElementById('fb022'));

        // dataGender

        let option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                orient: 'vertical',
                top: '25%',
                right: 0,
                itemWidth: 10,
                itemHeight: 10,
                data: ['20-29岁', '30-39岁', '40-49岁', '50岁以上'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '年龄分布',
                    type: 'pie',
                    center: ['35%', '50%'],
                    radius: ['40%', '50%'],
                    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [

                        { value: 4, name: '20-29岁' },
                        { value: 2, name: '30-39岁' },
                        { value: 2, name: '40-49岁' },
                        { value: 1, name: '50岁以上' },
                    ]
                }
            ]
        };
        option2 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                orient: 'vertical',
                top: '25%',
                right: '8%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['博士', '硕士', '本科', '专科'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '学历构成',
                    type: 'pie',
                    center: ['40%', '50%'],
                    radius: ['40%', '50%'],
                    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 10, name: '博士' },
                        { value: 20, name: '硕士' },
                        { value: 30, name: '本科' },
                        { value: 40, name: '专科' },

                    ]
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart2.setOption(option2);

        // myChart7.setOption(option7);
        window.addEventListener("resize", function () {
            myChart.resize();
            myChart2.resize();

        });
    }

    function echarts3() {
        var myChart1 = echarts.init(document.getElementById('charts3'));

        let option = {
            tooltip: {
                trigger: 'axis'
            },
            title: {
                // text: '2021/07',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            // legend: {
            //   data: ['求职意愿', '企业用工']
            // },
            legend: {
                data: [
                    { name: "求职意愿", textStyle: { color: "#fff" } },
                    { name: "企业用工", textStyle: { color: "#fff" } },
                ]
            },
            // legend: {
            //     show:true,
            //     data: [{
            //         name:"求职意愿"
            //     },{
            //         name:"企业用工"
            //     },]
            //     // '求职意愿', '企业用工'
            // },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: dataJobWanted.datetime,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255)",
                        fontSize: '12',
                    },
                },
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255)",
                        fontSize: '12',
                    },
                },
                splitLine: {
                    show: false
                }
            },
            series: [
                {
                    name: '求职意愿',
                    type: 'line',
                    stack: 'Total',
                    data: dataJobWanted.job,
                    itemStyle: {
                        normal: {
                            // color: '#fff',
                        }
                    },
                    smooth: true
                },
                {
                    name: '企业用工',
                    type: 'line',
                    stack: 'Total',
                    data: dataJobWanted.company,
                    itemStyle: {
                        normal: {
                            // color: '#fff',
                        }
                    },
                    smooth: true
                },
            ]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option);
        window.addEventListener("resize", function () {
            myChart1.resize();
        });
    }

    function echarts_item123() {
        document.getElementsByClassName("numm")[0].innerText = dataTotal.total

        var myChart1 = echarts.init(document.getElementById('item1'));
        var myChart2 = echarts.init(document.getElementById('item2'));
        var myChart3 = echarts.init(document.getElementById('item3'));
        var myChart4 = echarts.init(document.getElementById('item4'));

        let option = {
            tooltip: {
                trigger: 'item'
            },
            // legend: {
            //     top: '5%',
            //     left: 'center'
            // },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['60%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: true,
                        position: 'center',
                        // color:"#fff",
                        // normal:{
                        //     textStyle:{
                        //         color:"#fff"
                        //     }
                        // }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 60, },
                        { value: 40, },
                    ],
                    // itemStyle:{
                    //     color:"#fff"
                    // }
                }
            ]
        };

        let option1 = deepCopy(option)
        let option2 = deepCopy(option)
        let option3 = deepCopy(option)
        let option4 = deepCopy(option)

        const calc = (count) => (Math.floor(count / dataTotal.total * 100) + "%")

        let opts = new Map([
            [option1, { value: dataTotal.job, name: dataTotal.job, itemStyle: { color: "#FFFF00" } }],
            [option2, { value: dataTotal.company, name: dataTotal.company, itemStyle: { color: "#FF6600" } }],
            [option3, { value: dataTotal.work, name: dataTotal.work, itemStyle: { color: "#0099FF" } }],
            [option4, { value: dataTotal.personNumber, name: dataTotal.personNumber, itemStyle: { color: "#99FF00" } }]
        ]);

        opts.forEach((val, key) => key.series[0].data = [
            { value: opts.get(key).value, name: opts.get(key).name, itemStyle: opts.get(key).itemStyle },
            { value: dataTotal.total - opts.get(key).value, itemStyle: { color: "#99FFFF" } },
        ])

        // 使用刚指定的配置项和数据显示图表。
        myChart1.setOption(option1);
        myChart2.setOption(option2);
        myChart3.setOption(option3);
        myChart4.setOption(option4);

        window.addEventListener("resize", function () {
            myChart1.resize();
            myChart2.resize();
            myChart3.resize();
            myChart4.resize();
        });
    }
    function echarts_312() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb01'));
        var myChart2 = echarts.init(document.getElementById('fb02'));

        document.getElementById("gender-total").innerText = dataGender.total
        document.getElementById("gender-male").innerText = dataGender.male
        document.getElementById("gender-female").innerText = dataGender.female

        let option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                orient: 'vertical',
                top: '25%',
                right: "6%",
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '年龄分布',
                    type: 'pie',
                    center: ['30%', '50%'],
                    radius: ['40%', '50%'],
                    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: dataAge
                }
            ]
        };
        let option2 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                orient: 'vertical',
                top: '6%',
                right: '0%',
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '学历构成',
                    type: 'pie',
                    center: ['30%', '50%'],
                    radius: ['40%', '50%'],
                    color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: dataEducation
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart2.setOption(option2);
        window.addEventListener("resize", function () {
            myChart.resize();
            myChart2.resize();

        });
    }
    function echarts_4left() {
        var myChart = echarts.init(document.getElementById('chart4-left'));

        let maxValue = dataJobWantedHot.reduce((a, b) => a.value > b.value ? a : b, 0).value

        let option = {
            grid: {
                left: "0%",
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '0',
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: '14',
                    }
                },
                data: dataJobWantedHot.map(item => item.name)

            }, {
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#2f89cf',
                        fontSize: '14',
                    }
                },
                data: dataJobWantedHot.map(item => item.value)
            }, {
                nameGap: '50',
                nameTextStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: '16',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: dataJobWantedHot.map(item => item.value / maxValue * 100),
                itemStyle: {
                    normal: {
                        color: '#2f89cf'
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        barBorderRadius: 15,
                    }
                },
                z: 1
            }]
        };

        // let option = {
        //     dataset: {
        //         source: dataJobWantedHot
        //     },
        //     grid: { containLabel: true, left: 0 },
        //     xAxis: {
        //         name: 'amount',
        //         axisLabel: {
        //             show: false,
        //             textStyle: {
        //                 color: '#fff',  //更改坐标轴文字颜色
        //                 //    fontSize : 14      //更改坐标轴文字大小
        //             }
        //         },
        //         splitLine: {
        //             show: false
        //         },
        //         axisLine: {
        //             show: false
        //         },
        //         axisTick: {
        //             show: false
        //         }
        //     },
        //     yAxis: {
        //         type: 'category',
        //         axisLabel: {
        //             show: true,
        //             textStyle: {
        //                 color: '#fff',  //更改坐标轴文字颜色
        //                 //    fontSize : 14      //更改坐标轴文字大小
        //             }
        //         },
        //     },
        //     // visualMap: {
        //     //   orient: 'horizontal',
        //     //   left: 'center',
        //     //   min: 10,
        //     //   max: 100,
        //     //   text: ['High Score', 'Low Score'],
        //     //   // Map the score column to color
        //     //   dimension: 0,
        //     //   inRange: {
        //     //     color: ['#65B581', '#FFCE34', '#FD665F']
        //     //   }
        //     // },
        //     series: [
        //         {
        //             type: 'bar',
        //             encode: {
        //                 // Map the "amount" column to X axis.
        //                 x: 'amount',
        //                 // Map the "product" column to Y axis
        //                 y: 'product'
        //             },
        //             itemStyle: {
        //                 normal: {
        //                     color: '#2f89cf'
        //                 }
        //             },
        //             label: {
        //                 show: true,
        //                 position: "right"
        //             }
        //         }
        //     ]
        // };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

        // 泡泡
        document.getElementsByClassName("tagcloud4")[0].innerHTML = getProp(dataJobWantedHot.map(item => [item.value,item.name]).reverse().splice(0, 6))
        tagcloud({
            selector: ".tagcloud4",  //元素选择器
            fontsize: 6,       //基本字体大小, 单位px
            radius: 40,         //滚动半径, 单位px 页面宽度和高度的五分之一
            mspeed: "slow",   //滚动最大速度, 取值: slow, normal(默认), fast
            ispeed: "slow",   //滚动初速度, 取值: slow, normal(默认), fast
            direction: 0,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
            keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
        });

    }
    function echarts_2right() {
        var myChart = echarts.init(document.getElementById('chart2-right'));
        let option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: 'bottom',
                textStyle: {
                    color: "#fff"
                }
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                }
            },
            series: [
                {
                    labelLine: {
                        show: false
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    name: '行业',
                    type: 'pie',
                    radius: ["30%", "70%"],
                    center: ['45%', '35%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: dataWorkIndustry
                }
            ]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

        // 自动切换
        let currentIdx = 0
        let preIdx = -1
        const setV = () => {
            preIdx != -1 ? (myChart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: preIdx })) : null;
            myChart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: currentIdx })
            myChart.dispatchAction({ type: 'showTip', seriesIndex: 0, dataIndex: currentIdx })
            preIdx = currentIdx
            currentIdx < dataWorkIndustry.length - 1 ? currentIdx++ : (currentIdx = 0)
        }
        setV();
        setInterval(setV, 2000);
    }
    function echarts_1right() {
        var myChart = echarts.init(document.getElementById('chart1-right'));

        let option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: 'bottom',
                textStyle: {
                    color: "#fff"
                }
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                }
            },
            series: [
                {
                    labelLine: {
                        show: false
                    },
                    label: {
                        show: false,
                        position: 'center'
                    },
                    name: '省份',
                    type: 'pie',
                    radius: ["30%", "70%"],
                    center: ['45%', '35%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: dataProvinces
                }
            ]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

        // 自动切换
        let currentIdx = 0
        let preIdx = -1
        const setV = () => {
            preIdx != -1 ? (myChart.dispatchAction({ type: 'downplay', seriesIndex: 0, dataIndex: preIdx })) : null;
            myChart.dispatchAction({ type: 'highlight', seriesIndex: 0, dataIndex: currentIdx })
            myChart.dispatchAction({ type: 'showTip', seriesIndex: 0, dataIndex: currentIdx })
            preIdx = currentIdx
            currentIdx < dataWorkIndustry.length - 1 ? currentIdx++ : (currentIdx = 0)
        }
        setV();
        setInterval(setV, 2000);
        // let option = {
        //     legend: {
        //         top: 'bottom',
        //         textStyle: {
        //             color: "#fff"
        //         }
        //     },
        //     toolbox: {
        //         show: true,
        //         feature: {
        //             mark: { show: true },
        //         }
        //     },
        //     series: [
        //         {
        //             // bottom:"50%",
        //             name: 'Nightingale Chart',
        //             type: 'pie',
        //             radius: ["20%", "50%"],
        //             center: ['45%', '35%'],
        //             roseType: 'area',
        //             itemStyle: {
        //                 borderRadius: 8
        //             },
        //             data: dataProvinces
        //         }
        //     ]
        // }

        // // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
        // window.addEventListener("resize", function () {
        //     myChart.resize();
        // });

    }

    function echarts_1left() {
        var myChart = echarts.init(document.getElementById('chart1-left'));
        
        let maxValue = dataArea.reduce((a, b) => a.value > b.value ? a : b, 0).value

        let option = {
            grid: {
                left: "0%",
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '0',
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: '14',
                    }
                },
                data: dataArea.map(item => item.name)

            }, {
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#2f89cf',
                        fontSize: '14',
                    }
                },
                data: dataArea.map(item => item.value)
            }, {
                nameGap: '50',
                nameTextStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: '16',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: dataArea.map(item => item.value / maxValue * 100),
                itemStyle: {
                    normal: {
                        color: '#2f89cf'
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        barBorderRadius: 15,
                    }
                },
                z: 1
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }
    function echarts_5left() {
        var myChart = echarts.init(document.getElementById('chart5-left'));

        let maxValue = dataJobHot.reduce((a, b) => a.value > b.value ? a : b, 0).value

        let option = {
            grid: {
                left: "0%",
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '0',
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: '14',
                    }
                },
                data: dataJobHot.map(item => item.name)

            }, {
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#2f89cf',
                        fontSize: '14',
                    }
                },
                data: dataJobHot.map(item => item.value)
            }, {
                nameGap: '50',
                nameTextStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: '16',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: dataJobHot.map(item => item.value / maxValue * 100),
                itemStyle: {
                    normal: {
                        color: '#2f89cf'
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        barBorderRadius: 15,
                    }
                },
                z: 1
            }]
        };

        // let option = {
        //     dataset: {
        //         source: dataJobHot
        //     },
        //     grid: { containLabel: true, left: 0 },
        //     xAxis: {
        //         name: 'amount',
        //         axisLabel: {
        //             show: false,
        //             textStyle: {
        //                 color: '#fff',  //更改坐标轴文字颜色
        //                 //    fontSize : 14      //更改坐标轴文字大小
        //             }
        //         },
        //         splitLine: {
        //             show: false
        //         },
        //         axisLine: {
        //             show: false
        //         },
        //         axisTick: {
        //             show: false
        //         }
        //     },
        //     yAxis: {
        //         type: 'category',
        //         axisLabel: {
        //             show: true,
        //             textStyle: {
        //                 color: '#fff',  //更改坐标轴文字颜色
        //                 //    fontSize : 14      //更改坐标轴文字大小
        //             }
        //         },
        //     },
        //     // visualMap: {
        //     //   orient: 'horizontal',
        //     //   left: 'center',
        //     //   min: 10,
        //     //   max: 100,
        //     //   text: ['High Score', 'Low Score'],
        //     //   // Map the score column to color
        //     //   dimension: 0,
        //     //   inRange: {
        //     //     color: ['#65B581', '#FFCE34', '#FD665F']
        //     //   }
        //     // },
        //     series: [
        //         {
        //             type: 'bar',
        //             encode: {
        //                 // Map the "amount" column to X axis.
        //                 x: 'amount',
        //                 // Map the "product" column to Y axis
        //                 y: 'product'
        //             },
        //             itemStyle: {
        //                 normal: {
        //                     color: '#2f89cf'
        //                 }
        //             },
        //             label: {
        //                 show: true,
        //                 position: "right"
        //             }
        //         }
        //     ]
        // };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

        // 泡泡
        document.getElementsByClassName("tagcloud5")[0].innerHTML = getProp(dataJobHot.map(item => [item.value,item.name]).reverse().splice(0, 6))
        tagcloud({
            selector: ".tagcloud5",  //元素选择器
            fontsize: 6,       //基本字体大小, 单位px
            radius: 40,         //滚动半径, 单位px 页面宽度和高度的五分之一
            mspeed: "slow",   //滚动最大速度, 取值: slow, normal(默认), fast
            ispeed: "slow",   //滚动初速度, 取值: slow, normal(默认), fast
            direction: 0,     //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
            keep: false          //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
        });

    }
    function echarts_2left() {
        var myChart = echarts.init(document.getElementById('chart2-left'));

        let maxValue = dataJobSalary.reduce((a, b) => a.valueA > b.valueA ? a : b, 0).valueA

        let option = {
            grid: {
                left: "0%",
                containLabel: true
            },
            xAxis: [{
                show: false,
            }],
            yAxis: [{
                axisTick: 'none',
                axisLine: 'none',
                offset: '0',
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize: '14',
                    }
                },
                data: dataJobSalary.map(item => item.name)

            }, {
                axisTick: 'none',
                axisLine: 'none',
                axisLabel: {
                    textStyle: {
                        color: '#2f89cf',
                        fontSize: '14',
                    }
                },
                data: dataJobSalary.map(item => item.values)
            }, {
                nameGap: '50',
                nameTextStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: '16',
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0,0,0,0)'
                    }
                },
                data: [],
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: dataJobSalary.map(item => item.valueA / maxValue * 100),
                itemStyle: {
                    normal: {
                        color: '#2f89cf'
                    }
                },
                z: 2
            }, {
                name: '白框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5, 99.5],
                barWidth: 15,
                itemStyle: {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        barBorderRadius: 15,
                    }
                },
                z: 1
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    }
    function echarts_1() {
        var myChart = echarts.init(document.getElementById('echart1'));
        var styl = {
            areaStyle: {
                normal: {
                    opacity: 0.3,
                }
            }
        }

        document.getElementById("echart1-oul").innerHTML = dataPlatformJob.map(item => `<li><span>${item.name}</span><p>${item.value}</p></li>`).join("")

        let option = {
            color: ['#9DD060', '#35C96E', '#4DCEF8'],
            tooltip: {},
            radar: {
                center: ['50%', '50%'],
                radius: ["25%", "70%"],
                name: {
                    textStyle: {
                        color: '#72ACD1'
                    }
                },
                splitLine: {

                    lineStyle: {

                        color: 'rgba(255,255,255,.0',

                        width: 2

                    }

                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)',
                        width: 1,
                        type: 'dotted'

                    },

                },
                splitArea: {
                    areaStyle: {
                        color: ['rgba(255,255,255,.1)', 'rgba(255,255,255,0)']
                    }
                },
                indicator: dataPlatformJob
            },
            series: [{
                name: '',
                type: 'radar',
                data: [
                    { ...styl, value: dataPlatformJobVal, name: "平台求职能力" }
                ]
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [
                {

                    type: 'bar',
                    data: [1500, 1200, 600, 200, 300, 300, 900],
                    barWidth: '35%', //柱子宽度
                    // barGap: 1, //柱子之间间距
                    itemStyle: {
                        normal: {
                            color: '#27d08a',
                            opacity: 1,
                            barBorderRadius: 5,
                        }
                    }
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

        option = {
            //  backgroundColor: '#00265f',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['水南街道', '西市街道', '茅家岭街道', '灵溪街道', '东市街道', '北门街道', '沙溪镇', '朝阳镇', '秦峰乡'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },

                axisTick: {
                    show: false,
                },
                axisLabel: {
                    interval: 0,
                    // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '11',
                    },
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    //formatter: '{value} %'
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                    }
                }
            }],
            series: [{
                type: 'bar',
                data: [2, 3, 3, 9, 15, 12, 6, 4, 6, 7, 4, 10],
                barWidth: '35%', //柱子宽度
                // barGap: 1, //柱子之间间距
                itemStyle: {
                    normal: {
                        color: '#2f89cf',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                }
            }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#dddc6b'
                    }
                }
            },
            legend: {
                top: '0%',
                data: ['通过提案', '未通过提案'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            grid: {
                left: '10',
                top: '30',
                right: '10',
                bottom: '10',
                containLabel: true
            },

            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },

                data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12',]

            }, {

                axisPointer: { show: false },
                axisLine: { show: false },
                position: 'bottom',
                offset: 20,
            }],

            yAxis: [{
                type: 'value',
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12,
                    },
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [
                {
                    name: '通过提案',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#0184d5',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(1, 132, 213, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(1, 132, 213, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#0184d5',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4, 3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4]

                },
                {
                    name: '未通过提案',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    showSymbol: false,
                    lineStyle: {
                        normal: {
                            color: '#00d887',
                            width: 2
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0, 216, 135, 0.4)'
                            }, {
                                offset: 0.8,
                                color: 'rgba(0, 216, 135, 0.1)'
                            }], false),
                            shadowColor: 'rgba(0, 0, 0, 0.1)',
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00d887',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 12
                        }
                    },
                    data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]

                },

            ]

        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        var dataStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                //shadowBlur: 40,
                //shadowColor: 'rgba(40, 40, 40, 1)',
            }
        };
        var placeHolderStyle = {
            normal: {
                color: 'rgba(255,255,255,.05)',
                label: { show: false, },
                labelLine: { show: false }
            },
            emphasis: {
                color: 'rgba(0,0,0,0)'
            }
        };
        option = {
            color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
            tooltip: {
                show: true,
                formatter: "{a} : {c} "
            },
            legend: {
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 12,
                bottom: '3%',

                data: ['理论学习', '立法征询', '监督工作', '环境监督'],
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                }
            },

            series: [
                {
                    name: '理论学习',
                    type: 'pie',
                    clockWise: false,
                    center: ['50%', '42%'],
                    radius: ['59%', '70%'],
                    itemStyle: dataStyle,
                    hoverAnimation: false,
                    data: [{
                        value: 80,
                        name: '01'
                    }, {
                        value: 20,
                        name: 'invisible',
                        tooltip: { show: false },
                        itemStyle: placeHolderStyle
                    }]
                },
                {
                    name: '立法征询',
                    type: 'pie',
                    clockWise: false,
                    center: ['50%', '42%'],
                    radius: ['49%', '60%'],
                    itemStyle: dataStyle,
                    hoverAnimation: false,
                    data: [{
                        value: 70,
                        name: '02'
                    }, {
                        value: 30,
                        name: 'invisible',
                        tooltip: { show: false },
                        itemStyle: placeHolderStyle
                    }]
                },
                {
                    name: '监督工作',
                    type: 'pie',
                    clockWise: false,
                    hoverAnimation: false,
                    center: ['50%', '42%'],
                    radius: ['39%', '50%'],
                    itemStyle: dataStyle,
                    data: [{
                        value: 65,
                        name: '03'
                    }, {
                        value: 35,
                        name: 'invisible',
                        tooltip: { show: false },
                        itemStyle: placeHolderStyle
                    }]
                },
                {
                    name: '环境监督',
                    type: 'pie',
                    clockWise: false,
                    hoverAnimation: false,
                    center: ['50%', '42%'],
                    radius: ['29%', '40%'],
                    itemStyle: dataStyle,
                    data: [{
                        value: 60,
                        name: '04'
                    }, {
                        value: 40,
                        name: 'invisible',
                        tooltip: { show: false },
                        itemStyle: placeHolderStyle
                    }]
                },
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1'));
        option = {

            title: [{
                text: '年龄分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['0岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '年龄分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 1, name: '0岁以下' },
                        { value: 4, name: '20-29岁' },
                        { value: 2, name: '30-39岁' },
                        { value: 2, name: '40-49岁' },
                        { value: 1, name: '50岁以上' },
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
        option = {

            title: [{
                text: '职业分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {

                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['电子商务', '教育', 'IT/互联网', '金融', '学生', '其他'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '年龄分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 5, name: '电子商务' },
                        { value: 1, name: '教育' },
                        { value: 6, name: 'IT/互联网' },
                        { value: 2, name: '金融' },
                        { value: 1, name: '学生' },
                        { value: 1, name: '其他' },
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
        option = {
            title: [{
                text: '兴趣分布',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['汽车', '旅游', '财经', '教育', '软件', '其他'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12',
                }
            },
            series: [
                {
                    name: '兴趣分布',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: { show: false },
                    labelLine: { show: false },
                    data: [
                        { value: 2, name: '汽车' },
                        { value: 3, name: '旅游' },
                        { value: 1, name: '财经' },
                        { value: 4, name: '教育' },
                        { value: 8, name: '软件' },
                        { value: 1, name: '其他' },
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }


})


















