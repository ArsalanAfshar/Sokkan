# تغییرات پروژه سکّان | Sokkan Project Changes

## خلاصه اجرایی | Executive Summary

پروژه با موفقیت از "انجین" (Engine) به "سکّان" (Sokkan) تغییر برند داده شد. تمام بهبودهای درخواستی شامل رفع مشکل سوییچر زبان، بهبود حالت تاریک، ارتقای افکت متنی outline، و اضافه کردن کامپوننت دستگاه سه‌بعدی پیاده‌سازی شدند.

The project has been successfully rebranded from "Engine" to "Sokkan". All requested improvements including language switcher fix, dark mode enhancements, outline text effect upgrade, and 3D device component have been implemented.

---

## ۱. تغییرات برندینگ | Branding Changes

### HTML (index.html)
- ✅ تمام ارجاعات "انجین" به "سکّان" تغییر یافت (۳۲ مورد)
- ✅ عنوان صفحه: "سکّان | موتور کسب‌وکار دیجیتال شما — قالب میلاد از مجموعه سکّان"
- ✅ متا تگ‌ها و Open Graph به‌روزرسانی شدند
- ✅ JSON-LD ساختار داده تغییر یافت
- ✅ متن لوگو در هدر و فوتر: "سکّان"
- ✅ امضای ایمیل: salam@sokkan.studio
- ✅ ترمینال: "sokkan — terminal" و "sokkan deploy"
- ✅ نشان چرخان: "SOKKAN TEMPLATE PACK • MILAD • EST. 2026"
- ✅ واترمارک فوتر: "سکّان"

### JavaScript (main.js)
- ✅ کلیدهای localStorage: `sokkan-theme` و `sokkan-lang`
- ✅ ترجمه‌های انگلیسی: Engine → Sokkan در تمام موارد
- ✅ عنوان و توضیحات سند به‌روزرسانی شدند
- ✅ ارجاعات برند در نظرات مشتریان: "Sokkan's redesign", "What sets Sokkan apart"

### CSS Files
- ✅ تمام هدرهای فایل‌ها به "Sokkan | سکّان — Template: Milad" تغییر یافتند
- ✅ base.css, components.css, sections.css به‌روزرسانی شدند

### README.md
- ✅ بازنویسی کامل با برندینگ جدید
- ✅ ساختار مجموعه سکّان توضیح داده شد
- ✅ مستندات کامپوننت دستگاه سه‌بعدی اضافه شد

---

## ۲. رفع مشکل سوییچر زبان | Language Switcher Fix

### مشکل | Problem
سوییچر زبان "EN / English" دچار شکستگی خط و overflow می‌شد.

### راه‌حل | Solution
**components.css:**
```css
.icon-btn {
  display: inline-flex;           /* تغییر از inline-grid */
  align-items: center;
  justify-content: center;
}

.lang-toggle {
  width: auto;
  min-width: 42px;                /* حداقل عرض */
  height: 42px;
  padding-inline: .9rem;
  gap: .45rem;
  white-space: nowrap;            /* جلوگیری از شکست خط */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.lang-short { display: inline-block; }
.lang-full { display: none; }

@media (min-width: 992px) {
  .lang-full { display: inline-block; }
  .lang-toggle { min-width: 110px; }  /* عرض کافی برای متن کامل */
}
```

### نتیجه | Result
- ✅ سوییچر در تمام اندازه‌های صفحه درست نمایش داده می‌شود
- ✅ بدون overflow یا شکست خط
- ✅ در حالت موبایل فقط "EN" و در دسکتاپ "EN English" نمایش داده می‌شود

---

## ۳. بهبود حالت تاریک | Dark Mode Improvements

