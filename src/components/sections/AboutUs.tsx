import Image from 'next/image';
import { CheckBadgeIcon, UserGroupIcon, TrophyIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

// Define the team member type
type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
};

// Define the certification type
type Certification = {
  id: number;
  name: string;
  issuer: string;
  year: string;
  icon: React.ElementType;
};

// List of team members
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'محمد رضایی',
    role: 'مدیر و بنیانگذار',
    bio: 'با بیش از ۱۵ سال تجربه در زمینه تعمیرات موبایل و الکترونیک، تهران موبایل را با هدف ارائه خدمات با کیفیت و قیمت منصفانه تاسیس کرد.',
    imageSrc: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'امیر حسینی',
    role: 'سرپرست تیم فنی',
    bio: 'متخصص در تعمیرات سخت‌افزاری گوشی‌های هوشمند با ۱۰ سال سابقه کار و گذراندن دوره‌های تخصصی تعمیرات برد.',
    imageSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'سعید کریمی',
    role: 'کارشناس تعمیرات اپل',
    bio: 'متخصص در تعمیرات محصولات اپل با گواهینامه رسمی و بیش از ۸ سال تجربه در زمینه تعمیر آیفون و آیپد.',
    imageSrc: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'زهرا محمدی',
    role: 'مسئول پشتیبانی مشتریان',
    bio: 'مسئول هماهنگی با مشتریان، پاسخگویی به سوالات و پیگیری امور مربوط به گارانتی و خدمات پس از فروش.',
    imageSrc: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
  }
];

// List of certifications
const certifications: Certification[] = [
  {
    id: 1,
    name: 'گواهی تخصصی تعمیرات موبایل',
    issuer: 'انجمن صنفی تعمیرکاران موبایل ایران',
    year: '۱۴۰۰',
    icon: CheckBadgeIcon
  },
  {
    id: 2,
    name: 'گواهی رسمی تعمیرات محصولات سامسونگ',
    issuer: 'نمایندگی رسمی سامسونگ',
    year: '۱۳۹۹',
    icon: TrophyIcon
  },
  {
    id: 3,
    name: 'عضویت در اتحادیه صنف فناوران رایانه',
    issuer: 'اتحادیه صنف فناوران رایانه تهران',
    year: '۱۳۹۸',
    icon: UserGroupIcon
  },
  {
    id: 4,
    name: 'پروانه کسب رسمی',
    issuer: 'وزارت صنعت، معدن و تجارت',
    year: '۱۳۹۷',
    icon: BuildingOfficeIcon
  }
];

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
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?q=80&w=2080&auto=format&fit=crop"
                  alt="دفتر تهران موبایل"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">تیم متخصص ما</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center"
              >
                <div className="mx-auto mb-4 relative">
                  {member.imageSrc ? (
                    <div className="relative h-24 w-24 rounded-full overflow-hidden mx-auto">
                      <Image 
                        src={member.imageSrc}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-24 w-24 rounded-full bg-primary-100 flex items-center justify-center mx-auto">
                      <span className="text-primary-700 font-bold text-2xl">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">گواهینامه‌ها و مجوزها</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center ml-4 shrink-0">
                  <cert.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">صادر کننده: </span>
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">سال دریافت: </span>
                    {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
