import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 网站基础配置
const siteUrl = "https://aihao123-two.vercel.app";
const siteName = "AI好工具";
const siteDescription = "精选国内外优质 AI 工具，涵盖写作、绘画、编程、办公、音频、视频等多个领域。帮助用户快速找到适合自己的 AI 工具，提升工作效率。";

export const metadata: Metadata = {
  // 基础 Meta 标签
  title: {
    default: `${siteName} - 发现好用的 AI 工具`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "AI工具",
    "人工智能",
    "ChatGPT",
    "Midjourney",
    "AI绘画",
    "AI写作",
    "AI编程",
    "AI导航",
    "AI工具箱",
    "AI软件推荐",
    "Claude",
    "Gemini",
    "Copilot",
    "AI视频",
    "AI音频",
    "AI办公",
  ],
  authors: [{ name: "AI好工具团队" }],
  creator: "AI好工具",
  publisher: "AI好工具",
  
  // Robots 配置
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Canonical URL
  alternates: {
    canonical: siteUrl,
  },
  
  // Open Graph 标签（社交媒体分享）
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} - 发现好用的 AI 工具`,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AI好工具 - 发现好用的 AI 工具",
      },
    ],
  },
  
  // Twitter Card 标签
  twitter: {
    card: "summary_large_image",
    title: `${siteName} - 发现好用的 AI 工具`,
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
    creator: "@aihao123",
  },
  
  // 其他 Meta 标签
  verification: {
    google: "google-site-verification=aihao123-verification",
    other: {
      "baidu-site-verification": "baidu-verification-aihao123",
      "msvalidate.01": "bing-verification-aihao123",
    },
  },
  
  // 分类和分类目录
  category: "technology",
  
  // 应用相关
  applicationName: siteName,
  referrer: "origin-when-cross-origin",
  
  // 格式检测
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
};

// Viewport 配置
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 结构化数据 - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteName,
              url: siteUrl,
              description: siteDescription,
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: `${siteUrl}/?search={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: siteName,
                url: siteUrl,
                logo: {
                  "@type": "ImageObject",
                  url: `${siteUrl}/logo.png`,
                  width: 512,
                  height: 512,
                },
              },
              sameAs: [
                "https://github.com/aihao123",
              ],
            }),
          }}
        />
        
        {/* 面包屑导航结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "首页",
                  item: siteUrl,
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
