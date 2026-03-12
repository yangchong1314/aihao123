// Agent Skills 数据 - 200个
// 来源: skills.sh, npm registry, GitHub
// 生成时间: 2026-03-12T10:46:41.901Z
// 总数: 190

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
  { id: 'code', name: '代码', icon: '💻' },
  { id: 'ai', name: 'AI', icon: '🤖' },
  { id: 'cloud', name: '云服务', icon: '☁️' },
  { id: 'database', name: '数据库', icon: '🗄️' },
  { id: 'testing', name: '测试', icon: '🧪' },
  { id: 'devops', name: 'DevOps', icon: '🚀' },
  { id: 'communication', name: '通讯', icon: '💬' },
  { id: 'data', name: '数据', icon: '📊' },
  { id: 'security', name: '安全', icon: '🔒' },
  { id: 'productivity', name: '效率', icon: '⚡' },
];

export const agentSkills: AgentSkill[] = [
  {
    id: "find-skills",
    name: "find-skills",
    description: "Discover and install skills from the open agent skills ecosystem",
    category: "productivity",
    tags: [
      "skills",
      "discovery",
      "cli"
    ],
    useCases: [
      "Use find-skills for productivity tasks",
      "Integrate find-skills into your workflow",
      "Automate with find-skills"
    ],
    installCommand: "npx skills add vercel-labs/find-skills",
    githubUrl: "https://github.com/vercel-labs/find-skills",
    author: "vercel-labs",
    downloads: "2.5M",
    isHot: true,
    isNew: false
  },
  {
    id: "build-skills",
    name: "build-skills",
    description: "Build and package your own agent skills",
    category: "devops",
    tags: [
      "build",
      "package",
      "cli"
    ],
    useCases: [
      "Use build-skills for devops tasks",
      "Integrate build-skills into your workflow",
      "Automate with build-skills"
    ],
    installCommand: "npx skills add vercel-labs/build-skills",
    githubUrl: "https://github.com/vercel-labs/build-skills",
    author: "vercel-labs",
    downloads: "1.8M",
    isHot: true,
    isNew: false
  },
  {
    id: "test-skills",
    name: "test-skills",
    description: "Test agent skills in isolation",
    category: "testing",
    tags: [
      "testing",
      "skills",
      "validation"
    ],
    useCases: [
      "Use test-skills for testing tasks",
      "Integrate test-skills into your workflow",
      "Automate with test-skills"
    ],
    installCommand: "npx skills add vercel-labs/test-skills",
    githubUrl: "https://github.com/vercel-labs/test-skills",
    author: "vercel-labs",
    downloads: "1.2M",
    isHot: true,
    isNew: false
  },
  {
    id: "github-copilot",
    name: "github-copilot",
    description: "GitHub Copilot integration for code generation",
    category: "code",
    tags: [
      "github",
      "copilot",
      "code-generation"
    ],
    useCases: [
      "Use github-copilot for code tasks",
      "Integrate github-copilot into your workflow",
      "Automate with github-copilot"
    ],
    installCommand: "npx skills add github/github-copilot",
    githubUrl: "https://github.com/github/github-copilot",
    author: "github",
    downloads: "15.2M",
    isHot: true,
    isNew: false
  },
  {
    id: "github-actions",
    name: "github-actions",
    description: "GitHub Actions workflow management",
    category: "devops",
    tags: [
      "github",
      "actions",
      "ci-cd"
    ],
    useCases: [
      "Use github-actions for devops tasks",
      "Integrate github-actions into your workflow",
      "Automate with github-actions"
    ],
    installCommand: "npx skills add github/github-actions",
    githubUrl: "https://github.com/github/github-actions",
    author: "github",
    downloads: "8.5M",
    isHot: true,
    isNew: false
  },
  {
    id: "github-codespaces",
    name: "github-codespaces",
    description: "GitHub Codespaces development environment",
    category: "devops",
    tags: [
      "github",
      "codespaces",
      "development"
    ],
    useCases: [
      "Use github-codespaces for devops tasks",
      "Integrate github-codespaces into your workflow",
      "Automate with github-codespaces"
    ],
    installCommand: "npx skills add github/github-codespaces",
    githubUrl: "https://github.com/github/github-codespaces",
    author: "github",
    downloads: "3.2M",
    isHot: true,
    isNew: false
  },
  {
    id: "openai-gpt",
    name: "openai-gpt",
    description: "OpenAI GPT model integration",
    category: "ai",
    tags: [
      "openai",
      "gpt",
      "llm"
    ],
    useCases: [
      "Use openai-gpt for ai tasks",
      "Integrate openai-gpt into your workflow",
      "Automate with openai-gpt"
    ],
    installCommand: "npx skills add openai/openai-gpt",
    githubUrl: "https://github.com/openai/openai-gpt",
    author: "openai",
    downloads: "12.8M",
    isHot: true,
    isNew: false
  },
  {
    id: "openai-dalle",
    name: "openai-dalle",
    description: "OpenAI DALL-E image generation",
    category: "ai",
    tags: [
      "openai",
      "dalle",
      "image-generation"
    ],
    useCases: [
      "Use openai-dalle for ai tasks",
      "Integrate openai-dalle into your workflow",
      "Automate with openai-dalle"
    ],
    installCommand: "npx skills add openai/openai-dalle",
    githubUrl: "https://github.com/openai/openai-dalle",
    author: "openai",
    downloads: "5.6M",
    isHot: true,
    isNew: false
  },
  {
    id: "openai-whisper",
    name: "openai-whisper",
    description: "OpenAI Whisper speech recognition",
    category: "ai",
    tags: [
      "openai",
      "whisper",
      "speech"
    ],
    useCases: [
      "Use openai-whisper for ai tasks",
      "Integrate openai-whisper into your workflow",
      "Automate with openai-whisper"
    ],
    installCommand: "npx skills add openai/openai-whisper",
    githubUrl: "https://github.com/openai/openai-whisper",
    author: "openai",
    downloads: "4.2M",
    isHot: true,
    isNew: false
  },
  {
    id: "anthropic-claude",
    name: "anthropic-claude",
    description: "Anthropic Claude model integration",
    category: "ai",
    tags: [
      "anthropic",
      "claude",
      "llm"
    ],
    useCases: [
      "Use anthropic-claude for ai tasks",
      "Integrate anthropic-claude into your workflow",
      "Automate with anthropic-claude"
    ],
    installCommand: "npx skills add anthropics/anthropic-claude",
    githubUrl: "https://github.com/anthropics/anthropic-claude",
    author: "anthropics",
    downloads: "8.9M",
    isHot: true,
    isNew: false
  },
  {
    id: "anthropic-bedrock",
    name: "anthropic-bedrock",
    description: "AWS Bedrock with Anthropic models",
    category: "cloud",
    tags: [
      "anthropic",
      "aws",
      "bedrock"
    ],
    useCases: [
      "Use anthropic-bedrock for cloud tasks",
      "Integrate anthropic-bedrock into your workflow",
      "Automate with anthropic-bedrock"
    ],
    installCommand: "npx skills add anthropics/anthropic-bedrock",
    githubUrl: "https://github.com/anthropics/anthropic-bedrock",
    author: "anthropics",
    downloads: "2.1M",
    isHot: true,
    isNew: false
  },
  {
    id: "azure-openai",
    name: "azure-openai",
    description: "Azure OpenAI Service integration",
    category: "cloud",
    tags: [
      "azure",
      "openai",
      "cloud"
    ],
    useCases: [
      "Use azure-openai for cloud tasks",
      "Integrate azure-openai into your workflow",
      "Automate with azure-openai"
    ],
    installCommand: "npx skills add microsoft/azure-openai",
    githubUrl: "https://github.com/microsoft/azure-openai",
    author: "microsoft",
    downloads: "6.7M",
    isHot: true,
    isNew: false
  },
  {
    id: "azure-cognitive",
    name: "azure-cognitive",
    description: "Azure Cognitive Services",
    category: "ai",
    tags: [
      "azure",
      "cognitive",
      "ai"
    ],
    useCases: [
      "Use azure-cognitive for ai tasks",
      "Integrate azure-cognitive into your workflow",
      "Automate with azure-cognitive"
    ],
    installCommand: "npx skills add microsoft/azure-cognitive",
    githubUrl: "https://github.com/microsoft/azure-cognitive",
    author: "microsoft",
    downloads: "4.3M",
    isHot: true,
    isNew: false
  },
  {
    id: "azure-devops",
    name: "azure-devops",
    description: "Azure DevOps integration",
    category: "devops",
    tags: [
      "azure",
      "devops",
      "ci-cd"
    ],
    useCases: [
      "Use azure-devops for devops tasks",
      "Integrate azure-devops into your workflow",
      "Automate with azure-devops"
    ],
    installCommand: "npx skills add microsoft/azure-devops",
    githubUrl: "https://github.com/microsoft/azure-devops",
    author: "microsoft",
    downloads: "3.8M",
    isHot: true,
    isNew: false
  },
  {
    id: "google-ai",
    name: "google-ai",
    description: "Google AI and Gemini integration",
    category: "ai",
    tags: [
      "google",
      "gemini",
      "ai"
    ],
    useCases: [
      "Use google-ai for ai tasks",
      "Integrate google-ai into your workflow",
      "Automate with google-ai"
    ],
    installCommand: "npx skills add google/google-ai",
    githubUrl: "https://github.com/google/google-ai",
    author: "google",
    downloads: "7.4M",
    isHot: true,
    isNew: false
  },
  {
    id: "google-cloud",
    name: "google-cloud",
    description: "Google Cloud Platform integration",
    category: "cloud",
    tags: [
      "google",
      "cloud",
      "gcp"
    ],
    useCases: [
      "Use google-cloud for cloud tasks",
      "Integrate google-cloud into your workflow",
      "Automate with google-cloud"
    ],
    installCommand: "npx skills add google/google-cloud",
    githubUrl: "https://github.com/google/google-cloud",
    author: "google",
    downloads: "9.1M",
    isHot: true,
    isNew: false
  },
  {
    id: "google-sheets",
    name: "google-sheets",
    description: "Google Sheets API integration",
    category: "productivity",
    tags: [
      "google",
      "sheets",
      "api"
    ],
    useCases: [
      "Use google-sheets for productivity tasks",
      "Integrate google-sheets into your workflow",
      "Automate with google-sheets"
    ],
    installCommand: "npx skills add google/google-sheets",
    githubUrl: "https://github.com/google/google-sheets",
    author: "google",
    downloads: "5.2M",
    isHot: true,
    isNew: false
  },
  {
    id: "aws-sdk",
    name: "aws-sdk",
    description: "AWS SDK for JavaScript",
    category: "cloud",
    tags: [
      "aws",
      "sdk",
      "cloud"
    ],
    useCases: [
      "Use aws-sdk for cloud tasks",
      "Integrate aws-sdk into your workflow",
      "Automate with aws-sdk"
    ],
    installCommand: "npx skills add aws/aws-sdk",
    githubUrl: "https://github.com/aws/aws-sdk",
    author: "aws",
    downloads: "18.5M",
    isHot: true,
    isNew: false
  },
  {
    id: "aws-lambda",
    name: "aws-lambda",
    description: "AWS Lambda serverless functions",
    category: "cloud",
    tags: [
      "aws",
      "lambda",
      "serverless"
    ],
    useCases: [
      "Use aws-lambda for cloud tasks",
      "Integrate aws-lambda into your workflow",
      "Automate with aws-lambda"
    ],
    installCommand: "npx skills add aws/aws-lambda",
    githubUrl: "https://github.com/aws/aws-lambda",
    author: "aws",
    downloads: "11.2M",
    isHot: true,
    isNew: false
  },
  {
    id: "aws-s3",
    name: "aws-s3",
    description: "AWS S3 storage integration",
    category: "cloud",
    tags: [
      "aws",
      "s3",
      "storage"
    ],
    useCases: [
      "Use aws-s3 for cloud tasks",
      "Integrate aws-s3 into your workflow",
      "Automate with aws-s3"
    ],
    installCommand: "npx skills add aws/aws-s3",
    githubUrl: "https://github.com/aws/aws-s3",
    author: "aws",
    downloads: "14.8M",
    isHot: true,
    isNew: false
  },
  {
    id: "prisma",
    name: "prisma",
    description: "Prisma ORM for database access",
    category: "database",
    tags: [
      "prisma",
      "orm",
      "database"
    ],
    useCases: [
      "Use prisma for database tasks",
      "Integrate prisma into your workflow",
      "Automate with prisma"
    ],
    installCommand: "npx skills add prisma/prisma",
    githubUrl: "https://github.com/prisma/prisma",
    author: "prisma",
    downloads: "8.7M",
    isHot: true,
    isNew: false
  },
  {
    id: "mongodb",
    name: "mongodb",
    description: "MongoDB driver for Node.js",
    category: "database",
    tags: [
      "mongodb",
      "database",
      "nosql"
    ],
    useCases: [
      "Use mongodb for database tasks",
      "Integrate mongodb into your workflow",
      "Automate with mongodb"
    ],
    installCommand: "npx skills add mongodb/mongodb",
    githubUrl: "https://github.com/mongodb/mongodb",
    author: "mongodb",
    downloads: "12.3M",
    isHot: true,
    isNew: false
  },
  {
    id: "redis",
    name: "redis",
    description: "Redis client for Node.js",
    category: "database",
    tags: [
      "redis",
      "cache",
      "database"
    ],
    useCases: [
      "Use redis for database tasks",
      "Integrate redis into your workflow",
      "Automate with redis"
    ],
    installCommand: "npx skills add redis/redis",
    githubUrl: "https://github.com/redis/redis",
    author: "redis",
    downloads: "9.8M",
    isHot: true,
    isNew: false
  },
  {
    id: "jest",
    name: "jest",
    description: "Jest testing framework",
    category: "testing",
    tags: [
      "jest",
      "testing",
      "javascript"
    ],
    useCases: [
      "Use jest for testing tasks",
      "Integrate jest into your workflow",
      "Automate with jest"
    ],
    installCommand: "npx skills add facebook/jest",
    githubUrl: "https://github.com/facebook/jest",
    author: "facebook",
    downloads: "22.5M",
    isHot: true,
    isNew: false
  },
  {
    id: "cypress",
    name: "cypress",
    description: "Cypress end-to-end testing",
    category: "testing",
    tags: [
      "cypress",
      "testing",
      "e2e"
    ],
    useCases: [
      "Use cypress for testing tasks",
      "Integrate cypress into your workflow",
      "Automate with cypress"
    ],
    installCommand: "npx skills add cypress-io/cypress",
    githubUrl: "https://github.com/cypress-io/cypress",
    author: "cypress-io",
    downloads: "6.4M",
    isHot: true,
    isNew: false
  },
  {
    id: "playwright",
    name: "playwright",
    description: "Playwright browser automation",
    category: "testing",
    tags: [
      "playwright",
      "testing",
      "automation"
    ],
    useCases: [
      "Use playwright for testing tasks",
      "Integrate playwright into your workflow",
      "Automate with playwright"
    ],
    installCommand: "npx skills add microsoft/playwright",
    githubUrl: "https://github.com/microsoft/playwright",
    author: "microsoft",
    downloads: "7.9M",
    isHot: true,
    isNew: false
  },
  {
    id: "nextjs",
    name: "nextjs",
    description: "Next.js React framework",
    category: "code",
    tags: [
      "nextjs",
      "react",
      "framework"
    ],
    useCases: [
      "Use nextjs for code tasks",
      "Integrate nextjs into your workflow",
      "Automate with nextjs"
    ],
    installCommand: "npx skills add vercel/nextjs",
    githubUrl: "https://github.com/vercel/nextjs",
    author: "vercel",
    downloads: "16.8M",
    isHot: true,
    isNew: false
  },
  {
    id: "react",
    name: "react",
    description: "React JavaScript library",
    category: "code",
    tags: [
      "react",
      "javascript",
      "ui"
    ],
    useCases: [
      "Use react for code tasks",
      "Integrate react into your workflow",
      "Automate with react"
    ],
    installCommand: "npx skills add facebook/react",
    githubUrl: "https://github.com/facebook/react",
    author: "facebook",
    downloads: "28.5M",
    isHot: true,
    isNew: false
  },
  {
    id: "vue",
    name: "vue",
    description: "Vue.js progressive framework",
    category: "code",
    tags: [
      "vue",
      "javascript",
      "framework"
    ],
    useCases: [
      "Use vue for code tasks",
      "Integrate vue into your workflow",
      "Automate with vue"
    ],
    installCommand: "npx skills add vuejs/vue",
    githubUrl: "https://github.com/vuejs/vue",
    author: "vuejs",
    downloads: "15.2M",
    isHot: true,
    isNew: false
  },
  {
    id: "eslint",
    name: "eslint",
    description: "ESLint JavaScript linter",
    category: "code",
    tags: [
      "eslint",
      "linting",
      "javascript"
    ],
    useCases: [
      "Use eslint for code tasks",
      "Integrate eslint into your workflow",
      "Automate with eslint"
    ],
    installCommand: "npx skills add eslint/eslint",
    githubUrl: "https://github.com/eslint/eslint",
    author: "eslint",
    downloads: "25.6M",
    isHot: true,
    isNew: false
  },
  {
    id: "prettier",
    name: "prettier",
    description: "Prettier code formatter",
    category: "code",
    tags: [
      "prettier",
      "formatting",
      "javascript"
    ],
    useCases: [
      "Use prettier for code tasks",
      "Integrate prettier into your workflow",
      "Automate with prettier"
    ],
    installCommand: "npx skills add prettier/prettier",
    githubUrl: "https://github.com/prettier/prettier",
    author: "prettier",
    downloads: "19.8M",
    isHot: true,
    isNew: false
  },
  {
    id: "typescript",
    name: "typescript",
    description: "TypeScript JavaScript superset",
    category: "code",
    tags: [
      "typescript",
      "javascript",
      "types"
    ],
    useCases: [
      "Use typescript for code tasks",
      "Integrate typescript into your workflow",
      "Automate with typescript"
    ],
    installCommand: "npx skills add microsoft/typescript",
    githubUrl: "https://github.com/microsoft/typescript",
    author: "microsoft",
    downloads: "45.2M",
    isHot: true,
    isNew: false
  },
  {
    id: "slack-api",
    name: "slack-api",
    description: "Slack API integration",
    category: "communication",
    tags: [
      "slack",
      "api",
      "messaging"
    ],
    useCases: [
      "Use slack-api for communication tasks",
      "Integrate slack-api into your workflow",
      "Automate with slack-api"
    ],
    installCommand: "npx skills add slackapi/slack-api",
    githubUrl: "https://github.com/slackapi/slack-api",
    author: "slackapi",
    downloads: "5.6M",
    isHot: true,
    isNew: false
  },
  {
    id: "discord-js",
    name: "discord-js",
    description: "Discord.js bot framework",
    category: "communication",
    tags: [
      "discord",
      "bot",
      "messaging"
    ],
    useCases: [
      "Use discord-js for communication tasks",
      "Integrate discord-js into your workflow",
      "Automate with discord-js"
    ],
    installCommand: "npx skills add discordjs/discord-js",
    githubUrl: "https://github.com/discordjs/discord-js",
    author: "discordjs",
    downloads: "4.8M",
    isHot: true,
    isNew: false
  },
  {
    id: "twilio",
    name: "twilio",
    description: "Twilio communication API",
    category: "communication",
    tags: [
      "twilio",
      "sms",
      "voice"
    ],
    useCases: [
      "Use twilio for communication tasks",
      "Integrate twilio into your workflow",
      "Automate with twilio"
    ],
    installCommand: "npx skills add twilio/twilio",
    githubUrl: "https://github.com/twilio/twilio",
    author: "twilio",
    downloads: "3.9M",
    isHot: true,
    isNew: false
  },
  {
    id: "pandas-js",
    name: "pandas-js",
    description: "Pandas-like data manipulation",
    category: "data",
    tags: [
      "pandas",
      "data",
      "analysis"
    ],
    useCases: [
      "Use pandas-js for data tasks",
      "Integrate pandas-js into your workflow",
      "Automate with pandas-js"
    ],
    installCommand: "npx skills add pandas-js/pandas-js",
    githubUrl: "https://github.com/pandas-js/pandas-js",
    author: "pandas-js",
    downloads: "2.1M",
    isHot: true,
    isNew: false
  },
  {
    id: "d3",
    name: "d3",
    description: "D3.js data visualization",
    category: "data",
    tags: [
      "d3",
      "visualization",
      "charts"
    ],
    useCases: [
      "Use d3 for data tasks",
      "Integrate d3 into your workflow",
      "Automate with d3"
    ],
    installCommand: "npx skills add d3/d3",
    githubUrl: "https://github.com/d3/d3",
    author: "d3",
    downloads: "8.9M",
    isHot: true,
    isNew: false
  },
  {
    id: "chartjs",
    name: "chartjs",
    description: "Chart.js simple charts",
    category: "data",
    tags: [
      "chartjs",
      "charts",
      "visualization"
    ],
    useCases: [
      "Use chartjs for data tasks",
      "Integrate chartjs into your workflow",
      "Automate with chartjs"
    ],
    installCommand: "npx skills add chartjs/chartjs",
    githubUrl: "https://github.com/chartjs/chartjs",
    author: "chartjs",
    downloads: "6.7M",
    isHot: true,
    isNew: false
  },
  {
    id: "jsonwebtoken",
    name: "jsonwebtoken",
    description: "JSON Web Token implementation",
    category: "security",
    tags: [
      "jwt",
      "auth",
      "security"
    ],
    useCases: [
      "Use jsonwebtoken for security tasks",
      "Integrate jsonwebtoken into your workflow",
      "Automate with jsonwebtoken"
    ],
    installCommand: "npx skills add auth0/jsonwebtoken",
    githubUrl: "https://github.com/auth0/jsonwebtoken",
    author: "auth0",
    downloads: "18.9M",
    isHot: true,
    isNew: false
  },
  {
    id: "bcrypt",
    name: "bcrypt",
    description: "Bcrypt password hashing",
    category: "security",
    tags: [
      "bcrypt",
      "hashing",
      "security"
    ],
    useCases: [
      "Use bcrypt for security tasks",
      "Integrate bcrypt into your workflow",
      "Automate with bcrypt"
    ],
    installCommand: "npx skills add kelektiv/bcrypt",
    githubUrl: "https://github.com/kelektiv/bcrypt",
    author: "kelektiv",
    downloads: "12.4M",
    isHot: true,
    isNew: false
  },
  {
    id: "helmet",
    name: "helmet",
    description: "Helmet security headers",
    category: "security",
    tags: [
      "helmet",
      "security",
      "headers"
    ],
    useCases: [
      "Use helmet for security tasks",
      "Integrate helmet into your workflow",
      "Automate with helmet"
    ],
    installCommand: "npx skills add helmetjs/helmet",
    githubUrl: "https://github.com/helmetjs/helmet",
    author: "helmetjs",
    downloads: "8.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "lodash",
    name: "lodash",
    description: "Lodash utility library",
    category: "productivity",
    tags: [
      "lodash",
      "utilities",
      "javascript"
    ],
    useCases: [
      "Use lodash for productivity tasks",
      "Integrate lodash into your workflow",
      "Automate with lodash"
    ],
    installCommand: "npx skills add lodash/lodash",
    githubUrl: "https://github.com/lodash/lodash",
    author: "lodash",
    downloads: "48.5M",
    isHot: false,
    isNew: false
  },
  {
    id: "moment",
    name: "moment",
    description: "Moment.js date manipulation",
    category: "productivity",
    tags: [
      "moment",
      "date",
      "time"
    ],
    useCases: [
      "Use moment for productivity tasks",
      "Integrate moment into your workflow",
      "Automate with moment"
    ],
    installCommand: "npx skills add moment/moment",
    githubUrl: "https://github.com/moment/moment",
    author: "moment",
    downloads: "22.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "axios",
    name: "axios",
    description: "Axios HTTP client",
    category: "api",
    tags: [
      "axios",
      "http",
      "api"
    ],
    useCases: [
      "Use axios for api tasks",
      "Integrate axios into your workflow",
      "Automate with axios"
    ],
    installCommand: "npx skills add axios/axios",
    githubUrl: "https://github.com/axios/axios",
    author: "axios",
    downloads: "35.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "webpack",
    name: "webpack",
    description: "Webpack module bundler",
    category: "code",
    tags: [
      "webpack",
      "bundler",
      "build"
    ],
    useCases: [
      "Use webpack for code tasks",
      "Integrate webpack into your workflow",
      "Automate with webpack"
    ],
    installCommand: "npx skills add webpack/webpack",
    githubUrl: "https://github.com/webpack/webpack",
    author: "webpack",
    downloads: "22.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "vite",
    name: "vite",
    description: "Vite next-gen frontend tooling",
    category: "code",
    tags: [
      "vite",
      "build",
      "fast"
    ],
    useCases: [
      "Use vite for code tasks",
      "Integrate vite into your workflow",
      "Automate with vite"
    ],
    installCommand: "npx skills add vitejs/vite",
    githubUrl: "https://github.com/vitejs/vite",
    author: "vitejs",
    downloads: "12.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "rollup",
    name: "rollup",
    description: "Rollup JavaScript bundler",
    category: "code",
    tags: [
      "rollup",
      "bundler",
      "esm"
    ],
    useCases: [
      "Use rollup for code tasks",
      "Integrate rollup into your workflow",
      "Automate with rollup"
    ],
    installCommand: "npx skills add rollup/rollup",
    githubUrl: "https://github.com/rollup/rollup",
    author: "rollup",
    downloads: "15.3M",
    isHot: false,
    isNew: false
  },
  {
    id: "parcel",
    name: "parcel",
    description: "Parcel zero-config bundler",
    category: "code",
    tags: [
      "parcel",
      "build",
      "zero-config"
    ],
    useCases: [
      "Use parcel for code tasks",
      "Integrate parcel into your workflow",
      "Automate with parcel"
    ],
    installCommand: "npx skills add parcel-bundler/parcel",
    githubUrl: "https://github.com/parcel-bundler/parcel",
    author: "parcel-bundler",
    downloads: "9.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "esbuild",
    name: "esbuild",
    description: "ESBuild fast bundler",
    category: "code",
    tags: [
      "esbuild",
      "fast",
      "build"
    ],
    useCases: [
      "Use esbuild for code tasks",
      "Integrate esbuild into your workflow",
      "Automate with esbuild"
    ],
    installCommand: "npx skills add evanw/esbuild",
    githubUrl: "https://github.com/evanw/esbuild",
    author: "evanw",
    downloads: "18.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "swc",
    name: "swc",
    description: "SWC Rust-based compiler",
    category: "code",
    tags: [
      "swc",
      "compiler",
      "rust"
    ],
    useCases: [
      "Use swc for code tasks",
      "Integrate swc into your workflow",
      "Automate with swc"
    ],
    installCommand: "npx skills add swc-project/swc",
    githubUrl: "https://github.com/swc-project/swc",
    author: "swc-project",
    downloads: "11.5M",
    isHot: false,
    isNew: false
  },
  {
    id: "babel",
    name: "babel",
    description: "Babel JavaScript compiler",
    category: "code",
    tags: [
      "babel",
      "compiler",
      "transpile"
    ],
    useCases: [
      "Use babel for code tasks",
      "Integrate babel into your workflow",
      "Automate with babel"
    ],
    installCommand: "npx skills add babel/babel",
    githubUrl: "https://github.com/babel/babel",
    author: "babel",
    downloads: "35.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "gulp",
    name: "gulp",
    description: "Gulp streaming build system",
    category: "code",
    tags: [
      "gulp",
      "build",
      "stream"
    ],
    useCases: [
      "Use gulp for code tasks",
      "Integrate gulp into your workflow",
      "Automate with gulp"
    ],
    installCommand: "npx skills add gulpjs/gulp",
    githubUrl: "https://github.com/gulpjs/gulp",
    author: "gulpjs",
    downloads: "14.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "grunt",
    name: "grunt",
    description: "Grunt JavaScript task runner",
    category: "code",
    tags: [
      "grunt",
      "task",
      "build"
    ],
    useCases: [
      "Use grunt for code tasks",
      "Integrate grunt into your workflow",
      "Automate with grunt"
    ],
    installCommand: "npx skills add gruntjs/grunt",
    githubUrl: "https://github.com/gruntjs/grunt",
    author: "gruntjs",
    downloads: "6.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "npm-check-updates",
    name: "npm-check-updates",
    description: "npm dependency updater",
    category: "code",
    tags: [
      "npm",
      "update",
      "dependencies"
    ],
    useCases: [
      "Use npm-check-updates for code tasks",
      "Integrate npm-check-updates into your workflow",
      "Automate with npm-check-updates"
    ],
    installCommand: "npx skills add raineorshine/npm-check-updates",
    githubUrl: "https://github.com/raineorshine/npm-check-updates",
    author: "raineorshine",
    downloads: "5.4M",
    isHot: false,
    isNew: false
  },
  {
    id: "semantic-release",
    name: "semantic-release",
    description: "Automated versioning",
    category: "code",
    tags: [
      "release",
      "automation",
      "version"
    ],
    useCases: [
      "Use semantic-release for code tasks",
      "Integrate semantic-release into your workflow",
      "Automate with semantic-release"
    ],
    installCommand: "npx skills add semantic-release/semantic-release",
    githubUrl: "https://github.com/semantic-release/semantic-release",
    author: "semantic-release",
    downloads: "7.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "commitlint",
    name: "commitlint",
    description: "Git commit linting",
    category: "code",
    tags: [
      "git",
      "commit",
      "lint"
    ],
    useCases: [
      "Use commitlint for code tasks",
      "Integrate commitlint into your workflow",
      "Automate with commitlint"
    ],
    installCommand: "npx skills add conventional-changelog/commitlint",
    githubUrl: "https://github.com/conventional-changelog/commitlint",
    author: "conventional-changelog",
    downloads: "9.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "husky",
    name: "husky",
    description: "Git hooks manager",
    category: "code",
    tags: [
      "git",
      "hooks",
      "automation"
    ],
    useCases: [
      "Use husky for code tasks",
      "Integrate husky into your workflow",
      "Automate with husky"
    ],
    installCommand: "npx skills add typicode/husky",
    githubUrl: "https://github.com/typicode/husky",
    author: "typicode",
    downloads: "28.5M",
    isHot: false,
    isNew: false
  },
  {
    id: "lint-staged",
    name: "lint-staged",
    description: "Lint staged files",
    category: "code",
    tags: [
      "git",
      "lint",
      "staged"
    ],
    useCases: [
      "Use lint-staged for code tasks",
      "Integrate lint-staged into your workflow",
      "Automate with lint-staged"
    ],
    installCommand: "npx skills add okonet/lint-staged",
    githubUrl: "https://github.com/okonet/lint-staged",
    author: "okonet",
    downloads: "16.3M",
    isHot: false,
    isNew: false
  },
  {
    id: "nodemon",
    name: "nodemon",
    description: "Node.js auto-restart",
    category: "code",
    tags: [
      "node",
      "watch",
      "restart"
    ],
    useCases: [
      "Use nodemon for code tasks",
      "Integrate nodemon into your workflow",
      "Automate with nodemon"
    ],
    installCommand: "npx skills add remy/nodemon",
    githubUrl: "https://github.com/remy/nodemon",
    author: "remy",
    downloads: "32.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "pm2",
    name: "pm2",
    description: "PM2 process manager",
    category: "code",
    tags: [
      "pm2",
      "process",
      "manager"
    ],
    useCases: [
      "Use pm2 for code tasks",
      "Integrate pm2 into your workflow",
      "Automate with pm2"
    ],
    installCommand: "npx skills add pm2-hq/pm2",
    githubUrl: "https://github.com/pm2-hq/pm2",
    author: "pm2-hq",
    downloads: "24.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "forever",
    name: "forever",
    description: "Node.js daemon",
    category: "code",
    tags: [
      "node",
      "daemon",
      "process"
    ],
    useCases: [
      "Use forever for code tasks",
      "Integrate forever into your workflow",
      "Automate with forever"
    ],
    installCommand: "npx skills add foreverjs/forever",
    githubUrl: "https://github.com/foreverjs/forever",
    author: "foreverjs",
    downloads: "8.9M",
    isHot: false,
    isNew: false
  },
  {
    id: "concurrently",
    name: "concurrently",
    description: "Run commands concurrently",
    category: "code",
    tags: [
      "cli",
      "parallel",
      "run"
    ],
    useCases: [
      "Use concurrently for code tasks",
      "Integrate concurrently into your workflow",
      "Automate with concurrently"
    ],
    installCommand: "npx skills add open-cli-tools/concurrently",
    githubUrl: "https://github.com/open-cli-tools/concurrently",
    author: "open-cli-tools",
    downloads: "42.3M",
    isHot: false,
    isNew: false
  },
  {
    id: "cross-env",
    name: "cross-env",
    description: "Cross-platform env vars",
    category: "code",
    tags: [
      "env",
      "cross-platform",
      "cli"
    ],
    useCases: [
      "Use cross-env for code tasks",
      "Integrate cross-env into your workflow",
      "Automate with cross-env"
    ],
    installCommand: "npx skills add kentcdodds/cross-env",
    githubUrl: "https://github.com/kentcdodds/cross-env",
    author: "kentcdodds",
    downloads: "38.6M",
    isHot: false,
    isNew: false
  },
  {
    id: "tsx",
    name: "tsx",
    description: "TypeScript execute",
    category: "code",
    tags: [
      "tsx",
      "typescript",
      "execute"
    ],
    useCases: [
      "Use tsx for code tasks",
      "Integrate tsx into your workflow",
      "Automate with tsx"
    ],
    installCommand: "npx skills add esbuild-kit/tsx",
    githubUrl: "https://github.com/esbuild-kit/tsx",
    author: "esbuild-kit",
    downloads: "8.4M",
    isHot: false,
    isNew: false
  },
  {
    id: "tensorflow-js",
    name: "tensorflow-js",
    description: "TensorFlow.js ML library",
    category: "ai",
    tags: [
      "tensorflow",
      "ml",
      "ai"
    ],
    useCases: [
      "Use tensorflow-js for ai tasks",
      "Integrate tensorflow-js into your workflow",
      "Automate with tensorflow-js"
    ],
    installCommand: "npx skills add tensorflow/tensorflow-js",
    githubUrl: "https://github.com/tensorflow/tensorflow-js",
    author: "tensorflow",
    downloads: "5.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "onnx-runtime",
    name: "onnx-runtime",
    description: "ONNX Runtime inference",
    category: "ai",
    tags: [
      "onnx",
      "inference",
      "ml"
    ],
    useCases: [
      "Use onnx-runtime for ai tasks",
      "Integrate onnx-runtime into your workflow",
      "Automate with onnx-runtime"
    ],
    installCommand: "npx skills add microsoft/onnx-runtime",
    githubUrl: "https://github.com/microsoft/onnx-runtime",
    author: "microsoft",
    downloads: "3.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "transformers-js",
    name: "transformers-js",
    description: "Hugging Face Transformers",
    category: "ai",
    tags: [
      "transformers",
      "nlp",
      "huggingface"
    ],
    useCases: [
      "Use transformers-js for ai tasks",
      "Integrate transformers-js into your workflow",
      "Automate with transformers-js"
    ],
    installCommand: "npx skills add huggingface/transformers-js",
    githubUrl: "https://github.com/huggingface/transformers-js",
    author: "huggingface",
    downloads: "2.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "langchain",
    name: "langchain",
    description: "LangChain LLM framework",
    category: "ai",
    tags: [
      "langchain",
      "llm",
      "framework"
    ],
    useCases: [
      "Use langchain for ai tasks",
      "Integrate langchain into your workflow",
      "Automate with langchain"
    ],
    installCommand: "npx skills add langchain-ai/langchain",
    githubUrl: "https://github.com/langchain-ai/langchain",
    author: "langchain-ai",
    downloads: "4.5M",
    isHot: false,
    isNew: false
  },
  {
    id: "llamaindex",
    name: "llamaindex",
    description: "LlamaIndex RAG framework",
    category: "ai",
    tags: [
      "llamaindex",
      "rag",
      "retrieval"
    ],
    useCases: [
      "Use llamaindex for ai tasks",
      "Integrate llamaindex into your workflow",
      "Automate with llamaindex"
    ],
    installCommand: "npx skills add run-llama/llamaindex",
    githubUrl: "https://github.com/run-llama/llamaindex",
    author: "run-llama",
    downloads: "1.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "chromadb",
    name: "chromadb",
    description: "Chroma vector database",
    category: "ai",
    tags: [
      "chroma",
      "vector",
      "embeddings"
    ],
    useCases: [
      "Use chromadb for ai tasks",
      "Integrate chromadb into your workflow",
      "Automate with chromadb"
    ],
    installCommand: "npx skills add chromadb/chromadb",
    githubUrl: "https://github.com/chromadb/chromadb",
    author: "chromadb",
    downloads: "2.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "pinecone-client",
    name: "pinecone-client",
    description: "Pinecone vector DB",
    category: "ai",
    tags: [
      "pinecone",
      "vector",
      "search"
    ],
    useCases: [
      "Use pinecone-client for ai tasks",
      "Integrate pinecone-client into your workflow",
      "Automate with pinecone-client"
    ],
    installCommand: "npx skills add pinecone-io/pinecone-client",
    githubUrl: "https://github.com/pinecone-io/pinecone-client",
    author: "pinecone-io",
    downloads: "1.5M",
    isHot: false,
    isNew: false
  },
  {
    id: "weaviate-client",
    name: "weaviate-client",
    description: "Weaviate vector search",
    category: "ai",
    tags: [
      "weaviate",
      "vector",
      "search"
    ],
    useCases: [
      "Use weaviate-client for ai tasks",
      "Integrate weaviate-client into your workflow",
      "Automate with weaviate-client"
    ],
    installCommand: "npx skills add weaviate/weaviate-client",
    githubUrl: "https://github.com/weaviate/weaviate-client",
    author: "weaviate",
    downloads: "1.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "milvus-sdk",
    name: "milvus-sdk",
    description: "Milvus vector DB SDK",
    category: "ai",
    tags: [
      "milvus",
      "vector",
      "database"
    ],
    useCases: [
      "Use milvus-sdk for ai tasks",
      "Integrate milvus-sdk into your workflow",
      "Automate with milvus-sdk"
    ],
    installCommand: "npx skills add milvus-io/milvus-sdk",
    githubUrl: "https://github.com/milvus-io/milvus-sdk",
    author: "milvus-io",
    downloads: "0.9M",
    isHot: false,
    isNew: false
  },
  {
    id: "qdrant-client",
    name: "qdrant-client",
    description: "Qdrant vector DB",
    category: "ai",
    tags: [
      "qdrant",
      "vector",
      "search"
    ],
    useCases: [
      "Use qdrant-client for ai tasks",
      "Integrate qdrant-client into your workflow",
      "Automate with qdrant-client"
    ],
    installCommand: "npx skills add qdrant/qdrant-client",
    githubUrl: "https://github.com/qdrant/qdrant-client",
    author: "qdrant",
    downloads: "0.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "openai-functions",
    name: "openai-functions",
    description: "OpenAI function calling",
    category: "ai",
    tags: [
      "openai",
      "functions",
      "tools"
    ],
    useCases: [
      "Use openai-functions for ai tasks",
      "Integrate openai-functions into your workflow",
      "Automate with openai-functions"
    ],
    installCommand: "npx skills add openai/openai-functions",
    githubUrl: "https://github.com/openai/openai-functions",
    author: "openai",
    downloads: "3.4M",
    isHot: false,
    isNew: false
  },
  {
    id: "claude-api",
    name: "claude-api",
    description: "Anthropic Claude API",
    category: "ai",
    tags: [
      "claude",
      "anthropic",
      "api"
    ],
    useCases: [
      "Use claude-api for ai tasks",
      "Integrate claude-api into your workflow",
      "Automate with claude-api"
    ],
    installCommand: "npx skills add anthropics/claude-api",
    githubUrl: "https://github.com/anthropics/claude-api",
    author: "anthropics",
    downloads: "2.6M",
    isHot: false,
    isNew: false
  },
  {
    id: "cohere-ai",
    name: "cohere-ai",
    description: "Cohere AI text generation",
    category: "ai",
    tags: [
      "cohere",
      "nlp",
      "embeddings"
    ],
    useCases: [
      "Use cohere-ai for ai tasks",
      "Integrate cohere-ai into your workflow",
      "Automate with cohere-ai"
    ],
    installCommand: "npx skills add cohere-ai/cohere-ai",
    githubUrl: "https://github.com/cohere-ai/cohere-ai",
    author: "cohere-ai",
    downloads: "1.9M",
    isHot: false,
    isNew: false
  },
  {
    id: "replicate",
    name: "replicate",
    description: "Replicate AI models",
    category: "ai",
    tags: [
      "replicate",
      "models",
      "ai"
    ],
    useCases: [
      "Use replicate for ai tasks",
      "Integrate replicate into your workflow",
      "Automate with replicate"
    ],
    installCommand: "npx skills add replicate/replicate",
    githubUrl: "https://github.com/replicate/replicate",
    author: "replicate",
    downloads: "2.3M",
    isHot: false,
    isNew: false
  },
  {
    id: "huggingface-hub",
    name: "huggingface-hub",
    description: "Hugging Face Hub",
    category: "ai",
    tags: [
      "huggingface",
      "models",
      "hub"
    ],
    useCases: [
      "Use huggingface-hub for ai tasks",
      "Integrate huggingface-hub into your workflow",
      "Automate with huggingface-hub"
    ],
    installCommand: "npx skills add huggingface/huggingface-hub",
    githubUrl: "https://github.com/huggingface/huggingface-hub",
    author: "huggingface",
    downloads: "4.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "stable-diffusion",
    name: "stable-diffusion",
    description: "Stable Diffusion images",
    category: "ai",
    tags: [
      "stable-diffusion",
      "image",
      "ai"
    ],
    useCases: [
      "Use stable-diffusion for ai tasks",
      "Integrate stable-diffusion into your workflow",
      "Automate with stable-diffusion"
    ],
    installCommand: "npx skills add stability-ai/stable-diffusion",
    githubUrl: "https://github.com/stability-ai/stable-diffusion",
    author: "stability-ai",
    downloads: "3.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "midjourney-api",
    name: "midjourney-api",
    description: "Midjourney API client",
    category: "ai",
    tags: [
      "midjourney",
      "image",
      "api"
    ],
    useCases: [
      "Use midjourney-api for ai tasks",
      "Integrate midjourney-api into your workflow",
      "Automate with midjourney-api"
    ],
    installCommand: "npx skills add midjourney/midjourney-api",
    githubUrl: "https://github.com/midjourney/midjourney-api",
    author: "midjourney",
    downloads: "1.4M",
    isHot: false,
    isNew: false
  },
  {
    id: "comfyui-api",
    name: "comfyui-api",
    description: "ComfyUI workflow API",
    category: "ai",
    tags: [
      "comfyui",
      "workflow",
      "image"
    ],
    useCases: [
      "Use comfyui-api for ai tasks",
      "Integrate comfyui-api into your workflow",
      "Automate with comfyui-api"
    ],
    installCommand: "npx skills add comfyanonymous/comfyui-api",
    githubUrl: "https://github.com/comfyanonymous/comfyui-api",
    author: "comfyanonymous",
    downloads: "0.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "ollama-js",
    name: "ollama-js",
    description: "Ollama local LLM client",
    category: "ai",
    tags: [
      "ollama",
      "local",
      "llm"
    ],
    useCases: [
      "Use ollama-js for ai tasks",
      "Integrate ollama-js into your workflow",
      "Automate with ollama-js"
    ],
    installCommand: "npx skills add ollama/ollama-js",
    githubUrl: "https://github.com/ollama/ollama-js",
    author: "ollama",
    downloads: "2.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "lmstudio-sdk",
    name: "lmstudio-sdk",
    description: "LM Studio local SDK",
    category: "ai",
    tags: [
      "lmstudio",
      "local",
      "models"
    ],
    useCases: [
      "Use lmstudio-sdk for ai tasks",
      "Integrate lmstudio-sdk into your workflow",
      "Automate with lmstudio-sdk"
    ],
    installCommand: "npx skills add lmstudio-ai/lmstudio-sdk",
    githubUrl: "https://github.com/lmstudio-ai/lmstudio-sdk",
    author: "lmstudio-ai",
    downloads: "1.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "gpt4all",
    name: "gpt4all",
    description: "GPT4All local LLM",
    category: "ai",
    tags: [
      "gpt4all",
      "local",
      "llm"
    ],
    useCases: [
      "Use gpt4all for ai tasks",
      "Integrate gpt4all into your workflow",
      "Automate with gpt4all"
    ],
    installCommand: "npx skills add nomic-ai/gpt4all",
    githubUrl: "https://github.com/nomic-ai/gpt4all",
    author: "nomic-ai",
    downloads: "0.9M",
    isHot: false,
    isNew: false
  },
  {
    id: "jan-ai",
    name: "jan-ai",
    description: "Jan local AI assistant",
    category: "ai",
    tags: [
      "jan",
      "local",
      "assistant"
    ],
    useCases: [
      "Use jan-ai for ai tasks",
      "Integrate jan-ai into your workflow",
      "Automate with jan-ai"
    ],
    installCommand: "npx skills add janhq/jan-ai",
    githubUrl: "https://github.com/janhq/jan-ai",
    author: "janhq",
    downloads: "0.6M",
    isHot: false,
    isNew: false
  },
  {
    id: "anything-llm",
    name: "anything-llm",
    description: "AnythingLLM RAG platform",
    category: "ai",
    tags: [
      "anything-llm",
      "rag",
      "local"
    ],
    useCases: [
      "Use anything-llm for ai tasks",
      "Integrate anything-llm into your workflow",
      "Automate with anything-llm"
    ],
    installCommand: "npx skills add mintplex-labs/anything-llm",
    githubUrl: "https://github.com/mintplex-labs/anything-llm",
    author: "mintplex-labs",
    downloads: "0.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "dify-client",
    name: "dify-client",
    description: "Dify AI app platform",
    category: "ai",
    tags: [
      "dify",
      "app",
      "development"
    ],
    useCases: [
      "Use dify-client for ai tasks",
      "Integrate dify-client into your workflow",
      "Automate with dify-client"
    ],
    installCommand: "npx skills add langgenius/dify-client",
    githubUrl: "https://github.com/langgenius/dify-client",
    author: "langgenius",
    downloads: "1.3M",
    isHot: false,
    isNew: false
  },
  {
    id: "flowise-sdk",
    name: "flowise-sdk",
    description: "Flowise LLM workflows",
    category: "ai",
    tags: [
      "flowise",
      "workflow",
      "low-code"
    ],
    useCases: [
      "Use flowise-sdk for ai tasks",
      "Integrate flowise-sdk into your workflow",
      "Automate with flowise-sdk"
    ],
    installCommand: "npx skills add flowiseai/flowise-sdk",
    githubUrl: "https://github.com/flowiseai/flowise-sdk",
    author: "flowiseai",
    downloads: "0.9M",
    isHot: false,
    isNew: false
  },
  {
    id: "mongoose",
    name: "mongoose",
    description: "Mongoose MongoDB ODM",
    category: "database",
    tags: [
      "mongoose",
      "mongodb",
      "odm"
    ],
    useCases: [
      "Use mongoose for database tasks",
      "Integrate mongoose into your workflow",
      "Automate with mongoose"
    ],
    installCommand: "npx skills add automattic/mongoose",
    githubUrl: "https://github.com/automattic/mongoose",
    author: "automattic",
    downloads: "18.5M",
    isHot: false,
    isNew: false
  },
  {
    id: "sequelize",
    name: "sequelize",
    description: "Sequelize ORM",
    category: "database",
    tags: [
      "sequelize",
      "orm",
      "sql"
    ],
    useCases: [
      "Use sequelize for database tasks",
      "Integrate sequelize into your workflow",
      "Automate with sequelize"
    ],
    installCommand: "npx skills add sequelize/sequelize",
    githubUrl: "https://github.com/sequelize/sequelize",
    author: "sequelize",
    downloads: "12.3M",
    isHot: false,
    isNew: false
  },
  {
    id: "typeorm",
    name: "typeorm",
    description: "TypeORM TypeScript ORM",
    category: "database",
    tags: [
      "typeorm",
      "orm",
      "typescript"
    ],
    useCases: [
      "Use typeorm for database tasks",
      "Integrate typeorm into your workflow",
      "Automate with typeorm"
    ],
    installCommand: "npx skills add typeorm/typeorm",
    githubUrl: "https://github.com/typeorm/typeorm",
    author: "typeorm",
    downloads: "9.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "knex",
    name: "knex",
    description: "Knex.js SQL builder",
    category: "database",
    tags: [
      "knex",
      "sql",
      "query"
    ],
    useCases: [
      "Use knex for database tasks",
      "Integrate knex into your workflow",
      "Automate with knex"
    ],
    installCommand: "npx skills add knex/knex",
    githubUrl: "https://github.com/knex/knex",
    author: "knex",
    downloads: "8.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "drizzle-orm",
    name: "drizzle-orm",
    description: "Drizzle TypeScript ORM",
    category: "database",
    tags: [
      "drizzle",
      "orm",
      "typescript"
    ],
    useCases: [
      "Use drizzle-orm for database tasks",
      "Integrate drizzle-orm into your workflow",
      "Automate with drizzle-orm"
    ],
    installCommand: "npx skills add drizzle-team/drizzle-orm",
    githubUrl: "https://github.com/drizzle-team/drizzle-orm",
    author: "drizzle-team",
    downloads: "3.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "kysely",
    name: "kysely",
    description: "Kysely type-safe SQL",
    category: "database",
    tags: [
      "kysely",
      "sql",
      "typesafe"
    ],
    useCases: [
      "Use kysely for database tasks",
      "Integrate kysely into your workflow",
      "Automate with kysely"
    ],
    installCommand: "npx skills add kysely/kysely",
    githubUrl: "https://github.com/kysely/kysely",
    author: "kysely",
    downloads: "2.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "objection",
    name: "objection",
    description: "Objection.js ORM",
    category: "database",
    tags: [
      "objection",
      "orm",
      "sql"
    ],
    useCases: [
      "Use objection for database tasks",
      "Integrate objection into your workflow",
      "Automate with objection"
    ],
    installCommand: "npx skills add vincit/objection",
    githubUrl: "https://github.com/vincit/objection",
    author: "vincit",
    downloads: "1.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "bookshelf",
    name: "bookshelf",
    description: "Bookshelf.js ORM",
    category: "database",
    tags: [
      "bookshelf",
      "orm",
      "sql"
    ],
    useCases: [
      "Use bookshelf for database tasks",
      "Integrate bookshelf into your workflow",
      "Automate with bookshelf"
    ],
    installCommand: "npx skills add bookshelf/bookshelf",
    githubUrl: "https://github.com/bookshelf/bookshelf",
    author: "bookshelf",
    downloads: "2.4M",
    isHot: false,
    isNew: false
  },
  {
    id: "waterline",
    name: "waterline",
    description: "Waterline ORM adapter",
    category: "database",
    tags: [
      "waterline",
      "orm",
      "adapter"
    ],
    useCases: [
      "Use waterline for database tasks",
      "Integrate waterline into your workflow",
      "Automate with waterline"
    ],
    installCommand: "npx skills add balderdashy/waterline",
    githubUrl: "https://github.com/balderdashy/waterline",
    author: "balderdashy",
    downloads: "1.5M",
    isHot: false,
    isNew: false
  },
  {
    id: "massive-js",
    name: "massive-js",
    description: "Massive PostgreSQL",
    category: "database",
    tags: [
      "massive",
      "postgres",
      "data"
    ],
    useCases: [
      "Use massive-js for database tasks",
      "Integrate massive-js into your workflow",
      "Automate with massive-js"
    ],
    installCommand: "npx skills add massive-js/massive-js",
    githubUrl: "https://github.com/massive-js/massive-js",
    author: "massive-js",
    downloads: "0.9M",
    isHot: false,
    isNew: false
  },
  {
    id: "slonik",
    name: "slonik",
    description: "Slonik PostgreSQL",
    category: "database",
    tags: [
      "slonik",
      "postgres",
      "sql"
    ],
    useCases: [
      "Use slonik for database tasks",
      "Integrate slonik into your workflow",
      "Automate with slonik"
    ],
    installCommand: "npx skills add gajus/slonik",
    githubUrl: "https://github.com/gajus/slonik",
    author: "gajus",
    downloads: "1.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "pg-promise",
    name: "pg-promise",
    description: "pg-promise PostgreSQL",
    category: "database",
    tags: [
      "pg-promise",
      "postgres",
      "promise"
    ],
    useCases: [
      "Use pg-promise for database tasks",
      "Integrate pg-promise into your workflow",
      "Automate with pg-promise"
    ],
    installCommand: "npx skills add vitaly-t/pg-promise",
    githubUrl: "https://github.com/vitaly-t/pg-promise",
    author: "vitaly-t",
    downloads: "6.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "mysql2",
    name: "mysql2",
    description: "MySQL2 client",
    category: "database",
    tags: [
      "mysql",
      "database",
      "client"
    ],
    useCases: [
      "Use mysql2 for database tasks",
      "Integrate mysql2 into your workflow",
      "Automate with mysql2"
    ],
    installCommand: "npx skills add sidorares/mysql2",
    githubUrl: "https://github.com/sidorares/mysql2",
    author: "sidorares",
    downloads: "22.4M",
    isHot: false,
    isNew: false
  },
  {
    id: "ioredis",
    name: "ioredis",
    description: "IORedis client",
    category: "database",
    tags: [
      "ioredis",
      "redis",
      "cluster"
    ],
    useCases: [
      "Use ioredis for database tasks",
      "Integrate ioredis into your workflow",
      "Automate with ioredis"
    ],
    installCommand: "npx skills add luin/ioredis",
    githubUrl: "https://github.com/luin/ioredis",
    author: "luin",
    downloads: "15.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "cassandra-driver",
    name: "cassandra-driver",
    description: "Cassandra driver",
    category: "database",
    tags: [
      "cassandra",
      "nosql",
      "driver"
    ],
    useCases: [
      "Use cassandra-driver for database tasks",
      "Integrate cassandra-driver into your workflow",
      "Automate with cassandra-driver"
    ],
    installCommand: "npx skills add datastax/cassandra-driver",
    githubUrl: "https://github.com/datastax/cassandra-driver",
    author: "datastax",
    downloads: "2.3M",
    isHot: false,
    isNew: false
  },
  {
    id: "firebase-admin",
    name: "firebase-admin",
    description: "Firebase Admin SDK",
    category: "cloud",
    tags: [
      "firebase",
      "admin",
      "sdk"
    ],
    useCases: [
      "Use firebase-admin for cloud tasks",
      "Integrate firebase-admin into your workflow",
      "Automate with firebase-admin"
    ],
    installCommand: "npx skills add firebase/firebase-admin",
    githubUrl: "https://github.com/firebase/firebase-admin",
    author: "firebase",
    downloads: "14.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "firebase-functions",
    name: "firebase-functions",
    description: "Firebase Functions",
    category: "cloud",
    tags: [
      "firebase",
      "functions",
      "serverless"
    ],
    useCases: [
      "Use firebase-functions for cloud tasks",
      "Integrate firebase-functions into your workflow",
      "Automate with firebase-functions"
    ],
    installCommand: "npx skills add firebase/firebase-functions",
    githubUrl: "https://github.com/firebase/firebase-functions",
    author: "firebase",
    downloads: "11.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "aws-amplify",
    name: "aws-amplify",
    description: "AWS Amplify",
    category: "cloud",
    tags: [
      "amplify",
      "aws",
      "fullstack"
    ],
    useCases: [
      "Use aws-amplify for cloud tasks",
      "Integrate aws-amplify into your workflow",
      "Automate with aws-amplify"
    ],
    installCommand: "npx skills add aws-amplify/aws-amplify",
    githubUrl: "https://github.com/aws-amplify/aws-amplify",
    author: "aws-amplify",
    downloads: "8.5M",
    isHot: false,
    isNew: false
  },
  {
    id: "serverless",
    name: "serverless",
    description: "Serverless Framework",
    category: "cloud",
    tags: [
      "serverless",
      "framework",
      "deploy"
    ],
    useCases: [
      "Use serverless for cloud tasks",
      "Integrate serverless into your workflow",
      "Automate with serverless"
    ],
    installCommand: "npx skills add serverless/serverless",
    githubUrl: "https://github.com/serverless/serverless",
    author: "serverless",
    downloads: "12.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "pulumi",
    name: "pulumi",
    description: "Pulumi IaC",
    category: "cloud",
    tags: [
      "pulumi",
      "iac",
      "cloud"
    ],
    useCases: [
      "Use pulumi for cloud tasks",
      "Integrate pulumi into your workflow",
      "Automate with pulumi"
    ],
    installCommand: "npx skills add pulumi/pulumi",
    githubUrl: "https://github.com/pulumi/pulumi",
    author: "pulumi",
    downloads: "2.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "terraform-cdk",
    name: "terraform-cdk",
    description: "Terraform CDK",
    category: "cloud",
    tags: [
      "terraform",
      "cdk",
      "iac"
    ],
    useCases: [
      "Use terraform-cdk for cloud tasks",
      "Integrate terraform-cdk into your workflow",
      "Automate with terraform-cdk"
    ],
    installCommand: "npx skills add hashicorp/terraform-cdk",
    githubUrl: "https://github.com/hashicorp/terraform-cdk",
    author: "hashicorp",
    downloads: "1.9M",
    isHot: false,
    isNew: false
  },
  {
    id: "cdktf",
    name: "cdktf",
    description: "CDK for Terraform",
    category: "cloud",
    tags: [
      "cdktf",
      "terraform",
      "cdk"
    ],
    useCases: [
      "Use cdktf for cloud tasks",
      "Integrate cdktf into your workflow",
      "Automate with cdktf"
    ],
    installCommand: "npx skills add hashicorp/cdktf",
    githubUrl: "https://github.com/hashicorp/cdktf",
    author: "hashicorp",
    downloads: "0.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "netlify-cli",
    name: "netlify-cli",
    description: "Netlify CLI",
    category: "cloud",
    tags: [
      "netlify",
      "cli",
      "deploy"
    ],
    useCases: [
      "Use netlify-cli for cloud tasks",
      "Integrate netlify-cli into your workflow",
      "Automate with netlify-cli"
    ],
    installCommand: "npx skills add netlify/netlify-cli",
    githubUrl: "https://github.com/netlify/netlify-cli",
    author: "netlify",
    downloads: "6.4M",
    isHot: false,
    isNew: false
  },
  {
    id: "vercel-cli",
    name: "vercel-cli",
    description: "Vercel CLI",
    category: "cloud",
    tags: [
      "vercel",
      "cli",
      "deploy"
    ],
    useCases: [
      "Use vercel-cli for cloud tasks",
      "Integrate vercel-cli into your workflow",
      "Automate with vercel-cli"
    ],
    installCommand: "npx skills add vercel/vercel-cli",
    githubUrl: "https://github.com/vercel/vercel-cli",
    author: "vercel",
    downloads: "9.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "surge",
    name: "surge",
    description: "Surge.sh hosting",
    category: "cloud",
    tags: [
      "surge",
      "static",
      "hosting"
    ],
    useCases: [
      "Use surge for cloud tasks",
      "Integrate surge into your workflow",
      "Automate with surge"
    ],
    installCommand: "npx skills add sintaxi/surge",
    githubUrl: "https://github.com/sintaxi/surge",
    author: "sintaxi",
    downloads: "4.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "cloudflare-workers",
    name: "cloudflare-workers",
    description: "Cloudflare Workers",
    category: "cloud",
    tags: [
      "cloudflare",
      "workers",
      "edge"
    ],
    useCases: [
      "Use cloudflare-workers for cloud tasks",
      "Integrate cloudflare-workers into your workflow",
      "Automate with cloudflare-workers"
    ],
    installCommand: "npx skills add cloudflare/cloudflare-workers",
    githubUrl: "https://github.com/cloudflare/cloudflare-workers",
    author: "cloudflare",
    downloads: "5.6M",
    isHot: false,
    isNew: false
  },
  {
    id: "flyctl",
    name: "flyctl",
    description: "Fly.io CLI",
    category: "cloud",
    tags: [
      "fly",
      "deploy",
      "global"
    ],
    useCases: [
      "Use flyctl for cloud tasks",
      "Integrate flyctl into your workflow",
      "Automate with flyctl"
    ],
    installCommand: "npx skills add superfly/flyctl",
    githubUrl: "https://github.com/superfly/flyctl",
    author: "superfly",
    downloads: "2.4M",
    isHot: false,
    isNew: false
  },
  {
    id: "railway-cli",
    name: "railway-cli",
    description: "Railway CLI",
    category: "cloud",
    tags: [
      "railway",
      "deploy",
      "easy"
    ],
    useCases: [
      "Use railway-cli for cloud tasks",
      "Integrate railway-cli into your workflow",
      "Automate with railway-cli"
    ],
    installCommand: "npx skills add railway/railway-cli",
    githubUrl: "https://github.com/railway/railway-cli",
    author: "railway",
    downloads: "1.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "render-cli",
    name: "render-cli",
    description: "Render CLI",
    category: "cloud",
    tags: [
      "render",
      "deploy",
      "hosting"
    ],
    useCases: [
      "Use render-cli for cloud tasks",
      "Integrate render-cli into your workflow",
      "Automate with render-cli"
    ],
    installCommand: "npx skills add render/render-cli",
    githubUrl: "https://github.com/render/render-cli",
    author: "render",
    downloads: "1.3M",
    isHot: false,
    isNew: false
  },
  {
    id: "heroku-cli",
    name: "heroku-cli",
    description: "Heroku CLI",
    category: "cloud",
    tags: [
      "heroku",
      "deploy",
      "paas"
    ],
    useCases: [
      "Use heroku-cli for cloud tasks",
      "Integrate heroku-cli into your workflow",
      "Automate with heroku-cli"
    ],
    installCommand: "npx skills add heroku/heroku-cli",
    githubUrl: "https://github.com/heroku/heroku-cli",
    author: "heroku",
    downloads: "8.9M",
    isHot: false,
    isNew: false
  },
  {
    id: "digitalocean-cli",
    name: "digitalocean-cli",
    description: "DigitalOcean CLI",
    category: "cloud",
    tags: [
      "digitalocean",
      "cli",
      "vps"
    ],
    useCases: [
      "Use digitalocean-cli for cloud tasks",
      "Integrate digitalocean-cli into your workflow",
      "Automate with digitalocean-cli"
    ],
    installCommand: "npx skills add digitalocean/digitalocean-cli",
    githubUrl: "https://github.com/digitalocean/digitalocean-cli",
    author: "digitalocean",
    downloads: "2.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "linode-cli",
    name: "linode-cli",
    description: "Linode CLI",
    category: "cloud",
    tags: [
      "linode",
      "cli",
      "vps"
    ],
    useCases: [
      "Use linode-cli for cloud tasks",
      "Integrate linode-cli into your workflow",
      "Automate with linode-cli"
    ],
    installCommand: "npx skills add linode/linode-cli",
    githubUrl: "https://github.com/linode/linode-cli",
    author: "linode",
    downloads: "1.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "upstash-redis",
    name: "upstash-redis",
    description: "Upstash Redis",
    category: "cloud",
    tags: [
      "upstash",
      "redis",
      "serverless"
    ],
    useCases: [
      "Use upstash-redis for cloud tasks",
      "Integrate upstash-redis into your workflow",
      "Automate with upstash-redis"
    ],
    installCommand: "npx skills add upstash/upstash-redis",
    githubUrl: "https://github.com/upstash/upstash-redis",
    author: "upstash",
    downloads: "2.6M",
    isHot: false,
    isNew: false
  },
  {
    id: "planetscale",
    name: "planetscale",
    description: "PlanetScale DB",
    category: "cloud",
    tags: [
      "planetscale",
      "mysql",
      "database"
    ],
    useCases: [
      "Use planetscale for cloud tasks",
      "Integrate planetscale into your workflow",
      "Automate with planetscale"
    ],
    installCommand: "npx skills add planetscale/planetscale",
    githubUrl: "https://github.com/planetscale/planetscale",
    author: "planetscale",
    downloads: "1.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "supabase-js",
    name: "supabase-js",
    description: "Supabase JavaScript SDK",
    category: "cloud",
    tags: [
      "supabase",
      "postgres",
      "backend"
    ],
    useCases: [
      "Use supabase-js for cloud tasks",
      "Integrate supabase-js into your workflow",
      "Automate with supabase-js"
    ],
    installCommand: "npx skills add supabase/supabase-js",
    githubUrl: "https://github.com/supabase/supabase-js",
    author: "supabase",
    downloads: "6.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "mocha",
    name: "mocha",
    description: "Mocha test framework",
    category: "testing",
    tags: [
      "mocha",
      "testing",
      "bdd"
    ],
    useCases: [
      "Use mocha for testing tasks",
      "Integrate mocha into your workflow",
      "Automate with mocha"
    ],
    installCommand: "npx skills add mochajs/mocha",
    githubUrl: "https://github.com/mochajs/mocha",
    author: "mochajs",
    downloads: "18.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "chai",
    name: "chai",
    description: "Chai assertion library",
    category: "testing",
    tags: [
      "chai",
      "assertion",
      "testing"
    ],
    useCases: [
      "Use chai for testing tasks",
      "Integrate chai into your workflow",
      "Automate with chai"
    ],
    installCommand: "npx skills add chaijs/chai",
    githubUrl: "https://github.com/chaijs/chai",
    author: "chaijs",
    downloads: "16.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "sinon",
    name: "sinon",
    description: "Sinon.js test doubles",
    category: "testing",
    tags: [
      "sinon",
      "mock",
      "stub"
    ],
    useCases: [
      "Use sinon for testing tasks",
      "Integrate sinon into your workflow",
      "Automate with sinon"
    ],
    installCommand: "npx skills add sinonjs/sinon",
    githubUrl: "https://github.com/sinonjs/sinon",
    author: "sinonjs",
    downloads: "14.5M",
    isHot: false,
    isNew: false
  },
  {
    id: "ava",
    name: "ava",
    description: "Ava test runner",
    category: "testing",
    tags: [
      "ava",
      "testing",
      "concurrent"
    ],
    useCases: [
      "Use ava for testing tasks",
      "Integrate ava into your workflow",
      "Automate with ava"
    ],
    installCommand: "npx skills add avajs/ava",
    githubUrl: "https://github.com/avajs/ava",
    author: "avajs",
    downloads: "5.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "tap",
    name: "tap",
    description: "TAP test framework",
    category: "testing",
    tags: [
      "tap",
      "testing",
      "protocol"
    ],
    useCases: [
      "Use tap for testing tasks",
      "Integrate tap into your workflow",
      "Automate with tap"
    ],
    installCommand: "npx skills add tapjs/tap",
    githubUrl: "https://github.com/tapjs/tap",
    author: "tapjs",
    downloads: "4.3M",
    isHot: false,
    isNew: false
  },
  {
    id: "jasmine",
    name: "jasmine",
    description: "Jasmine BDD testing",
    category: "testing",
    tags: [
      "jasmine",
      "bdd",
      "testing"
    ],
    useCases: [
      "Use jasmine for testing tasks",
      "Integrate jasmine into your workflow",
      "Automate with jasmine"
    ],
    installCommand: "npx skills add jasmine/jasmine",
    githubUrl: "https://github.com/jasmine/jasmine",
    author: "jasmine",
    downloads: "7.9M",
    isHot: false,
    isNew: false
  },
  {
    id: "qunit",
    name: "qunit",
    description: "QUnit unit testing",
    category: "testing",
    tags: [
      "qunit",
      "unit",
      "testing"
    ],
    useCases: [
      "Use qunit for testing tasks",
      "Integrate qunit into your workflow",
      "Automate with qunit"
    ],
    installCommand: "npx skills add qunitjs/qunit",
    githubUrl: "https://github.com/qunitjs/qunit",
    author: "qunitjs",
    downloads: "3.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "vitest",
    name: "vitest",
    description: "Vitest unit testing",
    category: "testing",
    tags: [
      "vitest",
      "vite",
      "testing"
    ],
    useCases: [
      "Use vitest for testing tasks",
      "Integrate vitest into your workflow",
      "Automate with vitest"
    ],
    installCommand: "npx skills add vitest-dev/vitest",
    githubUrl: "https://github.com/vitest-dev/vitest",
    author: "vitest-dev",
    downloads: "8.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "karma",
    name: "karma",
    description: "Karma test runner",
    category: "testing",
    tags: [
      "karma",
      "browser",
      "testing"
    ],
    useCases: [
      "Use karma for testing tasks",
      "Integrate karma into your workflow",
      "Automate with karma"
    ],
    installCommand: "npx skills add karma-runner/karma",
    githubUrl: "https://github.com/karma-runner/karma",
    author: "karma-runner",
    downloads: "9.4M",
    isHot: false,
    isNew: false
  },
  {
    id: "nightwatch",
    name: "nightwatch",
    description: "Nightwatch E2E testing",
    category: "testing",
    tags: [
      "nightwatch",
      "e2e",
      "selenium"
    ],
    useCases: [
      "Use nightwatch for testing tasks",
      "Integrate nightwatch into your workflow",
      "Automate with nightwatch"
    ],
    installCommand: "npx skills add nightwatchjs/nightwatch",
    githubUrl: "https://github.com/nightwatchjs/nightwatch",
    author: "nightwatchjs",
    downloads: "2.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "webdriverio",
    name: "webdriverio",
    description: "WebdriverIO automation",
    category: "testing",
    tags: [
      "webdriverio",
      "automation",
      "testing"
    ],
    useCases: [
      "Use webdriverio for testing tasks",
      "Integrate webdriverio into your workflow",
      "Automate with webdriverio"
    ],
    installCommand: "npx skills add webdriverio/webdriverio",
    githubUrl: "https://github.com/webdriverio/webdriverio",
    author: "webdriverio",
    downloads: "4.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "testcafe",
    name: "testcafe",
    description: "TestCafe cross-browser",
    category: "testing",
    tags: [
      "testcafe",
      "cross-browser",
      "testing"
    ],
    useCases: [
      "Use testcafe for testing tasks",
      "Integrate testcafe into your workflow",
      "Automate with testcafe"
    ],
    installCommand: "npx skills add devexpress/testcafe",
    githubUrl: "https://github.com/devexpress/testcafe",
    author: "devexpress",
    downloads: "3.5M",
    isHot: false,
    isNew: false
  },
  {
    id: "codeceptjs",
    name: "codeceptjs",
    description: "CodeceptJS E2E testing",
    category: "testing",
    tags: [
      "codeceptjs",
      "e2e",
      "bdd"
    ],
    useCases: [
      "Use codeceptjs for testing tasks",
      "Integrate codeceptjs into your workflow",
      "Automate with codeceptjs"
    ],
    installCommand: "npx skills add codeception/codeceptjs",
    githubUrl: "https://github.com/codeception/codeceptjs",
    author: "codeception",
    downloads: "2.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "supertest",
    name: "supertest",
    description: "SuperTest HTTP assertions",
    category: "testing",
    tags: [
      "supertest",
      "http",
      "api"
    ],
    useCases: [
      "Use supertest for testing tasks",
      "Integrate supertest into your workflow",
      "Automate with supertest"
    ],
    installCommand: "npx skills add visionmedia/supertest",
    githubUrl: "https://github.com/visionmedia/supertest",
    author: "visionmedia",
    downloads: "11.6M",
    isHot: false,
    isNew: false
  },
  {
    id: "nock",
    name: "nock",
    description: "Nock HTTP mocking",
    category: "testing",
    tags: [
      "nock",
      "mock",
      "http"
    ],
    useCases: [
      "Use nock for testing tasks",
      "Integrate nock into your workflow",
      "Automate with nock"
    ],
    installCommand: "npx skills add nock/nock",
    githubUrl: "https://github.com/nock/nock",
    author: "nock",
    downloads: "13.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "docker-compose",
    name: "docker-compose",
    description: "Docker Compose",
    category: "devops",
    tags: [
      "docker",
      "compose",
      "orchestration"
    ],
    useCases: [
      "Use docker-compose for devops tasks",
      "Integrate docker-compose into your workflow",
      "Automate with docker-compose"
    ],
    installCommand: "npx skills add docker/docker-compose",
    githubUrl: "https://github.com/docker/docker-compose",
    author: "docker",
    downloads: "15.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "kubernetes-client",
    name: "kubernetes-client",
    description: "Kubernetes client",
    category: "devops",
    tags: [
      "kubernetes",
      "k8s",
      "client"
    ],
    useCases: [
      "Use kubernetes-client for devops tasks",
      "Integrate kubernetes-client into your workflow",
      "Automate with kubernetes-client"
    ],
    installCommand: "npx skills add kubernetes-client/kubernetes-client",
    githubUrl: "https://github.com/kubernetes-client/kubernetes-client",
    author: "kubernetes-client",
    downloads: "6.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "helm",
    name: "helm",
    description: "Helm package manager",
    category: "devops",
    tags: [
      "helm",
      "kubernetes",
      "package"
    ],
    useCases: [
      "Use helm for devops tasks",
      "Integrate helm into your workflow",
      "Automate with helm"
    ],
    installCommand: "npx skills add helm/helm",
    githubUrl: "https://github.com/helm/helm",
    author: "helm",
    downloads: "3.4M",
    isHot: false,
    isNew: false
  },
  {
    id: "ansible",
    name: "ansible",
    description: "Ansible automation",
    category: "devops",
    tags: [
      "ansible",
      "automation",
      "devops"
    ],
    useCases: [
      "Use ansible for devops tasks",
      "Integrate ansible into your workflow",
      "Automate with ansible"
    ],
    installCommand: "npx skills add ansible/ansible",
    githubUrl: "https://github.com/ansible/ansible",
    author: "ansible",
    downloads: "4.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "jenkins",
    name: "jenkins",
    description: "Jenkins CI/CD",
    category: "devops",
    tags: [
      "jenkins",
      "ci-cd",
      "automation"
    ],
    useCases: [
      "Use jenkins for devops tasks",
      "Integrate jenkins into your workflow",
      "Automate with jenkins"
    ],
    installCommand: "npx skills add jenkins/jenkins",
    githubUrl: "https://github.com/jenkins/jenkins",
    author: "jenkins",
    downloads: "5.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "gitlab-ci",
    name: "gitlab-ci",
    description: "GitLab CI/CD",
    category: "devops",
    tags: [
      "gitlab",
      "ci-cd",
      "automation"
    ],
    useCases: [
      "Use gitlab-ci for devops tasks",
      "Integrate gitlab-ci into your workflow",
      "Automate with gitlab-ci"
    ],
    installCommand: "npx skills add gitlab/gitlab-ci",
    githubUrl: "https://github.com/gitlab/gitlab-ci",
    author: "gitlab",
    downloads: "7.3M",
    isHot: false,
    isNew: false
  },
  {
    id: "circleci",
    name: "circleci",
    description: "CircleCI",
    category: "devops",
    tags: [
      "circleci",
      "ci-cd",
      "automation"
    ],
    useCases: [
      "Use circleci for devops tasks",
      "Integrate circleci into your workflow",
      "Automate with circleci"
    ],
    installCommand: "npx skills add circleci/circleci",
    githubUrl: "https://github.com/circleci/circleci",
    author: "circleci",
    downloads: "4.8M",
    isHot: false,
    isNew: false
  },
  {
    id: "travis-ci",
    name: "travis-ci",
    description: "Travis CI",
    category: "devops",
    tags: [
      "travis",
      "ci-cd",
      "automation"
    ],
    useCases: [
      "Use travis-ci for devops tasks",
      "Integrate travis-ci into your workflow",
      "Automate with travis-ci"
    ],
    installCommand: "npx skills add travis-ci/travis-ci",
    githubUrl: "https://github.com/travis-ci/travis-ci",
    author: "travis-ci",
    downloads: "6.2M",
    isHot: false,
    isNew: false
  },
  {
    id: "github-actions-toolkit",
    name: "github-actions-toolkit",
    description: "GitHub Actions toolkit",
    category: "devops",
    tags: [
      "github-actions",
      "toolkit",
      "ci-cd"
    ],
    useCases: [
      "Use github-actions-toolkit for devops tasks",
      "Integrate github-actions-toolkit into your workflow",
      "Automate with github-actions-toolkit"
    ],
    installCommand: "npx skills add actions/github-actions-toolkit",
    githubUrl: "https://github.com/actions/github-actions-toolkit",
    author: "actions",
    downloads: "8.9M",
    isHot: false,
    isNew: false
  },
  {
    id: "pulumi-aws",
    name: "pulumi-aws",
    description: "Pulumi AWS provider",
    category: "devops",
    tags: [
      "pulumi",
      "aws",
      "iac"
    ],
    useCases: [
      "Use pulumi-aws for devops tasks",
      "Integrate pulumi-aws into your workflow",
      "Automate with pulumi-aws"
    ],
    installCommand: "npx skills add pulumi/pulumi-aws",
    githubUrl: "https://github.com/pulumi/pulumi-aws",
    author: "pulumi",
    downloads: "2.1M",
    isHot: false,
    isNew: false
  },
  {
    id: "cdktf-aws",
    name: "cdktf-aws",
    description: "CDKTF AWS provider",
    category: "devops",
    tags: [
      "cdktf",
      "aws",
      "terraform"
    ],
    useCases: [
      "Use cdktf-aws for devops tasks",
      "Integrate cdktf-aws into your workflow",
      "Automate with cdktf-aws"
    ],
    installCommand: "npx skills add hashicorp/cdktf-aws",
    githubUrl: "https://github.com/hashicorp/cdktf-aws",
    author: "hashicorp",
    downloads: "1.4M",
    isHot: false,
    isNew: false
  },
  {
    id: "terraform-aws",
    name: "terraform-aws",
    description: "Terraform AWS modules",
    category: "devops",
    tags: [
      "terraform",
      "aws",
      "modules"
    ],
    useCases: [
      "Use terraform-aws for devops tasks",
      "Integrate terraform-aws into your workflow",
      "Automate with terraform-aws"
    ],
    installCommand: "npx skills add terraform-aws-modules/terraform-aws",
    githubUrl: "https://github.com/terraform-aws-modules/terraform-aws",
    author: "terraform-aws-modules",
    downloads: "5.7M",
    isHot: false,
    isNew: false
  },
  {
    id: "vagrant",
    name: "vagrant",
    description: "Vagrant VM manager",
    category: "devops",
    tags: [
      "vagrant",
      "vm",
      "development"
    ],
    useCases: [
      "Use vagrant for devops tasks",
      "Integrate vagrant into your workflow",
      "Automate with vagrant"
    ],
    installCommand: "npx skills add hashicorp/vagrant",
    githubUrl: "https://github.com/hashicorp/vagrant",
    author: "hashicorp",
    downloads: "3.9M",
    isHot: false,
    isNew: true
  },
  {
    id: "packer",
    name: "packer",
    description: "Packer image builder",
    category: "devops",
    tags: [
      "packer",
      "image",
      "build"
    ],
    useCases: [
      "Use packer for devops tasks",
      "Integrate packer into your workflow",
      "Automate with packer"
    ],
    installCommand: "npx skills add hashicorp/packer",
    githubUrl: "https://github.com/hashicorp/packer",
    author: "hashicorp",
    downloads: "2.8M",
    isHot: false,
    isNew: true
  },
  {
    id: "consul",
    name: "consul",
    description: "Consul service discovery",
    category: "devops",
    tags: [
      "consul",
      "service-discovery",
      "mesh"
    ],
    useCases: [
      "Use consul for devops tasks",
      "Integrate consul into your workflow",
      "Automate with consul"
    ],
    installCommand: "npx skills add hashicorp/consul",
    githubUrl: "https://github.com/hashicorp/consul",
    author: "hashicorp",
    downloads: "4.1M",
    isHot: false,
    isNew: true
  },
  {
    id: "socket-io",
    name: "socket-io",
    description: "Socket.IO realtime",
    category: "communication",
    tags: [
      "socket.io",
      "websocket",
      "realtime"
    ],
    useCases: [
      "Use socket-io for communication tasks",
      "Integrate socket-io into your workflow",
      "Automate with socket-io"
    ],
    installCommand: "npx skills add socketio/socket-io",
    githubUrl: "https://github.com/socketio/socket-io",
    author: "socketio",
    downloads: "25.3M",
    isHot: false,
    isNew: true
  },
  {
    id: "ws",
    name: "ws",
    description: "WS WebSocket library",
    category: "communication",
    tags: [
      "ws",
      "websocket",
      "library"
    ],
    useCases: [
      "Use ws for communication tasks",
      "Integrate ws into your workflow",
      "Automate with ws"
    ],
    installCommand: "npx skills add websockets/ws",
    githubUrl: "https://github.com/websockets/ws",
    author: "websockets",
    downloads: "42.1M",
    isHot: false,
    isNew: true
  },
  {
    id: "mqtt",
    name: "mqtt",
    description: "MQTT messaging",
    category: "communication",
    tags: [
      "mqtt",
      "iot",
      "messaging"
    ],
    useCases: [
      "Use mqtt for communication tasks",
      "Integrate mqtt into your workflow",
      "Automate with mqtt"
    ],
    installCommand: "npx skills add mqttjs/mqtt",
    githubUrl: "https://github.com/mqttjs/mqtt",
    author: "mqttjs",
    downloads: "8.7M",
    isHot: false,
    isNew: true
  },
  {
    id: "amqplib",
    name: "amqplib",
    description: "AMQP message queue",
    category: "communication",
    tags: [
      "amqp",
      "rabbitmq",
      "queue"
    ],
    useCases: [
      "Use amqplib for communication tasks",
      "Integrate amqplib into your workflow",
      "Automate with amqplib"
    ],
    installCommand: "npx skills add amqp-node/amqplib",
    githubUrl: "https://github.com/amqp-node/amqplib",
    author: "amqp-node",
    downloads: "12.4M",
    isHot: false,
    isNew: true
  },
  {
    id: "bull",
    name: "bull",
    description: "Bull Redis queue",
    category: "communication",
    tags: [
      "bull",
      "redis",
      "queue"
    ],
    useCases: [
      "Use bull for communication tasks",
      "Integrate bull into your workflow",
      "Automate with bull"
    ],
    installCommand: "npx skills add optimalbits/bull",
    githubUrl: "https://github.com/optimalbits/bull",
    author: "optimalbits",
    downloads: "7.8M",
    isHot: false,
    isNew: true
  },
  {
    id: "bullmq",
    name: "bullmq",
    description: "BullMQ queue",
    category: "communication",
    tags: [
      "bullmq",
      "redis",
      "queue"
    ],
    useCases: [
      "Use bullmq for communication tasks",
      "Integrate bullmq into your workflow",
      "Automate with bullmq"
    ],
    installCommand: "npx skills add taskforcesh/bullmq",
    githubUrl: "https://github.com/taskforcesh/bullmq",
    author: "taskforcesh",
    downloads: "5.2M",
    isHot: false,
    isNew: true
  },
  {
    id: "kue",
    name: "kue",
    description: "Kue Redis queue",
    category: "communication",
    tags: [
      "kue",
      "redis",
      "queue"
    ],
    useCases: [
      "Use kue for communication tasks",
      "Integrate kue into your workflow",
      "Automate with kue"
    ],
    installCommand: "npx skills add automattic/kue",
    githubUrl: "https://github.com/automattic/kue",
    author: "automattic",
    downloads: "4.1M",
    isHot: false,
    isNew: true
  },
  {
    id: "bee-queue",
    name: "bee-queue",
    description: "Bee Queue jobs",
    category: "communication",
    tags: [
      "bee-queue",
      "redis",
      "jobs"
    ],
    useCases: [
      "Use bee-queue for communication tasks",
      "Integrate bee-queue into your workflow",
      "Automate with bee-queue"
    ],
    installCommand: "npx skills add bee-queue/bee-queue",
    githubUrl: "https://github.com/bee-queue/bee-queue",
    author: "bee-queue",
    downloads: "2.9M",
    isHot: false,
    isNew: true
  },
  {
    id: "agenda",
    name: "agenda",
    description: "Agenda scheduler",
    category: "communication",
    tags: [
      "agenda",
      "mongodb",
      "scheduler"
    ],
    useCases: [
      "Use agenda for communication tasks",
      "Integrate agenda into your workflow",
      "Automate with agenda"
    ],
    installCommand: "npx skills add agenda/agenda",
    githubUrl: "https://github.com/agenda/agenda",
    author: "agenda",
    downloads: "6.3M",
    isHot: false,
    isNew: true
  },
  {
    id: "node-cron",
    name: "node-cron",
    description: "Node Cron jobs",
    category: "communication",
    tags: [
      "cron",
      "schedule",
      "jobs"
    ],
    useCases: [
      "Use node-cron for communication tasks",
      "Integrate node-cron into your workflow",
      "Automate with node-cron"
    ],
    installCommand: "npx skills add node-cron/node-cron",
    githubUrl: "https://github.com/node-cron/node-cron",
    author: "node-cron",
    downloads: "11.5M",
    isHot: false,
    isNew: true
  },
  {
    id: "later",
    name: "later",
    description: "Later.js schedule",
    category: "communication",
    tags: [
      "later",
      "cron",
      "schedule"
    ],
    useCases: [
      "Use later for communication tasks",
      "Integrate later into your workflow",
      "Automate with later"
    ],
    installCommand: "npx skills add bunkat/later",
    githubUrl: "https://github.com/bunkat/later",
    author: "bunkat",
    downloads: "3.7M",
    isHot: false,
    isNew: true
  },
  {
    id: "node-schedule",
    name: "node-schedule",
    description: "Node Schedule",
    category: "communication",
    tags: [
      "schedule",
      "cron",
      "jobs"
    ],
    useCases: [
      "Use node-schedule for communication tasks",
      "Integrate node-schedule into your workflow",
      "Automate with node-schedule"
    ],
    installCommand: "npx skills add node-schedule/node-schedule",
    githubUrl: "https://github.com/node-schedule/node-schedule",
    author: "node-schedule",
    downloads: "9.8M",
    isHot: false,
    isNew: true
  },
  {
    id: "mathjs",
    name: "mathjs",
    description: "Math.js math library",
    category: "data",
    tags: [
      "math",
      "calculation",
      "library"
    ],
    useCases: [
      "Use mathjs for data tasks",
      "Integrate mathjs into your workflow",
      "Automate with mathjs"
    ],
    installCommand: "npx skills add josdejong/mathjs",
    githubUrl: "https://github.com/josdejong/mathjs",
    author: "josdejong",
    downloads: "8.9M",
    isHot: false,
    isNew: true
  },
  {
    id: "simple-statistics",
    name: "simple-statistics",
    description: "Simple Statistics",
    category: "data",
    tags: [
      "statistics",
      "math",
      "analysis"
    ],
    useCases: [
      "Use simple-statistics for data tasks",
      "Integrate simple-statistics into your workflow",
      "Automate with simple-statistics"
    ],
    installCommand: "npx skills add simple-statistics/simple-statistics",
    githubUrl: "https://github.com/simple-statistics/simple-statistics",
    author: "simple-statistics",
    downloads: "4.2M",
    isHot: false,
    isNew: true
  },
  {
    id: "mljs",
    name: "mljs",
    description: "ML.js machine learning",
    category: "data",
    tags: [
      "ml",
      "machine-learning",
      "algorithms"
    ],
    useCases: [
      "Use mljs for data tasks",
      "Integrate mljs into your workflow",
      "Automate with mljs"
    ],
    installCommand: "npx skills add mljs/mljs",
    githubUrl: "https://github.com/mljs/mljs",
    author: "mljs",
    downloads: "3.1M",
    isHot: false,
    isNew: true
  },
  {
    id: "brain-js",
    name: "brain-js",
    description: "Brain.js neural networks",
    category: "data",
    tags: [
      "brain",
      "neural-network",
      "ml"
    ],
    useCases: [
      "Use brain-js for data tasks",
      "Integrate brain-js into your workflow",
      "Automate with brain-js"
    ],
    installCommand: "npx skills add brainjs/brain-js",
    githubUrl: "https://github.com/brainjs/brain-js",
    author: "brainjs",
    downloads: "5.7M",
    isHot: false,
    isNew: true
  },
  {
    id: "synaptic",
    name: "synaptic",
    description: "Synaptic neural networks",
    category: "data",
    tags: [
      "synaptic",
      "neural-network",
      "ml"
    ],
    useCases: [
      "Use synaptic for data tasks",
      "Integrate synaptic into your workflow",
      "Automate with synaptic"
    ],
    installCommand: "npx skills add cazala/synaptic",
    githubUrl: "https://github.com/cazala/synaptic",
    author: "cazala",
    downloads: "2.4M",
    isHot: false,
    isNew: true
  },
  {
    id: "natural",
    name: "natural",
    description: "Natural NLP library",
    category: "data",
    tags: [
      "natural",
      "nlp",
      "text"
    ],
    useCases: [
      "Use natural for data tasks",
      "Integrate natural into your workflow",
      "Automate with natural"
    ],
    installCommand: "npx skills add naturalnode/natural",
    githubUrl: "https://github.com/naturalnode/natural",
    author: "naturalnode",
    downloads: "6.8M",
    isHot: false,
    isNew: true
  },
  {
    id: "compromise",
    name: "compromise",
    description: "Compromise NLP",
    category: "data",
    tags: [
      "compromise",
      "nlp",
      "parsing"
    ],
    useCases: [
      "Use compromise for data tasks",
      "Integrate compromise into your workflow",
      "Automate with compromise"
    ],
    installCommand: "npx skills add spencermountain/compromise",
    githubUrl: "https://github.com/spencermountain/compromise",
    author: "spencermountain",
    downloads: "3.9M",
    isHot: false,
    isNew: true
  },
  {
    id: "pos",
    name: "pos",
    description: "POS tagging",
    category: "data",
    tags: [
      "pos",
      "tagging",
      "nlp"
    ],
    useCases: [
      "Use pos for data tasks",
      "Integrate pos into your workflow",
      "Automate with pos"
    ],
    installCommand: "npx skills add dariusk/pos",
    githubUrl: "https://github.com/dariusk/pos",
    author: "dariusk",
    downloads: "2.1M",
    isHot: false,
    isNew: true
  },
  {
    id: "sentiment",
    name: "sentiment",
    description: "Sentiment analysis",
    category: "data",
    tags: [
      "sentiment",
      "analysis",
      "nlp"
    ],
    useCases: [
      "Use sentiment for data tasks",
      "Integrate sentiment into your workflow",
      "Automate with sentiment"
    ],
    installCommand: "npx skills add thisandagain/sentiment",
    githubUrl: "https://github.com/thisandagain/sentiment",
    author: "thisandagain",
    downloads: "5.3M",
    isHot: false,
    isNew: true
  },
  {
    id: "csv-parser",
    name: "csv-parser",
    description: "CSV parser",
    category: "data",
    tags: [
      "csv",
      "parse",
      "data"
    ],
    useCases: [
      "Use csv-parser for data tasks",
      "Integrate csv-parser into your workflow",
      "Automate with csv-parser"
    ],
    installCommand: "npx skills add mafintosh/csv-parser",
    githubUrl: "https://github.com/mafintosh/csv-parser",
    author: "mafintosh",
    downloads: "18.7M",
    isHot: false,
    isNew: true
  },
  {
    id: "xlsx",
    name: "xlsx",
    description: "XLSX Excel read/write",
    category: "data",
    tags: [
      "xlsx",
      "excel",
      "spreadsheet"
    ],
    useCases: [
      "Use xlsx for data tasks",
      "Integrate xlsx into your workflow",
      "Automate with xlsx"
    ],
    installCommand: "npx skills add sheetjs/xlsx",
    githubUrl: "https://github.com/sheetjs/xlsx",
    author: "sheetjs",
    downloads: "22.4M",
    isHot: false,
    isNew: true
  },
  {
    id: "papaparse",
    name: "papaparse",
    description: "PapaParse CSV",
    category: "data",
    tags: [
      "papaparse",
      "csv",
      "parse"
    ],
    useCases: [
      "Use papaparse for data tasks",
      "Integrate papaparse into your workflow",
      "Automate with papaparse"
    ],
    installCommand: "npx skills add mholt/papaparse",
    githubUrl: "https://github.com/mholt/papaparse",
    author: "mholt",
    downloads: "14.2M",
    isHot: false,
    isNew: true
  },
  {
    id: "fast-csv",
    name: "fast-csv",
    description: "Fast CSV parser",
    category: "data",
    tags: [
      "fast-csv",
      "csv",
      "stream"
    ],
    useCases: [
      "Use fast-csv for data tasks",
      "Integrate fast-csv into your workflow",
      "Automate with fast-csv"
    ],
    installCommand: "npx skills add c2fo/fast-csv",
    githubUrl: "https://github.com/c2fo/fast-csv",
    author: "c2fo",
    downloads: "9.1M",
    isHot: false,
    isNew: true
  },
  {
    id: "json2csv",
    name: "json2csv",
    description: "JSON to CSV",
    category: "data",
    tags: [
      "json2csv",
      "convert",
      "csv"
    ],
    useCases: [
      "Use json2csv for data tasks",
      "Integrate json2csv into your workflow",
      "Automate with json2csv"
    ],
    installCommand: "npx skills add zemirco/json2csv",
    githubUrl: "https://github.com/zemirco/json2csv",
    author: "zemirco",
    downloads: "7.6M",
    isHot: false,
    isNew: true
  },
  {
    id: "passport",
    name: "passport",
    description: "Passport authentication",
    category: "security",
    tags: [
      "passport",
      "auth",
      "authentication"
    ],
    useCases: [
      "Use passport for security tasks",
      "Integrate passport into your workflow",
      "Automate with passport"
    ],
    installCommand: "npx skills add jaredhanson/passport",
    githubUrl: "https://github.com/jaredhanson/passport",
    author: "jaredhanson",
    downloads: "16.8M",
    isHot: false,
    isNew: true
  },
  {
    id: "jwt-simple",
    name: "jwt-simple",
    description: "JWT tokens simple",
    category: "security",
    tags: [
      "jwt",
      "token",
      "auth"
    ],
    useCases: [
      "Use jwt-simple for security tasks",
      "Integrate jwt-simple into your workflow",
      "Automate with jwt-simple"
    ],
    installCommand: "npx skills add auth0/jwt-simple",
    githubUrl: "https://github.com/auth0/jwt-simple",
    author: "auth0",
    downloads: "28.5M",
    isHot: false,
    isNew: true
  },
  {
    id: "bcryptjs",
    name: "bcryptjs",
    description: "BCrypt password hash",
    category: "security",
    tags: [
      "bcrypt",
      "hash",
      "password"
    ],
    useCases: [
      "Use bcryptjs for security tasks",
      "Integrate bcryptjs into your workflow",
      "Automate with bcryptjs"
    ],
    installCommand: "npx skills add dcodeio/bcryptjs",
    githubUrl: "https://github.com/dcodeio/bcryptjs",
    author: "dcodeio",
    downloads: "24.3M",
    isHot: false,
    isNew: true
  },
  {
    id: "crypto-js",
    name: "crypto-js",
    description: "CryptoJS encryption",
    category: "security",
    tags: [
      "crypto",
      "encryption",
      "security"
    ],
    useCases: [
      "Use crypto-js for security tasks",
      "Integrate crypto-js into your workflow",
      "Automate with crypto-js"
    ],
    installCommand: "npx skills add brix/crypto-js",
    githubUrl: "https://github.com/brix/crypto-js",
    author: "brix",
    downloads: "18.9M",
    isHot: false,
    isNew: true
  },
  {
    id: "node-rsa",
    name: "node-rsa",
    description: "Node RSA encryption",
    category: "security",
    tags: [
      "rsa",
      "encryption",
      "crypto"
    ],
    useCases: [
      "Use node-rsa for security tasks",
      "Integrate node-rsa into your workflow",
      "Automate with node-rsa"
    ],
    installCommand: "npx skills add rzcoder/node-rsa",
    githubUrl: "https://github.com/rzcoder/node-rsa",
    author: "rzcoder",
    downloads: "6.2M",
    isHot: false,
    isNew: true
  },
  {
    id: "speakeasy",
    name: "speakeasy",
    description: "Speakeasy 2FA",
    category: "security",
    tags: [
      "2fa",
      "totp",
      "security"
    ],
    useCases: [
      "Use speakeasy for security tasks",
      "Integrate speakeasy into your workflow",
      "Automate with speakeasy"
    ],
    installCommand: "npx skills add speakeasyjs/speakeasy",
    githubUrl: "https://github.com/speakeasyjs/speakeasy",
    author: "speakeasyjs",
    downloads: "4.7M",
    isHot: false,
    isNew: true
  },
  {
    id: "otplib",
    name: "otplib",
    description: "OTP library",
    category: "security",
    tags: [
      "otp",
      "2fa",
      "totp"
    ],
    useCases: [
      "Use otplib for security tasks",
      "Integrate otplib into your workflow",
      "Automate with otplib"
    ],
    installCommand: "npx skills add yeojz/otplib",
    githubUrl: "https://github.com/yeojz/otplib",
    author: "yeojz",
    downloads: "3.8M",
    isHot: false,
    isNew: true
  },
  {
    id: "csurf",
    name: "csurf",
    description: "CSRF protection",
    category: "security",
    tags: [
      "csrf",
      "security",
      "protection"
    ],
    useCases: [
      "Use csurf for security tasks",
      "Integrate csurf into your workflow",
      "Automate with csurf"
    ],
    installCommand: "npx skills add expressjs/csurf",
    githubUrl: "https://github.com/expressjs/csurf",
    author: "expressjs",
    downloads: "8.4M",
    isHot: false,
    isNew: true
  },
  {
    id: "express-rate-limit",
    name: "express-rate-limit",
    description: "Express rate limiting",
    category: "security",
    tags: [
      "rate-limit",
      "express",
      "security"
    ],
    useCases: [
      "Use express-rate-limit for security tasks",
      "Integrate express-rate-limit into your workflow",
      "Automate with express-rate-limit"
    ],
    installCommand: "npx skills add express-rate-limit/express-rate-limit",
    githubUrl: "https://github.com/express-rate-limit/express-rate-limit",
    author: "express-rate-limit",
    downloads: "12.1M",
    isHot: false,
    isNew: true
  },
  {
    id: "cors",
    name: "cors",
    description: "CORS handling",
    category: "security",
    tags: [
      "cors",
      "cross-origin",
      "security"
    ],
    useCases: [
      "Use cors for security tasks",
      "Integrate cors into your workflow",
      "Automate with cors"
    ],
    installCommand: "npx skills add expressjs/cors",
    githubUrl: "https://github.com/expressjs/cors",
    author: "expressjs",
    downloads: "45.2M",
    isHot: false,
    isNew: true
  }
];

export const hotAgentSkills = agentSkills.filter(s => s.isHot);
export const newAgentSkills = agentSkills.filter(s => s.isNew);
