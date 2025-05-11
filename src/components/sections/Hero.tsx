"use client";

import { PhoneIcon } from '@heroicons/react/24/solid';
import ImageSlider from '@/components/ui/ImageSlider';
import { heroSliderContent } from '@/data/sliderContent';
import { useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="relative bg-gradient-to-br from-primary-500 to-primary-700 text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-10 sm:-right-20 -top-10 sm:-top-20 h-40 sm:h-60 md:h-80 w-40 sm:w-60 md:w-80 rounded-full bg-white"></div>
        <div className="absolute left-10 sm:left-20 bottom-5 sm:bottom-10 h-20 sm:h-30 md:h-40 w-20 sm:w-30 md:w-40 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-right relative mb-8 md:mb-0">
            {heroSliderContent.map((slide, index) => (
              <div 
                key={index} 
                className={`transition-all duration-500 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 absolute inset-0 translate-y-8'
                }`}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl opacity-90 mb-6 sm:mb-8">
                  {slide.description}
                </p>
              </div>
            ))}

            <a 
              href="tel:+989190737241" 
              className="inline-flex items-center justify-center bg-white text-primary-700 px-5 sm:px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-primary-50 transition-colors shadow-lg hover:scale-105 duration-300 w-full sm:w-auto"
            >
              <PhoneIcon className="h-5 w-5 ml-2" />
              <span>تماس بگیرید</span>
            </a>
          </div>

          {/* Image Slider */}
          <div className="w-full md:w-1/2">
            <ImageSlider 
              slides={heroSliderContent}
              onSlideChange={(index) => setCurrentSlide(index)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
