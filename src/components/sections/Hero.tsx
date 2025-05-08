import { PhoneIcon } from '@heroicons/react/24/solid';

const Hero = () => {
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
          <div className="md:w-1/2 text-center md:text-right">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              تعمیر تخصصی انواع گوشی‌های موبایل در تهران
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              با بیش از ۱۰ سال تجربه، تیم متخصص تهران موبایل آماده ارائه خدمات تعمیر و تعویض قطعات انواع گوشی‌های موبایل با بهترین کیفیت و قیمت مناسب است.
            </p>
            <a 
              href="tel:+989190737241" 
              className="inline-flex items-center bg-white text-primary-700 px-6 py-3 rounded-full text-lg font-medium hover:bg-primary-50 transition-colors shadow-lg"
            >
              <PhoneIcon className="h-5 w-5 ml-2" />
              <span>تماس بگیرید</span>
            </a>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative">
            <div className="relative h-[300px] md:h-[400px] w-full">
              {/* Placeholder for hero image - will be replaced with actual image */}
              <div className="absolute inset-0 bg-primary-600 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-white opacity-80">تصویر تکنسین در حال تعمیر گوشی</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
