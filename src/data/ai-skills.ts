// AI Skills 数据 - 真正的AI技能/技巧，不是工具
// 参考腾讯SkillHub设计理念：Skills = AI能力/技巧/方法

export interface AISkill {
  id: string;
  title: string;           // 技能标题
  summary: string;         // 简介
  category: string;        // 分类
  tags: string[];          // 标签
  useCases: string[];      // 使用场景
  template: string;        // 示例/模板
  tips: string[];          // 技巧要点
  relatedTools: {          // 相关工具链接
    name: string;
    url: string;
  }[];
  difficulty: 'beginner' | 'intermediate' | 'advanced'; // 难度
  isHot?: boolean;
  isNew?: boolean;
}

// Skills分类
export const aiSkillCategories = [
  { id: 'all', name: '全部技能', icon: '🔥', description: '所有AI技能' },
  { id: 'prompt', name: '提示词工程', icon: '💬', description: 'Prompt Engineering技巧' },
  { id: 'art', name: 'AI绘画方法', icon: '🎨', description: '图像生成与艺术创作' },
  { id: 'coding', name: 'AI编程技巧', icon: '💻', description: '代码生成与开发辅助' },
  { id: 'office', name: 'AI办公效率', icon: '⚡', description: '提升工作效率的方法' },
  { id: 'learning', name: 'AI学习提升', icon: '📚', description: '学习与知识管理' },
  { id: 'chat', name: '对话技巧', icon: '🗣️', description: '高效对话与沟通' },
];

