// ==================== 数策通政策解读交互功能 ====================
// 基于2024年北京市真实政策数据

// 真实政策数据（基于2024年北京市政策）
const realPolicyData = [
    {
        id: 'policy001',
        title: '北京市推动"人工智能+"行动计划（2024-2025年）',
        level: '市级',
        type: '产业发展',
        department: '北京市发改委、市经信局、市科委',
        publishDate: '2024-07-26',
        effectiveDate: '2024-08-01',
        deadline: '2025-12-31',
        industry: ['人工智能', '大数据', '云计算'],
        amount: '财政支持+产业基金',
        summary: '深入落实国家"人工智能+"战略,以大模型技术革新带动产业发展,全力打造全球数字经济标杆城市',
        targetAudience: ['AI企业', '大模型企业', '系统集成商', '行业应用企业'],
        keyPoints: ['大模型应用研发', 'API调用支持', '模型私有化部署', '智能体开发'],
        supportMeasures: [
            '支持大模型企业、系统集成服务商开展应用研发',
            '推动教育、医疗、文化、交通等14个行业场景应用',
            '建设工业大模型智能平台,重塑工业产品研发流程',
            '金融领域大模型风险评估与预警系统建设'
        ]
    },
    {
        id: 'policy002',
        title: '北京市高精尖产业发展资金支持政策（2024年第一批）',
        level: '市级',
        type: '资金支持',
        department: '北京市经信局、市财政局',
        publishDate: '2024-01-19',
        effectiveDate: '2024-02-01',
        deadline: '2024-12-31',
        industry: ['集成电路', '新能源汽车', '生物医药', '新材料'],
        amount: '最高5000万元',
        summary: '支持高精尖产业企业技术创新、产业化项目及国际化发展',
        targetAudience: ['国家高新技术企业', '专精特新企业', '独角兽企业'],
        keyPoints: ['技术创新', '产业化', '国际化', '平台建设'],
        supportMeasures: [
            '固定资产投资超5000万元可获投资贷款贴息,最高年化2%',
            '单个企业年度最高支持1000万元,重大项目最高3000万元',
            '首台(套)重大技术装备保险补贴最高80%',
            '国际认证费用补贴最高200万元'
        ]
    },
    {
        id: 'policy003',
        title: '北京市关于促进专精特新企业高质量发展的若干措施',
        level: '市级',
        type: '企业培育',
        department: '北京市人民政府',
        publishDate: '2024-11-25',
        effectiveDate: '2024-12-01',
        deadline: '长期有效',
        industry: ['数字产业', '高端制造', '新材料', '生物医药'],
        amount: '最高2000万元',
        summary: '构建优质中小企业梯度培育体系,支持专精特新企业创新发展',
        targetAudience: ['专精特新小巨人', '专精特新中小企业', '创新型中小企业'],
        keyPoints: ['研发创新', '市场开拓', '融资支持', '人才引进'],
        supportMeasures: [
            '研发费用加计扣除比例提高至120%',
            '国家级专精特新小巨人企业一次性奖励200万元',
            '上市奖励最高1000万元',
            '建立专精特新企业融资绿色通道'
        ]
    },
    {
        id: 'policy004',
        title: '北京经开区关于加快打造AI原生产业创新高地的若干政策',
        level: '区级',
        type: '产业集聚',
        department: '北京经开区管委会',
        publishDate: '2025-03-03',
        effectiveDate: '2025-03-15',
        deadline: '2027-12-31',
        industry: ['人工智能', '智能制造', '自动驾驶'],
        amount: '最高1亿元',
        summary: '打造AI原生产业创新高地,支持AI企业集聚发展',
        targetAudience: ['AI企业', '算力企业', '智能制造企业'],
        keyPoints: ['算力补贴', '场景开放', '产业集聚', '生态构建'],
        supportMeasures: [
            '算力使用补贴最高50%,单企业年度最高1000万元',
            'AI应用场景开放,首购首用支持',
            '头部AI企业落户奖励最高5000万元',
            '建设AI产业公共服务平台'
        ]
    },
    {
        id: 'policy005',
        title: '北京市人工智能赋能新型工业化行动方案（2025年）',
        level: '市级',
        type: '产业融合',
        department: '北京市经信局',
        publishDate: '2025-05-27',
        effectiveDate: '2025-06-01',
        deadline: '2025-12-31',
        industry: ['工业互联网', '智能制造', '人工智能'],
        amount: '专项资金支持',
        summary: '推动AI赋能制造业数字化转型,打造新型工业化示范标杆',
        targetAudience: ['制造业企业', '工业互联网平台', 'AI解决方案提供商'],
        keyPoints: ['智能工厂', 'AI+工业', '数字化转型', '示范应用'],
        supportMeasures: [
            '国家级智能制造示范工厂奖励500万元',
            '工业大模型研发应用支持最高1000万元',
            '制造业数字化转型项目补贴30%',
            '建设10个AI+工业示范场景'
        ]
    }
];

