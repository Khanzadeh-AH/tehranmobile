import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import AboutUs from "@/components/sections/AboutUs";
import Contact from "@/components/sections/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تهران موبایل | خدمات تعمیر موبایل",
  description: "تهران موبایل ارائه دهنده خدمات تخصصی تعمیر انواع گوشی های موبایل با بهترین کیفیت و قیمت مناسب",
  keywords: "تعمیر موبایل, تعمیرات موبایل, تعویض قطعات موبایل, تعمیر گوشی, خدمات موبایل, تهران موبایل",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
