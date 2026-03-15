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
    title: 'OpenAI Sora API 重磅更新：支持角色一致性和20秒视频生成',
    summary: 'OpenAI 正式发布 Sora 视频生成 API 重大更新，基于 Sora 2 模型推出五大核心能力升级。最值得关注的是支持角色一致性功能，开发者可预定义"角色档案"确保同一角色在多场景中的视觉连贯性；视频时长从12秒提升至20秒；同时支持横竖屏双格式输出，一次任务可同时生成16:9和9:16两种1080p素材，大幅简化多平台内容分发流程',
    source: 'OpenAI/AIbase',
    url: 'https://www.aibase.com/news/26203',
    date: '2026-03-15',
    category: 'product',
    isHot: true,
  },
  {
    id: '2',
    title: 'Meta 宣布 Llama 4 推迟至5月发布：技术优化仍需完善',
    summary: '据内部消息，Meta 决定将备受期待的 Llama 4 大模型发布时间推迟至今年5月。开发团队在基础模型性能微调和逻辑推理优化方面遇到技术挑战，需要更多时间进行深度安全压力测试。尽管发布计划延后，Meta 仍坚持开源战略，Llama 4 将推出多参数版本以满足从移动设备到企业服务器的不同推理需求',
    source: 'Meta/AIbase',
    url: 'https://www.aibase.com/news/26207',
    date: '2026-03-15',
    category: 'model',
    isHot: true,
  },
  {
    id: '3',
    title: 'Google Gemini 任务自动化功能上线：手机开始"自己做事"',
    summary: 'Google 正式发布 Gemini 任务自动化功能 Beta 版，标志着 AI 助手从"信息查询者"向"数字执行者"转型。该功能可模拟真实用户操作，自动完成跨应用任务，如智能叫车、点餐下单等。用户可实时观看 AI 每一步操作并随时接管，支付前需人工最终确认。该功能目前优先支持外卖和打车应用，Pixel 9 及后续机型用户可率先体验',
    source: 'Google/AIbase',
    url: 'https://www.aibase.com/news/26195',
    date: '2026-03-15',
    category: 'product',
    isHot: true,
  },
  {
    id: '4',
    title: 'Anthropic 成立官方智库：应对 AGI 时代的社会影响',
    summary: 'AI 安全领域先驱 Anthropic 正式宣布成立 Anthropic Institute 智库，专注于研究"强大 AI"可能给人类社会带来的深层挑战和严重风险。该智库将聚焦四大关键领域：就业与经济转型、威胁与防御韧性、AI 价值对齐、自我循环治理系统。Anthropic 希望打破科技巨头内部的封闭性，与外部研究机构、政策制定者和民间社会组织深度合作',
    source: 'Anthropic/AIbase',
    url: 'https://www.aibase.com/news/26198',
    date: '2026-03-15',
    category: 'company',
  },
  {
    id: '5',
    title: '绿联与 MiniMax 达成战略合作：NAS 一键接入大模型',
    summary: '绿联科技宣布与通用人工智能公司 MiniMax 达成深度战略合作，成为 NAS 行业首个原生嵌入 MiniMax 大模型的品牌。用户只需在绿联 UGOS Pro 应用中心一键安装 OpenClaw 龙虾 App，无需复杂配置即可直接使用大模型能力。即日起至4月12日，内置大模型提供30天全免费使用权，支持文档摘要、创意写作、智能问答等功能',
    source: '绿联/MiniMax/AIbase',
    url: 'https://www.aibase.com/news/26211',
    date: '2026-03-15',
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
