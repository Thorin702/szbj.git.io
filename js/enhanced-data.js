// ==================== 强链补链虚拟数据 ====================

// 薄弱环节数据
const weakLinksData = [
    {
        industry: '集成电路',
        segment: '上游',
        weakness: 'EDA工具软件',
        severity: '高',
        impact: '制约芯片设计能力提升',
        targetCompanies: 12,
        solution: '引进国际EDA企业或培育本土替代',
        color: '#f56565'
    },
    {
        industry: '集成电路',
        segment: '中游',
        weakness: '先进制程工艺',
        severity: '高',
        impact: '高端芯片制造受限',
        targetCompanies: 8,
        solution: '布局28nm及以下先进工艺',
        color: '#f56565'
    },
    {
        industry: '人工智能',
        segment: '上游',
        weakness: '高性能AI芯片',
        severity: '中',
        impact: '大模型训练成本高',
        targetCompanies: 15,
        solution: '引进GPU/NPU芯片设计企业',
        color: '#f6ad55'
    },
    {
        industry: '新能源汽车',
        segment: '上游',
        weakness: '动力电池正极材料',
        severity: '高',
        impact: '电池性能提升受限',
        targetCompanies: 18,
        solution: '引进高镍三元材料企业',
        color: '#f56565'
    },
    {
        industry: '工业互联网',
        segment: '中游',
        weakness: '工业软件',
        severity: '中',
        impact: '智能制造软件依赖进口',
        targetCompanies: 22,
        solution: '培育国产MES/SCADA系统',
        color: '#f6ad55'
    },
    {
        industry: '5G通信',
        segment: '上游',
        weakness: '射频芯片',
        severity: '中',
        impact: '5G设备成本居高不下',
        targetCompanies: 10,
        solution: '引进射频前端解决方案企业',
        color: '#f6ad55'
    },
    {
        industry: '生物医药',
        segment: '中游',
        weakness: '高端医疗器械',
        severity: '高',
        impact: '依赖进口，价格昂贵',
        targetCompanies: 14,
        solution: '引进影像设备、手术机器人企业',
        color: '#f56565'
    }
];

// 补链目标企业数据
const chainTargetsData = [
    {
        id: 1,
        name: '中芯国际先进制程项目',
        industry: '集成电路',
        segment: '中游',
        type: '制造',
        scale: '重大项目',
        investment: '450亿元',
        priority: '高',
        status: '洽谈中',
        progress: 65,
        contact: '已建立联系',
        advantage: '国内领先的晶圆代工企业，28nm及以下先进工艺',
        location: '拟落地北京亦庄'
    },
    {
        id: 2,
        name: '寒武纪AI芯片研发中心',
        industry: '人工智能',
        segment: '上游',
        type: '芯片设计',
        scale: '大型',
        investment: '80亿元',
        priority: '高',
        status: '意向明确',
        progress: 45,
        contact: '多轮洽谈',
        advantage: '国产AI芯片龙头，云端智能芯片',
        location: '拟落地中关村'
    },
    {
        id: 3,
        name: '宁德时代北京研发基地',
        industry: '新能源汽车',
        segment: '上游',
        type: '电池研发',
        scale: '重大项目',
        investment: '120亿元',
        priority: '高',
        status: '签约待落地',
        progress: 85,
        contact: '已签框架协议',
        advantage: '全球动力电池龙头，高镍三元电池技术',
        location: '北京亦庄'
    },
    {
        id: 4,
        name: '华为工业互联网总部',
        industry: '工业互联网',
        segment: '中游',
        type: '平台+软件',
        scale: '总部型',
        investment: '200亿元',
        priority: '高',
        status: '洽谈中',
        progress: 55,
        contact: '高层对接',
        advantage: 'FusionPlant工业互联网平台',
        location: '拟落地海淀区'
    },
    {
        id: 5,
        name: '卓胜微射频芯片生产线',
        industry: '5G通信',
        segment: '上游',
        type: '芯片制造',
        scale: '中型',
        investment: '45亿元',
        priority: '中',
        status: '初步接触',
        progress: 25,
        contact: '初步意向',
        advantage: '射频前端芯片国产龙头',
        location: '待定'
    },
    {
        id: 6,
        name: '联影医疗高端影像设备基地',
        industry: '生物医药',
        segment: '中游',
        type: '医疗器械',
        scale: '大型',
        investment: '95亿元',
        priority: '高',
        status: '洽谈中',
        progress: 50,
        contact: '已多次对接',
        advantage: '国产高端医学影像设备龙头',
        location: '拟落地昌平'
    },
    {
        id: 7,
        name: 'Synopsys EDA工具研发中心',
        industry: '集成电路',
        segment: '上游',
        type: 'EDA软件',
        scale: '中型',
        investment: '35亿元',
        priority: '高',
        status: '意向明确',
        progress: 60,
        contact: '框架协议洽谈中',
        advantage: '全球EDA三巨头之一',
        location: '拟落地中关村'
    }
];

