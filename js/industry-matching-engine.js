// 产业契合度智能匹配引擎

/**
 * 计算企业与园区产业的契合度评分（10分制）
 * @param {Object} enterprise - 企业画像数据
 * @returns {Object} 匹配结果
 */
function calculateIndustryMatch(enterprise) {
    // 1. 产业方向契合度评分 (30%)
    const industryScore = calculateIndustryAlignment(enterprise);

    // 2. 技术水平评分 (20%)
    const techScore = calculateTechnologyLevel(enterprise);

    // 3. 成长潜力评分 (15%)
    const growthScore = calculateGrowthPotential(enterprise);

    // 4. 创新能力评分 (15%)
    const innovationScore = calculateInnovationCapability(enterprise);

    // 5. 战略价值评分 (12%)
    const strategicScore = calculateStrategicValue(enterprise);

    // 6. 资源匹配度评分 (8%)
    const resourceScore = calculateResourceMatch(enterprise);

    // 综合评分
    const totalScore = (
        industryScore * 0.30 +
        techScore * 0.20 +
        growthScore * 0.15 +
        innovationScore * 0.15 +
        strategicScore * 0.12 +
        resourceScore * 0.08
    ).toFixed(1);

    // 识别优质标的
    const qualityTags = identifyQualityEnterprise(enterprise);

    // 生成落地建议
    const suggestions = generateLandingSuggestions(enterprise, parseFloat(totalScore), qualityTags);

    // 评分等级
    const grade = getScoreGrade(parseFloat(totalScore));

    return {
        totalScore: parseFloat(totalScore),
        grade: grade,
        dimensions: {
            industryAlignment: industryScore.toFixed(1),
            technologyLevel: techScore.toFixed(1),
            growthPotential: growthScore.toFixed(1),
            innovationCapability: innovationScore.toFixed(1),
            strategicValue: strategicScore.toFixed(1),
            resourceMatch: resourceScore.toFixed(1)
        },
        qualityTags: qualityTags,
        suggestions: suggestions,
        matchedIndustries: identifyMatchedIndustries(enterprise)
    };
}

/**
 * 1. 计算产业方向契合度
 */
function calculateIndustryAlignment(enterprise) {
    let score = 0;
    const keywords = enterprise.businessScope.keywords || [];

    parkIndustryProfile.mainIndustries.forEach(industry => {
        const matchCount = keywords.filter(kw =>
            industry.keywords.some(ik =>
                kw.includes(ik) || ik.includes(kw)
            )
        ).length;

        if (matchCount > 0) {
            score += (matchCount / keywords.length) * industry.weight * 10;
        }
    });

    return Math.min(score * 2.5, 10); // 归一化到10分
}

/**
 * 2. 计算技术水平
 */
function calculateTechnologyLevel(enterprise) {
    let score = 0;

    // 专利数量和质量
    const patents = enterprise.patents;
    if (patents.total > 0) {
        const patentScore = Math.min(
            (patents.invention * 1.0 + patents.utility * 0.5 + patents.design * 0.3) / 50,
            1
        );
        score += patentScore * 4;
    }

    // 研发投入比例
    const rdRatio = enterprise.annualReport.rdRatio || 0;
    if (rdRatio > 15) {
        score += 3;
    } else if (rdRatio > 10) {
        score += 2;
    } else if (rdRatio > 5) {
        score += 1;
    }

    // 技术认证和资质
    const certs = enterprise.website.certifications || [];
    score += Math.min(certs.length * 0.5, 3);

    return Math.min(score, 10);
}

/**
 * 3. 计算成长潜力
 */
