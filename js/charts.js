// 图表绘制函数

// 产业分布图表
function initIndustryChart() {
    const chartDom = document.getElementById('industryChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: '北京市重点产业分布',
            left: 'center',
            textStyle: {
                fontSize: 16,
                fontWeight: 600
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c}亿元 ({d}%)'
        },
        legend: {
            orient: 'vertical',
            right: 10,
            top: 'center',
            data: industryData.chains.map(item => item.name)
        },
        series: [
            {
                name: '产值',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 10,
                    borderColor: '#fff',
                    borderWidth: 2
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: industryData.chains.map(item => ({
                    value: item.output,
                    name: item.name
                }))
            }
        ],
        color: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe', '#00f2fe']
    };

    myChart.setOption(option);

    // 响应式
    window.addEventListener('resize', () => {
        myChart.resize();
    });

    return myChart;
}

// 增长趋势图表
function initGrowthChart() {
    const chartDom = document.getElementById('growthChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: '北京市数字产业发展趋势',
            left: 'center',
            textStyle: {
                fontSize: 16,
                fontWeight: 600
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['企业数量', '产值规模'],
            top: 30
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: enterpriseData.growthTrend.map(item => item.year + '年')
        },
        yAxis: [
            {
                type: 'value',
                name: '企业数量',
                position: 'left',
                axisLabel: {
                    formatter: '{value}家'
                }
            },
            {
                type: 'value',
                name: '产值规模',
                position: 'right',
                axisLabel: {
                    formatter: '{value}亿'
                }
            }
        ],
        series: [
            {
                name: '企业数量',
                type: 'line',
                data: enterpriseData.growthTrend.map(item => item.count),
                smooth: true,
                itemStyle: {
                    color: '#667eea'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(102, 126, 234, 0.3)' },
                        { offset: 1, color: 'rgba(102, 126, 234, 0.05)' }
                    ])
                }
            },
            {
                name: '产值规模',
                type: 'line',
                yAxisIndex: 1,
                data: enterpriseData.growthTrend.map(item => item.revenue),
                smooth: true,
                itemStyle: {
                    color: '#f5576c'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(245, 87, 108, 0.3)' },
                        { offset: 1, color: 'rgba(245, 87, 108, 0.05)' }
                    ])
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
        myChart.resize();
    });

    return myChart;
}

// 创新能力图表
function initInnovationChart() {
    const chartDom = document.getElementById('innovationChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: '北京市产业创新能力分析',
            left: 'center',
            textStyle: {
                fontSize: 16,
                fontWeight: 600
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['企业数量', '专利数量', '研发投入'],
            top: 30
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: industryData.chains.map(item => item.name)
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '企业数量',
                type: 'bar',
                data: industryData.chains.map(item => item.companies),
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#667eea' },
                        { offset: 1, color: '#764ba2' }
                    ])
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
        myChart.resize();
    });

    return myChart;
}

