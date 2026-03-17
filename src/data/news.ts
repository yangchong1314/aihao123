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
    title: 'Grok 上线语音 API：马斯克的 AI "嘴替" 来了',
    summary: 'xAI 正式发布 Grok 大模型的文本转语音 API，开发者可以将 Grok 独特的"幽默讽刺"语调集成到应用中。这标志着 Grok 从纯文本交互向多模态语音交互的重大升级，AI 语音替代战再次升级。',
    source: 'xAI/AIbase',
    url: 'https://www.aibase.com/news/26265',
    date: '2026-03-17',
    category: 'product',
    isHot: true,
  },
  {
    id: '2',
    title: '阿里通义开源首个影视级配音大模型 Fun-CineForge',
    summary: '阿里通义实验室发布并开源 Fun-CineForge，这是全球首个面向影视级多场景配音的多模态大模型。它解决了 AI 配音中的口型同步、情感表达、多角色声音一致性等核心痛点，首次引入"时间模态"概念，实现毫秒级精准时间控制。',
    source: '阿里通义/AIbase',
    url: 'https://www.aibase.com/news/26259',
    date: '2026-03-17',
    category: 'model',
    isHot: true,
  },
  {
    id: '3',
    title: 'OpenAI 计划将 Sora 接入 ChatGPT：迪士尼角色或成付费杀手锏',
    summary: 'OpenAI 计划将视频生成模型 Sora 直接集成到 ChatGPT 中，借助 ChatGPT 庞大的活跃用户群为 Sora 注入新活力。更激动人心的是，用户可能很快可以使用迪士尼授权的经典角色进行二次创作。',
    source: 'OpenAI/AIbase',
    url: 'https://www.aibase.com/news/26263',
    date: '2026-03-17',
    category: 'product',
    isHot: true,
  },
  {
    id: '4',
    title: '地瓜机器人完成 1.2 亿美元 B1 轮融资',
    summary: '地瓜机器人宣布完成 1.2 亿美元 B1 轮融资，由星界资本、滴滴、美团龙珠领投。公司累计融资已达 2.2 亿美元，致力于打造机器人时代的"英伟达"，提供从芯片到算法的全栈式具身智能计算方案。',
    source: '地瓜机器人/AIbase',
    url: 'https://www.aibase.com/news/26258',
    date: '2026-03-17',
    category: 'company',
  },
  {
    id: '5',
    title: '清华重磅开源 OpenMAIC：打造 AI 多智能体虚拟课堂',
    summary: '清华大学研究团队正式开源 OpenMAIC，这是一个由大语言模型驱动的多智能体交互课堂平台。它可以将任何主题或文档一键转化为完整的沉浸式学习体验，标志着在线教育从"看视频"时代进入"与 AI 共学"新时代。',
    source: '清华大学/AIbase',
    url: 'https://www.aibase.com/news/26249',
    date: '2026-03-17',
    category: 'product',
  },
];

export const newsCategories = [
  { id: 'all', name: '全部', color: 'gray' },
  { id: 'product', name: '产品发布', color: 'blue' },
  { id: 'model', name: '模型更新', color: 'purple' },
  { id: 'company', name: '公司动态', color: 'green' },
  { id: 'trend', name: '行业趋势', color: 'orange' },
];
