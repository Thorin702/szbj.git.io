// 产业链AI动态监测 - 数据模型

// 数字经济细分领域（重点关注数据相关领域）
const digitalEconomyFields = [
    {
        id: 'data-element',
        name: '数据要素',
        icon: '',
        color: '#0ea5e9',
        keywords: ['数据要素', '数据资产', '数据交易', '数据流通', '数据确权'],
        enterprises: 234,
        growth: {
            current: 58.5,
            lastMonth: 52.3,
            trend: 'up'
        },
        knowledgeGraph: {
            nodes: ['数据交易所', '数据中介', '隐私计算', '数据定价', '数据资产评估'],
            relationships: [
                { from: '数据交易所', to: '隐私计算', type: '技术依赖' },
                { from: '数据定价', to: '数据资产评估', type: '业务关联' }
            ]
        }
    },
    {
        id: 'data-service',
        name: '数据服务',
        icon: '',
        color: '#8b5cf6',
        keywords: ['数据清洗', '数据标注', '数据治理', '数据中台', 'ETL'],
        enterprises: 567,
        growth: {
            current: 42.1,
            lastMonth: 38.9,
            trend: 'up'
        },
        knowledgeGraph: {
            nodes: ['数据清洗', '数据标注', '数据治理', '数据质量', '主数据管理'],
            relationships: [
                { from: '数据清洗', to: '数据质量', type: '提升' },
                { from: '数据治理', to: '主数据管理', type: '包含' }
            ]
        }
    },
    {
        id: 'big-data',
        name: '大数据分析',
        icon: '',
        color: '#059669',
        keywords: ['大数据分析', '数据挖掘', '商业智能', 'BI', '数据可视化'],
        enterprises: 892,
        growth: {
            current: 35.8,
            lastMonth: 34.2,
            trend: 'up'
        },
        knowledgeGraph: {
            nodes: ['数据仓库', '数据湖', '实时分析', '离线分析', 'OLAP'],
            relationships: [
                { from: '数据仓库', to: 'OLAP', type: '支撑' },
                { from: '实时分析', to: '离线分析', type: '互补' }
            ]
        }
    },
    {
        id: 'ai-platform',
        name: 'AI平台',
        icon: '',
        color: '#dc2626',
        keywords: ['机器学习平台', 'AI中台', '模型训练', '模型部署', 'MLOps'],
        enterprises: 456,
        growth: {
            current: 67.3,
            lastMonth: 59.8,
            trend: 'up'
        },
        knowledgeGraph: {
            nodes: ['模型训练', '模型部署', '特征工程', 'AutoML', '模型监控'],
            relationships: [
                { from: '模型训练', to: '模型部署', type: '流程' },
                { from: 'AutoML', to: '特征工程', type: '自动化' }
            ]
        }
    },
    {
        id: 'cloud-computing',
        name: '云计算',
        icon: '',
        color: '#f59e0b',
        keywords: ['公有云', '私有云', '混合云', '云原生', '容器'],
        enterprises: 723,
        growth: {
            current: 28.6,
            lastMonth: 27.1,
            trend: 'up'
        },
        knowledgeGraph: {
            nodes: ['IaaS', 'PaaS', 'SaaS', 'Kubernetes', '微服务'],
            relationships: [
                { from: 'IaaS', to: 'PaaS', type: '基础' },
                { from: 'PaaS', to: 'SaaS', type: '支撑' }
            ]
        }
    },
    {
        id: 'digital-security',
        name: '数据安全',
        icon: '',
        color: '#7c3aed',
        keywords: ['隐私计算', '联邦学习', '数据加密', '区块链', '安全多方计算'],
        enterprises: 389,
        growth: {
            current: 51.2,
            lastMonth: 46.7,
            trend: 'up'
        },
        knowledgeGraph: {
            nodes: ['隐私计算', '同态加密', '差分隐私', '联邦学习', '安全多方计算'],
            relationships: [
                { from: '隐私计算', to: '联邦学习', type: '应用' },
                { from: '同态加密', to: '安全多方计算', type: '技术基础' }
            ]
        }
    }
];

