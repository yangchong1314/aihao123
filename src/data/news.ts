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
    title: '谷歌地图推出 Ask Maps：Gemini 开启对话式导航新时代',
    summary: 'Google Maps 推出重大更新，集成 Gemini AI 模型，新增"Ask Maps"对话式搜索功能。用户可用自然语言提问复杂需求，如"哪家咖啡店有充电口且不用排队"，地图将理解复杂需求并提供个性化推荐。同时推出沉浸式 3D 导航体验，可清晰显示建筑、立交桥和地形细节',
    source: 'Google/AIbase',
    url: 'https://www.aibase.com/news/26182',
    date: '2026-03-13',
    category: 'product',
    isHot: true,
  },
  {
    id: '2',
    title: 'Anthropic 斥资 1 亿美元启动 Claude 合作伙伴网络',
    summary: 'Anthropic 宣布启动 Claude Partners Network 合作伙伴网络，投入 1 亿美元初始资金，支持服务商帮助企业客户完成从"想法到落地"的全流程。Claude 是目前唯一同时在 AWS、Google Cloud 和 Microsoft Azure 三大云平台上可直接使用的顶尖大模型',
    source: 'Anthropic/AIbase',
    url: 'https://www.aibase.com/news/26181',
    date: '2026-03-13',
    category: 'company',
    isHot: true,
  },
  {
    id: '3',
    title: 'NVIDIA 发布开源大模型 Nemotron 3 Super：性能直逼 GPT-5.4',
    summary: 'NVIDIA 发布专为 AI Agent 设计的开源大模型 Nemotron 3 Super，采用创新的 Mamba-MoE 混合架构，总参数 1200 亿但仅激活 120 亿，推理速度提升 300%，吞吐量提升 5 倍。在 OpenClaw 任务中成功率达 85.6%，性能接近 Claude Opus 4.6 和 GPT-5.4',
    source: 'NVIDIA/AIbase',
    url: 'https://www.aibase.com/news/26171',
    date: '2026-03-12',
    category: 'model',
    isHot: true,
  },
  {
    id: '4',
    title: 'Meta 发布新一代 AI 芯片 MTIA3：性能直指英伟达 H100',
    summary: 'Meta 正式发布自研 AI 芯片 MTIA3，专为推荐系统和推理任务深度定制。在内部测试中，该芯片在特定工作负载下的推理效率已超过 NVIDIA H100。Meta 计划在未来一年内将大部分推理任务迁移至自研平台，减少对英伟达的依赖',
    source: 'Meta/AIbase',
    url: 'https://www.aibase.com/news/26167',
    date: '2026-03-12',
    category: 'company',
  },
  {
    id: '5',
    title: 'Adobe 2026 财年 Q1 营收 64 亿美元创新高，CEO 宣布离任',
    summary: 'Adobe 公布 2026 财年第一季度财报，营收达 64 亿美元创历史新高，同比增长 12%，主要得益于生成式 AI 技术在产品中的深度集成和商业化。AI 相关的年度经常性收入同比增长超过两倍。同时，任职 18 年的 CEO Shantanu Narayen 宣布将在确定继任者后卸任',
    source: 'Adobe/AIbase',
    url: 'https://www.aibase.com/news/26180',
    date: '2026-03-13',
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
