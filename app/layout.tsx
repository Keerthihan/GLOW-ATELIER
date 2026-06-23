import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const salonName = "Glow Atelier";

export const metadata: Metadata = {
  title: {
    default: `Best Beauty Parlour in Colombo | ${salonName}`,
    template: `%s | ${salonName}`,
  },
  description:
    "Professional beauty parlour in Colombo offering hair styling, facial treatments, bridal makeup, skin care and nail services. Trusted by Colombo's finest.",
  keywords: [
    "Beauty Salon Colombo",
    "Beauty Parlour Colombo",
    "Hair Salon Colombo",
    "Makeup Salon Colombo",
    "Bridal Salon Colombo",
    "Spa Colombo",
    "Best beauty parlour in Colombo",
    "Affordable beauty salon in Colombo",
    "Professional makeup artists in Colombo",
    "Luxury beauty treatments Colombo",
  ],
  openGraph: {
    title: `Best Beauty Parlour in Colombo | ${salonName}`,
    description:
      "Professional beauty parlour in Colombo offering hair styling, facial treatments, bridal makeup, skin care and nail services. Trusted by Colombo's finest.",
    locale: "en_LK",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://aura-lotus.com",
    siteName: salonName,
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Beauty Parlour in Colombo | ${salonName}`,
    description:
      "Professional beauty parlour in Colombo offering hair styling, facial treatments, bridal makeup, skin care and nail services. Trusted by Colombo's finest.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://aura-lotus.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": salonName,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "45 Galle Road, Colombo 03",
      "addressLocality": "Cardiff",
      "addressRegion": "Colombo",
      "addressCountry": "LK",
    },
    "telephone": "+94 11 234 5678",
    "openingHours": "Mo-Su 09:00-19:00",
    "priceRange": "$$",
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <JsonLd data={jsonLd} />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} font-body bg-white-rock text-thunder antialiased min-h-screen`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
