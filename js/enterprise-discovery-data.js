// 企业自动识别模块 - 数据结构

// DeepSeek API配置
const deepseekConfig = {
    apiKey: 'sk-c5c58f63fd1041ee80dfab6bb5cf3b0c',
    apiUrl: 'https://api.deepseek.com/v1/chat/completions',
    model: 'deepseek-chat'
};

// 监测的数据源类型
const dataSourceTypes = {
    news: {
        name: '新闻资讯',
        icon: '',
        color: '#0ea5e9',
        keywords: ['融资', '投资', '并购', '上市', '合作', '发布', '推出']
    },
    financing: {
        name: '融资事件',
        icon: '',
        color: '#059669',
        keywords: ['A轮', 'B轮', 'C轮', 'Pre-A', '天使轮', '战略投资', 'IPO']
    },
    patent: {
        name: '专利申请',
        icon: '',
        color: '#7c3aed',
        keywords: ['发明专利', '实用新型', '外观设计', '专利授权']
    },
    ma: {
        name: '商业并购',
        icon: '',
        color: '#ea580c',
        keywords: ['收购', '并购', '重组', '股权转让', '资产收购']
    }
};

// 企业潜在信号类型
const potentialSignals = {
    relocation: {
        name: '迁址意向',
        icon: '',
        color: '#0238C1',
        keywords: ['搬迁', '迁址', '新址', '总部迁移', '办公地迁移'],
        weight: 0.35
    },
    expansion: {
        name: '扩产计划',
        icon: '',
        color: '#059669',
        keywords: ['扩产', '扩建', '新增产能', '产线建设', '工厂建设', '投资建厂'],
        weight: 0.35
    },
    newBranch: {
        name: '开设分部',
        icon: '',
        color: '#ea580c',
        keywords: ['分公司', '子公司', '研发中心', '新基地', '区域中心', '分部'],
        weight: 0.30
    }
};

