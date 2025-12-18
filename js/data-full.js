// 北京市数字产业发展平台 - 模拟数据

// 北京市各区数据
const beijingDistricts = [
    '海淀区', '朝阳区', '东城区', '西城区', '丰台区', '石景山区',
    '通州区', '顺义区', '昌平区', '大兴区', '房山区', '门头沟区',
    '平谷区', '怀柔区', '密云区', '延庆区'
];

// 产业数据 - 聚焦数字产业
const industryData = {
    chains: [
        {
            id: 1,
            name: '集成电路',
            icon: '',
            companies: 1245,
            output: 2850,
            completeness: 92,
            growth: 15.2,
            category: '核心数字产业',
            districts: ['海淀区', '朝阳区', '昌平区', '大兴区'],
            keyCompanies: ['中芯国际', '兆易创新', '北方华创', '中科院微电子所'],
            upstream: ['硅片制造', 'EDA软件', '光刻胶', '特种气体'],
            midstream: ['芯片设计', '晶圆制造', '封装测试'],
            downstream: ['消费电子', '通信设备', '汽车电子', '工业控制'],
            weakness: ['高端光刻机', '先进封装材料'],
            opportunity: ['车规级芯片', 'AIoT芯片', '第三代半导体'],
            relatedIndustries: [2, 5, 7, 8] // 与AI、5G、大数据、物联网相关
        },
        {
            id: 2,
            name: '人工智能',
            icon: '',
            companies: 2156,
            output: 3420,
            completeness: 88,
            growth: 28.5,
            category: '核心数字产业',
            districts: ['海淀区', '朝阳区', '石景山区'],
            keyCompanies: ['百度', '旷视科技', '商汤科技', '地平线', '第四范式'],
            upstream: ['AI芯片', '数据标注', '算力平台'],
            midstream: ['算法研发', '模型训练', '平台开发'],
            downstream: ['智慧城市', '自动驾驶', '医疗诊断', '金融科技'],
            weakness: ['高端GPU', '训练数据集'],
            opportunity: ['大模型应用', '具身智能', 'AI+制造'],
            relatedIndustries: [1, 3, 7, 9] // 与集成电路、云计算、大数据、软件服务相关
        },
        {
            id: 3,
            name: '云计算',
            icon: '',
            companies: 1834,
            output: 2680,
            completeness: 85,
            growth: 32.5,
            category: '核心数字产业',
            districts: ['海淀区', '朝阳区', '亦庄开发区'],
            keyCompanies: ['阿里云', '腾讯云', '华为云', '金山云', 'UCloud'],
            upstream: ['服务器', '存储设备', '网络设备', '数据中心'],
            midstream: ['云平台开发', '虚拟化技术', '容器编排'],
            downstream: ['SaaS应用', '云原生应用', '混合云方案'],
            weakness: ['自主可控芯片', '核心数据库'],
            opportunity: ['边缘云', '多云管理', '云原生安全'],
            relatedIndustries: [2, 5, 6, 7] // 与AI、5G、工业互联网、大数据相关
        },
        {
            id: 4,
            name: '大数据',
            icon: '',
            companies: 1456,
            output: 1890,
            completeness: 82,
            growth: 26.8,
            category: '核心数字产业',
            districts: ['海淀区', '朝阳区', '石景山区'],
            keyCompanies: ['东方国信', '神州数码', '中科曙光', '星环科技'],
            upstream: ['数据采集', '数据存储', '数据治理'],
            midstream: ['数据分析', '数据挖掘', '数据可视化'],
            downstream: ['数据交易', '数据应用', '数据服务'],
            weakness: ['数据安全技术', '隐私计算'],
            opportunity: ['数据要素市场化', '联邦学习', '数据资产评估'],
            relatedIndustries: [2, 3, 6, 10] // 与AI、云计算、工业互联网、区块链相关
        },
        {
            id: 5,
            name: '5G通信',
            icon: '',
            companies: 678,
            output: 1580,
            completeness: 80,
            growth: 22.3,
            category: '核心数字产业',
            districts: ['海淀区', '朝阳区', '大兴区'],
            keyCompanies: ['中国移动研究院', '中兴通讯', '大唐电信', '华为北京研究所'],
            upstream: ['基站设备', '核心网设备', '光模块'],
            midstream: ['网络建设', '系统集成', '运营维护'],
            downstream: ['物联网应用', '工业互联网', '智慧城市'],
            weakness: ['射频芯片', '高端滤波器'],
            opportunity: ['5G-A演进', '6G预研', '低空通信'],
            relatedIndustries: [1, 3, 6, 8] // 与集成电路、云计算、工业互联网、物联网相关
        },
        {
            id: 6,
            name: '工业互联网',
            icon: '',
            companies: 945,
            output: 1120,
            completeness: 72,
            growth: 31.2,
            category: '融合数字产业',
            districts: ['海淀区', '石景山区', '通州区'],
            keyCompanies: ['用友网络', '东方国信', '和利时', '京东方工业互联网'],
            upstream: ['工业传感器', '边缘计算设备', '工控软件'],
            midstream: ['工业互联网平台', '数据采集分析', '安全防护'],
            downstream: ['智能制造', '供应链优化', '设备运维'],
            weakness: ['高端工业传感器', '工业控制系统'],
            opportunity: ['数字孪生', '工业大模型', '低代码平台'],
            relatedIndustries: [2, 3, 4, 5, 8] // 与AI、云计算、大数据、5G、物联网相关
        },
        {
            id: 7,
            name: '软件和信息服务',
            icon: '',
            companies: 3245,
            output: 4560,
            completeness: 90,
            growth: 24.6,
            category: '核心数字产业',
            districts: ['海淀区', '朝阳区', '东城区'],
            keyCompanies: ['用友', '金蝶', '东软', '文思海辉', '软通动力'],
            upstream: ['基础软件', '开发工具', '中间件'],
            midstream: ['行业软件', '应用软件', 'SaaS平台'],
            downstream: ['IT服务', '系统集成', '运维服务'],
            weakness: ['操作系统', '数据库', '工业软件'],
            opportunity: ['信创产业', 'AI辅助编程', '低代码开发'],
            relatedIndustries: [2, 3, 9, 11] // 与AI、云计算、数字内容、网络安全相关
        },
        {
            id: 8,
            name: '物联网',
            icon: '',
            companies: 1567,
            output: 1850,
            completeness: 78,
            growth: 29.4,
            category: '融合数字产业',
            districts: ['海淀区', '朝阳区', '大兴区', '顺义区'],
            keyCompanies: ['小米IoT', '京东方IoT', '移远通信', '和而泰'],
            upstream: ['传感器', '通信模组', '定位芯片'],
            midstream: ['IoT平台', '设备管理', '数据处理'],
            downstream: ['智能家居', '智慧交通', '智慧农业', '资产追踪'],
            weakness: ['高端传感器', '低功耗通信'],
            opportunity: ['工业物联网', '车联网', 'AIoT融合'],
            relatedIndustries: [1, 2, 5, 6] // 与集成电路、AI、5G、工业互联网相关
        },
        {
            id: 9,
            name: '数字内容',
            icon: '',
            companies: 2034,
            output: 2150,
            completeness: 86,
            growth: 21.7,
            category: '融合数字产业',
            districts: ['海淀区', '朝阳区', '石景山区'],
            keyCompanies: ['字节跳动', '快手', '完美世界', '爱奇艺', '昆仑万维'],
            upstream: ['内容创作工具', '渲染引擎', '动作捕捉'],
            midstream: ['游戏开发', '视频制作', '虚拟现实内容'],
            downstream: ['内容分发', '版权运营', '数字营销'],
            weakness: ['游戏引擎', '3D建模工具'],
            opportunity: ['AIGC应用', '元宇宙内容', '数字人'],
            relatedIndustries: [2, 7, 10] // 与AI、软件服务、区块链相关
        },
        {
            id: 10,
            name: '区块链',
            icon: '',
            companies: 456,
            output: 680,
            completeness: 65,
            growth: 38.5,
            category: '新兴数字产业',
            districts: ['海淀区', '朝阳区'],
            keyCompanies: ['趣链科技', '长安链', '百度超级链', '蚂蚁链'],
            upstream: ['底层协议', '共识算法', '加密技术'],
            midstream: ['联盟链平台', '智能合约', '跨链技术'],
            downstream: ['供应链金融', '数字资产', '电子存证', '数据确权'],
            weakness: ['性能扩展', '隐私保护'],
            opportunity: ['数据要素确权', '数字货币应用', 'Web3.0'],
            relatedIndustries: [4, 7, 9, 11] // 与大数据、软件服务、数字内容、网络安全相关
        },
        {
            id: 11,
            name: '网络安全',
            icon: '',
            companies: 892,
            output: 1240,
            completeness: 80,
            growth: 27.3,
            category: '核心数字产业',
            districts: ['海淀区', '朝阳区', '丰台区'],
            keyCompanies: ['奇安信', '天融信', '启明星辰', '绿盟科技'],
            upstream: ['安全芯片', '加密算法', '安全协议'],
            midstream: ['安全产品', '安全服务', '态势感知'],
            downstream: ['安全运营', '应急响应', '安全咨询'],
            weakness: ['高级持续威胁检测', '零信任架构'],
            opportunity: ['数据安全', 'AI安全', '供应链安全'],
            relatedIndustries: [1, 3, 7, 10] // 与集成电路、云计算、软件服务、区块链相关
        }
    ],

    // 各区产业分布
    districtIndustry: {
        '海淀区': { primary: 'AI', companies: 4567, output: 8960 },
        '朝阳区': { primary: '数字经济', companies: 3821, output: 6840 },
        '大兴区': { primary: '生物医药', companies: 1456, output: 3250 },
        '顺义区': { primary: '汽车制造', companies: 867, output: 2890 },
        '昌平区': { primary: '医药健康', companies: 1234, output: 2560 }
    }
};

