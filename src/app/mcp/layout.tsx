import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP Servers 目录 - 300+ 模型上下文协议服务器 | AI好工具",
  description: "发现300+个MCP服务器，让你的AI安全连接外部工具。支持文件系统、数据库、API调用等多种能力，安全、标准化的AI工具连接协议。",
  keywords: ["MCP", "Model Context Protocol", "MCP服务器", "AI工具连接", "MCP Skills", "AI基础设施"],
  openGraph: {
    title: "MCP Servers 目录 - 300+ 模型上下文协议服务器 | AI好工具",
    description: "发现300+个MCP服务器，让你的AI安全连接外部工具。支持文件系统、数据库、API调用等多种能力。",
    url: "https://www.aihub123.site/mcp",
    images: [{
      url: "https://www.aihub123.site/og-image.png",
      width: 1200,
      height: 630,
      alt: "MCP Servers 目录 - AI好工具"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "MCP Servers 目录 - 300+ 模型上下文协议服务器 | AI好工具",
    description: "发现300+个MCP服务器，让你的AI安全连接外部工具。",
    images: ["https://www.aihub123.site/og-image.png"]
  },
  alternates: {
    canonical: "https://www.aihub123.site/mcp"
  }
};

export default function McpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
