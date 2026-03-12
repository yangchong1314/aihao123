"use client";

import { useState, useMemo } from "react";
import { aiSkills, aiSkillCategories, AISkill } from "@/data/ai-skills";

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState<AISkill | null>(null);

  const filteredSkills = useMemo(() => {
    return aiSkills.filter((skill: AISkill) => {
      const matchesCategory =
        activeCategory === "all" || skill.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        skill.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const hotSkills = useMemo(
    () => aiSkills.filter((s) => s.isHot).slice(0, 6),
    []
  );
  const beginnerSkills = useMemo(
    () => aiSkills.filter((s) => s.difficulty === "beginner").slice(0, 4),
    []
  );

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return { text: "入门", color: "bg-green-100 text-green-700" };
      case "intermediate":
        return { text: "进阶", color: "bg-yellow-100 text-yellow-700" };
      case "advanced":
        return { text: "高级", color: "bg-red-100 text-red-700" };
      default:
        return { text: "入门", color: "bg-green-100 text-green-700" };
    }
  };

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
            <a href="/skills/" className="text-purple-600 font-medium">
              Skills
            </a>
            <a href="/mcp/" className="hover:text-gray-900 transition-colors">
              MCP
            </a>
            <a href="/submit/" className="hover:text-gray-900 transition-colors">
              推荐
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-gray-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            AI Skills 技能库
          </h2>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            不是工具列表，而是<span className="text-purple-600 font-semibold">真正的AI技能</span>
          </p>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto text-sm">
            提示词工程 · AI绘画方法 · 编程技巧 · 办公效率 · 学习提升 · 对话技巧
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="搜索技能、标签或应用场景..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700"
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

      {/* Hot Skills */}
      {!searchQuery && activeCategory === "all" && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🔥</span>
              <h3 className="text-xl font-bold text-gray-900">热门技能</h3>
              <span className="text-sm text-gray-500 ml-2">大家都在用的AI技巧</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hotSkills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  onClick={() => setSelectedSkill(skill)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Beginner Skills */}
      {!searchQuery && activeCategory === "all" && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🌱</span>
              <h3 className="text-xl font-bold text-gray-900">新手入门</h3>
              <span className="text-sm text-gray-500 ml-2">零基础也能快速上手</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {beginnerSkills.map((skill) => (
                <SkillCard
                  key={skill.id}
                  skill={skill}
                  compact
                  onClick={() => setSelectedSkill(skill)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Skills */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">全部技能</h3>
          <p className="text-gray-500 text-sm mb-6">{aiSkills.length} 个AI技能技巧</p>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {aiSkillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-1">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                onClick={() => setSelectedSkill(skill)}
              />
            ))}
          </div>

          {filteredSkills.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">没有找到匹配的技能</p>
              <p className="text-sm mt-2">试试其他关键词或分类</p>
            </div>
          )}
        </div>
      </section>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <SkillDetailModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
          getDifficultyLabel={getDifficultyLabel}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <span className="text-white font-bold">AI好工具</span>
            </div>
            <p className="text-sm">精选优质 AI 技能，助力效率提升</p>
            <p className="text-sm">© 2026 AI好工具</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SkillCard({
  skill,
  compact = false,
  onClick,
}: {
  skill: AISkill;
  compact?: boolean;
  onClick: () => void;
}) {
  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return { text: "入门", color: "bg-green-100 text-green-700" };
      case "intermediate":
        return { text: "进阶", color: "bg-yellow-100 text-yellow-700" };
      case "advanced":
        return { text: "高级", color: "bg-red-100 text-red-700" };
      default:
        return { text: "入门", color: "bg-green-100 text-green-700" };
    }
  };

  const difficulty = getDifficultyLabel(skill.difficulty);

  return (
    <button
      onClick={onClick}
      className="group block w-full text-left bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-purple-300 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
              {skill.title}
            </h4>
            {skill.isHot && (
              <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-full">
                热门
              </span>
            )}
            {skill.isNew && (
              <span className="text-xs px-2 py-0.5 bg-green-100 text-green-600 rounded-full">
                新上线
              </span>
            )}
          </div>
          <span className={`text-xs px-2 py-0.5 rounded-full ${difficulty.color}`}>
            {difficulty.text}
          </span>
        </div>
        <svg
          className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {skill.summary}
      </p>

      {!compact && (
        <div className="mb-3">
          <p className="text-xs text-gray-500 mb-1">适用场景：</p>
          <p className="text-xs text-gray-600 line-clamp-1">
            {skill.useCases.slice(0, 2).join("、")}...
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-1.5">
        {skill.tags.slice(0, compact ? 2 : 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}

function SkillDetailModal({
  skill,
  onClose,
  getDifficultyLabel,
}: {
  skill: AISkill;
  onClose: () => void;
  getDifficultyLabel: (d: string) => { text: string; color: string };
}) {
  const difficulty = getDifficultyLabel(skill.difficulty);
  const [copied, setCopied] = useState(false);

  const copyTemplate = () => {
    navigator.clipboard.writeText(skill.template);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-gray-900">{skill.title}</h2>
              <span className={`text-xs px-2 py-1 rounded-full ${difficulty.color}`}>
                {difficulty.text}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6 space-y-6">
            {/* Summary */}
            <div>
              <p className="text-gray-600">{skill.summary}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-purple-50 text-purple-700 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Use Cases */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs">
                  🎯
                </span>
                使用场景
              </h3>
              <ul className="space-y-2">
                {skill.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-500 mt-0.5">•</span>
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>

            {/* Template */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">
                    📝
                  </span>
                  提示词模板
                </h3>
                <button
                  onClick={copyTemplate}
                  className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      已复制
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      复制模板
                    </>
                  )}
                </button>
              </div>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-100 whitespace-pre-wrap font-mono">
                  {skill.template}
                </pre>
              </div>
            </div>

            {/* Tips */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center text-xs">
                  💡
                </span>
                技巧要点
              </h3>
              <ul className="space-y-2">
                {skill.tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-yellow-500 mt-0.5">{index + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Tools */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-xs">
                  🔧
                </span>
                相关工具
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.relatedTools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors flex items-center gap-1"
                  >
                    {tool.name}
                    <svg
                      className="w-3 h-3"
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
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              关闭
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