// 强链项目数据
const strongChainProjects = [
    {
        id: 1,
        name: '字节跳动AI大模型研发中心',
        industry: '人工智能',
        type: '研发中心',
        investment: '180亿元',
        phase: '建设中',
        progress: 72,
        startDate: '2024-01',
        expectedCompletion: '2025-06',
        jobs: 3500,
        output: 85,
        impact: '带动AI产业链上下游100+企业',
        milestones: [
            { date: '2024-03', event: '土地摘牌', status: '已完成' },
            { date: '2024-06', event: '开工建设', status: '已完成' },
            { date: '2024-12', event: '主体结构封顶', status: '进行中' },
            { date: '2025-06', event: '投产运营', status: '未开始' }
        ]
    },
    {
        id: 2,
        name: '北京奔驰新能源汽车工厂',
        industry: '新能源汽车',
        type: '生产基地',
        investment: '320亿元',
        phase: '运营中',
        progress: 100,
        startDate: '2022-08',
        expectedCompletion: '2024-03',
        jobs: 5600,
        output: 420,
        impact: '年产20万辆新能源汽车',
        milestones: [
            { date: '2022-10', event: '开工建设', status: '已完成' },
            { date: '2023-08', event: '设备安装', status: '已完成' },
            { date: '2024-03', event: '首车下线', status: '已完成' },
            { date: '2024-06', event: '达产', status: '已完成' }
        ]
    },
    {
        id: 3,
        name: '小米智能工厂二期',
        industry: '高端装备',
        type: '智能制造',
        investment: '150亿元',
        phase: '建设中',
        progress: 45,
        startDate: '2024-03',
        expectedCompletion: '2025-12',
        jobs: 2800,
        output: 180,
        impact: '年产300万台智能终端',
        milestones: [
            { date: '2024-04', event: '项目启动', status: '已完成' },
            { date: '2024-08', event: '基础施工', status: '已完成' },
            { date: '2025-03', event: '设备进场', status: '未开始' },
            { date: '2025-12', event: '投产', status: '未开始' }
        ]
    },
    {
        id: 4,
        name: '京东方AMOLED生产线',
        industry: '集成电路',
        type: '显示面板',
        investment: '280亿元',
        phase: '运营中',
        progress: 100,
        startDate: '2021-05',
        expectedCompletion: '2023-10',
        jobs: 4200,
        output: 350,
        impact: '柔性AMOLED面板月产能4.8万片',
        milestones: [
            { date: '2021-06', event: '项目开工', status: '已完成' },
            { date: '2022-12', event: '设备搬入', status: '已完成' },
            { date: '2023-10', event: '量产', status: '已完成' },
            { date: '2024-03', event: '满产', status: '已完成' }
        ]
    }
];

// ==================== 招后服务 - 金融服务虚拟数据 ====================

