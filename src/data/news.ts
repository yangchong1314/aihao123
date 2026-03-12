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
    title: '英伟达豪掷260亿美元进军开源大模型，正面挑战OpenAI与DeepSeek',
    summary: 'NVIDIA宣布未来五年投资260亿美元开发开源AI大模型，预训练了5500亿参数的超大规模模型，预计2026年底发布首批具有行业主导力的开源大模型，从纯硬件供应商转型为AI实验室',
    source: 'Wired/AIbase',
    url: 'https://www.aibase.com/news/26138',
    date: '2026-03-12',
    category: 'company',
    isHot: true,
  },
  {
    id: '2',
    title: '谷歌Gemini侧边栏推向全球，印度加拿大用户率先体验',
    summary: 'Google宣布将Gemini与Chrome浏览器侧边栏功能扩展至印度、加拿大和新西兰等地区，支持屏幕感知、跨应用集成、智能对比等核心功能，新增包括印地语在内的多语言支持',
    source: 'Google/AIbase',
    url: 'https://www.aibase.com/news/26140',
    date: '2026-03-12',
    category: 'product',
    isHot: true,
  },
  {
    id: '3',
    title: '谷歌发布Gemini Embedding2：原生多模态嵌入模型',
    summary: 'Google发布Gemini Embedding2，将文本、图像、视频、音频和PDF文档映射到统一语义向量空间，支持8192文本token、120秒视频、原生音频处理，在文本-视频检索任务中得分68.8',
    source: 'Google',
    url: 'https://www.aibase.com/news/26139',
    date: '2026-03-12',
    category: 'model',
    isHot: true,
  },
  {
    id: '4',
    title: 'a16z发布全球AI应用百强榜：DeepSeek跻身前四',
    summary: '硅谷风投a16z发布第六版全球生成式AI消费应用百强榜，ChatGPT仍居榜首，DeepSeek排名第四成为最高排名中国应用，豆包月活约3.15亿，CapCut以7.36亿月活位居移动端第二',
    source: 'a16z',
    url: 'https://www.aibase.com/news/26132',
    date: '2026-03-12',
    category: 'trend',
  },
  {
    id: '5',
    title: 'DiT作者谢赛宁发布多人视频世界模型Solaris，种子轮估值超35亿美元',
    summary: '谢赛宁团队推出全球首个多人视频世界模型Solaris，基于Matrix-Game2.0架构引入多人自注意力层，其创立的AMI公司由Yann LeCun联合创办，已完成10.3亿美元种子轮融资',
    source: 'AMI/AIbase',
    url: 'https://www.aibase.com/news/26130',
    date: '2026-03-11',
    category: 'model',
    isHot: true,
  },
  {
    id: '6',
    title: 'Perplexity推出Personal Computer：基于Mac mini的全天候AI智能管家',
    summary: 'AI搜索公司Perplexity发布云端AI代理服务Personal Computer，使用持续运行的Mac mini作为本地枢纽，整合用户本地文件和云端AI能力，可自动分解复杂任务并由子代理执行',
    source: 'Perplexity',
    url: 'https://www.aibase.com/news/26141',
    date: '2026-03-12',
    category: 'product',
  },
  {
    id: '7',
    title: 'Anthropic发布Claude Sonnet 4.6，编码能力大幅提升',
    summary: 'Claude Sonnet 4.6在编码、计算机使用、长上下文推理和智能体规划等方面全面升级，支持100万token上下文窗口，在OSWorld基准测试中表现优异，用户偏好率比Sonnet 4.5高70%',
    source: 'Anthropic',
    url: 'https://www.anthropic.com/news/claude-sonnet-4-6',
    date: '2026-03-11',
    category: 'model',
  },
  {
    id: '8',
    title: 'OpenAI收购Promptfoo，强化AI安全测试能力',
    summary: 'OpenAI宣布将收购AI安全平台Promptfoo，该平台被超过25%的财富500强企业使用，将整合到OpenAI Frontier平台中，帮助企业识别和修复AI系统漏洞',
    source: 'OpenAI',
    url: 'https://openai.com/index/openai-to-acquire-promptfoo/',
    date: '2026-03-10',
    category: 'company',
  },
];

export const newsCategories = [
  { id: 'all', name: '全部', color: 'gray' },
  { id: 'product', name: '产品发布', color: 'blue' },
  { id: 'model', name: '模型更新', color: 'purple' },
  { id: 'company', name: '公司动态', color: 'green' },
  { id: 'trend', name: '行业趋势', color: 'orange' },
];
