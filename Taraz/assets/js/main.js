/* ============================================================
   Taraz | تراز — main.js
   Theme · Language (full i18n) · Mobile Menu · FAQ · Screenshots
   Forms · Scroll · Reveal · Counters · Active Nav
   ============================================================ */
(function() {
  'use strict';

  // ==================== TRANSLATIONS ====================
  const T = {
    fa: {
      // Meta
      meta_title: 'تراز | نرم‌افزار حسابداری ابری',
      meta_description: 'تراز، نرم‌افزار حسابداری ابری هوشمند برای کسب‌وکارهای ایرانی.',
      brand: 'تراز',

      // Navigation
      nav_features: 'ویژگی‌ها',
      nav_dashboard: 'داشبورد',
      nav_pricing: 'تعرفه‌ها',
      nav_testimonials: 'نظرات',
      nav_faq: 'سوالات',
      nav_showcase: 'پیش‌نمایش محصول',

      // Hero
      hero_badge: '🚀 نسخه جدید ۱۴۰۴ منتشر شد',
      hero_title_1: 'مدیریت مالی هوشمند',
      hero_title_2: 'با تراز',
      hero_subtitle: 'نرم‌افزار حسابداری ابری تراز، راهکاری جامع برای مدیریت مالی کسب‌وکار شما. از صدور فاکتور تا گزارش‌های تحلیلی، همه چیز در یک پلتفرم یکپارچه.',
      hero_cta_dashboard: 'مشاهده داشبورد',
      hero_stat_1_value: '۱۰,۰۰۰+',
      hero_stat_1_label: 'کسب‌وکار فعال',
      hero_stat_2_value: '۹۹.۹٪',
      hero_stat_2_label: 'آپتایم سرور',
      hero_stat_3_value: '۲۴/۷',
      hero_stat_3_label: 'پشتیبانی آنلاین',
      hero_dashboard_title: 'تراز — داشبورد مالی',
      hero_dashboard_revenue: 'درآمد ماهانه',
      hero_dashboard_revenue_value: '۴۵,۲۰۰,۰۰۰',
      hero_dashboard_invoices: 'فاکتورهای صادر شده',
      hero_dashboard_invoices_value: '۱۲۸',
      hero_dashboard_receivables: 'مطالبات معوق',
      hero_dashboard_receivables_value: '۱۲,۵۰۰,۰۰۰',
      hero_floating_growth: '+۲۳٪',
      hero_floating_growth_label: 'رشد درآمد',
      hero_floating_payments: '۱۲۸',
      hero_floating_payments_label: 'پرداخت موفق',

      // Trust bar
      trust_security: 'تاییدیه امنیت سایبری',
      trust_ssl: 'رمزنگاری SSL ۲۵۶',
      trust_backup: 'پشتیبان‌گیری روزانه',
      trust_servers: 'سرورهای امن ایران',

      // Features
      features_badge: 'ویژگی‌ها',
      features_title: 'همه آنچه برای مدیریت مالی نیاز دارید',
      features_subtitle: 'تراز با مجموعه‌ای از ابزارهای قدرتمند، مدیریت مالی کسب‌وکار شما را ساده و هوشمند می‌کند.',
      feature_1_title: 'صدور فاکتور حرفه‌ای',
      feature_1_desc: 'ایجاد فاکتورهای زیبا و حرفه‌ای در چند ثانیه. ارسال خودکار به مشتری و پیگیری وضعیت پرداخت.',
      feature_2_title: 'مدیریت هزینه‌ها',
      feature_2_desc: 'ثبت و دسته‌بندی تمامی هزینه‌ها. گزارش‌های تفصیلی برای کنترل بهتر بودجه و کاهش هزینه‌های اضافی.',
      feature_3_title: 'گزارش‌های تحلیلی',
      feature_3_desc: 'داشبورد هوشمند با نمودارهای تعاملی. تحلیل روند درآمد و هزینه در زمان واقعی.',
      feature_4_title: 'مدیریت موجودی',
      feature_4_desc: 'پیگیری موجودی کالا و انبار. هشدار خودکار برای کالاهای رو به اتمام.',
      feature_5_title: 'محاسبه مالیات',
      feature_5_desc: 'محاسبه خودکار مالیات بر ارزش افزوده. تهیه گزارش‌های مالیاتی مطابق آخرین استانداردهای ایران.',
      feature_6_title: 'اپلیکیشن موبایل',
      feature_6_desc: 'دسترسی به تمامی امکانات از طریق اپلیکیشن موبایل. مدیریت مالی در هر زمان و مکان.',

      // Charts
      charts_badge: 'داشبورد تحلیلی',
      charts_title: 'نمودارهای هوشمند برای تصمیم‌گیری بهتر',
      charts_subtitle: 'با نمودارهای تعاملی تراز، وضعیت مالی کسب‌وکارتان را در یک نگاه تحلیل کنید.',
      chart_bar_title: 'درآمد ماهانه (میلیون تومان)',
      chart_bar_badge: '↑ ۲۳٪',
      bar_v1: '۳۲', bar_v2: '۴۵', bar_v3: '۳۸', bar_v4: '۵۶', bar_v5: '۴۹', bar_v6: '۶۷',
      bar_l1: 'فرو', bar_l2: 'اردی', bar_l3: 'خرداد', bar_l4: 'تیر', bar_l5: 'مرداد', bar_l6: 'شهری',
      legend_net_income: 'درآمد خالص',
      chart_line_title: 'روند رشد سود خالص',
      chart_line_badge: '↑ ۱۸٪',
      legend_net_profit: 'سود خالص',
      legend_target: 'هدف‌گذاری',

      // Showcase
      showcase_badge: 'پیش‌نمایش محصول',
      showcase_title: 'داشبورد قدرتمند و کاربرپسند',
      showcase_subtitle: 'با داشبورد تراز، تمامی اطلاعات مالی کسب‌وکارتان را در یک نگاه مشاهده کنید.',
      showcase_feat_1: 'نمایش لحظه‌ای درآمد و هزینه',
      showcase_feat_2: 'نمودارهای تعاملی و قابل تنظیم',
      showcase_feat_3: 'هشدارهای هوشمند برای رویدادهای مهم',
      showcase_feat_4: 'گزارش‌گیری حرفه‌ای با یک کلیک',
      showcase_cta: 'درخواست دموی رایگان',
      showcase_alt: 'پیش‌نمایش داشبورد تراز',

      // Screenshots
      screenshots_badge: 'نمای نرم‌افزار',
      screenshots_title: 'نگاهی به محیط تراز',
      screenshots_subtitle: 'صفحات مختلف نرم‌افزار را مشاهده کنید و با رابط کاربری حرفه‌ای تراز آشنا شوید.',
      tab_dashboard: 'داشبورد',
      tab_invoice: 'فاکتور',
      tab_reports: 'گزارش‌ها',
      tab_transactions: 'تراکنش‌ها',
      browser_url: 'app.taraz.ir/dashboard',

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

      // Integrations
      integrations_badge: 'یکپارچه‌سازی',
      integrations_title: 'سازگار با ابزارهای محبوب',
      integrations_subtitle: 'تراز با سرویس‌ها و ابزارهای پرکاربرد یکپارچه می‌شود تا workflows شما بهینه‌تر شود.',
      int_1_name: 'بانک‌ها', int_1_desc: 'اتصال مستقیم',
      int_2_name: 'زرین‌پال', int_2_desc: 'درگاه پرداخت',
      int_3_name: 'ایمیل', int_3_desc: 'ارسال خودکار',
      int_4_name: 'پیامک', int_4_desc: 'اطلاع‌رسانی',
      int_5_name: 'ووکامرس', int_5_desc: 'فروشگاه آنلاین',
      int_6_name: 'اکسل', int_6_desc: 'خروجی گزارش',
      int_7_name: 'API', int_7_desc: 'اتصال سفارشی',
      int_8_name: 'ابری', int_8_desc: 'همگام‌سازی',

      // Pricing
      pricing_badge: 'تعرفه‌ها',
      pricing_title: 'پلن مناسب کسب‌وکار خود را انتخاب کنید',
      pricing_subtitle: 'شروع رایگان. ارتقا در هر زمان. بدون قرارداد طولانی‌مدت.',
      plan_starter_name: 'استارتر',
      plan_starter_desc: 'برای کسب‌وکارهای کوچک',
      plan_starter_price: '۲۹۰,۰۰۰',
      plan_period_monthly: 'تومان / ماهانه',
      plan_starter_f1: 'تا ۱۰۰ فاکتور در ماه',
      plan_starter_f2: '۱ کاربر',
      plan_starter_f3: 'گزارش‌های پایه',
      plan_starter_f4: 'پشتیبانی ایمیلی',
      plan_popular: 'محبوب‌ترین',
      plan_pro_name: 'حرفه‌ای',
      plan_pro_desc: 'برای کسب‌وکارهای در حال رشد',
      plan_pro_price: '۵۹۰,۰۰۰',
      plan_pro_f1: 'فاکتور نامحدود',
      plan_pro_f2: 'تا ۵ کاربر',
      plan_pro_f3: 'گزارش‌های پیشرفته',
      plan_pro_f4: 'پشتیبانی تلفنی',
      plan_pro_f5: 'اپلیکیشن موبایل',
      plan_enterprise_name: 'سازمانی',
      plan_enterprise_desc: 'برای سازمان‌های بزرگ',
      plan_enterprise_price: 'تماس بگیرید',
      plan_enterprise_period: 'قیمت سفارشی',
      plan_enterprise_f1: 'همه امکانات حرفه‌ای',
      plan_enterprise_f2: 'کاربر نامحدود',
      plan_enterprise_f3: 'API اختصاصی',
      plan_enterprise_f4: 'پشتیبانی اختصاصی ۲۴/۷',
      plan_enterprise_f5: 'آموزش تیمی',
      plan_enterprise_cta: 'درخواست دمو',

      // Download
      download_badge: 'دانلود اپلیکیشن',
      download_title: 'تراز را همیشه همراه داشته باشید',
      download_subtitle: 'اپلیکیشن تراز را روی تمامی دستگاه‌های خود نصب کنید و از هر جا مدیریت مالی انجام دهید.',
      dl_label_download: 'دانلود از',
      dl_android: 'Google Play',
      dl_version: 'نسخه ۳.۲.۱ — ۲۴ MB',
      dl_ios: 'App Store',
      dl_version_ios: 'نسخه ۳.۲.۰ — ۳۱ MB',
      dl_windows: 'Windows',
      dl_version_win: 'نسخه ۳.۲.۱ — ۸۵ MB',

      // Testimonials
      testimonials_badge: 'نظرات مشتریان',
      testimonials_title: 'مشتریان ما چه می‌گویند',
      testimonials_subtitle: 'بیش از ۱۰,۰۰۰ کسب‌وکار به تراز اعتماد کرده‌اند.',
      test_1_text: '«تراز کار ما را متحول کرد. قبلاً ساعت‌ها وقت صرف امور مالی می‌کردیم، الان همه چیز خودکار است و تیم ما روی رشد کسب‌وکار تمرکز دارد.»',
      test_1_avatar: 'ع', test_1_name: 'علی محمدی', test_1_role: 'مدیرعامل، شرکت فناوری نوین',
      test_2_text: '«رابط کاربری فوق‌العاده و پشتیبانی عالی. تیم تراز همیشه در دسترس هستند و سریع پاسخ می‌دهند.»',
      test_2_avatar: 'س', test_2_name: 'سارا احمدی', test_2_role: 'حسابدار، فروشگاه آنلاین پارسیان',
      test_3_text: '«گزارش‌های تحلیلی تراز به ما کمک کرد تصمیمات بهتری بگیریم. داشبورد مدیریتی عالی و واقعاً ارزش هر ریالش را دارد.»',
      test_3_avatar: 'ر', test_3_name: 'رضا کریمی', test_3_role: 'مدیر مالی، گروه صنعتی البرز',

      // FAQ
      faq_badge: 'سوالات متداول',
      faq_title: 'پاسخ به سوالات شما',
      faq_subtitle: 'اگر سوال دیگری دارید، با ما تماس بگیرید.',
      faq_1_q: 'آیا می‌توانم تراز را رایگان امتحان کنم؟',
      faq_1_a: 'بله، تمامی پلن‌ها شامل ۱۴ روز استفاده رایگان هستند. نیازی به وارد کردن اطلاعات کارت بانکی نیست.',
      faq_2_q: 'آیا اطلاعات من امن است؟',
      faq_2_a: 'بله، ما از رمزنگاری سطح بانکی (SSL ۲۵۶ بیتی) استفاده می‌کنیم. سرورهای ما در دیتاسنترهای امن در ایران قرار دارند.',
      faq_3_q: 'آیا می‌توانم اطلاعات را از نرم‌افزار قبلی منتقل کنم؟',
      faq_3_a: 'بله، تیم پشتیبانی ما در فرآیند انتقال اطلاعات به شما کمک می‌کند. این سرویس برای تمامی پلن‌ها رایگان است.',
      faq_4_q: 'آیا تراز با قوانین مالیاتی ایران سازگار است؟',
      faq_4_a: 'بله، تراز کاملاً با آخرین تغییرات قوانین مالیاتی ایران سازگار است. محاسبه مالیات بر ارزش افزوده به صورت خودکار انجام می‌شود.',
      faq_5_q: 'آیا اپلیکیشن موبایل دارید؟',
      faq_5_a: 'بله، اپلیکیشن تراز برای iOS و Android در دسترس است. همگام‌سازی لحظه‌ای دارد.',
      faq_6_q: 'نحوه پشتیبانی چگونه است؟',
      faq_6_a: 'پشتیبانی از طریق چت آنلاین، تلفن و ایمیل ارائه می‌شود. پلن‌های حرفه‌ای و سازمانی شامل پشتیبانی ۲۴/۷ هستند.',

      // CTA
      cta_title: 'آماده شروع هستید؟',
      cta_subtitle: 'همین امروز ثبت‌نام کنید و ۱۴ روز رایگان از تمامی امکانات تراز استفاده کنید.',
      cta_placeholder: 'ایمیل خود را وارد کنید',
      cta_start: 'شروع رایگان',

      // Footer
      footer_desc: 'تراز، نرم‌افزار حسابداری ابری برای کسب‌وکارهای ایرانی. ساده، هوشمند، امن.',
      footer_product: 'محصول',
      footer_product_1: 'ویژگی‌ها', footer_product_2: 'تعرفه‌ها', footer_product_3: 'به‌روزرسانی‌ها', footer_product_4: 'نقشه راه',
      footer_company: 'شرکت',
      footer_company_1: 'درباره ما', footer_company_2: 'وبلاگ', footer_company_3: 'فرصت‌های شغلی', footer_company_4: 'تماس با ما',
      footer_resources: 'منابع',
      footer_resources_1: 'مستندات API', footer_resources_2: 'راهنمای استفاده', footer_resources_3: 'ویدیوهای آموزشی', footer_resources_4: 'مرکز پشتیبانی',
      trust_enamad: 'نماد اعتماد', trust_enamad_hint: 'نماد<br>اعتماد<br>الکترونیک',
      trust_payments: 'درگاه‌های پرداخت',
      pay_zarinpal: 'زرین‌پال', pay_nextpay: 'نکست‌پی', pay_mellat: 'بانک<br>ملت', pay_saman: 'بانک<br>سامان',
      trust_certs: 'گواهینامه‌ها', trust_ssl_hint: 'گواهینامه<br>امنیتی<br>SSL',
      footer_rights: '© ۱۴۰۴ تراز. تمامی حقوق محفوظ است.',
      footer_legal_1: 'شرایط استفاده', footer_legal_2: 'حریم خصوصی', footer_legal_3: 'امنیت',
      footer_made: 'ساخته شده با ❤️ در ایران',

      // Messages
      form_success: 'پیام شما با موفقیت ارسال شد!',
      form_error: 'لطفاً تمامی فیلدها را پر کنید.'
    },

    en: {
      // Meta
      meta_title: 'Taraz | Cloud Accounting Software',
      meta_description: 'Taraz, smart cloud accounting software for businesses. Simple, secure, and professional financial management.',
      brand: 'Taraz',

      // Navigation
      nav_features: 'Features',
      nav_dashboard: 'Dashboard',
      nav_pricing: 'Pricing',
      nav_testimonials: 'Reviews',
      nav_faq: 'FAQ',
      nav_showcase: 'Product Preview',

      // Hero
      hero_badge: '🚀 New Version 2025 Released',
      hero_title_1: 'Smart Financial Management',
      hero_title_2: 'with Taraz',
      hero_subtitle: 'Taraz cloud accounting software is a comprehensive solution for your business financial management. From invoicing to analytical reports, everything in one unified platform.',
      hero_cta_dashboard: 'View Dashboard',
      hero_stat_1_value: '10,000+',
      hero_stat_1_label: 'Active Businesses',
      hero_stat_2_value: '99.9%',
      hero_stat_2_label: 'Server Uptime',
      hero_stat_3_value: '24/7',
      hero_stat_3_label: 'Online Support',
      hero_dashboard_title: 'Taraz — Financial Dashboard',
      hero_dashboard_revenue: 'Monthly Revenue',
      hero_dashboard_revenue_value: '$45,200',
      hero_dashboard_invoices: 'Invoices Issued',
      hero_dashboard_invoices_value: '128',
      hero_dashboard_receivables: 'Outstanding Receivables',
      hero_dashboard_receivables_value: '$12,500',
      hero_floating_growth: '+23%',
      hero_floating_growth_label: 'Revenue Growth',
      hero_floating_payments: '128',
      hero_floating_payments_label: 'Successful Payments',

      // Trust bar
      trust_security: 'Cybersecurity Certified',
      trust_ssl: 'SSL 256-bit Encryption',
      trust_backup: 'Daily Backups',
      trust_servers: 'Secure Servers',

      // Features
      features_badge: 'Features',
      features_title: 'Everything You Need for Financial Management',
      features_subtitle: 'Taraz simplifies and smartens your business financial management with a powerful set of tools.',
      feature_1_title: 'Professional Invoicing',
      feature_1_desc: 'Create beautiful professional invoices in seconds. Auto-send to customers and track payment status.',
      feature_2_title: 'Expense Management',
      feature_2_desc: 'Record and categorize all expenses. Detailed reports for better budget control and cost reduction.',
      feature_3_title: 'Analytical Reports',
      feature_3_desc: 'Smart dashboard with interactive charts. Real-time income and expense trend analysis.',
      feature_4_title: 'Inventory Management',
      feature_4_desc: 'Track inventory and warehouse stock. Auto-alerts for low stock items.',
      feature_5_title: 'Tax Calculation',
      feature_5_desc: 'Automatic VAT calculation. Prepare tax reports according to the latest standards.',
      feature_6_title: 'Mobile Application',
      feature_6_desc: 'Access all features via mobile app. Financial management anytime, anywhere.',

      // Charts
      charts_badge: 'Analytics Dashboard',
      charts_title: 'Smart Charts for Better Decisions',
      charts_subtitle: 'Analyze your business financial status at a glance with Taraz interactive charts.',
      chart_bar_title: 'Monthly Revenue ($K)',
      chart_bar_badge: '↑ 23%',
      bar_v1: '32', bar_v2: '45', bar_v3: '38', bar_v4: '56', bar_v5: '49', bar_v6: '67',
      bar_l1: 'Jan', bar_l2: 'Feb', bar_l3: 'Mar', bar_l4: 'Apr', bar_l5: 'May', bar_l6: 'Jun',
      legend_net_income: 'Net Income',
      chart_line_title: 'Net Profit Growth Trend',
      chart_line_badge: '↑ 18%',
      legend_net_profit: 'Net Profit',
      legend_target: 'Target',

      // Showcase
      showcase_badge: 'Product Preview',
      showcase_title: 'Powerful and User-Friendly Dashboard',
      showcase_subtitle: 'With Taraz dashboard, view all your business financial information at a glance and make smart decisions.',
      showcase_feat_1: 'Real-time income and expense display',
      showcase_feat_2: 'Interactive and customizable charts',
      showcase_feat_3: 'Smart alerts for important events',
      showcase_feat_4: 'Professional one-click reporting',
      showcase_cta: 'Request Free Demo',
      showcase_alt: 'Taraz Dashboard Preview',

      // Screenshots
      screenshots_badge: 'Software Preview',
      screenshots_title: 'A Look Inside Taraz',
      screenshots_subtitle: 'Explore different pages of the software and get familiar with Taraz professional interface.',
      tab_dashboard: 'Dashboard',
      tab_invoice: 'Invoice',
      tab_reports: 'Reports',
      tab_transactions: 'Transactions',
      browser_url: 'app.taraz.io/dashboard',

      // Benefits
      benefits_badge: 'Why Taraz?',
      benefits_title: 'Benefits of Using Taraz',
      benefits_subtitle: 'Taraz is the first choice of thousands of successful businesses.',
      benefit_1_title: 'Save Time',
      benefit_1_desc: 'Automate repetitive processes. Reduce 70% of time spent on financial tasks.',
      benefit_2_title: 'Reduce Errors',
      benefit_2_desc: 'Automatic and accurate calculations. Eliminate human errors in data entry.',
      benefit_3_title: 'Access Anywhere',
      benefit_3_desc: 'Cloud platform with access from any device. Team collaboration without limits.',
      benefit_4_title: 'Bank-Level Security',
      benefit_4_desc: 'Bank-level encryption. Automatic daily backups. Secure servers.',
      benefit_5_title: '24/7 Support',
      benefit_5_desc: 'Expert support team available at all hours. Response via chat, phone, and email.',
      benefit_6_title: 'Continuous Updates',
      benefit_6_desc: 'New features added every month. Compatible with latest tax law changes.',

      // Integrations
      integrations_badge: 'Integrations',
      integrations_title: 'Compatible with Popular Tools',
      integrations_subtitle: 'Taraz integrates with popular services and tools to optimize your workflows.',
      int_1_name: 'Banks', int_1_desc: 'Direct connection',
      int_2_name: 'Stripe', int_2_desc: 'Payment gateway',
      int_3_name: 'Email', int_3_desc: 'Auto-send',
      int_4_name: 'SMS', int_4_desc: 'Notifications',
      int_5_name: 'WooCommerce', int_5_desc: 'Online store',
      int_6_name: 'Excel', int_6_desc: 'Report export',
      int_7_name: 'API', int_7_desc: 'Custom integration',
      int_8_name: 'Cloud', int_8_desc: 'Sync',

      // Pricing
      pricing_badge: 'Pricing',
      pricing_title: 'Choose the Plan That Fits Your Business',
      pricing_subtitle: 'Start free. Upgrade anytime. No long-term contracts.',
      plan_starter_name: 'Starter',
      plan_starter_desc: 'For small businesses',
      plan_starter_price: '$9.99',
      plan_period_monthly: 'USD / monthly',
      plan_starter_f1: 'Up to 100 invoices/month',
      plan_starter_f2: '1 user',
      plan_starter_f3: 'Basic reports',
      plan_starter_f4: 'Email support',
      plan_popular: 'Most Popular',
      plan_pro_name: 'Professional',
      plan_pro_desc: 'For growing businesses',
      plan_pro_price: '$19.99',
      plan_pro_f1: 'Unlimited invoices',
      plan_pro_f2: 'Up to 5 users',
      plan_pro_f3: 'Advanced reports',
      plan_pro_f4: 'Phone support',
      plan_pro_f5: 'Mobile app',
      plan_enterprise_name: 'Enterprise',
      plan_enterprise_desc: 'For large organizations',
      plan_enterprise_price: 'Contact Us',
      plan_enterprise_period: 'Custom pricing',
      plan_enterprise_f1: 'All Professional features',
      plan_enterprise_f2: 'Unlimited users',
      plan_enterprise_f3: 'Dedicated API',
      plan_enterprise_f4: 'Dedicated 24/7 support',
      plan_enterprise_f5: 'Team training',
      plan_enterprise_cta: 'Request Demo',

      // Download
      download_badge: 'Download App',
      download_title: 'Take Taraz Everywhere With You',
      download_subtitle: 'Install the Taraz app on all your devices and manage your finances from anywhere.',
      dl_label_download: 'Download from',
      dl_android: 'Google Play',
      dl_version: 'v3.2.1 — 24 MB',
      dl_ios: 'App Store',
      dl_version_ios: 'v3.2.0 — 31 MB',
      dl_windows: 'Windows',
      dl_version_win: 'v3.2.1 — 85 MB',

      // Testimonials
      testimonials_badge: 'Customer Reviews',
      testimonials_title: 'What Our Customers Say',
      testimonials_subtitle: 'Over 10,000 businesses trust Taraz.',
      test_1_text: '"Taraz transformed our work. We used to spend hours on financial tasks, now everything is automated and our team focuses on business growth."',
      test_1_avatar: 'A', test_1_name: 'Ali Mohammadi', test_1_role: 'CEO, Novin Technology Co.',
      test_2_text: '"Amazing user interface and excellent support. The Taraz team is always available and responds quickly."',
      test_2_avatar: 'S', test_2_name: 'Sara Ahmadi', test_2_role: 'Accountant, Parsian Online Store',
      test_3_text: '"Taraz analytical reports helped us make better decisions. Great management dashboard, truly worth every penny."',
      test_3_avatar: 'R', test_3_name: 'Reza Karimi', test_3_role: 'CFO, Alborz Industrial Group',

      // FAQ
      faq_badge: 'FAQ',
      faq_title: 'Answers to Your Questions',
      faq_subtitle: 'If you have other questions, feel free to contact us.',
      faq_1_q: 'Can I try Taraz for free?',
      faq_1_a: 'Yes, all plans include a 14-day free trial. No credit card required.',
      faq_2_q: 'Is my data secure?',
      faq_2_a: 'Yes, we use bank-level encryption (SSL 256-bit). Our servers are in secure data centers with automatic daily backups.',
      faq_3_q: 'Can I migrate data from my previous software?',
      faq_3_a: 'Yes, our support team will help you with the migration process. This service is free for all plans.',
      faq_4_q: 'Is Taraz compatible with local tax laws?',
      faq_4_a: 'Yes, Taraz is fully compatible with the latest tax regulations. VAT calculation and tax report preparation are done automatically.',
      faq_5_q: 'Do you have a mobile app?',
      faq_5_a: 'Yes, Taraz app is available for iOS and Android with real-time synchronization.',
      faq_6_q: 'How does support work?',
      faq_6_a: 'Support is provided via online chat, phone, and email. Professional and Enterprise plans include dedicated 24/7 support.',

      // CTA
      cta_title: 'Ready to Get Started?',
      cta_subtitle: 'Sign up today and use all Taraz features free for 14 days.',
      cta_placeholder: 'Enter your email address',
      cta_start: 'Start Free',

      // Footer
      footer_desc: 'Taraz, cloud accounting software for businesses. Simple, smart, secure. We help you achieve professional financial management.',
      footer_product: 'Product',
      footer_product_1: 'Features', footer_product_2: 'Pricing', footer_product_3: 'Updates', footer_product_4: 'Roadmap',
      footer_company: 'Company',
      footer_company_1: 'About Us', footer_company_2: 'Blog', footer_company_3: 'Careers', footer_company_4: 'Contact Us',
      footer_resources: 'Resources',
      footer_resources_1: 'API Documentation', footer_resources_2: 'User Guide', footer_resources_3: 'Tutorial Videos', footer_resources_4: 'Support Center',
      trust_enamad: 'Certifications', trust_enamad_hint: 'Security<br>Trust<br>Badge',
      trust_payments: 'Payment Gateways',
      pay_zarinpal: 'Stripe', pay_nextpay: 'PayPal', pay_mellat: 'Visa', pay_saman: 'Master<br>Card',
      trust_certs: 'Certificates', trust_ssl_hint: 'Security<br>SSL<br>Certificate',
      footer_rights: '© 2025 Taraz. All rights reserved.',
      footer_legal_1: 'Terms of Service', footer_legal_2: 'Privacy Policy', footer_legal_3: 'Security',
      footer_made: 'Made with ❤️ for businesses',

      // Messages
      form_success: 'Your message was sent successfully!',
      form_error: 'Please fill in all fields.'
    }
  };

  // ==================== STATE ====================
  let currentLang = localStorage.getItem('taraz_lang') || 'fa';
  let currentTheme = localStorage.getItem('taraz_theme') || 'light';

  // ==================== LANGUAGE ====================
  function applyLanguage() {
    const lang = T[currentLang];
    if (!lang) return;

    // Set HTML attributes
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (lang[key] !== undefined) {
        el.textContent = lang[key];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (lang[key] !== undefined) {
        el.placeholder = lang[key];
      }
    });

    // Update alt attributes
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (lang[key] !== undefined) {
        el.alt = lang[key];
      }
    });

    // Update meta tags
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl && lang[titleEl.getAttribute('data-i18n')]) {
      document.title = lang[titleEl.getAttribute('data-i18n')];
    }
    const descEl = document.querySelector('meta[name="description"][data-i18n]');
    if (descEl && lang[descEl.getAttribute('data-i18n')]) {
      descEl.content = lang[descEl.getAttribute('data-i18n')];
    }

    // Update language toggle label
    const langLabel = document.querySelector('[data-lang-label]');
    const langShort = document.querySelector('[data-lang-short]');
    if (langLabel) langLabel.textContent = currentLang === 'fa' ? 'EN' : 'فا';
    if (langShort) langShort.textContent = currentLang === 'fa' ? 'EN' : 'FA';

    // Update download button arrows for LTR
    document.querySelectorAll('.download-btn-arrow').forEach(el => {
      el.textContent = currentLang === 'fa' ? '←' : '→';
    });
  }

  function toggleLanguage() {
    currentLang = currentLang === 'fa' ? 'en' : 'fa';
    localStorage.setItem('taraz_lang', currentLang);
    applyLanguage();
  }

  // ==================== THEME ====================
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('taraz_theme', currentTheme);
    applyTheme();
  }

  // ==================== MOBILE MENU ====================
  function initMobileMenu() {
    const burger = document.querySelector('.nav-burger');
    const scrim = document.querySelector('.nav-scrim');
    if (!burger) return;

    function openMenu() {
      document.body.classList.add('nav-open');
      burger.setAttribute('aria-expanded', 'true');
    }
    function closeMenu() {
      document.body.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    }

    burger.addEventListener('click', () => {
      document.body.classList.contains('nav-open') ? closeMenu() : openMenu();
    });
    if (scrim) scrim.addEventListener('click', closeMenu);

    document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) closeMenu();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) closeMenu();
    });
  }

  // ==================== HEADER SCROLL ====================
  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ==================== SMOOTH SCROLL ====================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerH = document.querySelector('.header')?.offsetHeight || 0;
          window.scrollTo({ top: target.offsetTop - headerH - 20, behavior: 'smooth' });
        }
      });
    });
  }

  // ==================== FAQ ====================
  function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.parentElement;
        const wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('active'));
        if (!wasActive) item.classList.add('active');
      });
    });
  }

  // ==================== SCREENSHOTS ====================
  function initScreenshots() {
    const tabs = document.querySelectorAll('.screenshot-tab');
    const imgs = document.querySelectorAll('.screenshot-img');
    const urlBar = document.querySelector('.browser-url');

    const urls = {
      dashboard: 'app.taraz.ir/dashboard',
      invoice: 'app.taraz.ir/invoices/new',
      reports: 'app.taraz.ir/reports/monthly',
      transactions: 'app.taraz.ir/transactions'
    };
    const urlsEn = {
      dashboard: 'app.taraz.io/dashboard',
      invoice: 'app.taraz.io/invoices/new',
      reports: 'app.taraz.io/reports/monthly',
      transactions: 'app.taraz.io/transactions'
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        imgs.forEach(img => {
          img.classList.toggle('hidden', img.dataset.screenshot !== target);
        });
        if (urlBar) {
          const u = currentLang === 'en' ? urlsEn : urls;
          urlBar.textContent = u[target] || urls.dashboard;
        }
      });
    });
  }

  // ==================== FORMS ====================
  function initForms() {
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let valid = true;
        inputs.forEach(input => {
          if (!input.value.trim()) { valid = false; input.style.borderColor = 'var(--danger)'; }
          else { input.style.borderColor = ''; }
        });
        if (valid) {
          showToast(T[currentLang].form_success, 'success');
          form.reset();
        } else {
          showToast(T[currentLang].form_error, 'error');
        }
      });
    });
  }

  // ==================== TOAST ====================
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<div class="toast-icon">${type === 'success' ? '✓' : '✕'}</div><div class="toast-message">${message}</div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 100);
    setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3000);
  }

  // ==================== REVEAL ====================
  function initReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // ==================== COUNTERS ====================
  function initCounters() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          if (!target) return;
          let current = 0;
          const step = target / 125;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = currentLang === 'fa'
                ? target.toLocaleString('fa-IR') + '+'
                : target.toLocaleString('en-US') + '+';
              clearInterval(timer);
            } else {
              el.textContent = currentLang === 'fa'
                ? Math.floor(current).toLocaleString('fa-IR')
                : Math.floor(current).toLocaleString('en-US');
            }
          }, 16);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-count]').forEach(el => observer.observe(el));
  }

  // ==================== ACTIVE NAV ====================
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.nav-link');
    if (!sections.length || !links.length) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          links.forEach(l => {
            l.classList.toggle('active', l.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-100px 0px -50% 0px' });
    sections.forEach(s => observer.observe(s));
  }

  // ==================== INIT ====================
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    applyLanguage();
    initMobileMenu();
    initHeaderScroll();
    initSmoothScroll();
    initFAQ();
    initScreenshots();
    initForms();
    initReveal();
    initCounters();
    initActiveNav();

    document.querySelector('.theme-toggle')?.addEventListener('click', toggleTheme);
    document.querySelector('.lang-toggle')?.addEventListener('click', toggleLanguage);
  });

})();
