import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Vibudh Rathore | Full Stack Developer",
  description:
    "Portfolio of Vibudh Rathore, a Full Stack Developer building SaaS, e-commerce, workflow applications, REST APIs, RBAC systems, and responsive products with Next.js, React, Node.js, PostgreSQL, MongoDB, Prisma, and Shopify Liquid.",
  keywords: [
    "Vibudh Rathore",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "PostgreSQL",
    "MongoDB",
    "Shopify Liquid",
    "SaaS Developer",
    "Noida Developer",
  ],
  authors: [{ name: "Vibudh Rathore", url: "https://github.com/Vibudh08" }],
  creator: "Vibudh Rathore",
  openGraph: {
    title: "Vibudh Rathore | Full Stack Developer",
    description:
      "Modern full-stack portfolio featuring SaaS, e-commerce, workflow systems, APIs, RBAC, and responsive web applications.",
    url: "https://github.com/Vibudh08",
    siteName: "Vibudh Rathore Portfolio",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibudh Rathore | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, Node.js, PostgreSQL, MongoDB, and Shopify Liquid.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
