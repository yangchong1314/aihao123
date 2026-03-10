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
    title: 'Claude 3.7 Sonnet 发布，支持混合推理模式',
    summary: 'Anthropic 发布 Claude 3.7 Sonnet，支持标准模式和扩展思考模式，在编程和推理任务上表现突出',
    source: 'Anthropic',
    url: 'https://www.anthropic.com/news/claude-3-7-sonnet',
    date: '2026-03-10',
    category: 'model',
    isHot: true,
  },
  {
    id: '2',
    title: 'OpenAI 推出 GPT-4.5，情商大幅提升',
    summary: 'GPT-4.5 在情感理解和对话自然度上有显著改进，更适合创意写作和日常对话',
    source: 'OpenAI',
    url: 'https://openai.com',
    date: '2026-03-09',
    category: 'model',
    isHot: true,
  },
  {
    id: '3',
    title: 'Google Gemini 2.0 Flash 免费开放',
    summary: 'Gemini 2.0 Flash 模型向所有用户免费开放，支持多模态输入',
    source: 'Google',
    url: 'https://gemini.google.com',
    date: '2026-03-08',
    category: 'model',
  },
  {
    id: '4',
    title: '字节跳动发布 Trae 国内版',
    summary: 'Trae AI 编程助手正式推出国内版，针对中文开发者优化，完全免费',
    source: '字节跳动',
    url: 'https://www.trae.ai',
    date: '2026-03-07',
    category: 'product',
    isHot: true,
  },
  {
    id: '5',
    title: 'Midjourney V7 即将发布，支持视频生成',
    summary: 'Midjourney 创始人透露 V7 版本将支持视频生成功能，预计本月内测',
    source: 'Midjourney',
    url: 'https://www.midjourney.com',
    date: '2026-03-06',
    category: 'product',
  },
  {
    id: '6',
    title: 'AI 编程助手市场格局变化',
    summary: 'Cursor、Windsurf、Trae 等 AI 编程工具竞争激烈，开发者选择增多',
    source: '行业观察',
    url: '#',
    date: '2026-03-05',
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