// 企业数据
const enterpriseData = {
    list: [
        {
            id: 1001,
            name: '北京芯动科技有限公司',
            type: '集成电路',
            district: '海淀区',
            registeredCapital: 50000,
            revenue: 85000,
            tax: 8500,
            employees: 560,
            foundedYear: 2018,
            credit: 'AAA',
            innovation: 4.8,
            growth: 'high',
            stage: '成长期',
            patents: 156,
            products: ['AI芯片', '边缘计算芯片'],
            riskLevel: 'low'
        },
        {
            id: 1002,
            name: '北京智云科技股份有限公司',
            type: '人工智能',
            district: '朝阳区',
            registeredCapital: 30000,
            revenue: 42000,
            tax: 4200,
            employees: 320,
            foundedYear: 2019,
            credit: 'AA',
            innovation: 4.5,
            growth: 'high',
            stage: '成长期',
            patents: 89,
            products: ['计算机视觉', '自然语言处理'],
            riskLevel: 'low'
        },
        {
            id: 1003,
            name: '北京绿能动力有限公司',
            type: '新能源汽车',
            district: '大兴区',
            registeredCapital: 120000,
            revenue: 256000,
            tax: 25600,
            employees: 1850,
            foundedYear: 2015,
            credit: 'AAA',
            innovation: 4.6,
            growth: 'high',
            stage: '成熟期',
            patents: 342,
            products: ['动力电池', '电驱系统'],
            riskLevel: 'low'
        },
        {
            id: 1004,
            name: '北京康瑞生物医药有限公司',
            type: '生物医药',
            district: '昌平区',
            registeredCapital: 80000,
            revenue: 68000,
            tax: 6800,
            employees: 420,
            foundedYear: 2016,
            credit: 'AAA',
            innovation: 4.9,
            growth: 'medium',
            stage: '成长期',
            patents: 234,
            products: ['创新药', '生物制剂'],
            riskLevel: 'medium'
        },
        {
            id: 1005,
            name: '北京启明创投科技有限公司',
            type: '人工智能',
            district: '海淀区',
            registeredCapital: 5000,
            revenue: 3800,
            tax: 380,
            employees: 45,
            foundedYear: 2022,
            credit: 'A',
            innovation: 4.2,
            growth: 'high',
            stage: '初创期',
            patents: 12,
            products: ['智能客服', '数据分析平台'],
            riskLevel: 'medium'
        }
    ],

    // 企业增长趋势
    growthTrend: [
        { year: 2019, count: 12450, revenue: 156000 },
        { year: 2020, count: 13280, revenue: 178000 },
        { year: 2021, count: 14156, revenue: 205000 },
        { year: 2022, count: 14923, revenue: 235000 },
        { year: 2023, count: 15847, revenue: 268000 }
    ]
};

