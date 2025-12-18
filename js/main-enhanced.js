// 增强功能模块 - 在main.js基础上添加的额外交互功能

// 政策解读AI功能
function showPolicyInterpreter() {
    const html = `
        <div style="max-width: 900px;">
            <div class="mini-card" style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);">
                <h3 style="margin-bottom: 15px;">🤖 AI政策智能解读</h3>
                <p style="color: #4a5568; margin-bottom: 20px;">
                    基于大模型技术，智能解读政策文件，提取关键信息，分析适用条件，生成申报建议
                </p>
            </div>

            <div class="search-box" style="margin: 20px 0;">
                <select id="policySelectForAI" onchange="interpretPolicy(this.value)"
                        style="width: 100%; padding: 12px; border: 2px solid #e2e8f0; border-radius: 8px;">
                    <option value="">-- 选择要解读的政策 --</option>
                    ${policyData.list.map(p => `<option value="${p.id}">${p.title}</option>`).join('')}
                </select>
            </div>

            <div id="policyInterpretResult"></div>
        </div>
    `;

    showModal('政策智能解读', html);
}

// 政策解读执行函数
function interpretPolicy(policyId) {
    if (!policyId) return;

    const policy = policyData.list.find(p => p.id === policyId);
    if (!policy) return;

    const resultDiv = document.getElementById('policyInterpretResult');
    resultDiv.innerHTML = '<div style="text-align: center; padding: 40px;"><span class="loading"></span> AI正在解读政策...</div>';

    // 模拟AI解读过程
    setTimeout(() => {
        const interpretation = generatePolicyInterpretation(policy);
        resultDiv.innerHTML = interpretation;
    }, 1500);
}

