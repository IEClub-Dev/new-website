import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/layout/NavBar.tsx";
import Footer from "../components/layout/Footer.tsx";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IE Club",
  description: "KFUPM's Intellectual and Electronic Sports Club",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <NavBar />
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
      <Footer />
    </>
  );
}
