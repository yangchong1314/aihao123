// Agent Skills - 从 skills.sh 爬取
// 时间: 2026-03-12T11:04:05.443Z
// 来源: https://skills.sh/
// 总数: 84

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
  { id: 'ai', name: 'AI', icon: '🤖' },
  { id: 'code', name: '代码', icon: '💻' },
  { id: 'cloud', name: '云服务', icon: '☁️' },
  { id: 'devops', name: 'DevOps', icon: '🚀' },
  { id: 'productivity', name: '效率', icon: '⚡' },
];

export const agentSkills: AgentSkill[] = [
  {
    id: "better-auth-email-and-password-best-practices",
    name: "email-and-password-best-practices",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "better-auth",
      "email-and-password-best-practices"
    ],
    useCases: [
      "Use email-and-password-best-practices"
    ],
    installCommand: "$ npx skills add https://github.com/better-auth/skills --skill email-and-password-best-practices",
    githubUrl: "https://github.com/better-auth/skills",
    author: "better-auth",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "tavily-ai-extract",
    name: "extract",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "tavily-ai",
      "extract"
    ],
    useCases: [
      "Use extract"
    ],
    installCommand: "$ npx skills add https://github.com/tavily-ai/skills --skill extract",
    githubUrl: "https://github.com/tavily-ai/skills",
    author: "tavily-ai",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "better-auth-organization-best-practices",
    name: "organization-best-practices",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "better-auth",
      "organization-best-practices"
    ],
    useCases: [
      "Use organization-best-practices"
    ],
    installCommand: "$ npx skills add https://github.com/better-auth/skills --skill organization-best-practices",
    githubUrl: "https://github.com/better-auth/skills",
    author: "better-auth",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "vuejs-ai-vue-best-practices",
    name: "vue-best-practices",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "vuejs-ai",
      "vue-best-practices"
    ],
    useCases: [
      "Use vue-best-practices"
    ],
    installCommand: "$ npx skills add https://github.com/vuejs-ai/skills --skill vue-best-practices",
    githubUrl: "https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-best-practices/references/reactivity.md",
    author: "vuejs-ai",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "antfu-tsdown",
    name: "tsdown",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "antfu",
      "tsdown"
    ],
    useCases: [
      "Use tsdown"
    ],
    installCommand: "$ npx skills add https://github.com/antfu/skills --skill tsdown",
    githubUrl: "https://github.com/antfu/skills/blob/HEAD/skills/tsdown/references/guide-getting-started.md",
    author: "antfu",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "cloudflare-cloudflare",
    name: "cloudflare",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "cloudflare",
      "cloudflare"
    ],
    useCases: [
      "Use cloudflare"
    ],
    installCommand: "$ npx skills add https://github.com/cloudflare/skills --skill cloudflare",
    githubUrl: "https://github.com/cloudflare/skills",
    author: "cloudflare",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "cloudflare-wrangler",
    name: "wrangler",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "cloudflare",
      "wrangler"
    ],
    useCases: [
      "Use wrangler"
    ],
    installCommand: "$ npx skills add https://github.com/cloudflare/skills --skill wrangler",
    githubUrl: "https://github.com/cloudflare/skills",
    author: "cloudflare",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "antfu-slidev",
    name: "slidev",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "antfu",
      "slidev"
    ],
    useCases: [
      "Use slidev"
    ],
    installCommand: "$ npx skills add https://github.com/antfu/skills --skill slidev",
    githubUrl: "https://github.com/antfu/skills/blob/HEAD/skills/slidev/references/core-syntax.md",
    author: "antfu",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "antfu-vue-testing-best-practices",
    name: "vue-testing-best-practices",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "antfu",
      "vue-testing-best-practices"
    ],
    useCases: [
      "Use vue-testing-best-practices"
    ],
    installCommand: "$ npx skills add https://github.com/antfu/skills --skill vue-testing-best-practices",
    githubUrl: "https://github.com/antfu/skills/blob/HEAD/skills/vue-testing-best-practices/reference/testing-vitest-recommended-for-vue.md",
    author: "antfu",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "antfu-turborepo",
    name: "turborepo",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "antfu",
      "turborepo"
    ],
    useCases: [
      "Use turborepo"
    ],
    installCommand: "$ npx skills add https://github.com/antfu/skills --skill turborepo",
    githubUrl: "https://github.com/antfu/skills/blob/HEAD/skills/turborepo/references/configuration/RULE.md",
    author: "antfu",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "better-auth-two-factor-authentication-best-practices",
    name: "two-factor-authentication-best-practices",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "better-auth",
      "two-factor-authentication-best-practices"
    ],
    useCases: [
      "Use two-factor-authentication-best-practices"
    ],
    installCommand: "$ npx skills add https://github.com/better-auth/skills --skill two-factor-authentication-best-practices",
    githubUrl: "https://github.com/better-auth/skills",
    author: "better-auth",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "vuejs-ai-vue-debug-guides",
    name: "vue-debug-guides",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "vuejs-ai",
      "vue-debug-guides"
    ],
    useCases: [
      "Use vue-debug-guides"
    ],
    installCommand: "$ npx skills add https://github.com/vuejs-ai/skills --skill vue-debug-guides",
    githubUrl: "https://github.com/vuejs-ai/skills/blob/HEAD/skills/vue-debug-guides/reference/reactivity-debugging-hooks.md",
    author: "vuejs-ai",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "better-auth-better-auth-security-best-practices",
    name: "better-auth-security-best-practices",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "better-auth",
      "better-auth-security-best-practices"
    ],
    useCases: [
      "Use better-auth-security-best-practices"
    ],
    installCommand: "$ npx skills add https://github.com/better-auth/skills --skill better-auth-security-best-practices",
    githubUrl: "https://github.com/better-auth/skills",
    author: "better-auth",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "clerk-clerk-webhooks",
    name: "clerk-webhooks",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "clerk",
      "clerk-webhooks"
    ],
    useCases: [
      "Use clerk-webhooks"
    ],
    installCommand: "$ npx skills add https://github.com/clerk/skills --skill clerk-webhooks",
    githubUrl: "https://github.com/clerk/skills",
    author: "clerk",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "cloudflare-web-perf",
    name: "web-perf",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "cloudflare",
      "web-perf"
    ],
    useCases: [
      "Use web-perf"
    ],
    installCommand: "$ npx skills add https://github.com/cloudflare/skills --skill web-perf",
    githubUrl: "https://github.com/cloudflare/skills",
    author: "cloudflare",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "cloudflare-workers-best-practices",
    name: "workers-best-practices",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "cloudflare",
      "workers-best-practices"
    ],
    useCases: [
      "Use workers-best-practices"
    ],
    installCommand: "$ npx skills add https://github.com/cloudflare/skills --skill workers-best-practices",
    githubUrl: "https://github.com/cloudflare/skills",
    author: "cloudflare",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "clerk-clerk-testing",
    name: "clerk-testing",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "clerk",
      "clerk-testing"
    ],
    useCases: [
      "Use clerk-testing"
    ],
    installCommand: "$ npx skills add https://github.com/clerk/skills --skill clerk-testing",
    githubUrl: "https://github.com/clerk/clerk-playwright-nextjs/tree/95c7189a48c24d7e9e9744897040aa9418f68ac2/e2e",
    author: "clerk",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "prisma-prisma-client-api",
    name: "prisma-client-api",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "prisma",
      "prisma-client-api"
    ],
    useCases: [
      "Use prisma-client-api"
    ],
    installCommand: "$ npx skills add https://github.com/prisma/skills --skill prisma-client-api",
    githubUrl: "https://github.com/prisma/skills",
    author: "prisma",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "rivet-dev-rivetkit",
    name: "rivetkit",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "rivet-dev",
      "rivetkit"
    ],
    useCases: [
      "Use rivetkit"
    ],
    installCommand: "$ npx skills add https://github.com/rivet-dev/skills --skill rivetkit",
    githubUrl: "https://github.com/rivet-dev/rivet",
    author: "rivet-dev",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "dimillian-swiftui-liquid-glass",
    name: "swiftui-liquid-glass",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "dimillian",
      "swiftui-liquid-glass"
    ],
    useCases: [
      "Use swiftui-liquid-glass"
    ],
    installCommand: "$ npx skills add https://github.com/dimillian/skills --skill swiftui-liquid-glass",
    githubUrl: "https://github.com/dimillian/skills",
    author: "dimillian",
    downloads: "1.0M",
    isHot: true,
    isNew: false
  },
  {
    id: "elevenlabs-text-to-speech",
    name: "text-to-speech",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "elevenlabs",
      "text-to-speech"
    ],
    useCases: [
      "Use text-to-speech"
    ],
    installCommand: "$ npx skills add https://github.com/elevenlabs/skills --skill text-to-speech",
    githubUrl: "https://github.com/elevenlabs/skills/blob/HEAD/text-to-speech/references/installation.md",
    author: "elevenlabs",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "prisma-prisma-cli",
    name: "prisma-cli",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "prisma",
      "prisma-cli"
    ],
    useCases: [
      "Use prisma-cli"
    ],
    installCommand: "$ npx skills add https://github.com/prisma/skills --skill prisma-cli",
    githubUrl: "https://github.com/prisma/skills",
    author: "prisma",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "rivet-dev-rivetkit-client-javascript",
    name: "rivetkit-client-javascript",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "rivet-dev",
      "rivetkit-client-javascript"
    ],
    useCases: [
      "Use rivetkit-client-javascript"
    ],
    installCommand: "$ npx skills add https://github.com/rivet-dev/skills --skill rivetkit-client-javascript",
    githubUrl: "https://github.com/docs/actors/quickstart/backend",
    author: "rivet-dev",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "flutter-flutter-layout",
    name: "flutter-layout",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "flutter",
      "flutter-layout"
    ],
    useCases: [
      "Use flutter-layout"
    ],
    installCommand: "$ npx skills add https://github.com/flutter/skills --skill flutter-layout",
    githubUrl: "https://github.com/flutter/skills",
    author: "flutter",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-case-study-writing",
    name: "case-study-writing",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "case-study-writing"
    ],
    useCases: [
      "Use case-study-writing"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill case-study-writing",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-ai-social-media-content",
    name: "ai-social-media-content",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "ai-social-media-content"
    ],
    useCases: [
      "Use ai-social-media-content"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill ai-social-media-content",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-og-image-design",
    name: "og-image-design",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "og-image-design"
    ],
    useCases: [
      "Use og-image-design"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill og-image-design",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-app-store-screenshots",
    name: "app-store-screenshots",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "app-store-screenshots"
    ],
    useCases: [
      "Use app-store-screenshots"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill app-store-screenshots",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-technical-blog-writing",
    name: "technical-blog-writing",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "technical-blog-writing"
    ],
    useCases: [
      "Use technical-blog-writing"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill technical-blog-writing",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-ai-content-pipeline",
    name: "ai-content-pipeline",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "ai-content-pipeline"
    ],
    useCases: [
      "Use ai-content-pipeline"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill ai-content-pipeline",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-product-changelog",
    name: "product-changelog",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "product-changelog"
    ],
    useCases: [
      "Use product-changelog"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill product-changelog",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-newsletter-curation",
    name: "newsletter-curation",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "newsletter-curation"
    ],
    useCases: [
      "Use newsletter-curation"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill newsletter-curation",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-customer-persona",
    name: "customer-persona",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "customer-persona"
    ],
    useCases: [
      "Use customer-persona"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill customer-persona",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-character-design-sheet",
    name: "character-design-sheet",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "character-design-sheet"
    ],
    useCases: [
      "Use character-design-sheet"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill character-design-sheet",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-flux-image",
    name: "flux-image",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "flux-image"
    ],
    useCases: [
      "Use flux-image"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill flux-image",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-background-removal",
    name: "background-removal",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "background-removal"
    ],
    useCases: [
      "Use background-removal"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill background-removal",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-ai-voice-cloning",
    name: "ai-voice-cloning",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "ai-voice-cloning"
    ],
    useCases: [
      "Use ai-voice-cloning"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill ai-voice-cloning",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-video-ad-specs",
    name: "video-ad-specs",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "video-ad-specs"
    ],
    useCases: [
      "Use video-ad-specs"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill video-ad-specs",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-book-cover-design",
    name: "book-cover-design",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "book-cover-design"
    ],
    useCases: [
      "Use book-cover-design"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill book-cover-design",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-youtube-thumbnail-design",
    name: "youtube-thumbnail-design",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "youtube-thumbnail-design"
    ],
    useCases: [
      "Use youtube-thumbnail-design"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill youtube-thumbnail-design",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "inference-shell-prompt-engineering",
    name: "prompt-engineering",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "inference-shell",
      "prompt-engineering"
    ],
    useCases: [
      "Use prompt-engineering"
    ],
    installCommand: "$ npx skills add https://github.com/inference-shell/skills --skill prompt-engineering",
    githubUrl: "https://github.com/inference-shell/skills",
    author: "inference-shell",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "flutter-flutter-databases",
    name: "flutter-databases",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "flutter",
      "flutter-databases"
    ],
    useCases: [
      "Use flutter-databases"
    ],
    installCommand: "$ npx skills add https://github.com/flutter/skills --skill flutter-databases",
    githubUrl: "https://github.com/flutter/skills",
    author: "flutter",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "flutter-flutter-native-interop",
    name: "flutter-native-interop",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "flutter",
      "flutter-native-interop"
    ],
    useCases: [
      "Use flutter-native-interop"
    ],
    installCommand: "$ npx skills add https://github.com/flutter/skills --skill flutter-native-interop",
    githubUrl: "https://github.com/flutter/skills",
    author: "flutter",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "flutter-flutter-platform-views",
    name: "flutter-platform-views",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "flutter",
      "flutter-platform-views"
    ],
    useCases: [
      "Use flutter-platform-views"
    ],
    installCommand: "$ npx skills add https://github.com/flutter/skills --skill flutter-platform-views",
    githubUrl: "https://github.com/flutter/skills",
    author: "flutter",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "flutter-flutter-plugins",
    name: "flutter-plugins",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "flutter",
      "flutter-plugins"
    ],
    useCases: [
      "Use flutter-plugins"
    ],
    installCommand: "$ npx skills add https://github.com/flutter/skills --skill flutter-plugins",
    githubUrl: "https://github.com/flutter/skills",
    author: "flutter",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "coderabbitai-code-review",
    name: "code-review",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "coderabbitai",
      "code-review"
    ],
    useCases: [
      "Use code-review"
    ],
    installCommand: "$ npx skills add https://github.com/coderabbitai/skills --skill code-review",
    githubUrl: "https://github.com/coderabbitai/skills",
    author: "coderabbitai",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "mindrally-accessibility-a11y",
    name: "accessibility-a11y",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "mindrally",
      "accessibility-a11y"
    ],
    useCases: [
      "Use accessibility-a11y"
    ],
    installCommand: "$ npx skills add https://github.com/mindrally/skills --skill accessibility-a11y",
    githubUrl: "https://github.com/mindrally/skills",
    author: "mindrally",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "openai-linear",
    name: "linear",
    description: "Discover and install skills for AI agents.",
    category: "ai",
    tags: [
      "openai",
      "linear"
    ],
    useCases: [
      "Use linear"
    ],
    installCommand: "$ npx skills add https://github.com/openai/skills --skill linear",
    githubUrl: "https://github.com/openai/skills",
    author: "openai",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "trailofbits-sharp-edges",
    name: "sharp-edges",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "trailofbits",
      "sharp-edges"
    ],
    useCases: [
      "Use sharp-edges"
    ],
    installCommand: "$ npx skills add https://github.com/trailofbits/skills --skill sharp-edges",
    githubUrl: "https://github.com/trailofbits/skills/blob/HEAD/plugins/sharp-edges/skills/sharp-edges/references/config-patterns.md#unvalidated-constructor-parameters",
    author: "trailofbits",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "mindrally-nextjs-react-typescript",
    name: "nextjs-react-typescript",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "mindrally",
      "nextjs-react-typescript"
    ],
    useCases: [
      "Use nextjs-react-typescript"
    ],
    installCommand: "$ npx skills add https://github.com/mindrally/skills --skill nextjs-react-typescript",
    githubUrl: "https://github.com/mindrally/skills",
    author: "mindrally",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "openai-spreadsheet",
    name: "spreadsheet",
    description: "Discover and install skills for AI agents.",
    category: "ai",
    tags: [
      "openai",
      "spreadsheet"
    ],
    useCases: [
      "Use spreadsheet"
    ],
    installCommand: "$ npx skills add https://github.com/openai/skills --skill spreadsheet",
    githubUrl: "https://github.com/openai/skills",
    author: "openai",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "trailofbits-coverage-analysis",
    name: "coverage-analysis",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "trailofbits",
      "coverage-analysis"
    ],
    useCases: [
      "Use coverage-analysis"
    ],
    installCommand: "$ npx skills add https://github.com/trailofbits/skills --skill coverage-analysis",
    githubUrl: "https://github.com/trailofbits/skills",
    author: "trailofbits",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "trailofbits-code-maturity-assessor",
    name: "code-maturity-assessor",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "trailofbits",
      "code-maturity-assessor"
    ],
    useCases: [
      "Use code-maturity-assessor"
    ],
    installCommand: "$ npx skills add https://github.com/trailofbits/skills --skill code-maturity-assessor",
    githubUrl: "https://github.com/trailofbits/skills/blob/HEAD/plugins/building-secure-contracts/skills/code-maturity-assessor/resources/ASSESSMENT_CRITERIA.md",
    author: "trailofbits",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "trailofbits-entry-point-analyzer",
    name: "entry-point-analyzer",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "trailofbits",
      "entry-point-analyzer"
    ],
    useCases: [
      "Use entry-point-analyzer"
    ],
    installCommand: "$ npx skills add https://github.com/trailofbits/skills --skill entry-point-analyzer",
    githubUrl: "https://github.com/trailofbits/skills/blob/HEAD/plugins/entry-point-analyzer/skills/entry-point-analyzer/%7BbaseDir%7D/references/solidity.md",
    author: "trailofbits",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "dimillian-swiftui-view-refactor",
    name: "swiftui-view-refactor",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "dimillian",
      "swiftui-view-refactor"
    ],
    useCases: [
      "Use swiftui-view-refactor"
    ],
    installCommand: "$ npx skills add https://github.com/dimillian/skills --skill swiftui-view-refactor",
    githubUrl: "https://github.com/dimillian/skills",
    author: "dimillian",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "trailofbits-semgrep-rule-creator",
    name: "semgrep-rule-creator",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "trailofbits",
      "semgrep-rule-creator"
    ],
    useCases: [
      "Use semgrep-rule-creator"
    ],
    installCommand: "$ npx skills add https://github.com/trailofbits/skills --skill semgrep-rule-creator",
    githubUrl: "https://github.com/trailofbits/skills/blob/HEAD/plugins/semgrep-rule-creator/skills/semgrep-rule-creator/%7BbaseDir%7D/references/quick-reference.md",
    author: "trailofbits",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "hairyf-tailwindcss",
    name: "tailwindcss",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "hairyf",
      "tailwindcss"
    ],
    useCases: [
      "Use tailwindcss"
    ],
    installCommand: "$ npx skills add https://github.com/hairyf/skills --skill tailwindcss",
    githubUrl: "https://github.com/hairyf/skills/blob/HEAD/skills/tailwindcss/references/core-installation.md",
    author: "hairyf",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "aahl-edge-tts",
    name: "edge-tts",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "aahl",
      "edge-tts"
    ],
    useCases: [
      "Use edge-tts"
    ],
    installCommand: "$ npx skills add https://github.com/aahl/skills --skill edge-tts",
    githubUrl: "https://github.com/aahl/skills",
    author: "aahl",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "ghostsecurity-ghost-scan-code",
    name: "ghost-scan-code",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "ghostsecurity",
      "ghost-scan-code"
    ],
    useCases: [
      "Use ghost-scan-code"
    ],
    installCommand: "$ npx skills add https://github.com/ghostsecurity/skills --skill ghost-scan-code",
    githubUrl: "https://github.com/ghostsecurity/skills/blob/HEAD/plugins/ghost/skills/scan-code/scripts/loop.sh",
    author: "ghostsecurity",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "trailofbits-cargo-fuzz",
    name: "cargo-fuzz",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "trailofbits",
      "cargo-fuzz"
    ],
    useCases: [
      "Use cargo-fuzz"
    ],
    installCommand: "$ npx skills add https://github.com/trailofbits/skills --skill cargo-fuzz",
    githubUrl: "https://github.com/rust-fuzz/arbitrary",
    author: "trailofbits",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "getsentry-code-simplifier",
    name: "code-simplifier",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "getsentry",
      "code-simplifier"
    ],
    useCases: [
      "Use code-simplifier"
    ],
    installCommand: "$ npx skills add https://github.com/getsentry/skills --skill code-simplifier",
    githubUrl: "https://github.com/getsentry/skills",
    author: "getsentry",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "dimillian-ios-debugger-agent",
    name: "ios-debugger-agent",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "dimillian",
      "ios-debugger-agent"
    ],
    useCases: [
      "Use ios-debugger-agent"
    ],
    installCommand: "$ npx skills add https://github.com/dimillian/skills --skill ios-debugger-agent",
    githubUrl: "https://github.com/dimillian/skills",
    author: "dimillian",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "composiohq-composio",
    name: "composio",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "composiohq",
      "composio"
    ],
    useCases: [
      "Use composio"
    ],
    installCommand: "$ npx skills add https://github.com/composiohq/skills --skill composio",
    githubUrl: "https://github.com/composiohq/skills/blob/HEAD/skills/composio/rules/composio-cli.md",
    author: "composiohq",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "heygen-com-heygen",
    name: "heygen",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "heygen-com",
      "heygen"
    ],
    useCases: [
      "Use heygen"
    ],
    installCommand: "$ npx skills add https://github.com/heygen-com/skills --skill heygen",
    githubUrl: "https://github.com/heygen-com/skills/blob/HEAD/skills/heygen/references/prompt-optimizer.md",
    author: "heygen-com",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "tencentcloudbase-web-development",
    name: "web-development",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "tencentcloudbase",
      "web-development"
    ],
    useCases: [
      "Use web-development"
    ],
    installCommand: "$ npx skills add https://github.com/tencentcloudbase/skills --skill web-development",
    githubUrl: "https://github.com/tencentcloudbase/skills",
    author: "tencentcloudbase",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "flutter-flutter-home-screen-widget",
    name: "flutter-home-screen-widget",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "flutter",
      "flutter-home-screen-widget"
    ],
    useCases: [
      "Use flutter-home-screen-widget"
    ],
    installCommand: "$ npx skills add https://github.com/flutter/skills --skill flutter-home-screen-widget",
    githubUrl: "https://github.com/flutter/skills",
    author: "flutter",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "assistant-ui-tools",
    name: "tools",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "assistant-ui",
      "tools"
    ],
    useCases: [
      "Use tools"
    ],
    installCommand: "$ npx skills add https://github.com/assistant-ui/skills --skill tools",
    githubUrl: "https://github.com/assistant-ui/skills/blob/HEAD/assistant-ui/skills/tools/references/make-tool.md",
    author: "assistant-ui",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "assistant-ui-runtime",
    name: "runtime",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "assistant-ui",
      "runtime"
    ],
    useCases: [
      "Use runtime"
    ],
    installCommand: "$ npx skills add https://github.com/assistant-ui/skills --skill runtime",
    githubUrl: "https://github.com/assistant-ui/skills/blob/HEAD/assistant-ui/skills/runtime/references/local-runtime.md",
    author: "assistant-ui",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "tencentcloudbase-data-model-creation",
    name: "data-model-creation",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "tencentcloudbase",
      "data-model-creation"
    ],
    useCases: [
      "Use data-model-creation"
    ],
    installCommand: "$ npx skills add https://github.com/tencentcloudbase/skills --skill data-model-creation",
    githubUrl: "https://github.com/tencentcloudbase/skills",
    author: "tencentcloudbase",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "hairyf-vitest",
    name: "vitest",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "hairyf",
      "vitest"
    ],
    useCases: [
      "Use vitest"
    ],
    installCommand: "$ npx skills add https://github.com/hairyf/skills --skill vitest",
    githubUrl: "https://github.com/hairyf/skills/blob/HEAD/skills/vitest/references/core-config.md",
    author: "hairyf",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "hairyf-valtio",
    name: "valtio",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "hairyf",
      "valtio"
    ],
    useCases: [
      "Use valtio"
    ],
    installCommand: "$ npx skills add https://github.com/hairyf/skills --skill valtio",
    githubUrl: "https://github.com/hairyf/skills/blob/HEAD/skills/valtio/references/core-proxy.md",
    author: "hairyf",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "trailofbits-claude-in-chrome-troubleshooting",
    name: "claude-in-chrome-troubleshooting",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "trailofbits",
      "claude-in-chrome-troubleshooting"
    ],
    useCases: [
      "Use claude-in-chrome-troubleshooting"
    ],
    installCommand: "$ npx skills add https://github.com/trailofbits/skills --skill claude-in-chrome-troubleshooting",
    githubUrl: "https://github.com/jeffzwang",
    author: "trailofbits",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "hairyf-hairy-react-lib",
    name: "hairy-react-lib",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "hairyf",
      "hairy-react-lib"
    ],
    useCases: [
      "Use hairy-react-lib"
    ],
    installCommand: "$ npx skills add https://github.com/hairyf/skills --skill hairy-react-lib",
    githubUrl: "https://github.com/hairyf/skills/blob/HEAD/skills/hairy-react-lib/references/core-async-hooks.md",
    author: "hairyf",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "tencentcloudbase-cloudrun-development",
    name: "cloudrun-development",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "tencentcloudbase",
      "cloudrun-development"
    ],
    useCases: [
      "Use cloudrun-development"
    ],
    installCommand: "$ npx skills add https://github.com/tencentcloudbase/skills --skill cloudrun-development",
    githubUrl: "https://github.com/tencentcloudbase/skills",
    author: "tencentcloudbase",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "hairyf-valtio-define",
    name: "valtio-define",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "hairyf",
      "valtio-define"
    ],
    useCases: [
      "Use valtio-define"
    ],
    installCommand: "$ npx skills add https://github.com/hairyf/skills --skill valtio-define",
    githubUrl: "https://github.com/hairyf/skills/blob/HEAD/skills/valtio-define/references/core-define-store.md",
    author: "hairyf",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "tencentcloudbase-auth-web-cloudbase",
    name: "auth-web-cloudbase",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "tencentcloudbase",
      "auth-web-cloudbase"
    ],
    useCases: [
      "Use auth-web-cloudbase"
    ],
    installCommand: "$ npx skills add https://github.com/tencentcloudbase/skills --skill auth-web-cloudbase",
    githubUrl: "https://github.com/tencentcloudbase/skills",
    author: "tencentcloudbase",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "apollographql-rover",
    name: "rover",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "apollographql",
      "rover"
    ],
    useCases: [
      "Use rover"
    ],
    installCommand: "$ npx skills add https://github.com/apollographql/skills --skill rover",
    githubUrl: "https://github.com/apollographql/skills/blob/HEAD/skills/rover/references/subgraphs.md",
    author: "apollographql",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "tencentcloudbase-auth-nodejs-cloudbase",
    name: "auth-nodejs-cloudbase",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "tencentcloudbase",
      "auth-nodejs-cloudbase"
    ],
    useCases: [
      "Use auth-nodejs-cloudbase"
    ],
    installCommand: "$ npx skills add https://github.com/tencentcloudbase/skills --skill auth-nodejs-cloudbase",
    githubUrl: "https://github.com/tencentcloudbase/skills",
    author: "tencentcloudbase",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "tencentcloudbase-relational-database-mcp-cloudbase",
    name: "relational-database-mcp-cloudbase",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "tencentcloudbase",
      "relational-database-mcp-cloudbase"
    ],
    useCases: [
      "Use relational-database-mcp-cloudbase"
    ],
    installCommand: "$ npx skills add https://github.com/tencentcloudbase/skills --skill relational-database-mcp-cloudbase",
    githubUrl: "https://github.com/tencentcloudbase/skills",
    author: "tencentcloudbase",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "tencentcloudbase-auth-tool-cloudbase",
    name: "auth-tool-cloudbase",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "tencentcloudbase",
      "auth-tool-cloudbase"
    ],
    useCases: [
      "Use auth-tool-cloudbase"
    ],
    installCommand: "$ npx skills add https://github.com/tencentcloudbase/skills --skill auth-tool-cloudbase",
    githubUrl: "https://github.com/tencentcloudbase/skills",
    author: "tencentcloudbase",
    downloads: "1.0M",
    isHot: false,
    isNew: true
  },
  {
    id: "makisuo-effect-best-practices",
    name: "effect-best-practices",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "makisuo",
      "effect-best-practices"
    ],
    useCases: [
      "Use effect-best-practices"
    ],
    installCommand: "$ npx skills add https://github.com/makisuo/skills --skill effect-best-practices",
    githubUrl: "https://github.com/makisuo/skills",
    author: "makisuo",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "openai-pdf",
    name: "pdf",
    description: "Discover and install skills for AI agents.",
    category: "ai",
    tags: [
      "openai",
      "pdf"
    ],
    useCases: [
      "Use pdf"
    ],
    installCommand: "$ npx skills add https://github.com/openai/skills --skill pdf",
    githubUrl: "https://github.com/openai/skills",
    author: "openai",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "trailofbits-burpsuite-project-parser",
    name: "burpsuite-project-parser",
    description: "Discover and install skills for AI agents.",
    category: "productivity",
    tags: [
      "trailofbits",
      "burpsuite-project-parser"
    ],
    useCases: [
      "Use burpsuite-project-parser"
    ],
    installCommand: "$ npx skills add https://github.com/trailofbits/skills --skill burpsuite-project-parser",
    githubUrl: "https://github.com/BuffaloWill/burpsuite-project-file-parser",
    author: "trailofbits",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  },
  {
    id: "openai-notion-research-documentation",
    name: "notion-research-documentation",
    description: "Discover and install skills for AI agents.",
    category: "ai",
    tags: [
      "openai",
      "notion-research-documentation"
    ],
    useCases: [
      "Use notion-research-documentation"
    ],
    installCommand: "$ npx skills add https://github.com/openai/skills --skill notion-research-documentation",
    githubUrl: "https://github.com/openai/skills",
    author: "openai",
    downloads: "1.0M",
    isHot: false,
    isNew: false
  }
];

export const hotAgentSkills = agentSkills.filter(s => s.isHot);
export const newAgentSkills = agentSkills.filter(s => s.isNew);
