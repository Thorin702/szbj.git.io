// 数字产业图谱可视化
function initIndustryGraphChart() {
    const chartDom = document.getElementById('industryGraphChart');
    if (!chartDom) return;

    const myChart = echarts.init(chartDom);

    // 构建节点数据
    const nodes = industryData.chains.map(chain => ({
        id: chain.id.toString(),
        name: chain.name,
        symbolSize: Math.sqrt(chain.companies) / 2 + 30, // 根据企业数量调整节点大小
        value: chain.output,
        category: chain.category,
        itemStyle: {
            color: chain.category === '核心数字产业' ? '#0238C1' :
                   chain.category === '融合数字产业' ? '#FF7A25' : '#43e97b'
        },
        label: {
            show: true,
            fontSize: 12,
            fontWeight: 'bold'
        },
        tooltip: {
            formatter: params => {
                const data = industryData.chains.find(c => c.id.toString() === params.data.id);
                return `
                    <strong>${data.icon} ${data.name}</strong><br/>
                    分类：${data.category}<br/>
                    企业数：${data.companies}家<br/>
                    产值：${data.output}亿元<br/>
                    增长率：${data.growth}%<br/>
                    完整度：${data.completeness}%<br/>
                    代表企业：${data.keyCompanies.slice(0, 3).join('、')}
                `;
            }
        }
    }));

    // 构建边数据（产业关联关系）
    const links = [];
    industryData.chains.forEach(chain => {
        if (chain.relatedIndustries) {
            chain.relatedIndustries.forEach(relatedId => {
                // 避免重复边
                if (!links.some(l =>
                    (l.source === chain.id.toString() && l.target === relatedId.toString()) ||
                    (l.source === relatedId.toString() && l.target === chain.id.toString())
                )) {
                    links.push({
                        source: chain.id.toString(),
                        target: relatedId.toString(),
                        lineStyle: {
                            color: '#e0e0e0',
                            width: 1.5,
                            curveness: 0.2
                        }
                    });
                }
            });
        }
    });

    // 分类数据
    const categories = [
        { name: '核心数字产业', itemStyle: { color: '#0238C1' } },
        { name: '融合数字产业', itemStyle: { color: '#FF7A25' } },
        { name: '新兴数字产业', itemStyle: { color: '#43e97b' } }
    ];

    const option = {
        title: {
            text: '北京市数字产业生态图谱',
            left: 'center',
            top: 10,
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold',
                color: '#2d3748'
            }
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#e2e8f0',
            borderWidth: 1,
            textStyle: {
                color: '#2d3748'
            }
        },
        legend: [{
            data: categories.map(c => c.name),
            orient: 'vertical',
            left: 10,
            top: 50,
            itemGap: 15,
            textStyle: {
                fontSize: 12,
                color: '#2d3748'
            }
        }],
        series: [{
            type: 'graph',
            layout: 'force',
            data: nodes,
            links: links,
            categories: categories,
            roam: true, // 允许缩放和拖拽
            draggable: true,
            focusNodeAdjacency: true, // 高亮相邻节点
            force: {
                repulsion: 800, // 节点间斥力
                gravity: 0.1, // 中心引力
                edgeLength: [100, 200], // 边的长度
                layoutAnimation: true
            },
            label: {
                show: true,
                position: 'bottom',
                formatter: '{b}',
                fontSize: 11,
                color: '#2d3748'
            },
            lineStyle: {
                color: 'source',
                curveness: 0.2,
                opacity: 0.6
            },
            emphasis: {
                focus: 'adjacency',
                label: {
                    fontSize: 14,
                    fontWeight: 'bold'
                },
                lineStyle: {
                    width: 3,
                    opacity: 1
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
