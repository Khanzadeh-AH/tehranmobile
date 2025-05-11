import type { Metadata } from "next";
import { Noto_Sans_Arabic, Roboto, Playfair_Display } from "next/font/google";
import "./globals.css";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="alternate" hrefLang="fa" href="https://tehranmobile.ir" />
        <link rel="alternate" hrefLang="en" href="https://tehranmobile.ir/en" />
        <link rel="alternate" hrefLang="x-default" href="https://tehranmobile.ir" />
        <SchemaMarkup />
      </head>
      <body
        className={`${notoSansArabic.variable} ${roboto.variable} ${playfairDisplay.variable} font-noto-sans-arabic antialiased bg-light text-dark`}
      >
        {children}
      </body>
    </html>
  );
}
