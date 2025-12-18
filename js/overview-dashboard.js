// 总览页面数据看板 - AI实时分析功能

// 总览页面核心数据
const overviewDashboardData = {
    // 投前分析模块
    preInvestment: {
        title: '投前分析',
        icon: '🎯',
        color: '#0238C1',
        stats: [
            { label: '产业链监测', value: '6条', trend: '+2', color: '#0238C1' },
            { label: '薄弱环节', value: '7个', trend: '待补强', color: '#FF7A25' },
            { label: '目标企业', value: '156家', trend: '+23', color: '#43e97b' },
            { label: '招商项目', value: '387亿', trend: '+45亿', color: '#9F7AEA' }
        ],
        aiAnalysis: {
            summary: '北京数字产业投前分析显示,6大核心产业链整体健康度较高,但存在7个关键薄弱环节需要重点补强。',
            insights: [
                { title: '产业链健康度', content: '集成电路产业链综合健康度85分,人工智能产业链健康度92分,工业互联网健康度78分。整体呈现良好发展态势。', score: 85 },
                { title: '薄弱环节识别', content: '光刻胶材料、高端EDA工具、AI训练芯片等7个环节存在明显短板,建议通过强链补链行动进行重点突破。', score: 72 },
                { title: '招商机会评估', content: '已锁定156家目标企业,涵盖材料、设备、设计等关键环节,预计可带来387亿元投资规模。', score: 88 }
            ],
            recommendations: [
                '优先引进光刻胶、特种气体等关键材料企业',
                '加大EDA工具、芯片设计企业招商力度',
                '布局AI大模型、工业软件等新兴领域'
            ]
        }
    },

    // 投中决策模块
    midInvestment: {
        title: '投中决策',
        icon: '🔍',
        color: '#FF7A25',
        stats: [
            { label: '企业发现', value: '2,847家', trend: '+156', color: '#0238C1' },
            { label: '智能匹配', value: '95.2%', trend: '+3.5%', color: '#43e97b' },
            { label: '产业链监测', value: '实时', trend: '7x24h', color: '#FF7A25' },
            { label: 'AI周报', value: '52期', trend: '每周更新', color: '#9F7AEA' }
        ],
        aiAnalysis: {
            summary: '投中决策AI引擎已监测2,847家潜在目标企业,智能匹配准确率达95.2%,为精准招商提供有力支撑。',
            insights: [
                { title: '企业发现效率', content: '基于大数据+AI算法,从15万家企业中精准筛选出2,847家高匹配度企业,发现效率提升8倍。', score: 93 },
                { title: '匹配准确度', content: '多维度智能匹配算法,综合考虑技术水平、产业链位置、发展潜力等12项指标,匹配准确率95.2%。', score: 95 },
                { title: '动态监测能力', content: '7x24小时实时监测产业链动态,每周生成AI分析周报,及时捕捉投资机会和风险预警。', score: 89 }
            ],
            recommendations: [
                '重点关注AI大模型、工业互联网等高增长领域',
                '加强对专精特新企业的跟踪和评估',
                '建立产业链企业动态档案库'
            ]
        }
    },

    // 招后服务模块
    postInvestment: {
        title: '招后服务',
        icon: '🤝',
        color: '#43e97b',
        stats: [
            { label: '金融支持', value: '300亿', trend: '3大基金', color: '#0238C1' },
            { label: '人才需求', value: '1.8万', trend: '+42%', color: '#FF7A25' },
            { label: '供需对接', value: '856次', trend: '匹配度92%', color: '#43e97b' },
            { label: '服务企业', value: '1,245家', trend: '+186', color: '#9F7AEA' }
        ],
        aiAnalysis: {
            summary: '招后服务体系已覆盖1,245家入驻企业,提供金融、人才、产业对接等全方位支持,服务满意度达93%。',
            insights: [
                { title: '金融服务成效', content: '3大产业基金规模达300亿元,已投资项目107个,累计投资金额108亿元,带动社会资本256亿元。', score: 91 },
                { title: '人才服务效能', content: '人工智能、集成电路、工业互联网三大领域人才需求1.8万人,已引进高层次人才267人,培训技能人才3,200人。', score: 87 },
                { title: '产业对接成果', content: '智能供需对接系统已完成856次精准匹配,平均匹配度92%,促成产业链上下游合作金额达45亿元。', score: 94 }
            ],
            recommendations: [
                '扩大产业基金规模,重点支持硬科技项目',
                '加强海外高层次人才引进力度',
                '深化产业链上下游协同创新'
            ]
        }
    },

    // 数策通模块
    dataCenter: {
        title: '数策通',
        icon: '📊',
        color: '#9F7AEA',
        stats: [
            { label: '政策总数', value: '1,531条', trend: '+36', color: '#0238C1' },
            { label: '市级政策', value: '747条', trend: '48.8%', color: '#FF7A25' },
            { label: 'AI解读', value: '5大类', trend: '深度分析', color: '#43e97b' },
            { label: '企业订阅', value: '3,246家', trend: '+285', color: '#9F7AEA' }
        ],
        aiAnalysis: {
            summary: '数策通政策平台已汇聚全市1,531条数字产业政策,为3,246家企业提供AI智能解读和精准推送服务。',
            insights: [
                { title: '政策覆盖度', content: '涵盖国家级、市级、区级三级政策,覆盖人工智能、集成电路、工业互联网等全部数字产业领域。', score: 96 },
                { title: 'AI解读能力', content: '基于GPT-4大模型的AI解读引擎,可对政策进行多维度深度解读,包括适用对象、申报条件、支持力度等核心要素。', score: 93 },
                { title: '精准推送效果', content: '智能匹配算法可根据企业画像精准推送适配政策,政策获取效率提升5倍,申报成功率提升38%。', score: 89 }
            ],
            recommendations: [
                '加强政策解读的及时性和准确性',
                '优化企业申报材料智能生成功能',
                '建立政策申报全流程跟踪服务'
            ]
        }
    }
};

