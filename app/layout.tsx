import type { Metadata } from "next";
import { Syne, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Anisur Rahman Arzu | Frontend Software Engineer in Cologne",
  description:
    "Portfolio of Anisur Rahman Arzu — Frontend Software Engineer in Cologne, Germany. Opportunity Card holder specializing in React, Next.js, and TypeScript. Open to full-time roles.",
  keywords: [
    "Anisur Rahman",
    "Frontend Engineer",
    "Cologne",
    "Germany",
    "Opportunity Card",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${outfit.variable} ${jetbrains.variable} antialiased bg-bg text-text`}
      >
        {children}
      </body>
    </html>
  );
}
