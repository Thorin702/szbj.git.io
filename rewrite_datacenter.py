import re

# Read the file
with open('js/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find and replace the loadDataCenterPage function
new_function = '''function loadDataCenterPage() {
    const container = document.getElementById('data-center');
    if (container.children.length > 0) return;

    container.innerHTML = `
        <div class="content-card">
            <div class="card-header" style="border-bottom: 3px solid #0238C1; padding-bottom: 20px; margin-bottom: 25px;">
                <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                    <div style="background: linear-gradient(135deg, #0238C1 0%, #FF7A25 100%); width: 60px; height: 60px; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 32px;">
                        📊
                    </div>
                    <div>
                        <h2 class="card-title" style="margin: 0 0 8px 0; font-size: 24px;">数策通 - 北京市数字产业政策汇聚发布平台</h2>
                        <p style="color: #718096; margin: 0; font-size: 14px;">汇聚全市数字产业政策资源 · 实现政策统一发布与精准推送 · 助力企业获取政策红利</p>
                    </div>
                </div>
            </div>

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
}'''

# Use regex to replace the entire function
pattern = r'function loadDataCenterPage\(\) \{.*?\n\}'
new_content = re.sub(pattern, new_function, content, flags=re.DOTALL)

# Write back
with open('js/main.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully rewrote loadDataCenterPage function with parallel tabs!")
