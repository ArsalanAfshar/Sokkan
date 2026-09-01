# سکّان | Sokkan Template Pack

**مجموعه قالب‌های HTML پریمیوم برای کسب‌وکارهای ایرانی**

<div align="center">

![Sokkan Template Pack](https://img.shields.io/badge/Sokkan-Template%20Pack-ffb443?style=for-the-badge)
![Version](https://img.shields.io/badge/Version-1.0.0-2dd4a0?style=for-the-badge)
![License](https://img.shields.io/badge/License-Commercial-ff6b4a?style=for-the-badge)

**RTL-First • Persian-Optimized • Commercial-Ready**

</div>

---

## 🎯 درباره مجموعه سکّان

**سکّان** یک مجموعه قالب HTML حرفه‌ای است که به طور اختصاصی برای بازار ایران طراحی شده است. هر قالب در این مجموعه با تمرکز بر:

- **زبان فارسی** به عنوان زبان اصلی
- **چیدمان RTL** (راست به چپ)
- **تایپوگرافی بهینه** برای متون فارسی
- **طراحی واکنش‌گرا** برای تمام دستگاه‌ها
- **حالت تاریک و روشن** با کنتراست حرفه‌ای
- **دسترسی‌پذیری** مطابق با استانداردهای WCAG

ساخته شده است.

---

## 📦 قالب‌های موجود

### 🎨 قالب میلاد (Milad)

**اولین قالب از مجموعه سکّان**

قالب میلاد یک لندینگ پیج پریمیوم برای استودیوهای دیجیتال، آژانس‌های طراحی و شرکت‌های فناوری است.

**ویژگی‌های کلیدی:**
- 🎭 هویت بصری ماتریکس × وینتیج (رترو-فیوچریستیک)
- 🖥️ کامپوننت دستگاه سه‌بعدی با تعامل ماوس
- 🌊 انیمیشن پس‌زمینه ماتریکس (Canvas)
- 🎨 افکت متنی سه‌بعدی/لایه‌ای
- 📱 واکنش‌گرایی کامل (موبایل، تبلت، دسکتاپ)
- 🌙 حالت تاریک با کنتراست WCAG AAA
- 🔤 دوزبانه (فارسی/انگلیسی) با تغییر RTL/LTR
- ⚡ عملکرد بهینه (بدون وابستگی خارجی)
- ♿ دسترسی‌پذیر (ARIA, Focus States, Reduced Motion)
- 🎯 آماده برای فروش در مارکت‌پلیس‌های ایرانی

[📖 مشاهده مستندات قالب میلاد](./Milad/README.md)

---

## 🚀 شروع سریع

### پیش‌نیازها

- مرورگر مدرن (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- یک سرور HTTP ساده (برای توسعه محلی)

### نصب

1. **کلون کردن ریپازیتوری:**
```bash
git clone https://github.com/ArsalanAfshar/Sokkan.git
cd Sokkan
```

2. **انتخاب قالب مورد نظر:**
```bash
cd Milad  # یا نام قالب دیگر
```

3. **اجرای سرور محلی:**
```bash
# با Python 3
python3 -m http.server 3000

# یا با Node.js
npx serve .

# یا با PHP
php -S localhost:3000
```

4. **باز کردن در مرورگر:**
```
http://localhost:3000
```

---

## 🎨 سفارشی‌سازی

### تغییر رنگ‌های برند

فایل `assets/css/base.css` را باز کنید و متغیرهای CSS را ویرایش کنید:

```css
:root {
  --accent: #ffb443;      /* رنگ اصلی برند */
  --accent-2: #2dd4a0;    /* رنگ ثانویه */
  --accent-3: #ff6b4a;    /* رنگ تأکیدی */
}
```

### تغییر محتوای صفحه

تمام متون در `index.html` با اتریبیوت `data-i18n` مشخص شده‌اند. می‌توانید مستقیماً آن‌ها را ویرایش کنید.

### ترجمه به زبان‌های دیگر

فایل `assets/js/main.js` شامل دیکشنری انگلیسی (`EN`) است. می‌توانید دیکشنری‌های جدید برای زبان‌های دیگر اضافه کنید.

### جایگزینی تصویر دستگاه سه‌بعدی

در `index.html`، بخش `device-screen` را پیدا کنید:

```html
<div class="screen-content">
  <img src="assets/img/your-screenshot.png" 
       alt="توضیح تصویر" 
       class="screen-image">
</div>
```

---

## 📁 ساختار پروژه

```
Sokkan/
├── Milad/                    # قالب اول: میلاد
│   ├── index.html           # صفحه اصلی
│   ├── README.md            # مستندات قالب
│   └── assets/
│       ├── css/
│       │   ├── base.css         # توکن‌های طراحی، ریست، ابزارها
│       │   ├── components.css   # ناوبری، دکمه‌ها، فرم‌ها
│       │   └── sections.css     # بخش‌های صفحه
│       ├── js/
│       │   └── main.js          # منطق صفحه، i18n، انیمیشن‌ها
│       ├── fonts/               # فونت‌های محلی (WOFF2)
│       └── img/
│           └── screen-preview.svg  # placeholder دستگاه سه‌بعدی
├── README.md                 # این فایل
└── LICENSE                   # مجوز استفاده
```

---

## 🎯 ویژگی‌های فنی

### عملکرد

- **بدون وابستگی خارجی** - فقط HTML، CSS و JavaScript خالص
- **فونت‌های محلی** - بدون درخواست به CDN خارجی
- **انیمیشن‌های بهینه** - استفاده از `transform` و `opacity`
- **requestAnimationFrame** - برای انیمیشن‌های 60fps
- **Lazy loading** - بارگذاری تنبل تصاویر
- **کد تمیز** - بدون فریم‌ورک، قابل نگهداری

### دسترسی‌پذیری

- **WCAG 2.1 Level AAA** - کنتراست در حالت تاریک
- **ناوبری کیبورد** - تمام عناصر قابل فوکوس
- **صفحه‌خوان** - برچسب‌های ARIA مناسب
- **Reduced Motion** - احترام به ترجیح کاربر
- **نشانگرهای فوکوس** - قابل مشاهده روی تمام عناصر

### واکنش‌گرایی

- **Mobile-First** - طراحی از موبایل شروع شده
- **Breakpoints استاندارد:**
  - موبایل: < 768px
  - تبلت: 768px - 1023px
  - لپ‌تاپ: 1024px - 1279px
  - دسکتاپ: ≥ 1280px

### پشتیبانی مرورگر

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

**ویژگی‌های CSS استفاده شده:**
- CSS Custom Properties
- CSS Grid & Flexbox
- `clamp()` برای تایپوگرافی سیال
- `color-mix()` برای رنگ‌های پویا
- `backdrop-filter` (با fallback)
- `aspect-ratio`
- Logical Properties (`inset-inline-*`)

---

## 🌐 دوزبانگی

هر قالب به صورت پیش‌فرض از دو زبان پشتیبانی می‌کند:

1. **فارسی** (پیش‌فرض) - RTL
2. **انگلیسی** - LTR

### افزودن زبان جدید

در `assets/js/main.js`، یک دیکشنری جدید اضافه کنید:

```javascript
const FR = {
  navHome: 'Accueil',
  navServices: 'Services',
  // ... سایر ترجمه‌ها
};
```

سپس در تابع `applyLang`، شرط جدید را اضافه کنید.

---

## 🎨 سیستم طراحی

### پالت رنگ

**حالت تاریک:**
```css
--bg: #0a0a0d;           /* پس‌زمینه */
--text: #f0ebdc;         /* متن اصلی */
--accent: #ffb443;       /* کهربایی */
--accent-2: #2dd4a0;     /* سبز ماتریکسی */
```

**حالت روشن:**
```css
--bg: #f2ecdc;           /* پس‌زمینه */
--text: #211e16;         /* متن اصلی */
--accent: #bf6d00;       /* کهربایی تیره */
--accent-2: #0a7d59;     /* سبز تیره */
```

### تایپوگرافی

- **فونت اصلی:** Vazirmatn (فارسی/لاتین)
- **فونت سریف:** Noto Naskh Arabic (عربی)
- **فونت مونو:** JetBrains Mono (کد)

### فاصله‌گذاری

- واحد پایه: 4px
- مقیاس: 4, 8, 12, 16, 24, 32, 48, 64, 96

---

## 📊 معیارهای عملکرد

- **First Contentful Paint:** < 1.0s
- **Largest Contentful Paint:** < 1.5s
- **Total Blocking Time:** < 50ms
- **Cumulative Layout Shift:** < 0.05
- **Time to Interactive:** < 2.0s

---

## 🐛 گزارش مشکل

اگر با مشکلی مواجه شدید یا پیشنهادی دارید:

1. به بخش [Issues](https://github.com/ArsalanAfshar/Sokkan/issues) بروید
2. مشکل خود را با جزئیات شرح دهید
3. اسکرین‌شات یا ویدیو اضافه کنید (در صورت امکان)
4. مرورگر و نسخه آن را ذکر کنید

---

## 🤝 مشارکت

از مشارکت شما استقبال می‌کنیم! برای مشارکت:

1. Fork کنید
2. Branch جدید بسازید (`git checkout -b feature/amazing-feature`)
3. Commit کنید (`git commit -m 'Add amazing feature'`)
4. Push کنید (`git push origin feature/amazing-feature`)
5. Pull Request باز کنید

---

## 📄 مجوز

این پروژه تحت مجوز **Commercial License** منتشر شده است.

### ✅ مجاز:
- استفاده در پروژه‌های شخصی
- استفاده در پروژه‌های تجاری
- تغییر و سفارشی‌سازی
- فروش به عنوان بخشی از محصول بزرگتر

### ❌ غیرمجاز:
- فروش مجدد قالب به صورت standalone
- حذف اعتبارنامه‌های سازنده
- استفاده در پروژه‌های غیرقانونی

برای جزئیات کامل، فایل `LICENSE` را مطالعه کنید.

---

## 🎓 منابع آموزشی

- **[CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)** - متغیرهای CSS
- **[CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)** - راهنمای کامل Grid
- **[RTL Design](https://rtlcss.com/learn/)** - بهترین شیوه‌های طراحی RTL
- **[Web Accessibility](https://www.w3.org/WAI/)** - استانداردهای دسترسی‌پذیری

---

## 💡 نکات مهم

### بهینه‌سازی برای فروش

اگر قصد فروش این قالب را در مارکت‌پلیس‌های ایرانی دارید:

1. **اسکرین‌شات‌های حرفه‌ای** تهیه کنید
2. **دموی زنده** راه‌اندازی کنید
3. **مستندات کامل** بنویسید
4. **پشتیبانی** ارائه دهید
5. **به‌روزرسانی منظم** داشته باشید

### سئو

این قالب از نظر سئو بهینه شده است:

- ✅ Semantic HTML
- ✅ Meta tags کامل
- ✅ Open Graph tags
- ✅ JSON-LD structured data
- ✅ Fast loading speed
- ✅ Mobile-friendly

### امنیت

- ✅ بدون وابستگی‌های آسیب‌پذیر
- ✅ بدون inline scripts
- ✅ CSP-friendly
- ✅ XSS-safe

---

## 🗺️ نقشه راه

### قالب‌های آینده

- [ ] **قالب آریا** - لندینگ پیج SaaS
- [ ] **قالب پارس** - فروشگاه اینترنتی
- [ ] **قالب زرین** - پورتفولیو شخصی
- [ ] **قالب ماهان** - وبلاگ حرفه‌ای
- [ ] **قالب کیش** - داشبورد مدیریتی

### ویژگی‌های برنامه‌ریزی شده

- [ ] افزونه WordPress
- [ ] نسخه React/Next.js
- [ ] نسخه Vue/Nuxt
- [ ] تم‌ساز بصری (Visual Theme Builder)
- [ ] پشتیبانی از زبان‌های بیشتر (عربی، ترکی، کردی)

---

## 📞 تماس و پشتیبانی

- **وب‌سایت:** [sokkan.studio](https://sokkan.studio)
- **ایمیل:** [salam@sokkan.studio](mailto:salam@sokkan.studio)
- **تلگرام:** [@sokkan_support](https://t.me/sokkan_support)
- **اینستاگرام:** [@sokkan.templates](https://instagram.com/sokkan.templates)

---

## 🙏 تقدیر و تشکر

### فونت‌ها

- **Vazirmatn** توسط صابر راستیکردار (OFL)
- **Noto Naskh Arabic** توسط Google (OFL)
- **JetBrains Mono** توسط JetBrains (OFL)

### الهام‌بخش‌ها

- فیلم Matrix (1999) - زیبایی‌شناسی بصری
- طراحی چاپی وینتیج - حس نوستالژیک
- رابط‌های رترو-فیوچریستیک - آینده‌نگری
- استانداردهای مدرن وب - کیفیت و عملکرد

---

## 📈 آمار پروژه

![GitHub stars](https://img.shields.io/github/stars/ArsalanAfshar/Sokkan?style=social)
![GitHub forks](https://img.shields.io/github/forks/ArsalanAfshar/Sokkan?style=social)
![GitHub issues](https://img.shields.io/github/issues/ArsalanAfshar/Sokkan)
![GitHub pull requests](https://img.shields.io/github/issues-pr/ArsalanAfshar/Sokkan)

---

## 🎉 سپاسگزاری

از انتخاب **مجموعه قالب‌های سکّان** متشکریم!

امیدواریم این قالب‌ها پایه‌ای محکم برای پروژه‌های شما باشند. اگر سوالی دارید یا نیاز به کمک دارید، لطفاً با ما تماس بگیرید.

**موفق باشید! 🚀**

---

<div align="center">

**ساخته شده با ❤️ و ☕ در تهران**

© 2026 Sokkan Template Pack - تمامی حقوق محفوظ است

[⬆ بازگشت به بالا](#سکان--sokkan-template-pack)

</div>