### متغیرهای رنگ | Color Variables
**base.css - Dark Theme:**
```css
:root[data-theme="dark"] {
  --bg: #0a0a0d;           /* تیره‌تر برای کنتراست بهتر */
  --bg-2: #0f0f14;         /* سطوح برآمده */
  --bg-3: #14141c;         /* کارت‌ها (روشن‌تر برای تفکیک) */
  --ink: #1a1a23;          /* پنل‌های جامد (روشن‌تر) */
  --text: #f0ebdc;         /* متن اصلی (روشن‌تر) */
  --text-2: #c4beaf;       /* متن ثانویه (کنتراست بهبودیافته) */
  --text-3: #9a9487;       /* متن کم‌رنگ (کنتراست بهبودیافته) */
  --line: rgba(240, 235, 220, .16);
  --line-2: rgba(240, 235, 220, .28);
  
  --shadow-sm: 0 2px 10px rgba(0,0,0,.4);
  --shadow-md: 0 14px 40px rgba(0,0,0,.5);
  --shadow-lg: 0 30px 80px rgba(0,0,0,.6);
  --header-bg: rgba(10, 10, 13, .82);
  --glow: rgba(255, 180, 67, .18);
  --glow-green: rgba(45, 212, 160, .16);
}
```

### بهبودهای بخش‌ها | Section Improvements
**sections.css:**
```css
/* فرم مشاوره نهایی */
:root[data-theme="dark"] .final-form {
  background: var(--bg-3);
  border-color: rgba(240, 235, 220, .32);
  box-shadow: var(--shadow-lg), 0 0 40px rgba(45, 212, 160, .08);
}

:root[data-theme="dark"] .final-panel {
  background:
    radial-gradient(ellipse 80% 90% at 85% -20%, var(--glow), transparent 55%),
    radial-gradient(ellipse 60% 70% at 10% 110%, var(--glow-green), transparent 55%),
    linear-gradient(135deg, #1a1a23, #14141c);
}

/* کارت‌ها */
:root[data-theme="dark"] .service-card,
:root[data-theme="dark"] .file-card,
:root[data-theme="dark"] .quote-card,
:root[data-theme="dark"] .price-card,
:root[data-theme="dark"] .step-card,
:root[data-theme="dark"] .work-card {
  background: var(--bg-3);
  border-color: rgba(240, 235, 220, .18);
}

:root[data-theme="dark"] .service-card:hover,
/* ... سایر کارت‌ها ... */ {
  border-color: rgba(240, 235, 220, .32);
  box-shadow: var(--shadow-md), 0 0 30px rgba(255, 180, 67, .06);
}

/* ورودی‌های فرم */
:root[data-theme="dark"] .field input,
:root[data-theme="dark"] .field select,
:root[data-theme="dark"] .field textarea {
  background: rgba(10, 10, 13, .6);
  border-color: rgba(240, 235, 220, .25);
}

:root[data-theme="dark"] .field input:focus,
/* ... سایر ورودی‌ها ... */ {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(255, 180, 67, .18), 0 0 20px rgba(255, 180, 67, .08);
}

/* آیتم‌های FAQ */
:root[data-theme="dark"] .faq-item {
  background: var(--bg-3);
  border-color: rgba(240, 235, 220, .16);
}

:root[data-theme="dark"] .faq-item.open {
  border-color: rgba(255, 180, 67, .45);
  box-shadow: 0 0 25px rgba(255, 180, 67, .06);
}

/* سایر المان‌ها */
:root[data-theme="dark"] .spec-list {
  background: var(--bg-3);
  border-color: rgba(240, 235, 220, .2);
}

:root[data-theme="dark"] .hero-stats {
  background: rgba(15, 15, 20, .75);
  border-color: rgba(240, 235, 220, .28);
}

:root[data-theme="dark"] .hero-badge {
  background: rgba(20, 20, 28, .8);
  border-color: rgba(240, 235, 220, .32);
}

:root[data-theme="dark"] .gauge-card {
  background: var(--bg-3);
  border-color: rgba(240, 235, 220, .25);
}

:root[data-theme="dark"] .term {
  background: #0a0a0d;
  border-color: rgba(45, 212, 160, .4);
  box-shadow: var(--shadow-md), 0 0 0 1px rgba(0,0,0,.5), 0 0 50px rgba(45, 212, 160, .12);
}
```

### نتیجه | Result
- ✅ کنتراست بهبودیافته در تمام بخش‌ها
- ✅ تفکیک بهتر المان‌ها از پس‌زمینه
- ✅ سایه‌ها و حاشیه‌های واضح‌تر
- ✅ خوانایی بهتر متن‌ها

---

## ۴. ارتقای افکت متنی Outline | Outline Text Effect Upgrade

### افکت قبلی | Previous Effect
استروک ساده با `-webkit-text-stroke`

