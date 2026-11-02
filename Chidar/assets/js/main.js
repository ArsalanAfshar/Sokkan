/* Chidar — storefront interactions; no framework or remote dependency required. */
(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
  };
  const FA = {
    skipLink: 'رفتن به محتوای اصلی', demoNote: 'پیش‌نمایش قالب چیدار است؛ محصولات، قیمت‌ها، موجودی، ارسال، نظرها، راه‌های تماس و شرایط نمونه‌اند؛ پیش از انتشار آن‌ها را با اطلاعات واقعی فروشگاه جایگزین کنید.',
    brandAria: 'چیدار — بازگشت به بالا', brandName: 'چیدار', brandCaption: 'خانه‌ای با ردّ دست', navAria: 'ناوبری اصلی',
    navCollections: 'دسته‌بندی‌ها', navShop: 'فروشگاه', navStory: 'داستان چیدار', navShipping: 'ارسال و خرید', navFaq: 'پرسش‌ها',
    searchLabel: 'جست‌وجو در محصولات', searchPlaceholder: 'نام محصول را جست‌وجو کنید', languageToggleAria: 'تغییر زبان به انگلیسی', languageShort: 'EN',
    themeToggleAria: 'تغییر پوستهٔ روشن و تیره', cartTriggerAria: 'بازکردن سبد خرید', menuToggleAria: 'بازکردن منو', closeMenuAria: 'بستن منو',
    heroKicker: 'دکور و دست‌سازه‌های ایرانی', heroTitleA: 'چیدمانِ خانه،', heroTitleB: 'با ردّ دست.',
    heroText: 'قطعه‌هایی برای زندگی روزمره؛ از سفال و پارچه تا جزئیات کوچکِ خانه، با الهام از نقش و رنگ ایران.',
    heroShop: 'دیدن محصولات', heroStory: 'آشنایی با چیدار', heroImageAlt: 'گلدان سفالی آبی و پارچهٔ دست‌باف در فضایی گرم و امروزی',
    heroSticker: 'از کارگاه تا خانه', heroCardTitle: 'هنرِ ماندگار', heroCardText: 'برای روزهای معمولی', assuranceAria: 'ویژگی‌های فروشگاه',
    assurance1: 'ساخته‌شده با دقت', assurance2: 'ارسال به سراسر ایران', trustAria: 'مزیت‌های سفارش',
    trust1Title: 'انتخاب با خیال راحت', trust1Text: 'جزئیات هر محصول روشن و کامل', trust2Title: 'ارسالِ سراسری', trust2Text: 'روش و زمان ارسال قابل تنظیم',
    trust3Title: 'هدیه‌ای از جنس هنر', trust3Text: 'بسته‌بندی هدیه را در تنظیمات فعال کنید',
    collectionsEyebrow: 'برای هر گوشهٔ خانه', collectionsTitle: 'از یک جزئیات کوچک شروع کنید.',
    collectionsText: 'دسته‌بندی دلخواهتان را انتخاب کنید؛ محصولات به‌صورت زنده فیلتر می‌شوند.', categoryFiltersAria: 'فیلتر دسته‌بندی محصولات',
    filterAll: 'همهٔ محصولات', filterAllSub: 'دیدن همهٔ مجموعه', filterCeramic: 'سفال و سرامیک', filterCeramicSub: 'فرم‌های دست‌ساز',
    filterTextile: 'پارچه و بافت', filterTextileSub: 'نقش، نخ، رنگ', filterLight: 'نور و روشنایی', filterLightSub: 'گرمایی برای فضا',
    filterDecor: 'پذیرایی و دکور', filterDecorSub: 'جزئیات میز و خانه',
    catalogEyebrow: 'منتخبِ چیدار', catalogTitle: 'قطعه‌های دوست‌داشتنیِ خانه',
    catalogText: 'قیمت‌ها و موجودی نمونه‌اند؛ در آرایهٔ محصولات فایل main.js و محتوای این صفحه را با فروشگاه خود هماهنگ کنید.',
    showing: 'نمایش', products: 'محصول', sortLabel: 'مرتب‌سازی:', sortFeatured: 'منتخب چیدار', sortLow: 'ارزان‌ترین', sortHigh: 'گران‌ترین',
    badgeHandmade: 'ساخت دست', badgeLimited: 'تولید محدود', badgeNew: 'تازه‌رسیده', badgePopular: 'محبوب',
    typeCeramic: 'سفال و سرامیک', typeTextile: 'پارچه و بافت', typeLight: 'نور و روشنایی', typeDecor: 'اکسسوری خانه',
    vaseAlt: 'گلدان سفالی آبی با نقش هندسی', vaseName: 'گلدان آبی نقش‌دار', vaseDesc: 'لعاب آبیِ عمیق؛ هر نقش، کمی متفاوت.',
    kilimAlt: 'گلیمچهٔ دست‌باف با نقش‌های هندسی', kilimName: 'گلیمچهٔ آفتاب', kilimDesc: 'بافتی گرم برای ورودی، کنار تخت یا دیوار.',
    lampAlt: 'چراغ رومیزی با پایهٔ سفالی و کلاهک پارچه‌ای', lampName: 'چراغ رومیزی لینا', lampDesc: 'نور نرم برای کنار تخت و گوشهٔ دنج خانه.',
    cushionAlt: 'کوسن کرم با نقش سوزن‌دوزی سبز', cushionName: 'کوسن سوزن‌دوزی سبز', cushionDesc: 'دوخت آرام و رنگ‌های خاکی برای مبل یا تخت.',
    trayAlt: 'سینی بیضی برنجی دست‌کوب با فنجان سفالی', trayName: 'سینی برنجی نقش‌کوب', trayDesc: 'نقش ظریف برای پذیرایی و لحظه‌های روزمره.',
    bowlAlt: 'کاسهٔ سرامیکی آبی با حاشیهٔ کرم', bowlName: 'کاسهٔ لعابی نیل', bowlDesc: 'فرمی ساده برای میز صبحانه و عصرانه.',
    currency: 'تومان', addToCart: 'افزودن', noProducts: 'محصولی با این جست‌وجو پیدا نشد؛ عبارت دیگری را امتحان کنید.',
    storyEyebrow: 'دربارهٔ این برند نمونه', storyTitle: 'زیباییِ خانه، در جزئیاتِ ساخته‌شده.',
    storyText: 'چیدار برای ترکیب آرامِ فرم‌های امروز با نقش‌های آشنای ایران ساخته شده است. این بخش را با داستان واقعی برند، هنرمندان همکار، شیوهٔ تولید و مبدأ هر محصول کامل کنید.',
    storySeal: 'از خاک تا خانه', storyValue1: 'ترکیب رنگ و نقشِ بومی', storyValue2: 'ساخت و پرداخت با دقت', storyValue3: 'جزئیات روشن پیش از سفارش', storyValue4: 'قابل‌استفاده، نه فقط تزئینی', storyCta: 'راهنمای سفارش',
    shippingEyebrow: 'پیش از ثبت سفارش', shippingTitle: 'خرید روشن، تجربهٔ بهتر.',
    shippingText: 'زمان تحویل، هزینهٔ ارسال و شرایط مرجوعی این نمونه را بر اساس شیوهٔ واقعی کسب‌وکارتان به‌روزرسانی کنید.',
    shipping1Title: 'بسته‌بندی امن', shipping1Text: 'جزئیات بسته‌بندی محصول را اینجا وارد کنید.',
    shipping2Title: 'زمان‌بندی شفاف', shipping2Text: 'زمان آماده‌سازی و ارسال را پیش از خرید بنویسید.',
    shipping3Title: 'پشتیبانی سفارش', shipping3Text: 'راه ارتباطیِ پشتیبانی را در تنظیمات فروشگاه درج کنید.',
    reviewsEyebrow: 'از زبان خریداران', reviewsTitle: 'خانه با انتخاب‌های شما کامل می‌شود.',
    reviewsSampleNote: 'نظرها و نام‌های زیر نمونه‌اند؛ فقط بازخورد واقعی و دارای اجازهٔ انتشار را جایگزین کنید.',
    reviewRating: '۵ از ۵ ستاره — نمونه', review1: '«رنگ‌ها در خانه همان‌قدر گرم و دلنشین‌اند که در عکس‌ها به نظر می‌رسیدند.»',
    reviewer1: 'مشتری نمونه', reviewProduct1: 'سفارش گلدان سفالی', review2: '«بسته‌بندی مرتب بود و توضیحات محصول قبل از خرید کمکم کرد انتخاب درستی داشته باشم.»',
    reviewer2: 'مشتری نمونه', reviewProduct2: 'سفارش گلیمچه', review3: '«یک تکهٔ دست‌ساز کوچک، حال‌وهوای میز و صبحانه‌های خانه‌مان را عوض کرد.»',
    reviewer3: 'مشتری نمونه', reviewProduct3: 'سفارش سینی برنجی',
    faqEyebrow: 'پرسش‌های پرتکرار', faqTitle: 'چند نکته پیش از خرید',
    faqIntro: 'پاسخ‌ها نمونه هستند؛ آن‌ها را با قوانین ارسال، پرداخت و بازگشت کالای فروشگاه خودتان تطبیق دهید.',
    faq1q: 'به شهرهای دیگر هم ارسال دارید؟', faq1a: 'روش ارسال، مناطق تحت پوشش و زمان تحویل را اینجا بر اساس سرویس واقعی خود بنویسید.',
    faq2q: 'اگر محصول با عکس تفاوتی داشت چه کنم؟', faq2a: 'برای محصولات دست‌ساز، تفاوت جزئی در رنگ و نقش ممکن است. حدود قابل‌قبول و مسیر پیگیری را با سیاست واقعی خود جایگزین کنید.',
    faq3q: 'شرایط تعویض یا مرجوعی چیست؟', faq3a: 'مدت‌زمان، وضعیت کالا، هزینهٔ بازگشت و استثناها باید مطابق سیاست واقعی فروشگاه و الزامات قانونی شما در این بخش درج شوند.',
    faq4q: 'سبد خرید و پرداخت آنلاین آماده‌اند؟', faq4a: 'سبد خرید در مرورگر کار می‌کند؛ برای ثبت سفارش واقعی باید endpoint امن سمت سرور و درگاه پرداخت مجاز خود را در تنظیمات متصل کنید.',
    newsletterEyebrow: 'نامه‌ای از چیدار', newsletterTitle: 'برای دیدنِ مجموعه‌های تازه',
    newsletterText: 'خبرهای تازه را فقط با رضایت مخاطب و از مسیر سامانهٔ قانونی ارسال کنید.',
    emailLabel: 'نشانی ایمیل', emailPlaceholder: 'ایمیل شما', newsletterSubmit: 'عضویت',
    newsletterNote: 'این فرم نمایشی است؛ برای ثبت واقعی ایمیل، سرویس خبرنامه را پیکربندی کنید.',
    footerShopAria: 'فروشگاه', footerShop: 'فروشگاه', footerHelpAria: 'راهنما', footerHelp: 'راهنمای خرید',
    termsLink: 'شرایط استفاده', privacyLink: 'حریم خصوصی', contactLink: 'تماس با ما', footerContact: 'ارتباط با چیدار',
    footerRegion: 'تهران • ارسال به سراسر ایران', instagramLink: 'اینستاگرام (پیوند نمونه)',
    footerAbout: 'چیدار، هویت نمونه‌ای برای فروشگاه دکور و دست‌سازه؛ نام، داستان و راه‌های تماس را با اطلاعات خودتان جایگزین کنید.',
    footerRights: '© ۱۴۰۵ چیدار — متن و اطلاعات نمونه', footerMade: 'با الهام از نقش و رنگ ایران',
    closeCartAria: 'بستن سبد خرید', cartTitle: 'سبد خرید', cartHelp: 'اقلام انتخاب‌شده را مرور کنید.', cartEmpty: 'سبد خریدتان هنوز خالی است.',
    cartEmptyText: 'از میان دست‌سازه‌ها چیزی برای خانه انتخاب کنید.', shippingThresholdStart: 'برای بررسیِ هزینهٔ ارسال، محصولی به سبد اضافه کنید.',
    shippingThresholdMore: '{amount} تومان تا ارسال رایگانِ نمونه باقی مانده است.', shippingThresholdDone: 'ارسال رایگانِ نمونه برای این سبد فعال است.',
    subtotal: 'جمع جزء', shippingFee: 'هزینهٔ ارسال نمونه', cartTotal: 'جمع کلِ برآوردی', checkout: 'ادامه برای ثبت سفارش',
    checkoutNote: 'نسخهٔ نمایشی درگاه پرداخت ندارد؛ مبلغ نهایی باید در سرور و درگاه شما محاسبه شود.',
    addedToCart: 'به سبد خرید اضافه شد.', removeItemAria: 'حذف {product} از سبد خرید', decreaseItem: 'کم‌کردن تعداد', increaseItem: 'زیادکردن تعداد',
    checkoutDemo: 'سبد خرید نمونه است؛ برای ثبت سفارش، endpoint امن فروشگاه را پیکربندی کنید.', checkoutError: 'اتصال سفارش کامل نشد؛ لطفاً تنظیمات سرور را بررسی کنید.',
    newsletterDemo: 'عضویت نمایشی است؛ تا زمانی که سامانهٔ خبرنامه وصل نشده، ایمیلی ارسال نمی‌شود.', newsletterError: 'عضویت انجام نشد؛ لطفاً دوباره تلاش کنید.',
    newsletterSuccess: 'درخواست عضویت دریافت شد.', formRequired: 'لطفاً ایمیل معتبر وارد کنید.',
    menuToggleClose: 'بستن منو', cartItemQty: '{quantity} عدد',
    docTitle: 'چیدار | خانه‌ای با ردّ دست — قالب فروشگاهی سکّان',
    docDescription: 'چیدار؛ پیش‌نمایش فروشگاه دکور و دست‌سازه‌های ایرانی، با چیدمان راست‌به‌چپ، سبد خرید نمونه و قیمت‌گذاری به تومان.'
  };

  const EN = {
    skipLink: 'Skip to main content', demoNote: 'Chidar template preview: products, prices, stock, shipping, reviews, contact details and terms are examples. Replace them with verified store information before publishing.',
    brandAria: 'Chidar — back to top', brandName: 'Chidar', brandCaption: 'A home with a handmade touch', navAria: 'Main navigation',
    navCollections: 'Collections', navShop: 'Shop', navStory: 'Our story', navShipping: 'Shipping & orders', navFaq: 'FAQs',
    searchLabel: 'Search products', searchPlaceholder: 'Search by product name', languageToggleAria: 'Switch language to Persian', languageShort: 'فا',
    themeToggleAria: 'Toggle light and dark theme', cartTriggerAria: 'Open shopping cart', menuToggleAria: 'Open menu', closeMenuAria: 'Close menu',
    heroKicker: 'Iranian homeware & handcrafted goods', heroTitleA: 'A home,', heroTitleB: 'with a handmade touch.',
    heroText: 'Considered pieces for everyday living: ceramics, textiles and small details for the home, inspired by the colors and patterns of Iran.',
    heroShop: 'Explore the collection', heroStory: 'Meet Chidar', heroImageAlt: 'Blue handmade ceramic vase and woven textile in a warm modern home',
    heroSticker: 'From workshop to home', heroCardTitle: 'Made to last', heroCardText: 'For everyday rituals', assuranceAria: 'Store details',
    assurance1: 'Thoughtfully made', assurance2: 'Shipping across Iran', trustAria: 'Order highlights',
    trust1Title: 'Shop with clarity', trust1Text: 'Clear details for every product', trust2Title: 'Nationwide delivery', trust2Text: 'Set your delivery methods and times',
    trust3Title: 'A thoughtful gift', trust3Text: 'Enable gift packaging in your store settings',
    collectionsEyebrow: 'For every corner of home', collectionsTitle: 'Start with one small detail.',
    collectionsText: 'Choose a category to filter the products instantly.', categoryFiltersAria: 'Filter products by category',
    filterAll: 'All products', filterAllSub: 'Browse the collection', filterCeramic: 'Ceramics', filterCeramicSub: 'Handmade forms',
    filterTextile: 'Textiles', filterTextileSub: 'Pattern, thread, color', filterLight: 'Lighting', filterLightSub: 'A warmer room',
    filterDecor: 'Serving & decor', filterDecorSub: 'Table and home details',
    catalogEyebrow: 'The Chidar edit', catalogTitle: 'Little pieces that make a home',
    catalogText: 'Products and prices are examples. Update the product data in main.js and the page copy for your own store.',
    showing: 'Showing', products: 'products', sortLabel: 'Sort by:', sortFeatured: 'Curated', sortLow: 'Price: low to high', sortHigh: 'Price: high to low',
    badgeHandmade: 'Handmade', badgeLimited: 'Small batch', badgeNew: 'New arrival', badgePopular: 'Popular',
    typeCeramic: 'Ceramics', typeTextile: 'Textiles', typeLight: 'Lighting', typeDecor: 'Home accessories',
    vaseAlt: 'Blue ceramic vase with a geometric motif', vaseName: 'Blue motif vase', vaseDesc: 'Deep blue glaze; every pattern has its own character.',
    kilimAlt: 'Handwoven mini kilim with geometric motifs', kilimName: 'Aftab mini kilim', kilimDesc: 'A warm weave for an entry, bedside or wall.',
    lampAlt: 'Table lamp with a ceramic base and fabric shade', lampName: 'Lina table lamp', lampDesc: 'A soft glow for a bedside or a quiet corner.',
    cushionAlt: 'Cream cushion with green embroidered pattern', cushionName: 'Green embroidered cushion', cushionDesc: 'Gentle stitching and earth tones for a sofa or bed.',
    trayAlt: 'Hand-etched oval brass tray with a ceramic tea cup', trayName: 'Etched brass tray', trayDesc: 'Fine detailing for serving and everyday rituals.',
    bowlAlt: 'Blue ceramic bowl with a cream rim', bowlName: 'Nil glazed bowl', bowlDesc: 'A simple shape for breakfast and afternoon tea.',
    currency: 'Toman', addToCart: 'Add to cart', noProducts: 'No products match that search. Try another phrase.',
    storyEyebrow: 'About this sample brand', storyTitle: 'A home’s character lives in its details.',
    storyText: 'Chidar pairs contemporary forms with familiar Iranian motifs. Replace this section with your real brand story, maker partnerships, production details and product origins.',
    storySeal: 'From earth to home', storyValue1: 'Local color and pattern', storyValue2: 'Careful making and finishing', storyValue3: 'Clear details before purchase', storyValue4: 'Made to be used, not just admired', storyCta: 'How to order',
    shippingEyebrow: 'Before you order', shippingTitle: 'A clear purchase is a better experience.',
    shippingText: 'Replace the sample delivery times, shipping fees and return policy with your store’s real terms.',
    shipping1Title: 'Protective packaging', shipping1Text: 'Add your real packaging details here.',
    shipping2Title: 'Clear timing', shipping2Text: 'Share preparation and delivery estimates before purchase.',
    shipping3Title: 'Order support', shipping3Text: 'Add a real customer-support contact to your store settings.',
    reviewsEyebrow: 'From customers', reviewsTitle: 'Your choices make a house a home.',
    reviewsSampleNote: 'Names and reviews below are examples. Use only genuine reviews with permission to publish.',
    reviewRating: 'Sample rating: 5 out of 5 stars', review1: '“The colors feel just as warm and inviting at home as they looked in the photos.”',
    reviewer1: 'Sample customer', reviewProduct1: 'Ceramic vase order', review2: '“The packaging was thoughtful, and the product details helped me choose with confidence.”',
    reviewer2: 'Sample customer', reviewProduct2: 'Mini kilim order', review3: '“One small handmade piece changed the feel of our table and everyday breakfasts.”',
    reviewer3: 'Sample customer', reviewProduct3: 'Brass tray order',
    faqEyebrow: 'Frequently asked questions', faqTitle: 'A few things to know before you buy',
    faqIntro: 'These answers are examples. Align them with your actual shipping, payment and return policies.',
    faq1q: 'Do you ship to other cities in Iran?', faq1a: 'Add your actual shipping methods, coverage areas and delivery estimates here.',
    faq2q: 'What if an item looks different from its photo?', faq2a: 'Handmade pieces may vary slightly in color or pattern. Replace this note with your real tolerance and resolution policy.',
    faq3q: 'What is your exchange or return policy?', faq3a: 'Add the eligible condition, time window, return costs and exceptions from your actual policy and applicable rules.',
    faq4q: 'Are checkout and online payments ready?', faq4a: 'The cart works in-browser. Connect your secure server endpoint and approved payment gateway to accept real orders.',
    newsletterEyebrow: 'A note from Chidar', newsletterTitle: 'Hear about new collections',
    newsletterText: 'Send updates only with customer consent and through a compliant email service.',
    emailLabel: 'Email address', emailPlaceholder: 'Your email address', newsletterSubmit: 'Subscribe',
    newsletterNote: 'Demo form only. Configure an email service before collecting real addresses.',
    footerShopAria: 'Shop navigation', footerShop: 'Shop', footerHelpAria: 'Help navigation', footerHelp: 'Customer care',
    termsLink: 'Terms of use', privacyLink: 'Privacy', contactLink: 'Contact', footerContact: 'Contact Chidar',
    footerRegion: 'Tehran • Shipping across Iran', instagramLink: 'Instagram (sample link)',
    footerAbout: 'Chidar is a sample identity for a homeware and craft shop. Replace the name, story and contact details with your own.',
    footerRights: '© 2026 Chidar — sample content', footerMade: 'Inspired by Iranian color and craft',
    closeCartAria: 'Close shopping cart', cartTitle: 'Your bag', cartHelp: 'Review the items you selected.', cartEmpty: 'Your bag is empty for now.',
    cartEmptyText: 'Choose a handmade piece for your home.', shippingThresholdStart: 'Add an item to see the sample delivery estimate.',
    shippingThresholdMore: '{amount} Toman away from sample free delivery.', shippingThresholdDone: 'Sample free delivery is available for this bag.',
    subtotal: 'Subtotal', shippingFee: 'Sample delivery fee', cartTotal: 'Estimated total', checkout: 'Continue to checkout',
    checkoutNote: 'This demo has no payment gateway. Your server and provider must calculate the final amount.',
    addedToCart: 'Added to your bag.', removeItemAria: 'Remove {product} from your bag', decreaseItem: 'Decrease quantity', increaseItem: 'Increase quantity',
    checkoutDemo: 'This is a demo cart. Configure your secure store endpoint to accept orders.', checkoutError: 'Checkout could not be completed. Please review your server settings.',
    newsletterDemo: 'This is a demo signup. No email is sent until you connect a mailing service.', newsletterError: 'Subscription failed. Please try again.',
    newsletterSuccess: 'Your subscription request was received.', formRequired: 'Please enter a valid email address.',
    menuToggleClose: 'Close menu', cartItemQty: '{quantity} items',
    docTitle: 'Chidar | A home with a handmade touch — Sokkan storefront template',
    docDescription: 'Chidar: an Iranian homeware storefront preview with RTL layout, a sample shopping cart and Toman pricing.'
  };

  const dictionaries = { fa: FA, en: EN };
  const products = $$('[data-product-card]').map((card, order) => ({
    id: card.dataset.id,
    category: card.dataset.category,
    price: Number(card.dataset.price),
    order,
    card,
    names: { fa: card.dataset.nameFa, en: card.dataset.nameEn },
    descriptions: { fa: card.dataset.descriptionFa, en: card.dataset.descriptionEn },
    image: $('img', card).getAttribute('src'),
    imageAltKey: $('img', card).dataset.i18nAlt
  }));
  const productById = new Map(products.map(product => [product.id, product]));
  const cartStorageKey = 'chidar-cart-v1';
  const config = window.CHIDAR_CONFIG || {};
  const moneyLocale = lang => lang === 'en' ? 'en-US' : 'fa-IR';
  const formatNumber = (value, lang) => new Intl.NumberFormat(moneyLocale(lang), { maximumFractionDigits: 0 }).format(value);
  const formatMoney = (value, lang) => `${formatNumber(value, lang)} ${lang === 'en' ? 'Toman' : 'تومان'}`;
  const readCart = () => {
    try {
      const raw = JSON.parse(storage.get(cartStorageKey) || '[]');
      if (!Array.isArray(raw)) return [];
      return raw.filter(item => item && productById.has(item.id) && Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 99);
    } catch (_) { return []; }
  };
  let lang = storage.get('chidar-lang') === 'en' ? 'en' : 'fa';
  let theme = storage.get('chidar-theme');
  if (theme !== 'light' && theme !== 'dark') theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  let cart = readCart();
  let currentFilter = 'all';
  let query = '';
  let drawerPreviouslyFocused = null;
  let toastTimer = null;
  let drawerTimer = null;

  function text(key, values = {}) {
    let value = dictionaries[lang][key] ?? dictionaries.fa[key] ?? key;
    Object.entries(values).forEach(([name, replacement]) => { value = value.replaceAll(`{${name}}`, String(replacement)); });
    return value;
  }

  function applyLanguage(nextLang, persist = true) {
    lang = nextLang === 'en' ? 'en' : 'fa';
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === 'en' ? 'ltr' : 'rtl';
    $$('[data-i18n]').forEach(element => {
      const value = dictionaries[lang][element.dataset.i18n];
      if (value !== undefined) element.textContent = value;
    });
    $$('[data-i18n-placeholder]').forEach(element => {
      const value = dictionaries[lang][element.dataset.i18nPlaceholder];
      if (value !== undefined) element.setAttribute('placeholder', value);
    });
    $$('[data-i18n-aria]').forEach(element => {
      const value = dictionaries[lang][element.dataset.i18nAria];
      if (value !== undefined) element.setAttribute('aria-label', value);
    });
    $$('[data-i18n-alt]').forEach(element => {
      const value = dictionaries[lang][element.dataset.i18nAlt];
      if (value !== undefined) element.setAttribute('alt', value);
    });
    document.title = text('docTitle');
    const description = $('meta[name="description"]');
    const ogDescription = $('meta[property="og:description"]');
    const ogTitle = $('meta[property="og:title"]');
    if (description) description.content = text('docDescription');
    if (ogDescription) ogDescription.content = text('docDescription');
    if (ogTitle) ogTitle.content = text('docTitle');
    renderPrices();
    renderCatalog();
    renderCart();
    if (persist) storage.set('chidar-lang', lang);
  }

  function applyTheme(nextTheme, persist = true) {
    theme = nextTheme === 'dark' ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    const themeColor = $('meta[name="theme-color"]');
    if (themeColor) themeColor.content = theme === 'dark' ? '#1b241e' : '#f6f1e7';
    if (persist) storage.set('chidar-theme', theme);
  }

  function renderPrices() {
    $$('[data-format-price]').forEach(element => {
      element.textContent = formatNumber(Number(element.dataset.formatPrice), lang);
    });
  }

  function normalize(value) {
    return String(value || '').normalize('NFKD').replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '').replace(/[يى]/g, 'ی').replace(/ك/g, 'ک').toLocaleLowerCase(lang).trim();
  }

  function renderCatalog() {
    const sort = $('#sortProducts')?.value || 'featured';
    const visibleProducts = products.filter(product => {
      const categoryMatch = currentFilter === 'all' || product.category === currentFilter;
      const searchText = normalize(`${product.names.fa} ${product.names.en} ${product.descriptions.fa} ${product.descriptions.en}`);
      return categoryMatch && (!query || searchText.includes(normalize(query)));
    });
    const sorted = [...visibleProducts].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price;
      if (sort === 'price-high') return b.price - a.price;
      return a.order - b.order;
    });
    const grid = $('#productGrid');
    const empty = $('#catalogEmpty');
    sorted.forEach(product => grid.insertBefore(product.card, empty));
    products.filter(product => !visibleProducts.includes(product)).forEach(product => { product.card.hidden = true; });
    sorted.forEach(product => { product.card.hidden = false; });
    empty.hidden = visibleProducts.length !== 0;
    $('#visibleCount').textContent = formatNumber(visibleProducts.length, lang);
    $$('[data-filter]').forEach(button => {
      const active = button.dataset.filter === currentFilter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function persistCart() {
    storage.set(cartStorageKey, JSON.stringify(cart));
  }

  function cartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + productById.get(item.id).price * item.quantity, 0);
    const threshold = Math.max(0, Number(config.freeShippingThreshold ?? 3500000));
    const sampleFee = Math.max(0, Number(config.shippingFee ?? 85000));
    const shipping = subtotal === 0 || (threshold > 0 && subtotal >= threshold) ? 0 : sampleFee;
    return { subtotal, shipping, total: subtotal + shipping, threshold, sampleFee };
  }

  function renderCart() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    $('#cartCount').textContent = formatNumber(count, lang);
    const lines = $('#cartLines');
    const empty = $('#cartEmpty');
    lines.replaceChildren();
    empty.hidden = cart.length > 0;
    if (!cart.length) lines.append(empty);

    cart.forEach(item => {
      const product = productById.get(item.id);
      if (!product) return;
      const name = product.names[lang];
      const article = document.createElement('article');
      article.className = 'cart-line';
      const image = document.createElement('img');
      image.src = product.image;
      image.alt = text(product.imageAltKey);
      image.width = 76;
      image.height = 76;
      image.loading = 'lazy';
      const details = document.createElement('div');
      const heading = document.createElement('h3');
      heading.className = 'cart-line-title';
      heading.textContent = name;
      const price = document.createElement('p');
      price.className = 'cart-line-price';
      price.textContent = formatMoney(product.price, lang);
      const quantity = document.createElement('div');
      quantity.className = 'quantity-control';
      const decrease = document.createElement('button');
      decrease.type = 'button'; decrease.dataset.cartAction = 'decrease'; decrease.dataset.id = item.id;
      decrease.setAttribute('aria-label', text('decreaseItem')); decrease.textContent = '−';
      const output = document.createElement('output');
      output.value = String(item.quantity); output.textContent = formatNumber(item.quantity, lang);
      const increase = document.createElement('button');
      increase.type = 'button'; increase.dataset.cartAction = 'increase'; increase.dataset.id = item.id;
      increase.setAttribute('aria-label', text('increaseItem')); increase.textContent = '+';
      quantity.append(decrease, output, increase);
      details.append(heading, price, quantity);
      const remove = document.createElement('button');
      remove.type = 'button'; remove.className = 'remove-item'; remove.dataset.cartAction = 'remove'; remove.dataset.id = item.id;
      remove.setAttribute('aria-label', text('removeItemAria', { product: name }));
      remove.innerHTML = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m-9 0 1 13h10l1-13M10 11v5m4-5v5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      article.append(image, details, remove);
      lines.append(article);
    });

    const { subtotal, shipping, total, threshold } = cartTotals();
    $('#cartSubtotal').textContent = formatMoney(subtotal, lang);
    $('#cartShipping').textContent = formatMoney(shipping, lang);
    $('#cartTotal').textContent = formatMoney(total, lang);
    const message = $('#shippingMessage');
    const meter = $('#shippingMeter');
    if (!subtotal) {
      message.textContent = text('shippingThresholdStart');
      meter.style.width = '0%';
    } else if (threshold > 0 && subtotal < threshold) {
      message.textContent = text('shippingThresholdMore', { amount: formatNumber(threshold - subtotal, lang) });
      meter.style.width = `${Math.min(100, subtotal / threshold * 100)}%`;
    } else {
      message.textContent = text('shippingThresholdDone');
      meter.style.width = '100%';
    }
  }

  function showToast(message, kind = 'info') {
    const toast = $('#toast');
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.dataset.kind = kind;
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add('is-visible'));
    toastTimer = window.setTimeout(() => {
      toast.classList.remove('is-visible');
      window.setTimeout(() => { toast.hidden = true; }, 300);
    }, 3200);
  }

  function addToCart(id) {
    if (!productById.has(id)) return;
    const item = cart.find(entry => entry.id === id);
    if (item) item.quantity = Math.min(99, item.quantity + 1);
    else cart.push({ id, quantity: 1 });
    persistCart(); renderCart();
    const product = productById.get(id);
    showToast(`${product.names[lang]} — ${text('addedToCart')}`, 'success');
  }

  function changeCartItem(id, action) {
    const item = cart.find(entry => entry.id === id);
    if (!item) return;
    if (action === 'remove') cart = cart.filter(entry => entry.id !== id);
    if (action === 'increase') item.quantity = Math.min(99, item.quantity + 1);
    if (action === 'decrease') {
      item.quantity -= 1;
      if (item.quantity <= 0) cart = cart.filter(entry => entry.id !== id);
    }
    persistCart(); renderCart();
  }

  function openCart() {
    const drawer = $('#cartDrawer');
    if (!drawer.hidden) return;
    drawerPreviouslyFocused = document.activeElement;
    clearTimeout(drawerTimer);
    drawer.hidden = false;
    $('#cartScrim').hidden = false;
    requestAnimationFrame(() => drawer.classList.add('is-open'));
    document.body.classList.add('cart-open');
    $('#cartClose').focus();
  }

  function closeCart(returnFocus = true) {
    const drawer = $('#cartDrawer');
    if (drawer.hidden) return;
    drawer.classList.remove('is-open');
    document.body.classList.remove('cart-open');
    drawerTimer = window.setTimeout(() => {
      drawer.hidden = true;
      $('#cartScrim').hidden = true;
    }, 300);
    if (returnFocus && drawerPreviouslyFocused?.isConnected) drawerPreviouslyFocused.focus();
  }

  function closeMenu(returnFocus = false) {
    const nav = $('#siteNav');
    const toggle = $('#menuToggle');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', text('menuToggleAria'));
    if (returnFocus) toggle.focus();
  }

  $('#languageToggle').addEventListener('click', () => applyLanguage(lang === 'fa' ? 'en' : 'fa'));
  $('#themeToggle').addEventListener('click', () => applyTheme(theme === 'light' ? 'dark' : 'light'));
  $('#menuToggle').addEventListener('click', () => {
    const toggle = $('#menuToggle');
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu();
    else {
      $('#siteNav').classList.add('is-open');
      document.body.classList.add('menu-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', text('menuToggleClose'));
      $('#siteNav a').focus();
    }
  });
  $('#siteNav').addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  $('#cartTrigger').addEventListener('click', openCart);
  $('#cartClose').addEventListener('click', () => closeCart());
  $('#cartScrim').addEventListener('click', () => closeCart());

  $('#searchForm').addEventListener('submit', event => event.preventDefault());
  $('#productSearch').addEventListener('input', event => { query = event.currentTarget.value; renderCatalog(); });
  $('#sortProducts').addEventListener('change', renderCatalog);
  $$('[data-filter]').forEach(button => button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    renderCatalog();
    $('#catalog').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  }));
  $('#productGrid').addEventListener('click', event => {
    const addButton = event.target.closest('[data-add-to-cart]');
    if (addButton) addToCart(addButton.dataset.addToCart);
  });
  $('#cartLines').addEventListener('click', event => {
    const button = event.target.closest('[data-cart-action]');
    if (button) changeCartItem(button.dataset.id, button.dataset.cartAction);
  });

  $$('.faq-question').forEach(button => button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const open = button.getAttribute('aria-expanded') === 'true';
    $$('.faq-item').forEach(other => {
      other.classList.remove('is-open');
      $('.faq-question', other).setAttribute('aria-expanded', 'false');
      $('.faq-answer', other).setAttribute('aria-hidden', 'true');
    });
    if (!open) {
      item.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
      $('#' + button.getAttribute('aria-controls')).setAttribute('aria-hidden', 'false');
    }
  }));

  $('#newsletterForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const endpoint = String(config.newsletterEndpoint || '').trim();
    if (!endpoint) { showToast(text('newsletterDemo'), 'info'); return; }
    const submit = $('button[type="submit"]', form);
    submit.disabled = true;
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: $('#newsletterEmail').value.trim() }) });
      if (!response.ok) throw new Error('Request failed');
      form.reset();
      showToast(text('newsletterSuccess'), 'success');
    } catch (_) {
      showToast(text('newsletterError'), 'error');
    } finally { submit.disabled = false; }
  });
  // Keep the static newsletter form inert when JavaScript is off; once this
  // handler is installed, the demo can explain that no endpoint is configured.
  const newsletterSubmit = $('button[type="submit"]', $('#newsletterForm'));
  if (newsletterSubmit) newsletterSubmit.disabled = false;

  $('#checkoutButton').addEventListener('click', async event => {
    if (!cart.length) { showToast(text('cartEmpty'), 'info'); return; }
    const endpoint = String(config.checkoutEndpoint || '').trim();
    if (!endpoint) { showToast(text('checkoutDemo'), 'info'); return; }
    const button = event.currentTarget;
    button.disabled = true;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart.map(({ id, quantity }) => ({ id, quantity })) })
      });
      if (!response.ok) throw new Error('Checkout request failed');
      const result = await response.json();
      if (typeof result?.redirectUrl !== 'string' || !result.redirectUrl.trim()) throw new Error('Missing checkout URL');
      const redirect = new URL(result.redirectUrl.trim(), window.location.href);
      const localHttp = window.location.protocol === 'http:' && redirect.protocol === 'http:' && redirect.origin === window.location.origin;
      if (redirect.protocol !== 'https:' && !localHttp) throw new Error('Invalid checkout URL');
      window.location.assign(redirect.href);
    } catch (_) {
      showToast(text('checkoutError'), 'error');
    } finally { button.disabled = false; }
  });

  document.addEventListener('keydown', event => {
    const drawer = $('#cartDrawer');
    if (event.key === 'Escape') {
      if (!drawer.hidden) closeCart();
      else if ($('#menuToggle').getAttribute('aria-expanded') === 'true') closeMenu(true);
    }
    if (!drawer.hidden && event.key === 'Tab') {
      const focusable = $$('button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), [tabindex="0"]', drawer);
      if (!focusable.length) { event.preventDefault(); drawer.focus(); return; }
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 1020) closeMenu(); }, { passive: true });
  window.addEventListener('storage', event => {
    if (event.key === cartStorageKey) { cart = readCart(); renderCart(); }
    if (event.key === 'chidar-theme' && (event.newValue === 'light' || event.newValue === 'dark')) applyTheme(event.newValue, false);
    if (event.key === 'chidar-lang' && (event.newValue === 'fa' || event.newValue === 'en')) applyLanguage(event.newValue, false);
  });

  applyTheme(theme, false);
  applyLanguage(lang, false);
  renderCart();
})();