// AI Skills 数据
export const aiSkills: AISkill[] = [
  // ========== 提示词工程技巧 ==========
  {
    id: 'prompt-cot',
    title: '思维链提示 (Chain-of-Thought)',
    summary: '引导AI分步骤思考，提升复杂问题推理能力的核心技巧',
    category: 'prompt',
    tags: ['推理', '逻辑', '分步思考'],
    difficulty: 'beginner',
    useCases: [
      '解决数学问题或逻辑推理题',
      '分析复杂业务场景',
      '代码调试和错误排查',
      '决策分析和方案评估'
    ],
    template: `请按以下步骤分析这个问题：

问题：[你的问题]

步骤1：理解问题核心
步骤2：列出已知条件
步骤3：分析可能的原因
步骤4：给出解决方案
步骤5：验证结果

请详细展示每一步的思考过程。`,
    tips: [
      '使用"让我们一步步思考"或"请展示你的推理过程"',
      '要求AI在每一步后暂停，确认后再继续',
      '对于复杂问题，可以要求AI使用表格或列表组织思路',
      '鼓励AI自我纠正："检查你的推理是否有错误"'
    ],
    relatedTools: [
      { name: 'ChatGPT', url: 'https://chat.openai.com' },
      { name: 'Claude', url: 'https://claude.ai' },
      { name: 'Kimi', url: 'https://kimi.moonshot.cn' }
    ],
    isHot: true
  },
  {
    id: 'prompt-role',
    title: '角色扮演提示法',
    summary: '让AI扮演特定角色，获得更专业、更有针对性的回答',
    category: 'prompt',
    tags: ['角色设定', '专业化', '场景模拟'],
    difficulty: 'beginner',
    useCases: [
      '需要专业领域建议（法律、医疗、技术）',
      '模拟面试或谈判场景',
      '创意写作需要特定风格',
      '教育和培训场景'
    ],
    template: `请你扮演一位[专业角色]，具备以下特征：

背景：[相关经验和资历]
专长：[核心能力领域]
风格：[沟通风格，如严谨/幽默/简洁]
目标：[当前任务目标]

我的问题是：[具体问题]

请以这个角色的身份回答。`,
    tips: [
      '详细描述角色的背景和经验，越具体越好',
      '可以指定回答风格（专业、通俗、幽默等）',
      '要求AI在回答前先确认理解的角色设定',
      '多轮对话中保持角色一致性'
    ],
    relatedTools: [
      { name: 'ChatGPT', url: 'https://chat.openai.com' },
      { name: 'Claude', url: 'https://claude.ai' }
    ],
    isHot: true
  },
  {
    id: 'prompt-fewshot',
    title: '少样本示例提示 (Few-Shot)',
    summary: '通过提供示例让AI快速理解任务模式，提高输出质量',
    category: 'prompt',
    tags: ['示例学习', '模式识别', '快速上手'],
    difficulty: 'intermediate',
    useCases: [
      '需要特定格式输出的任务',
      '风格模仿和转换',
      '分类和标签任务',
      '数据提取和整理'
    ],
    template: `请按照以下示例的格式和风格完成任务：

示例1：
输入：[输入内容1]
输出：[期望输出1]

示例2：
输入：[输入内容2]
输出：[期望输出2]

示例3：
输入：[输入内容3]
输出：[期望输出3]

现在请处理：
输入：[你的输入]
输出：`,
    tips: [
      '提供3-5个高质量示例，覆盖不同场景',
      '确保示例格式一致，便于AI学习模式',
      '示例应包含边界情况（如异常输入的处理）',
      '可以在示例后直接提问，用"现在请处理"引导'
    ],
    relatedTools: [
      { name: 'ChatGPT', url: 'https://chat.openai.com' },
      { name: 'Claude', url: 'https://claude.ai' }
    ]
  },
  {
    id: 'prompt-rtf',
    title: 'RTF框架：角色-任务-格式',
    summary: '结构化提示词的黄金公式，确保AI理解你的需求',
    category: 'prompt',
    tags: ['结构化', '框架', '高效'],
    difficulty: 'beginner',
    useCases: [
      '任何需要明确输出的场景',
      '团队协作时的提示词标准化',
      '需要特定格式输出的任务',
      '初次接触AI的新手入门'
    ],
    template: `角色：你是一位[具体角色]

任务：[清晰描述需要AI做什么]

格式要求：
- [格式要求1]
- [格式要求2]
- [格式要求3]

其他要求：
- [额外要求1]
- [额外要求2]`,
    tips: [
      '角色要具体，避免模糊的"专家"',
      '任务描述要包含动词（分析、总结、创建等）',
      '格式要求越详细，输出越可控',
      '可以添加"不要..."来排除不想要的内容'
    ],
    relatedTools: [
      { name: 'ChatGPT', url: 'https://chat.openai.com' },
      { name: 'Claude', url: 'https://claude.ai' },
      { name: '豆包', url: 'https://www.doubao.com' }
    ],
    isHot: true
  },
  {
    id: 'prompt-meta',
    title: '元提示技术 (Meta-Prompting)',
    summary: '让AI帮你优化提示词，迭代提升Prompt质量',
    category: 'prompt',
    tags: ['提示词优化', '迭代', '自动化'],
    difficulty: 'advanced',
    useCases: [
      '优化现有提示词效果',
      '批量生成高质量Prompt',
      '建立提示词模板库',
      '团队协作标准化'
    ],
    template: `请帮我优化以下提示词，使其更加有效：

原始提示词：
"""
[你的原始提示词]
"""

请从以下方面优化：
1. 清晰度：是否明确表达了需求？
2. 完整性：是否遗漏了重要信息？
3. 结构化：是否有更好的组织方式？
4. 示例：是否需要添加示例？

请输出优化后的提示词，并说明改进点。`,
    tips: [
      '先写一版提示词，再让AI优化',
      '可以要求AI解释每个改进的原因',
      '保存优化后的提示词作为模板',
      '多次迭代，逐步逼近最优版本'
    ],
    relatedTools: [
      { name: 'Claude', url: 'https://claude.ai' },
      { name: 'ChatGPT', url: 'https://chat.openai.com' }
    ]
  },

  // ========== AI绘画方法 ==========
  {
    id: 'art-midjourney',
    title: 'Midjourney提示词公式',
    summary: '掌握Midjourney的提示词结构，生成高质量AI艺术作品',
    category: 'art',
    tags: ['Midjourney', '图像生成', '艺术创作'],
    difficulty: 'intermediate',
    useCases: [
      '生成专业级AI艺术作品',
      '创建品牌视觉素材',
      '概念设计和原型制作',
      '社交媒体内容创作'
    ],
    template: `[主体描述], [细节描述], [环境/背景], [艺术风格], [光照/氛围], [视角/构图], [质量参数]

示例：
A serene Japanese garden in spring, cherry blossoms falling, traditional wooden bridge over koi pond, Studio Ghibli style, soft morning light, wide angle shot, highly detailed, 8k --ar 16:9 --v 6`,
    tips: [
      '主体在前，细节在后，越重要的放前面',
      '使用艺术风格关键词（如"oil painting", "anime style"）',
      '添加质量词：highly detailed, 8k, masterpiece',
      '善用参数：--ar控制比例，--v选择版本，--s控制风格化'
    ],
    relatedTools: [
      { name: 'Midjourney', url: 'https://www.midjourney.com' },
      { name: 'LiblibAI', url: 'https://www.liblib.art' }
    ],
    isHot: true
  },
  {
    id: 'art-sd-prompt',
    title: 'Stable Diffusion提示词优化',
    summary: 'SD提示词权重和语法技巧，精准控制图像生成',
    category: 'art',
    tags: ['Stable Diffusion', '权重控制', '精准生成'],
    difficulty: 'advanced',
    useCases: [
      '本地部署SD的精准控制',
      '商业级图像生成',
      '角色一致性控制',
      '复杂场景构建'
    ],
    template: `正向提示词：
(masterpiece, best quality:1.2), [主体], [细节], [风格], [光照], [构图]

反向提示词：
(worst quality, low quality:1.4), [不想要的内容], [负面标签]

示例：
正向：(masterpiece, best quality:1.2), 1girl, long hair, flowing dress, standing in flower field, sunset lighting, soft colors, detailed face, beautiful eyes
反向：(worst quality, low quality:1.4), blurry, deformed, bad anatomy`,
    tips: [
      '使用(weight)语法控制权重，如(flower:1.3)增强花的效果',
      '正向提示词按重要性排序，越重要越靠前',
      '反向提示词列出所有不想要的内容',
      '使用[tag1|tag2]实现随机选择，增加多样性'
    ],
    relatedTools: [
      { name: 'Stable Diffusion', url: 'https://stability.ai' },
      { name: 'LiblibAI', url: 'https://www.liblib.art' }
    ]
  },
  {
    id: 'art-controlnet',
    title: 'ControlNet姿势与构图控制',
    summary: '使用ControlNet精确控制人物姿势和画面构图',
    category: 'art',
    tags: ['ControlNet', '姿势控制', '构图'],
    difficulty: 'advanced',
    useCases: [
      '保持角色姿势一致性',
      '根据参考图生成新图',
      '线稿上色',
      '深度图生成场景'
    ],
    template: `ControlNet使用流程：

1. 选择预处理器和模型：
   - OpenPose：姿势控制
   - Canny：边缘检测
   - Depth：深度图
   - Lineart：线稿

2. 上传参考图

3. 调整控制强度（0.5-1.0）

4. 编写提示词描述想要的内容

5. 生成并调整`,
    tips: [
      'OpenPose适合人物姿势，Canny适合轮廓',
      '控制强度过高会限制创意，过低失去控制',
      '可以叠加多个ControlNet',
      '预处理器选择要与模型匹配'
    ],
    relatedTools: [
      { name: 'Stable Diffusion', url: 'https://stability.ai' },
      { name: 'LiblibAI', url: 'https://www.liblib.art' }
    ]
  },
  {
    id: 'art-lora',
    title: 'LoRA模型应用技巧',
    summary: '使用LoRA模型实现特定风格或角色的精准控制',
    category: 'art',
    tags: ['LoRA', '风格迁移', '角色控制'],
    difficulty: 'intermediate',
    useCases: [
      '特定艺术风格模仿',
      '保持角色形象一致性',
      '服装和道具定制',
      '概念艺术家个人风格'
    ],
    template: `LoRA使用格式：
<lora:模型名:权重>

示例：
(masterpiece, best quality), 1girl, <lora:chinese_style_v1:0.8>, wearing traditional hanfu, ink painting style

多LoRA组合：
<lora:character_v1:0.6>, <lora:lighting_v2:0.4>, [其他描述]`,
    tips: [
      '权重通常在0.5-1.0之间，太高会过拟合',
      '触发词要写在LoRA标签后面',
      '不同LoRA可以组合使用，但注意兼容性',
      '下载LoRA时注意基础模型要求'
    ],
    relatedTools: [
      { name: 'Civitai', url: 'https://civitai.com' },
      { name: 'LiblibAI', url: 'https://www.liblib.art' }
    ]
  },

  // ========== AI编程技巧 ==========
  {
    id: 'code-context',
    title: '代码上下文管理',
    summary: '高效向AI提供代码上下文，获得更准确的编程帮助',
    category: 'coding',
    tags: ['代码分析', '上下文', '调试'],
    difficulty: 'intermediate',
    useCases: [
      '调试复杂bug',
      '代码重构建议',
      '理解陌生代码库',
      '代码审查'
    ],
    template: `请帮我分析/修复以下代码：

文件：filename.js
功能：[这段代码的作用]
问题：[遇到的具体问题]

\`\`\`[语言]
[代码内容]
\`\`\`

相关上下文：
- [依赖1]：[说明]
- [依赖2]：[说明]

期望结果：[你想要什么]
实际结果：[现在发生了什么]`,
    tips: [
      '只提供相关代码片段，避免一次性粘贴太多',
      '说明代码的功能和当前问题',
      '提供错误信息和堆栈跟踪',
      '告知使用的框架版本和依赖'
    ],
    relatedTools: [
      { name: 'Claude Code', url: 'https://claude.ai/code' },
      { name: 'Cursor', url: 'https://cursor.sh' },
      { name: 'GitHub Copilot', url: 'https://github.com/features/copilot' }
    ],
    isHot: true
  },
  {
    id: 'code-review',
    title: 'AI代码审查清单',
    summary: '使用系统化提示词让AI进行全面的代码审查',
    category: 'coding',
    tags: ['代码审查', '质量', '最佳实践'],
    difficulty: 'intermediate',
    useCases: [
      '提交代码前的自我审查',
      '学习代码最佳实践',
      '发现潜在bug',
      '性能优化建议'
    ],
    template: `请对以下代码进行全面审查，从以下维度分析：

代码：
\`\`\`[语言]
[代码]
\`\`\`

审查维度：
1. **正确性**：是否有逻辑错误或边界情况未处理？
2. **性能**：是否有优化空间？时间/空间复杂度如何？
3. **可读性**：命名是否清晰？结构是否合理？
4. **安全性**：是否有注入、越界等风险？
5. **可维护性**：是否易于扩展和修改？
6. **最佳实践**：是否符合语言/框架的惯用法？

请按严重程度排序问题，并给出具体改进建议。`,
    tips: [
      '指定审查维度，避免AI遗漏重要方面',
      '要求按严重程度排序，优先处理关键问题',
      '让AI给出具体的改进代码示例',
      '可以针对特定方面深入（如只关注安全性）'
    ],
    relatedTools: [
      { name: 'Claude Code', url: 'https://claude.ai/code' },
      { name: 'Cursor', url: 'https://cursor.sh' }
    ]
  },
  {
    id: 'code-generate',
    title: '结构化代码生成',
    summary: '通过详细需求描述让AI生成高质量、可维护的代码',
    category: 'coding',
    tags: ['代码生成', '需求描述', '架构'],
    difficulty: 'intermediate',
    useCases: [
      '快速原型开发',
      '生成脚手架代码',
      '学习新技术实现',
      '自动化脚本编写'
    ],
    template: `请帮我实现以下功能：

功能描述：
[详细描述需要实现什么]

技术要求：
- 语言/框架：[如React, Python, Go]
- 版本要求：[如Node.js 18+]
- 依赖限制：[如不使用外部库]

代码规范：
- [规范1，如使用TypeScript]
- [规范2，如函数式编程]
- [规范3，如添加错误处理]

边界情况：
- [情况1]
- [情况2]

请提供完整可运行的代码，并添加必要的注释。`,
    tips: [
      '需求描述要具体，避免模糊的"实现一个功能"',
      '明确技术栈和版本要求',
      '列出边界情况和错误处理要求',
      '要求添加注释和文档字符串'
    ],
    relatedTools: [
      { name: 'v0.dev', url: 'https://v0.dev' },
      { name: 'Bolt.new', url: 'https://bolt.new' },
      { name: 'Cursor', url: 'https://cursor.sh' }
    ],
    isHot: true
  },
  {
    id: 'code-explain',
    title: '代码解释与教学',
    summary: '让AI以教学的方式解释代码，适合学习和知识传递',
    category: 'coding',
    tags: ['代码解释', '学习', '教学'],
    difficulty: 'beginner',
    useCases: [
      '理解复杂算法',
      '学习新语言特性',
      '团队知识分享',
      '面试准备'
    ],
    template: `请解释以下代码，假设我是一个[初学者/中级开发者]：

\`\`\`[语言]
[代码]
\`\`\`

请按以下结构解释：
1. **整体功能**：这段代码做什么？
2. **逐行解析**：关键代码的作用
3. **核心概念**：涉及的重要概念（如闭包、递归）
4. **执行流程**：数据如何流动？
5. **实际应用**：在什么场景下使用？
6. **常见问题**：容易出错的地方

请用通俗易懂的语言，必要时使用类比。`,
    tips: [
      '指定目标受众水平，调整解释深度',
      '要求使用类比帮助理解抽象概念',
      '可以要求绘制执行流程图（用ASCII或文字描述）',
      '要求提供类似功能的对比实现'
    ],
    relatedTools: [
      { name: 'ChatGPT', url: 'https://chat.openai.com' },
      { name: 'Claude', url: 'https://claude.ai' },
      { name: 'Devv', url: 'https://devv.ai' }
    ]
  },

  // ========== AI办公效率 ==========
  {
    id: 'office-meeting',
    title: '会议纪要与行动项提取',
    summary: '自动整理会议记录，提取关键决策和行动项',
    category: 'office',
    tags: ['会议纪要', '效率', '协作'],
    difficulty: 'beginner',
    useCases: [
      '快速整理会议录音/速记',
      '提取关键决策和待办',
      '生成会议摘要发送团队',
      '追踪行动项完成情况'
    ],
    template: `请将以下会议内容整理成结构化纪要：

会议内容：
"""
[会议录音转录或速记内容]
"""

请输出：
1. **会议概要**（3-5句话）
2. **关键决策**（已决定的事项）
3. **讨论要点**（重要但未决定的内容）
4. **行动项**（格式：任务 | 负责人 | 截止日期 | 优先级）
5. **下次会议议题**（如有提及）

行动项请用表格呈现，高优先级标注🔴，中优先级🟡，低优先级🟢。`,
    tips: [
      '录音转录可以用Whisper等工具先处理',
      '要求AI识别发言人（如果转录中有标识）',
      '可以要求提取时间戳对应的关键内容',
      '定期用AI检查行动项完成情况'
    ],
    relatedTools: [
      { name: 'Notion AI', url: 'https://www.notion.so/product/ai' },
      { name: '飞书妙记', url: 'https://www.feishu.cn' },
      { name: '通义听悟', url: 'https://tingwu.aliyun.com' }
    ],
    isHot: true
  },
  {
    id: 'office-email',
    title: '邮件撰写与优化',
    summary: '快速撰写专业邮件，优化表达和语气',
    category: 'office',
    tags: ['邮件', '沟通', '商务写作'],
    difficulty: 'beginner',
    useCases: [
      '撰写商务邮件',
      '优化邮件语气',
      '多语言翻译',
      '邮件模板生成'
    ],
    template: `请帮我撰写/优化以下邮件：

场景：[如向客户道歉、项目汇报、请求支持]
收件人：[上级/客户/同事]
语气：[正式/友好/紧急]

关键信息：
- [要点1]
- [要点2]
- [要点3]

[如果是优化：粘贴现有邮件内容]

要求：
- 主题行简洁有力
- 正文结构清晰
- 结尾有明确的CTA（行动号召）
- 整体语气[正式/友好/紧迫]`,
    tips: [
      '明确收件人身份和关系，调整语气',
      '要求提供3个主题行选项',
      '可以要求生成英文版本（如果是国际团队）',
      '敏感邮件要求AI检查是否有冒犯之处'
    ],
    relatedTools: [
      { name: 'Notion AI', url: 'https://www.notion.so/product/ai' },
      { name: 'Grammarly', url: 'https://www.grammarly.com' },
      { name: 'ChatGPT', url: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'office-doc',
    title: '文档结构化生成',
    summary: '快速生成结构化的技术文档、需求文档或报告',
    category: 'office',
    tags: ['文档', '写作', '结构化'],
    difficulty: 'intermediate',
    useCases: [
      '编写PRD需求文档',
      '技术方案文档',
      '项目报告',
      '操作手册'
    ],
    template: `请帮我生成一份[文档类型]：

主题：[文档主题]
受众：[目标读者]
目的：[文档要达成的目标]

必须包含的章节：
1. [章节1]
2. [章节2]
3. [章节3]

关键信息：
- [信息1]
- [信息2]

格式要求：
- 使用Markdown格式
- 包含目录
- 重要内容用表格呈现
- 添加适当的示例`,
    tips: [
      '指定文档类型（PRD、技术方案、报告等）',
      '明确受众，调整专业术语密度',
      '要求生成大纲先确认，再生成全文',
      '可以要求添加可视化建议（图表类型）'
    ],
    relatedTools: [
      { name: 'Notion AI', url: 'https://www.notion.so/product/ai' },
      { name: 'Gamma', url: 'https://gamma.app' },
      { name: 'Claude', url: 'https://claude.ai' }
    ]
  },
  {
    id: 'office-data',
    title: '数据分析与可视化建议',
    summary: '分析数据并生成洞察，提供可视化建议',
    category: 'office',
    tags: ['数据分析', '可视化', '报告'],
    difficulty: 'intermediate',
    useCases: [
      '分析Excel/CSV数据',
      '生成数据洞察报告',
      '选择合适的图表类型',
      '编写数据分析结论'
    ],
    template: `请分析以下数据并提供洞察：

数据描述：[数据来源和含义]

数据：
\`\`\`
[CSV格式数据或数据摘要]
\`\`\`

分析维度：
1. 整体趋势和关键指标
2. 异常值和异常原因
3. 分组对比分析
4. 相关性分析（如有多个指标）

请提供：
- 关键发现（3-5条）
- 可视化建议（用什么图表展示）
- 行动建议（基于数据的决策建议）`,
    tips: [
      '数据量大时先提供样本和统计摘要',
      '明确分析维度和关注的指标',
      '要求解释数据背后的业务含义',
      '可以要求生成Python/R代码进行深度分析'
    ],
    relatedTools: [
      { name: 'ChatGPT', url: 'https://chat.openai.com' },
      { name: 'Claude', url: 'https://claude.ai' },
      { name: 'Excel', url: 'https://excel.cloud.microsoft' }
    ]
  },

  // ========== AI学习提升 ==========
  {
    id: 'learn-summary',
    title: '文章/视频内容总结',
    summary: '快速提取长文或视频的核心内容，生成结构化笔记',
    category: 'learning',
    tags: ['总结', '笔记', '学习'],
    difficulty: 'beginner',
    useCases: [
      '快速了解长文核心观点',
      '整理学习笔记',
      '准备分享和讨论',
      '建立知识库'
    ],
    template: `请总结以下内容，生成结构化笔记：

内容：
"""
[粘贴文章内容或视频转录]
"""

请按以下格式输出：
1. **一句话总结**（核心观点）
2. **关键要点**（3-5条，带要点解释）
3. **重要概念**（文中提到的专业术语及解释）
4. **可行动建议**（读者可以做什么）
5. **延伸思考**（3个相关问题或思考方向）
6. **相关资源**（文中提到的书籍、工具、链接）`,
    tips: [
      '长文可以分段输入，要求AI保持上下文',
      '可以指定总结风格（学术/通俗/商业）',
      '要求生成思维导图结构（Markdown列表）',
      '保存到笔记软件建立个人知识库'
    ],
    relatedTools: [
      { name: 'Kimi', url: 'https://kimi.moonshot.cn' },
      { name: '豆包', url: 'https://www.doubao.com' },
      { name: '沉浸式翻译', url: 'https://immersivetranslate.com' }
    ],
    isHot: true
  },
  {
    id: 'learn-plan',
    title: '个性化学习计划制定',
    summary: '根据目标和时间制定AI辅助的个性化学习计划',
    category: 'learning',
    tags: ['学习计划', '目标管理', '效率'],
    difficulty: 'beginner',
    useCases: [
      '学习新技能（编程、语言等）',
      '备考准备',
      '职业转型学习',
      '系统性知识构建'
    ],
    template: `请帮我制定学习计划：

学习目标：[具体要学什么，达到什么水平]
当前水平：[零基础/有基础/进阶]
可用时间：[每天X小时，持续Y周]
资源偏好：[视频/书籍/项目实践]

请提供：
1. **学习路线图**（分阶段，每阶段目标）
2. **每周计划**（具体学习内容和时间分配）
3. **推荐资源**（书籍、课程、工具，带优先级）
4. **实践项目**（巩固知识的练习）
5. **检验方式**（如何确认掌握了）
6. **调整建议**（遇到困难时的备选方案）`,
    tips: [
      '目标要具体可衡量（如"3个月掌握Python基础"）',
      '告知可用时间和偏好，获得可行计划',
      '要求包含复习和巩固的时间',
      '定期回顾计划，用AI调整进度'
    ],
    relatedTools: [
      { name: 'ChatGPT', url: 'https://chat.openai.com' },
      { name: 'Claude', url: 'https://claude.ai' },
      { name: 'Notion', url: 'https://www.notion.so' }
    ]
  },
  {
    id: 'learn-qa',
    title: '苏格拉底式问答学习',
    summary: '通过AI提问引导深度思考，而非直接给答案',
    category: 'learning',
    tags: ['深度学习', '思考', '问答'],
    difficulty: 'intermediate',
    useCases: [
      '深入理解复杂概念',
      '培养批判性思维',
      '面试准备',
      '教学他人前的准备'
    ],
    template: `我想深入学习[主题]，请使用苏格拉底式提问法帮助我：

规则：
1. 不要直接给我答案
2. 通过提问引导我思考
3. 根据我的回答继续深入提问
4. 当我卡住时，给出提示而非答案
5. 最后总结我理解的要点

请从基础概念开始提问。`,
    tips: [
      '明确告知AI不要直接给答案',
      '积极回应AI的问题，保持对话',
      '不懂就问"为什么"或"能举个例子吗"',
      '适合理解原理性知识（算法、哲学、科学）'
    ],
    relatedTools: [
      { name: 'Claude', url: 'https://claude.ai' },
      { name: 'ChatGPT', url: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'learn-flashcard',
    title: 'AI生成记忆卡片',
    summary: '将学习内容转化为Anki/Quizlet格式的记忆卡片',
    category: 'learning',
    tags: ['记忆', '卡片', '复习'],
    difficulty: 'beginner',
    useCases: [
      '记忆术语和定义',
      '语言学习',
      '考试复习',
      '知识点巩固'
    ],
    template: `请将以下内容转化为记忆卡片（Anki格式）：

学习内容：
"""
[学习材料]
"""

要求：
- 正面：问题或概念
- 背面：简洁答案，包含例子
- 每张卡片只测试一个知识点
- 使用Markdown表格格式输出

格式示例：
| 正面 | 背面 |
|------|------|
| 什么是[概念]？ | [定义]<br>例：[例子] |`,
    tips: [
      '要求遵循"最小信息原则"，卡片简洁',
      '包含具体例子帮助理解',
      '可以要求生成不同类型的卡片（概念/应用/对比）',
      '导出为CSV直接导入Anki'
    ],
    relatedTools: [
      { name: 'Anki', url: 'https://apps.ankiweb.net' },
      { name: 'Quizlet', url: 'https://quizlet.com' },
      { name: 'ChatGPT', url: 'https://chat.openai.com' }
    ]
  },

  // ========== 对话技巧 ==========
  {
    id: 'chat-context',
    title: '对话上下文管理',
    summary: '在多轮对话中保持上下文连贯，获得更好的AI协作体验',
    category: 'chat',
    tags: ['上下文', '多轮对话', '协作'],
    difficulty: 'beginner',
    useCases: [
      '长项目协作',
      '复杂问题分步解决',
      '保持角色设定',
      '避免重复背景说明'
    ],
    template: `这是一个持续的项目对话，请记住以下上下文：

项目背景：
[项目描述]

当前阶段：[阶段]
已完成：[已完成的内容]
待解决：[待解决的问题]

每次回复请：
1. 简要回顾当前状态
2. 回答本次问题
3. 指出下一步建议

---

[你的新问题]`,
    tips: [
      '长对话定期总结上下文，粘贴给AI',
      '使用"继续"、"基于以上"等词保持连贯',
      '重要信息要求AI确认已理解',
      '复杂项目可以分多个会话，每个聚焦一个主题'
    ],
    relatedTools: [
      { name: 'Claude', url: 'https://claude.ai' },
      { name: 'ChatGPT', url: 'https://chat.openai.com' },
      { name: 'Kimi', url: 'https://kimi.moonshot.cn' }
    ],
    isHot: true
  },
  {
    id: 'chat-feedback',
    title: '迭代反馈优化',
    summary: '通过结构化反馈让AI持续优化输出，逼近理想结果',
    category: 'chat',
    tags: ['反馈', '迭代', '优化'],
    difficulty: 'intermediate',
    useCases: [
      '内容创作打磨',
      '代码重构优化',
      '设计稿迭代',
      '方案细化完善'
    ],
    template: `请基于以下反馈优化：

原输出：
"""
[AI之前的输出]
"""

反馈：
✅ 保持：[做得好的部分]
❌ 修改：[需要改变的部分]
➕ 添加：[新增内容]
➖ 删除：[冗余内容]

其他要求：
[额外说明]

请输出优化后的版本。`,
    tips: [
      '明确指出喜欢和不喜欢的地方',
      '使用"更..."（更简洁、更专业）来指导风格',
      '可以要求AI解释修改的原因',
      '多次迭代，每次聚焦1-2个改进点'
    ],
    relatedTools: [
      { name: 'Claude', url: 'https://claude.ai' },
      { name: 'ChatGPT', url: 'https://chat.openai.com' }
    ]
  },
  {
    id: 'chat-constraint',
    title: '约束条件设定',
    summary: '通过明确的约束条件让AI输出更精准可控',
    category: 'chat',
    tags: ['约束', '控制', '精准'],
    difficulty: 'intermediate',
    useCases: [
      '需要特定格式输出',
      '限制回答长度',
      '排除某些内容',
      '控制输出风格'
    ],
    template: `请回答以下问题，并遵守以下约束：

问题：[你的问题]

约束条件：
- 长度：[如"不超过500字"、"3-5点"]
- 格式：[如"使用表格"、"Markdown列表"]
- 范围：[如"只讨论技术层面"、"限于2023年后"]
- 风格：[如"专业严谨"、"通俗易懂"]
- 排除：[如"不要举例"、"不提及竞品"]

请在回答前先确认你理解了这些约束。`,
    tips: [
      '约束要具体可执行，避免模糊',
      '可以要求AI先复述约束，确认理解',
      '逐步添加约束，观察AI的适应能力',
      '用"必须"、"禁止"等强语气词强调重要约束'
    ],
    relatedTools: [
      { name: 'ChatGPT', url: 'https://chat.openai.com' },
      { name: 'Claude', url: 'https://claude.ai' }
    ]
  },
  {
    id: 'chat-debate',
    title: '多视角辩论法',
    summary: '让AI从不同角度分析问题，获得全面视角',
    category: 'chat',
    tags: ['辩论', '多角度', '决策'],
    difficulty: 'intermediate',
    useCases: [
      '重大决策前的分析',
      '理解争议性话题',
      '准备辩论或谈判',
      '风险评估'
    ],
    template: `请从多个视角分析以下问题：

问题：[待分析的问题/决策]

请从以下角度分别论述：

**支持方观点：**
- 主要论据
- 潜在收益
- 适用场景

**反对方观点：**
- 主要风险
- 潜在问题
- 反对理由

**中立视角：**
- 关键考量因素
- 折中方案
- 决策建议

最后给出你的综合分析和建议。`,
    tips: [
      '明确指定要分析的角度',
      '要求AI公平呈现各方观点',
      '可以指定特定角色（如"从CEO角度"）',
      '最后要求AI给出倾向性建议及理由'
    ],
    relatedTools: [
      { name: 'Claude', url: 'https://claude.ai' },
      { name: 'ChatGPT', url: 'https://chat.openai.com' }
    ]
  }
];
