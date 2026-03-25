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
  description: "Tony Plasencia's personal website",
  metadataBase: new URL("https://tonyplasencia.com"),
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
          {children}
        </main>
        <footer className="relative z-10 border-t border-surface-border py-6 text-center text-xs text-muted">
          <span className="text-accent/40">&gt;</span> tony.plasencia &copy; {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