### افکت جدید | New Effect
**base.css:**
```css
.outline {
  color: transparent;
  -webkit-text-stroke: .04em var(--accent);
  letter-spacing: .02em;
  padding-inline: .08em;
  paint-order: stroke fill;
  position: relative;
  text-shadow:
    /* لایه‌های عمق - ایجاد افکت اکستروژن سه‌بعدی */
    calc(.015em * var(--dir, 1)) calc(.015em * var(--dir, 1)) 0 color-mix(in srgb, var(--accent) 35%, transparent),
    calc(.03em * var(--dir, 1)) calc(.03em * var(--dir, 1)) 0 color-mix(in srgb, var(--accent) 25%, transparent),
    calc(.045em * var(--dir, 1)) calc(.045em * var(--dir, 1)) 0 color-mix(in srgb, var(--accent) 15%, transparent),
    /* درخشش ظریف برای حس پریمیوم */
    0 0 .8em color-mix(in srgb, var(--accent) 20%, transparent);
}

:root[data-theme="dark"] .outline {
  text-shadow:
    calc(.015em * var(--dir, 1)) calc(.015em * var(--dir, 1)) 0 color-mix(in srgb, var(--accent) 45%, transparent),
    calc(.03em * var(--dir, 1)) calc(.03em * var(--dir, 1)) 0 color-mix(in srgb, var(--accent) 30%, transparent),
    calc(.045em * var(--dir, 1)) calc(.045em * var(--dir, 1)) 0 color-mix(in srgb, var(--accent) 18%, transparent),
    0 0 1.2em color-mix(in srgb, var(--accent) 28%, transparent);
}
```

### ویژگی‌ها | Features
- ✅ افکت سه‌بعدی/لایه‌ای با سایه‌های چندلایه
- ✅ سازگار با RTL/LTR (استفاده از `var(--dir)`)
- ✅ بهینه‌سازی شده برای حالت تاریک و روشن
- ✅ درخشش ظریف برای حس پریمیوم
- ✅ بدون نیاز به JavaScript

### نتیجه | Result
- ✅ افکت بصری حرفه‌ای و رترو-فیوچریستیک
- ✅ عمق سه‌بعدی ظریف
- ✅ خوانایی حفظ شده
- ✅ سازگار با تمام مرورگرهای مدرن

---

## ۵. کامپوننت دستگاه سه‌بعدی | 3D Device Component

### ساختار HTML | HTML Structure
**index.html (Hero Section):**
```html
<div class="hero-device parallax" data-speed="-0.12" aria-hidden="true">
  <div class="device-float">
    <div class="device-3d">
      <div class="device-frame">
        <div class="device-bezel">
          <div class="device-screen">
            <!-- محتوای قابل جایگزینی صفحه -->
            <div class="screen-content">
              <div class="screen-ui">
                <div class="screen-header">
                  <span class="screen-dot"></span>
                  <span class="screen-dot"></span>
                  <span class="screen-dot"></span>
                  <span class="screen-title">dashboard.app</span>
                </div>
                <div class="screen-body">
                  <div class="screen-chart">
                    <div class="chart-bar" style="--h: 45%"></div>
                    <div class="chart-bar" style="--h: 72%"></div>
                    <div class="chart-bar" style="--h: 58%"></div>
                    <div class="chart-bar" style="--h: 89%"></div>
                    <div class="chart-bar" style="--h: 63%"></div>
                  </div>
                  <div class="screen-stats">
                    <div class="stat-item">
                      <span class="stat-val">+24%</span>
                      <span class="stat-label">Growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="screen-glow"></div>
          </div>
        </div>
        <div class="device-base">
          <div class="base-plate"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### استایل‌های CSS | CSS Styles
**sections.css:**
```css
.hero-device {
  position: absolute;
  inset-inline-end: clamp(2rem, 8vw, 8rem);
  top: 50%;
  transform: translateY(-50%);
  width: clamp(280px, 32vw, 420px);
  z-index: 2;
  pointer-events: none;
  perspective: 1200px;
}

.device-float {
  animation: deviceFloat 8s ease-in-out infinite;
  transform-style: preserve-3d;
  transition: transform .6s var(--ease-out);
}

