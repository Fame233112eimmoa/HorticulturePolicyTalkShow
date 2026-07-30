import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteDescription, siteName, siteUrl } from "@/lib/site";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Horticulture Policy Talk Show Proposal`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | Horticulture Policy Talk Show Proposal`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_GH",
    images: [
      {
        url: "/images/studio/studio-live-panel-setup.jpg",
        width: 1200,
        height: 900,
        alt: "Lifestyle Studios multi-camera studio production setup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Horticulture Policy Talk Show Proposal`,
    description: siteDescription,
    images: ["/images/studio/studio-live-panel-setup.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="bg-white font-sans text-ink antialiased">
        <div className="min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