// 产业基金数据
const industryFundsData = [
    {
        id: 1,
        name: '北京数字经济发展基金',
        scale: '100亿元',
        type: '政府引导+社会资本',
        focusArea: ['人工智能', '大数据', '云计算'],
        invested: 28,
        projects: 67,
        phase: ['种子期', '初创期', '成长期'],
        roi: '年化18.5%',
        contact: '北京市经信局'
    },
    {
        id: 2,
        name: '中关村集成电路产业基金',
        scale: '80亿元',
        type: '产业引导基金',
        focusArea: ['集成电路设计', '制造', '封测'],
        invested: 35,
        projects: 42,
        phase: ['成长期', '成熟期'],
        roi: '年化15.2%',
        contact: '中关村管委会'
    },
    {
        id: 3,
        name: '亦庄新能源汽车基金',
        scale: '120亿元',
        type: '政府+产业资本',
        focusArea: ['新能源汽车', '智能网联', '动力电池'],
        invested: 45,
        projects: 38,
        phase: ['全阶段'],
        roi: '年化21.3%',
        contact: '北京经开区'
    }
];

// 金融产品数据（扩展）
const financialProductsData = [
    // 信贷产品
    {
        id: 1,
        name: '数字企业成长贷',
        type: 'loan',
        institution: '北京银行',
        amount: '500万-5000万',
        rate: '3.85%',
        term: '1-3年',
        target: '数字产业成长型企业',
        features: ['无抵押', '随借随还', '利率优惠']
    },
    {
        id: 2,
        name: '科技创新专项贷',
        type: 'loan',
        institution: '中国银行',
        amount: '1000万-2亿',
        rate: '4.1%',
        term: '1-5年',
        target: '国家高新技术企业',
        features: ['知识产权质押', '政府贴息', '快速审批']
    },
    // 股权投资
    {
        id: 3,
        name: '天使投资计划',
        type: 'equity',
        institution: '中关村天使投资',
        amount: '100万-500万',
        rate: '股权占比5-15%',
        term: '3-5年退出',
        target: '种子期创新企业',
        features: ['政府跟投', '增值服务', '资源对接']
    },
    {
        id: 4,
        name: 'VC成长基金',
        type: 'equity',
        institution: '红杉中国',
        amount: '5000万-3亿',
        rate: '股权占比10-25%',
        term: '5-7年',
        target: '高成长数字企业',
        features: ['战略指导', '品牌背书', '上市辅导']
    },
    // 债券融资
    {
        id: 5,
        name: '企业债券发行',
        type: 'bond',
        institution: '北京证监局',
        amount: '5亿-50亿',
        rate: '4.5-6.0%',
        term: '3-7年',
        target: '大型数字产业企业',
        features: ['公开发行', '流动性好', '成本较低']
    },
    // 担保服务
    {
        id: 6,
        name: '中小企业担保',
        type: 'guarantee',
        institution: '北京中小企业融资担保',
        amount: '最高5000万',
        rate: '担保费1.5%/年',
        term: '1-3年',
        target: '中小微数字企业',
        features: ['降低融资门槛', '提升信用', '担保费补贴']
    }
];

// 投资机会数据
const investmentOpportunitiesData = [
    {
        id: 1,
        companyName: '某AI大模型创业公司',
        industry: '人工智能',
        stage: 'B轮',
        seeking: '5亿元',
        valuation: '35亿元',
        highlight: '自研大模型，多模态能力突出，已服务200+企业客户',
        revenue: '年营收2.3亿',
        growth: '同比增长320%',
        team: '清华团队，核心成员来自OpenAI/谷歌',
        investors: '红杉、高瓴已投',
        matching: 92
    },
    {
        id: 2,
        companyName: '某芯片设计独角兽',
        industry: '集成电路',
        stage: 'C轮',
        seeking: '10亿元',
        valuation: '120亿元',
        highlight: 'GPU芯片国产替代，性能达到国际主流水平',
        revenue: '年营收8.6亿',
        growth: '同比增长180%',
        team: '中科院团队，核心技术国际领先',
        investors: 'IDG、经纬已投',
        matching: 88
    },
    {
        id: 3,
        companyName: '某工业互联网平台',
        industry: '工业互联网',
        stage: 'B+轮',
        seeking: '3亿元',
        valuation: '25亿元',
        highlight: '服务制造业数字化转型，连接设备100万+台',
        revenue: '年营收1.8亿',
        growth: '同比增长250%',
        team: '浙大+工业自动化专家团队',
        investors: 'GGV、顺为已投',
        matching: 85
    }
];