// 产业链图谱
function initChainChart(chainName) {
    const chain = industryData.chains.find(c => c.name === chainName);
    if (!chain) return;

    const chartDom = document.getElementById('chainChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    // 构建节点和关系
    const nodes = [];
    const links = [];

    // 上游节点
    chain.upstream.forEach((item, index) => {
        nodes.push({
            id: `up-${index}`,
            name: item,
            category: 0,
            symbolSize: 50
        });
        links.push({
            source: `up-${index}`,
            target: 'center'
        });
    });

    // 中心节点
    nodes.push({
        id: 'center',
        name: chain.name,
        category: 1,
        symbolSize: 80,
        itemStyle: {
            color: '#667eea'
        }
    });

    // 中游节点
    chain.midstream.forEach((item, index) => {
        nodes.push({
            id: `mid-${index}`,
            name: item,
            category: 1,
            symbolSize: 60
        });
        links.push({
            source: 'center',
            target: `mid-${index}`
        });
    });

    // 下游节点
    chain.downstream.forEach((item, index) => {
        nodes.push({
            id: `down-${index}`,
            name: item,
            category: 2,
            symbolSize: 50
        });
        // 连接到中游节点
        if (chain.midstream.length > 0) {
            links.push({
                source: `mid-0`,
                target: `down-${index}`
            });
        }
    });

    const option = {
        title: {
            text: chain.name + '产业链图谱',
            left: 'center',
            textStyle: {
                fontSize: 18,
                fontWeight: 600
            }
        },
        tooltip: {},
        legend: [{
            data: ['上游', '中游', '下游'],
            bottom: 10
        }],
        series: [{
            type: 'graph',
            layout: 'force',
            data: nodes,
            links: links,
            categories: [
                { name: '上游', itemStyle: { color: '#4facfe' } },
                { name: '中游', itemStyle: { color: '#667eea' } },
                { name: '下游', itemStyle: { color: '#f093fb' } }
            ],
            roam: true,
            label: {
                show: true,
                position: 'right',
                fontSize: 12
            },
            force: {
                repulsion: 200,
                edgeLength: 120
            },
            emphasis: {
                focus: 'adjacency',
                lineStyle: {
                    width: 3
                }
            }
        }]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
        myChart.resize();
    });

    return myChart;
}

// 企业画像雷达图
function initEnterpriseRadarChart(enterpriseId) {
    const chartDom = document.getElementById('enterpriseRadarChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: '企业综合评估',
            left: 'center'
        },
        tooltip: {},
        radar: {
            indicator: [
                { name: '营收能力', max: 5 },
                { name: '创新能力', max: 5 },
                { name: '成长能力', max: 5 },
                { name: '盈利能力', max: 5 },
                { name: '信用水平', max: 5 }
            ],
            radius: 120
        },
        series: [{
            name: '企业评估',
            type: 'radar',
            data: [
                {
                    value: [4.5, 4.8, 4.2, 4.3, 5.0],
                    name: '综合评分',
                    areaStyle: {
                        color: 'rgba(102, 126, 234, 0.3)'
                    },
                    lineStyle: {
                        color: '#667eea'
                    }
                }
            ]
        }]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
        myChart.resize();
    });

    return myChart;
}

// 政策匹配度图表
function initPolicyMatchChart() {
    const chartDom = document.getElementById('policyMatchChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: '政策适配度分析',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            max: 100
        },
        yAxis: {
            type: 'category',
            data: policyData.list.slice(0, 5).map(p => p.title.substring(0, 15) + '...')
        },
        series: [
            {
                name: '匹配度',
                type: 'bar',
                data: [95, 88, 82, 75, 68],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        { offset: 0, color: '#667eea' },
                        { offset: 1, color: '#764ba2' }
                    ])
                },
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{c}%'
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
        myChart.resize();
    });

    return myChart;
}

// 招商漏斗图
function initInvestmentFunnelChart() {
    const chartDom = document.getElementById('investmentFunnelChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: '招商项目转化漏斗',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}个'
        },
        series: [
            {
                name: '招商漏斗',
                type: 'funnel',
                left: '10%',
                width: '80%',
                label: {
                    formatter: '{b}: {c}个'
                },
                labelLine: {
                    show: true
                },
                itemStyle: {
                    borderColor: '#fff',
                    borderWidth: 2
                },
                data: [
                    { value: 568, name: '招商线索' },
                    { value: 368, name: '初步接触' },
                    { value: 186, name: '正式谈判' },
                    { value: 125, name: '签约立项' },
                    { value: 57, name: '成功落地' }
                ]
            }
        ],
        color: ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe']
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
        myChart.resize();
    });

    return myChart;
}

// 服务效果统计图
function initServiceStatsChart() {
    const chartDom = document.getElementById('serviceStatsChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: '招后服务效果统计',
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['金融服务', '人才服务', '产业对接'],
            top: 30
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '金融服务',
                type: 'bar',
                stack: 'total',
                data: [520, 580, 640, 720, 680, 760],
                itemStyle: { color: '#667eea' }
            },
            {
                name: '人才服务',
                type: 'bar',
                stack: 'total',
                data: [320, 380, 360, 420, 440, 480],
                itemStyle: { color: '#f093fb' }
            },
            {
                name: '产业对接',
                type: 'bar',
                stack: 'total',
                data: [280, 300, 320, 340, 360, 380],
                itemStyle: { color: '#4facfe' }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
        myChart.resize();
    });

    return myChart;
}

