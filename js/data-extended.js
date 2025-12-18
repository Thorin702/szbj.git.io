// 扩展模拟数据 - 用于生成更多企业、政策等数据

// 生成企业名称
function generateEnterprises() {
    const prefixes = ['北京', '中关村', '亦庄', '海淀', '朝阳', '大兴', '昌平', '顺义'];
    const middles = ['智能', '创新', '科技', '数字', '云', '网络', '芯', '新能源', '生物', '医药', '通信', '软件', '硬件'];
    const suffixes = ['科技有限公司', '技术股份有限公司', '电子有限公司', '信息技术有限公司', '智能科技有限公司'];

    const industries = ['集成电路', '人工智能', '新能源汽车', '生物医药', '5G通信', '工业互联网'];
    const stages = ['初创期', '成长期', '成熟期', '上市期'];
    const growths = ['high', 'medium', 'low'];

    const enterprises = [];

    for (let i = 0; i < 50; i++) {
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const middle = middles[Math.floor(Math.random() * middles.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        const industry = industries[Math.floor(Math.random() * industries.length)];
        const district = beijingDistricts[Math.floor(Math.random() * beijingDistricts.length)];
        const stage = stages[Math.floor(Math.random() * stages.length)];
        const growth = growths[Math.floor(Math.random() * growths.length)];

        const baseRevenue = Math.floor(Math.random() * 200000) + 1000;
        const tax = Math.floor(baseRevenue * 0.1);
        const capital = Math.floor(baseRevenue * 0.6);
        const employees = Math.floor(Math.random() * 2000) + 10;
        const foundedYear = 2024 - Math.floor(Math.random() * 15);
        const patents = Math.floor(Math.random() * 500);

        enterprises.push({
            id: 1006 + i,
            name: `${prefix}${middle}${suffix}`,
            type: industry,
            district: district,
            registeredCapital: capital,
            revenue: baseRevenue,
            tax: tax,
            employees: employees,
            foundedYear: foundedYear,
            credit: ['AAA', 'AA', 'A', 'BBB'][Math.floor(Math.random() * 4)],
            innovation: (Math.random() * 2 + 3).toFixed(1),
            growth: growth,
            stage: stage,
            patents: patents,
            products: [],
            riskLevel: ['low', 'low', 'low', 'medium', 'high'][Math.floor(Math.random() * 5)]
        });
    }

    return enterprises;
}

// 生成招商项目
function generateInvestmentProjects() {
    const projectTypes = [
        '人工智能研发中心', '芯片制造基地', '新能源汽车工厂', '生物医药研发基地',
        '5G创新实验室', '工业互联网平台', '数据中心', '智能制造产业园',
        '科技孵化器', '产业加速器', '研发总部', '区域总部', '生产基地'
    ];

    const stages = ['意向接洽', '谈判中', '已签约', '建设中', '已落地'];
    const industries = ['集成电路', '人工智能', '新能源汽车', '生物医药', '5G通信', '工业互联网'];

    const projects = [];

    for (let i = 0; i < 30; i++) {
        const projectType = projectTypes[Math.floor(Math.random() * projectTypes.length)];
        const industry = industries[Math.floor(Math.random() * industries.length)];
        const district = beijingDistricts[Math.floor(Math.random() * beijingDistricts.length)];
        const stage = stages[Math.floor(Math.random() * stages.length)];

        const investAmount = Math.floor(Math.random() * 1000000) + 10000;
        const expectedOutput = investAmount * (2 + Math.random() * 2);
        const expectedTax = expectedOutput * 0.1;
        const expectedJobs = Math.floor(Math.random() * 2000) + 100;

        let progress = 0;
        if (stage === '意向接洽') progress = Math.floor(Math.random() * 30);
        else if (stage === '谈判中') progress = 30 + Math.floor(Math.random() * 30);
        else if (stage === '已签约') progress = 60 + Math.floor(Math.random() * 20);
        else if (stage === '建设中') progress = 80 + Math.floor(Math.random() * 15);
        else progress = 100;

        projects.push({
            id: `INV${String(i + 4).padStart(3, '0')}`,
            name: `某${industry}${projectType}`,
            industry: industry,
            district: district,
            investAmount: investAmount,
            expectedOutput: Math.floor(expectedOutput),
            expectedTax: Math.floor(expectedTax),
            expectedJobs: expectedJobs,
            stage: stage,
            progress: progress,
            startDate: `2024-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
            expectedLandingDate: `2025-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-01`,
            policyPackage: [],
            keyPerson: ['李明', '张华', '王强', '刘洋', '陈静'][Math.floor(Math.random() * 5)],
            contacts: Math.floor(Math.random() * 50),
            risks: [],
            advantages: []
        });
    }

    return projects;
}

// 生成更多政策
function generatePolicies() {
    const policyTypes = ['财政补贴', '税收优惠', '人才引进', '融资支持', '土地优惠', '科技创新', '市场开拓', '产业扶持'];
    const levels = ['国家级', '市级', '区级'];
    const industries = ['全行业', '集成电路', '人工智能', '新能源汽车', '生物医药', '5G通信', '工业互联网'];
    const stages = ['全阶段', '初创期', '成长期', '成熟期', '上市期'];

    const policies = [];

    for (let i = 0; i < 30; i++) {
        const type = policyTypes[Math.floor(Math.random() * policyTypes.length)];
        const level = levels[Math.floor(Math.random() * levels.length)];
        const industry = industries[Math.floor(Math.random() * industries.length)];
        const stage = stages[Math.floor(Math.random() * stages.length)];

        const amount = Math.floor(Math.random() * 5000) + 100;

        policies.push({
            id: `P${String(i + 7).padStart(3, '0')}`,
            title: `北京市${industry === '全行业' ? '' : industry}${type}政策${i + 7}`,
            level: level,
            type: type,
            industry: [industry],
            stage: [stage],
            amount: `最高${amount}万元`,
            conditions: [
                `年营收达到${Math.floor(amount * 0.1)}万元`,
                `研发投入占比${Math.floor(Math.random() * 10 + 5)}%以上`,
                `拥有核心知识产权${Math.floor(Math.random() * 10 + 1)}项`
            ],
            benefits: [
                `项目补贴${Math.floor(Math.random() * 30 + 10)}%`,
                `税收减免${Math.floor(Math.random() * 3 + 1)}年`,
                `人才奖励最高${Math.floor(Math.random() * 50 + 10)}万元`
            ],
            effectiveDate: '2024-01-01',
            expireDate: `202${Math.floor(Math.random() * 3 + 5)}-12-31`,
            applyProcess: ['线上申报', '材料审核', '专家评审', '公示发放'],
            documents: ['营业执照', '财务报表', '项目材料']
        });
    }

    return policies;
}

// 导出生成函数
if (typeof window !== 'undefined') {
    window.generateEnterprises = generateEnterprises;
    window.generateInvestmentProjects = generateInvestmentProjects;
    window.generatePolicies = generatePolicies;
}