// 模拟的企业发现数据（实际应通过后台API获取）
const discoveredEnterprises = [
    {
        id: 'disc_001',
        companyName: '深圳云智算科技有限公司',
        industry: '人工智能 - 算力平台',
        foundDate: '2021-03-15',
        registeredCapital: '10000万元',
        location: '深圳市南山区',

        discoverySource: {
            type: 'financing',
            title: '云智算完成3亿元B轮融资，红杉中国领投',
            date: '2024-11-20',
            url: 'https://example.com/news/001',
            summary: '云智算科技宣布完成3亿元B轮融资，本轮融资由红杉中国领投，经纬创投、IDG资本跟投。公司将加大在算力调度平台和AI训练集群的研发投入。'
        },

        signals: [
            {
                type: 'expansion',
                confidence: 0.85,
                evidence: '公司CEO在采访中透露，将在北京建设超大规模AI训练中心',
                source: '新闻报道',
                date: '2024-11-22'
            },
            {
                type: 'newBranch',
                confidence: 0.78,
                evidence: '计划在北京设立华北区域总部，负责京津冀市场拓展',
                source: '企业公告',
                date: '2024-11-25'
            }
        ],

        highlights: [
            '最新融资：B轮 3亿元（2024-11）',
            '业务增长：年营收增长280%',
            '🏆 行业地位：国内AI算力调度TOP10',
            '👥 团队规模：350人（研发占70%）'
        ],

        aiAnalysis: {
            growthPotential: '高',
            industryFit: '人工智能产业高度契合，算力平台是北京市重点发展方向',
            recommendation: '强烈建议主动接触，该企业正处于快速扩张期，北京设立分部意向明确',
            priority: '高'
        }
    },
    {
        id: 'disc_002',
        companyName: '杭州新芯半导体技术有限公司',
        industry: '集成电路 - 芯片设计',
        foundDate: '2019-08-10',
        registeredCapital: '25000万元',
        location: '杭州市滨江区',

        discoverySource: {
            type: 'patent',
            title: '新芯半导体获批12项发明专利授权',
            date: '2024-11-18',
            url: 'https://example.com/patent/002',
            summary: '国家知识产权局公告显示，新芯半导体12项集成电路设计发明专利获得授权，涵盖先进工艺节点下的低功耗设计技术。'
        },

        signals: [
            {
                type: 'relocation',
                confidence: 0.72,
                evidence: '公司正在寻找北京适合的办公场地，计划将研发中心迁至北京',
                source: '招聘信息',
                date: '2024-11-15'
            },
            {
                type: 'expansion',
                confidence: 0.68,
                evidence: '招聘信息显示大量招聘北京地区芯片设计工程师',
                source: '招聘网站',
                date: '2024-11-10'
            }
        ],

        highlights: [
            '📜 知识产权：累计专利128项，发明专利占85%',
            '客户群体：服务华为、小米、OPPO等头部企业',
            '📈 业务增长：连续3年营收增长超50%',
            '技术优势：5nm工艺低功耗设计领先'
        ],

        aiAnalysis: {
            growthPotential: '高',
            industryFit: '集成电路产业高度契合，芯片设计是北京优势领域',
            recommendation: '建议重点关注，该企业技术实力强，有迁址北京意向',
            priority: '中'
        }
    },
    {
        id: 'disc_003',
        companyName: '上海生命科学医疗器械公司',
        industry: '生物医药 - 医疗器械',
        foundDate: '2018-06-20',
        registeredCapital: '18000万元',
        location: '上海市浦东新区',

        discoverySource: {
            type: 'ma',
            title: '生命科学收购北京某医疗AI公司51%股权',
            date: '2024-11-28',
            url: 'https://example.com/ma/003',
            summary: '生命科学医疗器械宣布收购北京一家医疗影像AI分析公司51%股权，交易金额5000万元，加速布局智能诊断领域。'
        },

        signals: [
            {
                type: 'newBranch',
                confidence: 0.88,
                evidence: '收购公告称将在北京建立智能医疗研发中心',
                source: '上市公司公告',
                date: '2024-11-28'
            },
            {
                type: 'expansion',
                confidence: 0.65,
                evidence: '计划投资2亿元在北京建设医疗器械生产基地',
                source: '媒体报道',
                date: '2024-11-30'
            }
        ],

        highlights: [
            '🤝 战略并购：收购北京医疗AI公司',
            '💼 资本实力：Pre-IPO阶段，估值超10亿',
            '🏥 客户资源：合作医院超500家',
            '研发投入：年度研发投入占比22%'
        ],

        aiAnalysis: {
            growthPotential: '中高',
            industryFit: '生物医药产业契合，医疗器械+AI是重点方向',
            recommendation: '建议跟进接触，企业已在北京有并购布局，进一步扩展可能性大',
            priority: '中'
        }
    },
    {
        id: 'disc_004',
        companyName: '成都绿能动力科技股份公司',
        industry: '新能源 - 储能系统',
        foundDate: '2017-04-12',
        registeredCapital: '35000万元',
        location: '成都市高新区',

        discoverySource: {
            type: 'news',
            title: '绿能动力与国家电网达成战略合作',
            date: '2024-12-01',
            url: 'https://example.com/news/004',
            summary: '绿能动力科技与国家电网签署战略合作协议，将在储能电站建设、智能电网调度等领域展开深度合作，首期合同金额超8亿元。'
        },

        signals: [
            {
                type: 'newBranch',
                confidence: 0.82,
                evidence: '合作协议提及将在北京设立华北运营中心',
                source: '合作公告',
                date: '2024-12-01'
            },
            {
                type: 'expansion',
                confidence: 0.75,
                evidence: '公司发布北京地区大规模招聘计划，涉及100+岗位',
                source: '招聘公告',
                date: '2024-12-02'
            }
        ],

        highlights: [
            '🤝 重大合作：与国家电网战略合作8亿+',
            '⚡ 技术实力：拥有储能系统核心专利56项',
            '市场份额：国内储能系统市场占有率第6',
            '🌱 成长性：近两年营收增长超100%'
        ],

        aiAnalysis: {
            growthPotential: '高',
            industryFit: '新能源产业高度契合，储能是北京重点支持方向',
            recommendation: '强烈建议主动接触，企业正值高速成长期，北京布局意向强烈',
            priority: '高'
        }
    },
    {
        id: 'disc_005',
        companyName: '苏州智造工业互联网平台',
        industry: '工业互联网 - 数字孪生',
        foundDate: '2020-01-08',
        registeredCapital: '8000万元',
        location: '苏州市工业园区',

        discoverySource: {
            type: 'financing',
            title: '智造平台获工信部工业互联网试点示范项目',
            date: '2024-11-25',
            url: 'https://example.com/news/005',
            summary: '工信部公布2024年工业互联网试点示范项目名单，智造平台的"数字孪生智能工厂解决方案"成功入选。'
        },

        signals: [
            {
                type: 'relocation',
                confidence: 0.60,
                evidence: '公司高管在行业论坛表示考虑将总部迁至北京',
                source: '会议发言',
                date: '2024-11-28'
            },
            {
                type: 'newBranch',
                confidence: 0.70,
                evidence: '正在洽谈在北京设立华北技术中心',
                source: '行业消息',
                date: '2024-11-26'
            }
        ],

        highlights: [
            '🏆 国家认可：工信部试点示范项目',
            '💼 服务客户：中国商飞、三一重工等50+企业',
            '🔧 核心产品：数字孪生平台SaaS化',
            '👨‍💼 团队背景：核心团队来自西门子、ABB'
        ],

        aiAnalysis: {
            growthPotential: '中高',
            industryFit: '工业互联网产业契合，数字孪生是发展重点',
            recommendation: '建议持续关注，企业有迁址意向但尚不明确',
            priority: '中'
        }
    },
    {
        id: 'disc_006',
        companyName: '广州数据要素流通公司',
        industry: '数字经济 - 数据交易',
        foundDate: '2022-09-15',
        registeredCapital: '15000万元',
        location: '广州市天河区',

        discoverySource: {
            type: 'news',
            title: '数据要素流通完成Pre-A轮2亿融资',
            date: '2024-12-03',
            url: 'https://example.com/news/006',
            summary: '数据要素流通平台宣布完成2亿元Pre-A轮融资，由经纬创投领投。公司专注于隐私计算和数据资产化，已接入20+数据交易所。'
        },

        signals: [
            {
                type: 'newBranch',
                confidence: 0.90,
                evidence: '融资公告明确表示将在北京设立全国运营总部',
                source: '融资公告',
                date: '2024-12-03'
            },
            {
                type: 'expansion',
                confidence: 0.85,
                evidence: '计划在北京大规模招聘，目标团队规模200人',
                source: '内部邮件',
                date: '2024-12-04'
            }
        ],

        highlights: [
            '最新融资：Pre-A轮 2亿元',
            '🔐 核心技术：隐私计算、联邦学习',
            '🌐 平台接入：20+数据交易所',
            '📈 交易规模：累计交易额超5亿元'
        ],

        aiAnalysis: {
            growthPotential: '高',
            industryFit: '数字经济产业高度契合，数据要素是北京战略重点',
            recommendation: '强烈建议优先接触，企业明确将在北京设立总部，契合度极高',
            priority: '高'
        }
    }
];

// 时间段筛选配置
const timeRangeOptions = [
    { value: 'week', label: '最近一周' },
    { value: 'month', label: '最近一月' },
    { value: 'quarter', label: '最近三月' },
    { value: 'half-year', label: '最近半年' },
    { value: 'year', label: '最近一年' },
    { value: 'custom', label: '自定义时间' }
];

// 产业分类筛选
const industryFilters = [
    { value: 'all', label: '全部产业' },
    { value: 'ai', label: '人工智能' },
    { value: 'ic', label: '集成电路' },
    { value: 'bio', label: '生物医药' },
    { value: 'newenergy', label: '新能源' },
    { value: 'iiot', label: '工业互联网' },
    { value: 'digital', label: '数字经济' }
];

// 信号类型筛选
const signalFilters = [
    { value: 'all', label: '全部信号' },
    { value: 'relocation', label: '迁址意向' },
    { value: 'expansion', label: '扩产计划' },
    { value: 'newBranch', label: '开设分部' }
];

// 优先级筛选
const priorityFilters = [
    { value: 'all', label: '全部优先级' },
    { value: 'high', label: '高优先级' },
    { value: 'medium', label: '中优先级' },
    { value: 'low', label: '低优先级' }
];
