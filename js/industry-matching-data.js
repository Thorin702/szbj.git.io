// 产业契合度智能匹配模块 - 模拟数据

// 园区产业方向画像
const parkIndustryProfile = {
    mainIndustries: [
        {
            name: "人工智能",
            weight: 0.25,
            keywords: ["AI", "机器学习", "深度学习", "计算机视觉", "自然语言处理", "智能算法"],
            subFields: ["计算机视觉", "自然语言处理", "智能决策", "AI芯片", "AI应用"]
        },
        {
            name: "集成电路",
            weight: 0.20,
            keywords: ["芯片", "半导体", "集成电路设计", "晶圆制造", "封装测试"],
            subFields: ["芯片设计", "制造工艺", "封装测试", "材料设备", "EDA工具"]
        },
        {
            name: "生物医药",
            weight: 0.15,
            keywords: ["医药", "生物制药", "医疗器械", "基因工程", "新药研发"],
            subFields: ["创新药", "医疗器械", "诊断试剂", "生物技术", "健康管理"]
        },
        {
            name: "新能源汽车",
            weight: 0.15,
            keywords: ["新能源", "电动汽车", "智能网联", "动力电池", "自动驾驶"],
            subFields: ["整车制造", "动力电池", "充电设施", "智能座舱", "自动驾驶"]
        },
        {
            name: "工业互联网",
            weight: 0.10,
            keywords: ["工业互联网", "智能制造", "数字孪生", "工业大数据", "边缘计算"],
            subFields: ["工业软件", "智能装备", "工业云", "数字孪生", "边缘计算"]
        },
        {
            name: "数字经济",
            weight: 0.15,
            keywords: ["大数据", "云计算", "区块链", "数据要素", "数字金融"],
            subFields: ["数据服务", "云计算", "区块链", "数字内容", "电子商务"]
        }
    ],
    strategicNeeds: {
        chainKeyNodes: ["关键核心技术", "产业链龙头", "独角兽企业", "细分领域冠军"],
        ecosystemPartners: ["技术研发中心", "产业孵化器", "供应链核心企业", "平台型企业"],
        innovationDrivers: ["国家级实验室", "院士工作站", "技术标准制定者", "专利高产企业"]
    }
};

