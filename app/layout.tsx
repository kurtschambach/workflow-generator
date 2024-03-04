import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GitHub Workflow Generator",
  description: "Created by a3chron",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-bg">
          {children}
          <p className="text-light-green">Created by <Link className="hover:text-text duration-1000 underline" href="https://a3chron.vercel.app/">a3chron</Link></p>
        </main>
      </body>
    </html>
  );
}
