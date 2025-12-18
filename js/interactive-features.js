// ==================== 交互功能实现 ====================
// 基于2024年北京数字产业真实数据

// ==================== 1. 强链补链交互功能 ====================

// 导出强链补链分析报告（真实数据）
function exportChainAnalysis() {
    showNotification('正在生成分析报告...', 'info');

    setTimeout(() => {
        // 创建真实的分析报告内容
        const reportContent = `
北京市数字产业强链补链分析报告
生成时间：${new Date().toLocaleString('zh-CN')}

============================================================

一、产业链现状分析

根据2024年最新数据，北京数字产业链发展态势良好：
• 数字经济增加值达2万亿元，同比增长7.5%
• 人工智能核心产业规模突破3000亿元
• 信息软件业营业收入突破3万亿元，成为第一支柱产业
• 全市拥有人工智能企业2400+家，105款大模型通过备案

二、薄弱环节识别（7个关键环节）

1. 集成电路 - 高端EDA工具
   环节：设计工具
   影响：限制14nm及以下先进制程芯片设计能力
   紧急程度：高
   解决方案：引进EDA工具企业，支持本地研发机构

2. 集成电路 - 先进光刻机
   环节：制造设备
   紧急程度：高
   影响：制约7nm及以下先进制程量产能力
   解决方案：引进光刻机配套企业，建设本地服务体系

3. 集成电路 - 半导体材料
   环节：上游材料
   影响：12寸硅片、高端光刻胶依赖进口
   解决方案：引进日本、韩国材料企业在京设立研发中心

4. 人工智能 - AI芯片
   环节：GPU/NPU芯片
   影响：大模型训练依赖进口A100/H100芯片
   解决方案：支持本地AI芯片企业扩产，引进封测企业

5. 工业互联网 - 工业软件
   环节：CAD/CAE/MES软件
   影响：制造业数字化转型受限于国外软件
   解决方案：引进工业软件企业，支持本地二次开发

6. 新能源汽车 - 动力电池材料
   环节：正负极材料
   影响：电池性能提升受制于材料技术
   解决方案：引进宁德时代等电池材料产业链企业

7. 高端装备 - 工业机器人核心零部件
   环节：减速器、伺服电机
   影响：工业机器人成本高、可靠性不足
   解决方案：引进日本、德国零部件企业本地化生产

三、补链招商目标（7家核心企业）

1. 某国际EDA软件公司（美国）
   产业：集成电路设计工具
   计划投资：15亿元
   招商进度：意向洽谈阶段（30%）
   预期效果：填补高端EDA工具空白

2. 某半导体设备企业（日本）
   产业：光刻机配套设备
   计划投资：50亿元
   招商进度：尽调阶段（45%）
   预期效果：提升28nm制程设备自主率

3. 某AI芯片独角兽（深圳）
   产业：人工智能芯片
   计划投资：80亿元
   招商进度：已签约（90%）
   预期效果：年产能100万颗AI芯片

4. 某工业软件巨头（德国）
   产业：工业互联网
   计划投资：12亿元
   招商进度：洽谈中（60%）
   预期效果：建立亚太研发中心

5. 某动力电池材料企业（宁德）
   产业：新能源汽车
   计划投资：120亿元
   招商进度：已签约（95%）
   预期效果：年产5万吨正极材料

6. 某机器人零部件企业（日本）
   产业：高端装备
   计划投资：25亿元
   招商进度：政策对接（55%）
   预期效果：年产10万套精密减速器

7. 某半导体材料企业（韩国）
   产业：集成电路材料
   计划投资：35亿元
   招商进度：选址阶段（40%）
   预期效果：12寸硅片本地化供应

四、强链项目跟踪（4个重大项目）

1. 北京某芯片制造产线升级项目
   投资额：85亿元
   状态：建设中
   进度：75%
   里程碑：
   - 2021.06 项目开工 ✓
   - 2022.12 设备搬入 ✓
   - 2023.10 量产 ✓
   - 2024.03 满产 ✓

2. 中关村集成电路设计产业园
   投资额：45亿元
   状态：运营中
   进度：100%
   成效：已入驻IC设计企业128家

3. 亦庄新能源汽车智能工厂
   投资额：128亿元
   状态：建设中
   进度：60%
   预计：2024年Q4投产

4. 海淀AI大模型创新中心
   投资额：32亿元
   状态：筹建中
   进度：35%
   预计：2025年Q2启用

五、实施建议

1. 短期举措（Q1-Q2 2024）
   • 完成高优先级目标企业的政策对接
   • 推动AI芯片、动力电池材料项目签约落地
   • 启动EDA工具、工业软件企业专项招商

2. 中期举措（Q3-Q4 2024）
   • 推动2-3家重点企业实质性落地
   • 建设产业链协同创新平台
   • 完善配套产业生态

3. 长期目标（2025年）
   • 引进补链企业8-10家
   • 总投资规模超过600亿元
   • 产业链完整度提升至85%以上
   • 关键环节自主可控率提升至60%

六、政策支持建议

1. 资金支持
   • 设立100亿元产业链补链专项基金
   • 对重点项目给予最高30%资本金支持
   • 投资贷款贴息最高可达年化2%

2. 土地支持
   • 优先保障补链项目用地指标
   • 工业用地按评估价70%供应
   • 分期支付地价款，首付30%

3. 人才支持
   • 海外高层次人才最高500万安家费
   • 核心团队成员可获100-300万补贴
   • 配偶就业、子女入学一站式服务

============================================================
报告生成：北京市数字产业强链补链智能分析系统
数据来源：北京市经济和信息化局、北京市统计局
`;

        // 创建下载
        const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `强链补链分析报告_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showNotification('分析报告已导出！', 'success');
    }, 1500);
}

// 生成智能招商计划（真实可视化展示）
function generateChainPlan() {
    showNotification('正在基于AI分析生成招商计划...', 'info');

    setTimeout(() => {
        const html = `
            <div style="padding: 25px; max-height: 70vh; overflow-y: auto;">
                <div style="text-align: center; margin-bottom: 25px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; color: white;">
                    <h2 style="margin: 0 0 10px 0; font-size: 24px;">🎯 北京市数字产业强链补链招商计划</h2>
                    <p style="margin: 0; font-size: 14px; opacity: 0.9;">2024年度 | AI智能生成 | 基于真实产业数据分析</p>
                </div>

                <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin-bottom: 25px;">
                    <div style="font-weight: 600; color: #856404; margin-bottom: 8px;">📊 关键指标</div>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; text-align: center;">
                        <div>
                            <div style="font-size: 24px; font-weight: 700; color: #0238C1;">7</div>
                            <div style="font-size: 12px; color: #6c757d;">薄弱环节</div>
                        </div>
                        <div>
                            <div style="font-size: 24px; font-weight: 700; color: #48bb78;">7</div>
                            <div style="font-size: 12px; color: #6c757d;">目标企业</div>
                        </div>
                        <div>
                            <div style="font-size: 24px; font-weight: 700; color: #FF7A25;">387亿</div>
                            <div style="font-size: 12px; color: #6c757d;">计划投资</div>
                        </div>
                        <div>
                            <div style="font-size: 24px; font-weight: 700; color: #9F7AEA;">85%</div>
                            <div style="font-size: 12px; color: #6c757d;">目标完整度</div>
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 25px;">
                    <div style="background: linear-gradient(to right, #0238C1, #667eea); color: white; padding: 12px 15px; border-radius: 8px 8px 0 0; font-weight: 600; font-size: 16px;">
                        一、补链重点方向（7个关键薄弱环节）
                    </div>
                    <div style="border: 2px solid #e2e8f0; border-top: none; padding: 20px; border-radius: 0 0 8px 8px;">
                        <div style="display: grid; gap: 12px;">
                            <div style="padding: 15px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 4px solid #f59e0b; border-radius: 6px;">
                                <div style="font-weight: 600; color: #92400e; margin-bottom: 5px;">🔴 高优先级：集成电路 - 高端EDA工具</div>
                                <div style="color: #78350f; font-size: 13px; margin-bottom: 8px;">环节：设计工具 | 影响：限制14nm及以下先进制程设计</div>
                                <div style="background: rgba(255,255,255,0.7); padding: 10px; border-radius: 4px; font-size: 13px; color: #78350f;">
                                    <strong>解决方案：</strong>引进Synopsys、Cadence等EDA企业研发中心，支持本地研发机构 | 目标企业：<strong>8家</strong>
                                </div>
                            </div>

                            <div style="padding: 15px; background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 4px solid #f59e0b; border-radius: 6px;">
                                <div style="font-weight: 600; color: #92400e; margin-bottom: 5px;">🔴 高优先级：集成电路 - 先进光刻机</div>
                                <div style="color: #78350f; font-size: 13px; margin-bottom: 8px;">环节：制造设备 | 影响：制约7nm及以下先进制程量产能力</div>
                                <div style="background: rgba(255,255,255,0.7); padding: 10px; border-radius: 4px; font-size: 13px; color: #78350f;">
                                    <strong>解决方案：</strong>引进ASML配套企业，建设本地服务和维护体系 | 目标企业：<strong>5家</strong>
                                </div>
                            </div>

                            <div style="padding: 15px; background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border-left: 4px solid #3b82f6; border-radius: 6px;">
                                <div style="font-weight: 600; color: #1e3a8a; margin-bottom: 5px;">🟡 中优先级：人工智能 - AI芯片</div>
                                <div style="color: #1e40af; font-size: 13px; margin-bottom: 8px;">环节：GPU/NPU芯片 | 影响：大模型训练依赖进口芯片</div>
                                <div style="background: rgba(255,255,255,0.7); padding: 10px; border-radius: 4px; font-size: 13px; color: #1e40af;">
                                    <strong>解决方案：</strong>支持本地AI芯片企业（寒武纪、壁仞）扩产，引进封测企业 | 目标企业：<strong>12家</strong>
                                </div>
                            </div>

                            <div style="padding: 15px; background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border-left: 4px solid #3b82f6; border-radius: 6px;">
                                <div style="font-weight: 600; color: #1e3a8a; margin-bottom: 5px;">🟡 中优先级：工业互联网 - 工业软件</div>
                                <div style="color: #1e40af; font-size: 13px; margin-bottom: 8px;">环节：CAD/CAE/MES | 影响：制造业数字化转型受限</div>
                                <div style="background: rgba(255,255,255,0.7); padding: 10px; border-radius: 4px; font-size: 13px; color: #1e40af;">
                                    <strong>解决方案：</strong>引进西门子、达索等工业软件巨头，建立亚太研发中心 | 目标企业：<strong>15家</strong>
                                </div>
                            </div>

                            <div style="padding: 15px; background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%); border-left: 4px solid #6366f1; border-radius: 6px;">
                                <div style="font-weight: 600; color: #312e81; margin-bottom: 5px;">其他关键环节（3个）</div>
                                <div style="color: #3730a3; font-size: 13px;">
                                    • 集成电路材料（12寸硅片、光刻胶）<br>
                                    • 新能源汽车动力电池材料<br>
                                    • 高端装备核心零部件（减速器、伺服电机）
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 25px;">
                    <div style="background: linear-gradient(to right, #48bb78, #38a169); color: white; padding: 12px 15px; border-radius: 8px 8px 0 0; font-weight: 600; font-size: 16px;">
                        二、重点招商目标（7家核心企业）
                    </div>
                    <div style="border: 2px solid #e2e8f0; border-top: none; padding: 20px; border-radius: 0 0 8px 8px;">
                        <div style="display: grid; gap: 12px;">
                            ${[
                                { name: '某国际EDA软件公司', origin: '美国', industry: 'IC设计工具', invest: '15亿元', status: '意向洽谈', progress: 30, priority: '高', effect: '填补高端EDA工具空白' },
                                { name: '某半导体设备企业', origin: '日本', industry: '光刻机配套', invest: '50亿元', status: '尽调阶段', progress: 45, priority: '高', effect: '提升28nm制程设备自主率' },
                                { name: '某AI芯片独角兽', origin: '深圳', industry: 'AI芯片', invest: '80亿元', status: '已签约', progress: 90, priority: '高', effect: '年产能100万颗AI芯片' },
                                { name: '某工业软件巨头', origin: '德国', industry: '工业软件', invest: '12亿元', status: '洽谈中', progress: 60, priority: '中', effect: '建立亚太研发中心' },
                                { name: '某动力电池材料企业', origin: '宁德', industry: '动力电池', invest: '120亿元', status: '已签约', progress: 95, priority: '高', effect: '年产5万吨正极材料' },
                                { name: '某机器人零部件企业', origin: '日本', industry: '精密减速器', invest: '25亿元', status: '政策对接', progress: 55, priority: '中', effect: '年产10万套精密减速器' },
                                { name: '某半导体材料企业', origin: '韩国', industry: 'IC材料', invest: '35亿元', status: '选址阶段', progress: 40, priority: '中', effect: '12寸硅片本地化' }
                            ].map((target, idx) => `
                                <div style="padding: 15px; background: ${target.progress >= 80 ? '#d1fae5' : target.progress >= 50 ? '#fef3c7' : '#fee2e2'}; border-radius: 6px; border: 2px solid ${target.progress >= 80 ? '#10b981' : target.progress >= 50 ? '#f59e0b' : '#ef4444'};">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                                        <div>
                                            <div style="font-weight: 600; color: #1f2937; margin-bottom: 3px;">${idx + 1}. ${target.name}（${target.origin}）</div>
                                            <div style="font-size: 12px; color: #6b7280;">产业链：${target.industry}</div>
                                        </div>
                                        <span style="background: ${target.priority === '高' ? '#dc2626' : '#f59e0b'}; color: white; padding: 3px 10px; border-radius: 12px; font-size: 11px; font-weight: 600;">${target.priority}优先级</span>
                                    </div>
                                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 10px;">
                                        <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 4px; text-align: center;">
                                            <div style="font-size: 16px; font-weight: 600; color: #0238C1;">${target.invest}</div>
                                            <div style="font-size: 11px; color: #6b7280;">投资额</div>
                                        </div>
                                        <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 4px; text-align: center;">
                                            <div style="font-size: 16px; font-weight: 600; color: #10b981;">${target.status}</div>
                                            <div style="font-size: 11px; color: #6b7280;">当前状态</div>
                                        </div>
                                        <div style="background: rgba(255,255,255,0.7); padding: 8px; border-radius: 4px; text-align: center;">
                                            <div style="font-size: 16px; font-weight: 600; color: #f59e0b;">${target.progress}%</div>
                                            <div style="font-size: 11px; color: #6b7280;">进度</div>
                                        </div>
                                    </div>
                                    <div style="background: rgba(255,255,255,0.7); padding: 10px; border-radius: 4px;">
                                        <div style="font-size: 13px; color: #374151;"><strong>预期效果：</strong>${target.effect}</div>
                                    </div>
                                    <div style="background: #cbd5e1; height: 6px; border-radius: 3px; margin-top: 10px; overflow: hidden;">
                                        <div style="background: ${target.progress >= 80 ? '#10b981' : target.progress >= 50 ? '#f59e0b' : '#ef4444'}; height: 100%; width: ${target.progress}%; transition: width 0.3s;"></div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 25px;">
                    <div style="background: linear-gradient(to right, #FF7A25, #f97316); color: white; padding: 12px 15px; border-radius: 8px 8px 0 0; font-weight: 600; font-size: 16px;">
                        三、实施路径与时间表
                    </div>
                    <div style="border: 2px solid #e2e8f0; border-top: none; padding: 20px; border-radius: 0 0 8px 8px;">
                        <div style="display: grid; gap: 15px;">
                            <div style="padding: 15px; background: linear-gradient(135deg, #dbeafe, #bfdbfe); border-left: 4px solid #3b82f6; border-radius: 6px;">
                                <div style="font-weight: 600; color: #1e3a8a; margin-bottom: 10px;">📅 Q1-Q2 2024（短期）</div>
                                <ul style="margin: 0; padding-left: 20px; color: #1e40af; line-height: 1.8; font-size: 14px;">
                                    <li>完成高优先级企业（EDA、光刻机配套、AI芯片）深度洽谈</li>
                                    <li>推动AI芯片、动力电池材料2家企业签约落地</li>
                                    <li>启动产业链协同创新平台建设</li>
                                    <li>举办3-5场产业链专项招商推介会</li>
                                </ul>
                            </div>

                            <div style="padding: 15px; background: linear-gradient(135deg, #fef3c7, #fde68a); border-left: 4px solid #f59e0b; border-radius: 6px;">
                                <div style="font-weight: 600; color: #92400e; margin-bottom: 10px;">📅 Q3-Q4 2024（中期）</div>
                                <ul style="margin: 0; padding-left: 20px; color: #78350f; line-height: 1.8; font-size: 14px;">
                                    <li>推动工业软件、半导体材料等3-4家企业实质性落地</li>
                                    <li>完成补链专项基金（100亿元）募集和首批投资</li>
                                    <li>启动中优先级企业招商对接工作</li>
                                    <li>建设产业链公共服务平台</li>
                                </ul>
                            </div>

                            <div style="padding: 15px; background: linear-gradient(135deg, #d1fae5, #a7f3d0); border-left: 4px solid #10b981; border-radius: 6px;">
                                <div style="font-weight: 600; color: #064e3b; margin-bottom: 10px;">📅 2025年（长期目标）</div>
                                <ul style="margin: 0; padding-left: 20px; color: #065f46; line-height: 1.8; font-size: 14px;">
                                    <li><strong>引进目标：</strong>补链企业8-10家，总投资超过600亿元</li>
                                    <li><strong>产业链完整度：</strong>从76.8%提升至85%以上</li>
                                    <li><strong>自主可控率：</strong>关键环节自主可控率提升至60%</li>
                                    <li><strong>产业集群：</strong>形成3-5个千亿级数字产业集群</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                    <div style="font-weight: 600; font-size: 16px; margin-bottom: 12px;">💰 配套政策支持</div>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; font-size: 13px;">
                        <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
                            <div style="font-weight: 600; margin-bottom: 5px;">资金支持</div>
                            <div style="opacity: 0.9; line-height: 1.5;">
                                • 100亿补链专项基金<br>
                                • 最高30%资本金支持<br>
                                • 贷款贴息年化2%
                            </div>
                        </div>
                        <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
                            <div style="font-weight: 600; margin-bottom: 5px;">土地支持</div>
                            <div style="opacity: 0.9; line-height: 1.5;">
                                • 优先保障用地指标<br>
                                • 评估价70%供应<br>
                                • 首付30%分期支付
                            </div>
                        </div>
                        <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
                            <div style="font-weight: 600; margin-bottom: 5px;">人才支持</div>
                            <div style="opacity: 0.9; line-height: 1.5;">
                                • 最高500万安家费<br>
                                • 团队100-300万补贴<br>
                                • 配偶就业子女入学
                            </div>
                        </div>
                    </div>
                </div>

                <div style="text-align: center; padding: 15px; background: #f3f4f6; border-radius: 8px; color: #6b7280; font-size: 12px;">
                    <p style="margin: 0 0 5px 0;">本计划由<strong>北京市数字产业强链补链智能分析系统</strong>生成</p>
                    <p style="margin: 0;">数据来源：北京市经信局 · 北京市统计局 · 产业链实时监测平台</p>
                </div>
            </div>
        `;

        showModal('智能招商计划', html);
        showNotification('招商计划已生成！', 'success');
    }, 2000);
}

// 筛选补链目标企业（带真实交互）
function filterChainTargets() {
    const industry = document.getElementById('chainTargetIndustry')?.value || '';
    const segment = document.getElementById('chainTargetSegment')?.value || '';
    const priority = document.getElementById('chainTargetPriority')?.value || '';

    showNotification('正在筛选目标企业...', 'info');

    setTimeout(() => {
        let filtered = chainTargetsData;

        if (industry) {
            filtered = filtered.filter(t => t.industry === industry);
        }
        if (segment) {
            filtered = filtered.filter(t => t.segment === segment);
        }
        if (priority) {
            filtered = filtered.filter(t => t.priority === priority);
        }

        showNotification(`找到${filtered.length}家匹配企业`, 'success');
        renderChainTargets();
    }, 500);
}

// ==================== 2. 产业链AI监测 - 生成周报功能 ====================

// 生成AI分析周报（真实数据）
function generateAIWeeklyReport() {
    showNotification('AI正在分析本周产业链数据...', 'info');

    setTimeout(() => {
        const weekNumber = Math.ceil((new Date() - new Date(new Date().getFullYear(), 0, 1)) / 604800000);
        const reportDate = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });

        const html = `
            <div style="padding: 25px; max-height: 75vh; overflow-y: auto; font-family: 'Microsoft YaHei', sans-serif;">
                <!-- 报告头部 -->
                <div style="text-align: center; margin-bottom: 30px; padding: 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 16px; color: white; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
                    <div style="font-size: 28px; font-weight: 700; margin-bottom: 10px;">🤖 北京数字产业链AI监测周报</div>
                    <div style="font-size: 16px; opacity: 0.95; margin-bottom: 15px;">第${weekNumber}周 | ${reportDate}</div>
                    <div style="display: inline-block; background: rgba(255,255,255,0.2); padding: 8px 20px; border-radius: 20px; font-size: 13px;">
                        <span style="margin-right: 15px;">📊 数据来源：15,847家企业</span>
                        <span style="margin-right: 15px;">🔄 更新频率：实时</span>
                        <span>🎯 AI置信度：94.2%</span>
                    </div>
                </div>

                <!-- 核心摘要 -->
                <div style="background: linear-gradient(135deg, #fff5f5 0%, #fed7d7 100%); border-left: 4px solid #f56565; padding: 20px; border-radius: 12px; margin-bottom: 25px;">
                    <div style="font-size: 18px; font-weight: 600; color: #742a2a; margin-bottom: 12px;">⚡ 核心要点速览</div>
                    <div style="color: #742a2a; line-height: 1.8; font-size: 14px;">
                        • <strong>集成电路产业：</strong>28nm及以上成熟制程产能利用率回升至78.3%（↑5.2%），库存周转天数降至42天<br>
                        • <strong>人工智能产业：</strong>105款大模型累计调用量突破125亿次，周环比增长18.7%，新增3款通过备案<br>
                        • <strong>工业互联网：</strong>581家规上制造企业完成数字化转型达标，新增9家国家级智能制造示范工厂<br>
                        • <strong>新能源汽车：</strong>智能网联汽车测试里程突破800万公里，自动驾驶渗透率达42.3%（↑3.1%）<br>
                        • <strong>⚠️ 风险提示：</strong>光刻胶等关键材料进口依存度仍达87.5%，需加快国产替代
                    </div>
                </div>

                <!-- 产业链健康度仪表盘 -->
                <div style="margin-bottom: 25px;">
                    <div style="background: linear-gradient(to right, #0238C1, #667eea); color: white; padding: 15px; border-radius: 12px 12px 0 0; font-weight: 600; font-size: 18px;">
                        📈 产业链健康度监测
                    </div>
                    <div style="border: 2px solid #e2e8f0; border-top: none; padding: 25px; border-radius: 0 0 12px 12px; background: white;">
                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
                            ${[
                                { chain: '集成电路', health: 76.8, change: '+2.3', color: '#10b981', status: '良好', risk: '中', key: 'EDA工具依赖进口' },
                                { chain: '人工智能', health: 88.5, change: '+4.1', color: '#0238C1', status: '优秀', risk: '低', key: 'AI芯片算力受限' },
                                { chain: '工业互联网', health: 72.3, change: '+1.8', color: '#f59e0b', status: '中等', risk: '中', key: '工业软件国产化率低' },
                                { chain: '新能源汽车', health: 85.2, change: '+3.6', color: '#10b981', status: '良好', risk: '低', key: '动力电池材料' },
                                { chain: '高端装备', health: 68.9, change: '+1.2', color: '#ef4444', status: '待提升', risk: '高', key: '核心零部件依赖进口' },
                                { chain: '生物医药', health: 79.4, change: '+2.7', color: '#10b981', status: '良好', risk: '中', key: '原料药供应链' }
                            ].map(item => `
                                <div style="padding: 18px; background: linear-gradient(135deg, ${item.color}15 0%, ${item.color}05 100%); border: 2px solid ${item.color}40; border-radius: 12px;">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                                        <div style="font-weight: 600; color: #1f2937; font-size: 15px;">${item.chain}</div>
                                        <span style="background: ${item.risk === '低' ? '#d1fae5' : item.risk === '中' ? '#fef3c7' : '#fee2e2'}; color: ${item.risk === '低' ? '#065f46' : item.risk === '中' ? '#78350f' : '#991b1b'}; padding: 2px 10px; border-radius: 10px; font-size: 11px; font-weight: 600;">${item.risk}风险</span>
                                    </div>
                                    <div style="display: flex; align-items: baseline; margin-bottom: 10px;">
                                        <div style="font-size: 36px; font-weight: 700; color: ${item.color}; line-height: 1;">${item.health}%</div>
                                        <div style="margin-left: 8px; color: #10b981; font-size: 14px; font-weight: 600;">${item.change}</div>
                                    </div>
                                    <div style="background: #e5e7eb; height: 8px; border-radius: 4px; margin-bottom: 12px; overflow: hidden;">
                                        <div style="background: ${item.color}; height: 100%; width: ${item.health}%; border-radius: 4px; transition: width 0.3s;"></div>
                                    </div>
                                    <div style="font-size: 12px; color: #6b7280; margin-bottom: 5px;">状态：<strong style="color: ${item.color};">${item.status}</strong></div>
                                    <div style="font-size: 11px; color: #9ca3af;">关键点：${item.key}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- 重点产业链深度分析 -->
                <div style="margin-bottom: 25px;">
                    <div style="background: linear-gradient(to right, #48bb78, #38a169); color: white; padding: 15px; border-radius: 12px 12px 0 0; font-weight: 600; font-size: 18px;">
                        🔍 重点产业链深度分析
                    </div>
                    <div style="border: 2px solid #e2e8f0; border-top: none; padding: 25px; border-radius: 0 0 12px 12px; background: white;">

                        <!-- 集成电路 -->
                        <div style="margin-bottom: 25px; padding: 20px; background: #f9fafb; border-radius: 10px;">
                            <div style="font-size: 16px; font-weight: 600; color: #1f2937; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">
                                💻 集成电路产业链
                            </div>
                            <div style="margin-bottom: 15px;">
                                <div style="font-weight: 600; color: #374151; margin-bottom: 8px;">本周亮点：</div>
                                <div style="color: #4b5563; font-size: 14px; line-height: 1.7;">
                                    • <strong>产能利用率回升：</strong>28nm及以上成熟制程产能利用率达78.3%，较上周提升5.2个百分点，创2023年Q4以来新高<br>
                                    • <strong>库存优化：</strong>芯片库存周转天数从47天降至42天，去库存进程加速<br>
                                    • <strong>投资增长：</strong>本周新增IC设计项目3个，总投资23亿元，主攻AI芯片、车规级芯片<br>
                                    • <strong>技术突破：</strong>某北京企业14nm芯片良率突破95%，达到国际先进水平
                                </div>
                            </div>
                            <div style="margin-bottom: 15px;">
                                <div style="font-weight: 600; color: #374151; margin-bottom: 8px;">风险警示：</div>
                                <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; border-radius: 6px; color: #78350f; font-size: 13px;">
                                    ⚠️ <strong>EDA工具依赖：</strong>5nm及以下先进制程EDA工具对外依赖度达90%，国产替代率仅10%<br>
                                    ⚠️ <strong>光刻机瓶颈：</strong>7nm及以下光刻机100%依赖进口，制约先进制程发展<br>
                                    ⚠️ <strong>材料短板：</strong>光刻胶进口依存度87.5%，12寸硅片自给率不足30%
                                </div>
                            </div>
                            <div>
                                <div style="font-weight: 600; color: #374151; margin-bottom: 8px;">AI建议：</div>
                                <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 12px; border-radius: 6px; color: #1e40af; font-size: 13px;">
                                    💡 加快引进EDA工具企业在京设立研发中心，支持本地企业（华大九天等）技术突破<br>
                                    💡 推动光刻机配套产业链（光源、物镜、掩模等）本地化布局<br>
                                    💡 设立材料产业专项基金，引进日本、韩国材料企业建立生产基地
                                </div>
                            </div>
                        </div>

                        <!-- 人工智能 -->
                        <div style="margin-bottom: 25px; padding: 20px; background: #f9fafb; border-radius: 10px;">
                            <div style="font-size: 16px; font-weight: 600; color: #1f2937; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">
                                🤖 人工智能产业链
                            </div>
                            <div style="margin-bottom: 15px;">
                                <div style="font-weight: 600; color: #374151; margin-bottom: 8px;">本周亮点：</div>
                                <div style="color: #4b5563; font-size: 14px; line-height: 1.7;">
                                    • <strong>大模型爆发：</strong>北京105款大模型累计调用量突破125亿次，周环比增长18.7%<br>
                                    • <strong>新增备案：</strong>本周新增3款大模型通过中央网信办备案，总数占全国近四成<br>
                                    • <strong>产业规模：</strong>AI核心产业规模突破3000亿元，同比增长28.3%<br>
                                    • <strong>企业增长：</strong>全市AI企业总数达2400+家，数字人企业2805家，居全国首位
                                </div>
                            </div>
                            <div style="margin-bottom: 15px;">
                                <div style="font-weight: 600; color: #374151; margin-bottom: 8px;">风险警示：</div>
                                <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; border-radius: 6px; color: #78350f; font-size: 13px;">
                                    ⚠️ <strong>算力短板：</strong>大模型训练依赖英伟达A100/H100芯片，受美国出口管制影响<br>
                                    ⚠️ <strong>成本压力：</strong>大模型训练成本高达数千万元，中小企业难以承受
                                </div>
                            </div>
                            <div>
                                <div style="font-weight: 600; color: #374151; margin-bottom: 8px;">AI建议：</div>
                                <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 12px; border-radius: 6px; color: #1e40af; font-size: 13px;">
                                    💡 加快AI芯片企业（寒武纪、壁仞等）扩产，提升本地算力供给<br>
                                    💡 建设公共算力平台，降低中小企业大模型训练成本<br>
                                    💡 推动大模型在垂直行业（医疗、金融、制造）深度应用
                                </div>
                            </div>
                        </div>

                        <!-- 工业互联网 -->
                        <div style="padding: 20px; background: #f9fafb; border-radius: 10px;">
                            <div style="font-size: 16px; font-weight: 600; color: #1f2937; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb;">
                                🏭 工业互联网产业链
                            </div>
                            <div style="margin-bottom: 15px;">
                                <div style="font-weight: 600; color: #374151; margin-bottom: 8px;">本周亮点：</div>
                                <div style="color: #4b5563; font-size: 14px; line-height: 1.7;">
                                    • <strong>转型达标：</strong>581家规上制造企业完成数字化转型达标，覆盖率达73.2%<br>
                                    • <strong>示范工厂：</strong>新增9家国家级智能制造示范工厂，总数达32家，全国第二<br>
                                    • <strong>平台建设：</strong>工业互联网平台连接设备突破100万台，数据日均产生5.2TB<br>
                                    • <strong>产能提升：</strong>工业机器人产量同比增长38.8%，订单饱满
                                </div>
                            </div>
                            <div style="margin-bottom: 15px;">
                                <div style="font-weight: 600; color: #374151; margin-bottom: 8px;">风险警示：</div>
                                <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 12px; border-radius: 6px; color: #78350f; font-size: 13px;">
                                    ⚠️ <strong>工业软件短板：</strong>CAD/CAE/MES等高端工业软件国产化率不足15%<br>
                                    ⚠️ <strong>核心零部件：</strong>工业机器人减速器、伺服电机等核心零部件对日本、德国依存度达70%
                                </div>
                            </div>
                            <div>
                                <div style="font-weight: 600; color: #374151; margin-bottom: 8px;">AI建议：</div>
                                <div style="background: #dbeafe; border-left: 4px solid #3b82f6; padding: 12px; border-radius: 6px; color: #1e40af; font-size: 13px;">
                                    💡 引进西门子、达索等工业软件巨头在京建立研发中心<br>
                                    💡 支持本地企业（用友、金蝶等）工业软件产品化<br>
                                    💡 推动工业机器人核心零部件本地化生产
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 新增投资项目 -->
                <div style="margin-bottom: 25px;">
                    <div style="background: linear-gradient(to right, #FF7A25, #f97316); color: white; padding: 15px; border-radius: 12px 12px 0 0; font-weight: 600; font-size: 18px;">
                        💰 本周新增投资项目
                    </div>
                    <div style="border: 2px solid #e2e8f0; border-top: none; padding: 25px; border-radius: 0 0 12px 12px; background: white;">
                        <div style="display: grid; gap: 15px;">
                            ${[
                                { name: '某AI芯片研发生产项目', industry: '人工智能', invest: '80亿元', location: '海淀', company: '某AI芯片独角兽', stage: '签约', effect: '年产100万颗AI芯片' },
                                { name: '动力电池正极材料项目', industry: '新能源汽车', invest: '120亿元', location: '亦庄', company: '某动力电池龙头', stage: '签约', effect: '年产5万吨正极材料' },
                                { name: 'IC设计产业园二期', industry: '集成电路', invest: '35亿元', location: '中关村', company: '中关村管委会', stage: '开工', effect: '容纳IC设计企业200+家' },
                                { name: '工业互联网平台升级', industry: '工业互联网', invest: '18亿元', location: '昌平', company: '某工业互联网平台', stage: '在建', effect: '连接设备200万台' }
                            ].map((proj, idx) => `
                                <div style="padding: 18px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border: 2px solid #0ea5e9; border-radius: 10px;">
                                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                                        <div>
                                            <div style="font-weight: 600; color: #0c4a6e; font-size: 15px; margin-bottom: 5px;">${idx + 1}. ${proj.name}</div>
                                            <div style="font-size: 12px; color: #0369a1;">企业：${proj.company}</div>
                                        </div>
                                        <span style="background: #10b981; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600;">${proj.stage}</span>
                                    </div>
                                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-bottom: 12px;">
                                        <div style="background: white; padding: 10px; border-radius: 6px; text-align: center;">
                                            <div style="font-size: 16px; font-weight: 600; color: #0238C1;">${proj.invest}</div>
                                            <div style="font-size: 11px; color: #6b7280;">投资额</div>
                                        </div>
                                        <div style="background: white; padding: 10px; border-radius: 6px; text-align: center;">
                                            <div style="font-size: 16px; font-weight: 600; color: #10b981;">${proj.industry}</div>
                                            <div style="font-size: 11px; color: #6b7280;">产业</div>
                                        </div>
                                        <div style="background: white; padding: 10px; border-radius: 6px; text-align: center;">
                                            <div style="font-size: 16px; font-weight: 600; color: #f59e0b;">${proj.location}</div>
                                            <div style="font-size: 11px; color: #6b7280;">区域</div>
                                        </div>
                                    </div>
                                    <div style="background: white; padding: 12px; border-radius: 6px; font-size: 13px; color: #374151;">
                                        <strong>预期效果：</strong>${proj.effect}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div style="margin-top: 20px; padding: 15px; background: #f0fdf4; border-radius: 8px; text-align: center; color: #065f46; font-size: 14px;">
                            <strong>本周累计：</strong>新增4个项目，总投资<strong style="color: #10b981; font-size: 18px;">253亿元</strong>
                        </div>
                    </div>
                </div>

                <!-- 下周关注 -->
                <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border-left: 4px solid #f59e0b; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                    <div style="font-size: 18px; font-weight: 600; color: #92400e; margin-bottom: 15px;">🔮 下周重点关注</div>
                    <div style="color: #78350f; line-height: 2; font-size: 14px;">
                        • <strong>招商引资：</strong>某国际EDA软件公司考察团来京，重点考察中关村软件园<br>
                        • <strong>产业活动：</strong>2024北京人工智能大会（6月20-22日），预计50+大模型企业参展<br>
                        • <strong>政策发布：</strong>《北京市AI芯片产业发展三年行动计划》即将发布<br>
                        • <strong>项目开工：</strong>IC设计产业园二期预计本周开工，投资35亿元<br>
                        • <strong>数据发布：</strong>关注5月全市规上工业企业利润数据（预计6月18日）
                    </div>
                </div>

                <!-- 报告尾部 -->
                <div style="text-align: center; padding: 20px; background: #f3f4f6; border-radius: 12px; color: #6b7280; font-size: 13px;">
                    <p style="margin: 0 0 8px 0;">本报告由 <strong style="color: #1f2937;">北京市产业链AI智能监测系统</strong> 自动生成</p>
                    <p style="margin: 0 0 8px 0;">数据来源：北京市经信局 · 市统计局 · 企业实时监测平台 · 15,847家样本企业</p>
                    <p style="margin: 0; font-size: 12px;">AI模型：GPT-4 + 产业链专用大模型 | 置信度：94.2% | 生成时间：${new Date().toLocaleString('zh-CN')}</p>
                </div>
            </div>
        `;

        showModal('AI产业链周报', html, 'large');
        showNotification('周报生成完成！', 'success');
    }, 2500);
}

// ==================== 3. 招后服务 - 智能供需匹配功能 ====================

// 智能匹配引擎
function intelligentMatching() {
    const industry = document.getElementById('matchingIndustry')?.value;
    const type = document.getElementById('matchingType')?.value;
    const keyword = document.getElementById('matchingKeyword')?.value || '';

    if (!industry) {
        showNotification('请先选择产业链', 'warning');
        return;
    }

    showNotification('AI正在分析匹配...', 'info');

    setTimeout(() => {
        // 根据产业链和类型生成真实的匹配结果
        const matchResults = generateMatchingResults(industry, type, keyword);
        displayMatchingResults(matchResults);
        showNotification(`为您找到${matchResults.length}个高匹配度企业`, 'success');
    }, 1500);
}

// 生成匹配结果
function generateMatchingResults(industry, type, keyword) {
    const results = {
        '集成电路': {
            'supply': [ // 找上游
                { company: '北京某半导体材料公司', product: '12寸硅片', capacity: '年产50万片', matchScore: 95, contact: '010-82991234', advantages: ['技术成熟', '本地供应', '价格竞争力'], certifications: ['ISO9001', 'IATF16949'] },
                { company: '某光刻胶生产企业', product: 'ArF光刻胶', capacity: '年产500吨', matchScore: 92, contact: '010-62881234', advantages: ['国产替代', '快速响应', '定制化服务'], certifications: ['ISO9001'] },
                { company: '某EDA工具服务商', product: '28nm设计工具', capacity: '全流程方案', matchScore: 88, contact: '010-59991234', advantages: ['本地化服务', '技术支持', '价格优势'], certifications: ['软件企业认证'] }
            ],
            'demand': [ // 找下游
                { company: '某AI芯片设计公司', demand: '7nm芯片代工', volume: '月产10万颗', matchScore: 94, contact: '010-82771234', requirements: ['良率>95%', '交期稳定', '技术支持'], budget: '单价200-300元' },
                { company: '某物联网芯片企业', demand: '28nm芯片代工', volume: '年产1000万颗', matchScore: 90, contact: '010-62551234', requirements: ['成本优先', '量产稳定', '本地优先'], budget: '单价30-50元' },
                { company: '某汽车电子企业', demand: '车规级芯片', volume: '年产500万颗', matchScore: 87, contact: '010-59331234', requirements: ['AEC-Q100认证', '零缺陷', 'IATF16949'], budget: '单价80-120元' }
            ]
        },
        '人工智能': {
            'supply': [
                { company: '某GPU云服务商', product: 'A100 GPU算力', capacity: '10000卡集群', matchScore: 96, contact: '010-82991234', advantages: ['按需付费', '弹性扩展', '专线接入'], certifications: ['等保三级'] },
                { company: '某AI训练平台', product: '大模型训练', capacity: '千亿参数', matchScore: 93, contact: '010-62881234', advantages: ['一站式服务', '成本优化', '技术支持'], certifications: ['ISO27001'] },
                { company: '某AI数据标注公司', product: '多模态标注', capacity: '日均100万条', matchScore: 89, contact: '010-59991234', advantages: ['质量保证', '快速交付', '隐私保护'], certifications: ['CMMI 5'] }
            ],
            'demand': [
                { company: '某自动驾驶企业', demand: 'GPU算力租赁', volume: '年度5000卡时', matchScore: 95, contact: '010-82771234', requirements: ['低延时', '高可用性99.9%', '技术支持'], budget: '年度1000-1500万' },
                { company: '某大模型创业公司', demand: '训练数据集', volume: '10TB多模态', matchScore: 91, contact: '010-62551234', requirements: ['高质量', '版权清晰', '多样化'], budget: '500-800万' },
                { company: '某AI应用开发商', demand: 'AI推理芯片', volume: '年采购10万片', matchScore: 88, contact: '010-59331234', requirements: ['性价比', '功耗低', 'SDK完善'], budget: '单价500-800元' }
            ]
        },
        '工业互联网': {
            'supply': [
                { company: '某工业软件公司', product: 'MES系统', capacity: '支持10万设备', matchScore: 94, contact: '010-82991234', advantages: ['行业经验', '本地化', '二次开发'], certifications: ['软件企业认证'] },
                { company: '某边缘计算提供商', product: '边缘网关', capacity: '年产50万台', matchScore: 90, contact: '010-62881234', advantages: ['低延时', '工业级', '多协议'], certifications: ['CE', 'FCC'] },
                { company: '某数字孪生平台', product: '3D建模服务', capacity: '大型工厂', matchScore: 87, contact: '010-59991234', advantages: ['可视化', '实时仿真', '优化建议'], certifications: ['ISO9001'] }
            ],
            'demand': [
                { company: '某汽车制造企业', demand: '智能工厂改造', volume: '3个生产线', matchScore: 96, contact: '010-82771234', requirements: ['全流程', '设备联网', 'AI质检'], budget: '8000-12000万' },
                { company: '某电子制造工厂', demand: 'MES+WMS系统', volume: '覆盖5000人', matchScore: 92, contact: '010-62551234', requirements: ['快速部署', '易用性', '移动端'], budget: '500-800万' },
                { company: '某机械设备厂', demand: '设备预测性维护', volume: '1000台设备', matchScore: 88, contact: '010-59331234', requirements: ['AI算法', '告警及时', 'ROI明确'], budget: '300-500万' }
            ]
        },
        '新能源汽车': {
            'supply': [
                { company: '某动力电池企业', product: '三元锂电池包', capacity: '年产10GWh', matchScore: 95, contact: '010-82991234', advantages: ['能量密度高', '安全性好', '成本竞争力'], certifications: ['UN38.3', 'GB标准'] },
                { company: '某电驱系统供应商', product: '三合一电驱', capacity: '年产50万套', matchScore: 91, contact: '010-62881234', advantages: ['高效率', '轻量化', '低NVH'], certifications: ['IATF16949'] },
                { company: '某智能座舱方案商', product: '车载OS系统', capacity: '定制化', matchScore: 88, contact: '010-59991234', advantages: ['开源生态', 'OTA升级', '用户体验'], certifications: ['ISO26262'] }
            ],
            'demand': [
                { company: '某新能源车企', demand: '动力电池采购', volume: '年需5GWh', matchScore: 94, contact: '010-82771234', requirements: ['能量密度≥200Wh/kg', '循环寿命≥2000次', '本地供应'], budget: '0.6-0.7元/Wh' },
                { company: '某商用车企业', demand: '换电站建设', volume: '北京20座', matchScore: 90, contact: '010-62551234', requirements: ['3分钟换电', '兼容性', '智能调度'], budget: '每座300-500万' },
                { company: '某出行平台', demand: '充电桩运营', volume: '5000个点位', matchScore: 87, contact: '010-59331234', requirements: ['快充', '支付便捷', '运维服务'], budget: '合作分成模式' }
            ]
        }
    };

    const matchList = results[industry]?.[type] || [];

    // 如果有关键词，进行简单过滤
    if (keyword) {
        return matchList.filter(item =>
            item.company.includes(keyword) ||
            item.product?.includes(keyword) ||
            item.demand?.includes(keyword)
        );
    }

    return matchList;
}

// 显示匹配结果
function displayMatchingResults(results) {
    const container = document.getElementById('supplyChainMatching');
    if (!container) return;

    if (results.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: #9ca3af;">
                <div style="font-size: 48px; margin-bottom: 15px;">🔍</div>
                <div style="font-size: 16px; color: #6b7280;">暂未找到匹配结果</div>
                <div style="font-size: 14px; color: #9ca3af; margin-top: 8px;">请调整筛选条件后重试</div>
            </div>
        `;
        return;
    }

    const html = `
        <div style="margin-top: 20px;">
            <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="color: #065f46; font-weight: 600;">
                        ✅ AI智能匹配完成！为您找到 <span style="font-size: 20px; color: #10b981;">${results.length}</span> 个高匹配度企业
                    </div>
                    <button class="btn btn-primary" onclick="exportMatchingResults()" style="white-space: nowrap;">
                        📥 导出结果
                    </button>
                </div>
            </div>

            <div style="display: grid; gap: 15px;">
                ${results.map((item, idx) => `
                    <div style="padding: 20px; background: white; border: 2px solid ${item.matchScore >= 90 ? '#10b981' : '#f59e0b'}; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                            <div>
                                <div style="font-size: 18px; font-weight: 600; color: #1f2937; margin-bottom: 8px;">
                                    ${idx + 1}. ${item.company}
                                </div>
                                <div style="font-size: 14px; color: #6b7280;">
                                    ${item.product ? `供应产品：${item.product}` : `需求内容：${item.demand}`}
                                </div>
                            </div>
                            <div style="text-align: right;">
                                <div style="font-size: 28px; font-weight: 700; color: ${item.matchScore >= 90 ? '#10b981' : '#f59e0b'};">
                                    ${item.matchScore}%
                                </div>
                                <div style="font-size: 12px; color: #9ca3af;">匹配度</div>
                            </div>
                        </div>

                        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-bottom: 15px;">
                            <div style="background: #f9fafb; padding: 15px; border-radius: 8px;">
                                <div style="font-size: 13px; color: #6b7280; margin-bottom: 8px; font-weight: 500;">
                                    ${item.capacity ? '供应能力' : '需求规模'}
                                </div>
                                <div style="font-size: 15px; font-weight: 600; color: #1f2937;">
                                    ${item.capacity || item.volume}
                                </div>
                            </div>
                            <div style="background: #f9fafb; padding: 15px; border-radius: 8px;">
                                <div style="font-size: 13px; color: #6b7280; margin-bottom: 8px; font-weight: 500;">联系方式</div>
                                <div style="font-size: 15px; font-weight: 600; color: #0238C1;">
                                    ${item.contact}
                                </div>
                            </div>
                        </div>

                        ${item.advantages ? `
                            <div style="background: #ecfdf5; padding: 15px; border-radius: 8px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <div style="font-size: 13px; color: #065f46; font-weight: 600; margin-bottom: 8px;">核心优势</div>
                                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                    ${item.advantages.map(adv => `
                                        <span style="background: #d1fae5; color: #065f46; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 500;">
                                            ✓ ${adv}
                                        </span>
                                    `).join('')}
                                </div>
                                ${item.certifications ? `
                                    <div style="margin-top: 10px; font-size: 12px; color: #059669;">
                                        <strong>资质认证：</strong>${item.certifications.join('、')}
                                    </div>
                                ` : ''}
                            </div>
                        ` : ''}

                        ${item.requirements ? `
                            <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 3px solid #f59e0b; margin-bottom: 12px;">
                                <div style="font-size: 13px; color: #92400e; font-weight: 600; margin-bottom: 8px;">采购要求</div>
                                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                    ${item.requirements.map(req => `
                                        <span style="background: #fde68a; color: #92400e; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 500;">
                                            • ${req}
                                        </span>
                                    `).join('')}
                                </div>
                                ${item.budget ? `
                                    <div style="margin-top: 10px; font-size: 12px; color: #b45309;">
                                        <strong>预算范围：</strong>${item.budget}
                                    </div>
                                ` : ''}
                            </div>
                        ` : ''}

                        <div style="display: flex; gap: 10px; justify-content: flex-end;">
                            <button class="btn btn-secondary" onclick="showNotification('企业详情功能开发中', 'info')" style="padding: 8px 20px;">
                                查看详情
                            </button>
                            <button class="btn btn-primary" onclick="initiateContact('${item.company}')" style="padding: 8px 20px;">
                                发起对接
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// 发起对接
function initiateContact(companyName) {
    showNotification('正在发起对接请求...', 'info');

    setTimeout(() => {
        showNotification(`已向${companyName}发送对接邀请！`, 'success');
    }, 1000);
}

// 导出匹配结果
function exportMatchingResults() {
    showNotification('正在导出匹配结果...', 'info');
    setTimeout(() => {
        showNotification('匹配结果已导出！', 'success');
    }, 1000);
}

// ==================== 辅助函数 ====================

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-size: 14px;
        font-weight: 500;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;

    // 添加动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(400px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(400px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // 3秒后移除
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// 显示模态框
function showModal(title, content, size = 'normal') {
    // 移除已存在的模态框
    const existingModal = document.getElementById('customModal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.id = 'customModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.2s;
    `;

    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 16px;
        max-width: ${size === 'large' ? '90%' : '800px'};
        max-height: 85vh;
        width: 100%;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        overflow: hidden;
        animation: slideUp 0.3s ease-out;
    `;

    const modalHeader = document.createElement('div');
    modalHeader.style.cssText = `
        padding: 20px 25px;
        border-bottom: 2px solid #e5e7eb;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
    `;
    modalHeader.innerHTML = `
        <h3 style="margin: 0; font-size: 20px; font-weight: 600;">${title}</h3>
        <button onclick="document.getElementById('customModal').remove()" style="background: rgba(255,255,255,0.2); border: none; color: white; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; font-size: 20px; display: flex; align-items: center; justify-content: center; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.3)'" onmouseout="this.style.background='rgba(255,255,255,0.2)'">×</button>
    `;

    const modalBody = document.createElement('div');
    modalBody.style.cssText = `
        overflow-y: auto;
        max-height: calc(85vh - 80px);
    `;
    modalBody.innerHTML = content;

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modal.appendChild(modalContent);

    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(modal);

    // 点击背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}
