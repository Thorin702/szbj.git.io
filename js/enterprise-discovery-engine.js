// 企业自动识别引擎 - DeepSeek AI集成

/**
 * 调用DeepSeek API进行企业信息分析
 * @param {string} prompt - 分析提示词
 * @param {object} context - 上下文信息
 * @returns {Promise<string>} AI分析结果
 */
async function callDeepSeekAPI(prompt, context = {}) {
    try {
        const response = await fetch(deepseekConfig.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${deepseekConfig.apiKey}`
            },
            body: JSON.stringify({
                model: deepseekConfig.model,
                messages: [
                    {
                        role: 'system',
                        content: '你是一个专业的产业招商分析专家，擅长从公开信息中识别成长性数字产业企业，并判断企业的扩张信号。请用简洁专业的语言回答。'
                    },
                    {
                        role: 'user',
                        content: prompt
                    }
                ],
                temperature: 0.7,
                max_tokens: 2000
            })
        });

        if (!response.ok) {
            throw new Error(`API请求失败: ${response.status}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('DeepSeek API调用失败:', error);
        // 返回模拟数据作为降级方案
        return generateMockAIAnalysis(context);
    }
}

/**
 * 模拟AI分析（当API调用失败时使用）
 */
function generateMockAIAnalysis(context) {
    const templates = [
        '该企业处于快速成长期，技术实力较强，与园区产业方向高度契合，建议优先接触。',
        '企业具备较好的成长潜力，正在寻求业务扩张，有较强的区域布局意向。',
        '该企业在细分领域有一定优势，成长性良好，可持续关注其发展动态。',
        '企业融资进展顺利，团队实力雄厚，正处于业务扩张关键期，建议主动对接。'
    ];
    return templates[Math.floor(Math.random() * templates.length)];
}

/**
 * AI分析企业成长性
 * @param {object} enterprise - 企业信息
 * @returns {Promise<object>} 分析结果
 */
async function analyzeEnterpriseGrowth(enterprise) {
    const prompt = `
请分析以下企业的成长性和投资价值：

企业名称：${enterprise.companyName}
所属行业：${enterprise.industry}
注册资本：${enterprise.registeredCapital}
成立时间：${enterprise.foundDate}
所在地区：${enterprise.location}

最新动态：${enterprise.discoverySource.title}
${enterprise.discoverySource.summary}

请从以下维度评估：
1. 成长潜力（高/中高/中/低）
2. 产业契合度（与北京数字产业的契合情况）
3. 招商建议（是否值得主动接触）
4. 优先级（高/中/低）

请用简洁的JSON格式回复，包含growthPotential, industryFit, recommendation, priority四个字段。
`;

    const aiResponse = await callDeepSeekAPI(prompt, enterprise);

    try {
        // 尝试解析JSON
        const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
    } catch (e) {
        console.warn('AI返回结果解析失败，使用默认值');
    }

    // 如果解析失败，返回默认分析
    return {
        growthPotential: '中高',
        industryFit: '该企业与北京数字产业发展方向基本契合',
        recommendation: '建议持续关注该企业的发展动态',
        priority: '中'
    };
}

/**
 * AI识别企业扩张信号
 * @param {string} newsContent - 新闻内容
 * @param {string} companyName - 企业名称
 * @returns {Promise<Array>} 识别出的信号列表
 */
async function identifyExpansionSignals(newsContent, companyName) {
    const prompt = `
请分析以下关于"${companyName}"的新闻内容，识别企业是否有以下扩张信号：

1. 迁址意向：企业计划搬迁总部或主要办公地点
2. 扩产计划：企业计划扩大生产规模、建设新工厂
3. 开设分部：企业计划在新地区开设分公司、研发中心等

新闻内容：
${newsContent}

请以JSON数组格式返回识别结果，每个信号包含：
- type: 信号类型（relocation/expansion/newBranch）
- confidence: 置信度（0-1）
- evidence: 证据文本
- date: 相关日期

如果没有识别到相关信号，返回空数组[]。
`;

    const aiResponse = await callDeepSeekAPI(prompt, { newsContent, companyName });

    try {
        const jsonMatch = aiResponse.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
    } catch (e) {
        console.warn('信号识别结果解析失败');
    }

    return [];
}

/**
 * AI分析新闻内容，识别成长性企业
 * @param {string} newsContent - 新闻内容
 * @returns {Promise<object>} 企业信息
 */
async function extractEnterpriseFromNews(newsContent) {
    const prompt = `
请从以下新闻内容中提取企业信息，判断是否是值得关注的成长性数字产业企业：

${newsContent}

如果是值得关注的企业，请以JSON格式返回：
{
    "companyName": "企业名称",
    "industry": "所属行业",
    "isGrowthEnterprise": true/false,
    "reason": "判断理由",
    "highlights": ["亮点1", "亮点2", "亮点3"]
}

判断标准：
- 属于数字产业（AI、芯片、生物医药、新能源、工业互联网、数字经济等）
- 有明显的成长性（融资、专利、业务增长等）
- 有一定的规模和实力
`;

    const aiResponse = await callDeepSeekAPI(prompt, { newsContent });

    try {
        const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
    } catch (e) {
        console.warn('企业信息提取失败');
    }

    return null;
}

/**
 * 筛选企业列表
 * @param {Array} enterprises - 企业列表
 * @param {object} filters - 筛选条件
 * @returns {Array} 筛选后的企业列表
 */
function filterEnterprises(enterprises, filters) {
    let result = [...enterprises];

    // 时间范围筛选
    if (filters.timeRange && filters.timeRange !== 'all') {
        const now = new Date();
        let startDate;

        switch (filters.timeRange) {
            case 'week':
                startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                break;
            case 'month':
                startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                break;
            case 'quarter':
                startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
                break;
            case 'half-year':
                startDate = new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000);
                break;
            case 'year':
                startDate = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
                break;
        }

        if (startDate) {
            result = result.filter(ent => {
                const entDate = new Date(ent.discoverySource.date);
                return entDate >= startDate;
            });
        }
    }

    // 产业筛选
    if (filters.industry && filters.industry !== 'all') {
        result = result.filter(ent => {
            const industryMap = {
                'ai': '人工智能',
                'ic': '集成电路',
                'bio': '生物医药',
                'newenergy': '新能源',
                'iiot': '工业互联网',
                'digital': '数字经济'
            };
            return ent.industry.includes(industryMap[filters.industry]);
        });
    }

    // 信号类型筛选
    if (filters.signalType && filters.signalType !== 'all') {
        result = result.filter(ent => {
            return ent.signals.some(signal => signal.type === filters.signalType);
        });
    }

    // 优先级筛选
    if (filters.priority && filters.priority !== 'all') {
        const priorityMap = {
            'high': '高',
            'medium': '中',
            'low': '低'
        };
        result = result.filter(ent => {
            return ent.aiAnalysis.priority === priorityMap[filters.priority];
        });
    }

    // 关键词搜索
    if (filters.keyword) {
        const keyword = filters.keyword.toLowerCase();
        result = result.filter(ent => {
            return ent.companyName.toLowerCase().includes(keyword) ||
                   ent.industry.toLowerCase().includes(keyword) ||
                   ent.discoverySource.title.toLowerCase().includes(keyword);
        });
    }

    return result;
}