// ==================== 招后服务 - 人才服务虚拟数据 ====================

// 人才需求分析数据
const talentDemandData = [
    {
        industry: '人工智能',
        totalDemand: 8650,
        yearGrowth: 42,
        topPositions: [
            { name: '算法工程师', demand: 2300, salary: '40-80万', gap: '供需比1:3.2' },
            { name: '机器学习工程师', demand: 1800, salary: '35-70万', gap: '供需比1:2.8' },
            { name: 'NLP工程师', demand: 1200, salary: '38-75万', gap: '供需比1:3.5' }
        ],
        skills: ['深度学习', 'PyTorch/TensorFlow', '大模型', 'CV/NLP'],
        avgSalary: '年薪45-85万'
    },
    {
        industry: '集成电路',
        totalDemand: 5240,
        yearGrowth: 35,
        topPositions: [
            { name: '芯片设计工程师', demand: 1500, salary: '35-65万', gap: '供需比1:4.1' },
            { name: '验证工程师', demand: 980, salary: '30-60万', gap: '供需比1:3.6' },
            { name: 'Layout工程师', demand: 760, salary: '28-55万', gap: '供需比1:3.2' }
        ],
        skills: ['Verilog/VHDL', 'EDA工具', '数字IC设计', '模拟IC设计'],
        avgSalary: '年薪32-60万'
    },
    {
        industry: '工业互联网',
        totalDemand: 4180,
        yearGrowth: 38,
        topPositions: [
            { name: '工业软件工程师', demand: 1100, salary: '28-55万', gap: '供需比1:2.5' },
            { name: '边缘计算工程师', demand: 850, salary: '30-58万', gap: '供需比1:2.8' },
            { name: '数字孪生工程师', demand: 720, salary: '32-62万', gap: '供需比1:3.1' }
        ],
        skills: ['工业软件', 'OT/IT融合', 'SCADA', 'MES'],
        avgSalary: '年薪30-58万'
    }
];

// 人才引进计划数据
const talentRecruitmentData = [
    {
        id: 1,
        programName: '海外高层次人才引进计划',
        level: '国家级',
        support: '最高500万安家费+200万科研启动经费',
        conditions: ['海外知名高校博士学位', '3年以上海外工作经验', '取得国际认可成果'],
        benefits: ['直接落户', '配偶就业', '子女入学', '医疗保障'],
        quota: 50,
        applied: 32,
        deadline: '2024-12-31'
    },
    {
        id: 2,
        programName: '数字产业领军人才计划',
        level: '市级',
        support: '最高300万安家费+100万项目资助',
        conditions: ['行业领军人才', '掌握核心技术', '能带动产业发展'],
        benefits: ['人才公寓', '医疗绿色通道', '一对一服务'],
        quota: 100,
        applied: 67,
        deadline: '2024-10-31'
    },
    {
        id: 3,
        programName: '青年创新人才支持计划',
        level: '市级',
        support: '最高100万项目资助+50万生活补贴',
        conditions: ['35岁以下', '博士学位', '从事数字产业创新'],
        benefits: ['租房补贴', '创业孵化', '导师指导'],
        quota: 200,
        applied: 156,
        deadline: '长期有效'
    }
];

