import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import BinaryRain from "@/components/BinaryRain";
import CityScene from "@/components/CityScene";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tony Plasencia",
    template: "%s | Tony Plasencia",
  },
  description:
    "Tony Plasencia — founder, builder, GTM at MoonPay. Built startups in crypto and AI agents.",
  metadataBase: new URL("https://tonyplasencia.com"),
  openGraph: {
    title: "Tony Plasencia",
    description:
      "Founder, builder, GTM at MoonPay. Built startups in crypto and AI agents.",
    url: "https://tonyplasencia.com",
    siteName: "Tony Plasencia",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Tony Plasencia",
    description:
      "Founder, builder, GTM at MoonPay. Built startups in crypto and AI agents.",
    creator: "@tonyplasencia3",
  },
  alternates: {
    canonical: "https://tonyplasencia.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-mono scanlines">
        <BinaryRain />
        <CityScene />
        <Nav />
        <main className="relative z-10 flex-1 pt-20">
          <div className="content-backdrop max-w-4xl mx-auto my-4 rounded-sm px-2 py-1 sm:px-4 sm:py-2">
            {children}
          </div>
        </main>
        <footer className="relative z-10 border-t border-surface-border py-6 text-center text-xs text-muted">
          <span className="text-accent/40">&gt;</span> tony.plasencia &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