// 企业向量画像数据（基于年报、工商、招投标、官网、融资信息等）
const enterpriseProfiles = [
    {
        id: "ent_001",
        name: "北京智芯科技有限公司",
        basicInfo: {
            type: "有限责任公司",
            registeredCapital: "50000万元",
            foundDate: "2018-06-15",
            employees: 850,
            area: "海淀区"
        },
        businessScope: {
            main: "人工智能芯片研发与销售",
            keywords: ["AI芯片", "神经网络加速器", "边缘计算芯片", "深度学习", "芯片设计"]
        },
        annualReport: {
            revenue2023: 125000, // 万元
            revenue2022: 89000,
            revenue2021: 52000,
            growthRate: 40.4,
            profit2023: 15000,
            rdExpense: 28000,
            rdRatio: 22.4
        },
        patents: {
            total: 156,
            invention: 89,
            utility: 45,
            design: 22,
            recentYear: 38
        },
        bidding: {
            totalProjects: 45,
            recentProjects: [
                "北京市智慧城市AI芯片采购项目",
                "教育部智能教育终端芯片研发项目",
                "工信部5G边缘计算芯片测试项目"
            ],
            totalAmount: 89000 // 万元
        },
        financing: {
            totalRounds: 5,
            latestRound: "C轮",
            latestAmount: "5亿元",
            latestDate: "2023-08",
            totalRaised: "12亿元",
            investors: ["红杉资本", "IDG资本", "中芯国际", "华为哈勃投资"]
        },
        website: {
            hasOfficialSite: true,
            techStack: ["神经网络处理器", "AI加速卡", "边缘AI芯片"],
            products: ["智芯-V100 AI加速卡", "智芯-E50 边缘AI芯片", "智芯云平台"],
            partners: ["华为", "阿里巴巴", "百度", "腾讯"],
            certifications: ["ISO9001", "ISO27001", "CMMI5"]
        },
        industryPosition: {
            isUnicorn: true,
            isLeader: true,
            marketShare: 8.5,
            ranking: "国内AI芯片TOP5",
            coreCompetence: ["神经网络加速", "低功耗设计", "异构计算"]
        },
        honors: [
            "国家专精特新小巨人企业",
            "北京市独角兽企业",
            "中国芯十大优秀企业",
            "Gartner全球AI芯片创新企业"
        ]
    },
    {
        id: "ent_002",
        name: "创新生物医药研究院",
        basicInfo: {
            type: "股份有限公司",
            registeredCapital: "80000万元",
            foundDate: "2015-03-20",
            employees: 1200,
            area: "昌平区"
        },
        businessScope: {
            main: "创新药物研发、生产与销售",
            keywords: ["抗肿瘤药", "创新药", "生物制药", "基因工程", "临床研究"]
        },
        annualReport: {
            revenue2023: 285000,
            revenue2022: 198000,
            revenue2021: 145000,
            growthRate: 43.9,
            profit2023: 45000,
            rdExpense: 68000,
            rdRatio: 23.9
        },
        patents: {
            total: 289,
            invention: 234,
            utility: 35,
            design: 20,
            recentYear: 56
        },
        bidding: {
            totalProjects: 23,
            recentProjects: [
                "国家重大新药创制专项",
                "北京市抗肿瘤药物研发项目",
                "医保目录创新药准入项目"
            ],
            totalAmount: 156000
        },
        financing: {
            totalRounds: 4,
            latestRound: "Pre-IPO",
            latestAmount: "10亿元",
            latestDate: "2024-02",
            totalRaised: "23亿元",
            investors: ["高瓴资本", "礼来亚洲基金", "国投创新", "中金资本"]
        },
        website: {
            hasOfficialSite: true,
            techStack: ["单克隆抗体", "ADC技术", "细胞治疗"],
            products: ["康必达(抗肿瘤)", "益生宁(糖尿病)", "复康灵(心血管)"],
            partners: ["协和医院", "北大医院", "301医院"],
            certifications: ["GMP", "FDA认证", "欧盟CE认证"]
        },
        industryPosition: {
            isUnicorn: true,
            isLeader: true,
            marketShare: 6.2,
            ranking: "国内创新药企业TOP10",
            coreCompetence: ["抗体药物", "靶向治疗", "精准医疗"]
        },
        honors: [
            "国家高新技术企业",
            "中国医药创新企业100强",
            "北京市专精特新企业",
            "科技部创新型企业"
        ]
    },
    {
        id: "ent_003",
        name: "云数据科技股份公司",
        basicInfo: {
            type: "股份有限公司",
            registeredCapital: "35000万元",
            foundDate: "2017-09-10",
            employees: 580,
            area: "朝阳区"
        },
        businessScope: {
            main: "大数据服务、云计算、数据要素流通",
            keywords: ["大数据", "数据中台", "数据要素", "数据资产", "数据交易"]
        },
        annualReport: {
            revenue2023: 95000,
            revenue2022: 62000,
            revenue2021: 38000,
            growthRate: 53.2,
            profit2023: 12000,
            rdExpense: 18000,
            rdRatio: 18.9
        },
        patents: {
            total: 78,
            invention: 52,
            utility: 18,
            design: 8,
            recentYear: 24
        },
        bidding: {
            totalProjects: 67,
            recentProjects: [
                "北京市数据要素市场建设项目",
                "数字经济示范区大数据平台",
                "政务数据共享交换平台"
            ],
            totalAmount: 78000
        },
        financing: {
            totalRounds: 3,
            latestRound: "B+轮",
            latestAmount: "3亿元",
            latestDate: "2023-11",
            totalRaised: "6.5亿元",
            investors: ["经纬中国", "真格基金", "北京数字经济基金"]
        },
        website: {
            hasOfficialSite: true,
            techStack: ["数据中台", "联邦学习", "隐私计算", "数据资产评估"],
            products: ["云数中台", "数据交易平台", "数据资产管理系统"],
            partners: ["北京数据交易所", "中国信通院", "数据流通产业联盟"],
            certifications: ["信息安全等级保护三级", "ISO27001"]
        },
        industryPosition: {
            isUnicorn: false,
            isLeader: false,
            marketShare: 3.8,
            ranking: "数据要素领域新锐企业",
            coreCompetence: ["数据治理", "隐私计算", "数据资产化"]
        },
        honors: [
            "北京市专精特新企业",
            "数字经济优秀案例企业",
            "中国大数据企业50强"
        ]
    },
    {
        id: "ent_004",
        name: "新能源动力科技集团",
        basicInfo: {
            type: "股份有限公司",
            registeredCapital: "120000万元",
            foundDate: "2016-05-08",
            employees: 2500,
            area: "大兴区"
        },
        businessScope: {
            main: "动力电池研发生产、新能源汽车配套",
            keywords: ["动力电池", "电池管理系统", "储能", "新能源", "电池回收"]
        },
        annualReport: {
            revenue2023: 456000,
            revenue2022: 325000,
            revenue2021: 198000,
            growthRate: 40.3,
            profit2023: 58000,
            rdExpense: 52000,
            rdRatio: 11.4
        },
        patents: {
            total: 345,
            invention: 198,
            utility: 112,
            design: 35,
            recentYear: 68
        },
        bidding: {
            totalProjects: 34,
            recentProjects: [
                "北京市新能源公交车电池采购",
                "国家电网储能电站项目",
                "工信部动力电池回收示范项目"
            ],
            totalAmount: 235000
        },
        financing: {
            totalRounds: 4,
            latestRound: "IPO筹备",
            latestAmount: "15亿元",
            latestDate: "2023-09",
            totalRaised: "35亿元",
            investors: ["宁德时代", "比亚迪", "国投创新", "中金资本"]
        },
        website: {
            hasOfficialSite: true,
            techStack: ["三元锂电池", "固态电池", "BMS系统", "电池回收技术"],
            products: ["新动力-P系列动力电池", "新动力-E储能电池", "智能BMS"],
            partners: ["北汽新能源", "理想汽车", "小鹏汽车", "国家电网"],
            certifications: ["ISO9001", "IATF16949", "UL认证"]
        },
        industryPosition: {
            isUnicorn: true,
            isLeader: true,
            marketShare: 12.5,
            ranking: "国内动力电池TOP3",
            coreCompetence: ["高能量密度", "快充技术", "安全管理"]
        },
        honors: [
            "国家制造业单项冠军",
            "中国动力电池创新企业",
            "北京市专精特新小巨人",
            "工信部绿色工厂"
        ]
    },
    {
        id: "ent_005",
        name: "智能制造系统有限公司",
        basicInfo: {
            type: "有限责任公司",
            registeredCapital: "28000万元",
            foundDate: "2019-01-15",
            employees: 420,
            area: "顺义区"
        },
        businessScope: {
            main: "工业互联网平台、智能制造解决方案",
            keywords: ["工业互联网", "MES系统", "数字孪生", "智能工厂", "工业大数据"]
        },
        annualReport: {
            revenue2023: 62000,
            revenue2022: 38000,
            revenue2021: 22000,
            growthRate: 63.2,
            profit2023: 8500,
            rdExpense: 12000,
            rdRatio: 19.4
        },
        patents: {
            total: 92,
            invention: 58,
            utility: 28,
            design: 6,
            recentYear: 32
        },
        bidding: {
            totalProjects: 56,
            recentProjects: [
                "工信部工业互联网示范项目",
                "北京市智能制造试点项目",
                "国资委数字化转型咨询项目"
            ],
            totalAmount: 45000
        },
        financing: {
            totalRounds: 2,
            latestRound: "B轮",
            latestAmount: "2.5亿元",
            latestDate: "2023-06",
            totalRaised: "4亿元",
            investors: ["联想创投", "用友网络", "工业富联"]
        },
        website: {
            hasOfficialSite: true,
            techStack: ["工业互联网平台", "数字孪生", "边缘计算", "AI质检"],
            products: ["智造云平台", "数字孪生系统", "AI质检系统"],
            partners: ["中国商飞", "三一重工", "海尔集团"],
            certifications: ["CMMI5", "ISO9001", "信息安全等级保护三级"]
        },
        industryPosition: {
            isUnicorn: false,
            isLeader: false,
            marketShare: 4.2,
            ranking: "工业互联网平台细分领域前十",
            coreCompetence: ["数字孪生", "AI质检", "产线优化"]
        },
        honors: [
            "工信部工业互联网试点示范",
            "北京市专精特新企业",
            "中国智能制造优秀供应商"
        ]
    },
    {
        id: "ent_006",
        name: "普通贸易公司",
        basicInfo: {
            type: "有限责任公司",
            registeredCapital: "500万元",
            foundDate: "2020-08-20",
            employees: 35,
            area: "丰台区"
        },
        businessScope: {
            main: "日用品批发零售",
            keywords: ["批发", "零售", "日用品", "贸易"]
        },
        annualReport: {
            revenue2023: 2800,
            revenue2022: 2500,
            revenue2021: 2200,
            growthRate: 12.0,
            profit2023: 280,
            rdExpense: 0,
            rdRatio: 0
        },
        patents: {
            total: 0,
            invention: 0,
            utility: 0,
            design: 0,
            recentYear: 0
        },
        bidding: {
            totalProjects: 3,
            recentProjects: ["社区日用品配送"],
            totalAmount: 450
        },
        financing: {
            totalRounds: 0,
            latestRound: "无",
            latestAmount: "0",
            latestDate: "-",
            totalRaised: "0",
            investors: []
        },
        website: {
            hasOfficialSite: false,
            techStack: [],
            products: [],
            partners: [],
            certifications: []
        },
        industryPosition: {
            isUnicorn: false,
            isLeader: false,
            marketShare: 0,
            ranking: "-",
            coreCompetence: []
        },
        honors: []
    }
];