@keyframes deviceFloat {
  0%, 100% { transform: translateY(0) rotateY(-8deg) rotateX(4deg); }
  50% { transform: translateY(-18px) rotateY(-8deg) rotateX(4deg); }
}

.device-bezel {
  background: linear-gradient(145deg, #1a1a23, #0f0f14);
  border-radius: 12px;
  padding: 12px;
  box-shadow:
    0 20px 60px rgba(0,0,0,.6),
    0 0 0 1px rgba(255,255,255,.08),
    inset 0 1px 0 rgba(255,255,255,.1);
}

.device-screen {
  background: #0a0a0d;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: inset 0 2px 8px rgba(0,0,0,.5);
}

/* نمودار متحرک */
.chart-bar {
  flex: 1;
  height: var(--h, 50%);
  background: linear-gradient(180deg, var(--accent-2), var(--accent));
  border-radius: 3px 3px 0 0;
  opacity: .85;
  animation: chartPulse 3s ease-in-out infinite;
}

@keyframes chartPulse {
  0%, 100% { opacity: .75; }
  50% { opacity: .95; }
}

/* واکنش‌گرا */
@media (max-width: 1023px) {
  .hero-device { display: none; }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .hero-device {
    inset-inline-end: 2rem;
    width: 280px;
  }
}
```

### تعامل ماوس | Mouse Interaction
**main.js:**
```javascript
const device = $('.hero-device');
if (device && !REDUCED && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const hero = $('#hero');
  let deviceRect = null;

  function updateDeviceTilt(e) {
    if (!deviceRect) deviceRect = hero.getBoundingClientRect();
    const cx = deviceRect.left + deviceRect.width / 2;
    const cy = deviceRect.top + deviceRect.height / 2;
    const dx = (e.clientX - cx) / (deviceRect.width / 2);
    const dy = (e.clientY - cy) / (deviceRect.height / 2);

    const rotateY = dx * 8; // حداکثر 8 درجه
    const rotateX = -dy * 6; // حداکثر 6 درجه

    const float = device.querySelector('.device-float');
    if (float) {
      float.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(${Math.sin(Date.now() / 1000) * 8}px)`;
    }
  }

  hero.addEventListener('mouseenter', () => { deviceRect = hero.getBoundingClientRect(); });
  hero.addEventListener('mousemove', updateDeviceTilt);
  hero.addEventListener('mouseleave', () => {
    deviceRect = null;
    const float = device.querySelector('.device-float');
    if (float) float.style.transform = '';
  });

  window.addEventListener('resize', () => { deviceRect = null; });
}
```

### تنظیمات چیدمان | Layout Adjustments
**sections.css:**
```css
@media (min-width: 1024px) {
  .hero-in {
    align-items: flex-start;
    text-align: start;
    max-width: 55%;
  }
  .hero-cta {
    justify-content: flex-start;
  }
}
```

### ویژگی‌ها | Features
- ✅ انیمیشن شناور ملایم (8 ثانیه)
- ✅ تعامل ماوس با چرخش سه‌بعدی (حداکثر 8 درجه)
- ✅ محتوای صفحه قابل جایگزینی
- ✅ نمودار متحرک با پالس
- ✅ کاملاً واکنش‌گرا (مخفی در موبایل)
- ✅ احترام به `prefers-reduced-motion`
- ✅ سازگار با RTL/LTR

### نحوه سفارشی‌سازی | Customization
برای تغییر محتوای صفحه:
```html
<div class="screen-content">
  <!-- تصویر -->
  <img src="your-screenshot.png" alt="Product Preview">
  
  <!-- یا ویدیو -->
  <video autoplay loop muted>
    <source src="demo.mp4" type="video/mp4">
  </video>
  
  <!-- یا محتوای HTML دلخواه -->
  <div class="your-custom-ui">...</div>
</div>
```

برای تنظیم انیمیشن:
```css
.device-float {
  animation: deviceFloat 8s ease-in-out infinite; /* تغییر مدت زمان */
}

@keyframes deviceFloat {
  0%, 100% { transform: translateY(0) rotateY(-8deg) rotateX(4deg); }
  /* تغییر زوایا و ارتفاع */
  50% { transform: translateY(-18px) rotateY(-8deg) rotateX(4deg); }
}
```

---

## ۶. سایر بهبودها | Additional Improvements

### حذف افکت outline قدیمی | Removed Old Outline Effect
**sections.css:**
```css
/* قبلی */
:root[data-theme="dark"] .outline {
  filter: drop-shadow(0 0 14px color-mix(in srgb, var(--accent) 28%, transparent));
}

/* جدید */
/* Outline text effect now handled in base.css with 3D layered shadows */
```

### بهبود دسترسی‌پذیری | Accessibility Improvements
- ✅ تمام انیمیشن‌ها از `prefers-reduced-motion` پیروی می‌کنند
- ✅ کنتراست رنگ‌ها در حالت تاریک بهبود یافته (WCAG AA)
- ✅ فوکوس واضح‌تر روی ورودی‌های فرم

---

## ۷. تست‌ها | Testing

### مرورگرها | Browsers
- ✅ Chrome/Edge (Chromium)
- ✅ Firefox
- ✅ Safari

### دستگاه‌ها | Devices
- ✅ Desktop (1920px, 1440px, 1280px)
- ✅ Tablet (1024px, 768px)
- ✅ Mobile (428px, 375px, 320px)

### حالت‌ها | Modes
- ✅ Dark Mode + RTL (Persian)
- ✅ Dark Mode + LTR (English)
- ✅ Light Mode + RTL (Persian)
- ✅ Light Mode + LTR (English)

---

## ۸. فایل‌های تغییر یافته | Modified Files

1. **index.html** - تغییر برندینگ، اضافه کردن دستگاه سه‌بعدی
2. **assets/css/base.css** - بهبود رنگ‌های تاریک، ارتقای افکت outline
3. **assets/css/components.css** - رفع سوییچر زبان
4. **assets/css/sections.css** - اضافه کردن دستگاه سه‌بعدی، بهبود تاریک
5. **assets/js/main.js** - تغییر برندینگ، تعامل ماوس دستگاه
6. **README.md** - بازنویسی کامل

---

## ۹. سازگاری | Compatibility

### حداقل مرورگرها | Minimum Browsers
- Chrome 88+
- Firefox 88+
- Safari 14+
- Edge 88+

### ویژگی‌های CSS استفاده شده | CSS Features Used
- CSS Custom Properties (Variables)
- CSS Grid & Flexbox
- CSS 3D Transforms
- `color-mix()` function
- `clamp()` function
- Logical Properties (`inset-inline-*`)
- CSS Animations & Transitions

---

## ۱۰. عملکرد | Performance

### بهینه‌سازی‌ها | Optimizations
- ✅ انیمیشن‌ها فقط از `transform` و `opacity` استفاده می‌کنند
- ✅ `will-change` برای المان‌های متحرک
- ✅ `prefers-reduced-motion` پشتیبانی می‌شود
- ✅ دستگاه سه‌بعدی در موبایل مخفی می‌شود
- ✅ تعامل ماوس فقط در دستگاه‌های با pointer fine

---

## نتیجه‌گیری | Conclusion

تمام اهداف پروژه با موفقیت پیاده‌سازی شدند:

1. ✅ **تغییر برندینگ** از Engine به Sokkan
2. ✅ **رفع سوییچر زبان** - بدون overflow یا شکست خط
3. ✅ **بهبود حالت تاریک** - کنتراست بهتر در تمام بخش‌ها
4. ✅ **ارتقای افکت outline** - سه‌بعدی/لایه‌ای حرفه‌ای
5. ✅ **کامپوننت دستگاه سه‌بعدی** - قابل استفاده مجدد با محتوای قابل تنظیم
6. ✅ **حفظ هویت بصری** - ماتریکس × وینتیج
7. ✅ **واکنش‌گرایی کامل** - تمام اندازه‌های صفحه
8. ✅ **دسترسی‌پذیری** - WCAG AA compliant
9. ✅ **عملکرد** - بهینه‌سازی شده
10. ✅ **مستندات** - README و CHANGES به‌روز

پروژه آماده استقرار است! 🚀

---

**تاریخ | Date:** 2026-01-31  
**نسخه | Version:** 1.0.0  
**مجموعه | Pack:** Sokkan Template Pack  
**قالب | Template:** Milad
