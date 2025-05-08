import { CheckCircleIcon } from '@heroicons/react/24/solid';

// Define the process step type
type ProcessStep = {
  id: number;
  title: string;
  description: string;
};

// List of process steps
const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: 'مشتری تماس می‌گیرد و درخواست تعمیر می‌دهد',
    description: 'با شماره ۰۹۱۹۰۷۳۷۲۴۱ تماس بگیرید و مشکل گوشی خود را توضیح دهید.'
  },
  {
    id: 2,
    title: 'قیمت اعلام می‌شود',
    description: 'در صورت امکان، کارشناسان ما قیمت تقریبی تعمیر را به شما اعلام می‌کنند.'
  },
  {
    id: 3,
    title: 'پیک برای دریافت گوشی ارسال می‌شود',
    description: 'پیک ما در سریع‌ترین زمان ممکن برای دریافت گوشی به آدرس شما مراجعه می‌کند.'
  },
  {
    id: 4,
    title: 'رسید به مشتری داده می‌شود',
    description: 'پس از تحویل گوشی، رسید رسمی با جزئیات دستگاه و مشکل آن به شما ارائه می‌شود.'
  },
  {
    id: 5,
    title: 'در صورت نامشخص بودن قیمت، تکنسین برای بررسی گوشی اعزام می‌شود',
    description: 'اگر نیاز به بررسی بیشتر باشد، تکنسین متخصص برای عیب‌یابی دقیق گوشی اعزام می‌شود.'
  },
  {
    id: 6,
    title: 'پس از توافق قیمت، تکنسین گوشی را دریافت می‌کند',
    description: 'پس از اعلام قیمت دقیق و توافق با شما، گوشی برای تعمیر به کارگاه منتقل می‌شود.'
  },
  {
    id: 7,
    title: 'تعمیر انجام می‌شود',
    description: 'تکنسین‌های متخصص ما با استفاده از قطعات اصلی، گوشی شما را تعمیر می‌کنند.'
  },
  {
    id: 8,
    title: 'گوشی به مشتری بازگردانده می‌شود',
    description: 'پس از تعمیر و تست نهایی، گوشی به همراه گارانتی تعمیرات به شما تحویل داده می‌شود.'
  }
];

const Process = () => {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">مراحل تعمیر گوشی</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            فرآیند تعمیر گوشی در تهران موبایل به صورت مرحله به مرحله و با دقت بالا انجام می‌شود تا بهترین نتیجه را برای شما به ارمغان آورد.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute right-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform translate-x-1/2"></div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step number indicator */}
                <div className="md:absolute md:right-1/2 md:transform md:translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary-500 text-white font-bold mb-4 md:mb-0">
                  {step.id}
                </div>

                {/* Step content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto md:text-right'} bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-primary-500 ml-2 inline-block" />
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="tel:+989190737241" 
            className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-primary-600 transition-colors"
          >
            <span>همین حالا تماس بگیرید</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;