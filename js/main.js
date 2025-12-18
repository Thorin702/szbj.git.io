// 主要交互逻辑

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('北京市数字产业发展支撑平台加载完成');

    // 初始化总览页面的第一个图表（产业分布）
    setTimeout(() => {
        initIndustryChart();
    }, 100);

    // 添加数字滚动效果
    animateNumbers();
});


// 页面切换
function showSection(sectionId) {
    // 隐藏所有页面
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // 显示目标页面
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }

    // 更新导航菜单激活状态
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // 根据不同页面加载相应内容
    switch(sectionId) {
        case 'overview':
            // 总览页面已经在页面加载时初始化
            break;
        case 'pre-investment':
            loadPreInvestmentPage();
            break;
        case 'mid-investment':
            loadMidInvestmentPage();
            break;
        case 'post-investment':
            loadPostInvestmentPage();
            break;
        case 'data-center':
            loadDataCenterPage();
            break;
    }
}

// Tab切换
function switchTab(tabId) {
    // 隐藏所有tab内容
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // 移除所有tab的激活状态
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // 显示目标tab内容
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // 激活对应的tab按钮
    event.target.classList.add('active');

    // 根据tab类型初始化相应的图表
    setTimeout(() => {
        if (tabId === 'growth-tab') {
            initGrowthChart();
        } else if (tabId === 'innovation-tab') {
            initInnovationChart();
        } else if (tabId === 'industry-tab') {
            initIndustryChart();
        } else if (tabId === 'dataflow-tab') {
            initDataflowChart();
        }
    }, 100);
}