// 政策数据
const policyData = {
    categories: [
        '财政补贴', '税收优惠', '人才引进', '融资支持',
        '土地优惠', '科技创新', '市场开拓', '产业扶持'
    ],

    list: [
        {
            id: 'P001',
            title: '北京市集成电路产业发展支持政策',
            level: '市级',
            type: '财政补贴',
            industry: ['集成电路'],
            stage: ['成长期', '成熟期'],
            amount: '最高5000万元',
            conditions: ['年营收超过5000万', '研发投入占比超过10%', '拥有自主知识产权'],
            benefits: ['研发补贴30%', '设备补贴20%', '人才奖励'],
            effectiveDate: '2024-01-01',
            expireDate: '2026-12-31',
            applyProcess: ['线上申报', '材料审核', '专家评审', '公示发放'],
            documents: ['营业执照', '财务报表', '研发投入证明', '知识产权证书']
        },
        {
            id: 'P002',
            title: '北京市人工智能产业创新发展资金',
            level: '市级',
            type: '财政补贴',
            industry: ['人工智能'],
            stage: ['初创期', '成长期'],
            amount: '最高3000万元',
            conditions: ['拥有AI核心技术', '年营收超过1000万', '团队规模超过30人'],
            benefits: ['算力补贴40%', '数据采购补贴50%', '场景应用奖励'],
            effectiveDate: '2024-01-01',
            expireDate: '2025-12-31',
            applyProcess: ['线上申报', '技术评估', '现场核查', '公示发放'],
            documents: ['技术方案', '财务报表', '应用案例', '团队简历']
        },
        {
            id: 'P003',
            title: '北京市新能源汽车产业链强链补链支持政策',
            level: '市级',
            type: '产业扶持',
            industry: ['新能源汽车'],
            stage: ['成长期', '成熟期'],
            amount: '最高1亿元',
            conditions: ['产业链关键环节', '年产值超过5亿', '带动就业超过500人'],
            benefits: ['项目补贴25%', '土地优惠', '三年税收返还'],
            effectiveDate: '2024-01-01',
            expireDate: '2028-12-31',
            applyProcess: ['项目申报', '评审论证', '签约立项', '分期拨付'],
            documents: ['项目可研报告', '产业链分析', '用地方案', '就业计划']
        },
        {
            id: 'P004',
            title: '中关村高端人才引进计划',
            level: '市级',
            type: '人才引进',
            industry: ['全行业'],
            stage: ['全阶段'],
            amount: '最高300万元/人',
            conditions: ['硕士以上学历', '5年以上工作经验', '核心技术岗位'],
            benefits: ['安家费100万', '购房补贴200万', '子女入学', '配偶就业'],
            effectiveDate: '2024-01-01',
            expireDate: '2027-12-31',
            applyProcess: ['单位申报', '资格审核', '面试评估', '公示发放'],
            documents: ['学历证明', '工作履历', '技能证书', '推荐信']
        },
        {
            id: 'P005',
            title: '北京市科技型中小企业研发费用加计扣除',
            level: '市级',
            type: '税收优惠',
            industry: ['全行业'],
            stage: ['初创期', '成长期'],
            amount: '研发费用100%加计扣除',
            conditions: ['科技型中小企业认定', '研发费用占比超过3%'],
            benefits: ['研发费用100%加计扣除', '亏损结转延长至10年'],
            effectiveDate: '2024-01-01',
            expireDate: '2025-12-31',
            applyProcess: ['企业自行申报', '税务审核'],
            documents: ['研发费用明细', '项目立项书', '科技型企业证书']
        },
        {
            id: 'P006',
            title: '北京市创业担保贷款政策',
            level: '市级',
            type: '融资支持',
            industry: ['全行业'],
            stage: ['初创期'],
            amount: '最高300万元',
            conditions: ['注册3年以内', '吸纳就业达到一定比例'],
            benefits: ['低息贷款', '政府贴息', '担保免费'],
            effectiveDate: '2024-01-01',
            expireDate: '2026-12-31',
            applyProcess: ['银行申请', '担保机构审核', '放款'],
            documents: ['营业执照', '创业计划书', '就业证明']
        }
    ],

    // 政策统计
    stats: {
        total: 1245,
        national: 156,
        provincial: 342,
        municipal: 747,
        byType: {
            '财政补贴': 356,
            '税收优惠': 289,
            '人才引进': 178,
            '融资支持': 145,
            '土地优惠': 89,
            '科技创新': 98,
            '市场开拓': 56,
            '产业扶持': 34
        }
    }
};

