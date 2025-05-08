import Link from 'next/link';
import { 
  InstagramIcon, 
  TelegramIcon, 
  WhatsappIcon, 
  LinkedinIcon 
} from './SocialIcons';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">تهران موبایل</h3>
            <p className="text-gray-400 mb-4">
              ارائه دهنده خدمات تخصصی تعمیر انواع گوشی‌های موبایل با بهترین کیفیت و قیمت مناسب
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a 
                href="https://instagram.com/tehranmobile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a 
                href="https://t.me/tehranmobile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Telegram"
              >
                <TelegramIcon className="h-6 w-6" />
              </a>
              <a 
                href="https://wa.me/989190737241" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/company/tehranmobile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  صفحه اصلی
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  خدمات
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">خدمات</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  تعویض صفحه نمایش
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  تعویض باتری
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  تعمیر برد گوشی
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  تعمیر دوربین
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  سایر خدمات
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">ارتباط با ما</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="block font-medium">آدرس:</span>
                <span className="block">تهران، خیابان ولیعصر، بالاتر از میدان ونک</span>
              </li>
              <li className="text-gray-400">
                <span className="block font-medium">تلفن:</span>
                <a href="tel:+989190737241" className="hover:text-white transition-colors">
                  ۰۹۱۹۰۷۳۷۲۴۱
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block font-medium">ایمیل:</span>
                <a href="mailto:info@tehranmobile.ir" className="hover:text-white transition-colors">
                  info@tehranmobile.ir
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} تهران موبایل. تمامی حقوق محفوظ است.
          </div>
          <div className="flex flex-wrap justify-center space-x-reverse space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              حریم خصوصی
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              شرایط و قوانین
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
              سوالات متداول
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;