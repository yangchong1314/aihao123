"use client";

import { useState, useMemo } from "react";
import { agentSkills, agentSkillCategories, AgentSkill } from "@/data/agent-skills";

const ITEMS_PER_PAGE = 20;

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState<AgentSkill | null>(null);
  const [copied, setCopied] = useState(false);

  const filteredSkills = useMemo(() => {
    const filtered = agentSkills.filter((skill: AgentSkill) => {
      const matchesCategory =
        activeCategory === "all" || skill.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
    return filtered;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filteredSkills.length / ITEMS_PER_PAGE);
  const paginatedSkills = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredSkills.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredSkills, currentPage]);

  const hotSkills = useMemo(() => agentSkills.filter((s) => s.isHot).slice(0, 6), []);
  const newSkills = useMemo(() => agentSkills.filter((s) => s.isNew).slice(0, 6), []);

  const copyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            <a href="/skills" className="text-purple-600 font-medium">Skills</a>
            <a href="/mcp" className="hover:text-gray-900 transition-colors">MCP</a>
            <a href="/submit" className="hover:text-gray-900 transition-colors">推荐</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-gray-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Agent Skills</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            {agentSkills.length}+ Agent Skills，扩展你的AI能力
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm">
            <span>💡</span>
            <span>使用 npx skills 发现和安装技能</span>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto relative mt-6">
            <input
              type="text"
              placeholder="搜索Agent Skills..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-700"
            />
            <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Hot Skills */}
      {!searchQuery && activeCategory === "all" && currentPage === 1 && (
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">🔥</span>
              <h3 className="text-xl font-bold text-gray-900">热门 Skills</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {hotSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} onClick={() => setSelectedSkill(skill)} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Skills */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              全部 Skills ({filteredSkills.length})
            </h3>
            {totalPages > 1 && (
              <span className="text-sm text-gray-500">
                第 {currentPage} / {totalPages} 页
              </span>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {agentSkillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setCurrentPage(1); }}
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
            {paginatedSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} onClick={() => setSelectedSkill(skill)} />
            ))}
          </div>

          {paginatedSkills.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">没有找到匹配的Skills</p>
              <p className="text-sm mt-2">试试其他关键词或分类</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                上一页
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === pageNum
                          ? "bg-purple-600 text-white"
                          : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                下一页
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedSkill(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedSkill.name}</h3>
                  <div className="flex gap-2 mt-2">
                    {selectedSkill.isHot && <span className="text-xs px-2 py-1 bg-red-100 text-red-600 rounded-full">热门</span>}
                    {selectedSkill.isNew && <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">新上线</span>}
                  </div>
                </div>
                <button onClick={() => setSelectedSkill(null)} className="text-gray-400 hover:text-gray-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-600 mb-6">{selectedSkill.description}</p>

              {/* Use Cases */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">使用场景</h4>
                <ul className="space-y-2">
                  {selectedSkill.useCases.map((useCase, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <span className="text-purple-500">•</span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Install Command */}
              <div className="bg-gray-900 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">安装命令</span>
                  <button
                    onClick={() => copyCommand(selectedSkill.installCommand)}
                    className={`text-sm px-3 py-1 rounded transition-colors ${
                      copied ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    {copied ? "已复制" : "复制"}
                  </button>
                </div>
                <code className="text-green-400 text-sm font-mono break-all">{selectedSkill.installCommand}</code>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedSkill.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-purple-100 text-purple-600 rounded-full">{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a href={selectedSkill.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  查看 GitHub
                </a>
              </div>

              <div className="mt-4 text-sm text-gray-500">
                作者: {selectedSkill.author} | 下载: {selectedSkill.downloads}
              </div>
            </div>
          </div>
        </div>
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
            <p className="text-sm">© 2026 AI好工具</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function SkillCard({ skill, onClick }: { skill: AgentSkill; onClick: () => void }) {
  return (
    <div onClick={onClick} className="group block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg hover:border-purple-300 transition-all duration-200 cursor-pointer">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
            {skill.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">{skill.name}</h4>
            <div className="flex gap-1 mt-1">
              {skill.isHot && <span className="text-xs px-2 py-0.5 bg-red-100 text-red-600 rounded-full">热门</span>}
              {skill.isNew && <span className="text-xs px-2 py-0.5 bg-green-100 text-green-600 rounded-full">新上线</span>}
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{skill.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {skill.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">{tag}</span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>👤 {skill.author}</span>
        <span>⬇️ {skill.downloads}</span>
      </div>
    </div>
  );
}