/**
 * 计算信号综合评分
 * @param {Array} signals - 信号列表
 * @returns {number} 评分（0-10）
 */
function calculateSignalScore(signals) {
    if (!signals || signals.length === 0) return 0;

    let totalScore = 0;
    signals.forEach(signal => {
        const signalConfig = potentialSignals[signal.type];
        if (signalConfig) {
            totalScore += signal.confidence * signalConfig.weight * 10;
        }
    });

    return Math.min(totalScore, 10).toFixed(1);
}

/**
 * 获取信号强度等级
 * @param {number} score - 信号评分
 * @returns {object} 等级信息
 */
function getSignalGrade(score) {
    if (score >= 8.0) {
        return { level: '强', color: '#059669', label: '强烈信号' };
    } else if (score >= 6.0) {
        return { level: '中', color: '#f59e0b', label: '中等信号' };
    } else if (score >= 4.0) {
        return { level: '弱', color: '#718096', label: '弱信号' };
    } else {
        return { level: '无', color: '#cbd5e0', label: '无明显信号' };
    }
}

/**
 * 模拟后台自动搜寻任务
 * @param {object} searchConfig - 搜索配置
 * @returns {Promise<object>} 搜索结果统计
 */
async function runAutoDiscoveryTask(searchConfig) {
    // 模拟后台搜寻过程
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                taskId: 'task_' + Date.now(),
                status: 'completed',
                startTime: new Date().toISOString(),
                endTime: new Date(Date.now() + 300000).toISOString(),
                results: {
                    totalScanned: 15847,
                    growthEnterprises: 156,
                    withSignals: 89,
                    highPriority: 23
                }
            });
        }, 2000);
    });
}

/**
 * 生成企业详细分析报告
 * @param {object} enterprise - 企业信息
 * @returns {object} 分析报告
 */
async function generateEnterpriseDiscoveryReport(enterprise) {
    const signalScore = calculateSignalScore(enterprise.signals);
    const signalGrade = getSignalGrade(signalScore);

    // 调用AI进行深度分析
    const aiAnalysis = await analyzeEnterpriseGrowth(enterprise);

    return {
        reportId: `EDR_${enterprise.id}_${Date.now()}`,
        generateTime: new Date().toLocaleString('zh-CN'),

        // 企业基本信息
        basicInfo: {
            companyName: enterprise.companyName,
            industry: enterprise.industry,
            location: enterprise.location,
            foundDate: enterprise.foundDate,
            registeredCapital: enterprise.registeredCapital
        },

        // 发现来源
        discoverySource: enterprise.discoverySource,

        // 扩张信号分析
        signalAnalysis: {
            score: signalScore,
            grade: signalGrade,
            signals: enterprise.signals.map(signal => ({
                ...signal,
                config: potentialSignals[signal.type]
            }))
        },

        // AI综合分析
        aiAnalysis: {
            ...enterprise.aiAnalysis,
            detailedAnalysis: aiAnalysis
        },

        // 企业亮点
        highlights: enterprise.highlights,

        // 行动建议
        actionPlan: generateActionPlan(enterprise, signalScore)
    };
}

/**
 * 生成行动建议
 */
function generateActionPlan(enterprise, signalScore) {
    const actions = [];

    if (signalScore >= 8.0) {
        actions.push({
            priority: 1,
            action: '立即组织招商团队主动对接',
            timeline: '3天内',
            responsible: '招商部门负责人'
        });
        actions.push({
            priority: 2,
            action: '准备企业落地支持方案',
            timeline: '1周内',
            responsible: '政策研究部门'
        });
    } else if (signalScore >= 6.0) {
        actions.push({
            priority: 1,
            action: '发送园区介绍资料',
            timeline: '1周内',
            responsible: '招商专员'
        });
        actions.push({
            priority: 2,
            action: '邀请企业参观园区',
            timeline: '2周内',
            responsible: '招商部门'
        });
    } else {
        actions.push({
            priority: 1,
            action: '持续跟踪企业动态',
            timeline: '持续',
            responsible: '信息收集岗'
        });
    }

    return actions;
}
