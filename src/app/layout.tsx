import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "AI好工具 - 发现好用的 AI 工具",
  description: "精选国内外优质 AI 工具，涵盖写作、绘画、编程、办公、音频、视频等多个领域。帮助用户快速找到适合自己的 AI 工具。",
  keywords: "AI工具,人工智能,ChatGPT,Midjourney,AI绘画,AI写作,AI编程",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
