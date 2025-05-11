import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon } from '@heroicons/react/24/outline';

// Define the testimonial type
type Testimonial = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  device?: string;
  repair?: string;
};

// List of testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'علی محمدی',
    rating: 5,
    comment: 'تعمیر صفحه نمایش گوشی من در کمتر از ۲ ساعت انجام شد. کیفیت کار عالی بود و قیمت هم منصفانه. قطعا تهران موبایل را به دوستانم معرفی می‌کنم.',
    device: 'سامسونگ گلکسی S21',
    repair: 'تعویض صفحه نمایش'
  },
  {
    id: 2,
    name: 'مریم حسینی',
    rating: 4,
    comment: 'باتری گوشی من خیلی زود خالی می‌شد. بعد از تعویض باتری در تهران موبایل، مشکل کاملا حل شد و الان گوشی تا آخر روز شارژ نگه می‌داره.',
    device: 'آیفون 12',
    repair: 'تعویض باتری'
  },
  {
    id: 3,
    name: 'رضا کریمی',
    rating: 5,
    comment: 'دوربین گوشی من کاملا از کار افتاده بود. تکنسین‌های تهران موبایل با دقت بالا مشکل رو تشخیص دادن و تعمیر کردن. الان دوربین حتی بهتر از قبل کار می‌کنه.',
    device: 'شیائومی Redmi Note 10',
    repair: 'تعمیر دوربین'
  },
  {
    id: 4,
    name: 'سارا احمدی',
    rating: 5,
    comment: 'خدمات پیک و تحویل در محل واقعا عالی بود. نیازی به مراجعه حضوری نبود و گوشی رو همون روز تعمیر شده تحویل گرفتم. کارشون حرفه‌ای و سریع بود.',
    device: 'هواوی P30 Pro',
    repair: 'تعویض باتری و اسپیکر'
  }
];

// Rating component
const Rating = ({ score }: { score: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        i < score ? (
          <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
        ) : (
          <StarOutlineIcon key={i} className="h-5 w-5 text-yellow-500" />
        )
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">نظرات مشتریان</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            رضایت مشتریان مهم‌ترین معیار موفقیت ماست. در اینجا می‌توانید نظرات برخی از مشتریان تهران موبایل را مطالعه کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <div className="flex items-center mt-1">
                    <Rating score={testimonial.rating} />
                    <span className="mr-2 text-gray-600 text-sm">{testimonial.rating}.0</span>
                  </div>
                </div>
                <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-xl">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{testimonial.comment}</p>

              {(testimonial.device || testimonial.repair) && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  {testimonial.device && (
                    <div className="text-sm text-gray-500">
                      <span className="font-semibold ml-1">دستگاه:</span>
                      {testimonial.device}
                    </div>
                  )}
                  {testimonial.repair && (
                    <div className="text-sm text-gray-500 mt-1">
                      <span className="font-semibold ml-1">خدمات:</span>
                      {testimonial.repair}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-primary-600 transition-colors"
          >
            <span>تماس با ما</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
