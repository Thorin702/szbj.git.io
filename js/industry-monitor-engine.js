// 产业链AI动态监测引擎 - DeepSeek集成

/**
 * 调用DeepSeek API分析产业趋势
 */
async function analyzeIndustryTrend(industryData, timeRange = '30天') {
    const prompt = `
请分析以下数字经济细分领域的发展趋势：

领域名称：${industryData.name}
企业数量：${industryData.enterprises}家
当前增速：${industryData.growth.current}%
上月增速：${industryData.growth.lastMonth}%

请从以下维度进行分析：
1. 增长态势（加速/稳定/放缓）
2. 主要驱动因素（政策/技术/市场）
3. 未来3-6个月趋势预测
4. 关键风险点
5. 招商建议

请用JSON格式返回，包含：trend, drivers, prediction, risks, recommendation 字段。
`;

    try {
        const aiResponse = await callDeepSeekAPI(prompt, { industry: industryData });
        const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
    } catch (e) {
        console.warn('AI趋势分析失败，使用默认值');
    }

    // 默认分析结果
    return {
        trend: industryData.growth.current > industryData.growth.lastMonth ? '加速增长' : '稳定增长',
        drivers: ['政策支持', '市场需求', '技术进步'],
        prediction: '未来3-6个月将保持较快增长',
        risks: ['市场竞争加剧', '人才短缺'],
        recommendation: '建议重点关注该领域的头部企业'
    };
}

/**
 * AI识别产业链断点
 */
async function identifyChainBreakpoints(industryId) {
    const field = digitalEconomyFields.find(f => f.id === industryId);
    if (!field) return null;

    const prompt = `
作为产业分析专家，请分析"${field.name}"产业链，识别以下内容：

1. 产业链断点：缺失或薄弱的环节
2. 优势领域：具备竞争力的环节
3. 补链建议：如何弥补断点
4. 强链建议：如何巩固优势

已知信息：
- 知识图谱节点：${field.knowledgeGraph.nodes.join('、')}
- 企业数量：${field.enterprises}家
- 增长速度：${field.growth.current}%

请用JSON格式返回，包含：breakpoints(数组), strengths(数组),補chainSuggestions(数组), strengthenSuggestions(数组)。
`;

    try {
        const aiResponse = await callDeepSeekAPI(prompt, { field });
        const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
    } catch (e) {
        console.warn('断点识别失败');
    }

    // 返回已有数据
    return chainAnalysis[industryId] || null;
}

/**
 * AI生成行业简报
 */
async function generateDailyBrief() {
    const prompt = `
作为产业分析师，请为数字经济领域生成今日简报：

重点关注领域：数据要素、AI平台、数据安全、大数据分析

请生成今日（${new Date().toLocaleDateString('zh-CN')}）的行业简报，包括：
1. 市场热点（3-5条）
2. 重要动态（融资、政策、技术突破等）
3. AI洞察（2-3条前瞻性判断）
4. 关注建议

请用简洁专业的语言，每条不超过100字。
`;

    try {
        const aiResponse = await callDeepSeekAPI(prompt);
        return aiResponse;
    } catch (e) {
        console.warn('简报生成失败');
    }

    return automatedReports.daily;
}

/**
 * AI分析行业景气度
 */
async function analyzeProsperity(industryId) {
    const prosperity = industryProsperityData[industryId];
    if (!prosperity) return null;

    const prompt = `
请分析以下行业景气度数据：

招聘数据：
- 职位总数：${prosperity.recruitment.total}
- 增速：${prosperity.recruitment.growth}%
- 热门职位：${prosperity.recruitment.hotPositions.join('、')}
- 平均薪资：${prosperity.recruitment.avgSalary}

融资数据：
- 事件数：${prosperity.financing.events}起
- 总额：${prosperity.financing.amount}
- 热门轮次：${prosperity.financing.hotRounds.join('、')}

政策数据：
- 政策数量：${prosperity.policy.count}项
- 密度：${prosperity.policy.density}

舆情数据：
- 正面占比：${prosperity.sentiment.positive}%
- 热门话题：${prosperity.sentiment.hotTopics.join('、')}

请综合评估行业景气度（0-10分），并给出判断理由。

返回JSON格式：{score: 数字, level: "高/中高/中/低", analysis: "分析文本"}
`;

    try {
        const aiResponse = await callDeepSeekAPI(prompt, { prosperity });
        const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
    } catch (e) {
        console.warn('景气度分析失败');
    }

    // 默认评分
    const avgScore = (
        (prosperity.recruitment.growth / 10) +
        (prosperity.financing.events / 5) +
        (prosperity.sentiment.score)
    ) / 3;

    return {
        score: avgScore.toFixed(1),
        level: avgScore >= 8 ? '高' : avgScore >= 6 ? '中高' : '中',
        analysis: '基于多维度指标综合评估'
    };
}

