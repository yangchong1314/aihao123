"use client";

import { useState } from "react";
import MobileNav from "@/components/MobileNav";

// 应用场景数据
const useCases = [
  {
    id: "personal",
    title: "个人效率助手",
    icon: "👤",
    features: ["自动整理会议纪要", "定时提醒与任务管理", "智能搜索与信息汇总"],
    example: "每天自动整理日程，提醒你重要事项",
  },
  {
    id: "developer",
    title: "开发者神器",
    icon: "💻",
    features: ["代码审查与优化建议", "自动化测试与部署", "技术文档智能生成"],
    example: "自动检查代码规范，生成API文档",
  },
  {
    id: "enterprise",
    title: "企业智能客服",
    icon: "🏢",
    features: ["7×24小时自动回复", "多轮对话与意图识别", "无缝转接人工客服"],
    example: "自动处理80%常见问题，复杂问题转人工",
  },
  {
    id: "content",
    title: "内容创作伙伴",
    icon: "✍️",
    features: ["小红书/知乎文案生成", "多平台内容一键分发", "热点追踪与选题建议"],
    example: "自动生成爆款标题，多平台同步发布",
  },
];

// 热门Skills数据
const hotSkills = [
  { name: "browser", description: "浏览器自动化，让AI帮你操作网页", command: "npx openclaw skills add browser -g", icon: "🌐" },
  { name: "feishu-doc", description: "飞书文档操作，智能管理企业文档", command: "npx openclaw skills add feishu-doc -g", icon: "📄" },
  { name: "weather", description: "天气查询，获取实时天气和预报", command: "npx openclaw skills add weather -g", icon: "🌤️" },
  { name: "pdf", description: "PDF处理工具包，阅读、编辑、转换", command: "npx openclaw skills add pdf -g", icon: "📑" },
  { name: "search", description: "智能网络搜索，获取最新信息", command: "npx openclaw skills add search -g", icon: "🔍" },
  { name: "tts", description: "语音合成，让AI开口说话", command: "npx openclaw skills add tts -g", icon: "🔊" },
];

// 快速开始步骤
const quickStartSteps = [
  { step: 1, title: "安装 OpenClaw CLI", description: "全局安装 OpenClaw 命令行工具", code: "npm install -g @openclaw/cli" },
  { step: 2, title: "初始化项目", description: "创建一个新的 OpenClaw 项目", code: "openclaw init my-agent" },
  { step: 3, title: "启动 Agent", description: "运行你的第一个 AI Agent", code: "cd my-agent && openclaw start" },
];

// 社区资源
const communityResources = [
  { title: "官方文档", url: "https://docs.openclaw.ai", icon: "📚", description: "完整的API文档和使用指南" },
  { title: "GitHub", url: "https://github.com/openclaw", icon: "🐙", description: "开源代码，欢迎贡献" },
  { title: "Discord", url: "https://discord.gg/openclaw", icon: "💬", description: "加入社区，与开发者交流" },
];

// 精选教程
const tutorials = [
  { title: "5分钟搭建微信机器人", url: "#", level: "入门" },
  { title: "Skills 开发实战指南", url: "#", level: "进阶" },
  { title: "多平台部署最佳实践", url: "#", level: "高级" },
  { title: "企业级客服系统搭建", url: "#", level: "高级" },
];

