import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "重庆：从山水之城到赛博朋克",
  description: "2010-2025 旅游业高质量发展深度观察",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-cyber-bg text-white antialiased">{children}</body>
    </html>
  );
}