// 培训课程数据
const trainingProgramsData = [
    // 技术类
    {
        id: 1,
        name: '大模型应用开发实战',
        type: 'tech',
        provider: '清华大学继续教育学院',
        duration: '3个月',
        mode: '线上+线下',
        level: '中高级',
        quota: 50,
        fee: '12800元',
        subsidy: '政府补贴70%',
        features: ['项目实战', 'GPT-4应用', '企业案例'],
        nextStart: '2024-08-01'
    },
    {
        id: 2,
        name: '芯片设计全流程培训',
        type: 'tech',
        provider: '中科院微电子所',
        duration: '6个月',
        mode: '全日制',
        level: '专业级',
        quota: 30,
        fee: '38000元',
        subsidy: '政府补贴50%',
        features: ['EDA工具', '流片实践', '专家指导'],
        nextStart: '2024-09-01'
    },
    // 管理类
    {
        id: 3,
        name: '数字化转型领导力',
        type: 'management',
        provider: '北京大学光华管理学院',
        duration: '2个月',
        mode: '周末班',
        level: '高管',
        quota: 40,
        fee: '28000元',
        subsidy: '企业补贴',
        features: ['战略规划', '组织变革', '标杆参访'],
        nextStart: '2024-07-15'
    },
    // 行业类
    {
        id: 4,
        name: '工业互联网应用实践',
        type: 'industry',
        provider: '北京航空航天大学',
        duration: '1.5个月',
        mode: '集中授课',
        level: '中级',
        quota: 60,
        fee: '8800元',
        subsidy: '政府补贴60%',
        features: ['平台应用', '案例分析', '企业参观'],
        nextStart: '2024-07-20'
    }
];

// ==================== 招后服务 - 产业对接虚拟数据 ====================

// 供需匹配案例数据
const supplyChainMatchingData = [
    {
        id: 1,
        demandCompany: '某AI应用企业',
        demandType: 'GPU算力服务',
        supplyCompany: '某云计算企业',
        supplyProduct: 'A100 GPU云服务',
        matchScore: 95,
        status: '已对接',
        result: '签订年度合作协议，年采购额2000万元',
        industry: '人工智能'
    },
    {
        id: 2,
        demandCompany: '某芯片设计企业',
        demandType: '晶圆代工服务',
        supplyCompany: '某晶圆制造厂',
        supplyProduct: '28nm工艺代工',
        matchScore: 92,
        status: '洽谈中',
        result: '技术对接完成，商务条款洽谈中',
        industry: '集成电路'
    }
];

// 技术成果对接数据
const techTransferData = [
    {
        id: 1,
        title: '高性能图数据库技术',
        source: '清华大学计算机系',
        field: '大数据',
        stage: '成熟期',
        advantage: '查询性能提升10倍，支持千亿级节点',
        transferMode: '技术许可/合作研发',
        price: '面议',
        contact: '清华大学技术转移办'
    },
    {
        id: 2,
        title: '柔性OLED显示材料',
        source: '北京化工大学',
        field: '新材料',
        stage: '中试阶段',
        advantage: '寿命提升50%，成本降低30%',
        transferMode: '技术转让/联合开发',
        price: '1500万元起',
        contact: '北化技术转移中心'
    },
    {
        id: 3,
        title: '工业边缘智能网关',
        source: '北京航空航天大学',
        field: '工业互联网',
        stage: '产品化',
        advantage: '低延时边缘计算，工业级可靠性',
        transferMode: '成果转化/合作生产',
        price: '800万元起',
        contact: '北航科技成果转化中心'
    }
];

// 市场拓展机会数据
const marketOpportunitiesData = [
    {
        id: 1,
        title: '北京市政务云扩容项目',
        industry: '云计算',
        scale: '8.5亿元',
        client: '北京市政务服务局',
        requirement: '政务云平台建设与运营',
        deadline: '2024-08-15',
        status: '招标中',
        advantage: '本地企业优先，需有政务云经验'
    },
    {
        id: 2,
        title: '智慧医疗平台建设',
        industry: '医疗健康',
        scale: '3.2亿元',
        client: '北京市卫健委',
        requirement: '互联网医院+AI辅助诊断',
        deadline: '2024-07-30',
        status: '需求征集',
        advantage: '需具备医疗AI资质'
    },
    {
        id: 3,
        title: '智能制造示范工厂',
        industry: '工业互联网',
        scale: '2.8亿元',
        client: '某大型制造企业',
        requirement: '数字化车间+工业互联网平台',
        deadline: '2024-09-01',
        status: '方案征集',
        advantage: '有汽车行业经验优先'
    }
];