// 契合度评分算法配置
const matchingConfig = {
    // 评分维度权重（总和为1）
    dimensions: {
        industryAlignment: 0.30,      // 产业方向契合度
        technologyLevel: 0.20,        // 技术水平
        growthPotential: 0.15,        // 成长潜力
        innovationCapability: 0.15,   // 创新能力
        strategicValue: 0.12,         // 战略价值
        resourceMatch: 0.08           // 资源匹配度
    },

    // 优质标的识别标准
    qualityThresholds: {
        unicorn: { label: "独角兽企业", icon: "", color: "#9333ea" },
        chainKeyNode: { label: "产业链关键环节", icon: "", color: "#0238C1" },
        ecosystemPartner: { label: "生态伙伴", icon: "", color: "#059669" },
        techLeader: { label: "技术领先", icon: "", color: "#dc2626" },
        fastGrowing: { label: "高成长企业", icon: "", color: "#ea580c" },
        innovationDriven: { label: "创新驱动", icon: "", color: "#7c3aed" }
    },

    // 评分等级
    scoreGrades: [
        { min: 9.0, max: 10, grade: "A+", label: "极度契合", color: "#059669", recommendation: "强烈推荐引进" },
        { min: 8.0, max: 8.9, grade: "A", label: "高度契合", color: "#0ea5e9", recommendation: "优先引进" },
        { min: 7.0, max: 7.9, grade: "B+", label: "较好契合", color: "#8b5cf6", recommendation: "推荐引进" },
        { min: 6.0, max: 6.9, grade: "B", label: "一般契合", color: "#f59e0b", recommendation: "可以考虑" },
        { min: 5.0, max: 5.9, grade: "C", label: "基本契合", color: "#f97316", recommendation: "谨慎评估" },
        { min: 0, max: 4.9, grade: "D", label: "契合度低", color: "#6b7280", recommendation: "不建议引进" }
    ]
};
