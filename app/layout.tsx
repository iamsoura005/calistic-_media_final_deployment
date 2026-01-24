import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calisticmedia.com"),
  title: "Calistic Media | India's Premier Organic Marketing Agency",
  description: "Drive sustainable ROI through pure organic growth. 50,000+ creators, 100+ brands, Pan-India reach. Influencer marketing, content creation & customized campaigns.",
  keywords: ["influencer marketing", "organic growth", "content creation", "social media marketing", "India", "brand marketing", "digital marketing agency", "Pan India marketing"],
  authors: [{ name: "Calistic Media" }],
  creator: "Calistic Media",
  publisher: "Calistic Media",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://calisticmedia.com",
    siteName: "Calistic Media",
    title: "Calistic Media | India's Premier Organic Marketing Agency",
    description: "Drive sustainable ROI through pure organic growth. 50,000+ creators, 100+ brands, Pan-India reach.",
    images: [
      {
        url: "/logo-gold.png",
        width: 1200,
        height: 630,
        alt: "Calistic Media - Pure Organic Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calistic Media | India's Premier Organic Marketing Agency",
    description: "Drive sustainable ROI through pure organic growth. 50,000+ creators, 100+ brands.",
    images: ["/logo-gold.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
