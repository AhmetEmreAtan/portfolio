import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmet Emre Atan | Full-Stack Developer",
  description:
    "Personal portfolio of Ahmet Emre Atan — a passionate full-stack developer building modern web and mobile applications.",
  keywords: ["developer", "portfolio", "next.js", "react", "full-stack"],
  authors: [{ name: "Ahmet Emre Atan" }],
  openGraph: {
    title: "Ahmet Emre Atan | Full-Stack Developer",
    description: "Personal portfolio showcasing projects and skills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0a0a0d] text-[#e8e8f0] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