// 显示AI实时分析弹窗
function showAIAnalysisModal(moduleKey) {
    const module = overviewDashboardData[moduleKey];
    if (!module) return;

    showNotification('AI正在分析数据...', 'info');

    setTimeout(() => {
        const analysis = module.aiAnalysis;

        const modalContent = `
            <div style="padding: 20px;">
                <!-- 模块标题 -->
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 25px; padding: 20px; background: linear-gradient(135deg, ${module.color}15 0%, ${module.color}05 100%); border-radius: 12px; border-left: 5px solid ${module.color};">
                    <div style="font-size: 48px;">${module.icon}</div>
                    <div>
                        <h2 style="margin: 0; color: #1f2937; font-size: 24px;">${module.title} · AI实时分析报告</h2>
                        <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 14px;">生成时间: ${new Date().toLocaleString('zh-CN')} · 分析引擎: GPT-4 Turbo</p>
                    </div>
                </div>

                <!-- 核心摘要 -->
                <div style="margin-bottom: 25px; padding: 20px; background: #f9fafb; border-radius: 10px; border-left: 4px solid ${module.color};">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
                        <div style="background: ${module.color}; color: white; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                            📋
                        </div>
                        <h3 style="margin: 0; color: #1f2937; font-size: 18px;">核心摘要</h3>
                    </div>
                    <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.8;">${analysis.summary}</p>
                </div>

                <!-- 深度洞察 -->
                <div style="margin-bottom: 25px;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                            🔍
                        </div>
                        <h3 style="margin: 0; color: #1f2937; font-size: 18px;">深度洞察</h3>
                    </div>
                    <div style="display: grid; gap: 15px;">
                        ${analysis.insights.map((insight, idx) => `
                            <div style="padding: 18px; background: white; border-radius: 10px; border: 2px solid #e5e7eb; transition: all 0.3s;" onmouseover="this.style.borderColor='${module.color}'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)';" onmouseout="this.style.borderColor='#e5e7eb'; this.style.boxShadow='none';">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                                    <div style="font-weight: 600; color: #1f2937; font-size: 16px;">
                                        <span style="color: ${module.color};">${idx + 1}.</span> ${insight.title}
                                    </div>
                                    <div style="text-align: right;">
                                        <div style="font-size: 28px; font-weight: 700; color: ${insight.score >= 90 ? '#10b981' : insight.score >= 80 ? '#f59e0b' : '#6b7280'};">
                                            ${insight.score}
                                        </div>
                                        <div style="font-size: 11px; color: #9ca3af;">评分</div>
                                    </div>
                                </div>
                                <div style="height: 6px; background: #f3f4f6; border-radius: 3px; margin-bottom: 12px; overflow: hidden;">
                                    <div style="height: 100%; width: ${insight.score}%; background: linear-gradient(90deg, ${module.color} 0%, ${module.color}88 100%); border-radius: 3px; transition: width 1s ease-out;"></div>
                                </div>
                                <p style="margin: 0; color: #4b5563; font-size: 14px; line-height: 1.8;">${insight.content}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- AI建议 -->
                <div style="padding: 20px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-radius: 10px; border-left: 4px solid #f59e0b;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                        <div style="background: #f59e0b; color: white; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                            💡
                        </div>
                        <h3 style="margin: 0; color: #92400e; font-size: 18px;">AI智能建议</h3>
                    </div>
                    <div style="color: #78350f; line-height: 2; font-size: 14px;">
                        ${analysis.recommendations.map((rec, idx) => `
                            <div style="display: flex; align-items: start; gap: 10px; margin-bottom: 10px;">
                                <span style="background: #f59e0b; color: white; width: 24px; height: 24px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; flex-shrink: 0;">${idx + 1}</span>
                                <span>${rec}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- 统计数据 -->
                <div style="margin-top: 25px; padding: 20px; background: #f9fafb; border-radius: 10px;">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 15px;">
                        <div style="background: ${module.color}; color: white; width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                            📈
                        </div>
                        <h3 style="margin: 0; color: #1f2937; font-size: 18px;">核心数据指标</h3>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                        ${module.stats.map(stat => `
                            <div style="padding: 15px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
                                <div style="color: #6b7280; font-size: 13px; margin-bottom: 5px;">${stat.label}</div>
                                <div style="display: flex; align-items: baseline; gap: 10px;">
                                    <span style="font-size: 28px; font-weight: 700; color: ${stat.color};">${stat.value}</span>
                                    <span style="font-size: 13px; color: #10b981; font-weight: 500;">${stat.trend}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- 底部信息 -->
                <div style="margin-top: 25px; padding: 15px; background: white; border-radius: 8px; border: 1px solid #e5e7eb; text-align: center; font-size: 13px; color: #9ca3af;">
                    <div style="margin-bottom: 8px;">
                        <strong style="color: #6b7280;">数据来源:</strong> 北京市数字产业发展监测平台 · 2024年实时数据
                    </div>
                    <div>
                        <strong style="color: #6b7280;">分析模型:</strong> GPT-4 Turbo + 产业知识图谱 ·
                        <strong style="color: #6b7280;">置信度:</strong> <span style="color: #10b981; font-weight: 600;">96.8%</span>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: center;">
                    <button class="btn btn-primary" onclick="exportAnalysisReport('${moduleKey}')" style="padding: 12px 30px;">
                        📥 导出分析报告
                    </button>
                    <button class="btn btn-secondary" onclick="closeModal()" style="padding: 12px 30px;">
                        关闭
                    </button>
                </div>
            </div>
        `;

        showModal(`${module.icon} ${module.title} · AI实时分析`, modalContent);
        showNotification('AI分析完成!', 'success');
    }, 1500);
}

// 导出分析报告
function exportAnalysisReport(moduleKey) {
    const module = overviewDashboardData[moduleKey];
    if (!module) return;

    showNotification('正在生成报告...', 'info');

    setTimeout(() => {
        const analysis = module.aiAnalysis;
        const reportContent = `
${module.title} - AI实时分析报告
生成时间: ${new Date().toLocaleString('zh-CN')}
分析引擎: GPT-4 Turbo
==========================================

一、核心摘要
${analysis.summary}

二、深度洞察
${analysis.insights.map((insight, idx) => `
${idx + 1}. ${insight.title} [评分: ${insight.score}/100]
   ${insight.content}
`).join('\n')}

三、AI智能建议
${analysis.recommendations.map((rec, idx) => `${idx + 1}. ${rec}`).join('\n')}

四、核心数据指标
${module.stats.map(stat => `• ${stat.label}: ${stat.value} (${stat.trend})`).join('\n')}

==========================================
数据来源: 北京市数字产业发展监测平台
分析模型: GPT-4 Turbo + 产业知识图谱
置信度: 96.8%
        `;

        const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${module.title}_AI分析报告_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showNotification('报告已导出!', 'success');
    }, 800);
}

// 生成总览看板HTML
function generateOverviewDashboard() {
    const modules = ['preInvestment', 'midInvestment', 'postInvestment', 'dataCenter'];

    return `
        <div style="margin-top: 30px;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 25px; padding-bottom: 15px; border-bottom: 3px solid #e5e7eb;">
                <div>
                    <h2 style="margin: 0 0 8px 0; color: #1f2937; font-size: 24px;">🎯 核心业务数据看板</h2>
                    <p style="margin: 0; color: #6b7280; font-size: 14px;">点击任意模块查看AI实时分析 · 数据实时更新</p>
                </div>
                <button class="btn btn-primary" onclick="refreshAllModules()" style="padding: 10px 25px;">
                    🔄 刷新全部
                </button>
            </div>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
                ${modules.map(key => {
                    const module = overviewDashboardData[key];
                    return `
                        <div class="content-card" style="cursor: pointer; transition: all 0.3s; border: 2px solid #e5e7eb; position: relative; overflow: hidden;"
                            onmouseover="this.style.borderColor='${module.color}'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.12)'; this.style.transform='translateY(-2px)';"
                            onmouseout="this.style.borderColor='#e5e7eb'; this.style.boxShadow='none'; this.style.transform='translateY(0)';"
                            onclick="showAIAnalysisModal('${key}')">

                            <!-- 背景装饰 -->
                            <div style="position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: ${module.color}10; border-radius: 50%; pointer-events: none;"></div>

                            <!-- 模块头部 -->
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; position: relative; z-index: 1;">
                                <div style="display: flex; align-items: center; gap: 12px;">
                                    <div style="background: linear-gradient(135deg, ${module.color} 0%, ${module.color}cc 100%); width: 56px; height: 56px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 28px; box-shadow: 0 4px 12px ${module.color}40;">
                                        ${module.icon}
                                    </div>
                                    <div>
                                        <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 20px; font-weight: 600;">${module.title}</h3>
                                        <p style="margin: 0; color: #6b7280; font-size: 13px;">点击查看AI分析</p>
                                    </div>
                                </div>
                                <div style="background: ${module.color}15; color: ${module.color}; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                                    实时数据
                                </div>
                            </div>

                            <!-- 核心指标 -->
                            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; position: relative; z-index: 1;">
                                ${module.stats.map(stat => `
                                    <div style="padding: 15px; background: #f9fafb; border-radius: 8px; border-left: 3px solid ${stat.color};">
                                        <div style="color: #6b7280; font-size: 12px; margin-bottom: 6px;">${stat.label}</div>
                                        <div style="display: flex; align-items: baseline; gap: 8px;">
                                            <span style="font-size: 24px; font-weight: 700; color: ${stat.color};">${stat.value}</span>
                                        </div>
                                        <div style="font-size: 11px; color: #10b981; margin-top: 4px; font-weight: 500;">↑ ${stat.trend}</div>
                                    </div>
                                `).join('')}
                            </div>

                            <!-- AI分析提示 -->
                            <div style="margin-top: 15px; padding: 12px; background: linear-gradient(90deg, ${module.color}08 0%, ${module.color}15 100%); border-radius: 6px; text-align: center; position: relative; z-index: 1;">
                                <span style="color: ${module.color}; font-size: 13px; font-weight: 500;">🤖 AI已就绪 · 点击获取深度分析</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// 刷新所有模块数据
function refreshAllModules() {
    showNotification('正在刷新数据...', 'info');

    setTimeout(() => {
        // 重新渲染总览看板
        const container = document.getElementById('overview-summary-container');
        if (container) {
            container.innerHTML = generateOverviewDashboard();
        }
        showNotification('数据已刷新!', 'success');
    }, 1000);
}

// 页面加载时初始化总览看板
function initOverviewDashboard() {
    console.log('initOverviewDashboard called, readyState:', document.readyState);
    const container = document.getElementById('overview-summary-container');
    console.log('Container found:', !!container);
    if (container) {
        try {
            const html = generateOverviewDashboard();
            console.log('HTML generated, length:', html.length);
            container.innerHTML = html;
            console.log('✅ Overview dashboard initialized successfully');
        } catch (error) {
            console.error('❌ Error generating dashboard:', error);
        }
    } else {
        console.error('❌ Container overview-summary-container not found');
    }
}

// 使用window.onload确保DOM完全加载
window.addEventListener('load', function() {
    console.log('Window loaded, initializing dashboard...');
    initOverviewDashboard();
});