// 生成政策解读内容
function generatePolicyInterpretation(policy) {
    return `
        <div class="content-card" style="margin-top: 20px;">
            <h4 style="color: #2d3748; margin-bottom: 15px;">📋 政策概要</h4>
            <div class="grid-2">
                <div class="mini-card">
                    <strong>政策名称：</strong>${policy.title}
                </div>
                <div class="mini-card">
                    <strong>政策级别：</strong><span class="badge badge-info">${policy.level}</span>
                </div>
                <div class="mini-card">
                    <strong>政策类型：</strong><span class="badge badge-success">${policy.type}</span>
                </div>
                <div class="mini-card">
                    <strong>支持额度：</strong><span style="color: #48bb78; font-weight: 600;">${policy.amount}</span>
                </div>
            </div>
        </div>

        <div class="content-card" style="margin-top: 20px;">
            <h4 style="color: #2d3748; margin-bottom: 15px;">🎯 核心要点（AI提取）</h4>
            <div class="mini-card" style="border-left-color: #667eea;">
                <div style="margin-bottom: 10px;"><strong>✓ 适用对象：</strong>${policy.industry.join('、')}领域企业</div>
                <div style="margin-bottom: 10px;"><strong>✓ 发展阶段：</strong>${policy.stage.join('、')}</div>
                <div style="margin-bottom: 10px;"><strong>✓ 支持力度：</strong>${policy.amount}</div>
                <div><strong>✓ 有效期限：</strong>${policy.effectiveDate} 至 ${policy.expireDate}</div>
            </div>
        </div>

        <div class="content-card" style="margin-top: 20px;">
            <h4 style="color: #2d3748; margin-bottom: 15px;">📌 申报条件解析</h4>
            ${policy.conditions.map((cond, i) => `
                <div class="mini-card" style="margin-bottom: 10px;">
                    <div style="display: flex; align-items: start; gap: 10px;">
                        <span style="background: #667eea; color: white; width: 24px; height: 24px; border-radius: 50%;
                                     display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 12px;">
                            ${i + 1}
                        </span>
                        <div style="flex: 1;">
                            <div style="font-weight: 600; margin-bottom: 5px;">${cond}</div>
                            <div style="font-size: 13px; color: #718096;">
                                ${generateConditionTip(cond)}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>

        <div class="content-card" style="margin-top: 20px;">
            <h4 style="color: #2d3748; margin-bottom: 15px;">💰 政策优惠详解</h4>
            <div class="grid-2">
                ${policy.benefits.map(benefit => `
                    <div class="mini-card" style="background: linear-gradient(135deg, rgba(72, 187, 120, 0.1) 0%, rgba(56, 161, 105, 0.1) 100%);
                                                   border-left-color: #48bb78;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 24px;">✓</span>
                            <span style="font-weight: 500;">${benefit}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="content-card" style="margin-top: 20px;">
            <h4 style="color: #2d3748; margin-bottom: 15px;">📝 申报流程指导</h4>
            <div style="display: flex; gap: 10px; align-items: center; overflow-x: auto; padding: 10px 0;">
                ${policy.applyProcess.map((step, i) => `
                    <div style="flex-shrink: 0;">
                        <div class="mini-card" style="width: 150px; text-align: center; border-left-color: #667eea;">
                            <div style="background: #667eea; color: white; width: 40px; height: 40px; border-radius: 50%;
                                        display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;
                                        font-weight: 600; font-size: 18px;">
                                ${i + 1}
                            </div>
                            <div style="font-weight: 600; font-size: 14px;">${step}</div>
                        </div>
                    </div>
                    ${i < policy.applyProcess.length - 1 ? '<div style="font-size: 24px; color: #cbd5e0;">→</div>' : ''}
                `).join('')}
            </div>
        </div>

        <div class="content-card" style="margin-top: 20px;">
            <h4 style="color: #2d3748; margin-bottom: 15px;">📂 所需材料清单</h4>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                ${policy.documents.map(doc => `
                    <span class="badge badge-info" style="padding: 8px 16px; font-size: 14px;">📄 ${doc}</span>
                `).join('')}
            </div>
        </div>

        <div class="content-card" style="margin-top: 20px; background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);">
            <h4 style="color: #2d3748; margin-bottom: 15px;">🤖 AI智能建议</h4>
            <div class="mini-card">
                <div style="margin-bottom: 10px;"><strong>申报难度：</strong>
                    <span class="badge badge-${policy.successRate > 70 ? 'success' : policy.successRate > 50 ? 'warning' : 'danger'}">
                        ${policy.successRate > 70 ? '较易' : policy.successRate > 50 ? '中等' : '较难'}
                    </span>
                </div>
                <div style="margin-bottom: 10px;"><strong>历史成功率：</strong>
                    <span style="color: #48bb78; font-weight: 600;">${policy.successRate}%</span>
                </div>
                <div style="margin-bottom: 10px;"><strong>申报建议：</strong></div>
                <ul style="margin-left: 20px; color: #4a5568; line-height: 1.8;">
                    ${generateApplicationTips(policy).map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div style="margin-top: 30px; text-align: center;">
            <button class="btn btn-primary" onclick="startPolicyApplication('${policy.id}')" style="padding: 12px 40px; font-size: 16px;">
                立即申报此政策
            </button>
            <button class="btn btn-secondary" onclick="exportPolicyGuide('${policy.id}')" style="padding: 12px 40px; font-size: 16px; margin-left: 10px;">
                导出申报指南
            </button>
        </div>
    `;
}

// 生成条件提示
function generateConditionTip(condition) {
    const tips = {
        '年营收': '建议准备近三年的财务审计报告，确保数据真实准确',
        '研发投入': '需要提供研发费用明细账和项目立项书',
        '知识产权': '准备专利证书、软件著作权等知识产权证明材料',
        '团队': '提供团队成员简历和劳动合同',
        '核心技术': '准备技术说明书和技术鉴定报告'
    };

    for (let key in tips) {
        if (condition.includes(key)) {
            return tips[key];
        }
    }

    return '请仔细阅读政策原文，确保满足该条件';
}

// 生成申报建议
function generateApplicationTips(policy) {
    const tips = [
        '建议在政策有效期前3个月开始准备材料',
        '提前咨询主管部门，确认政策适用性',
        '所有材料建议加盖公章，确保真实有效',
        '建议聘请专业机构辅导申报，提高成功率'
    ];

    if (policy.successRate < 60) {
        tips.push('该政策竞争较激烈，建议突出企业核心优势');
    }

    if (policy.type === '财政补贴') {
        tips.push('财政补贴类政策通常需要先公示后拨付，请关注公示期');
    }

    return tips;
}

// 开始政策申报
function startPolicyApplication(policyId) {
    showNotification('政策申报功能开发中，敬请期待！', 'info');
}

// 导出政策指南
function exportPolicyGuide(policyId) {
    showNotification('导出功能开发中，敬请期待！', 'info');
}

// 企业对比功能
let selectedCompaniesForCompare = [];

function toggleCompanySelect(companyId) {
    const index = selectedCompaniesForCompare.indexOf(companyId);
    if (index > -1) {
        selectedCompaniesForCompare.splice(index, 1);
    } else {
        if (selectedCompaniesForCompare.length >= 5) {
            showNotification('最多只能选择5家企业进行对比', 'warning');
            return;
        }
        selectedCompaniesForCompare.push(companyId);
    }

    updateCompareButton();
}

function updateCompareButton() {
    const btn = document.getElementById('compareBtn');
    if (btn) {
        if (selectedCompaniesForCompare.length >= 2) {
            btn.disabled = false;
            btn.textContent = `对比选中企业(${selectedCompaniesForCompare.length})`;
        } else {
            btn.disabled = true;
            btn.textContent = '选择企业对比(至少2家)';
        }
    }
}

function compareSelectedCompanies() {
    if (selectedCompaniesForCompare.length < 2) {
        showNotification('请至少选择2家企业进行对比', 'warning');
        return;
    }

    const companies = selectedCompaniesForCompare.map(id =>
        enterpriseData.list.find(e => e.id === id)
    ).filter(c => c);

    showCompanyComparison(companies);
}

function showCompanyComparison(companies) {
    const html = `
        <div style="max-width: 1200px;">
            <h3 style="margin-bottom: 20px;">企业对比分析（${companies.length}家）</h3>

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
                            <td><strong>所属产业</strong></td>
                            ${companies.map(c => `<td><span class="badge badge-info">${c.type}</span></td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>所在区域</strong></td>
                            ${companies.map(c => `<td>${c.district}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>注册资本</strong></td>
                            ${companies.map(c => `<td>${c.registeredCapital.toLocaleString()}万元</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>年营收</strong></td>
                            ${companies.map(c => {
                                const max = Math.max(...companies.map(co => co.revenue));
                                const isMax = c.revenue === max;
                                return `<td style="${isMax ? 'background: #c6f6d5; font-weight: 600;' : ''}">${c.revenue.toLocaleString()}万元</td>`;
                            }).join('')}
                        </tr>
                        <tr>
                            <td><strong>纳税额</strong></td>
                            ${companies.map(c => `<td>${c.tax.toLocaleString()}万元</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>员工数</strong></td>
                            ${companies.map(c => `<td>${c.employees}人</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>创新评分</strong></td>
                            ${companies.map(c => {
                                const max = Math.max(...companies.map(co => parseFloat(co.innovation)));
                                const isMax = parseFloat(c.innovation) === max;
                                return `<td style="${isMax ? 'background: #c6f6d5; font-weight: 600;' : ''}">${c.innovation}/5.0</td>`;
                            }).join('')}
                        </tr>
                        <tr>
                            <td><strong>专利数量</strong></td>
                            ${companies.map(c => {
                                const max = Math.max(...companies.map(co => co.patents));
                                const isMax = c.patents === max;
                                return `<td style="${isMax ? 'background: #c6f6d5; font-weight: 600;' : ''}">${c.patents}项</td>`;
                            }).join('')}
                        </tr>
                        <tr>
                            <td><strong>成长性</strong></td>
                            ${companies.map(c => `<td><span class="badge badge-${c.growth === 'high' ? 'success' : c.growth === 'medium' ? 'warning' : 'info'}">${c.growth === 'high' ? '高' : c.growth === 'medium' ? '中' : '低'}</span></td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>发展阶段</strong></td>
                            ${companies.map(c => `<td>${c.stage}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>信用等级</strong></td>
                            ${companies.map(c => `<td><span class="badge badge-success">${c.credit}</span></td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>风险等级</strong></td>
                            ${companies.map(c => `<td><span class="badge badge-${c.riskLevel === 'low' ? 'success' : c.riskLevel === 'medium' ? 'warning' : 'danger'}">${c.riskLevel === 'low' ? '低' : c.riskLevel === 'medium' ? '中' : '高'}</span></td>`).join('')}
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style="margin-top: 30px;">
                <h4>综合评价</h4>
                <div class="grid-2" style="margin-top: 15px;">
                    ${companies.map((c, i) => {
                        const score = calculateCompanyScore(c);
                        return `
                            <div class="mini-card">
                                <div style="font-weight: 600; margin-bottom: 10px;">${c.name}</div>
                                <div style="margin-bottom: 8px;">综合评分: <strong style="color: #667eea;">${score.toFixed(1)}/100</strong></div>
                                <div class="progress-bar">
                                    <div class="progress-fill" style="width: ${score}%;"></div>
                                </div>
                                <div style="margin-top: 10px; font-size: 13px; color: #718096;">
                                    ${generateCompanyComment(c, score)}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <div style="margin-top: 20px; text-align: center;">
                <button class="btn btn-secondary" onclick="selectedCompaniesForCompare = []; closeModal();">清空选择</button>
            </div>
        </div>
    `;

    showModal('企业对比分析', html);
}

function calculateCompanyScore(company) {
    let score = 0;

    // 营收贡献 (30分)
    score += Math.min((company.revenue / 1000000) * 30, 30);

    // 创新能力 (25分)
    score += (parseFloat(company.innovation) / 5) * 25;

    // 专利数量 (15分)
    score += Math.min((company.patents / 500) * 15, 15);

    // 成长性 (15分)
    if (company.growth === 'high') score += 15;
    else if (company.growth === 'medium') score += 10;
    else score += 5;

    // 信用等级 (10分)
    if (company.credit === 'AAA') score += 10;
    else if (company.credit === 'AA') score += 8;
    else if (company.credit === 'A') score += 6;
    else score += 4;

    // 风险等级 (5分)
    if (company.riskLevel === 'low') score += 5;
    else if (company.riskLevel === 'medium') score += 3;
    else score += 1;

    return Math.min(score, 100);
}

function generateCompanyComment(company, score) {
    if (score >= 80) {
        return '优秀企业，建议重点关注和支持';
    } else if (score >= 60) {
        return '发展良好，具有一定潜力';
    } else if (score >= 40) {
        return '有待提升，建议加强扶持';
    } else {
        return '需要重点帮扶，关注风险';
    }
}

// 导出增强功能到全局
if (typeof window !== 'undefined') {
    window.showPolicyInterpreter = showPolicyInterpreter;
    window.interpretPolicy = interpretPolicy;
    window.toggleCompanySelect = toggleCompanySelect;
    window.compareSelectedCompanies = compareSelectedCompanies;
    window.startPolicyApplication = startPolicyApplication;
    window.exportPolicyGuide = exportPolicyGuide;
}

console.log('增强功能模块已加载！');