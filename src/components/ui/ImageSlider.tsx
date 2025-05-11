"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export interface SlideItem {
  image: string;
  title: string;
  description: string;
  alt: string;
}

interface ImageSliderProps {
  slides: SlideItem[];
  autoPlayInterval?: number;
  autoPlayResumeDelay?: number;
  renderContent?: (slide: SlideItem, isActive: boolean) => React.ReactNode;
  onSlideChange?: (index: number) => void;
}

const ImageSlider = ({
  slides,
  autoPlayInterval = 5000,
  autoPlayResumeDelay = 10000,
  renderContent,
  onSlideChange
}: ImageSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlide);
      if (onSlideChange) onSlideChange(nextSlide);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, autoPlayInterval, currentSlide, onSlideChange]);

  // Helper function to pause auto-play and set a timer to resume
  const pauseAndResumeAutoPlay = () => {
    setIsAutoPlaying(false);

    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
    }, autoPlayResumeDelay);

    return () => clearTimeout(timeout);
  };

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    if (onSlideChange) onSlideChange(index);
    pauseAndResumeAutoPlay();
  };

  // Previous and Next slide navigation
  const prevSlide = () => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
    if (onSlideChange) onSlideChange(newIndex);
    pauseAndResumeAutoPlay();
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
    if (onSlideChange) onSlideChange(newIndex);
    pauseAndResumeAutoPlay();
  };

  return (
    <div className="relative">
      <div className="relative w-full rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '16/9' }}>
        {/* Slider Images */}
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 overflow-hidden transform transition-all duration-500 ${
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
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
            />
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
          </div>
        ))}

        {/* Custom content rendering */}
        {renderContent && slides.map((slide, index) => (
          <div 
            key={`content-${index}`}
            className={`absolute inset-0 z-10 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {renderContent(slide, index === currentSlide)}
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 active:bg-white/60 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10 touch-manipulation"
          aria-label="Previous slide"
        >
          <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 active:bg-white/60 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all duration-300 z-10 touch-manipulation"
          aria-label="Next slide"
        >
          <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        {/* Slide Counter */}
        <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/40 text-white text-xs sm:text-sm px-2 py-1 rounded-full backdrop-blur-sm">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {/* Slider Navigation Dots */}
      <div className="flex justify-center mt-3 sm:mt-4 space-x-4 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
