"use client";

import { PhoneIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Slider content with images and text
const sliderContent = [
  {
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=2070&auto=format&fit=crop",
    title: "تعمیر تخصصی انواع گوشی‌های موبایل در تهران",
    description: "با بیش از ۱۰ سال تجربه، تیم متخصص تهران موبایل آماده ارائه خدمات تعمیر و تعویض قطعات انواع گوشی‌های موبایل با بهترین کیفیت و قیمت مناسب است.",
    alt: "تکنسین در حال تعمیر گوشی موبایل"
  },
  {
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=2067&auto=format&fit=crop",
    title: "خدمات تعویض قطعات اصلی با گارانتی",
    description: "استفاده از قطعات اصلی و با کیفیت همراه با گارانتی معتبر برای اطمینان خاطر شما مشتریان عزیز",
    alt: "قطعات گوشی موبایل"
  },
  {
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1974&auto=format&fit=crop",
    title: "تعمیرات سخت‌افزاری و نرم‌افزاری",
    description: "ارائه خدمات تخصصی در زمینه تعمیرات سخت‌افزاری و نرم‌افزاری انواع گوشی‌های هوشمند با پیشرفته‌ترین تجهیزات",
    alt: "تعمیر سخت افزاری گوشی"
  },
  {
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=2070&auto=format&fit=crop",
    title: "تعویض صفحه نمایش با کیفیت بالا",
    description: "خدمات تخصصی تعویض صفحه نمایش انواع گوشی‌های هوشمند با استفاده از قطعات اصلی و گارانتی معتبر",
    alt: "تعویض صفحه نمایش گوشی"
  },
  {
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=1926&auto=format&fit=crop",
    title: "تعویض باتری با گارانتی",
    description: "تعویض باتری انواع گوشی‌های موبایل با استفاده از باتری‌های اصلی و با کیفیت همراه با گارانتی",
    alt: "تعویض باتری گوشی موبایل"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Manual navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false); // Pause auto-play when manually navigating

    // Resume auto-play after 10 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);

    return () => clearTimeout(timeout);
  };

  // Previous and Next slide navigation
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderContent.length - 1 : prev - 1));
    setIsAutoPlaying(false);

    // Resume auto-play after 10 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);

    return () => clearTimeout(timeout);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
    setIsAutoPlaying(false);

    // Resume auto-play after 10 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);

    return () => clearTimeout(timeout);
  };

  return (
    <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white"></div>
        <div className="absolute left-20 bottom-10 h-40 w-40 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-right relative">
            {sliderContent.map((slide, index) => (
              <div 
                key={index} 
                className={`transition-all duration-700 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 absolute inset-0 translate-y-8'
                }`}
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl opacity-90 mb-8">
                  {slide.description}
                </p>
              </div>
            ))}

            <a 
              href="tel:+989190737241" 
              className="inline-flex items-center bg-white text-primary-700 px-6 py-3 rounded-full text-lg font-medium hover:bg-primary-50 transition-colors shadow-lg hover:scale-105 duration-300"
            >
              <PhoneIcon className="h-5 w-5 ml-2" />
              <span>تماس بگیرید</span>
            </a>
          </div>

          {/* Image Slider */}
          <div className="md:w-1/2 relative">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
              {/* Slider Images */}
              {sliderContent.map((slide, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 overflow-hidden transform transition-all duration-700 ${
                    index === currentSlide 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : index < currentSlide
                        ? 'opacity-0 -translate-x-full scale-95'
                        : 'opacity-0 translate-x-full scale-95'
                  }`}
                >
                  <Image 
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button 
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
                aria-label="Previous slide"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>

              <button 
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 z-10"
                aria-label="Next slide"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>

              {/* Slide Counter */}
              <div className="absolute bottom-4 right-4 bg-black/30 text-white text-sm px-2 py-1 rounded-full backdrop-blur-sm">
                {currentSlide + 1} / {sliderContent.length}
              </div>
            </div>

            {/* Slider Navigation Dots */}
            <div className="flex justify-center mt-4 space-x-3 rtl:space-x-reverse">
              {sliderContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