/**
 * 计算行业综合评分
 */
function calculateIndustryScore(industryId) {
    const prosperity = industryProsperityData[industryId];
    if (!prosperity) return 0;

    // 招聘热度 (25%)
    const recruitmentScore = Math.min(prosperity.recruitment.growth / 10, 10) * 0.25;

    // 融资活跃度 (25%)
    const financingScore = Math.min(prosperity.financing.events / 5, 10) * 0.25;

    // 舆情热度 (20%)
    const sentimentScore = prosperity.sentiment.score * 0.20;

    // 政策支持度 (30%)
    const policyScore = (prosperity.policy.density === 'very-high' ? 10 :
                        prosperity.policy.density === 'high' ? 8.5 :
                        prosperity.policy.density === 'medium' ? 6 : 4) * 0.30;

    return (recruitmentScore + financingScore + sentimentScore + policyScore).toFixed(1);
}

/**
 * 监测企业增速变化
 */
function monitorEnterpriseGrowth(industryData, historicalData = []) {
    const currentGrowth = industryData.growth.current;
    const lastGrowth = industryData.growth.lastMonth;
    const change = currentGrowth - lastGrowth;
    const changeRate = ((change / lastGrowth) * 100).toFixed(1);

    let status, alert, recommendation;

    if (change > 10) {
        status = 'rapid-acceleration';
        alert = 'high';
        recommendation = '行业进入快速增长期，强烈建议加大招商投入';
    } else if (change > 5) {
        status = 'acceleration';
        alert = 'medium';
        recommendation = '增长加速，建议关注优质企业';
    } else if (change > -5) {
        status = 'stable';
        alert = 'low';
        recommendation = '增速平稳，保持现有招商力度';
    } else if (change > -10) {
        status = 'deceleration';
        alert = 'medium';
        recommendation = '增速放缓，需分析原因';
    } else {
        status = 'rapid-deceleration';
        alert = 'high';
        recommendation = '增速大幅下降，需重新评估行业吸引力';
    }

    return {
        current: currentGrowth,
        previous: lastGrowth,
        change: change,
        changeRate: changeRate,
        status: status,
        alert: alert,
        recommendation: recommendation,
        trend: change > 0 ? 'up' : change < 0 ? 'down' : 'stable'
    };
}

/**
 * 识别机会点
 */
async function identifyOpportunities() {
    // 基于现有数据和AI分析识别机会
    const opportunities = [...opportunitySpots];

    // 可以调用AI进行更深入的分析
    for (let opp of opportunities) {
        const prompt = `
请评估以下投资机会的可行性：

机会：${opp.title}
行业：${opp.industry}
置信度：${(opp.confidence * 100).toFixed(0)}%
时间窗口：${opp.timeWindow}

描述：${opp.description}

请分析：
1. 机会的真实性和可持续性
2. 主要风险因素
3. 最佳进入时机
4. 预期收益

返回JSON：{feasibility: "高/中/低", mainRisks: [], bestTiming: "", expectedReturn: ""}
`;

        try {
            const aiResponse = await callDeepSeekAPI(prompt, { opportunity: opp });
            const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                opp.aiEvaluation = JSON.parse(jsonMatch[0]);
            }
        } catch (e) {
            opp.aiEvaluation = { feasibility: '中', mainRisks: [], bestTiming: '当前', expectedReturn: '待评估' };
        }
    }

    return opportunities;
}

/**
 * 识别风险点
 */
async function identifyRisks() {
    const risks = [...riskSpots];

    // AI增强风险分析
    for (let risk of risks) {
        const prompt = `
请评估以下风险的严重程度和应对策略：

风险：${risk.title}
行业：${risk.industry}
严重度：${risk.severity}
概率：${(risk.probability * 100).toFixed(0)}%
影响：${risk.impact}

当前指标：
${risk.indicators.join('\n')}

请给出：
1. 风险发生的可能时间点
2. 最坏情况下的影响范围
3. 优先级排序（紧急/重要/一般）
4. 建议的应对时间窗口

返回JSON格式。
`;

        try {
            const aiResponse = await callDeepSeekAPI(prompt, { risk });
            const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                risk.aiAssessment = JSON.parse(jsonMatch[0]);
            }
        } catch (e) {
            risk.aiAssessment = {
                possibleTiming: '未来3-6个月',
                worstImpact: '中度影响',
                priority: '重要',
                responseWindow: '1-2个月内'
            };
        }
    }

    return risks;
}

