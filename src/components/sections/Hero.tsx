"use client";

import { PhoneIcon } from '@heroicons/react/24/solid';
import ImageSlider from '@/components/ui/ImageSlider';
import { heroSliderContent } from '@/data/sliderContent';
import { useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
            {heroSliderContent.map((slide, index) => (
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
          <div className="md:w-1/2">
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
