import type { Metadata } from "next";
import { Open_Sans, Kanit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Lumen — Build AI agents in minutes",
  description:
    "Design, deploy, and scale AI agents without wrangling infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full antialiased", openSans.variable, kanit.variable)}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
