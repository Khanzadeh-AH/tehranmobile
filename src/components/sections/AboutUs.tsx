import Image from 'next/image';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">درباره تهران موبایل</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            تهران موبایل با هدف ارائه خدمات تخصصی تعمیر موبایل با کیفیت بالا و قیمت منصفانه تاسیس شده است.
          </p>
        </div>

        {/* Company History & Mission */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">تاریخچه و ماموریت ما</h3>
              <p className="text-gray-600 mb-4">
                تهران موبایل در سال ۱۳۹۰ با یک تیم کوچک ۳ نفره شروع به کار کرد. هدف ما از ابتدا ارائه خدمات تعمیر موبایل با بالاترین کیفیت و قیمت منصفانه بوده است.
              </p>
              <p className="text-gray-600 mb-4">
                امروز با بیش از ۱۰ سال تجربه و تیمی متشکل از متخصصان حرفه‌ای، افتخار می‌کنیم که به یکی از معتبرترین مراکز تعمیر موبایل در تهران تبدیل شده‌ایم.
              </p>
              <p className="text-gray-600">
                ماموریت ما ارائه راه‌حل‌های سریع، مقرون به صرفه و قابل اعتماد برای مشکلات گوشی‌های هوشمند است. ما معتقدیم که هر مشتری حق دارد از خدمات با کیفیت و شفاف بهره‌مند شود.
              </p>
            </div>
            <div className="md:w-1/2 relative min-h-[250px]">
              <div className="absolute inset-0 rounded-lg overflow-hidden shadow-lg animate-fadeIn">
                <Image 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
                  alt="دفتر تهران موبایل"
                  fill
                  className="object-cover transform transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
