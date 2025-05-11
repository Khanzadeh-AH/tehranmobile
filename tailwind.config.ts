import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36aaf5',
          500: '#0c8ee0', // Primary brand color
          600: '#0070cc',
          700: '#0059a6',
          800: '#064b87',
          900: '#0a3f70',
          950: '#072a4d',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#ebeef5',
          200: '#d2dae7',
          300: '#adbad0',
          400: '#8295b5',
          500: '#63779b',
          600: '#4e5f80',
          700: '#404d68',
          800: '#374257',
          900: '#333a4a',
          950: '#21242e',
        },
        accent: '#3498db', // Accent color for CTAs
        light: '#f8fafc', // Light background
        dark: '#1e293b',  // Dark text
      },
      fontFamily: {
        'vazirmatn': ['var(--font-vazirmatn)', 'sans-serif'],
        'noto-sans-arabic': ['var(--font-noto-sans-arabic)', 'sans-serif'],
        'roboto': ['var(--font-roboto)', 'system-ui', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
      },
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
};

export default config;
