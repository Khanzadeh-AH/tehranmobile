import type { Metadata } from "next";
import { Noto_Sans_Arabic, Roboto, Playfair_Display, Vazirmatn } from "next/font/google";
import "./globals.css";
import ClientSchemaMarkup from "@/components/seo/ClientSchemaMarkup";

// Common font configuration options
const fontConfig = {
  weight: ["400", "700"],
  display: "swap",
  adjustFontFallback: true,
  preload: false,
};

// Configure fonts with specific options
const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
  fallback: ['system-ui', 'arial'],
  weight: ["400", "700"],
  display: "swap",
  adjustFontFallback: true,
  preload: false,
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  fallback: ['system-ui', 'arial'],
  weight: ["400", "700"],
  display: "swap",
  adjustFontFallback: true,
  preload: false,
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  fallback: ['system-ui', 'serif'],
  weight: ["400", "700"],
  display: "swap",
  adjustFontFallback: true,
  preload: false,
});

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  fallback: ['system-ui', 'arial'],
  preload: true, // Override to true as it's the primary font
  weight: ["400", "700"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tehranmobile.ir'),
  title: "تهران موبایل | خدمات تعمیر موبایل",
  description: "تهران موبایل ارائه دهنده خدمات تخصصی تعمیر انواع گوشی های موبایل با بهترین کیفیت و قیمت مناسب",
  keywords: "تعمیر موبایل, تعمیرات موبایل, تعویض قطعات موبایل, تعمیر گوشی, خدمات موبایل, تهران موبایل",
  alternates: {
    canonical: 'https://tehranmobile.ir',
    languages: {
      'en': 'https://tehranmobile.ir/en',
      'fa': 'https://tehranmobile.ir'
    }
  },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: 'https://tehranmobile.ir',
    title: 'تهران موبایل | خدمات تعمیر موبایل',
    description: 'تهران موبایل ارائه دهنده خدمات تخصصی تعمیر انواع گوشی های موبایل با بهترین کیفیت و قیمت مناسب',
    siteName: 'تهران موبایل',
  },
  // Add alternate links in metadata
  links: [
    { rel: 'alternate', hrefLang: 'fa', href: 'https://tehranmobile.ir' },
    { rel: 'alternate', hrefLang: 'en', href: 'https://tehranmobile.ir/en' },
    { rel: 'alternate', hrefLang: 'x-default', href: 'https://tehranmobile.ir' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${notoSansArabic.variable} ${roboto.variable} ${playfairDisplay.variable}`}>
      <body className="font-vazirmatn antialiased bg-light text-dark">
        <ClientSchemaMarkup />
        {children}
      </body>
    </html>
  );
}
