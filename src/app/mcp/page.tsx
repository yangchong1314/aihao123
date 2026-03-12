"use client";

import { useState, useMemo } from "react";
import { mcpServers, mcpCategories, McpServer } from "@/data/mcp";

export default function McpPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServers = useMemo(() => {
    return mcpServers.filter((server: McpServer) => {
      const matchesCategory =
        activeCategory === "all" || server.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        server.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        server.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const hotServers = useMemo(() => mcpServers.filter((s) => s.isHot).slice(0, 6), []);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors"
          >
            <span className="text-2xl">🤖</span>
            <span className="text-xl font-bold">AI好工具</span>
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900 transition-colors">
              首页
            </a>
            <a href="/skills/" className="hover:text-gray-900 transition-colors">
              Skills
            </a>
            <a href="/mcp/" className="text-green-600 font-medium">
              MCP
            </a>
            <a href="/submit/" className="hover:text-gray-900 transition-colors">
              推荐
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-gray-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            MCP 服务器大全
          </h2>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            Model Context Protocol (MCP) 服务器集合，扩展 AI 能力边界
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm">
            <span>ℹ️</span>
            <span>MCP 是 Anthropic 推出的开放协议，让 AI 安全地连接外部工具和数据</span>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto relative mt-6">
            <input
              type="text"
              placeholder="搜索 MCP 服务器..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700"
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

      {/* Hot MCP Servers */}
      {!searchQuery && activeCategory === "all" && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🔥</span>
              <h3 className="text-xl font-bold text-gray-900">热门 MCP 服务器</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hotServers.map((server) => (
                <McpCard key={server.id} server={server} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All MCP Servers */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-6">全部 MCP 服务器</h3>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {mcpCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-1">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* MCP Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServers.map((server) => (
              <McpCard key={server.id} server={server} />
            ))}
          </div>

          {filteredServers.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">没有找到匹配的 MCP 服务器</p>
              <p className="text-sm mt-2">试试其他关键词或分类</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <span className="text-white font-bold">AI好工具</span>
            </div>
            <p className="text-sm">精选优质 AI 工具，助力效率提升</p>
            <p className="text-sm">© 2026 AI好工具</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function McpCard({ server }: { server: McpServer }) {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    if (server.installCommand) {
      navigator.clipboard.writeText(server.installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="group block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-green-300 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
            {server.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
              {server.name}
            </h4>
            <div className="flex gap-1 mt-1">
              {server.isHot && (
                <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-full">
                  热门
                </span>
              )}
              {server.isNew && (
                <span className="text-xs px-2 py-0.5 bg-green-100 text-green-600 rounded-full">
                  新上线
                </span>
              )}
            </div>
          </div>
        </div>
        <a
          href={server.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-green-500 transition-colors"
        >
          <svg
            className="w-5 h-5"
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
        </a>
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {server.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {server.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      {server.installCommand && (
        <div className="mt-3 p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between gap-2">
            <code className="text-xs text-gray-700 font-mono truncate flex-1">
              {server.installCommand}
            </code>
            <button
              onClick={copyCommand}
              className={`text-xs px-3 py-1 rounded transition-colors ${
                copied
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {copied ? "已复制" : "复制"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