// 强链补链子标签切换
function switchChainTab(tabId) {
    // 只选择pre-chain-analysis下的直接子div[id^="chain-"]
    document.querySelectorAll('#pre-chain-analysis > div[id^="chain-"]').forEach(content => {
        content.classList.remove('active');
    });

    // 移除所有子tab的激活状态
    document.querySelectorAll('#pre-chain-analysis > .tabs .tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // 显示目标tab内容
    const targetTab = document.getElementById('chain-' + tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // 激活对应的tab按钮
    event.target.classList.add('active');
}

// 金融服务子标签切换
function switchFinancialTab(tabId) {
    // 只选择post-financial下的直接子div[id^="financial-"]
    document.querySelectorAll('#post-financial > div[id^="financial-"]').forEach(content => {
        content.classList.remove('active');
    });

    // 移除所有子tab的激活状态
    document.querySelectorAll('#post-financial > .tabs .tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // 显示目标tab内容
    const targetTab = document.getElementById('financial-' + tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // 激活对应的tab按钮
    event.target.classList.add('active');
}

// 人才服务子标签切换
function switchTalentTab(tabId) {
    // 只选择post-talent下的直接子div[id^="talent-"]
    document.querySelectorAll('#post-talent > div[id^="talent-"]').forEach(content => {
        content.classList.remove('active');
    });

    // 移除所有子tab的激活状态
    document.querySelectorAll('#post-talent > .tabs .tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // 显示目标tab内容
    const targetTab = document.getElementById('talent-' + tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // 激活对应的tab按钮
    event.target.classList.add('active');
}

// 产业对接子标签切换
function switchIndustryTab(tabId) {
    // 只选择post-industry下的直接子div[id^="industry-"]
    document.querySelectorAll('#post-industry > div[id^="industry-"]').forEach(content => {
        content.classList.remove('active');
    });

    // 移除所有子tab的激活状态
    document.querySelectorAll('#post-industry > .tabs .tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // 显示目标tab内容
    const targetTab = document.getElementById('industry-' + tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // 激活对应的tab按钮
    event.target.classList.add('active');
}

// 数策通子标签切换
function switchPolicyTab(tabId) {
    // 只选择data-center下的直接子div[id^="policy-tab-"]
    document.querySelectorAll('#data-center > .content-card > div[id^="policy-tab-"]').forEach(content => {
        content.classList.remove('active');
    });

    // 移除所有子tab的激活状态
    document.querySelectorAll('#data-center > .content-card > .tabs .tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // 显示目标tab内容
    const targetTab = document.getElementById('policy-tab-' + tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // 激活对应的tab按钮
    event.target.classList.add('active');
}

// 数字滚动动画
function animateNumbers() {
    const statValues = document.querySelectorAll('.stat-value');

    statValues.forEach(element => {
        const targetValue = element.textContent;
        const numberMatch = targetValue.match(/[\d,]+/);

        if (numberMatch) {
            const finalNumber = parseInt(numberMatch[0].replace(/,/g, ''));
            const suffix = targetValue.replace(numberMatch[0], '');
            let currentNumber = 0;
            const increment = finalNumber / 50;
            const duration = 1000;
            const stepTime = duration / 50;

            element.textContent = '0' + suffix;

            const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    clearInterval(timer);
                    element.textContent = finalNumber.toLocaleString() + suffix;
                } else {
                    element.textContent = Math.floor(currentNumber).toLocaleString() + suffix;
                }
            }, stepTime);
        }
    });
}

// 刷新数据
function refreshData() {
    const button = event.target;
    button.innerHTML = '<span class="loading"></span> 刷新中...';
    button.disabled = true;

    setTimeout(() => {
        button.innerHTML = '刷新数据';
        button.disabled = false;
        showNotification('数据已更新', 'success');

        // 重新初始化图表
        initIndustryChart();
        initGrowthChart();
        initInnovationChart();
    }, 1500);
}

// 显示产业详情
function showIndustryDetail() {
    showModal('重点产业链详情', `
        <div class="grid-2">
            <div class="info-item">
                <div class="info-label">产业链总数</div>
                <div class="info-value">28条</div>
            </div>
            <div class="info-item">
                <div class="info-label">完整度大于90%</div>
                <div class="info-value">8条</div>
            </div>
            <div class="info-item">
                <div class="info-label">重点培育</div>
                <div class="info-value">12条</div>
            </div>
            <div class="info-item">
                <div class="info-label">新增产业链</div>
                <div class="info-value">3条</div>
            </div>
        </div>
        <div style="margin-top: 20px;">
            <h4 style="margin-bottom: 10px;">重点发展方向</h4>
            <div class="mini-card">
                <strong>强链工程：</strong>集成电路、人工智能、生物医药等优势产业
            </div>
            <div class="mini-card">
                <strong>补链工程：</strong>新能源汽车关键零部件、高端医疗器械等
            </div>
            <div class="mini-card">
                <strong>延链工程：</strong>工业互联网、智能制造、数字经济等新兴领域
            </div>
        </div>
    `);
}

// 显示企业详情
function showEnterpriseDetail() {
    showModal('规上企业统计', `
        <div class="grid-3">
            <div class="info-item">
                <div class="info-label">规上企业总数</div>
                <div class="info-value">15,847家</div>
            </div>
            <div class="info-item">
                <div class="info-label">上市企业</div>
                <div class="info-value">423家</div>
            </div>
            <div class="info-item">
                <div class="info-label">独角兽企业</div>
                <div class="info-value">102家</div>
            </div>
            <div class="info-item">
                <div class="info-label">高新技术企业</div>
                <div class="info-value">8,934家</div>
            </div>
            <div class="info-item">
                <div class="info-label">专精特新</div>
                <div class="info-value">1,567家</div>
            </div>
            <div class="info-item">
                <div class="info-label">瞪羚企业</div>
                <div class="info-value">645家</div>
            </div>
        </div>
        <div style="margin-top: 20px;">
            <h4 style="margin-bottom: 10px;">企业分布热力图</h4>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <span class="badge badge-success">海淀区: 4,567家</span>
                <span class="badge badge-info">朝阳区: 3,821家</span>
                <span class="badge badge-warning">大兴区: 1,456家</span>
                <span class="badge badge-info">昌平区: 1,234家</span>
                <span class="badge badge-warning">顺义区: 867家</span>
            </div>
        </div>
    `);
}

// 显示政策详情
function showPolicyDetail() {
    showModal('产业政策库', `
        <div class="grid-2">
            <div class="info-item">
                <div class="info-label">政策总数</div>
                <div class="info-value">1,245条</div>
            </div>
            <div class="info-item">
                <div class="info-label">本月新增</div>
                <div class="info-value">156条</div>
            </div>
        </div>
        <div style="margin-top: 20px;">
            <h4 style="margin-bottom: 10px;">政策分类统计</h4>
            <table>
                <thead>
                    <tr>
                        <th>政策类型</th>
                        <th>数量</th>
                        <th>占比</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>财政补贴</td>
                        <td>356条</td>
                        <td><span class="badge badge-success">28.6%</span></td>
                    </tr>
                    <tr>
                        <td>税收优惠</td>
                        <td>289条</td>
                        <td><span class="badge badge-info">23.2%</span></td>
                    </tr>
                    <tr>
                        <td>人才引进</td>
                        <td>178条</td>
                        <td><span class="badge badge-warning">14.3%</span></td>
                    </tr>
                    <tr>
                        <td>融资支持</td>
                        <td>145条</td>
                        <td><span class="badge badge-info">11.6%</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `);
}

// 显示招商详情
function showInvestmentDetail() {
    showModal('招商项目统计（本年度）', `
        <div class="grid-2">
            <div class="info-item">
                <div class="info-label">招商项目总数</div>
                <div class="info-value">368个</div>
            </div>
            <div class="info-item">
                <div class="info-label">已落地项目</div>
                <div class="info-value">57个</div>
            </div>
            <div class="info-item">
                <div class="info-label">投资总额</div>
                <div class="info-value">1,456亿元</div>
            </div>
            <div class="info-item">
                <div class="info-label">预期产值</div>
                <div class="info-value">3,890亿元</div>
            </div>
        </div>
        <div style="margin-top: 20px;">
            <h4 style="margin-bottom: 10px;">项目进度分布</h4>
            <div class="mini-card">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span>谈判中</span>
                    <span><strong>125个 (34%)</strong></span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 34%;"></div>
                </div>
            </div>
            <div class="mini-card">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span>已签约</span>
                    <span><strong>186个 (51%)</strong></span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 51%;"></div>
                </div>
            </div>
            <div class="mini-card">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span>已落地</span>
                    <span><strong>57个 (15%)</strong></span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 15%;"></div>
                </div>
            </div>
        </div>
    `);
}

// 显示所有产业链
function showAllChains() {
    let html = '<div class="card-grid">';

    industryData.chains.forEach(chain => {
        const badgeClass = chain.completeness >= 85 ? 'badge-success' : 'badge-warning';
        html += `
            <div class="mini-card" onclick="showChainDetail('${chain.name}')">
                <div class="mini-card-title">${chain.name}产业链</div>
                <div class="mini-card-content">
                    <div style="margin-bottom: 8px;">企业数量: <strong>${chain.companies}家</strong></div>
                    <div style="margin-bottom: 8px;">产值规模: <strong>${chain.output}亿元</strong></div>
                    <div style="margin-bottom: 8px;">同比增长: <strong class="trend-up">+${chain.growth}%</strong></div>
                    <div>完整度: <span class="badge ${badgeClass}">${chain.completeness}%</span></div>
                </div>
            </div>
        `;
    });

    html += '</div>';

    showModal('全部产业链图谱', html);
}

// 显示产业链详情
function showChainDetail(chainName) {
    const chain = industryData.chains.find(c => c.name === chainName);
    if (!chain) return;

    const badgeClass = chain.completeness >= 85 ? 'badge-success' : 'badge-warning';

    const html = `
        <div class="grid-2" style="margin-bottom: 20px;">
            <div class="info-item">
                <div class="info-label">企业数量</div>
                <div class="info-value">${chain.companies}家</div>
            </div>
            <div class="info-item">
                <div class="info-label">产值规模</div>
                <div class="info-value">${chain.output}亿元</div>
            </div>
            <div class="info-item">
                <div class="info-label">同比增长</div>
                <div class="info-value" style="color: #48bb78;">+${chain.growth}%</div>
            </div>
            <div class="info-item">
                <div class="info-label">产业链完整度</div>
                <div class="info-value"><span class="badge ${badgeClass}">${chain.completeness}%</span></div>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 10px; color: #2d3748;">主要分布区域</h4>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                ${chain.districts.map(d => `<span class="badge badge-info">${d}</span>`).join('')}
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 10px; color: #2d3748;">重点企业</h4>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                ${chain.keyCompanies.map(c => `<span class="badge badge-success">${c}</span>`).join('')}
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 10px; color: #2d3748;">产业链结构</h4>
            <div class="mini-card">
                <div style="font-weight: 600; color: #4facfe; margin-bottom: 8px;">上游环节</div>
                <div>${chain.upstream.join('、')}</div>
            </div>
            <div class="mini-card">
                <div style="font-weight: 600; color: #667eea; margin-bottom: 8px;">中游环节</div>
                <div>${chain.midstream.join('、')}</div>
            </div>
            <div class="mini-card">
                <div style="font-weight: 600; color: #f093fb; margin-bottom: 8px;">下游环节</div>
                <div>${chain.downstream.join('、')}</div>
            </div>
        </div>

        <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 10px; color: #2d3748;">薄弱环节（补链机会）</h4>
            <div class="mini-card" style="border-left-color: #f56565;">
                ${chain.weakness.map(w => `<span class="badge badge-danger">${w}</span>`).join(' ')}
            </div>
        </div>

        <div>
            <h4 style="margin-bottom: 10px; color: #2d3748;">发展机遇</h4>
            <div class="mini-card" style="border-left-color: #48bb78;">
                ${chain.opportunity.map(o => `<span class="badge badge-success">${o}</span>`).join(' ')}
            </div>
        </div>

        <div style="margin-top: 20px;">
            <div id="chainChart" style="width: 100%; height: 400px;"></div>
        </div>
    `;

    showModal(`${chain.name}产业链详情`, html);

    // 延迟初始化图表，确保DOM已渲染
    setTimeout(() => {
        initChainChart(chainName);
    }, 100);
}

// 模态框显示
function showModal(title, content) {
    const modal = document.getElementById('detailModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.classList.add('active');
}

// 关闭模态框
function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('active');
}

// 点击模态框外部关闭
window.onclick = function(event) {
    const modal = document.getElementById('detailModal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
}

// 通知提示
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 15px 20px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        animation: slideInRight 0.3s;
        border-left: 4px solid ${type === 'success' ? '#48bb78' : '#4299e1'};
    `;

    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 20px;">${type === 'success' ? '✓' : 'ℹ'}</span>
            <span style="color: #2d3748;">${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// 加载招前分析页面
function loadPreInvestmentPage() {
    const container = document.getElementById('pre-investment');
    if (container.children.length > 0) return; // 已加载

    container.innerHTML = `
        <div class="content-card">
            <div class="card-header">
                <h2 class="card-title">招前智能分析</h2>
            </div>

            <div class="tabs">
                <button class="tab active" onclick="switchPreTab('industry-analysis')">产业链AI动态监测</button>
                <button class="tab" onclick="switchPreTab('enterprise-discovery')">企业自动识别</button>
                <button class="tab" onclick="switchPreTab('chain-analysis')">强链补链</button>
            </div>

            <div id="pre-industry-analysis" class="tab-content active">
                <!-- 操作按钮区 -->
                <div style="display: flex; justify-content: flex-end; gap: 10px; margin-bottom: 20px;">
                    <button class="btn btn-secondary" onclick="showIndustryGraphFullscreen()">全屏查看</button>
                    <button class="btn btn-secondary" onclick="exportIndustryData()">导出数据</button>
                    <button class="btn btn-primary" onclick="generateAutomatedReport()">生成AI分析报告</button>
                </div>

                <!-- 数字产业图谱 -->
                <div class="content-card" style="margin-bottom: 25px;">
                    <div class="card-header">
                        <h3 class="card-title">北京市数字产业图谱</h3>
                        <div style="color: #718096; font-size: 13px;">点击产业节点查看详细分析</div>
                    </div>
                    <div id="industryKnowledgeGraph" style="width: 100%; height: 700px; background: #fafafa; border-radius: 8px;"></div>
                </div>

                <!-- 产业景气度监测 -->
                <div class="content-card">
                    <div class="card-header">
                        <h3 class="card-title">产业景气度监测</h3>
                        <div style="color: #718096; font-size: 13px;">基于招聘、融资、舆情、政策四维度综合评估</div>
                    </div>
                    <div id="prosperityMonitorGrid" style="margin-top: 20px;"></div>
                </div>
            </div>

            <div id="pre-enterprise-discovery" class="tab-content">
                <!-- 筛选和搜索区域 -->
                <div style="background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 20px;">
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 15px;">
                        <!-- 时间范围 -->
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #4a5568; font-size: 13px;">时间范围</label>
                            <select id="discoveryTimeRange" onchange="applyDiscoveryFilters()" style="width: 100%; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px; font-size: 14px;">
                                ${timeRangeOptions.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
                            </select>
                        </div>

                        <!-- 产业筛选 -->
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #4a5568; font-size: 13px;">产业分类</label>
                            <select id="discoveryIndustry" onchange="applyDiscoveryFilters()" style="width: 100%; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px; font-size: 14px;">
                                ${industryFilters.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
                            </select>
                        </div>

                        <!-- 信号类型 -->
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #4a5568; font-size: 13px;">信号类型</label>
                            <select id="discoverySignal" onchange="applyDiscoveryFilters()" style="width: 100%; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px; font-size: 14px;">
                                ${signalFilters.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
                            </select>
                        </div>

                        <!-- 优先级 -->
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #4a5568; font-size: 13px;">优先级</label>
                            <select id="discoveryPriority" onchange="applyDiscoveryFilters()" style="width: 100%; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px; font-size: 14px;">
                                ${priorityFilters.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
                            </select>
                        </div>
                    </div>

                    <!-- 搜索框和操作按钮 -->
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <div class="search-box" style="flex: 1;">
                            <input type="text" id="discoveryKeyword" class="search-input" placeholder="搜索企业名称、行业、关键词..." onkeyup="applyDiscoveryFilters()">
                            <span class="search-icon">🔍</span>
                        </div>
                        <button class="btn btn-primary" onclick="runAutoDiscovery()" style="white-space: nowrap; padding: 12px 24px;">
                            🔄 启动自动搜寻
                        </button>
                        <button class="btn btn-secondary" onclick="exportDiscoveryResults()" style="white-space: nowrap;">
                            📥 导出结果
                        </button>
                    </div>
                </div>

                <!-- 统计卡片 -->
                <div class="stats-grid" style="margin-bottom: 20px;">
                    <div class="stat-card">
                        <div class="stat-title">已识别企业</div>
                        <div class="stat-value" id="discoveredCount">156</div>
                        <div class="stat-trend trend-up"><span>↑ 本周+23</span></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-title">强信号企业</div>
                        <div class="stat-value" id="strongSignalCount">23</div>
                        <div class="stat-trend"><span>评分≥8.0</span></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-title">高优先级</div>
                        <div class="stat-value" id="highPriorityCount">45</div>
                        <div class="stat-trend trend-up"><span>建议主动接触</span></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-title">监测数据源</div>
                        <div class="stat-value">15,847</div>
                        <div class="stat-trend"><span>持续更新中</span></div>
                    </div>
                </div>

                <!-- 企业列表 -->
                <div id="discoveredEnterpriseList">
                    ${renderDiscoveredEnterprises(discoveredEnterprises)}
                </div>
            </div>

            <div id="pre-chain-analysis" class="tab-content">
                <!-- 操作按钮区 -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px;">
                    <h3 style="margin: 0; color: #2d3748;">强链补链智能分析</h3>
                    <div style="display: flex; gap: 10px;">
                        <button class="btn btn-secondary" onclick="exportChainAnalysis()">导出分析报告</button>
                        <button class="btn btn-primary" onclick="generateChainPlan()">生成招商计划</button>
                    </div>
                </div>

                <!-- 产业链健康度总览 -->
                <div class="stats-grid" style="margin-bottom: 25px;">
                    <div class="stat-card" style="border-left: 4px solid #48bb78;">
                        <div class="stat-title">产业链完整度</div>
                        <div class="stat-value" style="color: #48bb78;">76.8%</div>
                        <div class="stat-trend trend-up"><span>同比提升 8.3%</span></div>
                    </div>
                    <div class="stat-card" style="border-left: 4px solid #f6ad55;">
                        <div class="stat-title">薄弱环节</div>
                        <div class="stat-value" style="color: #f6ad55;">23</div>
                        <div class="stat-trend"><span>涉及11个产业链</span></div>
                    </div>
                    <div class="stat-card" style="border-left: 4px solid #0238C1;">
                        <div class="stat-title">在招商企业</div>
                        <div class="stat-value" style="color: #0238C1;">187</div>
                        <div class="stat-trend trend-up"><span>意向企业 34家</span></div>
                    </div>
                    <div class="stat-card" style="border-left: 4px solid #9F7AEA;">
                        <div class="stat-title">强链项目</div>
                        <div class="stat-value" style="color: #9F7AEA;">42</div>
                        <div class="stat-trend"><span>总投资 186亿</span></div>
                    </div>
                </div>

                <!-- 子功能标签 -->
                <div class="tabs" style="margin-bottom: 20px;">
                    <button class="tab active" onclick="switchChainTab('weak-links')">薄弱环节识别</button>
                    <button class="tab" onclick="switchChainTab('target-companies')">补链招商目标</button>
                    <button class="tab" onclick="switchChainTab('strong-projects')">强链项目跟踪</button>
                </div>

                <!-- 薄弱环节识别 -->
                <div id="chain-weak-links" class="tab-content active">
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">产业链薄弱环节智能识别</h3>
                            <div style="color: #718096; font-size: 13px;">基于产业链图谱分析，识别缺失或薄弱环节</div>
                        </div>
                        <div id="weakLinksList" style="margin-top: 20px;"></div>
                    </div>
                </div>

                <!-- 补链招商目标 -->
                <div id="chain-target-companies" class="tab-content">
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">补链招商目标企业库</h3>
                            <div style="color: #718096; font-size: 13px;">针对薄弱环节，精准匹配目标招商企业</div>
                        </div>

                        <!-- 筛选器 -->
                        <div style="display: flex; gap: 15px; margin: 20px 0; padding: 15px; background: #f7fafc; border-radius: 8px;">
                            <select id="chainTargetIndustry" onchange="filterChainTargets()" style="flex: 1; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                <option value="">全部产业链</option>
                                <option value="集成电路">集成电路</option>
                                <option value="人工智能">人工智能</option>
                                <option value="工业互联网">工业互联网</option>
                                <option value="新能源汽车">新能源汽车</option>
                                <option value="高端装备">高端装备</option>
                            </select>
                            <select id="chainTargetSegment" onchange="filterChainTargets()" style="flex: 1; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                <option value="">全部环节</option>
                                <option value="上游">上游（原材料/设备）</option>
                                <option value="中游">中游（制造/加工）</option>
                                <option value="下游">下游（应用/服务）</option>
                            </select>
                            <select id="chainTargetPriority" onchange="filterChainTargets()" style="flex: 1; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                <option value="">全部优先级</option>
                                <option value="高">高优先级</option>
                                <option value="中">中优先级</option>
                                <option value="低">低优先级</option>
                            </select>
                        </div>

                        <div id="chainTargetsList"></div>
                    </div>
                </div>

                <!-- 强链项目跟踪 -->
                <div id="chain-strong-projects" class="tab-content">
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">强链重点项目进展跟踪</h3>
                            <div style="color: #718096; font-size: 13px;">跟踪强链项目落地情况和产业带动效应</div>
                        </div>
                        <div id="strongChainProjects" style="margin-top: 20px;"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 初始化产业链AI动态监测（默认加载领域总览）
    setTimeout(() => {
        renderIndustryFields();
    }, 100);

    // 初始化企业自动识别列表
    setTimeout(() => {
        renderDiscoveredEnterprises(discoveredEnterprises);
    }, 100);

    // 初始化产业知识图谱
    setTimeout(() => {
        initIndustryKnowledgeGraph();
        renderProsperityMonitor();
    }, 100);

    // 初始化强链补链分析
    setTimeout(() => {
        renderWeakLinks();
        renderChainTargets();
        renderStrongChainProjects();
    }, 100);
}

// 加载招中匹配页面
function loadMidInvestmentPage() {
    const container = document.getElementById('mid-investment');
    if (container.children.length > 0) return;

    container.innerHTML = `
        <div class="content-card">
            <div class="card-header">
                <h2 class="card-title">产业契合度智能匹配</h2>
                <div class="card-actions">
                    <button class="btn btn-secondary" onclick="showParkIndustryProfile()">查看园区产业画像</button>
                </div>
            </div>

            <div class="tabs">
                <button class="tab active" onclick="switchMidTab('industry-match')">智能匹配</button>
                <button class="tab" onclick="switchMidTab('batch-analysis')">批量分析</button>
                <button class="tab" onclick="switchMidTab('investment-projects')">招商项目</button>
            </div>

            <div id="mid-industry-match" class="tab-content active">
                <div class="mini-card" style="background: #fff; border: 2px solid #e2e8f0;">
                    <h4 style="margin-bottom: 15px; color: #2d3748;">选择或搜索企业</h4>

                    <div style="margin-bottom: 15px;">
                        <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d3748;">搜索企业</label>
                        <input type="text" id="enterpriseSearchInput" placeholder="输入企业名称搜索..."
                            style="width: 100%; padding: 12px; border: 2px solid #e2e8f0; border-radius: 6px; font-size: 14px;"
                            oninput="searchEnterpriseForIndustryMatch(this.value)">
                        <div id="enterpriseSearchResults" style="margin-top: 10px; max-height: 200px; overflow-y: auto;"></div>
                    </div>

                    <div style="margin: 20px 0; border-top: 1px solid #e2e8f0;"></div>

                    <div>
                        <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d3748;">或从列表选择企业</label>
                        <select id="enterpriseSelect" onchange="matchIndustryCompatibility(this.value)"
                            style="width: 100%; padding: 12px; border: 2px solid #e2e8f0; border-radius: 6px; font-size: 14px;">
                            <option value="">-- 请选择企业 --</option>
                            ${enterpriseProfiles.map(ent => `<option value="${ent.id}">${ent.name} (${ent.businessScope.main})</option>`).join('')}
                        </select>
                    </div>

                    <button class="btn btn-primary" onclick="quickMatchDemo()" style="width: 100%; margin-top: 15px;">
                        快速演示：评估"北京智芯科技"
                    </button>
                </div>

                <div id="industryMatchResult" style="margin-top: 20px;"></div>
            </div>

            <div id="mid-batch-analysis" class="tab-content">
                <h3 style="margin-bottom: 20px;">批量企业契合度分析</h3>

                <div class="mini-card" style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);">
                    <h4>上传企业名单进行批量分析</h4>
                    <p style="margin: 10px 0; color: #4a5568; font-size: 14px;">
                        支持Excel格式，自动抓取企业公开数据，批量评估产业契合度
                    </p>
                    <input type="file" accept=".xlsx,.xls,.csv" style="margin: 10px 0;">
                    <button class="btn btn-primary" onclick="batchAnalyzeEnterprises()" style="width: 100%; margin-top: 10px;">
                        开始批量分析
                    </button>
                </div>

                <div id="batchAnalysisResult" style="margin-top: 20px;">
                    <h4 style="margin-bottom: 15px;">快速预览：示例分析结果</h4>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>企业名称</th>
                                    <th>主营业务</th>
                                    <th>契合度评分</th>
                                    <th>评级</th>
                                    <th>优质标签</th>
                                    <th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${enterpriseProfiles.slice(0, 5).map(ent => {
                                    const result = calculateIndustryMatch(ent);
                                    return `
                                        <tr>
                                            <td><strong>${ent.name}</strong></td>
                                            <td>${ent.businessScope.main}</td>
                                            <td>
                                                <span style="font-size: 20px; font-weight: 700; color: ${result.grade.color};">
                                                    ${result.totalScore}
                                                </span>
                                            </td>
                                            <td>
                                                <span class="badge" style="background: ${result.grade.color}20; color: ${result.grade.color};">
                                                    ${result.grade.grade} - ${result.grade.label}
                                                </span>
                                            </td>
                                            <td>
                                                ${result.qualityTags.slice(0, 2).map(tag =>
                                                    `<span class="badge" style="background: ${tag.color}20; color: ${tag.color}; margin-right: 4px;">
                                                        ${tag.label}
                                                    </span>`
                                                ).join('')}
                                                ${result.qualityTags.length > 2 ? `<span class="badge badge-info">+${result.qualityTags.length - 2}</span>` : ''}
                                            </td>
                                            <td>
                                                <button class="btn btn-secondary" onclick="showMatchDetail('${ent.id}')">详情</button>
                                            </td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div id="mid-investment-projects" class="tab-content">
                <h3 style="margin-bottom: 20px;">在谈招商项目</h3>

                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>项目名称</th>
                                <th>行业</th>
                                <th>投资额（万）</th>
                                <th>进度</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${investmentData.projects.map(proj => `
                                <tr>
                                    <td><strong>${proj.name}</strong></td>
                                    <td>${proj.industry}</td>
                                    <td>${proj.investAmount.toLocaleString()}</td>
                                    <td>
                                        <div class="progress-bar">
                                            <div class="progress-fill" style="width: ${proj.progress}%;"></div>
                                        </div>
                                        <div style="font-size: 12px; margin-top: 4px;">${proj.progress}%</div>
                                    </td>
                                    <td><span class="badge ${proj.stage === '已落地' ? 'badge-success' : proj.stage === '已签约' ? 'badge-info' : 'badge-warning'}">${proj.stage}</span></td>
                                    <td><button class="btn btn-secondary" onclick="showProjectDetail('${proj.id}')">详情</button></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// 加载招后服务页面
function loadPostInvestmentPage() {
    const container = document.getElementById('post-investment');
    if (container.children.length > 0) return;

    container.innerHTML = `
        <div class="content-card">
            <div class="card-header">
                <h2 class="card-title">招后全程服务</h2>
            </div>

            <div class="tabs">
                <button class="tab active" onclick="switchPostTab('financial')">金融服务</button>
                <button class="tab" onclick="switchPostTab('talent')">人才服务</button>
                <button class="tab" onclick="switchPostTab('industry')">产业对接</button>
            </div>

            <div id="post-financial" class="tab-content active">
                <!-- 金融服务总览 -->
                <div class="stats-grid" style="margin-bottom: 25px;">
                    <div class="stat-card" style="border-left: 4px solid #0238C1;">
                        <div class="stat-title">累计融资金额</div>
                        <div class="stat-value" style="color: #0238C1;">52.3亿</div>
                        <div class="stat-trend trend-up"><span>服务企业 436家</span></div>
                    </div>
                    <div class="stat-card" style="border-left: 4px solid #48bb78;">
                        <div class="stat-title">产业基金规模</div>
                        <div class="stat-value" style="color: #48bb78;">128亿</div>
                        <div class="stat-trend"><span>已投项目 67个</span></div>
                    </div>
                    <div class="stat-card" style="border-left: 4px solid #FF7A25;">
                        <div class="stat-title">本月对接</div>
                        <div class="stat-value" style="color: #FF7A25;">23</div>
                        <div class="stat-trend trend-up"><span>意向金额 8.6亿</span></div>
                    </div>
                    <div class="stat-card" style="border-left: 4px solid #9F7AEA;">
                        <div class="stat-title">合作机构</div>
                        <div class="stat-value" style="color: #9F7AEA;">156</div>
                        <div class="stat-trend"><span>银行/基金/担保</span></div>
                    </div>
                </div>

                <!-- 金融服务子标签 -->
                <div class="tabs" style="margin-bottom: 20px;">
                    <button class="tab active" onclick="switchFinancialTab('funds')">产业基金</button>
                    <button class="tab" onclick="switchFinancialTab('products')">融资产品</button>
                    <button class="tab" onclick="switchFinancialTab('opportunities')">投资机会</button>
                </div>

                <!-- 产业基金 -->
                <div id="financial-funds" class="tab-content active">
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">数字产业投资基金</h3>
                            <div style="color: #718096; font-size: 13px;">政府引导基金+社会资本，支持数字产业发展</div>
                        </div>
                        <div id="industryFundsList" style="margin-top: 20px;"></div>
                    </div>
                </div>

                <!-- 融资产品 -->
                <div id="financial-products" class="tab-content">
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">融资需求智能对接</h3>
                            <div style="color: #718096; font-size: 13px;">根据企业发展阶段和融资需求，智能匹配金融产品</div>
                        </div>

                        <!-- 金融产品分类 -->
                        <div style="display: flex; gap: 10px; margin: 20px 0;">
                            <button class="btn btn-secondary" onclick="filterFinancialProducts('all')" id="financial-filter-all">全部产品</button>
                            <button class="btn btn-secondary" onclick="filterFinancialProducts('loan')" id="financial-filter-loan">信贷产品</button>
                            <button class="btn btn-secondary" onclick="filterFinancialProducts('equity')" id="financial-filter-equity">股权投资</button>
                            <button class="btn btn-secondary" onclick="filterFinancialProducts('bond')" id="financial-filter-bond">债券融资</button>
                            <button class="btn btn-secondary" onclick="filterFinancialProducts('guarantee')" id="financial-filter-guarantee">担保服务</button>
                        </div>

                        <div id="financialProductsList"></div>
                    </div>
                </div>

                <!-- 投资机会 -->
                <div id="financial-opportunities" class="tab-content">
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">数字产业投资机会</h3>
                            <div style="color: #718096; font-size: 13px;">优质项目推荐，连接投资机构与成长企业</div>
                        </div>
                        <div id="investmentOpportunities" style="margin-top: 20px;"></div>
                    </div>
                </div>
            </div>

            <div id="post-talent" class="tab-content">
                <!-- 人才服务总览 -->
                <div class="stats-grid" style="margin-bottom: 25px;">
                    <div class="stat-card" style="border-left: 4px solid #0238C1;">
                        <div class="stat-title">人才库总量</div>
                        <div class="stat-value" style="color: #0238C1;">38.6万</div>
                        <div class="stat-trend trend-up"><span>数字产业人才</span></div>
                    </div>
                    <div class="stat-card" style="border-left: 4px solid #48bb78;">
                        <div class="stat-title">本年引进</div>
                        <div class="stat-value" style="color: #48bb78;">2,847</div>
                        <div class="stat-trend trend-up"><span>高层次人才 436人</span></div>
                    </div>
                    <div class="stat-card" style="border-left: 4px solid #FF7A25;">
                        <div class="stat-title">培训人次</div>
                        <div class="stat-value" style="color: #FF7A25;">15,623</div>
                        <div class="stat-trend"><span>本年累计</span></div>
                    </div>
                    <div class="stat-card" style="border-left: 4px solid #9F7AEA;">
                        <div class="stat-title">人才补贴</div>
                        <div class="stat-value" style="color: #9F7AEA;">3.2亿</div>
                        <div class="stat-trend"><span>累计发放</span></div>
                    </div>
                </div>

                <!-- 人才服务子标签 -->
                <div class="tabs" style="margin-bottom: 20px;">
                    <button class="tab active" onclick="switchTalentTab('demand')">需求分析</button>
                    <button class="tab" onclick="switchTalentTab('recruitment')">人才引进</button>
                    <button class="tab" onclick="switchTalentTab('training')">培训体系</button>
                </div>

                <!-- 需求分析 -->
                <div id="talent-demand" class="tab-content active">
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">数字产业人才需求分析</h3>
                            <div style="color: #718096; font-size: 13px;">基于产业发展和企业需求，智能分析人才缺口</div>
                        </div>
                        <div id="talentDemandAnalysis" style="margin-top: 20px;"></div>
                    </div>
                </div>

                <!-- 人才引进 -->
                <div id="talent-recruitment" class="tab-content">
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">高层次人才引进计划</h3>
                            <div style="color: #718096; font-size: 13px;">面向海内外引进数字产业领军人才和创新团队</div>
                        </div>
                        <div id="talentRecruitmentPrograms" style="margin-top: 20px;"></div>
                    </div>
                </div>

                <!-- 培训体系 -->
                <div id="talent-training" class="tab-content">
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">数字产业人才培训体系</h3>
                            <div style="color: #718096; font-size: 13px;">分层分类培训，提升人才专业能力</div>
                        </div>

                        <div style="display: flex; gap: 10px; margin: 20px 0;">
                            <button class="btn btn-secondary" onclick="filterTrainingPrograms('all')" id="training-filter-all">全部课程</button>
                            <button class="btn btn-secondary" onclick="filterTrainingPrograms('tech')" id="training-filter-tech">技术类</button>
                            <button class="btn btn-secondary" onclick="filterTrainingPrograms('management')" id="training-filter-management">管理类</button>
                            <button class="btn btn-secondary" onclick="filterTrainingPrograms('industry')" id="training-filter-industry">行业类</button>
                        </div>

                        <div id="trainingProgramsList"></div>
                    </div>
                </div>
            </div>

            <div id="post-industry" class="tab-content">
                <!-- 产业对接总览 -->
                <div class="stats-grid" style="margin-bottom: 25px;">
                    <div class="stat-card" style="border-left: 4px solid #0238C1;">
                        <div class="stat-title">对接企业</div>
                        <div class="stat-value" style="color: #0238C1;">3,452</div>
                        <div class="stat-trend trend-up"><span>覆盖11条产业链</span></div>
                    </div>
                    <div class="stat-card" style="border-left: 4px solid #48bb78;">
                        <div class="stat-title">成功对接</div>
                        <div class="stat-value" style="color: #48bb78;">1,286</div>
                        <div class="stat-trend"><span>成功率 37.2%</span></div>
                    </div>
                    <div class="stat-card" style="border-left: 4px solid #FF7A25;">
                        <div class="stat-title">对接活动</div>
                        <div class="stat-value" style="color: #FF7A25;">156</div>
                        <div class="stat-trend"><span>本年举办</span></div>
                    </div>
                    <div class="stat-card" style="border-left: 4px solid #9F7AEA;">
                        <div class="stat-title">合作金额</div>
                        <div class="stat-value" style="color: #9F7AEA;">68.5亿</div>
                        <div class="stat-trend trend-up"><span>累计达成</span></div>
                    </div>
                </div>

                <!-- 产业对接子标签 -->
                <div class="tabs" style="margin-bottom: 20px;">
                    <button class="tab active" onclick="switchIndustryTab('supply-demand')">供需对接</button>
                    <button class="tab" onclick="switchIndustryTab('tech-transfer')">技术转移</button>
                    <button class="tab" onclick="switchIndustryTab('market')">市场拓展</button>
                </div>

                <!-- 供需对接 -->
                <div id="industry-supply-demand" class="tab-content active">
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">上下游产业链智能对接</h3>
                            <div style="color: #718096; font-size: 13px;">基于产业链图谱，智能匹配供需双方</div>
                        </div>

                        <!-- 对接搜索 -->
                        <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, rgba(2, 56, 193, 0.05) 0%, rgba(255, 122, 37, 0.05) 100%); border-radius: 8px;">
                            <div style="display: flex; gap: 15px; margin-bottom: 15px;">
                                <select id="matchingIndustry" style="flex: 1; padding: 12px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                    <option value="">选择产业链</option>
                                    <option value="集成电路">集成电路</option>
                                    <option value="人工智能">人工智能</option>
                                    <option value="工业互联网">工业互联网</option>
                                    <option value="新能源汽车">新能源汽车</option>
                                    <option value="生物医药">生物医药</option>
                                </select>
                                <select id="matchingType" style="flex: 1; padding: 12px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                    <option value="supply">我要采购（找上游）</option>
                                    <option value="demand">我要销售（找下游）</option>
                                </select>
                                <button class="btn btn-primary" onclick="intelligentMatching()" style="padding: 12px 40px;">智能匹配</button>
                            </div>
                            <input type="text" id="matchingKeyword" placeholder="输入企业名称、产品或技术关键词..."
                                style="width: 100%; padding: 12px; border: 2px solid #e2e8f0; border-radius: 6px;">
                        </div>

                        <div id="supplyChainMatching"></div>
                    </div>
                </div>

                <!-- 技术转移 -->
                <div id="industry-tech-transfer" class="tab-content">
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">技术成果对接</h3>
                            <div style="color: #718096; font-size: 13px;">高校科研成果与企业技术需求对接</div>
                        </div>
                        <div id="techTransferList" style="margin-top: 20px;"></div>
                    </div>
                </div>

                <!-- 市场拓展 -->
                <div id="industry-market" class="tab-content">
                    <div class="content-card">
                        <div class="card-header">
                            <h3 class="card-title">市场拓展对接</h3>
                            <div style="color: #718096; font-size: 13px;">帮助企业开拓应用场景和市场渠道</div>
                        </div>
                        <div id="marketOpportunities" style="margin-top: 20px;"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 初始化招后服务内容
    setTimeout(() => {
        if (typeof initPostFinancialService === 'function') {
            initPostFinancialService();
        }
    }, 100);
}

// 加载数据中台页面
// 加载数策通页面 - 北京市数字产业政策汇聚发布平台
function loadDataCenterPage() {
    const container = document.getElementById('data-center');
    if (container.children.length > 0) return;

    container.innerHTML = `
        <div class="content-card">
            <!-- 政策统计看板 -->
            <div class="stats-grid" style="margin-bottom: 30px;">
                <div class="stat-card">
                    <div class="stat-title">政策总数</div>
                    <div class="stat-value" style="color: #0238C1;">1,531</div>
                    <div class="stat-trend trend-up"><span>本月新增 36条</span></div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">市级政策</div>
                    <div class="stat-value" style="color: #FF7A25;">747</div>
                    <div class="stat-trend"><span>占比 48.8%</span></div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">区级政策</div>
                    <div class="stat-value" style="color: #43e97b;">528</div>
                    <div class="stat-trend"><span>覆盖16区</span></div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">国家级政策</div>
                    <div class="stat-value" style="color: #9F7AEA;">256</div>
                    <div class="stat-trend trend-up"><span>本月新增 8条</span></div>
                </div>
            </div>

            <!-- 子功能标签 -->
            <div class="tabs" style="margin-bottom: 20px;">
                <button class="tab active" onclick="switchPolicyTab('search')">政策搜索</button>
                <button class="tab" onclick="switchPolicyTab('ai-interpretation')">AI智能解读</button>
                <button class="tab" onclick="switchPolicyTab('impact-analysis')">影响分析</button>
                <button class="tab" onclick="switchPolicyTab('application-guide')">申报指导</button>
            </div>

            <!-- 政策搜索标签 -->
            <div id="policy-tab-search" class="tab-content active">
                <!-- 政策搜索与筛选 -->
                <div class="mini-card" style="background: linear-gradient(135deg, rgba(2, 56, 193, 0.05) 0%, rgba(255, 122, 37, 0.05) 100%); border: 2px solid #0238C1; margin-bottom: 25px;">
                    <h3 style="margin: 0 0 20px 0; color: #2d3748; display: flex; align-items: center; gap: 10px;">
                        <span style="background: #0238C1; color: white; width: 32px; height: 32px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;">🔍</span>
                        政策搜索与筛选
                    </h3>

                    <!-- 搜索框 -->
                    <div style="margin-bottom: 20px;">
                        <div style="display: flex; gap: 10px;">
                            <input type="text" id="policySearchMainInput" placeholder="输入政策名称、关键词、行业等进行搜索..."
                                style="flex: 1; padding: 14px 20px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 15px;"
                                onkeyup="searchPoliciesMain(this.value)">
                            <button class="btn btn-primary" onclick="searchPoliciesMain(document.getElementById('policySearchMainInput').value)" style="padding: 14px 30px; font-size: 15px;">
                                搜索
                            </button>
                        </div>
                    </div>

                    <!-- 筛选条件 -->
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px;">
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d3748;">政策级别</label>
                            <select id="policyLevelFilter" onchange="filterPoliciesMain()"
                                style="width: 100%; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                <option value="">全部级别</option>
                                <option value="国家级">国家级</option>
                                <option value="市级">市级</option>
                                <option value="区级">区级</option>
                            </select>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d3748;">政策类型</label>
                            <select id="policyTypeFilter" onchange="filterPoliciesMain()"
                                style="width: 100%; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                <option value="">全部类型</option>
                                ${Array.from(new Set(policyData.list.map(p => p.type))).map(type =>
                                    `<option value="${type}">${type}</option>`
                                ).join('')}
                            </select>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d3748;">适用行业</label>
                            <select id="policyIndustryFilter" onchange="filterPoliciesMain()"
                                style="width: 100%; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                <option value="">全部行业</option>
                                ${industryData.chains.map(chain =>
                                    `<option value="${chain.name}">${chain.name}</option>`
                                ).join('')}
                            </select>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #2d3748;">时间范围</label>
                            <select id="policyTimeFilter" onchange="filterPoliciesMain()"
                                style="width: 100%; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                <option value="">全部</option>
                                <option value="valid">有效政策</option>
                                <option value="new">本月新增</option>
                                <option value="expiring">即将到期</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 政策列表 -->
                <div class="mini-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 style="margin: 0; color: #2d3748; display: flex; align-items: center; gap: 10px;">
                            <span style="background: #FF7A25; color: white; width: 32px; height: 32px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;">📋</span>
                            政策列表
                        </h3>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <span style="color: #718096; font-size: 14px;">共 <strong id="policyCountDisplay" style="color: #0238C1;">${policyData.list.length}</strong> 条政策</span>
                            <select onchange="sortPoliciesMain(this.value)" style="padding: 8px 12px; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 14px;">
                                <option value="newest">最新发布</option>
                                <option value="deadline">截止时间</option>
                                <option value="amount">支持额度</option>
                            </select>
                        </div>
                    </div>

                    <div id="policyListContainer" style="display: grid; gap: 15px;">
                        ${generatePolicyCards(policyData.list)}
                    </div>

                    <!-- 分页 -->
                    <div id="policyPagination" style="margin-top: 25px; text-align: center;">
                        <button class="btn btn-secondary" onclick="loadMorePolicies()">加载更多政策</button>
                    </div>
                </div>

                <!-- 政策订阅 -->
                <div class="mini-card" style="background: linear-gradient(135deg, rgba(255, 122, 37, 0.1) 0%, rgba(2, 56, 193, 0.1) 100%); border: 2px solid #FF7A25; margin-top: 25px;">
                    <h3 style="margin: 0 0 15px 0; color: #2d3748; display: flex; align-items: center; gap: 10px;">
                        <span style="background: #FF7A25; color: white; width: 32px; height: 32px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;">🔔</span>
                        政策订阅服务
                    </h3>
                    <p style="color: #718096; margin-bottom: 15px;">订阅关注的行业政策,第一时间获取最新政策推送通知</p>
                    <button class="btn btn-primary" onclick="showPolicySubscription()">设置订阅偏好</button>
                </div>
            </div>

            <!-- AI智能解读标签 -->
            <div id="policy-tab-ai-interpretation" class="tab-content">
                <div class="content-card">
                    <div class="card-header">
                        <h3 class="card-title">AI政策智能解读</h3>
                        <div style="color: #718096; font-size: 13px;">基于大模型技术,深度解读政策内容、适用条件和申报要点</div>
                    </div>

                    <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, rgba(159, 122, 234, 0.05) 0%, rgba(67, 233, 123, 0.05) 100%); border-radius: 8px; border: 2px solid #9F7AEA;">
                        <div style="display: flex; gap: 15px; margin-bottom: 15px;">
                            <select id="aiPolicySelect" style="flex: 1; padding: 12px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                <option value="">选择要解读的政策...</option>
                                ${realPolicyData.map(p =>
                                    `<option value="${p.id}">${p.title}</option>`
                                ).join('')}
                            </select>
                            <button class="btn btn-primary" onclick="performPolicyInterpretation(document.getElementById('aiPolicySelect').value)" style="padding: 12px 40px; background: linear-gradient(135deg, #9F7AEA 0%, #48bb78 100%); border: none;">
                                AI解读
                            </button>
                        </div>
                        <div style="font-size: 13px; color: #718096;">
                            💡 AI将从政策背景、核心内容、适用对象、申报条件、支持力度、申报流程等维度进行全面解读
                        </div>
                    </div>

                    <div id="aiInterpretationResult" style="margin-top: 20px;"></div>
                </div>
            </div>

            <!-- 影响分析标签 -->
            <div id="policy-tab-impact-analysis" class="tab-content">
                <div class="content-card">
                    <div class="card-header">
                        <h3 class="card-title">政策影响分析</h3>
                        <div style="color: #718096; font-size: 13px;">分析政策对不同产业链和企业类型的影响程度</div>
                    </div>

                    <div style="margin: 20px 0; padding: 20px; background: #f7fafc; border-radius: 8px;">
                        <div style="display: flex; gap: 15px; margin-bottom: 15px;">
                            <button class="btn btn-primary" onclick="analyzePolicyImpactNew()" style="padding: 12px 40px;">
                                生成多维度影响分析
                            </button>
                        </div>
                        <div style="font-size: 13px; color: #718096;">
                            💡 将分析政策对各产业链、不同企业类型、区域分布的影响程度
                        </div>
                    </div>

                    <div id="policyImpactAnalysisNew" style="margin-top: 20px;"></div>
                </div>
            </div>

            <!-- 申报指导标签 -->
            <div id="policy-tab-application-guide" class="tab-content">
                <div class="content-card">
                    <div class="card-header">
                        <h3 class="card-title">政策申报智能指导</h3>
                        <div style="color: #718096; font-size: 13px;">企业资质匹配分析+申报材料清单+申报流程指引</div>
                    </div>

                    <!-- 企业资质匹配 -->
                    <div style="margin: 20px 0; padding: 20px; background: #f7fafc; border-radius: 8px;">
                        <h4 style="margin: 0 0 15px 0; color: #2d3748;">企业资质匹配分析</h4>
                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 15px;">
                            <div>
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #4a5568;">企业名称</label>
                                <input type="text" id="applicationCompanyName" placeholder="输入企业名称"
                                    style="width: 100%; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px;">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #4a5568;">所属产业</label>
                                <select id="applicationIndustry" style="width: 100%; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                    <option value="">选择所属产业</option>
                                    <option value="集成电路">集成电路</option>
                                    <option value="人工智能">人工智能</option>
                                    <option value="工业互联网">工业互联网</option>
                                    <option value="新能源汽车">新能源汽车</option>
                                    <option value="生物医药">生物医药</option>
                                    <option value="大数据">大数据</option>
                                </select>
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #4a5568;">企业规模</label>
                                <select id="applicationScale" style="width: 100%; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                    <option value="large">大型企业</option>
                                    <option value="medium">中型企业</option>
                                    <option value="small">小型企业</option>
                                    <option value="micro">微型企业</option>
                                </select>
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 8px; font-weight: 500; color: #4a5568;">年营收（万元）</label>
                                <input type="number" id="applicationRevenue" placeholder="输入年营收"
                                    style="width: 100%; padding: 10px; border: 2px solid #e2e8f0; border-radius: 6px;">
                            </div>
                        </div>
                        <button class="btn btn-primary" onclick="matchEnterpriseQualificationNew()" style="width: 100%;">
                            智能匹配适用政策
                        </button>
                    </div>

                    <div id="policyMatchingResultNew" style="margin-top: 20px;"></div>

                    <!-- 申报材料清单 -->
                    <div style="margin: 20px 0; padding: 20px; background: linear-gradient(135deg, rgba(67, 233, 123, 0.05) 0%, rgba(159, 122, 234, 0.05) 100%); border-radius: 8px; border: 2px solid #43e97b;">
                        <h4 style="margin: 0 0 15px 0; color: #2d3748;">生成申报材料清单</h4>
                        <div style="display: flex; gap: 15px; margin-bottom: 15px;">
                            <select id="checklistPolicySelect" style="flex: 1; padding: 12px; border: 2px solid #e2e8f0; border-radius: 6px;">
                                <option value="">选择要申报的政策...</option>
                                ${realPolicyData.map(p =>
                                    `<option value="${p.id}">${p.title}</option>`
                                ).join('')}
                            </select>
                            <button class="btn btn-primary" onclick="generateChecklistNew(document.getElementById('checklistPolicySelect').value)" style="padding: 12px 40px; background: linear-gradient(135deg, #43e97b 0%, #9F7AEA 100%); border: none;">
                                生成清单
                            </button>
                        </div>
                        <div style="font-size: 13px; color: #718096;">
                            💡 将生成详细的申报材料清单、时间节点和注意事项
                        </div>
                    </div>

                    <div id="checklistResultNew" style="margin-top: 20px;"></div>
                </div>
            </div>
        </div>
    `;

    // 初始化政策列表
    currentPolicyPage = 1;
    displayedPolicies = policyData.list.slice(0, 10);
}

// 生成政策卡片
function generatePolicyCards(policies) {
    return policies.slice(0, 10).map(policy => `
        <div class="mini-card" style="border: 1px solid #e2e8f0; padding: 20px; cursor: pointer; transition: all 0.3s;"
            onmouseover="this.style.borderColor='#0238C1'; this.style.boxShadow='0 4px 12px rgba(2,56,193,0.1)';"
            onmouseout="this.style.borderColor='#e2e8f0'; this.style.boxShadow='none';"
            onclick="showPolicyDetailModal('${policy.id}')">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                <h4 style="margin: 0; color: #2d3748; flex: 1; font-size: 16px;">${policy.title}</h4>
                <span class="badge" style="background: ${policy.level === '国家级' ? '#9F7AEA' : policy.level === '市级' ? '#0238C1' : '#43e97b'}; color: white; font-size: 12px; white-space: nowrap; margin-left: 10px;">
                    ${policy.level}
                </span>
            </div>
            <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
                <span class="badge" style="background: #FF7A25; color: white; font-size: 11px;">${policy.type}</span>
                ${policy.industry.slice(0, 3).map(ind =>
                    `<span class="badge badge-info" style="font-size: 11px;">${ind}</span>`
                ).join('')}
            </div>
            <div style="color: #718096; font-size: 14px; line-height: 1.6; margin-bottom: 12px;">
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                    <div>支持额度：<strong style="color: #FF7A25;">${policy.amount}</strong></div>
                    <div>截止日期：<strong>${policy.expireDate}</strong></div>
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid #f0f0f0;">
                <div style="color: #718096; font-size: 13px;">
                    ${policy.stage.join('、')} 企业可申报
                </div>
                <button class="btn btn-secondary" style="font-size: 13px; padding: 6px 16px;" onclick="event.stopPropagation(); showPolicyDetailModal('${policy.id}')">
                    查看详情 →
                </button>
            </div>
        </div>
    `).join('');
}

// 搜索政策（数策通主搜索）
function searchPoliciesMain(keyword) {
    console.log('搜索政策:', keyword);
    filterPoliciesMain();
}

// 筛选政策（数策通）
function filterPoliciesMain() {
    const level = document.getElementById('policyLevelFilter')?.value || '';
    const type = document.getElementById('policyTypeFilter')?.value || '';
    const industry = document.getElementById('policyIndustryFilter')?.value || '';
    const time = document.getElementById('policyTimeFilter')?.value || '';
    const keyword = document.getElementById('policySearchMainInput')?.value.toLowerCase() || '';

    let filtered = policyData.list.filter(policy => {
        const matchLevel = !level || policy.level === level;
        const matchType = !type || policy.type === type;
        const matchIndustry = !industry || policy.industry.includes(industry) || policy.industry.includes('全行业');
        const matchKeyword = !keyword ||
            policy.title.toLowerCase().includes(keyword) ||
            policy.type.toLowerCase().includes(keyword) ||
            policy.industry.some(ind => ind.toLowerCase().includes(keyword));

        return matchLevel && matchType && matchIndustry && matchKeyword;
    });

    const container = document.getElementById('policyListContainer');
    const countDisplay = document.getElementById('policyCountDisplay');

    if (container) {
        container.innerHTML = generatePolicyCards(filtered);
    }
    if (countDisplay) {
        countDisplay.textContent = filtered.length;
    }
}

// 排序政策（数策通）
function sortPoliciesMain(sortBy) {
    console.log('排序政策:', sortBy);
    // 实现排序逻辑
    filterPoliciesMain();
}

// 加载更多政策
let currentPolicyPage = 1;
let displayedPolicies = [];

function loadMorePolicies() {
    currentPolicyPage++;
    const startIdx = currentPolicyPage * 10;
    const endIdx = startIdx + 10;
    const morePolicies = policyData.list.slice(startIdx, endIdx);

    if (morePolicies.length > 0) {
        const container = document.getElementById('policyListContainer');
        container.innerHTML += generatePolicyCards(morePolicies);
    } else {
        document.getElementById('policyPagination').innerHTML = '<p style="color: #718096;">已加载全部政策</p>';
    }
}

// 显示政策详情弹窗
function showPolicyDetailModal(policyId) {
    const policy = policyData.list.find(p => p.id === policyId);
    if (!policy) return;

    showPolicyDetail(policyId);
}

// 政策订阅
function showPolicySubscription() {
    showModal('政策订阅设置', `
        <div style="padding: 20px;">
            <h4 style="margin-bottom: 15px;">选择关注的行业</h4>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px;">
                ${industryData.chains.map(chain => `
                    <label style="display: flex; align-items: center; gap: 8px; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; cursor: pointer;">
                        <input type="checkbox" value="${chain.name}">
                        <span>${chain.name}</span>
                    </label>
                `).join('')}
            </div>
            <h4 style="margin-bottom: 15px;">选择政策类型</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 20px;">
                ${Array.from(new Set(policyData.list.map(p => p.type))).map(type => `
                    <label style="display: flex; align-items: center; gap: 8px; padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; cursor: pointer;">
                        <input type="checkbox" value="${type}">
                        <span>${type}</span>
                    </label>
                `).join('')}
            </div>
            <button class="btn btn-primary" style="width: 100%;" onclick="saveSubscription()">保存订阅设置</button>
        </div>
    `);
}

function saveSubscription() {
    showNotification('订阅设置已保存，将及时推送匹配政策', 'success');
    closeModal();
}

// Tab切换函数
function switchPreTab(tabId) {
    document.querySelectorAll('#pre-investment .tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('#pre-investment .tab').forEach(el => el.classList.remove('active'));

    document.getElementById('pre-' + tabId).classList.add('active');
    event.target.classList.add('active');
}

function switchMidTab(tabId) {
    document.querySelectorAll('#mid-investment .tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('#mid-investment .tab').forEach(el => el.classList.remove('active'));

    document.getElementById('mid-' + tabId).classList.add('active');
    event.target.classList.add('active');
}

function switchPostTab(tabId) {
    document.querySelectorAll('#post-investment .tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('#post-investment .tab').forEach(el => el.classList.remove('active'));

    document.getElementById('post-' + tabId).classList.add('active');
    event.target.classList.add('active');
}

// 政策匹配功能
function matchPolicies(enterpriseId) {
    if (!enterpriseId) return;

    const enterprise = enterpriseData.list.find(e => e.id == enterpriseId);
    if (!enterprise) return;

    const matchedPolicies = policyData.list.filter(policy => {
        return policy.industry.includes('全行业') || policy.industry.includes(enterprise.type);
    });

    let html = `
        <div class="mini-card" style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);">
            <h4>企业信息</h4>
            <div class="grid-2" style="margin-top: 10px;">
                <div class="info-item">
                    <div class="info-label">企业名称</div>
                    <div class="info-value">${enterprise.name}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">行业</div>
                    <div class="info-value">${enterprise.type}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">发展阶段</div>
                    <div class="info-value">${enterprise.stage}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">年营收</div>
                    <div class="info-value">${enterprise.revenue}万元</div>
                </div>
            </div>
        </div>

        <h4 style="margin: 20px 0 15px 0;">匹配政策 (${matchedPolicies.length}条)</h4>
        <div class="card-grid">
            ${matchedPolicies.map((policy, index) => `
                <div class="mini-card" onclick="showPolicyDetail2('${policy.id}')">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <div class="mini-card-title">${policy.title}</div>
                        <span class="badge badge-success">${95 - index * 5}%</span>
                    </div>
                    <div class="mini-card-content">
                        <div style="margin-bottom: 8px;">类型: ${policy.type}</div>
                        <div style="margin-bottom: 8px;">额度: <strong>${policy.amount}</strong></div>
                        <div>${policy.benefits[0]}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    document.getElementById('policyMatchResult').innerHTML = html;
    showNotification(`为 ${enterprise.name} 匹配到 ${matchedPolicies.length} 条政策`, 'success');
}

// AI政策解读UI函数
// 搜索政策（AI解读页面）
function searchPolicyForAI(keyword) {
    const resultsContainer = document.getElementById('policySearchResults');
    if (!keyword || keyword.trim() === '') {
        resultsContainer.innerHTML = '';
        return;
    }

    const searchTerm = keyword.toLowerCase().trim();
    const matchedPolicies = policyData.list.filter(p =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.type.toLowerCase().includes(searchTerm) ||
        p.industry.some(ind => ind.toLowerCase().includes(searchTerm))
    );

    if (matchedPolicies.length === 0) {
        resultsContainer.innerHTML = '<div style="padding: 10px; text-align: center; color: #718096;">未找到匹配的政策</div>';
        return;
    }

    resultsContainer.innerHTML = matchedPolicies.slice(0, 5).map(p => `
        <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 8px; cursor: pointer; transition: all 0.2s;"
            onmouseover="this.style.background='#f7fafc'; this.style.borderColor='#0238C1';"
            onmouseout="this.style.background='white'; this.style.borderColor='#e2e8f0';"
            onclick="interpretPolicyUI('${p.id}'); document.getElementById('policySearchInput').value=''; document.getElementById('policySearchResults').innerHTML='';">
            <div style="font-weight: 600; color: #2d3748; margin-bottom: 4px;">${p.title}</div>
            <div style="font-size: 12px; color: #718096;">
                <span class="badge" style="background: #0238C1; color: white; font-size: 11px; margin-right: 5px;">${p.level}</span>
                <span class="badge" style="background: #FF7A25; color: white; font-size: 11px;">${p.type}</span>
            </div>
        </div>
    `).join('');
}

// 按类型筛选政策
function filterPoliciesByType(type) {
    const select = document.getElementById('policySelectForAI');
    const filteredOptions = policyData.list.filter(p => p.type === type);

    select.innerHTML = `
        <option value="">-- ${type}（${filteredOptions.length}个）--</option>
        ${filteredOptions.map(p => `<option value="${p.id}">${p.title} (${p.level})</option>`).join('')}
    `;
}

// AI政策解读
function interpretPolicyUI(policyId) {
    if (!policyId) {
        document.getElementById('policyInterpretationResult').innerHTML = '';
        return;
    }

    const policy = policyData.list.find(p => p.id === policyId);
    if (!policy) return;

    // 生成AI解读内容
    const html = `
        <div class="mini-card" style="background: #fff; border: 2px solid #0238C1;">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #e2e8f0;">
                <div style="background: linear-gradient(135deg, #0238C1 0%, #FF7A25 100%); width: 50px; height: 50px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                    🤖
                </div>
                <div style="flex: 1;">
                    <h3 style="margin: 0 0 5px 0; color: #2d3748;">${policy.title}</h3>
                    <div style="display: flex; gap: 8px;">
                        <span class="badge" style="background: #0238C1; color: white;">${policy.level}</span>
                        <span class="badge" style="background: #FF7A25; color: white;">${policy.type}</span>
                    </div>
                </div>
            </div>

            <!-- 1. 政策总结 -->
            <div style="margin-bottom: 25px;">
                <h4 style="color: #0238C1; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                    <span style="background: #0238C1; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px;">1</span>
                    政策总结
                </h4>
                <div style="background: linear-gradient(135deg, rgba(2, 56, 193, 0.05) 0%, rgba(255, 122, 37, 0.05) 100%); padding: 15px; border-radius: 8px; border-left: 4px solid #0238C1;">
                    <p style="margin: 0; line-height: 1.8; color: #2d3748;">
                        <strong>${policy.title}</strong>是${policy.level}政策，属于${policy.type}类别。
                        该政策旨在支持${policy.industry.join('、')}等产业发展，最高可获得<strong style="color: #FF7A25;">${policy.amount}</strong>的支持。
                        政策有效期从${policy.effectiveDate}至${policy.expireDate}。
                        ${generatePolicySummary(policy)}
                    </p>
                </div>
            </div>

            <!-- 2. 核心要素梳理 -->
            <div style="margin-bottom: 25px;">
                <h4 style="color: #0238C1; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                    <span style="background: #0238C1; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px;">2</span>
                    核心要素梳理
                </h4>
                <div class="grid-2" style="gap: 15px;">
                    <div style="background: #f7fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <div style="font-weight: 600; color: #2d3748; margin-bottom: 10px;">适用对象</div>
                        <div style="color: #718096;">
                            <div>• 行业：${policy.industry.join('、')}</div>
                            <div>• 阶段：${policy.stage.join('、')}</div>
                        </div>
                    </div>
                    <div style="background: #f7fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <div style="font-weight: 600; color: #2d3748; margin-bottom: 10px;">支持额度</div>
                        <div style="color: #718096;">
                            <div>• 最高额度：<strong style="color: #FF7A25;">${policy.amount}</strong></div>
                            <div>• 支持形式：${policy.benefits.join('、')}</div>
                        </div>
                    </div>
                    <div style="background: #f7fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <div style="font-weight: 600; color: #2d3748; margin-bottom: 10px;">有效期限</div>
                        <div style="color: #718096;">
                            <div>• 开始：${policy.effectiveDate}</div>
                            <div>• 截止：${policy.expireDate}</div>
                        </div>
                    </div>
                    <div style="background: #f7fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                        <div style="font-weight: 600; color: #2d3748; margin-bottom: 10px;">📝 申报流程</div>
                        <div style="color: #718096;">
                            ${policy.applyProcess.map((step, idx) => `<div>• ${step}</div>`).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. 申报条件梳理 -->
            <div style="margin-bottom: 25px;">
                <h4 style="color: #0238C1; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                    <span style="background: #0238C1; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px;">3</span>
                    申报条件梳理
                </h4>
                <div style="background: #fff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead style="background: #f7fafc;">
                            <tr>
                                <th style="padding: 12px; text-align: left; font-weight: 600; color: #2d3748; border-bottom: 1px solid #e2e8f0;">条件类别</th>
                                <th style="padding: 12px; text-align: left; font-weight: 600; color: #2d3748; border-bottom: 1px solid #e2e8f0;">具体要求</th>
                                <th style="padding: 12px; text-align: center; font-weight: 600; color: #2d3748; border-bottom: 1px solid #e2e8f0; width: 80px;">必备性</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${policy.conditions.map((cond, idx) => `
                                <tr style="border-bottom: 1px solid #f0f0f0;">
                                    <td style="padding: 12px; color: #2d3748; font-weight: 500;">基本条件${idx + 1}</td>
                                    <td style="padding: 12px; color: #718096;">${cond}</td>
                                    <td style="padding: 12px; text-align: center;">
                                        <span class="badge badge-danger">必备</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <!-- 所需材料 -->
                <div style="margin-top: 15px; background: #fff9e6; padding: 15px; border-radius: 8px; border-left: 4px solid #FF7A25;">
                    <div style="font-weight: 600; color: #2d3748; margin-bottom: 10px;">📄 申报材料清单</div>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                        ${policy.documents.map(doc => `
                            <div style="color: #718096;">✓ ${doc}</div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- 4. AI智能推荐 -->
            <div>
                <h4 style="color: #0238C1; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
                    <span style="background: linear-gradient(135deg, #0238C1 0%, #FF7A25 100%); color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px;">🤖</span>
                    AI智能推荐
                </h4>
                <div style="background: linear-gradient(135deg, rgba(2, 56, 193, 0.1) 0%, rgba(255, 122, 37, 0.1) 100%); padding: 20px; border-radius: 8px; border: 2px solid #0238C1;">
                    ${generateAIRecommendations(policy)}
                </div>
            </div>

            <!-- 操作按钮 -->
            <div style="margin-top: 25px; padding-top: 20px; border-top: 2px solid #e2e8f0; display: flex; gap: 10px;">
                <button class="btn btn-primary" onclick="showPolicyDetail('${policy.id}')" style="flex: 1;">
                    查看完整政策文件
                </button>
                <button class="btn btn-secondary" onclick="window.print()" style="flex: 1;">
                    🖨️ 打印解读报告
                </button>
            </div>
        </div>
    `;

    document.getElementById('policyInterpretationResult').innerHTML = html;
}

// 生成政策总结（AI模拟）
function generatePolicySummary(policy) {
    const summaries = {
        '财政补贴': '通过财政资金直接补贴的方式，降低企业研发和运营成本，鼓励企业加大创新投入。',
        '税收优惠': '通过税收减免政策，减轻企业税负，增强企业发展活力和竞争力。',
        '人才引进': '提供住房、教育、医疗等全方位支持，吸引高端人才落户，为产业发展提供智力支撑。',
        '融资支持': '通过政府担保、贴息等方式，帮助企业获得金融机构支持，缓解融资难融资贵问题。',
        '产业扶持': '针对产业链关键环节，提供综合性支持措施，促进产业集聚和协同发展。',
        '科技创新': '鼓励企业开展技术研发和成果转化，提升自主创新能力和核心竞争力。',
        '土地优惠': '提供用地保障和价格优惠，降低企业用地成本，支持项目快速落地。',
        '市场开拓': '支持企业拓展国内外市场，提升品牌影响力和市场占有率。'
    };
    return summaries[policy.type] || '该政策为企业发展提供全方位支持。';
}

// 生成AI推荐建议
function generateAIRecommendations(policy) {
    return `
        <div style="margin-bottom: 15px;">
            <div style="font-weight: 600; color: #2d3748; margin-bottom: 10px;">申报建议</div>
            <div style="color: #2d3748; line-height: 1.8;">
                • <strong>最佳申报时机：</strong>建议在每年${policy.effectiveDate.split('-')[1]}月初准备材料，避开申报高峰期<br>
                • <strong>成功率提升：</strong>重点突出项目的创新性和产业带动作用，准备详实的数据支撑<br>
                • <strong>材料准备：</strong>提前3个月开始准备申报材料，确保所有证明文件的时效性<br>
                • <strong>专家建议：</strong>可聘请专业机构进行政策解读和材料优化，提高申报成功率
            </div>
        </div>
        <div style="margin-bottom: 15px;">
            <div style="font-weight: 600; color: #2d3748; margin-bottom: 10px;">注意事项</div>
            <div style="color: #2d3748; line-height: 1.8;">
                • 确保企业符合所有基本条件，否则将直接影响审核结果<br>
                • 注意政策截止时间${policy.expireDate}，逾期将无法申报<br>
                • 申报过程中保持联系方式畅通，及时响应评审专家的问询<br>
                • 如实填报所有信息，虚假申报将被列入诚信黑名单
            </div>
        </div>
        <div>
            <div style="font-weight: 600; color: #2d3748; margin-bottom: 10px;">适配企业特征</div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${policy.industry.map(ind => `<span class="badge" style="background: #0238C1; color: white;">${ind}行业</span>`).join('')}
                ${policy.stage.map(stage => `<span class="badge" style="background: #FF7A25; color: white;">${stage}</span>`).join('')}
            </div>
        </div>
    `;
}

// 更新选中企业计数
function updateSelectedEnterpriseCount() {
    const checkboxes = document.querySelectorAll('.enterprise-checkbox:checked');
    const count = checkboxes.length;
    const countElement = document.getElementById('selectedEnterpriseCount');
    if (countElement) {
        countElement.textContent = count;
    }
}

// 对比选中企业UI函数
function compareSelectedEnterprisesUI() {
    const checkboxes = document.querySelectorAll('.enterprise-checkbox:checked');
    const selectedIds = Array.from(checkboxes).map(cb => parseInt(cb.value));

    if (selectedIds.length < 2) {
        showNotification('请至少选择2家企业进行对比', 'warning');
        return;
    }

    if (selectedIds.length > 5) {
        showNotification('最多只能对比5家企业', 'warning');
        return;
    }

    // 使用main-enhanced.js中的对比函数
    if (typeof compareSelectedCompanies === 'function') {
        window.selectedCompaniesForCompare = selectedIds;
        compareSelectedCompanies();
    } else {
        // 如果main-enhanced.js未加载,显示基本对比
        const companies = selectedIds.map(id => enterpriseData.list.find(e => e.id === id));
        showBasicCompare(companies);
    }
}

// 基本对比功能（当main-enhanced.js未加载时）
function showBasicCompare(companies) {
    const html = `
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>对比项</th>
                        ${companies.map(c => `<th>${c.name}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>行业</strong></td>
                        ${companies.map(c => `<td>${c.type}</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>区域</strong></td>
                        ${companies.map(c => `<td>${c.district}</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>营收（万元）</strong></td>
                        ${companies.map(c => `<td>${c.revenue.toLocaleString()}</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>注册资本（万元）</strong></td>
                        ${companies.map(c => `<td>${c.registeredCapital.toLocaleString()}</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>员工数</strong></td>
                        ${companies.map(c => `<td>${c.employees}人</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>创新评分</strong></td>
                        ${companies.map(c => `<td>${c.innovation}/5.0</td>`).join('')}
                    </tr>
                    <tr>
                        <td><strong>专利数量</strong></td>
                        ${companies.map(c => `<td>${c.patents}项</td>`).join('')}
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mini-card" style="margin-top: 15px;">
            <h4>提示</h4>
            <p>完整的AI智能对比功能（包含综合评分、智能建议等）需要加载 main-enhanced.js 文件</p>
        </div>
    `;

    showModal('企业对比分析', html);
}

// 其他辅助函数
function generateAnalysisReport() {
    showNotification('正在生成分析报告...', 'info');

    setTimeout(() => {
        const reportHtml = generateReportContent();
        showModal('北京市数字产业发展分析报告', reportHtml, 'large');
        showNotification('分析报告生成完成', 'success');
    }, 1000);
}

// 生成报告内容
function generateReportContent() {
    const reportDate = new Date().toLocaleDateString('zh-CN');

    // 统计数据
    const totalEnterprises = enterpriseData.list.length;
    const totalRevenue = enterpriseData.list.reduce((sum, e) => sum + e.revenue, 0);
    const avgRevenue = (totalRevenue / totalEnterprises).toFixed(0);
    const totalPatents = enterpriseData.list.reduce((sum, e) => sum + e.patents, 0);

    // 按产业分类统计
    const industryStats = {};
    enterpriseData.list.forEach(e => {
        if (!industryStats[e.type]) {
            industryStats[e.type] = { count: 0, revenue: 0, patents: 0 };
        }
        industryStats[e.type].count++;
        industryStats[e.type].revenue += e.revenue;
        industryStats[e.type].patents += e.patents;
    });

    // 按区域分类统计
    const districtStats = {};
    enterpriseData.list.forEach(e => {
        if (!districtStats[e.district]) {
            districtStats[e.district] = { count: 0, revenue: 0 };
        }
        districtStats[e.district].count++;
        districtStats[e.district].revenue += e.revenue;
    });

    const html = `
        <div id="reportContent" style="padding: 20px; background: white; max-height: 70vh; overflow-y: auto;">
            <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 3px solid #667eea;">
                <h1 style="font-size: 28px; color: #2d3748; margin-bottom: 10px;">北京市数字产业发展分析报告</h1>
                <p style="color: #718096; font-size: 14px;">报告生成日期：${reportDate}</p>
            </div>

            <div style="margin-bottom: 30px;">
                <h2 style="font-size: 20px; color: #2d3748; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #667eea;">一、总体概况</h2>
                <div style="background: #f7fafc; padding: 20px; border-radius: 8px;">
                    <p style="line-height: 1.8; color: #4a5568; margin-bottom: 15px;">
                        截至${reportDate}，北京市数字产业共有<strong style="color: #667eea;">${totalEnterprises}家</strong>重点企业，
                        总营收达<strong style="color: #667eea;">${(totalRevenue/10000).toFixed(2)}亿元</strong>，
                        平均营收<strong style="color: #667eea;">${(avgRevenue/10000).toFixed(2)}亿元</strong>，
                        累计专利<strong style="color: #667eea;">${totalPatents}项</strong>。
                    </p>
                    <div class="grid-2" style="margin-top: 15px;">
                        <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                            <div style="color: #718096; font-size: 14px; margin-bottom: 5px;">企业总数</div>
                            <div style="font-size: 24px; color: #667eea; font-weight: bold;">${totalEnterprises}家</div>
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                            <div style="color: #718096; font-size: 14px; margin-bottom: 5px;">总营收</div>
                            <div style="font-size: 24px; color: #667eea; font-weight: bold;">${(totalRevenue/10000).toFixed(2)}亿</div>
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                            <div style="color: #718096; font-size: 14px; margin-bottom: 5px;">平均营收</div>
                            <div style="font-size: 24px; color: #667eea; font-weight: bold;">${(avgRevenue/10000).toFixed(2)}亿</div>
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                            <div style="color: #718096; font-size: 14px; margin-bottom: 5px;">专利总数</div>
                            <div style="font-size: 24px; color: #667eea; font-weight: bold;">${totalPatents}项</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 30px;">
                <h2 style="font-size: 20px; color: #2d3748; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #667eea;">二、产业分布分析</h2>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>产业类型</th>
                                <th>企业数量</th>
                                <th>总营收(万元)</th>
                                <th>平均营收(万元)</th>
                                <th>专利数量</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(industryStats).sort((a, b) => b[1].revenue - a[1].revenue).map(([industry, stats]) => `
                                <tr>
                                    <td><strong>${industry}</strong></td>
                                    <td>${stats.count}家</td>
                                    <td>${stats.revenue.toLocaleString()}</td>
                                    <td>${(stats.revenue / stats.count).toFixed(0).toLocaleString()}</td>
                                    <td>${stats.patents}项</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div style="margin-bottom: 30px;">
                <h2 style="font-size: 20px; color: #2d3748; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #667eea;">三、区域分布分析</h2>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>行政区</th>
                                <th>企业数量</th>
                                <th>总营收(万元)</th>
                                <th>占比</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(districtStats).sort((a, b) => b[1].revenue - a[1].revenue).map(([district, stats]) => `
                                <tr>
                                    <td><strong>${district}</strong></td>
                                    <td>${stats.count}家</td>
                                    <td>${stats.revenue.toLocaleString()}</td>
                                    <td>${((stats.revenue / totalRevenue) * 100).toFixed(1)}%</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div style="margin-bottom: 30px;">
                <h2 style="font-size: 20px; color: #2d3748; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #667eea;">四、发展趋势分析</h2>
                <div style="background: #f7fafc; padding: 20px; border-radius: 8px;">
                    <p style="line-height: 1.8; color: #4a5568; margin-bottom: 15px;">
                        近5年来，北京市数字产业呈现快速发展态势：
                    </p>
                    <ul style="line-height: 2; color: #4a5568; padding-left: 20px;">
                        <li>企业数量从2019年的${enterpriseData.growthTrend[0].count}家增长到2023年的${enterpriseData.growthTrend[4].count}家，
                            增长率<strong style="color: #48bb78;">${(((enterpriseData.growthTrend[4].count - enterpriseData.growthTrend[0].count) / enterpriseData.growthTrend[0].count) * 100).toFixed(1)}%</strong></li>
                        <li>产业总产值从${enterpriseData.growthTrend[0].revenue}亿元增长到${enterpriseData.growthTrend[4].revenue}亿元，
                            增长率<strong style="color: #48bb78;">${(((enterpriseData.growthTrend[4].revenue - enterpriseData.growthTrend[0].revenue) / enterpriseData.growthTrend[0].revenue) * 100).toFixed(1)}%</strong></li>
                        <li>专利数量从${enterpriseData.growthTrend[0].patents}项增长到${enterpriseData.growthTrend[4].patents}项，
                            增长率<strong style="color: #48bb78;">${(((enterpriseData.growthTrend[4].patents - enterpriseData.growthTrend[0].patents) / enterpriseData.growthTrend[0].patents) * 100).toFixed(1)}%</strong></li>
                    </ul>
                </div>
            </div>

            <div style="margin-bottom: 30px;">
                <h2 style="font-size: 20px; color: #2d3748; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #667eea;">五、政策支持情况</h2>
                <div style="background: #f7fafc; padding: 20px; border-radius: 8px;">
                    <p style="line-height: 1.8; color: #4a5568; margin-bottom: 15px;">
                        目前共有<strong style="color: #667eea;">${policyData.list.length}条</strong>产业支持政策，涵盖：
                    </p>
                    <div class="grid-2">
                        <div style="background: white; padding: 15px; border-radius: 6px;">
                            <div style="font-weight: bold; color: #2d3748; margin-bottom: 10px;">政策类型分布</div>
                            ${['财政补贴', '税收优惠', '人才政策', '金融支持'].map(type => {
                                const count = policyData.list.filter(p => p.type === type).length;
                                return `<div style="margin-bottom: 8px;">
                                    <span>${type}: </span>
                                    <strong style="color: #667eea;">${count}条</strong>
                                </div>`;
                            }).join('')}
                        </div>
                        <div style="background: white; padding: 15px; border-radius: 6px;">
                            <div style="font-weight: bold; color: #2d3748; margin-bottom: 10px;">政策级别分布</div>
                            ${['国家级', '市级', '区级'].map(level => {
                                const count = policyData.list.filter(p => p.level === level).length;
                                return `<div style="margin-bottom: 8px;">
                                    <span>${level}: </span>
                                    <strong style="color: #667eea;">${count}条</strong>
                                </div>`;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 30px;">
                <h2 style="font-size: 20px; color: #2d3748; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #667eea;">六、建议与展望</h2>
                <div style="background: #f7fafc; padding: 20px; border-radius: 8px;">
                    <h3 style="font-size: 16px; color: #2d3748; margin-bottom: 10px;">发展建议</h3>
                    <ol style="line-height: 2; color: #4a5568; padding-left: 20px;">
                        <li>加强产业链上下游协同，提升产业集聚效应</li>
                        <li>加大对创新型企业的扶持力度，提升核心竞争力</li>
                        <li>优化区域产业布局，推动产业均衡发展</li>
                        <li>完善政策支持体系，提高政策精准度和执行效率</li>
                        <li>加强人才引进与培养，为产业发展提供智力支撑</li>
                    </ol>
                    <h3 style="font-size: 16px; color: #2d3748; margin: 20px 0 10px 0;">未来展望</h3>
                    <p style="line-height: 1.8; color: #4a5568;">
                        预计未来3-5年，北京市数字产业将保持20%以上的年均增长率，
                        企业数量将突破2万家，产值规模将超过5000亿元，
                        成为驱动首都经济高质量发展的重要引擎。
                    </p>
                </div>
            </div>

            <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 2px solid #e2e8f0;">
                <p style="color: #718096; font-size: 14px;">
                    北京市数字产业发展支撑平台<br>
                    ${reportDate}
                </p>
            </div>
        </div>

        <div style="text-align: center; margin-top: 20px; padding: 15px; background: #f7fafc; border-radius: 8px;">
            <button class="btn btn-primary" onclick="downloadReportAsWord()" style="margin-right: 10px;">
                📄 下载Word版本
            </button>
            <button class="btn btn-secondary" onclick="printReport()">
                🖨️ 打印报告
            </button>
        </div>
    `;

    return html;
}

// 下载Word版本报告
function downloadReportAsWord() {
    const reportContent = document.getElementById('reportContent');
    if (!reportContent) return;

    // 创建HTML文档头部
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>北京市数字产业发展分析报告</title>
            <style>
                body { font-family: "Microsoft YaHei", Arial, sans-serif; padding: 40px; }
                h1 { text-align: center; color: #2d3748; }
                h2 { color: #2d3748; border-left: 4px solid #667eea; padding-left: 10px; margin-top: 30px; }
                h3 { color: #2d3748; margin-top: 20px; }
                table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                th, td { border: 1px solid #e2e8f0; padding: 10px; text-align: left; }
                th { background: #f7fafc; font-weight: bold; }
                .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 15px 0; }
                ul, ol { line-height: 2; }
            </style>
        </head>
        <body>
            ${reportContent.innerHTML}
        </body>
        </html>
    `;

    // 创建Blob并下载
    const blob = new Blob(['\ufeff' + htmlContent], {
        type: 'application/msword'
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `北京市数字产业发展分析报告_${new Date().toLocaleDateString('zh-CN').replace(/\//g, '')}.doc`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showNotification('报告已下载', 'success');
}

// 打印报告
function printReport() {
    const reportContent = document.getElementById('reportContent');
    if (!reportContent) return;

    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>北京市数字产业发展分析报告</title>');
    printWindow.document.write('<style>body{font-family:"Microsoft YaHei",Arial,sans-serif;padding:20px;}h1{text-align:center;}table{width:100%;border-collapse:collapse;margin:20px 0;}th,td{border:1px solid #ddd;padding:10px;text-align:left;}th{background:#f5f5f5;}</style>');
    printWindow.document.write('</head><body>');
    printWindow.document.write(reportContent.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

// 搜索企业进行政策匹配
function searchEnterpriseForPolicy(keyword) {
    const resultsDiv = document.getElementById('enterpriseSearchResults');
    if (!keyword || keyword.trim() === '') {
        resultsDiv.innerHTML = '';
        return;
    }

    const filtered = enterpriseData.list.filter(e =>
        e.name.toLowerCase().includes(keyword.toLowerCase()) ||
        e.type.toLowerCase().includes(keyword.toLowerCase()) ||
        e.district.toLowerCase().includes(keyword.toLowerCase())
    );

    if (filtered.length === 0) {
        resultsDiv.innerHTML = '<div style="padding: 10px; color: #718096;">未找到匹配的企业</div>';
        return;
    }

    resultsDiv.innerHTML = `
        <div style="max-height: 300px; overflow-y: auto; border: 1px solid #e2e8f0; border-radius: 6px;">
            ${filtered.slice(0, 10).map(e => `
                <div onclick="selectEnterpriseFromSearch(${e.id})"
                    style="padding: 12px; border-bottom: 1px solid #e2e8f0; cursor: pointer; transition: all 0.2s;"
                    onmouseover="this.style.background='#f7fafc'"
                    onmouseout="this.style.background='white'">
                    <div style="font-weight: 600; color: #2d3748; margin-bottom: 4px;">${e.name}</div>
                    <div style="font-size: 13px; color: #718096;">
                        <span class="badge badge-info">${e.type}</span>
                        <span class="badge badge-secondary">${e.district}</span>
                        <span style="margin-left: 10px;">营收：${e.revenue.toLocaleString()}万元</span>
                    </div>
                </div>
            `).join('')}
            ${filtered.length > 10 ? `<div style="padding: 10px; text-align: center; color: #718096; font-size: 13px;">还有${filtered.length - 10}个结果...</div>` : ''}
        </div>
    `;
}

// 从搜索结果选择企业
function selectEnterpriseFromSearch(enterpriseId) {
    document.getElementById('enterpriseSearchResults').innerHTML = '';
    document.getElementById('enterpriseSearchInput').value = '';
    document.getElementById('enterpriseSelect').value = enterpriseId;
    matchPolicies(enterpriseId);
}

// 政策模拟器
function showPolicySimulator() {
    const html = `
        <div style="padding: 20px;">
            <h3 style="margin-bottom: 20px; color: #2d3748;">政策效果模拟器</h3>

            <div style="margin-bottom: 25px;">
                <h4 style="color: #2d3748; margin-bottom: 15px;">1. 选择政策组合</h4>
                <div class="mini-card">
                    <label style="display: block; margin-bottom: 10px; font-weight: 500;">选择要模拟的政策（可多选）:</label>
                    <div style="max-height: 200px; overflow-y: auto; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px;">
                        ${policyData.list.slice(0, 10).map(p => `
                            <div style="margin-bottom: 8px;">
                                <label style="display: flex; align-items: center; cursor: pointer;">
                                    <input type="checkbox" class="policy-simulator-checkbox" value="${p.id}" style="margin-right: 10px;">
                                    <span>${p.title} (最高${p.maxAmount}万元)</span>
                                </label>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 25px;">
                <h4 style="color: #2d3748; margin-bottom: 15px;">2. 企业基本信息</h4>
                <div class="grid-2">
                    <div class="mini-card">
                        <label>企业类型:</label>
                        <select id="sim-industry" style="width: 100%; padding: 8px; margin-top: 5px; border: 1px solid #e2e8f0; border-radius: 4px;">
                            ${industryData.chains.map(c => `<option value="${c.name}">${c.name}</option>`).join('')}
                        </select>
                    </div>
                    <div class="mini-card">
                        <label>企业阶段:</label>
                        <select id="sim-stage" style="width: 100%; padding: 8px; margin-top: 5px; border: 1px solid #e2e8f0; border-radius: 4px;">
                            <option value="初创期">初创期</option>
                            <option value="成长期">成长期</option>
                            <option value="成熟期">成熟期</option>
                        </select>
                    </div>
                    <div class="mini-card">
                        <label>年营收（万元）:</label>
                        <input type="number" id="sim-revenue" value="50000" style="width: 100%; padding: 8px; margin-top: 5px; border: 1px solid #e2e8f0; border-radius: 4px;">
                    </div>
                    <div class="mini-card">
                        <label>研发投入（万元）:</label>
                        <input type="number" id="sim-rd" value="5000" style="width: 100%; padding: 8px; margin-top: 5px; border: 1px solid #e2e8f0; border-radius: 4px;">
                    </div>
                    <div class="mini-card">
                        <label>员工数量:</label>
                        <input type="number" id="sim-employees" value="200" style="width: 100%; padding: 8px; margin-top: 5px; border: 1px solid #e2e8f0; border-radius: 4px;">
                    </div>
                    <div class="mini-card">
                        <label>专利数量:</label>
                        <input type="number" id="sim-patents" value="50" style="width: 100%; padding: 8px; margin-top: 5px; border: 1px solid #e2e8f0; border-radius: 4px;">
                    </div>
                </div>
            </div>

            <div style="text-align: center;">
                <button class="btn btn-primary" onclick="runPolicySimulation()" style="padding: 12px 40px; font-size: 16px;">
                    🚀 开始模拟
                </button>
            </div>

            <div id="simulationResults" style="margin-top: 30px;"></div>
        </div>
    `;

    showModal('政策效果模拟器', html, 'large');
}

// 运行政策模拟
function runPolicySimulation() {
    const selectedPolicies = Array.from(document.querySelectorAll('.policy-simulator-checkbox:checked'))
        .map(cb => policyData.list.find(p => p.id === cb.value));

    if (selectedPolicies.length === 0) {
        showNotification('请至少选择一个政策', 'warning');
        return;
    }

    const revenue = parseFloat(document.getElementById('sim-revenue').value) || 0;
    const rd = parseFloat(document.getElementById('sim-rd').value) || 0;
    const employees = parseInt(document.getElementById('sim-employees').value) || 0;
    const patents = parseInt(document.getElementById('sim-patents').value) || 0;

    // 计算可能获得的政策支持
    let totalSupport = 0;
    const policyDetails = selectedPolicies.map(policy => {
        let estimatedAmount = 0;

        // 简化的模拟计算逻辑
        if (policy.type === '财政补贴') {
            estimatedAmount = Math.min(revenue * 0.1, policy.maxAmount);
        } else if (policy.type === '研发补贴') {
            estimatedAmount = Math.min(rd * 0.3, policy.maxAmount);
        } else if (policy.type === '税收优惠') {
            estimatedAmount = Math.min(revenue * 0.05, policy.maxAmount);
        } else {
            estimatedAmount = Math.min(revenue * 0.08, policy.maxAmount);
        }

        totalSupport += estimatedAmount;

        return {
            policy,
            estimatedAmount,
            matchScore: Math.min(95, 60 + Math.random() * 35)
        };
    });

    // 显示模拟结果
    const resultsDiv = document.getElementById('simulationResults');
    resultsDiv.innerHTML = `
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 12px; color: white; text-align: center; margin-bottom: 20px;">
            <div style="font-size: 16px; margin-bottom: 10px; opacity: 0.9;">预计可获得政策支持总额</div>
            <div style="font-size: 48px; font-weight: bold;">${totalSupport.toFixed(0).toLocaleString()}</div>
            <div style="font-size: 20px; margin-top: 5px;">万元</div>
        </div>

        <h4 style="margin-bottom: 15px; color: #2d3748;">政策明细分析</h4>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>政策名称</th>
                        <th>政策类型</th>
                        <th>最高额度</th>
                        <th>预估金额</th>
                        <th>匹配度</th>
                    </tr>
                </thead>
                <tbody>
                    ${policyDetails.map(pd => `
                        <tr>
                            <td><strong>${pd.policy.title}</strong></td>
                            <td><span class="badge badge-info">${pd.policy.type}</span></td>
                            <td>${pd.policy.maxAmount.toLocaleString()}万元</td>
                            <td><strong style="color: #667eea;">${pd.estimatedAmount.toFixed(0).toLocaleString()}万元</strong></td>
                            <td><span class="badge badge-success">${pd.matchScore.toFixed(0)}%</span></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div style="background: #f7fafc; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h4 style="color: #2d3748; margin-bottom: 15px;">模拟分析建议</h4>
            <ul style="line-height: 2; color: #4a5568; padding-left: 20px;">
                <li>根据您的企业情况，预计可申请${selectedPolicies.length}项政策，获得约${totalSupport.toFixed(0)}万元支持</li>
                <li>建议优先申请匹配度90%以上的政策，成功率更高</li>
                <li>需要准备的核心材料：企业营业执照、财务报表、研发项目证明、专利证书等</li>
                <li>预计申报周期：${selectedPolicies.length * 30}天左右（平均每项政策30天）</li>
                <li>建议提前${selectedPolicies.length}个月开始准备材料</li>
            </ul>
        </div>

        <div style="text-align: center; margin-top: 20px;">
            <button class="btn btn-secondary" onclick="runPolicySimulation()">🔄 重新模拟</button>
            <button class="btn btn-primary" onclick="downloadSimulationReport()" style="margin-left: 10px;">📄 下载模拟报告</button>
        </div>
    `;
}

// 下载模拟报告
function downloadSimulationReport() {
    showNotification('模拟报告下载功能开发中...', 'info');
}

// 服务总览面板
function showServiceDashboard() {
    // 计算统计数据
    const totalServices = serviceData.cases.length;
    const financialServices = serviceData.cases.filter(c => c.type === '金融服务').length;
    const talentServices = serviceData.cases.filter(c => c.type === '人才服务').length;
    const industryServices = serviceData.cases.filter(c => c.type === '产业对接').length;

    // 按服务类型分组统计
    const serviceByType = {};
    serviceData.cases.forEach(c => {
        if (!serviceByType[c.type]) {
            serviceByType[c.type] = { count: 0, companies: [] };
        }
        serviceByType[c.type].count++;
        serviceByType[c.type].companies.push(c.enterprise);
    });

    // 最近服务案例
    const recentCases = serviceData.cases.slice(0, 5);

    const html = `
        <div style="padding: 20px;">
            <h2 style="margin-bottom: 25px; color: #2d3748; text-align: center;">招后服务总览</h2>

            <!-- 核心指标 -->
            <div class="stats-grid" style="margin-bottom: 30px;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 25px; border-radius: 12px; color: white; text-align: center;">
                    <div style="font-size: 14px; opacity: 0.9; margin-bottom: 10px;">服务企业总数</div>
                    <div style="font-size: 42px; font-weight: bold;">${serviceData.stats.servedCompanies}</div>
                    <div style="font-size: 14px; margin-top: 5px; opacity: 0.8;">覆盖率 ${Math.round(serviceData.stats.servedCompanies / serviceData.stats.totalCompanies * 100)}%</div>
                </div>
                <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); padding: 25px; border-radius: 12px; color: white; text-align: center;">
                    <div style="font-size: 14px; opacity: 0.9; margin-bottom: 10px;">服务案例数</div>
                    <div style="font-size: 42px; font-weight: bold;">${totalServices}</div>
                    <div style="font-size: 14px; margin-top: 5px; opacity: 0.8;">本月新增 ${Math.floor(totalServices * 0.15)}</div>
                </div>
                <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); padding: 25px; border-radius: 12px; color: white; text-align: center;">
                    <div style="font-size: 14px; opacity: 0.9; margin-bottom: 10px;">金融服务金额</div>
                    <div style="font-size: 42px; font-weight: bold;">${serviceData.stats.financialAmount}</div>
                    <div style="font-size: 14px; margin-top: 5px; opacity: 0.8;">亿元</div>
                </div>
                <div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 25px; border-radius: 12px; color: white; text-align: center;">
                    <div style="font-size: 14px; opacity: 0.9; margin-bottom: 10px;">引进人才数</div>
                    <div style="font-size: 42px; font-weight: bold;">${serviceData.stats.talentCount}</div>
                    <div style="font-size: 14px; margin-top: 5px; opacity: 0.8;">服务 ${serviceData.stats.talentServices} 次</div>
                </div>
            </div>

            <!-- 服务类型分布 -->
            <div style="margin-bottom: 30px;">
                <h3 style="color: #2d3748; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #667eea;">服务类型分布</h3>
                <div class="grid-2">
                    ${Object.entries(serviceByType).map(([type, data]) => `
                        <div class="mini-card" style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <h4 style="color: #2d3748;">${type}</h4>
                                <span class="badge badge-primary" style="font-size: 18px;">${data.count}</span>
                            </div>
                            <div style="color: #718096; font-size: 13px; line-height: 1.6;">
                                服务企业：${data.companies.slice(0, 3).join('、')}${data.companies.length > 3 ? ' 等' : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- 服务效果统计 -->
            <div style="margin-bottom: 30px;">
                <h3 style="color: #2d3748; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #667eea;">服务效果统计</h3>
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>服务类型</th>
                                <th>服务次数</th>
                                <th>服务企业数</th>
                                <th>平均满意度</th>
                                <th>问题解决率</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>金融服务</strong></td>
                                <td>${serviceData.stats.financialServices}次</td>
                                <td>${financialServices}家</td>
                                <td><span class="badge badge-success">98%</span></td>
                                <td><span class="badge badge-success">95%</span></td>
                            </tr>
                            <tr>
                                <td><strong>人才服务</strong></td>
                                <td>${serviceData.stats.talentServices}次</td>
                                <td>${talentServices}家</td>
                                <td><span class="badge badge-success">96%</span></td>
                                <td><span class="badge badge-success">92%</span></td>
                            </tr>
                            <tr>
                                <td><strong>产业对接</strong></td>
                                <td>${Math.floor(serviceData.stats.talentServices * 0.8)}次</td>
                                <td>${industryServices}家</td>
                                <td><span class="badge badge-success">97%</span></td>
                                <td><span class="badge badge-success">90%</span></td>
                            </tr>
                            <tr>
                                <td><strong>政策咨询</strong></td>
                                <td>${Math.floor(serviceData.stats.financialServices * 1.2)}次</td>
                                <td>${Math.floor(totalServices * 0.6)}家</td>
                                <td><span class="badge badge-success">99%</span></td>
                                <td><span class="badge badge-success">98%</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- 最近服务案例 -->
            <div style="margin-bottom: 30px;">
                <h3 style="color: #2d3748; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #667eea;">最近服务案例</h3>
                <div style="display: grid; gap: 15px;">
                    ${recentCases.map(c => `
                        <div class="mini-card" style="border-left: 3px solid #667eea;">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                                <div>
                                    <h4 style="color: #2d3748; margin-bottom: 5px;">${c.enterprise}</h4>
                                    <span class="badge badge-info">${c.type}</span>
                                </div>
                                <span class="badge badge-success">${c.result}</span>
                            </div>
                            <div style="color: #4a5568; line-height: 1.6; margin-bottom: 10px;">${c.description}</div>
                            <div style="color: #718096; font-size: 13px;">
                                服务时间：${c.date} | 金额：${c.amount}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- 服务趋势图 -->
            <div style="margin-bottom: 30px;">
                <h3 style="color: #2d3748; margin-bottom: 15px; padding-left: 10px; border-left: 4px solid #667eea;">服务趋势（近6个月）</h3>
                <div style="background: #f7fafc; padding: 20px; border-radius: 8px;">
                    <div style="display: flex; justify-content: space-around; text-align: center;">
                        ${['1月', '2月', '3月', '4月', '5月', '6月'].map((month, idx) => {
                            const count = 50 + idx * 15 + Math.floor(Math.random() * 20);
                            return `
                                <div>
                                    <div style="font-size: 24px; font-weight: bold; color: #667eea; margin-bottom: 5px;">${count}</div>
                                    <div style="font-size: 13px; color: #718096;">${month}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; color: #718096;">
                        服务量持续增长，月均增长率 <strong style="color: #48bb78;">18.5%</strong>
                    </div>
                </div>
            </div>

            <!-- 服务建议 -->
            <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); padding: 25px; border-radius: 12px;">
                <h3 style="color: #2d3748; margin-bottom: 15px;">服务优化建议</h3>
                <ul style="line-height: 2; color: #4a5568; padding-left: 20px;">
                    <li>金融服务满意度高，建议扩大服务范围，开发更多金融产品</li>
                    <li>人才服务需求旺盛，建议加强与高校、猎头公司的合作</li>
                    <li>产业对接效果显著，建议建立常态化对接机制</li>
                    <li>建议开发服务效果跟踪系统，实时监控服务质量</li>
                    <li>推动服务数字化、智能化，提升服务效率</li>
                </ul>
            </div>

            <div style="text-align: center; margin-top: 25px;">
                <button class="btn btn-primary" onclick="exportServiceReport()" style="margin-right: 10px;">
                    📄 导出服务报告
                </button>
                <button class="btn btn-secondary" onclick="closeModal()">
                    关闭
                </button>
            </div>
        </div>
    `;

    showModal('招后服务总览', html, 'large');
}

// 导出服务报告
function exportServiceReport() {
    showNotification('正在导出服务报告...', 'info');
    setTimeout(() => {
        showNotification('服务报告导出成功', 'success');
    }, 1000);
}

function showEnterpriseAnalysis(id) {
    const enterprise = enterpriseData.list.find(e => e.id === id);
    if (!enterprise) return;

    const html = `
        <div class="grid-2">
            <div class="info-item"><div class="info-label">注册资本</div><div class="info-value">${enterprise.registeredCapital.toLocaleString()}万元</div></div>
            <div class="info-item"><div class="info-label">年营收</div><div class="info-value">${enterprise.revenue.toLocaleString()}万元</div></div>
            <div class="info-item"><div class="info-label">纳税额</div><div class="info-value">${enterprise.tax.toLocaleString()}万元</div></div>
            <div class="info-item"><div class="info-label">员工数</div><div class="info-value">${enterprise.employees}人</div></div>
            <div class="info-item"><div class="info-label">成立时间</div><div class="info-value">${enterprise.foundedYear}年</div></div>
            <div class="info-item"><div class="info-label">信用等级</div><div class="info-value"><span class="badge badge-success">${enterprise.credit}</span></div></div>
            <div class="info-item"><div class="info-label">创新评分</div><div class="info-value">${enterprise.innovation}/5.0</div></div>
            <div class="info-item"><div class="info-label">专利数量</div><div class="info-value">${enterprise.patents}项</div></div>
        </div>
        <h4 style="margin-top: 20px; margin-bottom: 10px;">主要产品</h4>
        <div>${enterprise.products.map(p => `<span class="badge badge-info">${p}</span>`).join(' ')}</div>
        <div id="enterpriseRadarChart" style="width: 100%; height: 300px; margin-top: 20px;"></div>
    `;

    showModal(enterprise.name + ' - 企业画像', html);
    setTimeout(() => initEnterpriseRadarChart(id), 100);
}

function showProjectDetail(id) {
    const project = investmentData.projects.find(p => p.id === id);
    if (!project) return;

    const html = `
        <div class="grid-2">
            <div class="info-item"><div class="info-label">项目名称</div><div class="info-value">${project.name}</div></div>
            <div class="info-item"><div class="info-label">行业</div><div class="info-value">${project.industry}</div></div>
            <div class="info-item"><div class="info-label">投资金额</div><div class="info-value">${project.investAmount.toLocaleString()}万元</div></div>
            <div class="info-item"><div class="info-label">预期产值</div><div class="info-value">${project.expectedOutput.toLocaleString()}万元</div></div>
            <div class="info-item"><div class="info-label">预期税收</div><div class="info-value">${project.expectedTax.toLocaleString()}万元</div></div>
            <div class="info-item"><div class="info-label">预期就业</div><div class="info-value">${project.expectedJobs}人</div></div>
            <div class="info-item"><div class="info-label">项目进度</div><div class="info-value">${project.progress}%</div></div>
            <div class="info-item"><div class="info-label">项目状态</div><div class="info-value"><span class="badge badge-info">${project.stage}</span></div></div>
        </div>
        <h4 style="margin-top: 20px; margin-bottom: 10px;">匹配政策</h4>
        <div>${project.policyPackage.map(pid => {
            const p = policyData.list.find(pol => pol.id === pid);
            return p ? `<span class="badge badge-success">${p.title}</span>` : '';
        }).join(' ')}</div>
        <h4 style="margin-top: 20px; margin-bottom: 10px;">项目优势</h4>
        <div>${project.advantages.map(a => `<div class="mini-card">✓ ${a}</div>`).join('')}</div>
    `;

    showModal('招商项目详情', html);
}

function showPolicyDetail2(id) {
    const policy = policyData.list.find(p => p.id === id);
    if (!policy) return;

    const html = `
        <div class="grid-2">
            <div class="info-item"><div class="info-label">政策级别</div><div class="info-value">${policy.level}</div></div>
            <div class="info-item"><div class="info-label">政策类型</div><div class="info-value">${policy.type}</div></div>
            <div class="info-item"><div class="info-label">支持额度</div><div class="info-value">${policy.amount}</div></div>
            <div class="info-item"><div class="info-label">有效期</div><div class="info-value">${policy.effectiveDate} 至 ${policy.expireDate}</div></div>
        </div>
        <h4 style="margin-top: 20px; margin-bottom: 10px;">适用行业</h4>
        <div>${policy.industry.map(i => `<span class="badge badge-info">${i}</span>`).join(' ')}</div>
        <h4 style="margin-top: 20px; margin-bottom: 10px;">申报条件</h4>
        <div>${policy.conditions.map(c => `<div class="mini-card">• ${c}</div>`).join('')}</div>
        <h4 style="margin-top: 20px; margin-bottom: 10px;">政策优惠</h4>
        <div>${policy.benefits.map(b => `<div class="mini-card">✓ ${b}</div>`).join('')}</div>
        <h4 style="margin-top: 20px; margin-bottom: 10px;">申报流程</h4>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            ${policy.applyProcess.map((step, i) => `<span class="badge badge-success">${i + 1}. ${step}</span>`).join('')}
        </div>
    `;

    showModal(policy.title, html);
}

// 搜索功能
function searchIndustry(keyword) {
    const grid = document.getElementById('industryCardGrid');
    if (!grid) return;

    const cards = grid.querySelectorAll('.mini-card');
    const searchTerm = keyword.toLowerCase().trim();

    cards.forEach(card => {
        const industryName = card.getAttribute('data-industry-name');
        if (!searchTerm || industryName.toLowerCase().includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function searchEnterprise(keyword) {
    // 实现搜索逻辑
    console.log('搜索企业:', keyword);
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== 产业契合度智能匹配功能 ====================

/**
 * 搜索企业（产业匹配页面）
 */
function searchEnterpriseForIndustryMatch(keyword) {
    const resultsContainer = document.getElementById('enterpriseSearchResults');
    if (!keyword || keyword.trim() === '') {
        resultsContainer.innerHTML = '';
        return;
    }

    const searchTerm = keyword.toLowerCase().trim();
    const matchedEnterprises = enterpriseProfiles.filter(ent =>
        ent.name.toLowerCase().includes(searchTerm) ||
        ent.businessScope.main.toLowerCase().includes(searchTerm)
    );

    if (matchedEnterprises.length === 0) {
        resultsContainer.innerHTML = '<div style="padding: 10px; text-align: center; color: #718096;">未找到匹配的企业</div>';
        return;
    }

    resultsContainer.innerHTML = matchedEnterprises.slice(0, 5).map(ent => `
        <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; margin-bottom: 8px; cursor: pointer; transition: all 0.2s;"
            onmouseover="this.style.background='#f7fafc'" onmouseout="this.style.background='white'"
            onclick="matchIndustryCompatibility('${ent.id}')">
            <div style="font-weight: 600; color: #2d3748; margin-bottom: 4px;">${ent.name}</div>
            <div style="font-size: 13px; color: #718096;">${ent.businessScope.main}</div>
        </div>
    `).join('');
}

/**
 * 产业契合度匹配主函数
 */
function matchIndustryCompatibility(enterpriseId) {
    if (!enterpriseId) return;

    const enterprise = enterpriseProfiles.find(e => e.id === enterpriseId);
    if (!enterprise) return;

    showNotification('正在分析企业画像，计算产业契合度...', 'info');

    // 模拟计算延迟
    setTimeout(() => {
        const matchResult = calculateIndustryMatch(enterprise);
        displayMatchResult(enterprise, matchResult);
        showNotification('契合度分析完成', 'success');
    }, 800);
}

/**
 * 展示匹配结果
 */
function displayMatchResult(enterprise, matchResult) {
    const resultContainer = document.getElementById('industryMatchResult');

    const html = `
        <!-- 企业基本信息 -->
        <div class="mini-card" style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); border-left: 4px solid #667eea;">
            <h3 style="margin-bottom: 15px; color: #2d3748;">${enterprise.name}</h3>
            <div class="grid-3" style="gap: 15px;">
                <div class="info-item">
                    <div class="info-label">企业类型</div>
                    <div class="info-value">${enterprise.basicInfo.type}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">注册资本</div>
                    <div class="info-value">${enterprise.basicInfo.registeredCapital}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">员工规模</div>
                    <div class="info-value">${enterprise.basicInfo.employees}人</div>
                </div>
                <div class="info-item">
                    <div class="info-label">2023年营收</div>
                    <div class="info-value">${enterprise.annualReport.revenue2023.toLocaleString()}万元</div>
                </div>
                <div class="info-item">
                    <div class="info-label">年增长率</div>
                    <div class="info-value" style="color: #48bb78;">+${enterprise.annualReport.growthRate}%</div>
                </div>
                <div class="info-item">
                    <div class="info-label">研发占比</div>
                    <div class="info-value">${enterprise.annualReport.rdRatio}%</div>
                </div>
            </div>
            <div style="margin-top: 15px;">
                <div class="info-label">主营业务</div>
                <div style="color: #2d3748; margin-top: 5px;">${enterprise.businessScope.main}</div>
            </div>
        </div>

        <!-- 契合度评分 -->
        <div class="content-card" style="margin-top: 20px; padding: 30px; text-align: center; background: linear-gradient(135deg, ${matchResult.grade.color}10 0%, ${matchResult.grade.color}05 100%);">
            <h3 style="margin-bottom: 20px; color: #2d3748;">产业契合度评分</h3>
            <div style="font-size: 72px; font-weight: 700; color: ${matchResult.grade.color}; line-height: 1;">
                ${matchResult.totalScore}
            </div>
            <div style="font-size: 18px; color: #4a5568; margin: 10px 0;">
                <span class="badge" style="background: ${matchResult.grade.color}; color: white; font-size: 16px; padding: 8px 16px;">
                    ${matchResult.grade.grade} - ${matchResult.grade.label}
                </span>
            </div>
            <div style="font-size: 16px; color: #718096; margin-top: 10px;">
                ${matchResult.grade.recommendation}
            </div>
        </div>

        <!-- 优质标的标签 -->
        ${matchResult.qualityTags.length > 0 ? `
            <div class="mini-card" style="margin-top: 20px; background: linear-gradient(135deg, rgba(67, 233, 123, 0.1) 0%, rgba(56, 249, 215, 0.1) 100%);">
                <h4 style="margin-bottom: 15px; color: #2d3748;">优质标的识别</h4>
                <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                    ${matchResult.qualityTags.map(tag => `
                        <div style="background: white; padding: 12px 20px; border-radius: 8px; border-left: 4px solid ${tag.color}; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                            <div style="font-weight: 600; color: ${tag.color};">${tag.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        <!-- 维度评分雷达图 -->
        <div class="content-card" style="margin-top: 20px;">
            <h4 style="margin-bottom: 15px; color: #2d3748;">多维度评分分析</h4>
            <div class="grid-2" style="gap: 20px;">
                ${Object.entries(matchResult.dimensions).map(([key, value]) => {
                    const labels = {
                        industryAlignment: '产业方向契合度',
                        technologyLevel: '技术水平',
                        growthPotential: '成长潜力',
                        innovationCapability: '创新能力',
                        strategicValue: '战略价值',
                        resourceMatch: '资源匹配度'
                    };
                    return `
                        <div style="padding: 15px; background: #f7fafc; border-radius: 8px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="font-weight: 500; color: #4a5568;">${labels[key]}</span>
                                <span style="font-size: 20px; font-weight: 700; color: #0238C1;">${value}</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${value * 10}%;"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <!-- 匹配产业方向 -->
        ${matchResult.matchedIndustries.length > 0 ? `
            <div class="mini-card" style="margin-top: 20px;">
                <h4 style="margin-bottom: 15px; color: #2d3748;">匹配的产业方向</h4>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    ${matchResult.matchedIndustries.map(ind => `
                        <div style="padding: 10px 16px; background: #f7fafc; border-radius: 6px; border: 2px solid #e2e8f0;">
                            <div style="font-weight: 600; color: #2d3748; margin-bottom: 4px;">${ind.name}</div>
                            <div style="font-size: 12px; color: #718096;">匹配度: <span style="color: #0238C1; font-weight: 600;">${ind.matchRate}%</span></div>
                            <div style="font-size: 11px; color: #a0aec0; margin-top: 4px;">
                                ${ind.matchedKeywords.join(', ')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        <!-- 可行性落地建议 -->
        <div class="content-card" style="margin-top: 20px;">
            <h3 style="margin-bottom: 20px; color: #2d3748; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">
                可行性落地建议
            </h3>

            <!-- 可行性评估 -->
            <div style="padding: 15px; background: ${matchResult.totalScore >= 7 ? '#d1fae5' : '#fed7aa'}; border-radius: 8px; margin-bottom: 20px;">
                <div style="font-size: 16px; font-weight: 600; color: #1f2937;">
                    ${matchResult.suggestions.feasibility}
                </div>
            </div>

            <!-- 优势分析 -->
            ${matchResult.suggestions.advantages.length > 0 ? `
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #059669; margin-bottom: 10px;">✅ 企业优势</h4>
                    <ul style="list-style: none; padding: 0;">
                        ${matchResult.suggestions.advantages.map(adv => `
                            <li style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                                <span style="color: #059669; margin-right: 8px;">▶</span>
                                <span style="color: #4a5568;">${adv}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}

            <!-- 挑战分析 -->
            ${matchResult.suggestions.challenges.length > 0 ? `
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #f59e0b; margin-bottom: 10px;">潜在挑战</h4>
                    <ul style="list-style: none; padding: 0;">
                        ${matchResult.suggestions.challenges.map(chal => `
                            <li style="padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                                <span style="color: #f59e0b; margin-right: 8px;">▶</span>
                                <span style="color: #4a5568;">${chal}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            ` : ''}

            <!-- 引进建议 -->
            ${matchResult.suggestions.recommendations.length > 0 ? `
                <div style="margin-bottom: 20px;">
                    <h4 style="color: #0238C1; margin-bottom: 10px;">引进建议</h4>
                    <ol style="padding-left: 20px; margin: 0;">
                        ${matchResult.suggestions.recommendations.map(rec => `
                            <li style="padding: 8px 0; color: #4a5568; line-height: 1.6;">${rec}</li>
                        `).join('')}
                    </ol>
                </div>
            ` : ''}

            <!-- 支持措施 -->
            ${matchResult.suggestions.supportMeasures.length > 0 ? `
                <div>
                    <h4 style="color: #7c3aed; margin-bottom: 10px;">🎁 建议支持措施</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px;">
                        ${matchResult.suggestions.supportMeasures.map(measure => `
                            <div style="padding: 12px; background: #f7fafc; border-radius: 6px; border-left: 3px solid #7c3aed;">
                                <span style="color: #4a5568; font-size: 14px;">${measure}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>

        <!-- 操作按钮 -->
        <div style="margin-top: 20px; display: flex; gap: 15px; justify-content: center;">
            <button class="btn btn-primary" onclick="generateAndShowReport('${enterprise.id}')" style="padding: 12px 30px; font-size: 16px;">
                📄 生成企业引进可行性报告
            </button>
            <button class="btn btn-secondary" onclick="exportMatchResult('${enterprise.id}')" style="padding: 12px 30px; font-size: 16px;">
                📥 导出分析结果
            </button>
        </div>
    `;

    resultContainer.innerHTML = html;
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/**
 * 快速演示功能
 */
function quickMatchDemo() {
    matchIndustryCompatibility('ent_001');
}

/**
 * 显示园区产业画像
 */
function showParkIndustryProfile() {
    const html = `
        <div style="margin-bottom: 20px;">
            <h4 style="margin-bottom: 15px; color: #2d3748;">园区主导产业方向</h4>
            <div style="display: grid; gap: 15px;">
                ${parkIndustryProfile.mainIndustries.map(ind => `
                    <div style="padding: 15px; background: #f7fafc; border-radius: 8px; border-left: 4px solid #0238C1;">
                        <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 18px; font-weight: 600; color: #2d3748;">${ind.name}</span>
                            <span style="background: #0238C1; color: white; padding: 4px 12px; border-radius: 12px; font-size: 13px;">
                                权重 ${(ind.weight * 100).toFixed(0)}%
                            </span>
                        </div>
                        <div style="margin-bottom: 8px;">
                            <span style="font-weight: 500; color: #718096;">细分领域：</span>
                            <span style="color: #4a5568;">${ind.subFields.join('、')}</span>
                        </div>
                        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                            ${ind.keywords.map(kw => `<span class="badge badge-info">${kw}</span>`).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div style="margin-top: 25px;">
            <h4 style="margin-bottom: 15px; color: #2d3748;">战略需求方向</h4>
            <div class="grid-2" style="gap: 15px;">
                <div style="padding: 15px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); border-radius: 8px;">
                    <div style="font-weight: 600; color: #667eea; margin-bottom: 10px;">产业链关键环节</div>
                    ${parkIndustryProfile.strategicNeeds.chainKeyNodes.map(node =>
                        `<div style="padding: 6px 0; color: #4a5568;">• ${node}</div>`
                    ).join('')}
                </div>
                <div style="padding: 15px; background: linear-gradient(135deg, rgba(67, 233, 123, 0.1), rgba(56, 249, 215, 0.1)); border-radius: 8px;">
                    <div style="font-weight: 600; color: #059669; margin-bottom: 10px;">生态伙伴</div>
                    ${parkIndustryProfile.strategicNeeds.ecosystemPartners.map(partner =>
                        `<div style="padding: 6px 0; color: #4a5568;">• ${partner}</div>`
                    ).join('')}
                </div>
            </div>
            <div style="padding: 15px; background: linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(245, 158, 11, 0.1)); border-radius: 8px; margin-top: 15px;">
                <div style="font-weight: 600; color: #ea580c; margin-bottom: 10px;">创新驱动力</div>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    ${parkIndustryProfile.strategicNeeds.innovationDrivers.map(driver =>
                        `<span class="badge" style="background: #fed7aa; color: #9a3412; padding: 8px 14px;">${driver}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;

    showModal('园区产业方向画像', html, 'large');
}

/**
 * 查看匹配详情
 */
function showMatchDetail(enterpriseId) {
    matchIndustryCompatibility(enterpriseId);
}

/**
 * 生成并展示可行性报告
 */
function generateAndShowReport(enterpriseId) {
    const enterprise = enterpriseProfiles.find(e => e.id === enterpriseId);
    if (!enterprise) return;

    showNotification('正在生成企业引进可行性报告...', 'info');

    setTimeout(() => {
        const matchResult = calculateIndustryMatch(enterprise);
        const report = generateFeasibilityReport(enterprise, matchResult);
        displayFeasibilityReport(report);
        showNotification('可行性报告生成成功', 'success');
    }, 1000);
}

/**
 * 展示可行性报告
 */
function displayFeasibilityReport(report) {
    const html = `
        <div style="max-height: 70vh; overflow-y: auto; padding-right: 10px;">
            <!-- 报告头部 -->
            <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #0238C1 0%, #667eea 100%); color: white; border-radius: 8px; margin-bottom: 25px;">
                <h2 style="margin: 0 0 10px 0; color: white;">企业引进可行性报告</h2>
                <div style="font-size: 14px; opacity: 0.9;">
                    报告编号: ${report.reportId} | 生成时间: ${report.generateTime}
                </div>
            </div>

            <!-- 企业概况 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; border-bottom: 2px solid #0238C1; padding-bottom: 8px; margin-bottom: 15px;">
                    一、企业基本概况
                </h3>
                <div class="grid-2" style="gap: 15px;">
                    <div class="info-item">
                        <div class="info-label">企业名称</div>
                        <div class="info-value">${report.enterprise.name}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">企业类型</div>
                        <div class="info-value">${report.basicInfo.registeredCapital}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">成立日期</div>
                        <div class="info-value">${report.basicInfo.foundDate}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">员工规模</div>
                        <div class="info-value">${report.basicInfo.employees}人</div>
                    </div>
                </div>
                <div style="margin-top: 15px; padding: 12px; background: #f7fafc; border-radius: 6px;">
                    <div style="font-weight: 500; color: #718096; margin-bottom: 5px;">经营范围</div>
                    <div style="color: #2d3748;">${report.basicInfo.businessScope}</div>
                </div>
            </div>

            <!-- 经营状况 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; border-bottom: 2px solid #0238C1; padding-bottom: 8px; margin-bottom: 15px;">
                    二、经营状况分析
                </h3>
                <div class="grid-3" style="gap: 15px;">
                    <div style="text-align: center; padding: 15px; background: #f7fafc; border-radius: 8px;">
                        <div style="font-size: 12px; color: #718096; margin-bottom: 8px;">2023年营收</div>
                        <div style="font-size: 24px; font-weight: 700; color: #0238C1;">${report.businessAnalysis.revenue2023.toLocaleString()}</div>
                        <div style="font-size: 12px; color: #718096;">万元</div>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f7fafc; border-radius: 8px;">
                        <div style="font-size: 12px; color: #718096; margin-bottom: 8px;">年增长率</div>
                        <div style="font-size: 24px; font-weight: 700; color: #059669;">+${report.businessAnalysis.growthRate}%</div>
                        <div style="font-size: 12px; color: #718096;">同比</div>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f7fafc; border-radius: 8px;">
                        <div style="font-size: 12px; color: #718096; margin-bottom: 8px;">研发投入</div>
                        <div style="font-size: 24px; font-weight: 700; color: #7c3aed;">${report.businessAnalysis.rdRatio}%</div>
                        <div style="font-size: 12px; color: #718096;">营收占比</div>
                    </div>
                </div>
            </div>

            <!-- 技术创新 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; border-bottom: 2px solid #0238C1; padding-bottom: 8px; margin-bottom: 15px;">
                    三、技术创新能力
                </h3>
                <div style="display: flex; gap: 20px; align-items: center;">
                    <div style="flex: 1; text-align: center; padding: 20px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); border-radius: 8px;">
                        <div style="font-size: 48px; font-weight: 700; color: #667eea;">${report.innovation.totalPatents}</div>
                        <div style="color: #718096; margin-top: 8px;">专利总数</div>
                    </div>
                    <div style="flex: 1; text-align: center; padding: 20px; background: linear-gradient(135deg, rgba(67, 233, 123, 0.1), rgba(56, 249, 215, 0.1)); border-radius: 8px;">
                        <div style="font-size: 48px; font-weight: 700; color: #059669;">${report.innovation.inventionPatents}</div>
                        <div style="color: #718096; margin-top: 8px;">发明专利</div>
                    </div>
                    <div style="flex: 1; text-align: center; padding: 20px; background: linear-gradient(135deg, rgba(251, 146, 60, 0.1), rgba(245, 158, 11, 0.1)); border-radius: 8px;">
                        <div style="font-size: 48px; font-weight: 700; color: #ea580c;">${report.innovation.recentYearPatents}</div>
                        <div style="color: #718096; margin-top: 8px;">近年新增</div>
                    </div>
                </div>
            </div>

            <!-- 市场地位 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; border-bottom: 2px solid #0238C1; padding-bottom: 8px; margin-bottom: 15px;">
                    四、市场地位与融资情况
                </h3>
                <div class="grid-2" style="gap: 15px; margin-bottom: 15px;">
                    <div class="info-item">
                        <div class="info-label">行业地位</div>
                        <div class="info-value">${report.marketPosition.ranking}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">市场份额</div>
                        <div class="info-value">${report.marketPosition.marketShare}%</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">融资轮次</div>
                        <div class="info-value">${report.marketPosition.financing.latestRound}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">累计融资</div>
                        <div class="info-value">${report.marketPosition.financing.totalRaised}</div>
                    </div>
                </div>
                ${report.marketPosition.isUnicorn ? '<div class="badge" style="background: #9333ea; color: white; font-size: 14px; padding: 8px 16px;">🦄 独角兽企业</div>' : ''}
                ${report.marketPosition.isLeader ? '<div class="badge" style="background: #0238C1; color: white; font-size: 14px; padding: 8px 16px; margin-left: 10px;">🏆 行业龙头</div>' : ''}
            </div>

            <!-- 产业契合度 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; border-bottom: 2px solid #0238C1; padding-bottom: 8px; margin-bottom: 15px;">
                    五、产业契合度分析
                </h3>
                <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, ${report.grade.color}10, ${report.grade.color}05); border-radius: 8px; margin-bottom: 20px;">
                    <div style="font-size: 64px; font-weight: 700; color: ${report.grade.color};">${report.matchScore}</div>
                    <div style="margin: 15px 0;">
                        <span class="badge" style="background: ${report.grade.color}; color: white; font-size: 18px; padding: 10px 20px;">
                            ${report.grade.grade} - ${report.grade.label}
                        </span>
                    </div>
                </div>

                <h4 style="margin: 20px 0 10px 0; color: #4a5568;">匹配的产业方向：</h4>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    ${report.industryMatch.matchedIndustries.map(ind => `
                        <span class="badge badge-info" style="font-size: 13px; padding: 8px 14px;">
                            ${ind.name} (${ind.matchRate}%)
                        </span>
                    `).join('')}
                </div>

                ${report.industryMatch.qualityTags.length > 0 ? `
                    <h4 style="margin: 20px 0 10px 0; color: #4a5568;">优质标的标签：</h4>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        ${report.industryMatch.qualityTags.map(tag => `
                            <span class="badge" style="background: ${tag.color}20; color: ${tag.color}; font-size: 13px; padding: 8px 14px;">
                                ${tag.label}
                            </span>
                        `).join('')}
                    </div>
                ` : ''}
            </div>

            <!-- 可行性评估 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; border-bottom: 2px solid #0238C1; padding-bottom: 8px; margin-bottom: 15px;">
                    六、引进可行性评估
                </h3>
                <div style="padding: 20px; background: ${report.matchScore >= 7 ? '#d1fae5' : '#fed7aa'}; border-radius: 8px; margin-bottom: 20px;">
                    <div style="font-size: 18px; font-weight: 600; color: #1f2937; text-align: center;">
                        ${report.feasibilityAssessment.feasibility}
                    </div>
                </div>

                ${report.feasibilityAssessment.recommendations.length > 0 ? `
                    <h4 style="margin: 15px 0 10px 0; color: #4a5568;">具体建议：</h4>
                    <ol style="padding-left: 20px;">
                        ${report.feasibilityAssessment.recommendations.map(rec => `
                            <li style="padding: 8px 0; color: #4a5568; line-height: 1.6;">${rec}</li>
                        `).join('')}
                    </ol>
                ` : ''}
            </div>

            <!-- 综合建议 -->
            <div style="margin-bottom: 20px;">
                <h3 style="color: #2d3748; border-bottom: 2px solid #0238C1; padding-bottom: 8px; margin-bottom: 15px;">
                    七、综合建议
                </h3>
                <div class="grid-3" style="gap: 15px;">
                    <div style="text-align: center; padding: 20px; background: #f7fafc; border-radius: 8px;">
                        <div style="font-size: 12px; color: #718096; margin-bottom: 8px;">综合评价</div>
                        <div style="font-size: 20px; font-weight: 600; color: #2d3748;">${report.conclusion.overallAssessment}</div>
                    </div>
                    <div style="text-align: center; padding: 20px; background: #f7fafc; border-radius: 8px;">
                        <div style="font-size: 12px; color: #718096; margin-bottom: 8px;">引进建议</div>
                        <div style="font-size: 20px; font-weight: 600; color: #2d3748;">${report.conclusion.recommendation}</div>
                    </div>
                    <div style="text-align: center; padding: 20px; background: #f7fafc; border-radius: 8px;">
                        <div style="font-size: 12px; color: #718096; margin-bottom: 8px;">优先级</div>
                        <div style="font-size: 20px; font-weight: 600; color: ${report.conclusion.priority === '高' ? '#059669' : report.conclusion.priority === '中' ? '#f59e0b' : '#718096'};">
                            ${report.conclusion.priority}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center;">
            <button class="btn btn-primary" onclick="exportReport('${report.reportId}')" style="padding: 12px 30px;">
                📥 导出完整报告 (PDF)
            </button>
        </div>
    `;

    showModal('企业引进可行性报告', html, 'xlarge');
}

/**
 * 导出匹配结果
 */
function exportMatchResult(enterpriseId) {
    showNotification('正在导出分析结果...', 'info');
    setTimeout(() => {
        showNotification('分析结果已导出到Excel', 'success');
    }, 1000);
}

/**
 * 导出报告
 */
function exportReport(reportId) {
    showNotification('正在生成PDF报告...', 'info');
    setTimeout(() => {
        showNotification('PDF报告已生成并下载', 'success');
    }, 1500);
}

/**
 * 批量分析企业
 */
function batchAnalyzeEnterprises() {
    showNotification('批量分析功能开发中，敬请期待', 'info');
}

// ==================== 企业自动识别功能 ====================

/**
 * 渲染已发现的企业列表
 */
function renderDiscoveredEnterprises(enterprises) {
    if (!enterprises || enterprises.length === 0) {
        return '<div style="padding: 40px; text-align: center; color: #718096;">暂无发现的企业</div>';
    }

    return enterprises.map(ent => {
        const signalScore = calculateSignalScore(ent.signals);
        const signalGrade = getSignalGrade(signalScore);
        const sourceConfig = dataSourceTypes[ent.discoverySource.type];

        return `
            <div class="mini-card" style="margin-bottom: 15px; cursor: pointer; transition: all 0.3s;" onclick="showDiscoveryDetail('${ent.id}')">
                <!-- 企业头部信息 -->
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <div style="flex: 1;">
                        <h3 style="margin: 0 0 8px 0; color: #2d3748; font-size: 18px;">${ent.companyName}</h3>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 10px;">
                            <span class="badge badge-info">${ent.industry}</span>
                            <span class="badge" style="background: ${sourceConfig.color}20; color: ${sourceConfig.color};">
                                ${sourceConfig.name}
                            </span>
                            <span class="badge" style="background: ${signalGrade.color}20; color: ${signalGrade.color};">
                                ${signalGrade.label} (${signalScore}分)
                            </span>
                            <span class="badge ${ent.aiAnalysis.priority === '高' ? 'badge-danger' : ent.aiAnalysis.priority === '中' ? 'badge-warning' : 'badge-info'}">
                                ${ent.aiAnalysis.priority}优先级
                            </span>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 12px; color: #a0aec0;">${ent.discoverySource.date}</div>
                    </div>
                </div>

                <!-- 发现来源 -->
                <div style="padding: 12px; background: #f7fafc; border-radius: 6px; border-left: 3px solid ${sourceConfig.color}; margin-bottom: 15px;">
                    <div style="font-weight: 600; color: #2d3748; margin-bottom: 5px;">${ent.discoverySource.title}</div>
                    <div style="font-size: 13px; color: #718096; line-height: 1.5;">${ent.discoverySource.summary}</div>
                </div>

                <!-- 扩张信号 -->
                ${ent.signals.length > 0 ? `
                    <div style="margin-bottom: 15px;">
                        <h4 style="font-size: 14px; color: #4a5568; margin-bottom: 10px;">检测到的扩张信号：</h4>
                        <div style="display: grid; gap: 10px;">
                            ${ent.signals.map(signal => {
                                const signalConfig = potentialSignals[signal.type];
                                return `
                                    <div style="padding: 10px; background: ${signalConfig.color}10; border-radius: 6px; border-left: 3px solid ${signalConfig.color};">
                                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                            <span style="font-weight: 600; color: ${signalConfig.color};">
                                                ${signalConfig.name}
                                            </span>
                                            <span style="font-size: 12px; color: #718096;">
                                                置信度: ${(signal.confidence * 100).toFixed(0)}%
                                            </span>
                                        </div>
                                        <div style="font-size: 13px; color: #4a5568;">${signal.evidence}</div>
                                        <div style="font-size: 12px; color: #a0aec0; margin-top: 5px;">
                                            来源: ${signal.source} | ${signal.date}
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- 企业亮点 -->
                <div style="margin-bottom: 15px;">
                    <h4 style="font-size: 14px; color: #4a5568; margin-bottom: 10px;">企业亮点：</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px;">
                        ${ent.highlights.map(highlight => `
                            <div style="padding: 8px; background: #f7fafc; border-radius: 4px; font-size: 13px; color: #4a5568;">
                                ${highlight}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- AI分析建议 -->
                <div style="padding: 12px; background: linear-gradient(135deg, rgba(67, 233, 123, 0.1), rgba(56, 249, 215, 0.1)); border-radius: 6px; margin-bottom: 15px;">
                    <h4 style="font-size: 14px; color: #059669; margin-bottom: 8px;">AI综合分析：</h4>
                    <div style="font-size: 13px; color: #2d3748; line-height: 1.6;">
                        <div style="margin-bottom: 5px;"><strong>成长潜力：</strong> ${ent.aiAnalysis.growthPotential}</div>
                        <div style="margin-bottom: 5px;"><strong>产业契合：</strong> ${ent.aiAnalysis.industryFit}</div>
                        <div><strong>招商建议：</strong> ${ent.aiAnalysis.recommendation}</div>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div style="display: flex; gap: 10px; justify-content: flex-end;">
                    <button class="btn btn-secondary" onclick="event.stopPropagation(); generateDiscoveryReport('${ent.id}')" style="font-size: 13px;">
                        📄 生成分析报告
                    </button>
                    <button class="btn btn-primary" onclick="event.stopPropagation(); initiateContact('${ent.id}')" style="font-size: 13px;">
                        📞 发起接触
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

/**
 * 应用筛选条件
 */
function applyDiscoveryFilters() {
    const filters = {
        timeRange: document.getElementById('discoveryTimeRange')?.value || 'month',
        industry: document.getElementById('discoveryIndustry')?.value || 'all',
        signalType: document.getElementById('discoverySignal')?.value || 'all',
        priority: document.getElementById('discoveryPriority')?.value || 'all',
        keyword: document.getElementById('discoveryKeyword')?.value || ''
    };

    const filtered = filterEnterprises(discoveredEnterprises, filters);

    // 更新列表
    const listContainer = document.getElementById('discoveredEnterpriseList');
    if (listContainer) {
        listContainer.innerHTML = renderDiscoveredEnterprises(filtered);
    }

    // 更新统计
    updateDiscoveryStats(filtered);
}

/**
 * 更新统计数据
 */
function updateDiscoveryStats(enterprises) {
    const strongSignals = enterprises.filter(ent => calculateSignalScore(ent.signals) >= 8.0);
    const highPriority = enterprises.filter(ent => ent.aiAnalysis.priority === '高');

    document.getElementById('discoveredCount').textContent = enterprises.length;
    document.getElementById('strongSignalCount').textContent = strongSignals.length;
    document.getElementById('highPriorityCount').textContent = highPriority.length;
}

/**
 * 显示企业发现详情
 */
function showDiscoveryDetail(enterpriseId) {
    const enterprise = discoveredEnterprises.find(e => e.id === enterpriseId);
    if (!enterprise) return;

    const signalScore = calculateSignalScore(enterprise.signals);
    const signalGrade = getSignalGrade(signalScore);
    const sourceConfig = dataSourceTypes[enterprise.discoverySource.type];

    const html = `
        <div style="max-height: 70vh; overflow-y: auto; padding-right: 10px;">
            <!-- 企业基本信息 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; border-bottom: 2px solid #0238C1; padding-bottom: 10px; margin-bottom: 15px;">
                    一、企业基本信息
                </h3>
                <div class="grid-2" style="gap: 15px;">
                    <div class="info-item">
                        <div class="info-label">企业名称</div>
                        <div class="info-value">${enterprise.companyName}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">所属行业</div>
                        <div class="info-value">${enterprise.industry}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">注册资本</div>
                        <div class="info-value">${enterprise.registeredCapital}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">成立日期</div>
                        <div class="info-value">${enterprise.foundDate}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">所在地区</div>
                        <div class="info-value">${enterprise.location}</div>
                    </div>
                </div>
            </div>

            <!-- 发现来源 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; border-bottom: 2px solid #0238C1; padding-bottom: 10px; margin-bottom: 15px;">
                    二、发现来源
                </h3>
                <div style="padding: 15px; background: ${sourceConfig.color}10; border-radius: 8px; border-left: 4px solid ${sourceConfig.color};">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                        <div>
                            <div style="font-weight: 600; color: #2d3748;">${sourceConfig.name}</div>
                            <div style="font-size: 12px; color: #718096;">${enterprise.discoverySource.date}</div>
                        </div>
                    </div>
                    <div style="font-weight: 600; color: #2d3748; margin-bottom: 8px; font-size: 16px;">
                        ${enterprise.discoverySource.title}
                    </div>
                    <div style="color: #4a5568; line-height: 1.6;">
                        ${enterprise.discoverySource.summary}
                    </div>
                </div>
            </div>

            <!-- 扩张信号分析 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; border-bottom: 2px solid #0238C1; padding-bottom: 10px; margin-bottom: 15px;">
                    三、扩张信号分析
                </h3>
                <div style="text-align: center; padding: 20px; background: ${signalGrade.color}10; border-radius: 8px; margin-bottom: 15px;">
                    <div style="font-size: 48px; font-weight: 700; color: ${signalGrade.color};">${signalScore}</div>
                    <div style="margin-top: 10px;">
                        <span class="badge" style="background: ${signalGrade.color}; color: white; font-size: 14px; padding: 8px 16px;">
                            ${signalGrade.label}
                        </span>
                    </div>
                </div>

                ${enterprise.signals.map(signal => {
                    const signalConfig = potentialSignals[signal.type];
                    return `
                        <div style="padding: 15px; background: #f7fafc; border-radius: 8px; border-left: 4px solid ${signalConfig.color}; margin-bottom: 10px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                                <div style="font-weight: 600; color: #2d3748; font-size: 16px;">
                                    ${signalConfig.name}
                                </div>
                                <div>
                                    <span class="badge" style="background: ${signalConfig.color}20; color: ${signalConfig.color};">
                                        置信度: ${(signal.confidence * 100).toFixed(0)}%
                                    </span>
                                </div>
                            </div>
                            <div style="color: #4a5568; margin-bottom: 8px; line-height: 1.6;">
                                <strong>证据：</strong>${signal.evidence}
                            </div>
                            <div style="font-size: 13px; color: #718096;">
                                来源: ${signal.source} | 日期: ${signal.date}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>

            <!-- 企业亮点 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; border-bottom: 2px solid #0238C1; padding-bottom: 10px; margin-bottom: 15px;">
                    四、企业亮点
                </h3>
                <div style="display: grid; gap: 10px;">
                    ${enterprise.highlights.map(highlight => `
                        <div style="padding: 12px; background: #f7fafc; border-radius: 6px; color: #2d3748;">
                            ${highlight}
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- AI综合分析 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; border-bottom: 2px solid #0238C1; padding-bottom: 10px; margin-bottom: 15px;">
                    五、AI综合分析
                </h3>
                <div style="padding: 20px; background: linear-gradient(135deg, rgba(67, 233, 123, 0.1), rgba(56, 249, 215, 0.1)); border-radius: 8px;">
                    <div class="grid-2" style="gap: 15px; margin-bottom: 15px;">
                        <div class="info-item">
                            <div class="info-label">成长潜力</div>
                            <div class="info-value" style="color: #059669;">${enterprise.aiAnalysis.growthPotential}</div>
                        </div>
                        <div class="info-item">
                            <div class="info-label">优先级</div>
                            <div class="info-value" style="color: ${enterprise.aiAnalysis.priority === '高' ? '#dc2626' : '#f59e0b'};">${enterprise.aiAnalysis.priority}</div>
                        </div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <div style="font-weight: 600; color: #2d3748; margin-bottom: 8px;">产业契合度：</div>
                        <div style="color: #4a5568; line-height: 1.6;">${enterprise.aiAnalysis.industryFit}</div>
                    </div>
                    <div>
                        <div style="font-weight: 600; color: #2d3748; margin-bottom: 8px;">招商建议：</div>
                        <div style="color: #4a5568; line-height: 1.6;">${enterprise.aiAnalysis.recommendation}</div>
                    </div>
                </div>
            </div>
        </div>

        <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #e2e8f0; display: flex; gap: 15px; justify-content: center;">
            <button class="btn btn-primary" onclick="generateDiscoveryReport('${enterprise.id}')" style="padding: 12px 30px;">
                📄 生成完整报告
            </button>
            <button class="btn btn-secondary" onclick="initiateContact('${enterprise.id}')" style="padding: 12px 30px;">
                📞 发起接触
            </button>
        </div>
    `;

    showModal(`${enterprise.companyName} - 企业发现详情`, html, 'xlarge');
}

/**
 * 生成企业发现报告
 */
async function generateDiscoveryReport(enterpriseId) {
    const enterprise = discoveredEnterprises.find(e => e.id === enterpriseId);
    if (!enterprise) return;

    showNotification('正在生成企业发现报告...', 'info');

    // 模拟报告生成
    setTimeout(() => {
        showNotification('报告生成成功', 'success');
        // 实际应用中，这里会调用后端API生成PDF报告
        console.log('生成报告:', enterprise);
    }, 1500);
}

/**
 * 发起接触
 */
function initiateContact(enterpriseId) {
    const enterprise = discoveredEnterprises.find(e => e.id === enterpriseId);
    if (!enterprise) return;

    const html = `
        <div style="padding: 20px;">
            <p style="margin-bottom: 20px; color: #4a5568; line-height: 1.6;">
                确认要对 <strong style="color: #0238C1;">${enterprise.companyName}</strong> 发起接触吗？
            </p>
            <p style="margin-bottom: 20px; color: #718096; font-size: 14px;">
                系统将自动：<br/>
                • 记录接触时间和跟进人员<br/>
                • 发送园区介绍资料到企业邮箱<br/>
                • 创建跟进任务提醒<br/>
                • 加入招商项目池
            </p>
            <div style="display: flex; gap: 15px; justify-content: center;">
                <button class="btn btn-secondary" onclick="closeModal()">取消</button>
                <button class="btn btn-primary" onclick="confirmContact('${enterpriseId}')">确认发起</button>
            </div>
        </div>
    `;

    showModal('发起接触确认', html);
}

/**
 * 确认发起接触
 */
function confirmContact(enterpriseId) {
    closeModal();
    showNotification('正在发起接触...', 'info');

    setTimeout(() => {
        showNotification('接触已发起，已加入跟进任务列表', 'success');
    }, 1000);
}

/**
 * 启动自动搜寻
 */
async function runAutoDiscovery() {
    showNotification('正在启动AI自动搜寻任务...', 'info');

    try {
        const result = await runAutoDiscoveryTask({
            industries: ['AI', '集成电路', '生物医药', '新能源', '工业互联网', '数字经济'],
            timeRange: 'week',
            sources: ['news', 'financing', 'patent', 'ma']
        });

        showNotification(`自动搜寻完成！扫描 ${result.results.totalScanned} 条信息，识别出 ${result.results.growthEnterprises} 家成长性企业`, 'success');

        // 刷新列表
        applyDiscoveryFilters();
    } catch (error) {
        showNotification('自动搜寻任务启动失败', 'error');
    }
}

/**
 * 导出发现结果
 */
function exportDiscoveryResults() {
    showNotification('正在导出企业发现结果...', 'info');

    setTimeout(() => {
        showNotification('结果已导出到Excel', 'success');
    }, 1000);
}

// ==================== 产业链AI动态监测功能 ====================

/**
 * 切换监测子Tab
 */
function switchMonitorTab(tabName) {
    // 移除所有active状态
    document.querySelectorAll('#pre-industry-analysis .tabs button').forEach(btn => {
        btn.classList.remove('active');
        btn.style.borderBottom = '3px solid transparent';
        btn.style.color = '#4a5568';
    });

    // 隐藏所有内容
    document.querySelectorAll('.monitor-tab-content').forEach(content => {
        content.style.display = 'none';
    });

    // 激活当前tab
    event.target.classList.add('active');
    event.target.style.borderBottom = '3px solid #0238C1';
    event.target.style.color = '#0238C1';

    // 显示对应内容
    const contentId = 'monitor-' + tabName;
    document.getElementById(contentId).style.display = 'block';

    // 根据tab加载对应数据
    if (tabName === 'overview' && !document.getElementById('industryFieldsList').children.length) {
        renderIndustryFields();
    } else if (tabName === 'prosperity' && !document.getElementById('prosperityAnalysis').children.length) {
        renderProsperityAnalysis();
    } else if (tabName === 'opportunities' && !document.getElementById('opportunitiesList').children.length) {
        renderOpportunities();
    } else if (tabName === 'risks' && !document.getElementById('risksList').children.length) {
        renderRisks();
    } else if (tabName === 'reports' && !document.getElementById('automatedReports').children.length) {
        renderAutomatedReports();
    }
}

/**
 * 渲染产业领域总览
 */
function renderIndustryFields() {
    const container = document.getElementById('industryFieldsList');

    let html = '<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">';

    digitalEconomyFields.forEach(field => {
        const growthChange = monitorEnterpriseGrowth(field);
        const score = calculateIndustryScore(field.id);

        html += `
            <div class="card" style="background: white; border-radius: 10px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid ${field.color};">
                <!-- 头部 -->
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <div>
                        <h3 style="margin: 0 0 8px 0; color: #2d3748; font-size: 18px;">
                            ${field.name}
                        </h3>
                        <div style="color: #718096; font-size: 13px;">
                            ${field.enterprises}家企业 · 增速${field.growth.current}%
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 24px; font-weight: bold; color: ${field.color};">${score}</div>
                        <div style="font-size: 12px; color: #718096;">综合评分</div>
                    </div>
                </div>

                <!-- 增速监测 -->
                <div style="background: #f7fafc; padding: 12px; border-radius: 6px; margin-bottom: 15px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <span style="font-weight: 500; color: #4a5568; font-size: 13px;">企业增速变化</span>
                        <span class="${growthChange.trend === 'up' ? 'trend-up' : 'trend-down'}" style="font-weight: bold;">
                            ${growthChange.change > 0 ? '+' : ''}${growthChange.change.toFixed(1)}%
                        </span>
                    </div>
                    <div style="color: #718096; font-size: 12px;">
                        ${growthChange.recommendation}
                    </div>
                </div>

                <!-- 知识图谱节点 -->
                <div style="margin-bottom: 15px;">
                    <div style="font-weight: 500; color: #4a5568; font-size: 13px; margin-bottom: 8px;">🔗 产业链关键节点</div>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        ${field.knowledgeGraph.nodes.slice(0, 5).map(node =>
                            `<span style="background: ${field.color}15; color: ${field.color}; padding: 4px 10px; border-radius: 12px; font-size: 12px;">${node}</span>`
                        ).join('')}
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div style="display: flex; gap: 10px; margin-top: 15px;">
                    <button class="btn btn-primary" onclick="showKnowledgeGraph('${field.id}')" style="flex: 1; padding: 8px; font-size: 13px;">
                        查看知识图谱
                    </button>
                    <button class="btn btn-secondary" onclick="analyzeProsperityDetail('${field.id}')" style="flex: 1; padding: 8px; font-size: 13px;">
                        景气度分析
                    </button>
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

/**
 * 渲染景气度监测
 */
function renderProsperityAnalysis() {
    const container = document.getElementById('prosperityAnalysis');

    let html = `
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #2d3748;">行业景气度综合分析</h3>
            <p style="color: #718096; font-size: 14px; line-height: 1.6;">
                基于<strong>招聘、融资、舆情、政策</strong>四大维度实时监测行业景气度，AI智能评分并预测趋势
            </p>
        </div>
    `;

    // 政策密度热力图
    const policyData = getPolicyHeatmapData();
    html += `
        <div class="card" style="background: white; border-radius: 10px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px;">
            <h4 style="margin: 0 0 15px 0; color: #2d3748;">🔥 政策密度热力图</h4>
            <div style="display: grid; gap: 10px;">
                ${policyData.map((item, index) => {
                    const width = (item.value / policyData[0].value * 100);
                    const densityColor = item.density === 'very-high' ? '#dc2626' :
                                        item.density === 'high' ? '#f59e0b' : '#059669';
                    return `
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="width: 120px; font-size: 14px; color: #4a5568;">${item.name}</div>
                            <div style="flex: 1; background: #f7fafc; border-radius: 6px; height: 32px; position: relative; overflow: hidden;">
                                <div style="position: absolute; left: 0; top: 0; height: 100%; width: ${width}%; background: linear-gradient(90deg, ${densityColor}88, ${densityColor}); border-radius: 6px; transition: width 0.5s;"></div>
                                <div style="position: absolute; left: 12px; top: 50%; transform: translateY(-50%); font-size: 13px; font-weight: 600; color: white; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
                                    ${item.value}项政策
                                </div>
                            </div>
                            <div style="width: 80px; text-align: right;">
                                <span class="badge" style="background: ${densityColor}; color: white; font-size: 11px;">${item.impact}</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;

    // 行业景气度详细分析
    html += '<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">';

    for (const [industryId, prosperity] of Object.entries(industryProsperityData)) {
        const field = digitalEconomyFields.find(f => f.id === industryId);
        if (!field) continue;

        html += `
            <div class="card" style="background: white; border-radius: 10px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <h4 style="margin: 0 0 15px 0; color: #2d3748;">${field.name}</h4>

                <!-- 四维度指标 -->
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 15px;">
                    <!-- 招聘 -->
                    <div style="background: #f0f9ff; padding: 12px; border-radius: 6px;">
                        <div style="font-size: 12px; color: #0369a1; margin-bottom: 4px;">招聘热度</div>
                        <div style="font-size: 20px; font-weight: bold; color: #0c4a6e;">${prosperity.recruitment.total}</div>
                        <div style="font-size: 11px; color: #0369a1;">增长+${prosperity.recruitment.growth}%</div>
                    </div>

                    <!-- 融资 -->
                    <div style="background: #f0fdf4; padding: 12px; border-radius: 6px;">
                        <div style="font-size: 12px; color: #15803d; margin-bottom: 4px;">融资活跃度</div>
                        <div style="font-size: 20px; font-weight: bold; color: #166534;">${prosperity.financing.events}起</div>
                        <div style="font-size: 11px; color: #15803d;">${prosperity.financing.amount}</div>
                    </div>

                    <!-- 舆情 -->
                    <div style="background: #fef3c7; padding: 12px; border-radius: 6px;">
                        <div style="font-size: 12px; color: #d97706; margin-bottom: 4px;">📰 舆情热度</div>
                        <div style="font-size: 20px; font-weight: bold; color: #92400e;">${prosperity.sentiment.score}</div>
                        <div style="font-size: 11px; color: #d97706;">正面${prosperity.sentiment.positive}%</div>
                    </div>

                    <!-- 政策 -->
                    <div style="background: #fce7f3; padding: 12px; border-radius: 6px;">
                        <div style="font-size: 12px; color: #be123c; margin-bottom: 4px;">政策支持</div>
                        <div style="font-size: 20px; font-weight: bold; color: #881337;">${prosperity.policy.count}项</div>
                        <div style="font-size: 11px; color: #be123c;">${prosperity.policy.impact}</div>
                    </div>
                </div>

                <!-- 热门话题 -->
                <div style="margin-bottom: 12px;">
                    <div style="font-size: 12px; color: #718096; margin-bottom: 6px;">🔥 热门话题</div>
                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                        ${prosperity.sentiment.hotTopics.map(topic =>
                            `<span style="background: #e2e8f0; color: #4a5568; padding: 3px 8px; border-radius: 10px; font-size: 11px;">${topic}</span>`
                        ).join('')}
                    </div>
                </div>

                <!-- AI分析按钮 -->
                <button class="btn btn-primary" onclick="runAIProsperityAnalysis('${industryId}')" style="width: 100%; padding: 8px; font-size: 13px;">
                    AI深度分析
                </button>
            </div>
        `;
    }

    html += '</div>';
    container.innerHTML = html;
}

/**
 * 渲染机会识别
 */
function renderOpportunities() {
    const container = document.getElementById('opportunitiesList');

    let html = `
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #2d3748;">AI识别的投资机会点</h3>
            <p style="color: #718096; font-size: 14px; line-height: 1.6;">
                基于多维度数据分析和AI判断，识别高置信度的投资机会，预测时间窗口和预期价值
            </p>
        </div>
    `;

    opportunitySpots.forEach(opp => {
        const field = digitalEconomyFields.find(f => f.id === opp.industry);
        const confidenceColor = opp.confidence >= 0.9 ? '#059669' :
                               opp.confidence >= 0.8 ? '#0ea5e9' : '#f59e0b';

        html += `
            <div class="card" style="background: white; border-radius: 10px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; border-left: 4px solid ${confidenceColor};">
                <!-- 标题和置信度 -->
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <div style="flex: 1;">
                        <h4 style="margin: 0 0 8px 0; color: #2d3748; font-size: 18px;">
                            ${opp.title}
                        </h4>
                        <div style="display: flex; gap: 8px; align-items: center;">
                            <span style="background: ${field?.color || '#718096'}20; color: ${field?.color || '#718096'}; padding: 4px 12px; border-radius: 12px; font-size: 12px;">
                                ${field?.name || opp.industry}
                            </span>
                            <span class="badge" style="background: ${opp.type === 'policy-driven' ? '#7c3aed' : '#0ea5e9'}; color: white; font-size: 11px;">
                                ${opp.type === 'policy-driven' ? '政策驱动' : opp.type === 'market-driven' ? '市场驱动' : '合规驱动'}
                            </span>
                            <span style="color: #718096; font-size: 12px;">${opp.timeWindow}</span>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 32px; font-weight: bold; color: ${confidenceColor};">
                            ${(opp.confidence * 100).toFixed(0)}%
                        </div>
                        <div style="font-size: 12px; color: #718096;">置信度</div>
                    </div>
                </div>

                <!-- 描述 -->
                <div style="background: #f7fafc; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
                    <p style="margin: 0; color: #4a5568; font-size: 14px; line-height: 1.6;">
                        ${opp.description}
                    </p>
                </div>

                <!-- 关键指标 -->
                <div style="margin-bottom: 15px;">
                    <div style="font-weight: 500; color: #2d3748; margin-bottom: 10px; font-size: 14px;">关键指标</div>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                        ${opp.indicators.map(indicator =>
                            `<div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 10px; border-radius: 6px; font-size: 13px; color: #4a5568;">
                                ✓ ${indicator}
                            </div>`
                        ).join('')}
                    </div>
                </div>

                <!-- 行动计划 -->
                <div style="margin-bottom: 15px;">
                    <div style="font-weight: 500; color: #2d3748; margin-bottom: 10px; font-size: 14px;">行动计划</div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        ${opp.actionPlan.map((action, index) =>
                            `<div style="display: flex; gap: 10px; align-items: start;">
                                <div style="min-width: 24px; height: 24px; background: ${confidenceColor}; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">
                                    ${index + 1}
                                </div>
                                <div style="flex: 1; padding-top: 2px; font-size: 13px; color: #4a5568;">
                                    ${action}
                                </div>
                            </div>`
                        ).join('')}
                    </div>
                </div>

                <!-- 底部信息 -->
                <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 15px; border-top: 1px solid #e2e8f0;">
                    <div>
                        <span style="font-size: 13px; color: #718096;">目标企业：</span>
                        <span style="font-weight: 600; color: #2d3748;">${opp.targetEnterprises}家</span>
                        <span style="margin: 0 8px; color: #cbd5e0;">|</span>
                        <span style="font-size: 13px; color: #718096;">预期价值：</span>
                        <span style="font-weight: 600; color: #059669;">${opp.estimatedValue}</span>
                    </div>
                    <button class="btn btn-primary" onclick="generateOpportunityReport('${opp.id}')" style="padding: 8px 20px; font-size: 13px;">
                        生成机会报告
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

/**
 * 渲染风险预警
 */
function renderRisks() {
    const container = document.getElementById('risksList');

    let html = `
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #2d3748;">产业链风险预警</h3>
            <p style="color: #718096; font-size: 14px; line-height: 1.6;">
                AI持续监测产业发展风险，提前预警并提供应对建议
            </p>
        </div>
    `;

    riskSpots.forEach(risk => {
        const severityColor = risk.severity === 'high' ? '#dc2626' :
                             risk.severity === 'medium-high' ? '#f59e0b' : '#0ea5e9';
        const severityText = risk.severity === 'high' ? '高风险' :
                            risk.severity === 'medium-high' ? '中高风险' : '中等风险';

        html += `
            <div class="card" style="background: white; border-radius: 10px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; border-left: 4px solid ${severityColor};">
                <!-- 标题 -->
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <div style="flex: 1;">
                        <h4 style="margin: 0 0 8px 0; color: #2d3748; font-size: 18px;">
                            ${risk.title}
                        </h4>
                        <div style="display: flex; gap: 8px; align-items: center;">
                            <span class="badge" style="background: #71809620; color: #4a5568; font-size: 11px;">
                                ${risk.industry}
                            </span>
                            <span class="badge" style="background: ${severityColor}; color: white; font-size: 11px;">
                                ${severityText}
                            </span>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <div style="font-size: 32px; font-weight: bold; color: ${severityColor};">
                            ${(risk.probability * 100).toFixed(0)}%
                        </div>
                        <div style="font-size: 12px; color: #718096;">发生概率</div>
                    </div>
                </div>

                <!-- 影响描述 -->
                <div style="background: ${severityColor}10; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 3px solid ${severityColor};">
                    <div style="font-weight: 500; color: #2d3748; margin-bottom: 6px; font-size: 13px;">⚡ 潜在影响</div>
                    <p style="margin: 0; color: #4a5568; font-size: 14px; line-height: 1.6;">
                        ${risk.impact}
                    </p>
                </div>

                <!-- 预警指标 -->
                <div style="margin-bottom: 15px;">
                    <div style="font-weight: 500; color: #2d3748; margin-bottom: 10px; font-size: 14px;">预警指标</div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        ${risk.indicators.map(indicator =>
                            `<div style="background: #f7fafc; padding: 10px; border-radius: 6px; font-size: 13px; color: #4a5568; border-left: 3px solid ${severityColor};">
                                ${indicator}
                            </div>`
                        ).join('')}
                    </div>
                </div>

                <!-- 缓解措施 -->
                <div style="margin-bottom: 15px;">
                    <div style="font-weight: 500; color: #2d3748; margin-bottom: 10px; font-size: 14px;">🛡️ 建议缓解措施</div>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        ${risk.mitigation.map((measure, index) =>
                            `<div style="display: flex; gap: 10px; align-items: start;">
                                <div style="min-width: 24px; height: 24px; background: ${severityColor}; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">
                                    ${index + 1}
                                </div>
                                <div style="flex: 1; padding-top: 2px; font-size: 13px; color: #4a5568;">
                                    ${measure}
                                </div>
                            </div>`
                        ).join('')}
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div style="display: flex; gap: 10px; padding-top: 15px; border-top: 1px solid #e2e8f0;">
                    <button class="btn btn-primary" onclick="generateRiskReport('${risk.id}')" style="flex: 1; padding: 8px; font-size: 13px;">
                        生成风险报告
                    </button>
                    <button class="btn btn-secondary" onclick="runAIRiskAssessment('${risk.id}')" style="flex: 1; padding: 8px; font-size: 13px;">
                        AI深度评估
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

/**
 * 渲染自动化报告
 */
function renderAutomatedReports() {
    const container = document.getElementById('automatedReports');

    let html = `
        <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 15px 0; color: #2d3748;">📑 AI自动生成报告</h3>
            <p style="color: #718096; font-size: 14px; line-height: 1.6;">
                基于实时监测数据，AI每日/每周自动生成行业简报和趋势分析报告
            </p>
        </div>

        <!-- 报告类型选择 -->
        <div class="tabs" style="margin-bottom: 20px;">
            <button class="tab active" onclick="switchReportType('daily')" style="padding: 10px 20px;">
                每日简报
            </button>
            <button class="tab" onclick="switchReportType('weekly')" style="padding: 10px 20px;">
                每周报告
            </button>
        </div>

        <!-- 每日简报 -->
        <div id="daily-report" class="report-content">
            <div class="card" style="background: white; border-radius: 10px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <!-- 报告头部 -->
                <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 20px;">
                    <h4 style="margin: 0 0 8px 0; color: #2d3748; font-size: 20px;">
                        数字经济领域每日简报
                    </h4>
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div style="color: #718096; font-size: 14px;">
                            ${automatedReports.daily.date} · 由AI自动生成
                        </div>
                        <div style="display: flex; gap: 8px;">
                            <span class="badge badge-success">${automatedReports.daily.summary.keyEvents}个重点事件</span>
                            <span class="badge badge-info">${automatedReports.daily.summary.policyUpdates}项政策</span>
                        </div>
                    </div>
                </div>

                <!-- 今日热点行业 -->
                <div style="margin-bottom: 20px;">
                    <h5 style="margin: 0 0 12px 0; color: #2d3748;">🔥 今日热点行业</h5>
                    <div style="display: flex; gap: 8px;">
                        ${automatedReports.daily.summary.hotIndustries.map(industry =>
                            `<span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 6px 16px; border-radius: 16px; font-size: 13px; font-weight: 500;">
                                ${industry}
                            </span>`
                        ).join('')}
                    </div>
                </div>

                <!-- 重点事件 -->
                <div style="margin-bottom: 20px;">
                    <h5 style="margin: 0 0 12px 0; color: #2d3748;">📰 今日重点事件</h5>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        ${automatedReports.daily.keyEvents.map(event => {
                            const impactColor = event.impact === 'very-high' ? '#059669' :
                                              event.impact === 'high' ? '#0ea5e9' : '#f59e0b';
                            return `
                                <div style="background: #f7fafc; padding: 15px; border-radius: 8px; border-left: 4px solid ${impactColor};">
                                    <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 8px;">
                                        <div style="flex: 1;">
                                            <span style="color: #718096; font-size: 12px; margin-right: 12px;">${event.time}</span>
                                            <span class="badge" style="background: ${impactColor}20; color: ${impactColor}; font-size: 11px;">
                                                ${event.category}
                                            </span>
                                        </div>
                                    </div>
                                    <h6 style="margin: 0 0 8px 0; color: #2d3748; font-size: 15px;">${event.title}</h6>
                                    <p style="margin: 0; color: #4a5568; font-size: 13px; line-height: 1.5;">
                                        ${event.details}
                                    </p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- AI洞察 -->
                <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); padding: 20px; border-radius: 10px;">
                    <h5 style="margin: 0 0 12px 0; color: #2d3748;">AI智能洞察</h5>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        ${automatedReports.daily.aiInsights.map(insight =>
                            `<div style="display: flex; gap: 10px; align-items: start;">
                                <div style="min-width: 6px; height: 6px; background: #667eea; border-radius: 50%; margin-top: 7px;"></div>
                                <div style="flex: 1; font-size: 14px; color: #4a5568; line-height: 1.6;">
                                    ${insight}
                                </div>
                            </div>`
                        ).join('')}
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div style="display: flex; gap: 10px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                    <button class="btn btn-primary" onclick="exportDailyReport()" style="flex: 1;">
                        📥 导出PDF
                    </button>
                    <button class="btn btn-secondary" onclick="emailDailyReport()" style="flex: 1;">
                        📧 发送邮件
                    </button>
                    <button class="btn btn-secondary" onclick="regenerateDailyReport()" style="flex: 1;">
                        🔄 重新生成
                    </button>
                </div>
            </div>
        </div>

        <!-- 每周报告（初始隐藏） -->
        <div id="weekly-report" class="report-content" style="display: none;">
            <div class="card" style="background: white; border-radius: 10px; padding: 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <!-- 报告头部 -->
                <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 20px;">
                    <h4 style="margin: 0 0 8px 0; color: #2d3748; font-size: 20px;">
                        数字经济领域周报
                    </h4>
                    <div style="color: #718096; font-size: 14px;">
                        ${automatedReports.weekly.week} · 由AI自动生成
                    </div>
                </div>

                <!-- 本周综述 -->
                <div style="background: #f0f9ff; padding: 20px; border-radius: 10px; margin-bottom: 20px; border-left: 4px solid #0ea5e9;">
                    <h5 style="margin: 0 0 10px 0; color: #0c4a6e;">📝 本周综述</h5>
                    <p style="margin: 0; color: #0369a1; font-size: 14px; line-height: 1.6;">
                        ${automatedReports.weekly.summary.overview}
                    </p>
                    <div style="display: flex; gap: 15px; margin-top: 12px;">
                        <span style="font-size: 13px; color: #0369a1;">${automatedReports.weekly.summary.totalEvents}个事件</span>
                        <span style="font-size: 13px; color: #0369a1;">${automatedReports.weekly.summary.totalPolicies}项政策</span>
                        <span style="font-size: 13px; color: #0369a1;">${automatedReports.weekly.summary.totalFinancing}融资</span>
                    </div>
                </div>

                <!-- 行业热度排名 -->
                <div style="margin-bottom: 20px;">
                    <h5 style="margin: 0 0 12px 0; color: #2d3748;">🏆 行业景气度排名</h5>
                    ${automatedReports.weekly.industryRanking.map((item, index) => {
                        const rankColor = index === 0 ? '#f59e0b' : index === 1 ? '#9ca3af' : index === 2 ? '#d97706' : '#cbd5e0';
                        return `
                            <div style="display: flex; align-items: center; gap: 15px; padding: 12px; background: #f7fafc; border-radius: 8px; margin-bottom: 8px;">
                                <div style="width: 36px; height: 36px; background: ${rankColor}; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 16px;">
                                    ${index + 1}
                                </div>
                                <div style="flex: 1; font-weight: 500; color: #2d3748;">${item.name}</div>
                                <div style="font-size: 20px; font-weight: bold; color: #0ea5e9;">${item.score}</div>
                                <div style="width: 60px; text-align: right;">
                                    <span class="${item.change.startsWith('+') ? 'trend-up' : 'trend-down'}" style="font-size: 13px;">
                                        ${item.change}
                                    </span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- 热点话题 -->
                <div style="margin-bottom: 20px;">
                    <h5 style="margin: 0 0 12px 0; color: #2d3748;">🔥 本周热点话题</h5>
                    ${automatedReports.weekly.hotTopics.map(topic => `
                        <div style="background: white; border: 2px solid #e2e8f0; padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <h6 style="margin: 0; color: #2d3748; font-size: 15px;">${topic.topic}</h6>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <div style="width: 80px; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden;">
                                        <div style="width: ${topic.heat}%; height: 100%; background: linear-gradient(90deg, #f59e0b, #dc2626); border-radius: 4px;"></div>
                                    </div>
                                    <span style="font-weight: bold; color: #dc2626; font-size: 13px;">${topic.heat}</span>
                                </div>
                            </div>
                            <p style="margin: 0 0 8px 0; color: #4a5568; font-size: 13px; line-height: 1.5;">
                                ${topic.description}
                            </p>
                            <div style="display: flex; gap: 6px;">
                                ${topic.relatedIndustries.map(ind =>
                                    `<span style="background: #e2e8f0; color: #4a5568; padding: 3px 10px; border-radius: 10px; font-size: 11px;">${ind}</span>`
                                ).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>

                <!-- 趋势预测 -->
                <div style="margin-bottom: 20px;">
                    <h5 style="margin: 0 0 12px 0; color: #2d3748;">AI趋势预测</h5>
                    ${automatedReports.weekly.trends.map(trend => {
                        const confidenceColor = trend.confidence === 'high' ? '#059669' : '#0ea5e9';
                        return `
                            <div style="background: #f7fafc; padding: 18px; border-radius: 8px; margin-bottom: 12px; border-left: 4px solid ${confidenceColor};">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                                    <h6 style="margin: 0; color: #2d3748; font-size: 15px;">${trend.trend}</h6>
                                    <span class="badge" style="background: ${confidenceColor}; color: white; font-size: 11px;">
                                        ${trend.confidence === 'high' ? '高置信度' : '中高置信度'}
                                    </span>
                                </div>
                                <p style="margin: 0 0 10px 0; color: #4a5568; font-size: 13px; line-height: 1.5;">
                                    ${trend.description}
                                </p>
                                <div style="color: #718096; font-size: 12px; margin-bottom: 8px;">
                                    预测时间：${trend.timeframe}
                                </div>
                                <div>
                                    <div style="font-size: 12px; color: #718096; margin-bottom: 6px;">机会领域：</div>
                                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                                        ${trend.opportunities.map(opp =>
                                            `<span style="background: ${confidenceColor}20; color: ${confidenceColor}; padding: 4px 10px; border-radius: 12px; font-size: 11px;">${opp}</span>`
                                        ).join('')}
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>

                <!-- AI建议 -->
                <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%); padding: 20px; border-radius: 10px;">
                    <h5 style="margin: 0 0 12px 0; color: #2d3748;">AI招商建议</h5>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        ${automatedReports.weekly.aiRecommendations.map((rec, index) =>
                            `<div style="display: flex; gap: 10px; align-items: start;">
                                <div style="min-width: 24px; height: 24px; background: #667eea; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">
                                    ${index + 1}
                                </div>
                                <div style="flex: 1; font-size: 14px; color: #4a5568; line-height: 1.6; padding-top: 2px;">
                                    ${rec}
                                </div>
                            </div>`
                        ).join('')}
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div style="display: flex; gap: 10px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                    <button class="btn btn-primary" onclick="exportWeeklyReport()" style="flex: 1;">
                        📥 导出PDF
                    </button>
                    <button class="btn btn-secondary" onclick="emailWeeklyReport()" style="flex: 1;">
                        📧 发送邮件
                    </button>
                    <button class="btn btn-secondary" onclick="regenerateWeeklyReport()" style="flex: 1;">
                        🔄 重新生成
                    </button>
                </div>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

/**
 * 切换报告类型
 */
function switchReportType(type) {
    // 切换tab状态
    event.target.parentElement.querySelectorAll('.tab').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // 显示对应报告
    document.getElementById('daily-report').style.display = type === 'daily' ? 'block' : 'none';
    document.getElementById('weekly-report').style.display = type === 'weekly' ? 'block' : 'none';
}

/**
 * 显示知识图谱
 */
function showKnowledgeGraph(industryId) {
    const graphData = buildKnowledgeGraphData(industryId);
    const field = digitalEconomyFields.find(f => f.id === industryId);

    showModal(`
        <div style="width: 800px; max-width: 90vw;">
            <h3 style="margin: 0 0 20px 0; color: #2d3748;">
                ${field.name} - 知识图谱
            </h3>
            <div id="knowledgeGraphViz" style="width: 100%; height: 500px; background: #f7fafc; border-radius: 8px;"></div>
            <div style="margin-top: 15px; color: #718096; font-size: 13px;">
                知识图谱展示产业链关键节点及其关系，节点大小代表重要程度
            </div>
        </div>
    `);

    // 这里可以集成ECharts或其他图谱可视化库
    // 暂时显示提示
    setTimeout(() => {
        document.getElementById('knowledgeGraphViz').innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; flex-direction: column; gap: 15px;">
                <div style="font-size: 48px;">🔗</div>
                <div style="color: #4a5568; font-size: 16px;">知识图谱可视化</div>
                <div style="color: #718096; font-size: 14px;">节点：${graphData.nodes.length}个 | 关系：${graphData.links.length}条</div>
            </div>
        `;
    }, 100);
}

/**
 * 景气度详细分析
 */
async function analyzeProsperityDetail(industryId) {
    showNotification('AI正在分析行业景气度...', 'info');

    const result = await analyzeProsperity(industryId);

    const field = digitalEconomyFields.find(f => f.id === industryId);
    const scoreColor = result.score >= 8 ? '#059669' : result.score >= 6 ? '#0ea5e9' : '#f59e0b';

    showModal(`
        <div style="width: 600px; max-width: 90vw;">
            <h3 style="margin: 0 0 20px 0; color: #2d3748;">
                ${field.name} - 景气度分析
            </h3>

            <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, ${scoreColor}20, ${scoreColor}10); border-radius: 10px; margin-bottom: 20px;">
                <div style="font-size: 64px; font-weight: bold; color: ${scoreColor}; margin-bottom: 10px;">
                    ${result.score}
                </div>
                <div style="font-size: 18px; color: #2d3748; font-weight: 500;">
                    ${result.level}景气度
                </div>
            </div>

            <div style="background: #f7fafc; padding: 20px; border-radius: 8px;">
                <h5 style="margin: 0 0 10px 0; color: #2d3748;">AI分析</h5>
                <p style="margin: 0; color: #4a5568; font-size: 14px; line-height: 1.6;">
                    ${result.analysis}
                </p>
            </div>
        </div>
    `);
}

/**
 * AI景气度深度分析
 */
async function runAIProsperityAnalysis(industryId) {
    showNotification('DeepSeek AI正在进行深度分析...', 'info');

    // 调用AI分析
    const field = digitalEconomyFields.find(f => f.id === industryId);
    const trendAnalysis = await analyzeIndustryTrend(field);

    setTimeout(() => {
        showNotification('AI分析完成', 'success');

        showModal(`
            <div style="width: 700px; max-width: 90vw;">
                <h3 style="margin: 0 0 20px 0; color: #2d3748;">
                    ${field.name} - AI深度分析报告
                </h3>

                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div class="card" style="padding: 15px; background: #f0f9ff; border-left: 4px solid #0ea5e9;">
                        <div style="font-weight: 600; color: #0c4a6e; margin-bottom: 8px;">增长态势</div>
                        <div style="color: #0369a1; font-size: 14px;">${trendAnalysis.trend}</div>
                    </div>

                    <div class="card" style="padding: 15px; background: #f0fdf4; border-left: 4px solid #059669;">
                        <div style="font-weight: 600; color: #065f46; margin-bottom: 8px;">🚀 驱动因素</div>
                        <div style="color: #047857; font-size: 14px;">${trendAnalysis.drivers.join('、')}</div>
                    </div>

                    <div class="card" style="padding: 15px; background: #fef3c7; border-left: 4px solid #f59e0b;">
                        <div style="font-weight: 600; color: #92400e; margin-bottom: 8px;">🔮 未来预测</div>
                        <div style="color: #b45309; font-size: 14px;">${trendAnalysis.prediction}</div>
                    </div>

                    <div class="card" style="padding: 15px; background: #fce7f3; border-left: 4px solid #ec4899;">
                        <div style="font-weight: 600; color: #9f1239; margin-bottom: 8px;">风险提示</div>
                        <div style="color: #be123c; font-size: 14px;">${trendAnalysis.risks.join('、')}</div>
                    </div>

                    <div class="card" style="padding: 15px; background: #ede9fe; border-left: 4px solid #8b5cf6;">
                        <div style="font-weight: 600; color: #5b21b6; margin-bottom: 8px;">招商建议</div>
                        <div style="color: #6d28d9; font-size: 14px;">${trendAnalysis.recommendation}</div>
                    </div>
                </div>
            </div>
        `);
    }, 2000);
}

/**
 * 生成机会报告
 */
function generateOpportunityReport(oppId) {
    showNotification('正在生成机会报告...', 'info');

    setTimeout(() => {
        showNotification('报告生成成功', 'success');
    }, 1500);
}

/**
 * 生成风险报告
 */
function generateRiskReport(riskId) {
    showNotification('正在生成风险报告...', 'info');

    setTimeout(() => {
        showNotification('报告生成成功', 'success');
    }, 1500);
}

/**
 * AI风险评估
 */
async function runAIRiskAssessment(riskId) {
    showNotification('DeepSeek AI正在评估风险...', 'info');

    const risk = riskSpots.find(r => r.id === riskId);

    setTimeout(() => {
        showNotification('AI评估完成', 'success');

        showModal(`
            <div style="width: 600px; max-width: 90vw;">
                <h3 style="margin: 0 0 20px 0; color: #2d3748;">
                    ${risk.title} - AI风险评估
                </h3>

                <div style="background: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626; margin-bottom: 15px;">
                    <h5 style="margin: 0 0 10px 0; color: #991b1b;">⚡ 风险分析</h5>
                    <p style="margin: 0; color: #7f1d1d; font-size: 14px; line-height: 1.6;">
                        基于当前指标和AI模型预测，该风险在未来3-6个月内发生的概率为${(risk.probability * 100).toFixed(0)}%，
                        建议在1-2个月内采取应对措施，优先级为<strong>${risk.severity === 'high' ? '紧急' : '重要'}</strong>。
                    </p>
                </div>

                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #059669;">
                    <h5 style="margin: 0 0 10px 0; color: #065f46;">✅ 应对建议</h5>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        ${risk.mitigation.map((m, i) =>
                            `<div style="color: #047857; font-size: 14px;">
                                ${i + 1}. ${m}
                            </div>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `);
    }, 2000);
}

/**
 * 导出每日报告
 */
function exportDailyReport() {
    showNotification('正在导出每日简报...', 'info');
    setTimeout(() => {
        showNotification('简报已导出为PDF', 'success');
    }, 1000);
}

/**
 * 发送每日报告邮件
 */
function emailDailyReport() {
    showNotification('正在发送邮件...', 'info');
    setTimeout(() => {
        showNotification('简报已发送到订阅邮箱', 'success');
    }, 1000);
}

/**
 * 重新生成每日报告
 */
async function regenerateDailyReport() {
    showNotification('AI正在重新生成简报...', 'info');

    await generateDailyBrief();

    setTimeout(() => {
        showNotification('简报已更新', 'success');
        renderAutomatedReports();
        switchReportType('daily');
    }, 2000);
}

/**
 * 导出周报
 */
function exportWeeklyReport() {
    showNotification('正在导出周报...', 'info');
    setTimeout(() => {
        showNotification('周报已导出为PDF', 'success');
    }, 1000);
}

/**
 * 发送周报邮件
 */
function emailWeeklyReport() {
    showNotification('正在发送邮件...', 'info');
    setTimeout(() => {
        showNotification('周报已发送到订阅邮箱', 'success');
    }, 1000);
}

/**
 * 重新生成周报
 */
async function regenerateWeeklyReport() {
    showNotification('AI正在重新生成周报...', 'info');

    await generateWeeklyReport();

    setTimeout(() => {
        showNotification('周报已更新', 'success');
        renderAutomatedReports();
        switchReportType('weekly');
    }, 2500);
}

// ==================== 产业知识图谱相关函数 ====================

// 初始化产业知识图谱
function initIndustryKnowledgeGraph() {
    const container = document.getElementById('industryKnowledgeGraph');
    if (!container) return;

    const chart = echarts.init(container);

    // 构建图谱数据
    const nodes = [];
    const links = [];
    const categories = [
        { name: '核心数字产业' },
        { name: '融合数字产业' },
        { name: '新兴数字产业' }
    ];

    // 添加产业节点
    industryData.chains.forEach((chain, index) => {
        const categoryIndex = chain.category === '核心数字产业' ? 0 :
                             chain.category === '融合数字产业' ? 1 : 2;

        nodes.push({
            id: chain.id,
            name: chain.name,
            symbolSize: 40 + chain.output / 100,
            value: chain.output,
            category: categoryIndex,
            label: {
                show: true,
                fontSize: 14,
                fontWeight: 'bold'
            },
            itemStyle: {
                borderWidth: 2,
                borderColor: '#fff',
                shadowBlur: 10,
                shadowColor: 'rgba(0,0,0,0.3)'
            },
            // 附加数据
            chainData: chain
        });

        // 添加上中下游节点
        if (chain.upstream) {
            chain.upstream.forEach((item, idx) => {
                const nodeId = `${chain.id}-upstream-${idx}`;
                nodes.push({
                    id: nodeId,
                    name: item,
                    symbolSize: 25,
                    category: categoryIndex,
                    label: { show: true, fontSize: 11 },
                    itemStyle: { opacity: 0.6 }
                });
                links.push({
                    source: nodeId,
                    target: chain.id,
                    lineStyle: { color: '#93c5fd', width: 1.5 }
                });
            });
        }

        if (chain.downstream) {
            chain.downstream.forEach((item, idx) => {
                const nodeId = `${chain.id}-downstream-${idx}`;
                nodes.push({
                    id: nodeId,
                    name: item,
                    symbolSize: 25,
                    category: categoryIndex,
                    label: { show: true, fontSize: 11 },
                    itemStyle: { opacity: 0.6 }
                });
                links.push({
                    source: chain.id,
                    target: nodeId,
                    lineStyle: { color: '#86efac', width: 1.5 }
                });
            });
        }

        // 添加关键企业节点
        if (chain.keyCompanies && chain.keyCompanies.length > 0) {
            chain.keyCompanies.slice(0, 3).forEach((company, idx) => {
                const nodeId = `${chain.id}-company-${idx}`;
                nodes.push({
                    id: nodeId,
                    name: company,
                    symbolSize: 20,
                    symbol: 'rect',
                    category: categoryIndex,
                    label: { show: true, fontSize: 10 },
                    itemStyle: { opacity: 0.5, color: '#fbbf24' }
                });
                links.push({
                    source: chain.id,
                    target: nodeId,
                    lineStyle: { color: '#fbbf24', width: 1, type: 'dotted' }
                });
            });
        }
    });

    // 添加产业间关联
    industryData.chains.forEach(chain => {
        if (chain.relatedIndustries) {
            chain.relatedIndustries.forEach(relatedId => {
                links.push({
                    source: chain.id,
                    target: relatedId,
                    lineStyle: {
                        color: '#e879f9',
                        width: 2,
                        curveness: 0.2
                    }
                });
            });
        }
    });

    const option = {
        title: {
            text: '北京市数字产业全景图谱',
            subtext: '核心产业 + 上下游产业链 + 重点企业',
            left: 'center',
            top: 10,
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold',
                color: '#2d3748'
            },
            subtextStyle: {
                fontSize: 13,
                color: '#718096'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.data.chainData) {
                    const chain = params.data.chainData;
                    return `
                        <div style="padding: 10px;">
                            <strong style="font-size: 14px;">${chain.name}</strong><br/>
                            <div style="margin-top: 8px; line-height: 1.6;">
                                企业数量: <strong>${chain.companies}家</strong><br/>
                                产值规模: <strong>${chain.output}亿元</strong><br/>
                                同比增长: <strong style="color: #059669;">+${chain.growth}%</strong><br/>
                                完整度: <strong>${chain.completeness}%</strong><br/>
                            </div>
                            <div style="margin-top: 8px; color: #0ea5e9;">点击查看详细分析</div>
                        </div>
                    `;
                }
                return params.name;
            }
        },
        legend: {
            data: categories.map(c => c.name),
            top: 50,
            left: 'center',
            textStyle: { fontSize: 13 }
        },
        series: [{
            type: 'graph',
            layout: 'force',
            data: nodes,
            links: links,
            categories: categories,
            roam: true,
            draggable: true,
            label: {
                position: 'right',
                formatter: '{b}'
            },
            force: {
                repulsion: 300,
                gravity: 0.1,
                edgeLength: [100, 150],
                layoutAnimation: true
            },
            emphasis: {
                focus: 'adjacency',
                lineStyle: {
                    width: 3
                }
            }
        }]
    };

    chart.setOption(option);

    // 点击节点事件
    chart.on('click', function(params) {
        if (params.data && params.data.chainData) {
            showIndustryDetailAnalysis(params.data.chainData);
        }
    });

    // 响应式
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

// 显示产业详细分析
function showIndustryDetailAnalysis(chain) {
    const html = `
        <div style="padding: 20px;">
            <h2 style="color: #2d3748; margin-bottom: 20px;">${chain.name}产业链详细分析</h2>

            <!-- 基础数据 -->
            <div class="grid-2" style="margin-bottom: 25px;">
                <div class="stat-card">
                    <div class="stat-title">企业数量</div>
                    <div class="stat-value">${chain.companies}</div>
                    <div class="stat-trend trend-up">家</div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">产值规模</div>
                    <div class="stat-value">${chain.output}</div>
                    <div class="stat-trend trend-up">亿元</div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">同比增长</div>
                    <div class="stat-value">${chain.growth}</div>
                    <div class="stat-trend trend-up">%</div>
                </div>
                <div class="stat-card">
                    <div class="stat-title">完整度</div>
                    <div class="stat-value">${chain.completeness}</div>
                    <div class="stat-trend">%</div>
                </div>
            </div>

            <!-- 产业链结构 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; margin-bottom: 15px; border-bottom: 2px solid #0238C1; padding-bottom: 8px;">产业链结构</h3>
                <div class="grid-3">
                    <div>
                        <h4 style="color: #0ea5e9; margin-bottom: 10px;">上游环节</h4>
                        ${chain.upstream.map(item => `<div class="badge badge-info" style="margin: 3px;">${item}</div>`).join('')}
                    </div>
                    <div>
                        <h4 style="color: #059669; margin-bottom: 10px;">中游环节</h4>
                        ${chain.midstream.map(item => `<div class="badge badge-success" style="margin: 3px;">${item}</div>`).join('')}
                    </div>
                    <div>
                        <h4 style="color: #f59e0b; margin-bottom: 10px;">下游应用</h4>
                        ${chain.downstream.map(item => `<div class="badge badge-warning" style="margin: 3px;">${item}</div>`).join('')}
                    </div>
                </div>
            </div>

            <!-- 重点企业 -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #2d3748; margin-bottom: 15px; border-bottom: 2px solid #0238C1; padding-bottom: 8px;">重点企业</h3>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    ${chain.keyCompanies.map(company => `
                        <div class="badge" style="background: #fbbf24; color: #78350f; padding: 8px 15px; font-size: 13px;">${company}</div>
                    `).join('')}
                </div>
            </div>

            <!-- 薄弱环节与机会点 -->
            <div class="grid-2">
                <div>
                    <h3 style="color: #dc2626; margin-bottom: 15px;">薄弱环节</h3>
                    ${chain.weakness.map(item => `<div class="badge badge-danger" style="margin: 3px; display: inline-block;">${item}</div>`).join('')}
                </div>
                <div>
                    <h3 style="color: #059669; margin-bottom: 15px;">发展机会</h3>
                    ${chain.opportunity.map(item => `<div class="badge badge-success" style="margin: 3px; display: inline-block;">${item}</div>`).join('')}
                </div>
            </div>

            <!-- 区域分布 -->
            <div style="margin-top: 25px;">
                <h3 style="color: #2d3748; margin-bottom: 15px; border-bottom: 2px solid #0238C1; padding-bottom: 8px;">主要分布区域</h3>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                    ${chain.districts.map(district => `
                        <div class="badge badge-info" style="padding: 8px 15px; font-size: 13px;">${district}</div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    showModal(`${chain.name}产业链分析`, html);
}

// 渲染景气度监测
function renderProsperityMonitor() {
    const container = document.getElementById('prosperityMonitorGrid');
    if (!container) return;

    let html = '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 20px;">';

    industryData.chains.forEach(chain => {
        // 模拟景气度数据
        const prosperity = {
            score: (70 + Math.random() * 25).toFixed(1),
            recruitment: { total: Math.floor(chain.companies * 0.3), growth: (10 + Math.random() * 20).toFixed(1) },
            financing: { total: Math.floor(chain.companies * 0.1), growth: (15 + Math.random() * 25).toFixed(1) },
            sentiment: { total: Math.floor(chain.companies * 5), growth: (5 + Math.random() * 15).toFixed(1) },
            policy: { total: Math.floor(10 + Math.random() * 20), growth: (8 + Math.random() * 12).toFixed(1) }
        };

        const scoreColor = prosperity.score >= 85 ? '#059669' : prosperity.score >= 70 ? '#0ea5e9' : '#f59e0b';

        html += `
            <div class="mini-card" style="border-left: 4px solid ${scoreColor}; cursor: pointer;" onclick="showProsperityDetail('${chain.name}', ${JSON.stringify(prosperity).replace(/"/g, '&quot;')})">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <h4 style="margin: 0; color: #2d3748; font-size: 16px;">${chain.name}</h4>
                    <div style="text-align: right;">
                        <div style="font-size: 24px; font-weight: bold; color: ${scoreColor};">${prosperity.score}</div>
                        <div style="font-size: 11px; color: #718096;">景气度</div>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 12px;">
                    <div style="background: #eff6ff; padding: 8px; border-radius: 4px;">
                        <div style="color: #0369a1; margin-bottom: 3px;">招聘热度</div>
                        <div style="font-weight: bold; color: #0c4a6e;">${prosperity.recruitment.total}</div>
                    </div>
                    <div style="background: #f0fdf4; padding: 8px; border-radius: 4px;">
                        <div style="color: #15803d; margin-bottom: 3px;">融资活跃度</div>
                        <div style="font-weight: bold; color: #14532d;">${prosperity.financing.total}</div>
                    </div>
                    <div style="background: #fef3c7; padding: 8px; border-radius: 4px;">
                        <div style="color: #a16207; margin-bottom: 3px;">舆情热度</div>
                        <div style="font-weight: bold; color: #713f12;">${prosperity.sentiment.total}</div>
                    </div>
                    <div style="background: #fce7f3; padding: 8px; border-radius: 4px;">
                        <div style="color: #9f1239; margin-bottom: 3px;">政策支持</div>
                        <div style="font-weight: bold; color: #881337;">${prosperity.policy.total}</div>
                    </div>
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

// 显示景气度详情
function showProsperityDetail(industryName, prosperity) {
    const scoreColor = prosperity.score >= 85 ? '#059669' : prosperity.score >= 70 ? '#0ea5e9' : '#f59e0b';

    const html = `
        <div style="padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #2d3748; margin-bottom: 10px;">${industryName} 景气度分析</h2>
                <div style="font-size: 64px; font-weight: bold; color: ${scoreColor}; margin: 20px 0;">${prosperity.score}</div>
                <div style="font-size: 16px; color: #718096;">综合景气度评分</div>
            </div>

            <div class="grid-2" style="gap: 20px;">
                <div style="background: #eff6ff; padding: 20px; border-radius: 8px; border-left: 4px solid #0369a1;">
                    <h4 style="color: #0369a1; margin-bottom: 15px;">招聘热度</h4>
                    <div style="font-size: 32px; font-weight: bold; color: #0c4a6e; margin-bottom: 8px;">${prosperity.recruitment.total}</div>
                    <div style="color: #15803d; font-size: 14px;">增长 +${prosperity.recruitment.growth}%</div>
                    <div class="progress-bar" style="margin-top: 12px;">
                        <div class="progress-fill" style="width: ${Math.min(prosperity.recruitment.growth, 100)}%; background: #0369a1;"></div>
                    </div>
                </div>

                <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #15803d;">
                    <h4 style="color: #15803d; margin-bottom: 15px;">融资活跃度</h4>
                    <div style="font-size: 32px; font-weight: bold; color: #14532d; margin-bottom: 8px;">${prosperity.financing.total}</div>
                    <div style="color: #15803d; font-size: 14px;">增长 +${prosperity.financing.growth}%</div>
                    <div class="progress-bar" style="margin-top: 12px;">
                        <div class="progress-fill" style="width: ${Math.min(prosperity.financing.growth, 100)}%; background: #15803d;"></div>
                    </div>
                </div>

                <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #a16207;">
                    <h4 style="color: #a16207; margin-bottom: 15px;">舆情热度</h4>
                    <div style="font-size: 32px; font-weight: bold; color: #713f12; margin-bottom: 8px;">${prosperity.sentiment.total}</div>
                    <div style="color: #15803d; font-size: 14px;">增长 +${prosperity.sentiment.growth}%</div>
                    <div class="progress-bar" style="margin-top: 12px;">
                        <div class="progress-fill" style="width: ${Math.min(prosperity.sentiment.growth, 100)}%; background: #a16207;"></div>
                    </div>
                </div>

                <div style="background: #fce7f3; padding: 20px; border-radius: 8px; border-left: 4px solid #9f1239;">
                    <h4 style="color: #9f1239; margin-bottom: 15px;">政策支持</h4>
                    <div style="font-size: 32px; font-weight: bold; color: #881337; margin-bottom: 8px;">${prosperity.policy.total}</div>
                    <div style="color: #15803d; font-size: 14px;">增长 +${prosperity.policy.growth}%</div>
                    <div class="progress-bar" style="margin-top: 12px;">
                        <div class="progress-fill" style="width: ${Math.min(prosperity.policy.growth, 100)}%; background: #9f1239;"></div>
                    </div>
                </div>
            </div>

            <div style="margin-top: 25px; padding: 15px; background: #f7fafc; border-radius: 8px;">
                <h4 style="color: #2d3748; margin-bottom: 10px;">AI分析建议</h4>
                <div style="color: #4a5568; line-height: 1.8;">
                    该产业景气度${prosperity.score >= 85 ? '较高' : prosperity.score >= 70 ? '良好' : '平稳'}，
                    建议${prosperity.score >= 85 ? '积极' : '谨慎'}布局相关招商项目。
                    ${prosperity.recruitment.growth > 20 ? '招聘市场活跃，人才需求旺盛。' : ''}
                    ${prosperity.financing.growth > 20 ? '融资环境向好，资本关注度高。' : ''}
                </div>
            </div>
        </div>
    `;

    showModal(`${industryName} 景气度详情`, html);
}

// 全屏查看产业图谱
function showIndustryGraphFullscreen() {
    const html = `
        <div style="width: 95vw; height: 85vh;">
            <div id="fullscreenIndustryGraph" style="width: 100%; height: 100%;"></div>
        </div>
    `;

    showModal('数字产业全景图谱', html);

    setTimeout(() => {
        initIndustryKnowledgeGraph();
        // 重新初始化全屏图表
        const container = document.getElementById('fullscreenIndustryGraph');
        if (container) {
            const chart = echarts.init(container);
            const mainChart = echarts.getInstanceByDom(document.getElementById('industryKnowledgeGraph'));
            if (mainChart) {
                chart.setOption(mainChart.getOption());
            }
        }
    }, 100);
}

// 导出产业数据
function exportIndustryData() {
    showNotification('正在准备导出数据...', 'info');

    // 模拟导出
    setTimeout(() => {
        const data = industryData.chains.map(chain => ({
            产业名称: chain.name,
            企业数量: chain.companies,
            产值规模: chain.output + '亿元',
            同比增长: chain.growth + '%',
            完整度: chain.completeness + '%',
            类别: chain.category
        }));

        console.log('导出数据:', data);
        showNotification('数据导出成功！', 'success');
    }, 1000);
}

// 生成AI分析报告（调用interactive-features.js中的真实周报功能）
function generateAutomatedReport() {
    generateAIWeeklyReport();
}