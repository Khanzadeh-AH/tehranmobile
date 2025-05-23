import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'تهران موبایل | خدمات تعمیر موبایل',
    short_name: 'تهران موبایل',
    description: 'تهران موبایل ارائه دهنده خدمات تخصصی تعمیر انواع گوشی های موبایل با بهترین کیفیت و قیمت مناسب',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0c8ee0',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-192x192-maskable.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512x512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    orientation: 'portrait',
    dir: 'rtl',
    lang: 'fa-IR',
  };
}