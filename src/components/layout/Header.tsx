"use client";

import { useState } from 'react';
import Link from 'next/link';
import { PhoneIcon, DevicePhoneMobileIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-primary-600 to-primary-500 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-3 bg-white rounded-full p-2 shadow-md flex items-center justify-center">
                <DevicePhoneMobileIcon className="h-8 w-8 text-primary-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">تهران موبایل</h1>
                <p className="text-xs text-white/80">Tehran Mobile</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-6">
            <Link href="/" className="text-white hover:text-white/80 transition-colors font-medium">
              خانه
            </Link>
            <Link href="#services" className="text-white hover:text-white/80 transition-colors font-medium">
              خدمات
            </Link>
            <Link href="#about" className="text-white hover:text-white/80 transition-colors font-medium">
              درباره ما
            </Link>
            <Link href="#contact" className="text-white hover:text-white/80 transition-colors font-medium">
              تماس با ما
            </Link>
          </nav>

          {/* Call Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+989190737241" 
              className="flex items-center bg-white text-primary-600 px-5 py-2 rounded-full hover:bg-white/90 transition-colors shadow-md font-medium"
            >
              <PhoneIcon className="h-5 w-5 ml-2" />
              <span className="font-vazirmatn text-lg">09190737241</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                خانه
              </Link>
              <Link 
                href="#services" 
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                خدمات
              </Link>
              <Link 
                href="#about" 
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                درباره ما
              </Link>
              <Link 
                href="#contact" 
                className="text-white hover:text-white/80 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                تماس با ما
              </Link>
              <a 
                href="tel:+989190737241" 
                className="flex items-center bg-white text-primary-600 px-5 py-2 rounded-full hover:bg-white/90 transition-colors shadow-md font-medium w-fit"
              >
                <PhoneIcon className="h-5 w-5 ml-2" />
                <span className="font-vazirmatn text-lg">09190737241</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
