import { 
  DevicePhoneMobileIcon, 
  Battery100Icon, 
  CpuChipIcon, 
  SpeakerWaveIcon, 
  CameraIcon, 
  WrenchScrewdriverIcon 
} from '@heroicons/react/24/outline';

// Define the service type
type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  price?: string;
};

// List of services
const services: Service[] = [
  {
    id: 1,
    title: 'تعویض صفحه نمایش',
    description: 'تعویض تخصصی انواع صفحه نمایش LCD و OLED گوشی‌های موبایل با قطعات اصلی و گارانتی',
    icon: DevicePhoneMobileIcon,
    price: 'از ۱,۵۰۰,۰۰۰ تومان'
  },
  {
    id: 2,
    title: 'تعویض باتری',
    description: 'تعویض باتری فرسوده با باتری اصلی و با کیفیت برای افزایش عمر شارژدهی گوشی شما',
    icon: Battery100Icon,
    price: 'از ۵۰۰,۰۰۰ تومان'
  },
  {
    id: 3,
    title: 'تعمیر برد گوشی',
    description: 'عیب‌یابی و تعمیر تخصصی انواع مشکلات سخت‌افزاری و نرم‌افزاری برد گوشی',
    icon: CpuChipIcon,
    price: 'از ۸۰۰,۰۰۰ تومان'
  },
  {
    id: 4,
    title: 'تعمیر بلندگو و میکروفون',
    description: 'رفع مشکلات صدا، بلندگو، میکروفون و جک هدفون گوشی‌های موبایل',
    icon: SpeakerWaveIcon,
    price: 'از ۴۰۰,۰۰۰ تومان'
  },
  {
    id: 5,
    title: 'تعمیر دوربین',
    description: 'تعمیر و تعویض دوربین جلو و عقب انواع گوشی‌های موبایل با قطعات اصلی',
    icon: CameraIcon,
    price: 'از ۶۰۰,۰۰۰ تومان'
  },
  {
    id: 6,
    title: 'سایر خدمات',
    description: 'ارائه انواع خدمات تعمیراتی دیگر شامل تعویض قاب، دکمه‌ها، شارژر و غیره',
    icon: WrenchScrewdriverIcon
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">خدمات تعمیر موبایل</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            تهران موبایل با بهره‌گیری از تکنسین‌های متخصص و تجهیزات پیشرفته، انواع خدمات تعمیر و تعویض قطعات گوشی‌های موبایل را ارائه می‌دهد.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                <service.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.price && (
                <div className="text-primary-700 font-semibold">{service.price}</div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            برای اطلاع از قیمت دقیق تعمیر گوشی خود با ما تماس بگیرید
          </p>
          <a 
            href="tel:+989190737241" 
            className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-primary-600 transition-colors"
          >
            <span>تماس برای استعلام قیمت</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