function calculateGrowthPotential(enterprise) {
    let score = 0;

    // 营收增长率
    const growthRate = enterprise.annualReport.growthRate || 0;
    if (growthRate > 50) {
        score += 4;
    } else if (growthRate > 30) {
        score += 3;
    } else if (growthRate > 15) {
        score += 2;
    } else if (growthRate > 0) {
        score += 1;
    }

    // 融资情况
    const financing = enterprise.financing;
    if (financing.totalRounds >= 4) {
        score += 3;
    } else if (financing.totalRounds >= 2) {
        score += 2;
    } else if (financing.totalRounds >= 1) {
        score += 1;
    }

    // 市场地位
    if (enterprise.industryPosition.isLeader) {
        score += 2;
    }
    if (enterprise.industryPosition.marketShare > 10) {
        score += 1;
    }

    return Math.min(score, 10);
}

/**
 * 4. 计算创新能力
 */
function calculateInnovationCapability(enterprise) {
    let score = 0;

    // 近年专利产出
    const recentPatents = enterprise.patents.recentYear || 0;
    if (recentPatents > 30) {
        score += 4;
    } else if (recentPatents > 15) {
        score += 3;
    } else if (recentPatents > 5) {
        score += 2;
    } else if (recentPatents > 0) {
        score += 1;
    }

    // 核心技术能力
    const coreCompetence = enterprise.industryPosition.coreCompetence || [];
    score += Math.min(coreCompetence.length * 1.5, 3);

    // 荣誉和认证
    const honors = enterprise.honors || [];
    score += Math.min(honors.length * 0.5, 3);

    return Math.min(score, 10);
}

/**
 * 5. 计算战略价值
 */
function calculateStrategicValue(enterprise) {
    let score = 5; // 基础分

    // 独角兽企业
    if (enterprise.industryPosition.isUnicorn) {
        score += 2;
    }

    // 行业龙头
    if (enterprise.industryPosition.isLeader) {
        score += 1.5;
    }

    // 产业链地位
    const keywords = enterprise.businessScope.keywords || [];
    const strategicKeywords = ["关键", "核心", "龙头", "平台", "标准"];
    if (keywords.some(kw => strategicKeywords.some(sk => kw.includes(sk)))) {
        score += 1;
    }

    // 合作伙伴质量
    const partners = enterprise.website.partners || [];
    if (partners.length > 5) {
        score += 0.5;
    }

    return Math.min(score, 10);
}

/**
 * 6. 计算资源匹配度
 */
function calculateResourceMatch(enterprise) {
    let score = 5; // 基础分

    // 企业规模
    const employees = enterprise.basicInfo.employees || 0;
    if (employees > 1000) {
        score += 2;
    } else if (employees > 500) {
        score += 1.5;
    } else if (employees > 200) {
        score += 1;
    }

    // 营收规模
    const revenue = enterprise.annualReport.revenue2023 || 0;
    if (revenue > 200000) {
        score += 2;
    } else if (revenue > 50000) {
        score += 1.5;
    } else if (revenue > 10000) {
        score += 1;
    }

    // 盈利能力
    if (enterprise.annualReport.profit2023 > 0) {
        score += 1;
    }

    return Math.min(score, 10);
}

/**
 * 识别优质标的企业
 */
function identifyQualityEnterprise(enterprise) {
    const tags = [];

    // 独角兽企业
    if (enterprise.industryPosition.isUnicorn) {
        tags.push({
            type: 'unicorn',
            ...matchingConfig.qualityThresholds.unicorn
        });
    }

    // 产业链关键环节
    const keywords = enterprise.businessScope.keywords || [];
    const chainKeywords = ["芯片", "关键", "核心", "平台"];
    if (keywords.some(kw => chainKeywords.some(ck => kw.includes(ck)))) {
        tags.push({
            type: 'chainKeyNode',
            ...matchingConfig.qualityThresholds.chainKeyNode
        });
    }

    // 生态伙伴
    const partners = enterprise.website.partners || [];
    if (partners.length >= 3) {
        tags.push({
            type: 'ecosystemPartner',
            ...matchingConfig.qualityThresholds.ecosystemPartner
        });
    }

    // 技术领先
    if (enterprise.patents.invention > 50 || enterprise.annualReport.rdRatio > 20) {
        tags.push({
            type: 'techLeader',
            ...matchingConfig.qualityThresholds.techLeader
        });
    }

    // 高成长企业
    if (enterprise.annualReport.growthRate > 40) {
        tags.push({
            type: 'fastGrowing',
            ...matchingConfig.qualityThresholds.fastGrowing
        });
    }

    // 创新驱动
    if (enterprise.patents.recentYear > 20) {
        tags.push({
            type: 'innovationDriven',
            ...matchingConfig.qualityThresholds.innovationDriven
        });
    }

    return tags;
}