// 行业景气度指标数据
const industryProsperityData = {
    'data-element': {
        recruitment: {
            total: 2340,
            growth: 45.6,
            hotPositions: ['数据工程师', '数据产品经理', '数据资产评估师'],
            avgSalary: '25-45K'
        },
        financing: {
            events: 23,
            amount: '18.5亿',
            hotRounds: ['A轮', 'B轮'],
            topInvestors: ['经纬中国', '真格基金', '红杉资本']
        },
        sentiment: {
            score: 8.2,
            positive: 78,
            neutral: 18,
            negative: 4,
            hotTopics: ['数据要素市场化', '数据二十条', '数据资产入表']
        },
        policy: {
            count: 34,
            density: 'high',
            recent: [
                '数据要素市场化配置改革方案',
                '企业数据资产管理办法',
                '数据交易场所管理指引'
            ],
            impact: '高度利好'
        }
    },
    'ai-platform': {
        recruitment: {
            total: 3450,
            growth: 62.3,
            hotPositions: ['算法工程师', 'AI平台架构师', 'MLOps工程师'],
            avgSalary: '30-60K'
        },
        financing: {
            events: 45,
            amount: '56.8亿',
            hotRounds: ['B轮', 'C轮'],
            topInvestors: ['红杉资本', 'IDG资本', '高瓴资本']
        },
        sentiment: {
            score: 9.1,
            positive: 85,
            neutral: 12,
            negative: 3,
            hotTopics: ['大模型应用', 'AI算力', '智能决策']
        },
        policy: {
            count: 28,
            density: 'high',
            recent: [
                '人工智能产业创新发展方案',
                '算力基础设施高质量发展行动计划',
                'AI模型安全管理办法'
            ],
            impact: '高度利好'
        }
    },
    'digital-security': {
        recruitment: {
            total: 1890,
            growth: 38.9,
            hotPositions: ['隐私计算工程师', '密码学专家', '区块链开发'],
            avgSalary: '28-50K'
        },
        financing: {
            events: 18,
            amount: '12.3亿',
            hotRounds: ['A轮', 'Pre-A'],
            topInvestors: ['北极光创投', '启明创投', '国投创新']
        },
        sentiment: {
            score: 7.8,
            positive: 72,
            neutral: 22,
            negative: 6,
            hotTopics: ['隐私保护', '数据合规', '安全计算']
        },
        policy: {
            count: 42,
            density: 'very-high',
            recent: [
                '数据安全法实施细则',
                '个人信息保护条例',
                '关键信息基础设施安全保护条例'
            ],
            impact: '强监管+扶持'
        }
    }
};

// 产业链断点和优势领域识别
const chainAnalysis = {
    'data-element': {
        strengths: [
            {
                area: '数据交易平台',
                score: 8.5,
                reason: '北京数据交易所等头部机构集聚，交易规则完善',
                enterprises: ['北京数据交易所', '中国信通院', '数据流通产业联盟']
            },
            {
                area: '隐私计算技术',
                score: 8.2,
                reason: '技术积累深厚，专利数量领先全国',
                enterprises: ['洞见科技', '翼方健数', '蚂蚁链']
            }
        ],
        weaknesses: [
            {
                area: '数据定价机制',
                score: 4.3,
                reason: '缺乏统一的数据定价标准和评估体系',
                impact: '制约数据要素流通效率',
                solution: '建立数据资产评估标准，培育第三方评估机构'
            },
            {
                area: '跨境数据流通',
                score: 3.8,
                reason: '跨境数据传输监管复杂，合规成本高',
                impact: '限制国际数据业务发展',
                solution: '完善跨境数据流通规则，建立国际合作机制'
            }
        ],
        opportunities: [
            '数据资产入表带来的市场增量',
            '数据要素市场化配置改革试点',
            '公共数据授权运营机制创新'
        ],
        risks: [
            '数据安全和隐私保护监管趋严',
            '数据垄断反垄断执法力度加大',
            '数据泄露事件频发影响行业信任'
        ]
    },
    'ai-platform': {
        strengths: [
            {
                area: 'AI大模型研发',
                score: 8.8,
                reason: '头部企业技术实力强，研发投入大',
                enterprises: ['百度', '阿里巴巴', '腾讯', '字节跳动']
            },
            {
                area: 'AI应用场景',
                score: 8.0,
                reason: '应用场景丰富，商业化进展快',
                enterprises: ['商汤科技', '旷视科技', '第四范式']
            }
        ],
        weaknesses: [
            {
                area: 'AI芯片',
                score: 5.2,
                reason: '高端AI芯片严重依赖进口',
                impact: '算力供给受限，成本高昂',
                solution: '加大AI芯片研发投入，支持国产替代'
            },
            {
                area: '开源生态',
                score: 4.9,
                reason: '开源社区活跃度不足，生态建设滞后',
                impact: '技术创新速度受影响',
                solution: '鼓励企业开源，培育开发者社区'
            }
        ],
        opportunities: [
            '大模型商业化应用加速',
            'AI+行业深度融合',
            '算力基础设施大规模建设'
        ],
        risks: [
            'AI安全和伦理监管加强',
            '算力成本持续攀升',
            '技术泡沫风险'
        ]
    }
};

