"use client";

import { useState } from 'react';
import Link from 'next/link';
import { PhoneIcon, LanguageIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                {/* Placeholder for logo - will be replaced with actual logo */}
                <div className="absolute inset-0 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">تهران</span>
                </div>
              </div>
              <div>
                <h1 className="text-lg font-bold text-primary-800">تهران موبایل</h1>
                <p className="text-xs text-gray-500">Tehran Mobile</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-6">
            <Link href="/" className="text-gray-800 hover:text-primary-500 transition-colors">
              خانه
            </Link>
            <Link href="#services" className="text-gray-800 hover:text-primary-500 transition-colors">
              خدمات
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-primary-500 transition-colors">
              درباره ما
            </Link>
            <Link href="#contact" className="text-gray-800 hover:text-primary-500 transition-colors">
              تماس با ما
            </Link>
          </nav>

          {/* Call Button & Language Toggle */}
          <div className="hidden md:flex items-center space-x-reverse space-x-4">
            <a 
              href="tel:+989190737241" 
              className="flex items-center bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors"
            >
              <PhoneIcon className="h-5 w-5 ml-2" />
              <span>۰۹۱۹۰۷۳۷۲۴۱</span>
            </a>
            <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors">
              <LanguageIcon className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
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
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-800 hover:text-primary-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                خانه
              </Link>
              <Link 
                href="#services" 
                className="text-gray-800 hover:text-primary-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                خدمات
              </Link>
              <Link 
                href="#about" 
                className="text-gray-800 hover:text-primary-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                درباره ما
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-800 hover:text-primary-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                تماس با ما
              </Link>
              <a 
                href="tel:+989190737241" 
                className="flex items-center bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors w-fit"
              >
                <PhoneIcon className="h-5 w-5 ml-2" />
                <span>۰۹۱۹۰۷۳۷۲۴۱</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