/**
 * 生成落地建议
 */
function generateLandingSuggestions(enterprise, score, qualityTags) {
    const suggestions = {
        feasibility: "",
        advantages: [],
        challenges: [],
        recommendations: [],
        supportMeasures: []
    };

    // 可行性评估
    if (score >= 8.0) {
        suggestions.feasibility = "高度可行，强烈建议引进该企业";
    } else if (score >= 7.0) {
        suggestions.feasibility = "较好可行，建议优先沟通洽谈";
    } else if (score >= 6.0) {
        suggestions.feasibility = "基本可行，可以进一步了解";
    } else if (score >= 5.0) {
        suggestions.feasibility = "可行性一般，需谨慎评估";
    } else {
        suggestions.feasibility = "可行性较低，不建议引进";
    }

    // 优势分析
    if (qualityTags.length > 0) {
        suggestions.advantages.push(`企业具备${qualityTags.length}项优质标签，综合实力突出`);
    }

    if (enterprise.annualReport.growthRate > 30) {
        suggestions.advantages.push(`近年保持${enterprise.annualReport.growthRate}%的高速增长`);
    }

    if (enterprise.annualReport.rdRatio > 15) {
        suggestions.advantages.push(`研发投入占比${enterprise.annualReport.rdRatio}%，创新能力强`);
    }

    if (enterprise.patents.invention > 50) {
        suggestions.advantages.push(`拥有${enterprise.patents.invention}项发明专利，技术实力雄厚`);
    }

    if (enterprise.industryPosition.isLeader) {
        suggestions.advantages.push(`${enterprise.industryPosition.ranking}，行业影响力大`);
    }

    // 挑战分析
    const revenue = enterprise.annualReport.revenue2023;
    if (revenue < 50000) {
        suggestions.challenges.push("企业规模相对较小，需关注扩产能力");
    }

    if (enterprise.annualReport.growthRate < 15) {
        suggestions.challenges.push("增长速度较缓，需评估发展潜力");
    }

    if (enterprise.basicInfo.employees < 200) {
        suggestions.challenges.push("员工规模较小，需评估人才储备");
    }

    if (!enterprise.industryPosition.isUnicorn && enterprise.financing.totalRounds < 2) {
        suggestions.challenges.push("融资轮次较少，需关注资金实力");
    }

    // 引进建议
    if (score >= 8.0) {
        suggestions.recommendations.push("成立专项工作组，快速对接企业高层");
        suggestions.recommendations.push("提供一站式绿色通道服务");
        suggestions.recommendations.push("匹配最优惠的产业政策组合");
    } else if (score >= 7.0) {
        suggestions.recommendations.push("安排园区参观和政策宣讲");
        suggestions.recommendations.push("了解企业具体需求，定制支持方案");
        suggestions.recommendations.push("推荐合适的产业空间和配套资源");
    } else if (score >= 6.0) {
        suggestions.recommendations.push("深入调研企业发展规划");
        suggestions.recommendations.push("评估双方合作的具体可行性");
        suggestions.recommendations.push("保持持续沟通，寻找合作机会");
    }

    // 支持措施
    if (score >= 7.0) {
        suggestions.supportMeasures.push("优先提供产业用地或载体空间");
        suggestions.supportMeasures.push("给予租金补贴或装修支持");
        suggestions.supportMeasures.push("协助申请市区两级产业扶持资金");
        suggestions.supportMeasures.push("对接本地产业链上下游企业");
        suggestions.supportMeasures.push("提供人才公寓、子女入学等生活配套");
        suggestions.supportMeasures.push("纳入园区重点服务企业名单");
    } else if (score >= 6.0) {
        suggestions.supportMeasures.push("提供标准化产业空间");
        suggestions.supportMeasures.push("协助申请相关产业政策");
        suggestions.supportMeasures.push("提供产业对接和资源匹配服务");
    }

    return suggestions;
}

