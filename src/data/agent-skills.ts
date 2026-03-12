// Agent Skills 数据 - AI Agent的能力/技能
// 参考: https://skills.sh/ (Vercel Labs等)

export interface AgentSkill {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  useCases: string[];
  installCommand: string;
  githubUrl: string;
  author: string;
  downloads: string;
  isHot?: boolean;
  isNew?: boolean;
}

export const agentSkillCategories = [
  { id: 'all', name: '全部', icon: '🔥' },
  { id: 'code', name: '代码生成', icon: '💻' },
  { id: 'data', name: '数据分析', icon: '📊' },
  { id: 'design', name: '设计', icon: '🎨' },
  { id: 'testing', name: '测试', icon: '🧪' },
  { id: 'deploy', name: '部署', icon: '🚀' },
  { id: 'docs', name: '文档', icon: '📝' },
  { id: 'comm', name: '沟通', icon: '💬' },
  { id: 'research', name: '研究', icon: '🔍' },
  { id: 'productivity', name: '效率', icon: '⚡' },
];

export const agentSkills: AgentSkill[] = [
  // 代码生成
  {
    id: 'find-skills',
    name: 'Find Skills',
    description: 'Discover and install skills from the open agent skills ecosystem',
    category: 'productivity',
    tags: ['skills', 'discovery', 'cli'],
    useCases: [
      'Search for skills by keyword',
      'Install skills from GitHub',
      'Check for skill updates',
      'Browse skills ecosystem'
    ],
    installCommand: 'npx skills add vercel-labs/skills',
    githubUrl: 'https://github.com/vercel-labs/skills',
    author: 'vercel-labs',
    downloads: '2.5M',
    isHot: true,
  },
  {
    id: 'code-generation',
    name: 'Code Generation',
    description: 'Generate code snippets, functions, and entire files from descriptions',
    category: 'code',
    tags: ['code', 'generation', 'programming'],
    useCases: [
      'Generate functions from descriptions',
      'Create boilerplate code',
      'Convert pseudocode to real code',
      'Generate test cases'
    ],
    installCommand: 'npx skills add openai/code-generation',
    githubUrl: 'https://github.com/openai/code-generation',
    author: 'openai',
    downloads: '5.2M',
    isHot: true,
  },
  {
    id: 'code-review',
    name: 'Code Review',
    description: 'Review code for bugs, security issues, and best practices',
    category: 'code',
    tags: ['code', 'review', 'quality'],
    useCases: [
      'Find bugs and errors',
      'Check security vulnerabilities',
      'Suggest optimizations',
      'Enforce coding standards'
    ],
    installCommand: 'npx skills add github/code-review',
    githubUrl: 'https://github.com/github/code-review',
    author: 'github',
    downloads: '3.8M',
    isHot: true,
  },
  {
    id: 'refactoring',
    name: 'Code Refactoring',
    description: 'Refactor code to improve readability and maintainability',
    category: 'code',
    tags: ['refactoring', 'cleanup', 'maintenance'],
    useCases: [
      'Extract functions and classes',
      'Rename variables and functions',
      'Simplify complex code',
      'Remove duplication'
    ],
    installCommand: 'npx skills add jetbrains/refactoring',
    githubUrl: 'https://github.com/jetbrains/refactoring',
    author: 'jetbrains',
    downloads: '2.1M',
  },
  {
    id: 'documentation',
    name: 'Documentation',
    description: 'Generate documentation from code comments and structure',
    category: 'docs',
    tags: ['docs', 'documentation', 'comments'],
    useCases: [
      'Generate API docs',
      'Create README files',
      'Write code comments',
      'Document functions and classes'
    ],
    installCommand: 'npx skills add docs/documentation',
    githubUrl: 'https://github.com/docs/documentation',
    author: 'docs',
    downloads: '1.8M',
  },
  {
    id: 'testing',
    name: 'Test Generation',
    description: 'Generate unit tests, integration tests, and test data',
    category: 'testing',
    tags: ['testing', 'tests', 'qa'],
    useCases: [
      'Generate unit tests',
      'Create test data',
      'Write test scenarios',
      'Mock dependencies'
    ],
    installCommand: 'npx skills add testing/test-generation',
    githubUrl: 'https://github.com/testing/test-generation',
    author: 'testing',
    downloads: '2.3M',
  },
  {
    id: 'debugging',
    name: 'Debugging',
    description: 'Help debug errors and find root causes',
    category: 'code',
    tags: ['debugging', 'errors', 'troubleshooting'],
    useCases: [
      'Analyze error messages',
      'Find root causes',
      'Suggest fixes',
      'Explain error patterns'
    ],
    installCommand: 'npx skills add debugging/debug',
    githubUrl: 'https://github.com/debugging/debug',
    author: 'debugging',
    downloads: '1.9M',
  },
  {
    id: 'data-analysis',
    name: 'Data Analysis',
    description: 'Analyze datasets, create visualizations, and extract insights',
    category: 'data',
    tags: ['data', 'analysis', 'visualization'],
    useCases: [
      'Analyze CSV/JSON data',
      'Create charts and graphs',
      'Find trends and patterns',
      'Generate reports'
    ],
    installCommand: 'npx skills add pandas/data-analysis',
    githubUrl: 'https://github.com/pandas/data-analysis',
    author: 'pandas',
    downloads: '3.5M',
    isHot: true,
  },
  {
    id: 'sql-generation',
    name: 'SQL Generation',
    description: 'Generate SQL queries from natural language descriptions',
    category: 'data',
    tags: ['sql', 'database', 'queries'],
    useCases: [
      'Write SELECT queries',
      'Generate JOINs',
      'Create aggregations',
      'Optimize queries'
    ],
    installCommand: 'npx skills add sql/sql-generation',
    githubUrl: 'https://github.com/sql/sql-generation',
    author: 'sql',
    downloads: '2.7M',
  },
  {
    id: 'design-system',
    name: 'Design System',
    description: 'Create and maintain design systems with components and tokens',
    category: 'design',
    tags: ['design', 'ui', 'components'],
    useCases: [
      'Generate component code',
      'Create design tokens',
      'Build style guides',
      'Maintain consistency'
    ],
    installCommand: 'npx skills add figma/design-system',
    githubUrl: 'https://github.com/figma/design-system',
    author: 'figma',
    downloads: '1.6M',
  },
  {
    id: 'deployment',
    name: 'Deployment',
    description: 'Deploy applications to various platforms and clouds',
    category: 'deploy',
    tags: ['deploy', 'devops', 'cloud'],
    useCases: [
      'Deploy to Vercel',
      'Configure CI/CD',
      'Set up environments',
      'Manage releases'
    ],
    installCommand: 'npx skills add vercel/deployment',
    githubUrl: 'https://github.com/vercel/deployment',
    author: 'vercel',
    downloads: '2.9M',
    isHot: true,
  },
  {
    id: 'security-audit',
    name: 'Security Audit',
    description: 'Audit code and configurations for security vulnerabilities',
    category: 'testing',
    tags: ['security', 'audit', 'vulnerabilities'],
    useCases: [
      'Scan for vulnerabilities',
      'Check dependencies',
      'Review configurations',
      'Suggest security improvements'
    ],
    installCommand: 'npx skills add snyk/security-audit',
    githubUrl: 'https://github.com/snyk/security-audit',
    author: 'snyk',
    downloads: '1.4M',
  },
  {
    id: 'performance',
    name: 'Performance Optimization',
    description: 'Analyze and optimize application performance',
    category: 'code',
    tags: ['performance', 'optimization', 'speed'],
    useCases: [
      'Identify bottlenecks',
      'Suggest optimizations',
      'Analyze load times',
      'Improve efficiency'
    ],
    installCommand: 'npx skills add lighthouse/performance',
    githubUrl: 'https://github.com/lighthouse/performance',
    author: 'lighthouse',
    downloads: '1.7M',
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    description: 'Check and improve web accessibility compliance',
    category: 'testing',
    tags: ['a11y', 'accessibility', 'wcag'],
    useCases: [
      'Check WCAG compliance',
      'Fix accessibility issues',
      'Generate alt text',
      'Test screen readers'
    ],
    installCommand: 'npx skills add a11y/accessibility',
    githubUrl: 'https://github.com/a11y/accessibility',
    author: 'a11y',
    downloads: '1.2M',
  },
  {
    id: 'translation',
    name: 'Translation',
    description: 'Translate content between languages with context awareness',
    category: 'comm',
    tags: ['translation', 'i18n', 'localization'],
    useCases: [
      'Translate UI text',
      'Localize content',
      'Maintain context',
      'Support multiple languages'
    ],
    installCommand: 'npx skills add i18n/translation',
    githubUrl: 'https://github.com/i18n/translation',
    author: 'i18n',
    downloads: '2.0M',
  },
  {
    id: 'summarization',
    name: 'Summarization',
    description: 'Summarize long documents, articles, and conversations',
    category: 'research',
    tags: ['summarization', 'nlp', 'text'],
    useCases: [
      'Summarize articles',
      'Condense reports',
      'Extract key points',
      'Create abstracts'
    ],
    installCommand: 'npx skills add nlp/summarization',
    githubUrl: 'https://github.com/nlp/summarization',
    author: 'nlp',
    downloads: '2.4M',
  },
  {
    id: 'email-writing',
    name: 'Email Writing',
    description: 'Write professional emails with appropriate tone and structure',
    category: 'comm',
    tags: ['email', 'writing', 'communication'],
    useCases: [
      'Draft professional emails',
      'Adjust tone',
      'Follow up messages',
      'Handle difficult conversations'
    ],
    installCommand: 'npx skills add writing/email',
    githubUrl: 'https://github.com/writing/email',
    author: 'writing',
    downloads: '1.5M',
  },
  {
    id: 'meeting-notes',
    name: 'Meeting Notes',
    description: 'Generate structured meeting notes from transcripts or summaries',
    category: 'productivity',
    tags: ['meetings', 'notes', 'productivity'],
    useCases: [
      'Summarize meetings',
      'Extract action items',
      'Create agendas',
      'Track decisions'
    ],
    installCommand: 'npx skills add productivity/meeting-notes',
    githubUrl: 'https://github.com/productivity/meeting-notes',
    author: 'productivity',
    downloads: '1.3M',
  },
  {
    id: 'research',
    name: 'Research Assistant',
    description: 'Help with research tasks, fact-checking, and source finding',
    category: 'research',
    tags: ['research', 'facts', 'sources'],
    useCases: [
      'Find sources',
      'Fact-check claims',
      'Synthesize information',
      'Create bibliographies'
    ],
    installCommand: 'npx skills add research/assistant',
    githubUrl: 'https://github.com/research/assistant',
    author: 'research',
    downloads: '1.6M',
  },
  {
    id: 'presentation',
    name: 'Presentation',
    description: 'Create presentations with slides, talking points, and visuals',
    category: 'docs',
    tags: ['presentation', 'slides', 'pitch'],
    useCases: [
      'Create slide decks',
      'Write talking points',
      'Design layouts',
      'Prepare pitches'
    ],
    installCommand: 'npx skills add slides/presentation',
    githubUrl: 'https://github.com/slides/presentation',
    author: 'slides',
    downloads: '1.4M',
  },
];

// 热门Skills
export const hotAgentSkills = agentSkills.filter(s => s.isHot);

// 最新Skills
export const newAgentSkills = agentSkills.filter(s => s.isNew);