// 北京市地图
function initBeijingMap() {
    const chartDom = document.getElementById('beijingMap');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    // 简化版地图数据
    const mapData = [
        { name: '海淀区', value: 4567 },
        { name: '朝阳区', value: 3821 },
        { name: '东城区', value: 1234 },
        { name: '西城区', value: 1456 },
        { name: '丰台区', value: 987 },
        { name: '石景山区', value: 567 },
        { name: '大兴区', value: 1456 },
        { name: '昌平区', value: 1234 },
        { name: '顺义区', value: 867 },
        { name: '通州区', value: 756 },
        { name: '房山区', value: 456 },
        { name: '门头沟区', value: 234 }
    ];

    const option = {
        title: {
            text: '北京市各区企业分布',
            left: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>企业数量: {c}家'
        },
        visualMap: {
            min: 0,
            max: 5000,
            text: ['高', '低'],
            realtime: false,
            calculable: true,
            inRange: {
                color: ['#e0f3ff', '#667eea']
            },
            bottom: 20
        },
        series: [
            {
                name: '企业数量',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: mapData.map(item => ({
                    name: item.name,
                    value: [
                        116.4 + Math.random() * 0.6 - 0.3,
                        39.9 + Math.random() * 0.4 - 0.2,
                        item.value
                    ]
                })),
                symbolSize: function (val) {
                    return Math.max(val[2] / 50, 10);
                },
                itemStyle: {
                    color: '#667eea',
                    shadowBlur: 10,
                    shadowColor: 'rgba(102, 126, 234, 0.5)'
                },
                emphasis: {
                    label: {
                        show: true,
                        formatter: '{b}',
                        position: 'top'
                    }
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
        myChart.resize();
    });

    return myChart;
}
// 数据流通图表
function initDataflowChart() {
    const chartDom = document.getElementById('dataflowChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    const option = {
        title: {
            text: '数据要素流通态势',
            left: 'center',
            textStyle: {
                fontSize: 16,
                fontWeight: 600,
                color: '#2d3748'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        legend: {
            data: ['数据交易量', '交易额', '活跃企业数'],
            top: 40
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: [
            {
                type: 'value',
                name: '数据量(TB)',
                position: 'left',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#0238C1'
                    }
                }
            },
            {
                type: 'value',
                name: '交易额(亿元)',
                position: 'right',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#FF7A25'
                    }
                }
            }
        ],
        series: [
            {
                name: '数据交易量',
                type: 'line',
                data: [3.2, 3.8, 4.2, 4.5, 5.1, 5.5, 6.2, 6.8, 7.5, 8.2, 8.9, 9.5],
                smooth: true,
                itemStyle: {
                    color: '#0238C1'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(2, 56, 193, 0.3)' },
                        { offset: 1, color: 'rgba(2, 56, 193, 0.05)' }
                    ])
                }
            },
            {
                name: '交易额',
                type: 'line',
                yAxisIndex: 1,
                data: [0.8, 1.2, 1.5, 1.8, 2.1, 2.4, 2.8, 3.2, 3.6, 4.2, 4.8, 5.5],
                smooth: true,
                itemStyle: {
                    color: '#FF7A25'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(255, 122, 37, 0.3)' },
                        { offset: 1, color: 'rgba(255, 122, 37, 0.05)' }
                    ])
                }
            },
            {
                name: '活跃企业数',
                type: 'bar',
                data: [456, 523, 612, 734, 856, 945, 1034, 1156, 1245, 1342, 1456, 1587],
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#43e97b' },
                        { offset: 1, color: '#38f9d7' }
                    ])
                }
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('resize', () => {
        myChart.resize();
    });

    return myChart;
}
