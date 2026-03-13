import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Skills 目录 - 190+ AI智能体技能 | AI好工具",
  description: "发现190+个Agent Skills，扩展你的AI助手能力。涵盖浏览器自动化、文档处理、代码生成等多种技能，支持OpenClaw等平台。",
  keywords: ["Agent Skills", "AI技能", "OpenClaw Skills", "AI助手扩展", "智能体技能", "npx skills"],
  openGraph: {
    title: "Agent Skills 目录 - 190+ AI智能体技能 | AI好工具",
    description: "发现190+个Agent Skills，扩展你的AI助手能力。涵盖浏览器自动化、文档处理、代码生成等多种技能。",
    url: "https://aihub123.site/skills",
    images: [{
      url: "https://aihub123.site/og-image.png",
      width: 1200,
      height: 630,
      alt: "Agent Skills 目录 - AI好工具"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Skills 目录 - 190+ AI智能体技能 | AI好工具",
    description: "发现190+个Agent Skills，扩展你的AI助手能力。",
    images: ["https://aihub123.site/og-image.png"]
  },
  alternates: {
    canonical: "https://aihub123.site/skills"
  }
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
