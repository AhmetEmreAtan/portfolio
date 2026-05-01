import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

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
  title: "Ahmet Emre Atan | Android & Full-Stack Geliştirici",
  description:
    "Ahmet Emre Atan'ın kişisel portfolyosu — Kotlin, Android ve web teknolojileri ile modern uygulamalar geliştiren tutkulu bir yazılım geliştirici.",
  keywords: ["android", "kotlin", "geliştirici", "portfolio", "mobil uygulama", "noc", "koçsistem"],
  authors: [{ name: "Ahmet Emre Atan" }],
  openGraph: {
    title: "Ahmet Emre Atan | Android & Full-Stack Geliştirici",
    description: "Kotlin, Android ve web teknolojileri üzerine kişisel portfolyo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0a0a0d] text-[#e8e8f0] antialiased font-sans">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
