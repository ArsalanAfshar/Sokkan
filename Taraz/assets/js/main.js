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
      hero_badge: "پیش‌نمایش محصول — محتوای نمونه",
      hero_title_1: 'مدیریت مالی هوشمند',
      hero_title_2: 'با تراز',
      hero_subtitle: 'نرم‌افزار حسابداری ابری تراز، راهکاری جامع برای مدیریت مالی کسب‌وکار شما. از صدور فاکتور تا گزارش‌های تحلیلی، همه چیز در یک پلتفرم.',
      hero_cta_primary: "درخواست دمو",
      hero_cta_secondary: "مشاهدهٔ پیش‌نمایش",
      hero_stat_1_value: "۱٬۲۰۰+",
      hero_stat_1_label: 'کسب‌وکار فعال',
      hero_stat_2_value: '۹۹.۹٪',
      hero_stat_2_label: 'آپتایم سرور',
      hero_stat_3_value: '۲۴/۷',
      hero_stat_3_label: 'پشتیبانی',
      
      // Trust Bar
      trust_1: "امکانات امنیتی قابل پیکربندی",
      trust_2: "قابلیت فعال‌سازی HTTPS",
      trust_3: "امکان پشتیبان‌گیری",
      trust_4: "قابل استقرار روی زیرساخت منتخب",
      
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
      feature_5_title: "گزارش‌های مالیِ قابل تنظیم",
      feature_5_desc: "گزارش‌ها را بر پایهٔ نیاز کسب‌وکار و رویه‌های مالیِ تأییدشده تنظیم کنید.",
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
      benefits_subtitle: 'این بخش نمونه است؛ نتیجه‌ها و مقایسه‌ها را فقط با دادهٔ قابل‌استناد و به‌روز منتشر کنید.',
      benefit_1_title: 'صرفه‌جویی در زمان',
      benefit_1_desc: "اتوماسیون کارهای تکراری برای کاهش ورود دستی اطلاعات و آزادشدن وقت تیم.",
      benefit_2_title: 'کاهش خطا',
      benefit_2_desc: "قواعد روشن و کنترل داده به بررسی دقیق‌تر ثبت‌های مالی کمک می‌کنند.",
      benefit_3_title: 'دسترسی از هر جا',
      benefit_3_desc: 'پلتفرم ابری با دسترسی از هر دستگاه. همکاری تیمی بدون محدودیت.',
      benefit_4_title: "کنترل دسترسی",
      benefit_4_desc: "سطح دسترسی کاربران و روش حفاظت از داده را متناسب با پیاده‌سازی واقعی محصول معرفی کنید.",
      benefit_5_title: "پشتیبانی متناسب با پلن",
      benefit_5_desc: "ساعت‌ها و مسیرهای پشتیبانی را مطابق تیم واقعی و قرارداد هر پلن درج کنید.",
      benefit_6_title: 'به‌روزرسانی مداوم',
      benefit_6_desc: "قابلیت‌های جدید و تغییرات قانونی را تنها پس از پیاده‌سازی و راستی‌آزمایی اعلام کنید.",
      
      // Pricing
      pricing_badge: 'تعرفه‌ها',
      pricing_title: 'پلن مناسب کسب‌وکار خود را انتخاب کنید',
      pricing_subtitle: "پلن‌ها و قیمت‌های فعلی فقط نمونه‌اند؛ رقم نهایی و شرایط تمدید را با تعرفهٔ واقعی جایگزین کنید.",
      pricing_starter: 'استارتر',
      pricing_starter_desc: 'برای کسب‌وکارهای کوچک',
      pricing_starter_price: "۲۹۰٬۰۰۰",
      pricing_starter_period: 'تومان / ماهانه',
      pricing_starter_feature_1: 'تا ۱۰۰ فاکتور در ماه',
      pricing_starter_feature_2: '۱ کاربر',
      pricing_starter_feature_3: 'گزارش‌های پایه',
      pricing_starter_feature_4: 'پشتیبانی ایمیلی',
      pricing_starter_cta: 'درخواست دمو',
      
      pricing_professional: 'حرفه‌ای',
      pricing_professional_desc: 'برای کسب‌وکارهای در حال رشد',
      pricing_professional_price: "۵۹۰٬۰۰۰",
      pricing_professional_period: 'تومان / ماهانه',
      pricing_professional_feature_1: 'فاکتور نامحدود',
      pricing_professional_feature_2: 'تا ۵ کاربر',
      pricing_professional_feature_3: 'گزارش‌های پیشرفته',
      pricing_professional_feature_4: 'پشتیبانی تلفنی',
      pricing_professional_feature_5: 'اپلیکیشن موبایل',
      pricing_professional_cta: 'درخواست دمو',
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
      testimonials_subtitle: 'نام‌ها و نقل‌قول‌های این بخش نمونه‌اند؛ فقط بازخورد واقعی و دارای اجازهٔ انتشار را درج کنید.',
      testimonial_1_text: 'متن بازخورد واقعی مشتری را با اجازهٔ انتشار در این بخش قرار دهید.',
      testimonial_1_name: 'مشتری نمونه ۱',
      testimonial_1_role: 'سمت یا کسب‌وکار واقعی',
      testimonial_2_text: 'فقط تجربهٔ واقعی مشتری از محصول یا پشتیبانی را با اجازه نقل کنید.',
      testimonial_2_name: 'مشتری نمونه ۲',
      testimonial_2_role: 'سمت یا کسب‌وکار واقعی',
      testimonial_3_text: 'این متن نمونه است؛ پیش از انتشار آن را با نظر واقعی و مجاز جایگزین کنید.',
      testimonial_3_name: 'مشتری نمونه ۳',
      testimonial_3_role: 'سمت یا کسب‌وکار واقعی',
      
      // FAQ
      faq_badge: 'سوالات متداول',
      faq_title: 'پاسخ به سوالات شما',
      faq_subtitle: 'اگر سوال دیگری دارید، با ما تماس بگیرید.',
      faq_1_q: 'آیا می‌توانم تراز را رایگان امتحان کنم؟',
      faq_1_a: "مدت آزمایشی و شرایط دسترسی را مطابق سرویس واقعی خود در این پاسخ بنویسید؛ این متن نمونه است.",
      faq_2_q: 'آیا اطلاعات من امن است؟',
      faq_2_a: "این پاسخ نمونه است. نوع رمزنگاری، محل نگهداری داده و سیاست پشتیبان‌گیری را فقط در صورت پیاده‌سازی و تأیید واقعی اعلام کنید.",
      faq_3_q: 'آیا می‌توانم اطلاعات را از نرم‌افزار قبلی منتقل کنم؟',
      faq_3_a: "اگر انتقال اطلاعات در محصول شما پشتیبانی می‌شود، فرمت‌های پذیرفته‌شده، مسئولیت‌ها و هزینهٔ خدمت را اینجا مشخص کنید.",
      faq_4_q: 'آیا تراز با قوانین مالیاتی ایران سازگار است؟',
      faq_4_a: "سازگاری مالیاتی به قابلیت‌های پیاده‌سازی‌شده و به‌روزرسانی‌های محصول وابسته است؛ پیش از انتشار این ادعا را تخصصی بررسی کنید.",
      faq_5_q: 'آیا اپلیکیشن موبایل دارید؟',
      faq_5_a: "در صورت ارائهٔ اپلیکیشن، پیوند فروشگاه‌ها و قابلیت‌های واقعی آن را درج کنید؛ متن فعلی صرفاً نمونه است.",
      faq_6_q: 'نحوه پشتیبانی چگونه است؟',
      faq_6_a: "کانال‌ها، ساعات پاسخ‌گویی و سطح پشتیبانی هر پلن را مطابق قرارداد واقعی درج کنید.",
      
      // CTA
      cta_title: "برای آشنایی با محصول آماده‌اید؟",
      cta_subtitle: "این بخش فقط نمونه است؛ مدت دورهٔ آزمایشی، شرایط دسترسی و پیشنهاد را با اطلاعات واقعی محصول جایگزین کنید.",
      cta_placeholder: 'ایمیل خود را وارد کنید',
      cta_button: "درخواست دمو",
      
      // Footer
      footer_desc: "پیش‌نمایش قابل‌ویرایش یک نرم‌افزار حسابداری ابری؛ نام، قابلیت‌ها و اطلاعات تماس را با داده‌های تأییدشدهٔ محصول خود جایگزین کنید.",
      footer_product: 'محصول',
      footer_product_1: 'ویژگی‌ها',
      footer_product_2: 'تعرفه‌ها',
      footer_product_3: "پیش‌نمایش داشبورد",
      footer_product_4: "پرسش‌های متداول",
      footer_company: 'شرکت',
      footer_company_1: "معرفی محصول",
      footer_company_2: "مزایا",
      footer_company_3: "پشتیبانی",
      footer_company_4: "درخواست دمو",
      footer_resources: 'منابع',
      footer_resources_1: "پرسش‌های متداول",
      footer_resources_2: "شرایط استفاده",
      footer_resources_3: "حریم خصوصی",
      footer_resources_4: "تماس با ما",
      footer_legal: 'قوانین',
      footer_legal_1: 'شرایط استفاده',
      footer_legal_2: 'حریم خصوصی',
      footer_legal_3: 'امنیت',
      footer_rights: "© ۱۴۰۵ تراز — محتوای نمونه",
      
      // Forms
      form_success: "درخواست شما با موفقیت ثبت شد.",
      form_error: "لطفاً یک ایمیل معتبر وارد کنید.",
      
      // Misc
      theme_toggle: "تغییر حالت روشن و تیره",
      mobile_menu: "بازکردن منو",
    },
      skip_link: "رفتن به محتوای اصلی",
      demo_notice: "پیش‌نمایش قالب است؛ نام‌ها، قابلیت‌ها، آمار، تعرفه‌ها، دورهٔ آزمایشی، خدمات، نقل‌قول‌ها و ادعاهای امنیتی یا مالیاتی نمونه‌اند و باید پیش از انتشار با اطلاعات واقعی و تأییدشده جایگزین شوند.",
      brand_aria: "تراز — بازگشت به بالا",
      nav_label: "ناوبری اصلی",
      language_toggle_aria: "تغییر زبان به انگلیسی",
      language_short: "EN",
      dashboard_title: "داشبورد نمونهٔ تراز",
      dashboard_revenue: "درآمد ماهانه",
      dashboard_revenue_value: "۴۵٬۲۰۰٬۰۰۰",
      dashboard_invoices: "فاکتورهای صادرشده",
      dashboard_invoices_value: "۱۲۸",
      dashboard_receivables: "مطالبات",
      dashboard_receivables_value: "۱۲٬۵۰۰٬۰۰۰",
      showcase_image_alt: "تصویر نمایشی از داشبورد حسابداری تراز",
      cta_email_label: "نشانی ایمیل",
      form_demo_note: "این فرم نمایشی است؛ تا زمان اتصال endpoint، ایمیلی ارسال یا ذخیره نمی‌شود.",
      pricing_sample_note: "قیمت‌ها و امکاناتِ پلن‌ها صرفاً دادهٔ نمونه‌اند؛ پیش از انتشار آن‌ها را با تعرفهٔ واقعی محصول به‌روزرسانی کنید.",
      page_title: "تراز | نرم‌افزار حسابداری ابری — پیش‌نمایش قالب سکّان",
      page_description: "تراز؛ پیش‌نمایش قابل‌ویرایش یک نرم‌افزار حسابداری ابری برای کسب‌وکارهای ایرانی. همهٔ آمار، قیمت‌ها و ادعاهای محصول نمونه‌اند.",
    en: {
      nav_features: 'Features',
      nav_benefits: 'Benefits',
      nav_pricing: 'Pricing',
      nav_testimonials: 'Testimonials',
      nav_faq: 'FAQ',
      nav_contact: 'Contact',
      
      hero_badge: "Product preview — sample content",
      hero_title_1: 'Smart Financial',
      hero_title_2: 'Management with Taraz',
      hero_subtitle: 'Taraz cloud accounting software is a comprehensive solution for your business financial management. From invoicing to analytical reports, all in one platform.',
      hero_cta_primary: "Request a demo",
      hero_cta_secondary: "View the preview",
      hero_stat_1_value: "1,200+",
      hero_stat_1_label: 'Active Businesses',
      hero_stat_2_value: '99.9%',
      hero_stat_2_label: 'Server Uptime',
      hero_stat_3_value: '24/7',
      hero_stat_3_label: 'Support',
      
      trust_1: "Configurable security features",
      trust_2: "HTTPS can be enabled",
      trust_3: "Backup capability",
      trust_4: "Deploy on your chosen infrastructure",
      
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
      feature_5_title: "Configurable financial reports",
      feature_5_desc: "Configure reports for your business needs and verified accounting workflows.",
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
      benefits_subtitle: 'This section is sample copy; publish comparisons and outcomes only when supported by current evidence.',
      benefit_1_title: 'Save Time',
      benefit_1_desc: "Automate repetitive tasks to reduce manual entry and give your team time back.",
      benefit_2_title: 'Reduce Errors',
      benefit_2_desc: "Clear workflows and data checks can help teams review financial entries more consistently.",
      benefit_3_title: 'Access Anywhere',
      benefit_3_desc: 'Cloud platform with access from any device. Team collaboration without limits.',
      benefit_4_title: "Access controls",
      benefit_4_desc: "Describe user permissions and data safeguards according to the product you actually operate.",
      benefit_5_title: "Support by plan",
      benefit_5_desc: "Publish the support hours and channels that your team can actually provide.",
      benefit_6_title: 'Continuous Updates',
      benefit_6_desc: "Announce product updates and regulatory changes only after implementation and verification.",
      
      pricing_badge: 'Pricing',
      pricing_title: 'Choose the Plan That Fits Your Business',
      pricing_subtitle: "Plans and prices are examples. Replace them with current pricing and renewal terms.",
      pricing_starter: 'Starter',
      pricing_starter_desc: 'For small businesses',
      pricing_starter_price: "290,000",
      pricing_starter_period: 'Toman / monthly',
      pricing_starter_feature_1: 'Up to 100 invoices per month',
      pricing_starter_feature_2: '1 user',
      pricing_starter_feature_3: 'Basic reports',
      pricing_starter_feature_4: 'Email support',
      pricing_starter_cta: 'Request a demo',
      
      pricing_professional: 'Professional',
      pricing_professional_desc: 'For growing businesses',
      pricing_professional_price: "590,000",
      pricing_professional_period: 'Toman / monthly',
      pricing_professional_feature_1: 'Unlimited invoices',
      pricing_professional_feature_2: 'Up to 5 users',
      pricing_professional_feature_3: 'Advanced reports',
      pricing_professional_feature_4: 'Phone support',
      pricing_professional_feature_5: 'Mobile app',
      pricing_professional_cta: 'Request a demo',
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
      testimonials_subtitle: 'Names and quotes are placeholders. Publish verified customer feedback only with permission.',
      testimonial_1_text: 'Add a real customer review here only after receiving permission to publish it.',
      testimonial_1_name: 'Sample customer 1',
      testimonial_1_role: 'Actual role or business',
      testimonial_2_text: 'Describe a genuine customer experience with the product or support, with permission.',
      testimonial_2_name: 'Sample customer 2',
      testimonial_2_role: 'Actual role or business',
      testimonial_3_text: 'This is sample copy. Replace it with a genuine review that you may publish.',
      testimonial_3_name: 'Sample customer 3',
      testimonial_3_role: 'Actual role or business',
      
      faq_badge: 'FAQ',
      faq_title: 'Answers to Your Questions',
      faq_subtitle: 'If you have other questions, contact us.',
      faq_1_q: 'Can I try Taraz for free?',
      faq_1_a: "Add the actual trial period and access terms for your service here. This copy is an example.",
      faq_2_q: 'Is my data secure?',
      faq_2_a: "This answer is sample copy. State encryption, data location and backup policies only after verifying the live implementation.",
      faq_3_q: 'Can I migrate data from my previous software?',
      faq_3_a: "If migration is supported, list accepted formats, responsibilities and any service charges here.",
      faq_4_q: 'Is Taraz compatible with Iranian tax laws?',
      faq_4_a: "Tax compatibility depends on implemented product features and updates. Have this claim reviewed before publishing.",
      faq_5_q: 'Do you have a mobile app?',
      faq_5_a: "If you provide mobile apps, link to the real stores and describe their actual features. This copy is illustrative.",
      faq_6_q: 'How does support work?',
      faq_6_a: "List the support channels, response hours and service levels covered by your actual plans.",
      
      cta_title: "Ready to learn about the product?",
      cta_subtitle: "This section is illustrative. Replace any trial period, access terms and offer with what the product actually provides.",
      cta_placeholder: 'Enter your email',
      cta_button: "Request a demo",
      
      footer_desc: "An editable preview for a cloud accounting product. Replace the name, features and contact details with verified product information.",
      footer_product: 'Product',
      footer_product_1: 'Features',
      footer_product_2: 'Pricing',
      footer_product_3: "Dashboard preview",
      footer_product_4: "Frequently asked questions",
      footer_company: 'Company',
      footer_company_1: "About the product",
      footer_company_2: "Benefits",
      footer_company_3: "Support",
      footer_company_4: "Request a demo",
      footer_resources: 'Resources',
      footer_resources_1: "Frequently asked questions",
      footer_resources_2: "Terms of use",
      footer_resources_3: "Privacy",
      footer_resources_4: "Contact",
      footer_legal: 'Legal',
      footer_legal_1: 'Terms of Service',
      footer_legal_2: 'Privacy Policy',
      footer_legal_3: 'Security',
      footer_rights: "© 2026 Taraz — sample content",
      
      form_success: "Your request was received.",
      form_error: "Please enter a valid email address.",
      
      theme_toggle: "Toggle light and dark theme",
      mobile_menu: "Open menu",
      skip_link: "Skip to main content",
      demo_notice: "Template preview: names, features, metrics, prices, trial offers, support, testimonials and security or tax claims are examples. Replace them with verified product information before publishing.",
      brand_aria: "Taraz — back to top",
      nav_label: "Main navigation",
      language_toggle_aria: "Switch language to Persian",
      language_short: "فا",
      dashboard_title: "Sample Taraz dashboard",
      dashboard_revenue: "Monthly revenue",
      dashboard_revenue_value: "45,200,000",
      dashboard_invoices: "Issued invoices",
      dashboard_invoices_value: "128",
      dashboard_receivables: "Receivables",
      dashboard_receivables_value: "12,500,000",
      showcase_image_alt: "Illustrative preview of the Taraz accounting dashboard",
      cta_email_label: "Email address",
      form_demo_note: "Demo form only. No email is sent or stored until you connect an endpoint.",
      pricing_sample_note: "Plan prices and features are examples. Replace them with your product’s verified pricing before publishing.",
      page_title: "Taraz | Cloud accounting software — Sokkan template preview",
      page_description: "Taraz is an editable preview for cloud accounting software. Metrics, prices and product claims are sample content.",

    }
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
  };
  const t = key => translations[currentLang]?.[key] ?? translations.fa[key] ?? key;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let currentLang = storage.get('taraz_lang') === 'en' ? 'en' : 'fa';
  let currentTheme = storage.get('taraz_theme');
  if (currentTheme !== 'light' && currentTheme !== 'dark') {
    currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateLanguage(persist = true) {
    const root = document.documentElement;
    root.lang = currentLang;
    root.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    $$('[data-i18n]').forEach(element => {
      const value = translations[currentLang]?.[element.dataset.i18n] ?? translations.fa[element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    $$('[data-i18n-placeholder]').forEach(element => {
      const value = translations[currentLang]?.[element.dataset.i18nPlaceholder] ?? translations.fa[element.dataset.i18nPlaceholder];
      if (value !== undefined) element.setAttribute('placeholder', value);
    });
    $$('[data-i18n-aria]').forEach(element => {
      const value = translations[currentLang]?.[element.dataset.i18nAria] ?? translations.fa[element.dataset.i18nAria];
      if (value !== undefined) element.setAttribute('aria-label', value);
    });
    $$('[data-i18n-alt]').forEach(element => {
      const value = translations[currentLang]?.[element.dataset.i18nAlt] ?? translations.fa[element.dataset.i18nAlt];
      if (value !== undefined) element.setAttribute('alt', value);
    });
    document.title = t('page_title');
    const description = $('meta[name="description"]');
    const ogTitle = $('meta[property="og:title"]');
    const ogDescription = $('meta[property="og:description"]');
    if (description) description.content = t('page_description');
    if (ogTitle) ogTitle.content = t('page_title');
    if (ogDescription) ogDescription.content = t('page_description');
    const toggle = $('.mobile-menu-toggle');
    if (toggle?.getAttribute('aria-expanded') === 'true') {
      toggle.setAttribute('aria-label', currentLang === 'fa' ? 'بستن منو' : 'Close menu');
    }
    $$('[data-count][data-count-done="true"]').forEach(renderCounterValue);
    if (persist) storage.set('taraz_lang', currentLang);
  }

  function setTheme(theme, persist = true) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = currentTheme;
    const themeColor = $('meta[name="theme-color"]');
    if (themeColor) themeColor.content = currentTheme === 'dark' ? '#0f172a' : '#ffffff';
    if (persist) storage.set('taraz_theme', currentTheme);
  }

  const langToggle = $('.lang-toggle');
  const themeToggle = $('.theme-toggle');
  langToggle?.addEventListener('click', () => {
    currentLang = currentLang === 'fa' ? 'en' : 'fa';
    updateLanguage();
  });
  themeToggle?.addEventListener('click', () => setTheme(currentTheme === 'light' ? 'dark' : 'light'));

  // Mobile drawer: keep visibility, body scroll and ARIA state in sync.
  const menuToggle = $('.mobile-menu-toggle');
  const mobileNav = $('#mobileNav');
  function setMobileMenu(open, returnFocus = false) {
    if (!menuToggle || !mobileNav) return;
    menuToggle.classList.toggle('active', open);
    mobileNav.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open
      ? (currentLang === 'fa' ? 'بستن منو' : 'Close menu')
      : t('mobile_menu'));
    mobileNav.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('menu-open', open);
    if (open) $('.mobile-nav-link', mobileNav)?.focus();
    else if (returnFocus) menuToggle.focus();
  }
  menuToggle?.addEventListener('click', () => setMobileMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  mobileNav?.addEventListener('click', event => {
    if (event.target.closest('a')) setMobileMenu(false);
  });
  document.addEventListener('click', event => {
    if (menuToggle?.getAttribute('aria-expanded') === 'true' && !event.target.closest('.header')) setMobileMenu(false);
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) setMobileMenu(false);
  }, { passive: true });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') setMobileMenu(false, true);
  });

  // Header elevation.
  const header = $('.header');
  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 50);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  // Accessible single-open FAQ accordion.
  $$('.faq-item').forEach(item => {
    const question = $('.faq-question', item);
    const answer = $('.faq-answer', item);
    question?.addEventListener('click', () => {
      const shouldOpen = question.getAttribute('aria-expanded') !== 'true';
      $$('.faq-item').forEach(other => {
        other.classList.remove('active');
        $('.faq-question', other)?.setAttribute('aria-expanded', 'false');
        $('.faq-answer', other)?.setAttribute('aria-hidden', 'true');
      });
      if (shouldOpen) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
        answer?.setAttribute('aria-hidden', 'false');
      }
    });
  });

  // A truthful demo form: report success only after a configured service responds.
  const toast = $('#toast');
  let toastTimer;
  function showToast(message, kind = 'info') {
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.dataset.kind = kind;
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add('show'));
    toastTimer = window.setTimeout(() => {
      toast.classList.remove('show');
      window.setTimeout(() => { toast.hidden = true; }, 250);
    }, 3600);
  }
  const signupForm = $('#signupForm');
  signupForm?.addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const endpoint = String(form.dataset.endpoint || '').trim();
    if (!endpoint) { showToast(t('form_demo_note')); return; }
    const submit = $('button[type="submit"]', form);
    submit.disabled = true;
    try {
      const response = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: $('#signupEmail').value.trim() })
      });
      if (!response.ok) throw new Error('Form request failed');
      form.reset();
      showToast(t('form_success'), 'success');
    } catch (_) {
      showToast(t('form_error'), 'error');
    } finally { submit.disabled = false; }
  });
  // The submit button starts disabled in static HTML so JavaScript-off pages
  // cannot post an email accidentally; enable it after the safe handler exists.
  const signupSubmit = signupForm && $('button[type="submit"]', signupForm);
  if (signupSubmit) signupSubmit.disabled = false;

  // Reveal cards only when IntersectionObserver is available; otherwise leave content visible.
  if ('IntersectionObserver' in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    $$('.card, .benefit-card, .pricing-card, .testimonial-card').forEach(element => revealObserver.observe(element));
  }

  // Locale-aware count-up; reduced-motion users get the final value immediately.
  function renderCounterValue(element, value = Number(element.dataset.count)) {
    const formatted = new Intl.NumberFormat(currentLang === 'fa' ? 'fa-IR' : 'en-US', { maximumFractionDigits: 0 }).format(value);
    element.textContent = formatted + (element.dataset.countSuffix || '');
  }
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const counter = entry.target;
        const target = Number(counter.dataset.count) || 0;
        observer.unobserve(counter);
        counter.dataset.countDone = 'true';
        if (reduceMotion) { renderCounterValue(counter, target); return; }
        const start = performance.now();
        const duration = 1300;
        function tick(now) {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          renderCounterValue(counter, Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.55 });
    $$('[data-count]').forEach(counter => counterObserver.observe(counter));
  }

  window.addEventListener('storage', event => {
    if (event.key === 'taraz_theme' && ['light', 'dark'].includes(event.newValue)) setTheme(event.newValue, false);
    if (event.key === 'taraz_lang' && ['fa', 'en'].includes(event.newValue)) { currentLang = event.newValue; updateLanguage(false); }
  });

  setTheme(currentTheme, false);
  updateLanguage(false);
})();
