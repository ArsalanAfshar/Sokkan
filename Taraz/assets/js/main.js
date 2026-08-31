/* ============================================================
   Taraz | تراز — main.js
   Theme · Language · Mobile Menu · FAQ · Forms · Scroll
   ============================================================ */

(function() {
  'use strict';

  // ==================== i18n ====================
  const translations = {
    fa: {
      // Navigation
      nav_features: 'ویژگی‌ها',
      nav_benefits: 'مزایا',
      nav_pricing: 'تعرفه‌ها',
      nav_testimonials: 'نظرات مشتریان',
      nav_faq: 'سوالات متداول',
      nav_contact: 'تماس با ما',
      
      // Hero
      hero_badge: '🚀 نسخه جدید ۱۴۰۴ منتشر شد',
      hero_title_1: 'مدیریت مالی هوشمند',
      hero_title_2: 'با تراز',
      hero_subtitle: 'نرم‌افزار حسابداری ابری تراز، راهکاری جامع برای مدیریت مالی کسب‌وکار شما. از صدور فاکتور تا گزارش‌های تحلیلی، همه چیز در یک پلتفرم.',
      hero_cta_primary: 'شروع رایگان',
      hero_cta_secondary: 'مشاهده دمو',
      hero_stat_1_value: '۱۰,۰۰۰+',
      hero_stat_1_label: 'کسب‌وکار فعال',
      hero_stat_2_value: '۹۹.۹٪',
      hero_stat_2_label: 'آپتایم سرور',
      hero_stat_3_value: '۲۴/۷',
      hero_stat_3_label: 'پشتیبانی',
      
      // Trust Bar
      trust_1: 'تاییدیه امنیت',
      trust_2: 'رمزنگاری SSL',
      trust_3: 'پشتیبان‌گیری روزانه',
      trust_4: 'سرورهای ایران',
      
      // Features Section
      features_badge: 'ویژگی‌ها',
      features_title: 'همه آنچه برای مدیریت مالی نیاز دارید',
      features_subtitle: 'تراز با مجموعه‌ای از ابزارهای قدرتمند، مدیریت مالی کسب‌وکار شما را ساده و هوشمند می‌کند.',
      feature_1_title: 'صدور فاکتور حرفه‌ای',
      feature_1_desc: 'ایجاد فاکتورهای زیبا و حرفه‌ای در چند ثانیه. ارسال خودکار به مشتری و پیگیری وضعیت پرداخت.',
      feature_2_title: 'مدیریت هزینه‌ها',
      feature_2_desc: 'ثبت و دسته‌بندی تمامی هزینه‌ها. گزارش‌های تفصیلی برای کنترل بهتر بودجه.',
      feature_3_title: 'گزارش‌های تحلیلی',
      feature_3_desc: 'داشبورد هوشمند با نمودارهای تعاملی. تحلیل روند درآمد و هزینه در زمان واقعی.',
      feature_4_title: 'مدیریت موجودی',
      feature_4_desc: 'پیگیری موجودی کالا و انبار. هشدار خودکار برای کالاهای رو به اتمام.',
      feature_5_title: 'محاسبه مالیات',
      feature_5_desc: 'محاسبه خودکار مالیات بر ارزش افزوده. تهیه گزارش‌های مالیاتی مطابق استانداردها.',
      feature_6_title: 'اپلیکیشن موبایل',
      feature_6_desc: 'دسترسی به تمامی امکانات از طریق اپلیکیشن موبایل. مدیریت مالی در هر زمان و مکان.',
      
      // Dashboard Showcase
      showcase_badge: 'پیش‌نمایش محصول',
      showcase_title: 'داشبورد قدرتمند و کاربرپسند',
      showcase_subtitle: 'با داشبورد تراز، تمامی اطلاعات مالی کسب‌وکارتان را در یک نگاه مشاهده کنید.',
      showcase_feature_1: 'نمایش实时 درآمد و هزینه',
      showcase_feature_2: 'نمودارهای تعاملی و قابل تنظیم',
      showcase_feature_3: 'هشدارهای هوشمند برای رویدادهای مهم',
      showcase_feature_4: 'گزارش‌گیری با یک کلیک',
      
      // Benefits
      benefits_badge: 'چرا تراز؟',
      benefits_title: 'مزایای استفاده از تراز',
      benefits_subtitle: 'تراز انتخاب اول هزاران کسب‌وکار موفق در ایران است.',
      benefit_1_title: 'صرفه‌جویی در زمان',
      benefit_1_desc: 'اتوماسیون فرآیندهای تکراری. کاهش ۷۰٪ زمان صرف شده برای امور مالی.',
      benefit_2_title: 'کاهش خطا',
      benefit_2_desc: 'محاسبات خودکار و دقیق. حذف خطاهای انسانی در ثبت اطلاعات.',
      benefit_3_title: 'دسترسی از هر جا',
      benefit_3_desc: 'پلتفرم ابری با دسترسی از هر دستگاه. همکاری تیمی بدون محدودیت.',
      benefit_4_title: 'امنیت بانکی',
      benefit_4_desc: 'رمزنگاری سطح بانکی. پشتیبان‌گیری خودکار روزانه. سرورهای امن در ایران.',
      benefit_5_title: 'پشتیبانی ۲۴/۷',
      benefit_5_desc: 'تیم پشتیبانی متخصص در تمامی ساعات. پاسخگویی از طریق چت، تلفن و ایمیل.',
      benefit_6_title: 'به‌روزرسانی مداوم',
      benefit_6_desc: 'اضافه شدن ویژگی‌های جدید هر ماه. سازگاری با آخرین تغییرات قوانین مالیاتی.',
      
      // Pricing
      pricing_badge: 'تعرفه‌ها',
      pricing_title: 'پلن مناسب کسب‌وکار خود را انتخاب کنید',
      pricing_subtitle: 'شروع رایگان. ارتقا در هر زمان. بدون قرارداد طولانی‌مدت.',
      pricing_starter: 'استارتر',
      pricing_starter_desc: 'برای کسب‌وکارهای کوچک',
      pricing_starter_price: '۲۹۰,۰۰۰',
      pricing_starter_period: 'تومان / ماهانه',
      pricing_starter_feature_1: 'تا ۱۰۰ فاکتور در ماه',
      pricing_starter_feature_2: '۱ کاربر',
      pricing_starter_feature_3: 'گزارش‌های پایه',
      pricing_starter_feature_4: 'پشتیبانی ایمیلی',
      pricing_starter_cta: 'شروع رایگان',
      
      pricing_professional: 'حرفه‌ای',
      pricing_professional_desc: 'برای کسب‌وکارهای در حال رشد',
      pricing_professional_price: '۵۹۰,۰۰۰',
      pricing_professional_period: 'تومان / ماهانه',
      pricing_professional_feature_1: 'فاکتور نامحدود',
      pricing_professional_feature_2: 'تا ۵ کاربر',
      pricing_professional_feature_3: 'گزارش‌های پیشرفته',
      pricing_professional_feature_4: 'پشتیبانی تلفنی',
      pricing_professional_feature_5: 'اپلیکیشن موبایل',
      pricing_professional_cta: 'شروع رایگان',
      pricing_professional_badge: 'محبوب‌ترین',
      
      pricing_enterprise: 'سازمانی',
      pricing_enterprise_desc: 'برای سازمان‌های بزرگ',
      pricing_enterprise_price: 'تماس بگیرید',
      pricing_enterprise_period: 'قیمت سفارشی',
      pricing_enterprise_feature_1: 'همه امکانات حرفه‌ای',
      pricing_enterprise_feature_2: 'کاربر نامحدود',
      pricing_enterprise_feature_3: 'API اختصاصی',
      pricing_enterprise_feature_4: 'پشتیبانی اختصاصی ۲۴/۷',
      pricing_enterprise_feature_5: 'آموزش تیمی',
      pricing_enterprise_cta: 'درخواست دمو',
      
      // Testimonials
      testimonials_badge: 'نظرات مشتریان',
      testimonials_title: 'مشتریان ما چه می‌گویند',
      testimonials_subtitle: 'بیش از ۱۰,۰۰۰ کسب‌وکار به تراز اعتماد کرده‌اند.',
      testimonial_1_text: 'تراز کار ما را متحول کرد. قبلاً ساعت‌ها وقت صرف امور مالی می‌کردیم، الان همه چیز خودکار است.',
      testimonial_1_name: 'علی محمدی',
      testimonial_1_role: 'مدیرعامل، شرکت فناوری نوین',
      testimonial_2_text: 'رابط کاربری فوق‌العاده و پشتیبانی عالی. تیم تراز همیشه در دسترس هستند و سریع پاسخ می‌دهند.',
      testimonial_2_name: 'سارا احمدی',
      testimonial_2_role: 'حسابدار، فروشگاه آنلاین پارسیان',
      testimonial_3_text: 'گزارش‌های تحلیلی تراز به ما کمک کرد تصمیمات بهتری بگیریم. واقعاً ارزش هر ریالش را دارد.',
      testimonial_3_name: 'رضا کریمی',
      testimonial_3_role: 'مدیر مالی، گروه صنعتی البرز',
      
      // FAQ
      faq_badge: 'سوالات متداول',
      faq_title: 'پاسخ به سوالات شما',
      faq_subtitle: 'اگر سوال دیگری دارید، با ما تماس بگیرید.',
      faq_1_q: 'آیا می‌توانم تراز را رایگان امتحان کنم؟',
      faq_1_a: 'بله، تمامی پلن‌ها شامل ۱۴ روز استفاده رایگان هستند. نیازی به وارد کردن اطلاعات کارت بانکی نیست.',
      faq_2_q: 'آیا اطلاعات من امن است؟',
      faq_2_a: 'بله، ما از رمزنگاری سطح بانکی (SSL 256-bit) استفاده می‌کنیم. سرورهای ما در دیتاسنترهای امن در ایران قرار دارند و روزانه پشتیبان‌گیری خودکار انجام می‌شود.',
      faq_3_q: 'آیا می‌توانم اطلاعات را از نرم‌افزار قبلی منتقل کنم؟',
      faq_3_a: 'بله، تیم پشتیبانی ما در فرآیند انتقال اطلاعات به شما کمک می‌کند. این سرویس برای تمامی پلن‌ها رایگان است.',
      faq_4_q: 'آیا تراز با قوانین مالیاتی ایران سازگار است؟',
      faq_4_a: 'بله، تراز کاملاً با آخرین تغییرات قوانین مالیاتی ایران سازگار است. محاسبه مالیات بر ارزش افزوده و تهیه گزارش‌های مالیاتی به صورت خودکار انجام می‌شود.',
      faq_5_q: 'آیا اپلیکیشن موبایل دارید؟',
      faq_5_a: 'بله، اپلیکیشن تراز برای iOS و Android در دسترس است. تمامی امکانات نسخه وب در اپلیکیشن موبایل نیز موجود است.',
      faq_6_q: 'نحوه پشتیبانی چگونه است؟',
      faq_6_a: 'پشتیبانی از طریق چت آنلاین، تلفن و ایمیل ارائه می‌شود. پلن‌های حرفه‌ای و سازمانی شامل پشتیبانی اختصاصی ۲۴/۷ هستند.',
      
      // CTA
      cta_title: 'آماده شروع هستید؟',
      cta_subtitle: 'همین امروز ثبت‌نام کنید و ۱۴ روز رایگان از تمامی امکانات تراز استفاده کنید.',
      cta_placeholder: 'ایمیل خود را وارد کنید',
      cta_button: 'شروع رایگان',
      
      // Footer
      footer_desc: 'تراز، نرم‌افزار حسابداری ابری برای کسب‌وکارهای ایرانی. ساده، هوشمند، امن.',
      footer_product: 'محصول',
      footer_product_1: 'ویژگی‌ها',
      footer_product_2: 'تعرفه‌ها',
      footer_product_3: 'به‌روزرسانی‌ها',
      footer_product_4: 'نقشه راه',
      footer_company: 'شرکت',
      footer_company_1: 'درباره ما',
      footer_company_2: 'وبلاگ',
      footer_company_3: 'فرصت‌های شغلی',
      footer_company_4: 'تماس با ما',
      footer_resources: 'منابع',
      footer_resources_1: 'مستندات',
      footer_resources_2: 'راهنمای استفاده',
      footer_resources_3: 'ویدیوهای آموزشی',
      footer_resources_4: 'مرکز پشتیبانی',
      footer_legal: 'قوانین',
      footer_legal_1: 'شرایط استفاده',
      footer_legal_2: 'حریم خصوصی',
      footer_legal_3: 'امنیت',
      footer_rights: '© ۱۴۰۴ تراز. تمامی حقوق محفوظ است.',
      
      // Forms
      form_success: 'پیام شما با موفقیت ارسال شد!',
      form_error: 'لطفاً تمامی فیلدها را پر کنید.',
      
      // Misc
      theme_toggle: 'تغییر تم',
      mobile_menu: 'منوی موبایل'
    },
    en: {
      nav_features: 'Features',
      nav_benefits: 'Benefits',
      nav_pricing: 'Pricing',
      nav_testimonials: 'Testimonials',
      nav_faq: 'FAQ',
      nav_contact: 'Contact',
      
      hero_badge: '🚀 New version 2025 released',
      hero_title_1: 'Smart Financial',
      hero_title_2: 'Management with Taraz',
      hero_subtitle: 'Taraz cloud accounting software is a comprehensive solution for your business financial management. From invoicing to analytical reports, all in one platform.',
      hero_cta_primary: 'Start Free',
      hero_cta_secondary: 'View Demo',
      hero_stat_1_value: '10,000+',
      hero_stat_1_label: 'Active Businesses',
      hero_stat_2_value: '99.9%',
      hero_stat_2_label: 'Server Uptime',
      hero_stat_3_value: '24/7',
      hero_stat_3_label: 'Support',
      
      trust_1: 'Security Certified',
      trust_2: 'SSL Encryption',
      trust_3: 'Daily Backups',
      trust_4: 'Iran Servers',
      
      features_badge: 'Features',
      features_title: 'Everything You Need for Financial Management',
      features_subtitle: 'Taraz simplifies and smartens your business financial management with powerful tools.',
      feature_1_title: 'Professional Invoicing',
      feature_1_desc: 'Create beautiful professional invoices in seconds. Auto-send to customers and track payment status.',
      feature_2_title: 'Expense Management',
      feature_2_desc: 'Record and categorize all expenses. Detailed reports for better budget control.',
      feature_3_title: 'Analytical Reports',
      feature_3_desc: 'Smart dashboard with interactive charts. Real-time income and expense trend analysis.',
      feature_4_title: 'Inventory Management',
      feature_4_desc: 'Track inventory and warehouse. Auto-alerts for low stock items.',
      feature_5_title: 'Tax Calculation',
      feature_5_desc: 'Automatic VAT calculation. Prepare tax reports according to standards.',
      feature_6_title: 'Mobile App',
      feature_6_desc: 'Access all features via mobile app. Financial management anytime, anywhere.',
      
      showcase_badge: 'Product Preview',
      showcase_title: 'Powerful and User-Friendly Dashboard',
      showcase_subtitle: 'With Taraz dashboard, view all your business financial information at a glance.',
      showcase_feature_1: 'Real-time income and expense display',
      showcase_feature_2: 'Interactive and customizable charts',
      showcase_feature_3: 'Smart alerts for important events',
      showcase_feature_4: 'One-click reporting',
      
      benefits_badge: 'Why Taraz?',
      benefits_title: 'Benefits of Using Taraz',
      benefits_subtitle: 'Taraz is the first choice of thousands of successful businesses in Iran.',
      benefit_1_title: 'Save Time',
      benefit_1_desc: 'Automate repetitive processes. Reduce 70% of time spent on financial tasks.',
      benefit_2_title: 'Reduce Errors',
      benefit_2_desc: 'Automatic and accurate calculations. Eliminate human errors in data entry.',
      benefit_3_title: 'Access Anywhere',
      benefit_3_desc: 'Cloud platform with access from any device. Team collaboration without limits.',
      benefit_4_title: 'Bank-Level Security',
      benefit_4_desc: 'Bank-level encryption. Automatic daily backups. Secure servers in Iran.',
      benefit_5_title: '24/7 Support',
      benefit_5_desc: 'Expert support team available at all hours. Response via chat, phone, and email.',
      benefit_6_title: 'Continuous Updates',
      benefit_6_desc: 'New features added every month. Compatible with latest tax law changes.',
      
      pricing_badge: 'Pricing',
      pricing_title: 'Choose the Plan That Fits Your Business',
      pricing_subtitle: 'Start free. Upgrade anytime. No long-term contracts.',
      pricing_starter: 'Starter',
      pricing_starter_desc: 'For small businesses',
      pricing_starter_price: '290,000',
      pricing_starter_period: 'Toman / monthly',
      pricing_starter_feature_1: 'Up to 100 invoices per month',
      pricing_starter_feature_2: '1 user',
      pricing_starter_feature_3: 'Basic reports',
      pricing_starter_feature_4: 'Email support',
      pricing_starter_cta: 'Start Free',
      
      pricing_professional: 'Professional',
      pricing_professional_desc: 'For growing businesses',
      pricing_professional_price: '590,000',
      pricing_professional_period: 'Toman / monthly',
      pricing_professional_feature_1: 'Unlimited invoices',
      pricing_professional_feature_2: 'Up to 5 users',
      pricing_professional_feature_3: 'Advanced reports',
      pricing_professional_feature_4: 'Phone support',
      pricing_professional_feature_5: 'Mobile app',
      pricing_professional_cta: 'Start Free',
      pricing_professional_badge: 'Most Popular',
      
      pricing_enterprise: 'Enterprise',
      pricing_enterprise_desc: 'For large organizations',
      pricing_enterprise_price: 'Contact Us',
      pricing_enterprise_period: 'Custom pricing',
      pricing_enterprise_feature_1: 'All Professional features',
      pricing_enterprise_feature_2: 'Unlimited users',
      pricing_enterprise_feature_3: 'Dedicated API',
      pricing_enterprise_feature_4: 'Dedicated 24/7 support',
      pricing_enterprise_feature_5: 'Team training',
      pricing_enterprise_cta: 'Request Demo',
      
      testimonials_badge: 'Testimonials',
      testimonials_title: 'What Our Customers Say',
      testimonials_subtitle: 'Over 10,000 businesses trust Taraz.',
      testimonial_1_text: 'Taraz transformed our work. We used to spend hours on financial tasks, now everything is automated.',
      testimonial_1_name: 'Ali Mohammadi',
      testimonial_1_role: 'CEO, Novin Technology Co.',
      testimonial_2_text: 'Amazing user interface and excellent support. The Taraz team is always available and responds quickly.',
      testimonial_2_name: 'Sara Ahmadi',
      testimonial_2_role: 'Accountant, Parsian Online Store',
      testimonial_3_text: 'Taraz analytical reports helped us make better decisions. Really worth every rial.',
      testimonial_3_name: 'Reza Karimi',
      testimonial_3_role: 'Financial Manager, Alborz Industrial Group',
      
      faq_badge: 'FAQ',
      faq_title: 'Answers to Your Questions',
      faq_subtitle: 'If you have other questions, contact us.',
      faq_1_q: 'Can I try Taraz for free?',
      faq_1_a: 'Yes, all plans include a 14-day free trial. No credit card required.',
      faq_2_q: 'Is my data secure?',
      faq_2_a: 'Yes, we use bank-level encryption (SSL 256-bit). Our servers are in secure data centers in Iran with automatic daily backups.',
      faq_3_q: 'Can I migrate data from my previous software?',
      faq_3_a: 'Yes, our support team will help you with the migration process. This service is free for all plans.',
      faq_4_q: 'Is Taraz compatible with Iranian tax laws?',
      faq_4_a: 'Yes, Taraz is fully compatible with the latest Iranian tax law changes. VAT calculation and tax report preparation are done automatically.',
      faq_5_q: 'Do you have a mobile app?',
      faq_5_a: 'Yes, Taraz app is available for iOS and Android. All web version features are also available in the mobile app.',
      faq_6_q: 'How does support work?',
      faq_6_a: 'Support is provided via online chat, phone, and email. Professional and Enterprise plans include dedicated 24/7 support.',
      
      cta_title: 'Ready to Start?',
      cta_subtitle: 'Sign up today and use all Taraz features free for 14 days.',
      cta_placeholder: 'Enter your email',
      cta_button: 'Start Free',
      
      footer_desc: 'Taraz, cloud accounting software for Iranian businesses. Simple, smart, secure.',
      footer_product: 'Product',
      footer_product_1: 'Features',
      footer_product_2: 'Pricing',
      footer_product_3: 'Updates',
      footer_product_4: 'Roadmap',
      footer_company: 'Company',
      footer_company_1: 'About Us',
      footer_company_2: 'Blog',
      footer_company_3: 'Careers',
      footer_company_4: 'Contact',
      footer_resources: 'Resources',
      footer_resources_1: 'Documentation',
      footer_resources_2: 'User Guide',
      footer_resources_3: 'Tutorial Videos',
      footer_resources_4: 'Support Center',
      footer_legal: 'Legal',
      footer_legal_1: 'Terms of Service',
      footer_legal_2: 'Privacy Policy',
      footer_legal_3: 'Security',
      footer_rights: '© 2025 Taraz. All rights reserved.',
      
      form_success: 'Your message was sent successfully!',
      form_error: 'Please fill in all fields.',
      
      theme_toggle: 'Toggle theme',
      mobile_menu: 'Mobile menu'
    }
  };

  let currentLang = localStorage.getItem('taraz_lang') || 'fa';
  
  function t(key) {
    return translations[currentLang][key] || key;
  }

  function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key);
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.setAttribute('placeholder', t(key));
    });

    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
  }

  function toggleLanguage() {
    currentLang = currentLang === 'fa' ? 'en' : 'fa';
    localStorage.setItem('taraz_lang', currentLang);
    updateLanguage();
  }

  // ==================== Theme ====================
  let currentTheme = localStorage.getItem('taraz_theme') || 'light';

  function updateTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const icon = document.querySelector('.theme-toggle svg');
    if (icon) {
      icon.innerHTML = currentTheme === 'light' 
        ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'
        : '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
    }
  }

  function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('taraz_theme', currentTheme);
    updateTheme();
  }

  // ==================== Mobile Menu ====================
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (toggle && mobileNav) {
      toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
      });

      document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          toggle.classList.remove('active');
          mobileNav.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }
  }

  // ==================== Header Scroll ====================
  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (header) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }
  }

  // ==================== Smooth Scroll ====================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - 20;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ==================== FAQ Accordion ====================
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');
        
        document.querySelectorAll('.faq-item').forEach(faq => {
          faq.classList.remove('active');
        });
        
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });
  }

  // ==================== Forms ====================
  function initForms() {
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        inputs.forEach(input => {
          if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'var(--danger)';
          } else {
            input.style.borderColor = '';
          }
        });
        
        if (isValid) {
          showToast(t('form_success'), 'success');
          form.reset();
        } else {
          showToast(t('form_error'), 'error');
        }
      });
    });
  }

  // ==================== Toast ====================
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-icon">${type === 'success' ? '✓' : '✕'}</div>
      <div class="toast-message">${message}</div>
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.classList.add('show'), 100);
    
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ==================== Animations ====================
  function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .benefit-card, .pricing-card, .testimonial-card').forEach(el => {
      observer.observe(el);
    });
  }

  // ==================== Counter Animation ====================
  function initCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-count'));
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = target.toLocaleString('fa-IR');
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current).toLocaleString('fa-IR');
            }
          }, 16);
          
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count]').forEach(counter => {
      observer.observe(counter);
    });
  }

  // ==================== Init ====================
  document.addEventListener('DOMContentLoaded', () => {
    updateTheme();
    updateLanguage();
    initMobileMenu();
    initHeaderScroll();
    initSmoothScroll();
    initFAQ();
    initForms();
    initAnimations();
    initCounters();

    document.querySelector('.theme-toggle')?.addEventListener('click', toggleTheme);
    document.querySelector('.lang-toggle')?.addEventListener('click', toggleLanguage);
  });

})();