// 招商数据
const investmentData = {
    projects: [
        {
            id: 'INV001',
            name: '某AI芯片独角兽企业',
            industry: '集成电路',
            district: '海淀区',
            investAmount: 500000,
            expectedOutput: 1200000,
            expectedTax: 120000,
            expectedJobs: 800,
            stage: '谈判中',
            progress: 65,
            startDate: '2024-03-15',
            expectedLandingDate: '2024-12-01',
            policyPackage: ['P001', 'P004'],
            keyPerson: '李明',
            contacts: 12,
            risks: ['竞争对手挖角', '产业配套不完善'],
            advantages: ['技术领先', '团队优秀', '市场前景好']
        },
        {
            id: 'INV002',
            name: '某生物医药创新企业',
            industry: '生物医药',
            district: '昌平区',
            investAmount: 280000,
            expectedOutput: 680000,
            expectedTax: 68000,
            expectedJobs: 450,
            stage: '已签约',
            progress: 85,
            startDate: '2024-01-10',
            expectedLandingDate: '2024-09-01',
            policyPackage: ['P003', 'P004', 'P006'],
            keyPerson: '张华',
            contacts: 28,
            risks: ['临床试验周期长'],
            advantages: ['创新药储备丰富', '研发实力强']
        },
        {
            id: 'INV003',
            name: '某新能源动力电池项目',
            industry: '新能源汽车',
            district: '大兴区',
            investAmount: 800000,
            expectedOutput: 2500000,
            expectedTax: 250000,
            expectedJobs: 1500,
            stage: '已落地',
            progress: 100,
            startDate: '2023-09-01',
            landingDate: '2024-06-01',
            policyPackage: ['P003', 'P005'],
            keyPerson: '王强',
            contacts: 45,
            risks: [],
            advantages: ['补链关键环节', '龙头企业', '产业集聚效应']
        }
    ],

    // 招商统计
    stats: {
        total: 368,
        negotiating: 125,
        signed: 186,
        landed: 57,
        totalInvestment: 1456000,
        expectedOutput: 3890000,
        expectedTax: 389000,
        expectedJobs: 28600
    },

    // 招商线索
    leads: [
        {
            id: 'LEAD001',
            companyName: '某智能驾驶独角兽',
            industry: '人工智能',
            source: '产业链分析-强链补链',
            priority: 'high',
            score: 92,
            matchedPolicies: ['P002', 'P004'],
            reason: '填补本市智能驾驶产业链空白，技术国内领先',
            contactStatus: '待联系',
            addDate: '2024-06-15'
        },
        {
            id: 'LEAD002',
            companyName: '某第三代半导体企业',
            industry: '集成电路',
            source: '产业链分析-补链',
            priority: 'high',
            score: 88,
            matchedPolicies: ['P001', 'P005'],
            reason: '碳化硅材料龙头，补齐产业链上游',
            contactStatus: '初步接触',
            addDate: '2024-06-20'
        },
        {
            id: 'LEAD003',
            companyName: '某工业互联网平台',
            industry: '工业互联网',
            source: '展会推介',
            priority: 'medium',
            score: 75,
            matchedPolicies: ['P005', 'P006'],
            reason: '助力传统制造业数字化转型',
            contactStatus: '待评估',
            addDate: '2024-06-25'
        }
    ]
};