// 自动化简报数据（每日/每周）
const automatedReports = {
    daily: {
        date: '2024-12-10',
        type: '每日简报',
        summary: {
            hotIndustries: ['AI平台', '数据要素', '数据安全'],
            keyEvents: 5,
            policyUpdates: 3,
            emergingTrends: 2
        },
        keyEvents: [
            {
                time: '14:30',
                category: '融资',
                title: '某AI平台公司完成B轮5亿元融资',
                industry: 'AI平台',
                impact: 'high',
                details: 'XX科技完成B轮5亿元融资，由红杉资本领投。公司专注于企业级AI中台建设。'
            },
            {
                time: '11:20',
                category: '政策',
                title: '北京发布数据要素市场化配置实施方案',
                industry: '数据要素',
                impact: 'very-high',
                details: '方案明确数据资产登记、评估、交易等环节的具体措施，预计带动千亿级市场。'
            },
            {
                time: '09:15',
                category: '技术',
                title: '国产隐私计算平台通过权威测评',
                industry: '数据安全',
                impact: 'medium',
                details: '某隐私计算平台通过中国信通院测评，性能达到国际先进水平。'
            }
        ],
        aiInsights: [
            '数据要素市场政策密集出台，预计Q1将迎来投资高峰',
            'AI平台融资热度持续，大模型应用成为新焦点',
            '数据安全领域合规需求增加，隐私计算技术需求旺盛'
        ]
    },
    weekly: {
        week: '2024年第50周',
        type: '每周报告',
        summary: {
            overview: '本周数字经济领域整体景气度上升，AI平台和数据要素成为投资热点',
            totalEvents: 34,
            totalPolicies: 8,
            totalFinancing: '85.6亿元'
        },
        industryRanking: [
            { name: 'AI平台', score: 9.2, change: '+0.5' },
            { name: '数据要素', score: 8.8, change: '+0.7' },
            { name: '数据安全', score: 8.1, change: '+0.3' },
            { name: '大数据分析', score: 7.5, change: '-0.1' },
            { name: '云计算', score: 7.2, change: '0' }
        ],
        hotTopics: [
            {
                topic: '大模型商业化',
                heat: 95,
                description: '多家企业发布垂直领域大模型，商业化进展显著',
                relatedIndustries: ['AI平台', '数据服务']
            },
            {
                topic: '数据资产入表',
                heat: 88,
                description: '企业数据资产入表试点扩大，会计准则逐步完善',
                relatedIndustries: ['数据要素', '大数据分析']
            },
            {
                topic: '隐私计算标准化',
                heat: 76,
                description: '隐私计算互联互通标准发布，行业规范化加速',
                relatedIndustries: ['数据安全', '数据要素']
            }
        ],
        trends: [
            {
                trend: 'AI+垂直行业深度融合',
                confidence: 'high',
                timeframe: '未来6个月',
                description: 'AI技术在金融、医疗、制造等行业的应用将进入规模化阶段',
                opportunities: ['行业大模型', 'AI应用开发平台', '垂直场景解决方案']
            },
            {
                trend: '数据要素市场加速成熟',
                confidence: 'medium-high',
                timeframe: '未来12个月',
                description: '数据交易、数据资产评估、数据中介等细分市场将快速发展',
                opportunities: ['数据交易平台', '数据资产评估', '数据合规服务']
            }
        ],
        aiRecommendations: [
            '重点关注AI平台企业的融资动态，多家优质标的进入成长期',
            '数据要素领域政策红利明显，建议加大招商力度',
            '数据安全领域合规要求提高，隐私计算企业值得关注'
        ]
    }
};

