import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./globals.css";

// Self-hosted from npm (@fontsource). Brand Guide §2 permits self-hosting and prefers it.
// One variable file covers every permitted weight (400, 600, 700, 800).
const sans = localFont({
  src: "../node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2",
  weight: "400 800",
  variable: "--font-sans",
  display: "swap",
});
const mono = localFont({
  src: "../node_modules/@fontsource/dm-mono/files/dm-mono-latin-400-normal.woff2",
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name}. ${site.tagline}` }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

// Browser chrome color. Metadata needs a literal; this is --ff-navy.
export const viewport: Viewport = { themeColor: "#0f2340" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Enables scroll reveal only when JS runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