export default function OpenClawPage() {
  const [activeTab, setActiveTab] = useState("personal");
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(name);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const copyStepCode = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeCase = useCases.find((c) => c.id === activeTab) || useCases[0];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors">
            <span className="text-2xl">🤖</span>
            <span className="text-xl font-bold">AI好工具</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900 transition-colors">首页</a>
            <a href="/openclaw" className="text-purple-600 font-medium">OpenClaw</a>
            <a href="/skills" className="hover:text-gray-900 transition-colors">Skills</a>
            <a href="/mcp" className="hover:text-gray-900 transition-colors">MCP</a>
            <a href="/submit" className="hover:text-gray-900 transition-colors">推荐</a>
          </nav>
          <MobileNav />
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6 backdrop-blur-sm">
              <span>🦾</span>
              <span>开源 AI Agent 框架</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              用 OpenClaw<br />打造你的专属 AI 助手
            </h1>
            <p className="text-xl text-purple-100 mb-8">零代码部署 · 多平台接入 · 无限扩展能力</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#getting-started" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-700 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-lg">
                <span>🚀</span>5分钟快速体验
              </a>
              <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                <span>📖</span>查看完整文档
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 三大核心卖点 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">为什么选择 OpenClaw</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">从个人用户到企业团队，OpenClaw 都能满足你的 AI 自动化需求</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:bg-white transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">多平台无缝接入</h3>
              <p className="text-gray-600 leading-relaxed">支持微信、Telegram、Discord、Slack、飞书等主流平台，一处配置，处处可用</p>
            </div>
            <div className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:bg-white transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🧩</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Skills 能力无限扩展</h3>
              <p className="text-gray-600 leading-relaxed">100+ 官方 Skills 开箱即用，浏览器自动化、文档处理、代码编写样样精通</p>
            </div>
            <div className="group bg-gray-50 rounded-2xl p-8 hover:shadow-xl hover:bg-white transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">零代码快速部署</h3>
              <p className="text-gray-600 leading-relaxed">无需编写代码，通过配置文件即可快速搭建AI助手，5分钟完成部署上线</p>
            </div>
          </div>
        </div>
      </section>

      {/* 应用场景展示 - Tab切换 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">应用场景</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">OpenClaw 适用于各种场景，满足你的不同需求</p>
          </div>
          
          {/* Tab导航 */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === useCase.id
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <span className="mr-2">{useCase.icon}</span>
                {useCase.title}
              </button>
            ))}
          </div>

          {/* Tab内容 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">{activeCase.icon}</span>
                  {activeCase.title}
                </h3>
                <ul className="space-y-3">
                  {activeCase.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <span className="text-green-500 mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <p className="text-purple-800 font-medium">💡 示例：{activeCase.example}</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">{activeCase.icon}</div>
                  <p className="text-sm">{activeCase.title}示意图</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 快速开始指南 */}
      <section id="getting-started" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">快速开始</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">三步即可搭建你的第一个 AI Agent</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickStartSteps.map((item) => (
              <div key={item.step} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                <div className="bg-gray-900 rounded-lg p-4 relative group">
                  <code className="text-green-400 text-sm font-mono break-all">{item.code}</code>
                  <button
                    onClick={() => copyStepCode(item.code, item.step)}
                    className="absolute top-2 right-2 p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition-colors opacity-0 group-hover:opacity-100"
                    title="复制代码"
                  >
                    {copiedStep === item.step ? (
                      <span className="text-green-400 text-xs">✓</span>
                    ) : (
                      <span className="text-gray-300 text-xs">📋</span>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 热门Skills推荐 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">热门 Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">精选最受欢迎的 Skills，一键扩展你的 AI 能力</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotSkills.map((skill) => (
              <div key={skill.name} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{skill.icon}</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                    {skill.name}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{skill.description}</p>
                <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between">
                  <code className="text-xs text-gray-700 font-mono truncate max-w-[70%]">{skill.command}</code>
                  <button
                    onClick={() => copyToClipboard(skill.command, skill.name)}
                    className="p-2 bg-white rounded-md hover:bg-gray-200 transition-colors shadow-sm"
                    title="复制命令"
                  >
                    {copiedCommand === skill.name ? (
                      <span className="text-green-600 text-xs">✓</span>
                    ) : (
                      <span className="text-gray-600 text-xs">📋</span>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 社区与资源 */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">社区与资源</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">加入社区，获取帮助，共同成长</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 社区链接 */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6">官方资源</h3>
              {communityResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-purple-50 hover:border-purple-200 border border-gray-100 transition-all group"
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform">{resource.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900">{resource.title}</h4>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* 精选教程 */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">精选教程</h3>
              <div className="space-y-3">
                {tutorials.map((tutorial, index) => (
                  <a
                    key={index}
                    href={tutorial.url}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-purple-50 hover:border-purple-200 border border-gray-100 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-purple-100 text-purple-700 rounded-lg flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="font-medium text-gray-900 group-hover:text-purple-700 transition-colors">
                        {tutorial.title}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      tutorial.level === "入门" ? "bg-green-100 text-green-700" :
                      tutorial.level === "进阶" ? "bg-yellow-100 text-yellow-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {tutorial.level}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🤖</span>
                <span className="text-xl font-bold text-white">AI好工具</span>
              </div>
              <p className="text-sm mb-4">发现和分享最实用的 AI 工具，让 AI 为每个人所用。</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">关于我们</a>
                <a href="#" className="hover:text-white transition-colors">联系方式</a>
                <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">产品</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">首页</a></li>
                <li><a href="/openclaw" className="hover:text-white transition-colors">OpenClaw</a></li>
                <li><a href="/skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="/mcp" className="hover:text-white transition-colors">MCP</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">资源</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">文档</a></li>
                <li><a href="https://github.com/openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://discord.gg/openclaw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 AI好工具. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* 返回顶部按钮 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all hover:scale-110 flex items-center justify-center z-50"
        title="返回顶部"
      >
        ↑
      </button>
    </main>
  );
}
