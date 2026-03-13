"use client";

import { useState, useMemo } from "react";
import { tools, categories, Tool } from "@/data/tools";
import { news, newsCategories, NewsItem } from "@/data/news";
import MobileNav from "@/components/MobileNav";
import SocialShare from "@/components/SocialShare";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"tools" | "news">("tools");

  const filteredTools = useMemo(() => {
    return tools.filter((tool: Tool) => {
      const matchesCategory =
        activeCategory === "all" || tool.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const filteredNews = useMemo(() => {
    return news.filter((item: NewsItem) => {
      const matchesSearch =
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  const hotTools = useMemo(() => tools.filter((t) => t.isHot).slice(0, 6), []);
  const newTools = useMemo(() => tools.filter((t) => t.isNew).slice(0, 4), []);
  const hotNews = useMemo(() => news.filter((n) => n.isHot).slice(0, 3), []);

  const handleShare = () => {
    const text = "发现一个好用的 AI 工具导航站，收录了 45+ 精选工具，还有每日 AI 快讯 → https://aihao123-two.vercel.app";
    if (navigator.share) {
      navigator.share({
        title: "AI好工具",
        text: text,
        url: "https://aihao123-two.vercel.app",
      });
    } else {
      navigator.clipboard.writeText(text);
      alert("分享文案已复制到剪贴板！");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <h1 className="text-xl font-bold text-gray-900">AI好工具</h1>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <button
              onClick={() => setActiveTab("tools")}
              className={`hover:text-gray-900 transition-colors ${
                activeTab === "tools" ? "text-blue-600 font-medium" : ""
              }`}
            >
              工具
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`hover:text-gray-900 transition-colors ${
                activeTab === "news" ? "text-blue-600 font-medium" : ""
              }`}
            >
              快讯
            </button>
            <a
              href="/skills/"
              className="hover:text-gray-900 transition-colors"
            >
              Skills
            </a>
            <a
              href="/mcp/"
              className="hover:text-gray-900 transition-colors"
            >
              MCP
            </a>
            <a
              href="/openclaw/"
              className="hover:text-purple-600 transition-colors font-medium"
            >
              OpenClaw
            </a>
            <a
              href="/submit/"
              className="hover:text-gray-900 transition-colors"
            >
              推荐
            </a>
            <button
              onClick={handleShare}
              className="hover:text-gray-900 transition-colors flex items-center gap-1"
            >
              <span>🔗</span> 分享
            </button>
          </nav>
          <MobileNav />
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {activeTab === "tools" ? "发现好用的 AI 工具" : "AI 行业快讯"}
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            {activeTab === "tools"
              ? "精选国内外优质 AI 工具，涵盖写作、绘画、编程、办公等多个领域"
              : "每日更新 AI 行业最新动态，产品发布、模型更新、公司资讯一网打尽"}
          </p>

          {/* Tab Switch */}
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "tools"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              🔧 工具导航
            </button>
            <button
              onClick={() => setActiveTab("news")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === "news"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              📰 AI 快讯
            </button>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder={
                activeTab === "tools"
                  ? "搜索工具名称、描述或标签..."
                  : "搜索新闻标题或内容..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            />
            <svg
              className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Tools Tab */}
      {activeTab === "tools" && (
        <>
          {/* Hot Tools */}
          {!searchQuery && activeCategory === "all" && (
            <section className="py-12 bg-white">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🔥</span>
                    <h3 className="text-xl font-bold text-gray-900">热门推荐</h3>
                  </div>
                  <button
                    onClick={handleShare}
                    className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                  >
                    <span>🔗</span> 分享给朋友
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {hotTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* New Tools */}
          {!searchQuery && activeCategory === "all" && (
            <section className="py-12 bg-gray-50">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-2xl">✨</span>
                  <h3 className="text-xl font-bold text-gray-900">最新上线</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {newTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} compact />
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* All Tools */}
          <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6">全部工具</h3>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === cat.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span className="mr-1">{cat.icon}</span>
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>

              {filteredTools.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-lg">没有找到匹配的工具</p>
                  <p className="text-sm mt-2">试试其他关键词或分类</p>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* News Tab */}
      {activeTab === "news" && (
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">AI 行业快讯</h3>
              <span className="text-sm text-gray-500">每日更新</span>
            </div>

            {/* Hot News */}
            {!searchQuery && hotNews.length > 0 && (
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl">🔥</span>
                  <span className="font-semibold text-gray-900">热门资讯</span>
                </div>
                <div className="space-y-4">
                  {hotNews.map((item) => (
                    <NewsCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            )}

            {/* All News */}
            <div className="space-y-4">
              {filteredNews.map((item) => (
                <NewsCard key={item.id} item={item} />
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">没有找到相关新闻</p>
                <p className="text-sm mt-2">试试其他关键词</p>
              </div>
            )}

            {/* Subscribe CTA */}
            <div className="mt-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center text-white">
              <h4 className="text-xl font-bold mb-2">不想错过 AI 新动态？</h4>
              <p className="text-blue-100 mb-4">每天来看看，发现最新 AI 工具和行业资讯</p>
              <button
                onClick={handleShare}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
              >
                分享给朋友 🔗
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <span className="text-white font-bold">AI好工具</span>
            </div>
            <p className="text-sm">精选优质 AI 工具，助力效率提升</p>
            <div className="flex items-center gap-4">
              <button
                onClick={handleShare}
                className="text-sm hover:text-white transition-colors"
              >
                分享本站
              </button>
              <span className="text-sm">© 2026 AI好工具</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ToolCard({
  tool,
  compact = false,
}: {
  tool: Tool;
  compact?: boolean;
}) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
            {tool.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {tool.name}
            </h4>
            <div className="flex gap-1 mt-1">
              {tool.isHot && (
                <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-full">
                  热门
                </span>
              )}
              {tool.isNew && (
                <span className="text-xs px-2 py-0.5 bg-green-100 text-green-600 rounded-full">
                  新上线
                </span>
              )}
            </div>
          </div>
        </div>
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {tool.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {tool.tags.slice(0, compact ? 2 : 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  const categoryColors: Record<string, string> = {
    product: "bg-blue-100 text-blue-600",
    model: "bg-purple-100 text-purple-600",
    company: "bg-green-100 text-green-600",
    trend: "bg-orange-100 text-orange-600",
  };

  const categoryNames: Record<string, string> = {
    product: "产品发布",
    model: "模型更新",
    company: "公司动态",
    trend: "行业趋势",
  };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                categoryColors[item.category]
              }`}
            >
              {categoryNames[item.category]}
            </span>
            {item.isHot && (
              <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded-full">
                热门
              </span>
            )}
            <span className="text-xs text-gray-400">{item.date}</span>
          </div>
          <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
            {item.title}
          </h4>
          <p className="text-gray-600 text-sm line-clamp-2">{item.summary}</p>
          <div className="flex items-center gap-2 mt-3 text-xs text-gray-400">
            <span>来源: {item.source}</span>
          </div>
        </div>
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </a>
  );
}
