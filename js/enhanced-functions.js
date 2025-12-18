// ==================== 强链补链渲染函数 ====================

// 渲染薄弱环节列表
function renderWeakLinks() {
    const container = document.getElementById('weakLinksList');
    if (!container) return;

    const html = weakLinksData.map(link => `
        <div class="mini-card" style="margin-bottom: 15px; border-left: 4px solid ${link.color};">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                <div>
                    <div style="font-size: 16px; font-weight: 600; color: #2d3748; margin-bottom: 5px;">
                        ${link.industry} - ${link.weakness}
                    </div>
                    <div style="font-size: 13px; color: #718096;">
                        ${link.segment}
                    </div>
                </div>
                <span class="badge ${link.severity === '高' ? 'badge-danger' : 'badge-warning'}">
                    ${link.severity}紧急
                </span>
            </div>
            <div style="background: #f7fafc; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
                <div style="color: #4a5568; font-size: 14px; line-height: 1.6;">
                    <strong>影响分析：</strong>${link.impact}
                </div>
            </div>
            <div style="background: #e0f2fe; padding: 10px; border-radius: 6px; margin-bottom: 10px;">
                <div style="color: #0c4a6e; font-size: 13px;">
                    <strong>解决方案：</strong>${link.solution}
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div style="color: #718096; font-size: 13px;">
                    目标企业池：<strong style="color: #0238C1;">${link.targetCompanies}</strong>家
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// 渲染补链目标企业
function renderChainTargets() {
    const container = document.getElementById('chainTargetsList');
    if (!container) return;

    const html = chainTargetsData.map(target => `
        <div class="mini-card" style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                <div style="flex: 1;">
                    <div style="font-size: 16px; font-weight: 600; color: #2d3748; margin-bottom: 5px;">
                        ${target.name}
                    </div>
                    <div style="font-size: 13px; color: #718096;">
                        ${target.industry} · ${target.segment} · ${target.type}
                    </div>
                </div>
                <div style="text-align: right;">
                    <span class="badge ${target.priority === '高' ? 'badge-danger' : 'badge-warning'}">
                        ${target.priority}优先级
                    </span>
                    <div style="margin-top: 5px;">
                        <span class="badge badge-info">${target.status}</span>
                    </div>
                </div>
            </div>

            <div style="background: #f7fafc; padding: 12px; border-radius: 6px; margin-bottom: 12px;">
                <div style="color: #4a5568; font-size: 13px; margin-bottom: 8px;">
                    <strong>企业优势：</strong>${target.advantage}
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-size: 13px; color: #718096;">
                    <div><strong>投资额：</strong>${target.investment}</div>
                    <div><strong>拟落地：</strong>${target.location}</div>
                </div>
            </div>

            <div style="margin-bottom: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <span style="font-size: 13px; color: #718096;">招商进度</span>
                    <span style="font-size: 13px; font-weight: 600; color: #0238C1;">${target.progress}%</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${target.progress}%; background: linear-gradient(90deg, #0238C1 0%, #48bb78 100%);"></div>
                </div>
            </div>

            <div style="font-size: 12px; color: #718096;">
                对接状态：${target.contact}
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// 渲染强链项目
function renderStrongChainProjects() {
    const container = document.getElementById('strongChainProjects');
    if (!container) return;

    const html = strongChainProjects.map(project => `
        <div class="mini-card" style="margin-bottom: 20px; border: 2px solid #e2e8f0;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                <div style="flex: 1;">
                    <div style="font-size: 18px; font-weight: 600; color: #2d3748; margin-bottom: 8px;">
                        ${project.name}
                    </div>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <span class="badge badge-info">${project.industry}</span>
                        <span class="badge badge-secondary">${project.type}</span>
                        <span class="badge ${project.phase === '运营中' ? 'badge-success' : 'badge-warning'}">${project.phase}</span>
                    </div>
                </div>
            </div>

            <div class="stats-grid" style="margin-bottom: 15px;">
                <div style="text-align: center; padding: 15px; background: #f7fafc; border-radius: 6px;">
                    <div style="font-size: 24px; font-weight: 700; color: #0238C1;">${project.investment}</div>
                    <div style="font-size: 12px; color: #718096; margin-top: 5px;">总投资</div>
                </div>
                <div style="text-align: center; padding: 15px; background: #f7fafc; border-radius: 6px;">
                    <div style="font-size: 24px; font-weight: 700; color: #48bb78;">${project.jobs}</div>
                    <div style="font-size: 12px; color: #718096; margin-top: 5px;">就业岗位</div>
                </div>
                <div style="text-align: center; padding: 15px; background: #f7fafc; border-radius: 6px;">
                    <div style="font-size: 24px; font-weight: 700; color: #FF7A25;">${project.output}亿</div>
                    <div style="font-size: 12px; color: #718096; margin-top: 5px;">年产值</div>
                </div>
                <div style="text-align: center; padding: 15px; background: #f7fafc; border-radius: 6px;">
                    <div style="font-size: 24px; font-weight: 700; color: #9F7AEA;">${project.progress}%</div>
                    <div style="font-size: 12px; color: #718096; margin-top: 5px;">完成进度</div>
                </div>
            </div>

            <div style="margin-bottom: 12px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px; font-size: 13px;">
                    <span style="color: #718096;">项目进度</span>
                    <span style="color: #4a5568;">${project.startDate} 至 ${project.expectedCompletion}</span>
                </div>
                <div class="progress-bar" style="height: 8px;">
                    <div class="progress-fill" style="width: ${project.progress}%; background: linear-gradient(90deg, #0238C1 0%, #48bb78 100%);"></div>
                </div>
            </div>

            <div style="background: #e0f2fe; padding: 12px; border-radius: 6px; font-size: 13px; color: #0c4a6e;">
                <strong>产业带动：</strong>${project.impact}
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// 导出强链补链分析报告
function exportChainAnalysis() {
    showNotification('正在生成分析报告...', 'info');
    setTimeout(() => {
        showNotification('报告已导出', 'success');
    }, 1500);
}

// 生成招商计划
function generateChainPlan() {
    showNotification('正在生成智能招商计划...', 'info');
    setTimeout(() => {
        const html = `
            <div style="padding: 20px;">
                <h3 style="color: #2d3748; margin-bottom: 20px;">数字产业强链补链招商计划</h3>

                <div style="margin-bottom: 25px;">
                    <h4 style="color: #0238C1; margin-bottom: 15px;">一、补链重点方向（${weakLinksData.length}个薄弱环节）</h4>
                    ${weakLinksData.map((link, idx) => `
                        <div style="margin-bottom: 15px; padding: 15px; background: #f7fafc; border-left: 4px solid ${link.color}; border-radius: 4px;">
                            <div style="font-weight: 600; color: #2d3748; margin-bottom: 5px;">
                                ${idx + 1}. ${link.industry} - ${link.weakness}
                            </div>
                            <div style="color: #4a5568; font-size: 14px;">
                                解决方案：${link.solution} | 目标企业：${link.targetCompanies}家
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div style="margin-bottom: 25px;">
                    <h4 style="color: #0238C1; margin-bottom: 15px;">二、重点招商目标（${chainTargetsData.length}家核心企业）</h4>
                    ${chainTargetsData.map((target, idx) => `
                        <div style="margin-bottom: 15px; padding: 15px; background: #f7fafc; border-radius: 4px;">
                            <div style="font-weight: 600; color: #2d3748; margin-bottom: 5px;">
                                ${idx + 1}. ${target.name}（${target.industry}）
                            </div>
                            <div style="color: #4a5568; font-size: 14px;">
                                投资额：${target.investment} | 状态：${target.status} | 进度：${target.progress}%
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9;">
                    <h4 style="color: #0c4a6e; margin-bottom: 10px;">三、实施路径建议</h4>
                    <ul style="margin: 0; padding-left: 20px; color: #0c4a6e; line-height: 1.8;">
                        <li>Q1-Q2：完成高优先级企业的深度洽谈和政策对接</li>
                        <li>Q2-Q3：推动2-3家重点企业签约落地</li>
                        <li>Q3-Q4：启动中优先级企业的招商对接工作</li>
                        <li>全年目标：引进补链企业8-10家，总投资超过600亿元</li>
                    </ul>
                </div>
            </div>
        `;

        showModal('智能招商计划', html);
        showNotification('招商计划已生成！', 'success');
    }, 1500);
}

// 筛选补链目标
function filterChainTargets() {
    renderChainTargets();
}

// ==================== 招后服务 - 金融服务渲染函数 ====================

// 渲染产业基金
function renderIndustryFunds() {
    const container = document.getElementById('industryFundsList');
    if (!container) return;

    const html = industryFundsData.map(fund => `
        <div class="mini-card" style="margin-bottom: 15px; border: 2px solid #e2e8f0;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                <div>
                    <div style="font-size: 16px; font-weight: 600; color: #2d3748; margin-bottom: 5px;">
                        ${fund.name}
                    </div>
                    <div style="font-size: 13px; color: #718096;">${fund.type}</div>
                </div>
                <div style="text-align: right;">
                    <div style="font-size: 20px; font-weight: 700; color: #0238C1;">${fund.scale}</div>
                    <div style="font-size: 12px; color: #718096; margin-top: 3px;">基金规模</div>
                </div>
            </div>

            <div style="background: #f7fafc; padding: 15px; border-radius: 6px; margin-bottom: 12px;">
                <div style="margin-bottom: 10px;">
                    <div style="font-size: 13px; color: #4a5568; margin-bottom: 5px;">
                        <strong>聚焦领域：</strong>${fund.focusArea.join('、')}
                    </div>
                    <div style="font-size: 13px; color: #4a5568; margin-bottom: 5px;">
                        <strong>投资阶段：</strong>${fund.phase.join('、')}
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px;">
                    <div style="text-align: center; padding: 10px; background: white; border-radius: 4px;">
                        <div style="font-size: 18px; font-weight: 600; color: #48bb78;">${fund.invested}亿</div>
                        <div style="font-size: 11px; color: #718096;">已投金额</div>
                    </div>
                    <div style="text-align: center; padding: 10px; background: white; border-radius: 4px;">
                        <div style="font-size: 18px; font-weight: 600; color: #FF7A25;">${fund.projects}个</div>
                        <div style="font-size: 11px; color: #718096;">投资项目</div>
                    </div>
                    <div style="text-align: center; padding: 10px; background: white; border-radius: 4px;">
                        <div style="font-size: 18px; font-weight: 600; color: #9F7AEA;">${fund.roi}</div>
                        <div style="font-size: 11px; color: #718096;">历史回报</div>
                    </div>
                </div>
            </div>

            <div style="font-size: 13px; color: #718096;">
                联系方式：${fund.contact}
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
}

// 渲染金融产品
function renderFinancialProducts(filter = 'all') {
    const container = document.getElementById('financialProductsList');
    if (!container) return;

    let filtered = financialProductsData;
    if (filter !== 'all') {
        filtered = financialProductsData.filter(p => p.type === filter);
    }

    const html = filtered.map(product => `
        <div class="mini-card" style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                <div style="flex: 1;">
                    <div style="font-size: 16px; font-weight: 600; color: #2d3748; margin-bottom: 5px;">
                        ${product.name}
                    </div>
                    <div style="font-size: 13px; color: #718096;">${product.institution}</div>
                </div>
                <span class="badge badge-info">${product.type === 'loan' ? '信贷' : product.type === 'equity' ? '股权' : product.type === 'bond' ? '债券' : '担保'}</span>
            </div>

            <div style="background: #f7fafc; padding: 12px; border-radius: 6px; margin-bottom: 10px;">
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-size: 13px; color: #4a5568;">
                    <div><strong>额度：</strong>${product.amount}</div>
                    <div><strong>成本：</strong>${product.rate}</div>
                    <div><strong>期限：</strong>${product.term}</div>
                    <div><strong>适用：</strong>${product.target}</div>
                </div>
            </div>

            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                ${product.features.map(f => `<span class="badge badge-secondary">${f}</span>`).join('')}
            </div>
        </div>
    `).join('');

    container.innerHTML = html || '<div style="text-align: center; padding: 40px; color: #718096;">暂无该类型产品</div>';
}

// 筛选金融产品
function filterFinancialProducts(type) {
    // 更新按钮样式
    document.querySelectorAll('[id^="financial-filter-"]').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-secondary');
    });
    document.getElementById(`financial-filter-${type}`).classList.remove('btn-secondary');
    document.getElementById(`financial-filter-${type}`).classList.add('btn-primary');

    renderFinancialProducts(type);
}

// 渲染投资机会
function renderInvestmentOpportunities() {
    const container = document.getElementById('investmentOpportunities');
    if (!container) return;

    const html = investmentOpportunitiesData.map(opp => `
        <div class="mini-card" style="margin-bottom: 20px; border: 2px solid #e2e8f0;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                <div style="flex: 1;">
                    <div style="font-size: 17px; font-weight: 600; color: #2d3748; margin-bottom: 8px;">
                        ${opp.companyName}
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <span class="badge badge-info">${opp.industry}</span>
                        <span class="badge badge-warning">${opp.stage}</span>
                        <span class="badge badge-success">匹配度 ${opp.matching}%</span>
                    </div>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, rgba(2, 56, 193, 0.05) 0%, rgba(67, 233, 123, 0.05) 100%); padding: 15px; border-radius: 8px; margin-bottom: 12px;">
                <div style="color: #2d3748; font-size: 14px; line-height: 1.6; margin-bottom: 10px;">
                    <strong>项目亮点：</strong>${opp.highlight}
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-size: 13px; color: #4a5568;">
                    <div><strong>营收规模：</strong>${opp.revenue}</div>
                    <div><strong>增长率：</strong><span style="color: #48bb78;">${opp.growth}</span></div>
                    <div><strong>估值：</strong>${opp.valuation}</div>
                    <div><strong>融资额：</strong>${opp.seeking}</div>
                </div>
            </div>

            <div style="margin-bottom: 10px;">
                <div style="font-size: 13px; color: #4a5568; margin-bottom: 5px;">
                    <strong>核心团队：</strong>${opp.team}
                </div>
                <div style="font-size: 13px; color: #4a5568;">
                    <strong>已有投资方：</strong>${opp.investors}
                </div>
            </div>

            <button class="btn btn-primary" onclick="showNotification('已提交投资意向！', 'success')" style="width: 100%;">
                联系洽谈
            </button>
        </div>
    `).join('');

    container.innerHTML = html;
}

// 初始化招后服务金融模块
function initPostFinancialService() {
    setTimeout(() => {
        renderIndustryFunds();
        renderFinancialProducts('all');
        renderInvestmentOpportunities();
    }, 100);
}