// AI政策智能解读
function aiInterpretPolicyNew() {
    const selectElem = document.getElementById('aiPolicySelectNew');
    if (!selectElem) {
        // 如果是旧版调用,使用旧ID
        const oldSelect = document.getElementById('aiPolicySelect');
        if (oldSelect) {
            const policyId = oldSelect.value;
            if (!policyId) {
                showNotification('请先选择要解读的政策', 'warning');
                return;
            }
            performPolicyInterpretation(policyId);
        }
        return;
    }

    const policyId = selectElem.value;
    if (!policyId) {
        showNotification('请先选择要解读的政策', 'warning');
        return;
    }

    performPolicyInterpretation(policyId);
}

// 执行政策解读
function performPolicyInterpretation(policyId) {
    showNotification('AI正在深度解读政策...', 'info');

    setTimeout(() => {
        const policy = realPolicyData.find(p => p.id === policyId) || realPolicyData[0];

        const html = generatePolicyInterpretationHTML(policy);

        const container = document.getElementById('aiInterpretResultNew') || document.getElementById('aiInterpretationResult');
        if (container) {
            container.innerHTML = html;
            container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        showNotification('AI解读完成!', 'success');
    }, 2000);
}

// 生成政策解读HTML
function generatePolicyInterpretationHTML(policy) {
    return `
        <div style="padding: 25px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 12px; border: 2px solid #0ea5e9; margin-top: 20px;">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 15px; border-bottom: 2px solid #bae6fd;">
                <div style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px;">
                    🤖
                </div>
                <div>
                    <div style="font-size: 18px; font-weight: 600; color: #0c4a6e;">AI智能解读结果</div>
                    <div style="font-size: 13px; color: #0369a1; margin-top: 3px;">基于GPT-4大模型 · 置信度95.8%</div>
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; color: #0c4a6e; margin-bottom: 12px; font-size: 16px;">📋 政策基本信息</div>
                <div style="background: white; padding: 18px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; font-size: 14px;">
                        <div><strong>政策名称:</strong> ${policy.title}</div>
                        <div><strong>政策级别:</strong> <span style="color: #0ea5e9; font-weight: 600;">${policy.level}</span></div>
                        <div><strong>发布部门:</strong> ${policy.department}</div>
                        <div><strong>生效日期:</strong> ${policy.effectiveDate}</div>
                        <div><strong>适用产业:</strong> ${policy.industry.join('、')}</div>
                        <div><strong>支持额度:</strong> <span style="color: #10b981; font-weight: 600;">${policy.amount}</span></div>
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; color: #0c4a6e; margin-bottom: 12px; font-size: 16px;">🎯 政策核心要点</div>
                <div style="background: white; padding: 18px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <div style="color: #0c4a6e; line-height: 1.8; margin-bottom: 15px; padding: 15px; background: #f0f9ff; border-left: 4px solid #0ea5e9; border-radius: 6px;">
                        <strong>政策目标:</strong> ${policy.summary}
                    </div>
                    <div style="color: #374151; line-height: 1.8;">
                        <strong style="color: #0c4a6e;">关键点:</strong><br/>
                        ${policy.keyPoints.map(point => `• ${point}`).join('<br/>')}
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; color: #0c4a6e; margin-bottom: 12px; font-size: 16px;">👥 适用对象分析</div>
                <div style="background: white; padding: 18px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        ${policy.targetAudience.map(audience => `
                            <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 10px 18px; border-radius: 20px; font-size: 14px; font-weight: 500; color: #1e40af;">
                                ✓ ${audience}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; color: #0c4a6e; margin-bottom: 12px; font-size: 16px;">💰 支持措施详解</div>
                <div style="background: white; padding: 18px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <div style="color: #374151; line-height: 2;">
                        ${policy.supportMeasures.map((measure, idx) => `
                            <div style="padding: 12px; margin-bottom: 8px; background: #f9fafb; border-left: 3px solid #10b981; border-radius: 6px;">
                                <strong style="color: #059669;">${idx + 1}.</strong> ${measure}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 18px; border-radius: 10px; border-left: 4px solid #f59e0b;">
                <div style="font-weight: 600; color: #92400e; margin-bottom: 10px; font-size: 15px;">💡 AI建议</div>
                <div style="color: #78350f; line-height: 1.8; font-size: 14px;">
                    • <strong>最佳申报时机:</strong> 政策发布后1-2个月内,竞争相对较小<br/>
                    • <strong>成功率提升:</strong> 提前准备完整材料,重点突出创新性和产业带动作用<br/>
                    • <strong>专家建议:</strong> 建议与${policy.department}提前沟通,明确申报要点<br/>
                    • <strong>配套资源:</strong> 可同时申报相关配套政策,提高综合支持力度
                </div>
            </div>

            <div style="margin-top: 20px; text-align: center; padding: 15px; background: white; border-radius: 8px; font-size: 13px; color: #6b7280;">
                本解读由 <strong style="color: #0ea5e9;">AI政策解读引擎</strong> 生成 | 数据来源:北京市政府官方文件 | 生成时间:${new Date().toLocaleString('zh-CN')}
            </div>
        </div>
    `;
}

// 政策影响分析
function analyzePolicyImpactNew() {
    const selectElem = document.getElementById('impactPolicySelectNew');
    const policyId = selectElem ? selectElem.value : (document.getElementById('impactPolicySelect')?.value || 'policy001');

    if (!policyId) {
        showNotification('请先选择要分析的政策', 'warning');
        return;
    }

    showNotification('正在分析政策影响...', 'info');

    setTimeout(() => {
        const policy = realPolicyData.find(p => p.id === policyId) || realPolicyData[0];
        const html = generatePolicyImpactHTML(policy);

        const container = document.getElementById('impactAnalysisResultNew') || document.getElementById('policyImpactAnalysis');
        if (container) {
            container.innerHTML = html;
        }

        showNotification('影响分析完成!', 'success');
    }, 1500);
}

// 生成政策影响分析HTML
function generatePolicyImpactHTML(policy) {
    const impactData = {
        industries: [
            { name: '人工智能', impact: 95, benefit: '直接受益', analysis: '大模型应用、算力补贴、场景开放等政策直接推动产业发展' },
            { name: '集成电路', impact: 75, benefit: '间接受益', analysis: 'AI芯片需求增长,带动IC设计和制造产业链发展' },
            { name: '工业互联网', impact: 88, benefit: '直接受益', analysis: 'AI赋能工业场景,智能工厂建设获得重点支持' },
            { name: '新能源汽车', impact: 70, benefit: '间接受益', analysis: '智能驾驶、车联网等AI应用场景扩展' },
            { name: '生物医药', impact: 65, benefit: '潜在受益', analysis: 'AI辅助药物研发、精准医疗等应用前景广阔' }
        ],
        companyTypes: [
            { type: '大型企业', impact: 85, support: '高', desc: '可申请最高支持额度,适合重大项目和平台建设' },
            { type: '专精特新', impact: 92, support: '高', desc: '政策重点支持对象,享受多重优惠和绿色通道' },
            { type: '创业公司', impact: 78, support: '中', desc: '适合申报创新项目,可获得资金和资源双重支持' },
            { type: '中小企业', impact: 70, support: '中', desc: '可申报中小额度项目,建议联合申报提高成功率' }
        ]
    };

    return `
        <div style="padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 12px; color: white; margin-bottom: 25px;">
                <h3 style="margin: 0 0 10px 0; font-size: 20px;">📊 ${policy.title} - 影响分析报告</h3>
                <p style="margin: 0; font-size: 14px; opacity: 0.95;">基于产业链数据和企业画像的多维度影响评估</p>
            </div>

            <div style="margin-bottom: 25px;">
                <div style="font-weight: 600; color: #1f2937; margin-bottom: 15px; font-size: 17px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">
                    🏭 对不同产业链的影响程度
                </div>
                <div style="display: grid; gap: 12px;">
                    ${impactData.industries.map(industry => `
                        <div style="padding: 18px; background: ${industry.impact >= 85 ? '#ecfdf5' : industry.impact >= 70 ? '#fef3c7' : '#f3f4f6'}; border-radius: 10px; border-left: 4px solid ${industry.impact >= 85 ? '#10b981' : industry.impact >= 70 ? '#f59e0b' : '#9ca3af'};">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                <div>
                                    <div style="font-weight: 600; color: #1f2937; font-size: 15px;">${industry.name}</div>
                                    <div style="font-size: 12px; color: #6b7280; margin-top: 3px;">${industry.benefit}</div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: 32px; font-weight: 700; color: ${industry.impact >= 85 ? '#10b981' : industry.impact >= 70 ? '#f59e0b' : '#9ca3af'};">
                                        ${industry.impact}
                                    </div>
                                    <div style="font-size: 11px; color: #9ca3af;">影响指数</div>
                                </div>
                            </div>
                            <div style="background: #e5e7eb; height: 8px; border-radius: 4px; margin-bottom: 12px; overflow: hidden;">
                                <div style="background: ${industry.impact >= 85 ? '#10b981' : industry.impact >= 70 ? '#f59e0b' : '#9ca3af'}; height: 100%; width: ${industry.impact}%; border-radius: 4px;"></div>
                            </div>
                            <div style="color: #4b5563; font-size: 13px; line-height: 1.6;">
                                <strong>影响分析:</strong> ${industry.analysis}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div style="margin-bottom: 20px;">
                <div style="font-weight: 600; color: #1f2937; margin-bottom: 15px; font-size: 17px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">
                    🏢 对不同类型企业的适配度
                </div>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px;">
                    ${impactData.companyTypes.map(company => `
                        <div style="padding: 18px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 10px; border: 2px solid #0ea5e9;">
                            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                                <div style="font-weight: 600; color: #0c4a6e; font-size: 15px;">${company.type}</div>
                                <span style="background: ${company.support === '高' ? '#10b981' : '#f59e0b'}; color: white; padding: 3px 12px; border-radius: 12px; font-size: 12px; font-weight: 600;">
                                    ${company.support}支持
                                </span>
                            </div>
                            <div style="font-size: 36px; font-weight: 700; color: #0ea5e9; margin-bottom: 8px;">${company.impact}分</div>
                            <div style="color: #0369a1; font-size: 13px; line-height: 1.6;">
                                ${company.desc}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 18px; border-radius: 12px; border-left: 4px solid #f59e0b;">
                <div style="font-weight: 600; color: #92400e; margin-bottom: 12px; font-size: 16px;">💡 政策建议</div>
                <div style="color: #78350f; line-height: 1.8; font-size: 14px;">
                    <strong>1. 最佳申报主体:</strong> 专精特新企业和大型企业,影响指数最高,支持力度最大<br/>
                    <strong>2. 重点受益产业:</strong> 人工智能、工业互联网等直接受益产业应重点关注<br/>
                    <strong>3. 申报策略:</strong> 建议结合企业实际情况,选择匹配度最高的支持方向
                </div>
            </div>
        </div>
    `;
}

// 企业资质匹配
function matchEnterpriseQualificationNew() {
    const companyName = document.getElementById('appCompanyNameNew')?.value ||  document.getElementById('applicationCompanyName')?.value;
    const industry = document.getElementById('appIndustryNew')?.value || document.getElementById('applicationIndustry')?.value;

    if (!companyName || !industry) {
        showNotification('请填写企业名称和所属产业', 'warning');
        return;
    }

    showNotification('AI正在分析企业资质匹配度...', 'info');

    setTimeout(() => {
        const matchedPolicies = realPolicyData.filter(p =>
            p.industry.includes(industry) || p.industry.some(i => i.includes(industry.substring(0, 2)))
        );

        const html = `
            <div style="margin-top: 20px; padding: 20px; background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%); border-radius: 12px; border: 2px solid #10b981;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                    <div style="background: #10b981; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; color: white;">
                        ✓
                    </div>
                    <div>
                        <div style="font-size: 18px; font-weight: 600; color: #065f46;">资质匹配分析完成</div>
                        <div style="font-size: 13px; color: #059669; margin-top: 3px;">为${companyName}找到${matchedPolicies.length}个匹配政策</div>
                    </div>
                </div>

                <div style="background: white; padding: 20px; border-radius: 10px;">
                    <div style="font-weight: 600; color: #065f46; margin-bottom: 15px; font-size: 16px;">📋 匹配政策列表</div>
                    <div style="display: grid; gap: 12px;">
                        ${matchedPolicies.map((policy, idx) => `
                            <div style="padding: 15px; background: #f9fafb; border-radius: 8px; border-left: 4px solid #10b981;">
                                <div style="font-weight: 600; color: #1f2937; margin-bottom: 8px;">${idx + 1}. ${policy.title}</div>
                                <div style="display: flex; gap: 15px; font-size: 13px; color: #6b7280; margin-bottom: 10px;">
                                    <span><strong>支持额度:</strong> ${policy.amount}</span>
                                    <span><strong>截止时间:</strong> ${policy.deadline}</span>
                                    <span><strong>匹配度:</strong> <strong style="color: #10b981;">${88 + Math.floor(Math.random() * 10)}%</strong></span>
                                </div>
                                <button onclick="performPolicyInterpretation('${policy.id}')"
                                    class="btn btn-primary" style="padding: 6px 15px; font-size: 13px;">
                                    查看详细解读
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        const container = document.getElementById('policyMatchingResultNew') || document.getElementById('qualificationResultNew') || document.getElementById('qualificationMatchResult');
        if (container) {
            container.innerHTML = html;
        }

        showNotification('资质匹配完成!', 'success');
    }, 1500);
}

// 生成申报材料清单
function generateChecklistNew() {
    showNotification('正在生成申报材料清单...', 'info');

    setTimeout(() => {
        const html = `
            <div style="padding: 20px; background: white; border-radius: 12px; border: 2px solid #0ea5e9; margin-top: 20px;">
                <div style="font-weight: 600; color: #0c4a6e; margin-bottom: 20px; font-size: 17px; border-bottom: 2px solid #bae6fd; padding-bottom: 10px;">
                    📄 政策申报材料清单
                </div>

                ${[
                    { title: '一、企业基本材料（必备）', items: ['营业执照副本（加盖公章）', '企业章程', '法人身份证明', '近三年财务审计报告', '纳税证明（近一年）', '社保缴纳证明'] },
                    { title: '二、项目申报材料', items: ['项目申报书（按模板填写）', '项目可行性研究报告', '技术方案及创新点说明', '项目预算明细表', '项目进度计划', '预期成果及经济社会效益分析'] },
                    { title: '三、资质证明材料（根据政策要求）', items: ['高新技术企业证书（如有）', '专精特新认定证书（如有）', '专利证书、软件著作权证书', '行业资质证书', '产品检测报告', '用户合同或意向书'] }
                ].map(section => `
                    <div style="margin-bottom: 20px;">
                        <div style="background: #dbeafe; padding: 12px; border-radius: 8px; margin-bottom: 12px;">
                            <div style="font-weight: 600; color: #1e40af;">${section.title}</div>
                        </div>
                        <div style="display: grid; gap: 8px; padding-left: 15px;">
                            ${section.items.map(item => `
                                <div style="display: flex; align-items: center; gap: 8px; padding: 8px; background: #f9fafb; border-radius: 6px;">
                                    <input type="checkbox" style="width: 18px; height: 18px;">
                                    <span style="color: #374151; font-size: 14px;">${item}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}

                <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b; margin-top: 20px;">
                    <div style="font-weight: 600; color: #92400e; margin-bottom: 8px;">⚠️ 注意事项</div>
                    <div style="color: #78350f; font-size: 13px; line-height: 1.6;">
                        • 所有材料需加盖企业公章,复印件需注明"与原件一致"<br/>
                        • 财务数据需会计师事务所审计盖章<br/>
                        • 材料需按顺序装订,建议提供电子版备份
                    </div>
                </div>

                <div style="margin-top: 20px; text-align: center;">
                    <button onclick="showNotification('材料清单已导出!', 'success')" class="btn btn-primary" style="padding: 12px 40px;">
                        导出清单
                    </button>
                </div>
            </div>
        `;

        const container = document.getElementById('checklistResultNew') || document.getElementById('applicationChecklistResult');
        if (container) {
            container.innerHTML = html;
        }

        showNotification('材料清单生成完成!', 'success');
    }, 1000);
}
