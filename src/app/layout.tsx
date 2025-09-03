import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../context/provider";

const info = {
  name: "Deepanshu Tyagi",
  twitter: "@DeepanshuTyagi",
  description:
    "Full-Stack Developer specializing in Next.js, TypeScript, and Solana. Crafting modern, scalable, and high-performance web experiences.",
  url: "https://deepanshu.in",
  image: "https://deepanshu.in/assets/preview.png", 
};

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: {
    default: `${info.name} | Full-Stack Developer & Solana Enthusiast`,
    template: `%s | ${info.name}`,
  },
  description: info.description,
  keywords: [
    "Deepanshu Tyagi",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Blockchain Developer",
    "Portfolio",
    "Web Development",
    "Frontend Developer",
    "Backend Developer",
  ],
    authors: [{ name: info.name, url: info.url }],
  creator: info.name,
  publisher: info.name,

  // Open Graph (for WhatsApp, LinkedIn, Discord, Facebook)
  openGraph: {
    type: "website",
    url: info.url,
    title: `${info.name} | Full-Stack Developer & Blockchain Developer`,
    description: info.description,
    siteName: info.name,
    images: [
      {
        url: info.image,
        width: 1200,
        height: 630,
        alt: `${info.name} Portfolio Preview`,
      },
    ],
  },

  // Twitter Card (Twitter/X)
  twitter: {
    card: "summary_large_image",
    site: info.twitter, 
    creator: info.twitter,
    title: `${info.name} | Full-Stack Developer & Blockchain Developer`,
    description: info.description,
    images: [info.image],
  },

  // SEO
  alternates: { canonical: info.url },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, noimageindex: false },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
