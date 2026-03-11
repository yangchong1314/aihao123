export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  date: string;
  category: 'product' | 'model' | 'company' | 'trend';
  isHot?: boolean;
}

export const news: NewsItem[] = [
  {
    id: '1',
    title: 'Anthropic发布Claude Sonnet 4.6，编码能力大幅提升',
    summary: 'Claude Sonnet 4.6在编码、计算机使用、长上下文推理和智能体规划等方面全面升级，支持100万token上下文窗口，在OSWorld基准测试中表现优异',
    source: 'Anthropic',
    url: 'https://www.anthropic.com/news/claude-sonnet-4-6',
    date: '2026-03-11',
    category: 'model',
    isHot: true,
  },
  {
    id: '2',
    title: 'OpenAI收购Promptfoo，强化AI安全测试能力',
    summary: 'OpenAI宣布将收购AI安全平台Promptfoo，该平台被超过25%的财富500强企业使用，将整合到OpenAI Frontier平台中，帮助企业识别和修复AI系统漏洞',
    source: 'OpenAI',
    url: 'https://openai.com/index/openai-to-acquire-promptfoo/',
    date: '2026-03-10',
    category: 'company',
    isHot: true,
  },
  {
    id: '3',
    title: 'Thinking Machines Lab与NVIDIA达成千兆瓦级战略合作',
    summary: 'Mira Murati创立的Thinking Machines Lab与NVIDIA宣布多年战略合作，将部署至少1千兆瓦的NVIDIA Vera Rubin系统，用于前沿模型训练和可定制AI平台',
    source: 'Thinking Machines Lab',
    url: 'https://thinkingmachines.ai/news/nvidia-partnership/',
    date: '2026-03-10',
    category: 'company',
    isHot: true,
  },
  {
    id: '4',
    title: 'Yann LeCun新公司AMI融资10亿美元，专注AI世界模型',
    summary: 'AI教父Yann LeCun离开Meta后创立Advance Machine Intelligence公司，成功融资10亿美元用于构建能理解物理世界的AI世界模型',
    source: 'AMI',
    url: 'https://www.wired.com/tag/artificial-intelligence/',
    date: '2026-03-10',
    category: 'company',
  },
  {
    id: '5',
    title: 'Amazon加强AI编码监管，要求高级工程师审核AI辅助代码',
    summary: 'Amazon电商高级副总裁Dave Treadwell召开全员会议，宣布初级和中级工程师的AI辅助代码变更需经高级工程师签字批准，以应对近期AWS outages事件',
    source: 'Amazon',
    url: 'https://www.theverge.com/ai-artificial-intelligence',
    date: '2026-03-10',
    category: 'trend',
  },
  {
    id: '6',
    title: 'Anthropic推出Claude Code Review功能，自动检测代码漏洞',
    summary: 'Anthropic发布Claude Code Review多智能体工具，可并行运行检测代码中的漏洞，提供高级概览和逐行注释，已面向企业版和团队版用户开放研究预览',
    source: 'Anthropic',
    url: 'https://www.theverge.com/ai-artificial-intelligence',
    date: '2026-03-09',
    category: 'product',
  },
  {
    id: '7',
    title: 'Microsoft将Claude Cowork集成到Copilot中',
    summary: 'Microsoft与Anthropic紧密合作，将Claude Cowork功能引入Copilot，帮助执行长期、多步骤任务，本月晚些时候通过Frontier计划提供预览',
    source: 'Microsoft',
    url: 'https://www.theverge.com/ai-artificial-intelligence',
    date: '2026-03-09',
    category: 'product',
  },
  {
    id: '8',
    title: 'Google与Tesla合作优化电网效率',
    summary: 'Google和Tesla加入Utilize倡议，通过电池储能和虚拟电厂等策略提高电网效率，应对数据中心导致的电费上涨问题',
    source: 'Google',
    url: 'https://www.theverge.com/ai-artificial-intelligence',
    date: '2026-03-10',
    category: 'trend',
  },
];

export const newsCategories = [
  { id: 'all', name: '全部', color: 'gray' },
  { id: 'product', name: '产品发布', color: 'blue' },
  { id: 'model', name: '模型更新', color: 'purple' },
  { id: 'company', name: '公司动态', color: 'green' },
  { id: 'trend', name: '行业趋势', color: 'orange' },
];
