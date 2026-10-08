import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ai Interior — Redefine Any Space with AI Precision",
  description:
    "Transform interiors, exteriors, flooring styles, lighting scenarios, and architectural sketches in seconds with Ai Interior AI studio engine.",
  keywords: [
    "AI Interior Design",
    "AI Exterior Design",
    "Floor Restyle",
    "Change Lighting Scenario",
    "Sketch Rendering",
    "Architectural AI Renders",
    "Ai Interior",
  ],
  authors: [{ name: "AppNaya Technologies", url: "http://www.appnayatech.com/" }],
  icons: {
    icon: "/images/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-[#fafafa] text-[#111827] min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
