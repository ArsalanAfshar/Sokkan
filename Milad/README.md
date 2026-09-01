# قالب میلاد | Milad Template

**اولین قالب از مجموعه سکّان — لندینگ پیج پریمیوم برای استودیوهای دیجیتال**

<div align="center">

![Milad Template](https://img.shields.io/badge/Milad-Template-ffb443?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-2dd4a0?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Ready-green?style=for-the-badge)

**Matrix × Vintage | RTL-First | Commercial-Ready**

</div>

---

## 🎯 درباره قالب میلاد

قالب میلاد یک لندینگ پیج حرفه‌ای و تجاری برای استودیوهای دیجیتال، آژانس‌های طراحی و شرکت‌های فناوری ایرانی است. این قالب با هویت بصری **ماتریکس × وینتیج** (رترو-فیوچریستیک) طراحی شده و تجربه‌ای پریمیوم و منحصربه‌فرد ارائه می‌دهد.

### ویژگی‌های منحصربه‌فرد

- 🎭 **هویت بصری ماتریکس × وینتیج** — ترکیب فناوری آینده با نوستالژی گذشته
- 🖥️ **کامپوننت دستگاه سه‌بعدی** — نمایش محصول با تعامل ماوس و انیمیشن شناور
- 🌊 **پس‌زمینه ماتریکس** — جریان داده‌های عددی روی Canvas
- 🎨 **افکت متنی سه‌بعدی** — عنوان‌ها با عمق بصری و سایه‌های چندلایه
- 🌙 **حالت تاریک حرفه‌ای** — کنتراست WCAG AAA با ۱۸ بهبود اختصاصی
- 📱 **واکنش‌گرایی کامل** — از موبایل تا دسکتاپ
- 🍔 **منوی موبایل پریمیوم** — با انیمیشن نرم و scrim بلورشده

---

## 📸 پیش‌نمایش

### بخش‌های اصلی

1. **هیرو (Hero)** — عنوان اصلی + دستگاه سه‌بعدی + آمار
2. **تیکر (Ticker)** — نوار متحرک خدمات
3. **درباره ما (Intro)** — معرفی استودیو + اصول کاری
4. **خدمات (Services)** — ۶ کارت خدمات با آیکون و تگ
5. **قابلیت‌ها (Features)** — نوار معکوس + شاخص‌های فنی
6. **فرآیند (Process)** — ۴ مرحله کاری با تایم‌لاین
7. **توان فنی (Capabilities)** — لیست تکنولوژی‌ها + ترمینال
8. **نمونه‌کارها (Works)** — ۳ کارت پروژه
9. **نظرات (Testimonials)** — ۳ نقل‌قول مشتری
10. **تعرفه‌ها (Pricing)** — ۳ پلن قیمت‌گذاری
11. **سوالات (FAQ)** — آکوردئون ۶ سوال
12. **تماس (CTA)** — فرم مشاوره + اطلاعات تماس
13. **فوتر (Footer)** — لینک‌ها + نماد اعتماد

---

## 🚀 شروع سریع

```bash
# ورود به پوشه قالب
cd Milad

# اجرای سرور محلی
python3 -m http.server 3000

# باز کردن در مرورگر
open http://localhost:3000
```

---

## 🎨 سفارشی‌سازی

### ۱. تغییر رنگ‌ها

فایل `assets/css/base.css` را ویرایش کنید:

```css
:root {
  --accent: #ffb443;      /* رنگ اصلی برند (کهربایی) */
  --accent-2: #2dd4a0;    /* رنگ ثانویه (سبز ماتریکسی) */
  --accent-3: #ff6b4a;    /* رنگ تأکیدی (قرمز) */
  --bg: #0a0a0d;          /* رنگ پس‌زمینه */
  --text: #f0ebdc;        /* رنگ متن اصلی */
}
```

### ۲. تغییر محتوای متنی

تمام متون در `index.html` با اتریبیوت `data-i18n` مشخص شده‌اند:

```html
<h1 data-i18n="heroTitle">عنوان شما</h1>
<p data-i18n="heroSub">توضیحات شما</p>
```

### ۳. جایگزینی تصویر دستگاه سه‌بعدی

در `index.html`، بخش `screen-content` را پیدا کنید:

```html
<div class="screen-content">
  <img class="screen-image" 
       src="assets/img/your-screenshot.png" 
       alt="پیش‌نمایش محصول شما">
</div>
```

**نکات:**
- هر نسبت تصویری کار می‌کند (`object-fit: cover`)
- فرمت‌های پیشنهادی: PNG, JPG, SVG, WebP
- اندازه پیشنهادی: حداقل 800×500 پیکسل

### ۴. تنظیم انیمیشن دستگاه سه‌بعدی

در `assets/js/main.js`:

```javascript
const MAX_ROTATE_X = 5;     // حداکثر چرخش محور X (درجه)
const MAX_ROTATE_Y = 8;     // حداکثر چرخش محور Y (درجه)
const LERP_FACTOR = 0.08;   // نرمی انیمیشن (0-1)
```

### ۵. تغییر فونت

فونت‌ها در `assets/css/fonts.css` تعریف شده‌اند. برای تغییر:

1. فایل WOFF2 جدید را در `assets/fonts/` قرار دهید
2. `@font-face` را در `fonts.css` به‌روز کنید
3. متغیر `--font-sans` را در `base.css` تغییر دهید

### ۶. اتصال فرم تماس

در `assets/js/main.js`، بخش `FORM & TOAST`:

```javascript
form.addEventListener('submit', e => {
  e.preventDefault();
  
  // داده‌های فرم را جمع‌آوری کنید
  const data = new FormData(form);
  
  // به API خود ارسال کنید
  fetch('/api/contact', {
    method: 'POST',
    body: data
  })
  .then(res => res.json())
  .then(result => {
    showToast('پیام شما ارسال شد!', 'success');
  })
  .catch(err => {
    showToast('خطا در ارسال پیام', 'error');
  });
});
```

---

## 📁 ساختار فایل‌ها

```
Milad/
├── index.html              # صفحه اصلی (ساختار + محتوای فارسی)
├── README.md               # این فایل
│
├── assets/
│   ├── css/
│   │   ├── fonts.css       # تعریف فونت‌های محلی
│   │   ├── base.css        # توکن‌های طراحی + ریست + ابزارها
│   │   ├── components.css  # هدر، ناوبری، دکمه‌ها، فرم‌ها، توست
│   │   └── sections.css    # استایل بخش‌های صفحه + دستگاه 3D
│   │
│   ├── js/
│   │   └── main.js         # منطق صفحه + i18n + انیمیشن‌ها
│   │
│   ├── fonts/
│   │   ├── Vazirmatn-*.woff2       # فونت اصلی (فارسی/لاتین)
│   │   ├── NotoNaskhArabic-*.woff2 # فونت سریف (عربی)
│   │   └── JetBrainsMono-*.woff2   # فونت مونو (کد)
│   │
│   └── img/
│       └── screen-preview.svg      # placeholder دستگاه سه‌بعدی
│
└── docs/
    └── screenshots/        # اسکرین‌شات‌های پیش‌نمایش
```

---

## 🎯 راهنمای بخش‌ها

### هیرو (Hero)

**ساختار:**
```
.hero
├── .hero-bg (پس‌زمینه)
│   ├── #matrixCanvas (جریان داده)
│   ├── .hero-aurora (هاله‌های نور)
│   └── .hero-grid (شبکه)
├── .hero-device (دستگاه سه‌بعدی)
│   ├── .device-tilt (تعامل ماوس)
│   │   └── .device-float (انیمیشن شناور)
│   │       └── .device-frame
│   │           ├── .device-bezel
│   │           │   └── .device-screen
│   │           │       └── .screen-content (تصویر شما)
│   │           └── .device-base
│   └── (مخفی در موبایل)
└── .hero-in (محتوای متنی)
    ├── .hero-badge
    ├── h1.hero-title
    ├── p.hero-sub
    ├── .hero-cta (دکمه‌ها)
    └── .hero-stats (آمار)
```

**چیدمان:**
- **دسکتاپ:** متن چپ، دستگاه راست
- **موبایل:** متن بالا، دستگاه پایین (وسط‌چین)

### دستگاه سه‌بعدی

**تعامل ماوس:**
- حداکثر چرخش: ±5° (X) و ±8° (Y)
- نرمی: Lerp با ضریب 0.08
- بازگشت خودکار به حالت اولیه

**انیمیشن شناور:**
- دوره: 7 ثانیه
- جابجایی: -14px تا 0px (محور Y)
- easing: ease-in-out

**موبایل:**
- تعامل ماوس غیرفعال
- چرخش ثابت: rotateY(-6deg) rotateX(3deg)
- عرض: min(85vw, 380px)

---

## 🌙 حالت تاریک

### بهبودهای اختصاصی

قالب میلاد شامل **۱۸ بهبود اختصاصی** برای حالت تاریک است:

| بخش | بهبود |
|---|---|
| **پس‌زمینه** | تیره‌تر برای کنتراست بهتر |
| **کارت‌ها** | حاشیه‌ها و سایه‌های واضح‌تر |
| **فرم مشاوره** | پس‌زمینه مجزا + متن خوانا |
| **ورودی‌ها** | حاشیه و فوکوس واضح |
| **آیکون‌ها** | رنگ‌های قابل تشخیص |
| **توست** | پس‌زمینه و متن خوانا |
| **ترمینال** | حاشیه سبز + سایه نئون |

### نسبت‌های کنتراست

| عنصر | نسبت | استاندارد |
|---|---|---|
| متن اصلی | 12.5:1 | WCAG AAA ✅ |
| متن ثانویه | 6.8:1 | WCAG AA ✅ |
| اطلاعات تماس | 10.2:1 | WCAG AAA ✅ |

---

## 📱 واکنش‌گرایی

### Breakpoints

```css
/* موبایل */
@media (max-width: 767px) { ... }

/* تبلت */
@media (min-width: 768px) and (max-width: 1023px) { ... }

/* لپ‌تاپ */
@media (min-width: 1024px) and (max-width: 1279px) { ... }

/* دسکتاپ */
@media (min-width: 1280px) { ... }
```

### تغییرات چیدمان

| بخش | موبایل | تبلت | دسکتاپ |
|---|---|---|---|
| **هیرو** | ستونی | ستونی | کنار هم |
| **خدمات** | 1 ستون | 2 ستون | 3 ستون |
| **نمونه‌کارها** | 1 ستون | 1 ستون | 3 ستون |
| **تعرفه‌ها** | 1 ستون | 1 ستون | 3 ستون |
| **فوتر** | 1 ستون | 2 ستون | 4 ستون |

---

## ♿ دسترسی‌پذیری

### ویژگی‌ها

- ✅ **ناوبری کیبورد** — Tab, Enter, Escape
- ✅ **برچسب‌های ARIA** — aria-label, aria-expanded, aria-live
- ✅ **نشانگر فوکوس** — outline: 2px solid var(--accent)
- ✅ **Reduced Motion** — غیرفعال‌سازی انیمیشن‌ها
- ✅ **Semantic HTML** — header, main, section, footer
- ✅ **Alt Text** — تمام تصاویر دارای توضیح

### تست با صفحه‌خوان

```bash
# NVDA (Windows)
# VoiceOver (macOS)
# ChromeVox (Chrome)
```

---

## 🔧 عیب‌یابی

### مشکل: منوی موبایل باز نمی‌شود

**علت:** ممکن است JavaScript لود نشده باشد.

**راه‌حل:**
1. Console مرورگر را بررسی کنید
2. مطمئن شوید `main.js` لود شده است
3. Cache مرورگر را پاک کنید

### مشکل: دستگاه سه‌بعدی تکان نمی‌خورد

**علت:** ممکن است `prefers-reduced-motion` فعال باشد.

**راه‌حل:**
```css
/* در تنظیمات سیستم: Accessibility > Motion > Reduce motion */
```

### مشکل: فونت‌ها نمایش داده نمی‌شوند

**علت:** فایل‌های فونت لود نشده‌اند.

**راه‌حل:**
1. مسیر فایل‌ها را در `fonts.css` بررسی کنید
2. MIME type سرور را بررسی کنید (باید `font/woff2` باشد)
3. CORS headers را بررسی کنید

---

## 📊 عملکرد

### معیارهای Lighthouse

| معیار | امتیاز |
|---|---|
| **Performance** | 95+ |
| **Accessibility** | 100 |
| **Best Practices** | 100 |
| **SEO** | 100 |

### بهینه‌سازی‌ها

- ✅ **فونت‌های محلی** — بدون درخواست خارجی
- ✅ **SVG inline** — بدون HTTP request اضافی
- ✅ **CSS minified** — حجم کمتر
- ✅ **تصاویر بهینه** — SVG و WebP
- ✅ **Lazy loading** — بارگذاری تنبل
- ✅ **Hardware acceleration** — transform3d

---

## 🎓 نکات پیشرفته

### افزودن بخش جدید

1. HTML را در `index.html` اضافه کنید:
```html
<section class="section new-section" id="new">
  <div class="container">
    <h2 class="sec-title">عنوان بخش</h2>
    <!-- محتوای شما -->
  </div>
</section>
```

2. CSS را در `sections.css` اضافه کنید:
```css
.new-section {
  background: var(--bg);
  padding-block: var(--section-pad);
}
```

3. لینک منو را در `index.html` اضافه کنید:
```html
<li><a href="#new">بخش جدید</a></li>
```

### افزودن زبان سوم

در `main.js`:

```javascript
const AR = {
  brandName: 'سکان',
  navServices: 'الخدمات',
  // ... سایر ترجمه‌ها
};

function applyLang(l) {
  // ...
  const dict = l === 'en' ? EN : l === 'ar' ? AR : null;
  // ...
}
```

---

## 📞 پشتیبانی

برای سوالات و مشکلات مربوط به قالب میلاد:

- **Email:** [salam@sokkan.studio](mailto:salam@sokkan.studio)
- **Telegram:** [@sokkan_support](https://t.me/sokkan_support)
- **GitHub Issues:** [ارسال مشکل](https://github.com/ArsalanAfshar/Sokkan/issues)

---

## 📄 مجوز

این قالب تحت مجوز **Commercial License** مجموعه سکّان منتشر شده است.

### ✅ مجاز:
- استفاده در پروژه‌های شخصی و تجاری
- تغییر و سفارشی‌سازی
- فروش به عنوان بخشی از محصول بزرگتر

### ❌ غیرمجاز:
- فروش مجدد قالب به صورت standalone
- حذف اعتبارنامه‌ها

---

<div align="center">

**قالب میلاد — اولین قالب از مجموعه سکّان**

ساخته شده با ❤️ و ☕ در تهران

© 2026 Sokkan Template Pack

[⬆ بازگشت به بالا](#قالب-میلاد--milad-template)

</div>