// 招后服务数据
const serviceData = {
    // 金融产品
    financialProducts: [
        {
            id: 'FIN001',
            name: '科技创新贷',
            bank: '北京银行',
            type: '信用贷款',
            amount: '最高1000万',
            rate: '3.85%',
            term: '1-3年',
            targetStage: ['初创期', '成长期'],
            targetIndustry: ['人工智能', '集成电路', '生物医药'],
            features: ['无抵押', '纯信用', '快速审批'],
            requirements: ['科技型中小企业认定', '年营收500万以上', '有稳定现金流']
        },
        {
            id: 'FIN002',
            name: '知识产权质押贷',
            bank: '工商银行北京分行',
            type: '质押贷款',
            amount: '最高5000万',
            rate: '4.35%',
            term: '1-5年',
            targetStage: ['成长期', '成熟期'],
            targetIndustry: ['全行业'],
            features: ['专利质押', '利率优惠', '长期限'],
            requirements: ['拥有有效发明专利', '专利价值评估', '专利权清晰']
        },
        {
            id: 'FIN003',
            name: '上市培育贷',
            bank: '中国银行北京分行',
            type: '综合授信',
            amount: '最高2亿',
            rate: '4.65%',
            term: '3-5年',
            targetStage: ['成熟期', '上市期'],
            targetIndustry: ['全行业'],
            features: ['综合授信', '投贷联动', '上市辅导'],
            requirements: ['进入上市辅导期', '连续盈利', '规范治理']
        },
        {
            id: 'FIN004',
            name: '供应链金融',
            bank: '建设银行北京分行',
            type: '应收账款融资',
            amount: '最高应收账款80%',
            rate: '4.15%',
            term: '1年以内',
            targetStage: ['成长期', '成熟期'],
            targetIndustry: ['制造业', '贸易'],
            features: ['快速放款', '循环使用', '线上操作'],
            requirements: ['与核心企业有稳定业务', '应收账款真实', '核心企业确权']
        }
    ],

    // 企业服务案例
    cases: [
        {
            id: 'CASE001',
            companyName: '北京启明创投科技有限公司',
            companyId: 1005,
            serviceType: '金融服务',
            service: '科技创新贷',
            amount: 500,
            date: '2024-05-15',
            status: '已发放',
            effect: '解决企业流动资金需求，支持研发投入'
        },
        {
            id: 'CASE002',
            companyName: '北京芯动科技有限公司',
            companyId: 1001,
            serviceType: '人才服务',
            service: '高端人才引进',
            amount: 5,
            date: '2024-04-20',
            status: '已完成',
            effect: '引进5名芯片设计专家，提升研发能力'
        },
        {
            id: 'CASE003',
            companyName: '北京康瑞生物医药有限公司',
            companyId: 1004,
            serviceType: '产业对接',
            service: '产学研合作',
            amount: 0,
            date: '2024-06-01',
            status: '进行中',
            effect: '与清华大学医学院建立合作，共建研发中心'
        }
    ],

    // 服务统计
    stats: {
        totalCompanies: 15847,
        servedCompanies: 8934,
        financialServices: 3456,
        financialAmount: 125600,
        talentServices: 2340,
        talentCount: 8920,
        industryConnections: 1890,
        warningCases: 234
    }
};

// 数据大屏数据
const dashboardData = {
    realtime: {
        onlineCompanies: 12456,
        todayVisits: 3456,
        todayApplications: 89,
        systemLoad: 45
    },

    map: {
        districts: [
            { name: '海淀区', value: 4567, lat: 39.9588, lng: 116.2979 },
            { name: '朝阳区', value: 3821, lat: 39.9212, lng: 116.4435 },
            { name: '东城区', value: 1234, lat: 39.9289, lng: 116.4161 },
            { name: '西城区', value: 1456, lat: 39.9125, lng: 116.3662 },
            { name: '丰台区', value: 987, lat: 39.8585, lng: 116.2867 },
            { name: '大兴区', value: 1456, lat: 39.7266, lng: 116.3416 },
            { name: '昌平区', value: 1234, lat: 40.2204, lng: 116.2317 },
            { name: '顺义区', value: 867, lat: 40.1303, lng: 116.6544 }
        ]
    }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        beijingDistricts,
        industryData,
        enterpriseData,
        policyData,
        investmentData,
        serviceData,
        dashboardData
    };
}