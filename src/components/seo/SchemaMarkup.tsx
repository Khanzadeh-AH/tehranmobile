"use client";

import React from 'react';

// This component is explicitly marked as a client component

const SchemaMarkup: React.FC = () => {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'تهران موبایل',
    'alternateName': 'Tehran Mobile',
    'description': 'تهران موبایل ارائه دهنده خدمات تخصصی تعمیر انواع گوشی های موبایل با بهترین کیفیت و قیمت مناسب',
    'url': 'https://tehranmobile.ir',
    'telephone': '+989190737241',
    'email': 'info@tehranmobile.ir',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'خیابان ولیعصر، بالاتر از میدان ونک، مجتمع تجاری ونک، طبقه ۳، واحد ۳۰۵',
      'addressLocality': 'تهران',
      'addressRegion': 'تهران',
      'postalCode': '1234567890',
      'addressCountry': 'IR'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 35.7575,
      'longitude': 51.4101
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
        'opens': '09:00',
        'closes': '20:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Friday'],
        'opens': '00:00',
        'closes': '00:00'
      }
    ],
    'priceRange': '$$',
    'image': 'https://tehranmobile.ir/logo.png',
    'sameAs': [
      'https://instagram.com/tehranmobile',
      'https://t.me/tehranmobile',
      'https://linkedin.com/company/tehranmobile'
    ]
  };

  const serviceBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobilePhoneStore',
    'name': 'تهران موبایل',
    'description': 'تهران موبایل ارائه دهنده خدمات تخصصی تعمیر انواع گوشی های موبایل با بهترین کیفیت و قیمت مناسب',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'خدمات تعمیر موبایل',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'تعویض صفحه نمایش',
            'description': 'تعویض تخصصی انواع صفحه نمایش LCD و OLED گوشی‌های موبایل با قطعات اصلی و گارانتی'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'تعویض باتری',
            'description': 'تعویض باتری فرسوده با باتری اصلی و با کیفیت برای افزایش عمر شارژدهی گوشی شما'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'تعمیر برد گوشی',
            'description': 'عیب‌یابی و تعمیر تخصصی انواع مشکلات سخت‌افزاری و نرم‌افزاری برد گوشی'
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([localBusinessSchema, serviceBusinessSchema])
      }}
    />
  );
};

export default SchemaMarkup;
