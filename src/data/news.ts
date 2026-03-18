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
    title: '英伟达GTC 2025：黄仁勋发布Vera Rubin平台，推理成本降至1/10',
    summary: '英伟达CEO黄仁勋在GTC 2025大会上发布新一代AI加速平台Vera Rubin，采用3nm工艺+HBM4内存，推理Token成本降至Blackwell的十分之一。同时预告2028年Feynman架构，标志着英伟达从"芯片供应商"向"AI基础设施缔造者"的战略转型。',
    source: '英伟达/机器之心',
    url: 'https://baijiahao.baidu.com/s?id=1859916804998434612',
    date: '2026-03-18',
    category: 'product',
    isHot: true,
  },
  {
    id: '2',
    title: '全球首款通用AI智能体Manus发布，开启自主执行时代',
    summary: '中国Monica公司发布全球首款通用AI智能体Manus，通过"大行为模型"(LAM)技术实现从语言理解到自主执行的跨越。可独立完成简历筛选、股票分析、旅行规划等复杂任务，在GAIA基准测试中性能超越OpenAI同类产品20%以上，标志着AI从"思考者"向"行动者"的范式转变。',
    source: 'Monica/量子位',
    url: 'https://baijiahao.baidu.com/s?id=1826272135359369018',
    date: '2026-03-18',
    category: 'product',
    isHot: true,
  },
  {
    id: '3',
    title: 'DeepSeek-R1开源震撼全球，训练成本仅557万美元',
    summary: '中国AI初创公司DeepSeek开源推理大模型R1，在数学和编程基准测试中媲美OpenAI o1，训练成本仅557万美元（约为GPT-4的1/20）。采用MIT开源协议，发布72小时内全球下载量突破50万次，打破国际大模型垄断格局，推动AI从"闭源烧钱"走向"开源普惠"。',
    source: 'DeepSeek/机器之心',
    url: 'https://baijiahao.baidu.com/s?id=1859058266740855407',
    date: '2026-03-18',
    category: 'model',
    isHot: true,
  },
  {
    id: '4',
    title: '字节跳动发布国内首个AI原生IDE Trae',
    summary: '字节跳动正式发布Trae国内版，这是中国首个AI原生集成开发环境。搭载doubao-1.5-pro模型，支持切换满血版DeepSeek R1&V3，提供代码补全、Bug修复、自然语言生成代码等功能。定位为"智能协作AI IDE"，标志着国产AI编程工具进入新纪元。',
    source: '字节跳动/36氪',
    url: 'https://baijiahao.baidu.com/s?id=1859543129496677737',
    date: '2026-03-18',
    category: 'product',
  },
  {
    id: '5',
    title: '宇树科技人形机器人春晚亮相，展现全球领先运动性能',
    summary: '宇树科技Unitree H1人形机器人亮相2025央视春晚，16台机器人身着花袄表演秧歌《秧BOT》，转手绢、飞手绢、变换队形行云流水。这是国产具身智能从实验室走向大众视野的里程碑，部分动作全世界唯有中国机器人能完成，展现了中国在人形机器人领域的全球领先地位。',
    source: '宇树科技/机器之心',
    url: 'https://baijiahao.baidu.com/s?id=1851902307811854526',
    date: '2026-03-18',
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