/**
 * 生成周报
 */
async function generateWeeklyReport() {
    const prompt = `
作为产业分析专家，请生成本周（2024年第50周）数字经济领域周报：

涵盖领域：数据要素、AI平台、大数据分析、数据安全、云计算

请包含以下内容：
1. 本周综述（100字）
2. 行业热度排名（TOP5）
3. 热点话题分析（3个）
4. 趋势预测（2-3个）
5. AI洞察建议（3条）

请用专业、简洁的语言撰写，适合决策者阅读。
`;

    try {
        const aiResponse = await callDeepSeekAPI(prompt);
        return aiResponse;
    } catch (e) {
        console.warn('周报生成失败');
    }

    return automatedReports.weekly;
}

/**
 * 实时监测Web数据（模拟）
 */
async function monitorWebData(keywords, timeRange = '24h') {
    // 模拟Web爬虫监测
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                totalItems: 1247,
                news: 456,
                financing: 23,
                patents: 89,
                policies: 12,
                socialMedia: 667,
                keywords: keywords,
                timeRange: timeRange,
                lastUpdate: new Date().toISOString()
            });
        }, 1500);
    });
}

/**
 * 构建知识图谱可视化数据
 */
function buildKnowledgeGraphData(industryId) {
    const field = digitalEconomyFields.find(f => f.id === industryId);
    if (!field) return null;

    const nodes = field.knowledgeGraph.nodes.map((node, index) => ({
        id: `node_${index}`,
        name: node,
        value: Math.random() * 100 + 50,
        category: field.name,
        symbolSize: Math.random() * 30 + 20
    }));

    const links = field.knowledgeGraph.relationships.map(rel => ({
        source: `node_${field.knowledgeGraph.nodes.indexOf(rel.from)}`,
        target: `node_${field.knowledgeGraph.nodes.indexOf(rel.to)}`,
        value: rel.type,
        lineStyle: {
            color: field.color,
            width: 2
        }
    }));

    return {
        nodes: nodes,
        links: links,
        categories: [{ name: field.name }]
    };
}

/**
 * 获取政策密度热力图数据
 */
function getPolicyHeatmapData() {
    const data = [];
    digitalEconomyFields.forEach((field, i) => {
        const prosperity = industryProsperityData[field.id];
        if (prosperity) {
            data.push({
                name: field.name,
                value: prosperity.policy.count,
                density: prosperity.policy.density,
                impact: prosperity.policy.impact
            });
        }
    });
    return data.sort((a, b) => b.value - a.value);
}

/**
 * 预测未来趋势
 */
async function predictFutureTrend(industryId, months = 6) {
    const field = digitalEconomyFields.find(f => f.id === industryId);
    if (!field) return null;

    const prompt = `
基于以下数据，预测"${field.name}"未来${months}个月的发展趋势：

当前企业数：${field.enterprises}家
当前增速：${field.growth.current}%
上月增速：${field.growth.lastMonth}%

请预测：
1. 未来${months}个月的增速变化曲线（给出每月预测值）
2. 可能的转折点
3. 影响因素
4. 置信区间

返回JSON格式：{monthlyGrowth: [数组], turningPoints: [], factors: [], confidence: "高/中/低"}
`;

    try {
        const aiResponse = await callDeepSeekAPI(prompt, { field, months });
        const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
    } catch (e) {
        console.warn('趋势预测失败');
    }

    // 简单的线性预测
    const monthlyGrowth = [];
    let currentGrowth = field.growth.current;
    const trend = field.growth.current - field.growth.lastMonth;

    for (let i = 0; i < months; i++) {
        currentGrowth = currentGrowth + trend * 0.5; // 趋势衰减
        monthlyGrowth.push(parseFloat(currentGrowth.toFixed(1)));
    }

    return {
        monthlyGrowth: monthlyGrowth,
        turningPoints: [],
        factors: ['市场需求', '政策环境', '技术进步'],
        confidence: '中'
    };
}
