import { CheckCircleIcon, PhoneIcon, ClockIcon, TruckIcon, DocumentTextIcon, WrenchScrewdriverIcon, ShieldCheckIcon, CurrencyDollarIcon, UserGroupIcon } from '@heroicons/react/24/solid';

// Define the process step type
type ProcessStep = {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
};

// List of process steps
const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'تماس و مشاوره اولیه رایگان',
    description: 'با شماره ۰۹۱۹۰۷۳۷۲۴۱ تماس بگیرید و مشکل گوشی خود را به کارشناسان متخصص ما توضیح دهید. مشاوره اولیه کاملاً رایگان است.',
    icon: PhoneIcon
  },
  {
    id: 2,
    title: 'ارزیابی و اعلام هزینه دقیق',
    description: 'کارشناسان مجرب ما پس از بررسی مشکل، هزینه دقیق تعمیر را بدون هیچ هزینه پنهانی به شما اعلام می‌کنند تا با اطمینان کامل تصمیم بگیرید.',
    icon: CurrencyDollarIcon
  },
  {
    id: 3,
    title: 'ارسال پیک اختصاصی رایگان',
    description: 'پیک اختصاصی ما در کمترین زمان ممکن (معمولاً کمتر از ۳۰ دقیقه) به آدرس شما مراجعه کرده و گوشی را با رعایت کامل اصول ایمنی تحویل می‌گیرد.',
    icon: TruckIcon
  },
  {
    id: 4,
    title: 'صدور رسید تضمینی و بیمه دستگاه',
    description: 'پس از تحویل گوشی، رسید رسمی با جزئیات کامل دستگاه، مشکل آن و تاریخ تحویل به شما ارائه می‌شود. دستگاه شما از لحظه تحویل تا بازگشت، بیمه کامل می‌شود.',
    icon: DocumentTextIcon
  },
  {
    id: 5,
    title: 'عیب‌یابی تخصصی توسط مهندسین مجرب',
    description: 'در موارد پیچیده، مهندسین متخصص ما با استفاده از تجهیزات پیشرفته، عیب‌یابی دقیق انجام داده و نتایج را به همراه راه‌حل‌های پیشنهادی به شما ارائه می‌دهند.',
    icon: WrenchScrewdriverIcon
  },
  {
    id: 6,
    title: 'تأیید نهایی قبل از شروع تعمیرات',
    description: 'پس از عیب‌یابی کامل و اعلام هزینه دقیق، هیچ اقدامی بدون تأیید نهایی شما انجام نمی‌شود. شفافیت و رضایت مشتری اولویت اصلی ماست.',
    icon: UserGroupIcon
  },
  {
    id: 7,
    title: 'تعمیر تخصصی با قطعات اصلی',
    description: 'تکنسین‌های متخصص ما با بیش از ۱۰ سال تجربه، با استفاده از قطعات ۱۰۰٪ اصلی و ابزار پیشرفته، گوشی شما را با دقت بالا تعمیر می‌کنند.',
    icon: CheckCircleIcon
  },
  {
    id: 8,
    title: 'تحویل سریع با گارانتی معتبر',
    description: 'پس از تعمیر و تست کامل عملکرد، گوشی به همراه گارانتی کتبی معتبر تا ۶ ماه، در سریع‌ترین زمان ممکن به شما تحویل داده می‌شود.',
    icon: ShieldCheckIcon
  }
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">مراحل تعمیر گوشی</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            در تهران موبایل، تعمیر گوشی شما با <span className="text-primary-600 font-semibold">۸ مرحله تخصصی</span> و با استفاده از 
            <span className="text-primary-600 font-semibold"> جدیدترین تجهیزات</span> انجام می‌شود. 
            فرآیندی شفاف و حرفه‌ای که رضایت ۹۸٪ مشتریان ما را به همراه داشته است.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 to-primary-500 transform translate-x-1/2 rounded-full"></div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step number indicator */}
                <div className="md:absolute md:right-1/2 md:transform md:translate-x-1/2 z-10 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold mb-4 md:mb-0 shadow-lg">
                  {step.id}
                </div>

                {/* Step content */}
                <div 
                  className={`md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:text-right'
                  } bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1`}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <step.icon className={`h-7 w-7 text-primary-500 ml-3 inline-block`} />
                    {step.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a 
            href="tel:+989190737241" 
            className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-4 rounded-full text-xl font-medium hover:from-primary-600 hover:to-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform duration-300"
          >
            <PhoneIcon className="h-6 w-6 ml-2" />
            <span>همین حالا تماس بگیرید</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
