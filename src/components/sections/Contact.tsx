"use client";

import { useState } from 'react';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon, 
  MapPinIcon 
} from '@heroicons/react/24/outline';

// Define business hours type
type BusinessHour = {
  day: string;
  hours: string;
};

// Business hours
const businessHours: BusinessHour[] = [
  { day: 'شنبه تا چهارشنبه', hours: '۹ صبح تا ۸ شب' },
  { day: 'پنجشنبه', hours: '۹ صبح تا ۵ عصر' },
  { day: 'جمعه', hours: 'تعطیل' }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    device: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        device: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">تماس با ما</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            برای درخواست تعمیر، استعلام قیمت یا هرگونه سوال دیگر، می‌توانید با ما تماس بگیرید یا از طریق فرم زیر پیام خود را ارسال کنید.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">ارسال پیام</h3>

            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-md">
                پیام شما با موفقیت ارسال شد. کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">نام و نام خانوادگی</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">شماره تماس</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">ایمیل (اختیاری)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="device" className="block text-gray-700 font-medium mb-2">مدل گوشی</label>
                <input
                  type="text"
                  id="device"
                  name="device"
                  value={formData.device}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">توضیحات مشکل</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary-500 text-white py-3 rounded-md font-medium hover:bg-primary-600 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'در حال ارسال...' : 'ارسال پیام'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">اطلاعات تماس</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 shrink-0">
                    <PhoneIcon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">شماره تماس</h4>
                    <a href="tel:+989190737241" className="text-gray-600 hover:text-primary-600 transition-colors">
                      ۰۹۱۹۰۷۳۷۲۴۱
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 shrink-0">
                    <EnvelopeIcon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">ایمیل</h4>
                    <a href="mailto:info@tehranmobile.ir" className="text-gray-600 hover:text-primary-600 transition-colors">
                      info@tehranmobile.ir
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 shrink-0">
                    <ClockIcon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">ساعات کاری</h4>
                    <ul className="text-gray-600">
                      {businessHours.map((item, index) => (
                        <li key={index} className="flex justify-between mb-1">
                          <span className="font-medium">{item.day}:</span>
                          <span>{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center ml-4 shrink-0">
                    <MapPinIcon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">آدرس</h4>
                    <p className="text-gray-600">
                      تهران، خیابان ولیعصر، بالاتر از میدان ونک، مجتمع تجاری ونک، طبقه ۳، واحد ۳۰۵
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white p-4 rounded-lg shadow-sm h-[300px] relative">
              {/* Placeholder for map - will be replaced with actual map */}
              <div className="absolute inset-0 bg-gray-200 rounded-md flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="h-12 w-12 text-primary-500 mx-auto mb-2" />
                  <p className="text-gray-600">نقشه موقعیت تهران موبایل</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