// 机会点识别数据
const opportunitySpots = [
    {
        id: 'opp_001',
        title: '数据要素市场爆发在即',
        industry: '数据要素',
        type: 'policy-driven',
        confidence: 0.92,
        timeWindow: '未来3-6个月',
        description: '随着"数据二十条"等政策落地，数据要素市场化配置改革提速，预计将催生千亿级市场',
        indicators: [
            '政策密度：34项（极高）',
            '融资增速：+58%',
            '企业注册增速：+45%',
            '人才需求增长：+46%'
        ],
        actionPlan: [
            '重点招引数据交易平台企业',
            '培育数据资产评估服务机构',
            '建设数据要素流通基础设施'
        ],
        targetEnterprises: 12,
        estimatedValue: '预计带动150亿产值'
    },
    {
        id: 'opp_002',
        title: '大模型应用商业化提速',
        industry: 'AI平台',
        type: 'market-driven',
        confidence: 0.88,
        timeWindow: '持续12个月',
        description: 'GPT类大模型技术成熟，垂直行业应用加速落地，商业化进程显著加快',
        indicators: [
            '融资规模：56.8亿（同比+78%）',
            '应用案例增长：+156%',
            '企业数量增长：+67%',
            '招聘需求：+62%'
        ],
        actionPlan: [
            '引进行业大模型研发企业',
            '布局AI应用开发平台',
            '建设AI算力基础设施'
        ],
        targetEnterprises: 18,
        estimatedValue: '预计带动280亿产值'
    },
    {
        id: 'opp_003',
        title: '隐私计算技术需求激增',
        industry: '数据安全',
        type: 'compliance-driven',
        confidence: 0.85,
        timeWindow: '未来6-12个月',
        description: '数据安全监管趋严，隐私计算成为数据流通的必备技术，市场需求快速增长',
        indicators: [
            '政策数量：42项（最高）',
            '市场规模增长：+51%',
            '技术专利增长：+68%',
            '应用场景拓展：金融、医疗、政务'
        ],
        actionPlan: [
            '招引隐私计算技术企业',
            '建设隐私计算公共服务平台',
            '推动隐私计算标准化'
        ],
        targetEnterprises: 8,
        estimatedValue: '预计带动80亿产值'
    }
];

// 风险点识别数据
const riskSpots = [
    {
        id: 'risk_001',
        title: 'AI算力供给紧张',
        industry: 'AI平台',
        severity: 'high',
        probability: 0.78,
        impact: '制约AI大模型训练和应用，推高成本',
        indicators: [
            '算力成本上涨：+35%',
            'GPU供应紧张度：8.5/10',
            '交付周期延长：平均6-9个月'
        ],
        mitigation: [
            '支持本地算力中心建设',
            '推动算力资源共享',
            '引进国产AI芯片企业'
        ]
    },
    {
        id: 'risk_002',
        title: '数据安全合规压力',
        industry: '数据要素',
        severity: 'medium-high',
        probability: 0.82,
        impact: '数据流通成本增加，部分业务受限',
        indicators: [
            '合规成本增长：+45%',
            '违规处罚案例：+23%',
            '企业合规投入：占营收5-8%'
        ],
        mitigation: [
            '建立数据合规咨询服务体系',
            '推广隐私计算等合规技术',
            '加强企业合规培训'
        ]
    },
    {
        id: 'risk_003',
        title: '技术人才短缺',
        industry: '全行业',
        severity: 'medium',
        probability: 0.85,
        impact: '研发进度延缓，人力成本上升',
        indicators: [
            '人才缺口：约8.5万人',
            '薪资涨幅：+25%',
            '人才流动率：18%'
        ],
        mitigation: [
            '加强校企合作培养',
            '引进海外高端人才',
            '建设人才公寓等配套'
        ]
    }
];
