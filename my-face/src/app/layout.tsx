// src/app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"; // Correct import for Geist Sans
import { GeistMono } from "geist/font/mono"; // Correct import for Geist Mono
import "./globals.css";

// Metadata specific to your portfolio
export const metadata: Metadata = {
  title: "Victoria Muinde - QuantumBabe",
  description: "Portfolio website for Victoria Muinde, a Full Stack Developer specializing in modern web applications, AI, and data.", // Updated Description
  // You can add more metadata here like keywords, open graph tags, etc.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Added suppressHydrationWarning for theme handling
    <html lang="en" suppressHydrationWarning={true}>
      <body
        // Applied Geist Sans as the default sans-serif font
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased transition-colors duration-200`}
      >
        {children}
      </body>
    </html>
  );
}
