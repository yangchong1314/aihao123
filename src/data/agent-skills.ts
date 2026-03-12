// Agent Skills 数据 - 从 skills.sh 抓取
// 来源: https://skills.sh/
// 生成时间: 2026-03-12T10:10:04.432Z
// 总数: 44

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
    githubUrl: "https://github.com/vercel-labs/skills",
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
    githubUrl: "https://github.com/vercel-labs/skills",
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
    githubUrl: "https://github.com/vercel-labs/skills",
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
    githubUrl: "https://github.com/github/copilot",
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
    githubUrl: "https://github.com/github/actions",
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
    githubUrl: "https://github.com/github/codespaces",
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
    githubUrl: "https://github.com/openai/openai-node",
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
    githubUrl: "https://github.com/openai/openai-node",
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
    githubUrl: "https://github.com/openai/whisper",
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
    githubUrl: "https://github.com/anthropics/anthropic-sdk-typescript",
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
    githubUrl: "https://github.com/anthropics/anthropic-sdk-typescript",
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
    githubUrl: "https://github.com/microsoft/azure-sdk-for-js",
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
    githubUrl: "https://github.com/microsoft/azure-devops-node-api",
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
    githubUrl: "https://github.com/google/generative-ai-js",
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
    githubUrl: "https://github.com/googleapis/google-cloud-node",
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
    githubUrl: "https://github.com/googleapis/google-api-nodejs-client",
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
    githubUrl: "https://github.com/aws/aws-sdk-js-v3",
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
    githubUrl: "https://github.com/aws/aws-sdk-js-v3",
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
    githubUrl: "https://github.com/aws/aws-sdk-js-v3",
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
    isHot: false,
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
    githubUrl: "https://github.com/mongodb/node-mongodb-native",
    author: "mongodb",
    downloads: "12.3M",
    isHot: false,
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
    githubUrl: "https://github.com/redis/node-redis",
    author: "redis",
    downloads: "9.8M",
    isHot: false,
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
    githubUrl: "https://github.com/jestjs/jest",
    author: "facebook",
    downloads: "22.5M",
    isHot: false,
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
    isHot: false,
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
    isHot: false,
    isNew: true
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
    githubUrl: "https://github.com/vercel/next.js",
    author: "vercel",
    downloads: "16.8M",
    isHot: false,
    isNew: true
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
    isHot: false,
    isNew: true
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
    githubUrl: "https://github.com/vuejs/core",
    author: "vuejs",
    downloads: "15.2M",
    isHot: false,
    isNew: true
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
    isHot: false,
    isNew: true
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
    isHot: false,
    isNew: true
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
    githubUrl: "https://github.com/microsoft/TypeScript",
    author: "microsoft",
    downloads: "45.2M",
    isHot: false,
    isNew: true
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
    githubUrl: "https://github.com/slackapi/node-slack-sdk",
    author: "slackapi",
    downloads: "5.6M",
    isHot: false,
    isNew: true
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
    githubUrl: "https://github.com/discordjs/discord.js",
    author: "discordjs",
    downloads: "4.8M",
    isHot: false,
    isNew: true
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
    githubUrl: "https://github.com/twilio/twilio-node",
    author: "twilio",
    downloads: "3.9M",
    isHot: false,
    isNew: true
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
    githubUrl: "https://github.com/stratodem/pandas-js",
    author: "pandas-js",
    downloads: "2.1M",
    isHot: false,
    isNew: true
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
    isHot: false,
    isNew: true
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
    githubUrl: "https://github.com/chartjs/Chart.js",
    author: "chartjs",
    downloads: "6.7M",
    isHot: false,
    isNew: true
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
    githubUrl: "https://github.com/auth0/node-jsonwebtoken",
    author: "auth0",
    downloads: "18.9M",
    isHot: false,
    isNew: true
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
    githubUrl: "https://github.com/kelektiv/node.bcrypt.js",
    author: "kelektiv",
    downloads: "12.4M",
    isHot: false,
    isNew: true
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
    isNew: true
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
    isNew: true
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
    isNew: true
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
    isNew: true
  }
];

export const hotAgentSkills = agentSkills.filter(s => s.isHot);
export const newAgentSkills = agentSkills.filter(s => s.isNew);