/**
 * 获取评分等级
 */
function getScoreGrade(score) {
    for (let grade of matchingConfig.scoreGrades) {
        if (score >= grade.min && score <= grade.max) {
            return grade;
        }
    }
    return matchingConfig.scoreGrades[matchingConfig.scoreGrades.length - 1];
}

/**
 * 识别匹配的产业方向
 */
function identifyMatchedIndustries(enterprise) {
    const matched = [];
    const keywords = enterprise.businessScope.keywords || [];

    parkIndustryProfile.mainIndustries.forEach(industry => {
        const matchCount = keywords.filter(kw =>
            industry.keywords.some(ik =>
                kw.includes(ik) || ik.includes(kw)
            )
        ).length;

        if (matchCount > 0) {
            matched.push({
                name: industry.name,
                matchRate: ((matchCount / keywords.length) * 100).toFixed(0),
                matchedKeywords: keywords.filter(kw =>
                    industry.keywords.some(ik => kw.includes(ik) || ik.includes(kw))
                )
            });
        }
    });

    return matched.sort((a, b) => b.matchRate - a.matchRate);
}

/**
 * 生成企业引进可行性报告
 */
function generateFeasibilityReport(enterprise, matchResult) {
    const report = {
        reportId: `FR_${enterprise.id}_${Date.now()}`,
        generateTime: new Date().toLocaleString('zh-CN'),
        enterprise: {
            name: enterprise.name,
            id: enterprise.id,
            type: enterprise.basicInfo.type,
            area: enterprise.basicInfo.area
        },
        matchScore: matchResult.totalScore,
        grade: matchResult.grade,

        // 一、企业基本情况
        basicInfo: {
            registeredCapital: enterprise.basicInfo.registeredCapital,
            foundDate: enterprise.basicInfo.foundDate,
            employees: enterprise.basicInfo.employees,
            businessScope: enterprise.businessScope.main
        },

        // 二、经营状况分析
        businessAnalysis: {
            revenue2023: enterprise.annualReport.revenue2023,
            revenue2022: enterprise.annualReport.revenue2022,
            growthRate: enterprise.annualReport.growthRate,
            profit2023: enterprise.annualReport.profit2023,
            rdExpense: enterprise.annualReport.rdExpense,
            rdRatio: enterprise.annualReport.rdRatio
        },

        // 三、技术创新能力
        innovation: {
            totalPatents: enterprise.patents.total,
            inventionPatents: enterprise.patents.invention,
            recentYearPatents: enterprise.patents.recentYear,
            certifications: enterprise.website.certifications
        },

        // 四、市场地位和融资情况
        marketPosition: {
            isUnicorn: enterprise.industryPosition.isUnicorn,
            isLeader: enterprise.industryPosition.isLeader,
            marketShare: enterprise.industryPosition.marketShare,
            ranking: enterprise.industryPosition.ranking,
            financing: enterprise.financing
        },

        // 五、产业契合度分析
        industryMatch: {
            matchedIndustries: matchResult.matchedIndustries,
            qualityTags: matchResult.qualityTags,
            dimensionScores: matchResult.dimensions
        },

        // 六、引进可行性评估
        feasibilityAssessment: matchResult.suggestions,

        // 七、综合建议
        conclusion: {
            overallAssessment: matchResult.grade.label,
            recommendation: matchResult.grade.recommendation,
            priority: matchResult.totalScore >= 8.0 ? "高" : matchResult.totalScore >= 7.0 ? "中" : "低"
        }
    };

    return report;
}
