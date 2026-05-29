import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "700"],
});

const META = {
  title: "Railflare",
  description:
    "Cloudflare for the agentic economy — giving control back to businesses without compromising agent autonomy over payments.",
  url: "https://railflare.com",
  handle: "@railflare",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(META.url),

  title: {
    default: META.title,
    template: `%s — ${META.title}`,
  },
  description: META.description,
  applicationName: "Railflare",
  keywords: [
    "agentic payments",
    "AI agent payments",
    "payment control plane",
    "autonomous transactions",
    "agent economy",
    "payment observability",
  ],

  openGraph: {
    type: "website",
    url: META.url,
    siteName: META.title,
    title: META.title,
    description: META.description,
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: META.handle,
    creator: META.handle,
    title: META.title,
    description: META.description,
  },

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/icon.png",
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },

  alternates: {
    canonical: META.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: "var(--font-sans)" }}>{children}</body>
    </html>
  );
}
