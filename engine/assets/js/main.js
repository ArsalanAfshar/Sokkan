/* ============================================================
   Sokkan | سکّان — main.js
   Template: Milad (میلاد)
   Part of the Sokkan Template Pack

   Vanilla ES6+. Modules:
   1. i18n (Persian RTL / English LTR)  2. Theme (dark/light)
   3. Preloader  4. Matrix canvas  5. Ticker  6. Scroll reveal
   7. Counters  8. Header / nav / scrollspy  9. FAQ accordion
   10. Terminal  11. Contact form  12. To-top & toast
   13. 3D Device interaction
   ============================================================ */
(function () {
  'use strict';

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- i18n ---------------- */
  const EN = {
    loaderTxt: 'Igniting the engine…',
    brandName: 'Sokkan',
    navServices: 'Services', navFeatures: 'Features', navProcess: 'Process',
    navWorks: 'Work', navPricing: 'Pricing', navFaq: 'FAQ',
    navCta: 'Free consultation', navFootNote: 'Sat–Thu, 9–18 (IRST)',
    heroBadge: 'Digital services studio — Tehran, since 2013',
    heroYear: '2026',
    heroL1: 'The', heroL2: 'engine', heroL2b: 'of your digital business',
    heroSub: 'From website and app design to branding, SEO and campaigns — the Sokkan team designs, builds and grows your entire digital journey.',
    heroCta1: 'Start a project', heroCta2: 'See our work',
    statLabel1: 'Delivered projects', statLabel2: 'experience',
    statLabel3: 'Client satisfaction', statLabel4: 'on the team',
    statSuffix2: ' yrs', statSuffix4: ' specialists',
    heroScroll: 'Scroll down',
    tickerItems: ['AI solutions', 'Web development', 'Mobile apps', 'Digital marketing', 'SaaS products', 'Brand identity', 'Automation', 'Growth consulting'],
    introEyebrow: 'About Sokkan',
    introTitle1: 'We came from the past', introTitle2: 'to build the future.',
    introP1: 'Engine is a digital services studio where engineering precision meets the spirit of old craftsmanship. We see every project as a motor: every part in its place, running quietly, built to last for years.',
    introP2: 'Since 2013 we have been building for Iranian businesses — from early startups to large organizations. Websites, apps, brands and campaigns: we speak plainly, deliver precisely, and stay by your side long after launch.',
    signName: 'Sokkan Studio', signRole: 'Tehran — since 2013',
    fileNo1: 'Principle 01', fileTitle1: 'Simplicity is the peak of complexity',
    fileDesc1: 'Simple design means work done right; we solve the complexity behind the scenes so the user only sees simplicity.',
    fileNo2: 'Principle 02', fileTitle2: 'Quality is not negotiable',
    fileDesc2: 'We are flexible about timelines, never about quality; every deliverable passes several review rounds before release.',
    fileNo3: 'Principle 03', fileTitle3: 'Every project, a fresh engine',
    fileDesc3: 'We use no templates; we design from scratch for every business so the result is truly its own.',
    trustLabel: 'Brands whose engines we started',
    servicesEyebrow: 'Our services',
    servicesTitle: 'Six services, one destination: digital growth',
    servicesSub: 'Every service feeds the next — from idea and design to development, marketing and support, all under one roof.',
    sv1Title: 'Website design & development', sv1Desc: 'Corporate sites, online stores and campaign landing pages built for speed and conversion; a real example: the Zarrin Web store recorded 32% more sales after its redesign.',
    sv1Tag1: 'UX', sv1Tag2: 'Front-end', sv1Tag3: 'Performance',
    sv2Title: 'Mobile app development', sv2Desc: 'Android and iOS apps from a single codebase; from a quick MVP to a full product with payment gateways, push notifications and an admin panel — like the Kishcell booking app.',
    sv2Tag1: 'Android & iOS', sv2Tag2: 'Fast MVP', sv2Tag3: 'Payments',
    sv3Title: 'Digital marketing & SEO', sv3Desc: 'Ad campaigns, technical SEO and data-driven analytics; for Mahan Digital we grew the target audience by 120% in a single year.',
    sv3Tag1: 'Technical SEO', sv3Tag2: 'Campaigns', sv3Tag3: 'Analytics',
    sv4Title: 'Visual identity & branding', sv4Desc: 'From name and logo to brand book and tone of voice; an identity that stays in the audience’s mind — like the Mahan Digital rebrand its customers are now proud of.',
    sv4Tag1: 'Logo design', sv4Tag2: 'Brand book', sv4Tag3: 'Tone & message',
    sv5Title: 'Digital product & SaaS', sv5Desc: 'From idea to launch: validation, product design and MVP development on a scale-ready architecture; a real example: the Arya Fintech platform with thousands of daily users.',
    sv5Tag1: 'Product design', sv5Tag2: 'MVP', sv5Tag3: 'Scalability',
    sv6Title: 'AI & automation',
    sv6Desc: 'Intelligent support assistants, Telegram bots and unified management dashboards; hand the repetitive work to the system and keep your team focused on growth.',
    sv6Tag1: 'Bots & API', sv6Tag2: 'Dashboard', sv6Tag3: 'Integration',
    cardLink: 'Start a conversation',
    featuresEyebrow: 'Why Sokkan?',
    featuresTitle: 'A standard you can feel in every part',
    featuresSub: 'We care about details the user feels — even when they don’t see them: from speed and security to support.',
    feat1Title: 'Unmatched speed', feat1Desc: 'Sub-second loading with full Core Web Vitals compliance; speed means more customers.',
    feat2Title: 'Truly responsive', feat2Desc: 'Mobile-first, truly responsive builds; a precise, comfortable experience on every screen, from phones to large monitors.',
    feat3Title: 'Layered security', feat3Desc: 'Secure infrastructure, SSL certificates, automated backups and protection against common web attacks.',
    feat4Title: 'Clean, standard code', feat4Desc: 'Documented, dependency-light code; a project the next team can extend with ease.',
    feat5Title: 'Real support', feat5Desc: 'Seven-day availability under a written SLA; you are never alone after launch — even on weekends.',
    feat6Title: 'Ready to grow', feat6Desc: 'Scalable architecture and complete documentation; whenever you grow, the foundation is ready.',
    gaugeHead: 'TECH REPORT — 2026',
    gauge1Label: 'Load speed', gauge2Label: 'SEO score', gauge3Label: 'Security score', gauge4Label: 'Accessibility',
    gaugeNote: 'Average across projects delivered in the past year',
    processEyebrow: 'How we work',
    processTitle: 'From idea to a running engine',
    processSub: 'A transparent four-step path; you always know which station your project is at — and what comes next.',
    step1Title: 'Talk & discover', step1Desc: 'A free meeting to hear your business story, understand the exact need and define measurable goals. Output: a roadmap and a transparent estimate of cost and time.',
    step1Meta: 'Timeline: 3–5 days',
    step2Title: 'Design & prototype', step2Desc: 'Wireframes, interface design and an interactive prototype for your approval; you see the final picture before a single line of code — and your feedback is applied.',
    step2Meta: 'Timeline: 1–2 weeks',
    step3Title: 'Build & test', step3Desc: 'Development with modern standards, testing on real devices and staged delivery; you receive a weekly progress report and a working build.',
    step3Meta: 'Timeline: 2–4 weeks',
    step4Title: 'Launch & grow', step4Desc: 'Server deployment, training your team, active support and continuous improvement based on real data; the engine starts — and keeps running.',
    step4Meta: 'Support: 2 months to 1 year',
    capEyebrow: 'Capabilities',
    capTitle: 'Modern tools, old craftsmanship',
    capSub: 'Technology is a means for us, not an end; we build every project with the right tool — and this toolbox is always up to date.',
    spec1: 'HTML/CSS/JS, React, Vue — fast, scalable interfaces with high Core Web Vitals scores',
    spec2: 'Node.js, Python, PostgreSQL — reliable infrastructure with an SLA contract and automated backups',
    spec3: 'Flutter & React Native — one codebase, two platforms, published to Iranian and global stores',
    spec4: 'Figma, design systems, interactive prototyping and usability testing',
    spec5: 'GA4, Search Console, custom dashboards and decision-ready monthly reports',
    spec6: 'Intelligent assistants, support chatbots and content automation with state-of-the-art language models',
    capCaption: '// real output from a project deployment',
    termLines: [
      '⣿ analyzing project …………… OK',
      '⣿ bundling assets ……………… OK',
      '⣿ deploying to server ………… OK',
      '✓ sokkan started — 0.8s'
    ],
    worksEyebrow: 'Selected work',
    worksTitle: 'Engines that got running',
    worksSub: 'Three short stories of projects that moved forward with the Sokkan team.',
    work1Cat: 'SaaS product', work1Year: '2025',
    work1Title: 'Arya Fintech', work1Desc: 'A unified financial services platform with online payments; we took product design, web app development and payment infrastructure from zero to launch.',
    work1Tag1: 'Product design', work1Tag2: 'Web app', work1Tag3: 'SEO',
    work1Result: '+45% signup conversion',
    work2Cat: 'E-commerce', work2Year: '2025',
    work2Title: 'Zarrin Web', work2Desc: 'A home-appliance online store focused on speed and mobile shopping; full UI redesign and migration to cloud infrastructure.',
    work2Tag1: 'UX design', work2Tag2: 'Performance', work2Tag3: 'Payments',
    work2Result: '2× load speed, +32% sales',
    work3Cat: 'Branding & marketing', work3Year: '2024',
    work3Title: 'Mahan Digital', work3Desc: 'Visual identity re-creation, a brand campaign and content strategy across social networks — from logo to content calendar.',
    work3Tag1: 'Visual identity', work3Tag2: 'Campaign', work3Tag3: 'Content',
    work3Result: '+120% target audience growth',
    testiEyebrow: 'Testimonials',
    testiTitle: 'What clients say',
    q1: 'They took our platform from a raw idea to a product that processes thousands of financial transactions daily. The weekly reports and their transparency were truly exemplary.',
    q1Name: 'Sara Mohammadi', q1Role: 'Product Manager, Arya Fintech',
    q2: 'Our store’s speed was always painful; after Engine’s redesign, speed doubled and monthly sales grew 32%. The post-launch support is outstanding — they even respond on weekends.',
    q2Name: 'Amir Rezaei', q2Role: 'Founder, Zarrin Web',
    q3: 'What sets Sokkan apart is their point of view; they don’t just “build a website”, they solve your business problem. The result is a brand our customers are proud of.',
    q3Name: 'Negar Karimi', q3Role: 'Marketing Director, Mahan Digital',
    pricingEyebrow: 'Pricing',
    pricingTitle: 'A package for every engine',
    pricingSub: 'Transparent, no hidden costs; if none of the packages fits, we assemble a custom one for you.',
    plan1Name: 'Start', plan1For: 'For startups and new projects',
    priceFrom: 'From', priceUnit1: 'million Toman / project',
    plan1f1: 'Single-page or light e-commerce site', plan1f2: 'Custom, responsive design',
    plan1f3: 'Basic SEO & analytics', plan1f4: '2 months free support',
    plan1f5: 'Training & documentation handover',
    planCta: 'Start with Start',
    plan2Flag: 'Engine’s pick',
    plan2Name: 'Motion', plan2For: 'For growing businesses',
    priceUnit2: 'million Toman / project',
    plan2f1: 'Full website or app MVP', plan2f2: 'Everything in Start',
    plan2f3: 'Technical SEO & content', plan2f4: '6 months free support',
    plan2f5: 'Monthly reporting sessions',
    planCta2: 'Start with Motion',
    plan3Name: 'Enterprise', plan3For: 'For organizations and large products',
    plan3Value: 'Custom',
    plan3f1: 'Dedicated team & project manager', plan3f2: 'Organizational automation & integration',
    plan3f3: 'SLA contract', plan3f4: 'Annual support & continuous development',
    plan3f5: 'Dedicated security & infrastructure',
    planCta3: 'Private conversation',
    pricingNote: '* Prices are for projects inside Iran and are adjusted to your exact needs.',
    faqEyebrow: 'FAQ', faqTitle: 'Ask us anything',
    faqSub: 'If your answer isn’t here, talk to us directly.',
    faqCtaTitle: 'Still have a question?', faqCtaDesc: 'We are available Sat–Thu, 9–18.',
    faqCtaBtn: 'Contact Sokkan',
    faq1q: 'How long does a project take?',
    faq1a: 'It depends on the scope: a landing page takes about 2 weeks, a full website 4–6 weeks, and an app MVP around 2 months. You receive a precise phased timeline at the first meeting — and we stick to it.',
    faq2q: 'Can the project be delivered in phases?',
    faq2a: 'Yes; many of our projects run in phases. You launch the first version quickly, then we develop the next phases based on real user feedback.',
    faq3q: 'What support do we get after delivery?',
    faq3a: 'Every package includes a free support period, after which you can have a monthly or annual support contract — covering bug fixes, security updates and development consulting.',
    faq4q: 'Is the design custom or template-based?',
    faq4a: 'Entirely custom. We don’t fit you into a template; we design from scratch for your brand. The result is always unique and matched to your identity and audience.',
    faq5q: 'Do you also handle domain and hosting?',
    faq5a: 'Yes; domain registration, server setup and full deployment are on us. If you already have infrastructure, we implement on that too.',
    faq6q: 'How do contract and payment work?',
    faq6a: 'With a formal, transparent contract; payment is usually split into two or three installments aligned with delivery milestones. All commitments, timelines and deliverables are written in the contract.',
    finalEyebrow: 'The next move is yours',
    finalTitle1: 'Start your', finalTitle2: 'engine.',
    finalSub: 'Fill the form; within 24 business hours we will call you to schedule a free consultation. No commitment, no cost.',
    finalAddr: 'Tehran, Valiasr St., Mahtab Alley, No. 12',
    formTitle: 'Request a free consultation',
    fNameLabel: 'Full name *', fPhoneLabel: 'Phone number *',
    fServiceLabel: 'Which service do you need?',
    fOpt1: 'Website design & development', fOpt2: 'Mobile app',
    fOpt3: 'Branding & visual identity', fOpt4: 'Digital marketing & SEO',
    fOpt5: 'Digital product / SaaS', fOpt6: 'Other / not sure',
    fMsgLabel: 'Tell us a bit about the project',
    formSubmit: 'Send request',
    formNote: '* Demo — this form is not connected to any service; the code is ready to wire to yours.',
    formSuccessTitle: 'Your request is in!',
    formSuccessDesc: 'We’ll call you soon to schedule your free consultation.',
    toastSuccess: '✓ Request received — we’ll be in touch within 24 hours.',
    toastError: 'Please fill in your name and phone number.',
    footerDesc: 'A digital services studio; web, app, brand and marketing for Iranian businesses — since 2013.',
    fCol1Title: 'Quick links',
    fLinkAbout: 'About us', fLinkServices: 'Services', fLinkWorks: 'Work',
    fLinkPricing: 'Pricing', fLinkFaq: 'FAQ',
    fCol2Title: 'Services',
    fLinkS1: 'Web design', fLinkS2: 'Mobile apps', fLinkS3: 'Branding',
    fLinkS4: 'SEO & marketing', fLinkS5: 'Automation',
    fCol3Title: 'Contact',
    fAddr: 'Tehran, Valiasr St.',
    trustEnamad: 'E-namad trust seal',
    trustPayments: 'Payment gateways',
    slotHintEnamad: 'E-namad badge — 96×116',
    slotHintPay: 'Gateway logo — 78×48',
    trustNote: '<strong>Optional area.</strong> This section is ready for the E-namad trust seal and payment gateway logos; just drop an image inside each frame — no structural changes needed.',
    fHours: 'Sat — Thu, 9–18',
    footerRights: '© 2026 Sokkan Studio — All rights reserved.',
    legalPrivacy: 'Privacy', legalTerms: 'Terms',
    footerMade: 'Made with ♥ and tea in Tehran',
    langShort: 'فا', langFull: 'فارسی',
    docTitle: 'Sokkan | The engine of your digital business — Milad Template',
    docDesc: 'Sokkan, premium Iranian template pack; Milad template for digital studios, web design, apps, branding and digital marketing. The engine of your business growth.'
  };

  const EN_ARIA = {
    navLabel: 'Main navigation',
    trustEnamad: 'E-namad trust seal placeholder',
    langToggleLabel: 'تغییر زبان به فارسی',
    themeToggleLabel: 'Toggle dark/light mode',
    stat1: '128', stat2: '12', stat3: '98', stat4: '9'
  };

  let lang = store.get('sokkan-lang') || 'fa';

  // Capture original Persian strings once (innerHTML keeps inline tags like <strong>)
  $$('[data-i18n]').forEach(el => {
    if (el.dataset.fa === undefined) el.dataset.fa = el.innerHTML.trim();
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    if (el.dataset.faPh === undefined) el.dataset.faPh = el.getAttribute('placeholder') || '';
  });
  $$('[data-i18n-aria]').forEach(el => {
    if (el.dataset.faAria === undefined) el.dataset.faAria = el.getAttribute('aria-label') || '';
  });

  const faNum = s => String(s).replace(/[0-9]/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
  const enNum = s => String(s).replace(/[۰-۹]/g, d => '0123456789'['۰۱۲۳۴۵۶۷۸۹'.indexOf(d)]);

  function applyLang(l) {
    lang = l;
    const isEn = l === 'en';
    const root = document.documentElement;
    root.lang = isEn ? 'en' : 'fa';
    root.dir = isEn ? 'ltr' : 'rtl';

    $$('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      const val = (isEn && EN[k] !== undefined) ? EN[k] : (el.dataset.fa || el.textContent);
      el.innerHTML = val;
    });
    $$('[data-i18n-placeholder]').forEach(el => {
      const k = el.dataset.i18nPlaceholder;
      el.setAttribute('placeholder', isEn && EN[k] !== undefined ? EN[k] : (el.dataset.faPh || ''));
    });
    $$('[data-i18n-aria]').forEach(el => {
      const k = el.dataset.i18nAria;
      el.setAttribute('aria-label', isEn && EN_ARIA[k] !== undefined ? EN_ARIA[k] : (el.dataset.faAria || ''));
    });

    document.title = isEn ? EN.docTitle : 'سکّان | موتور کسب‌وکار دیجیتال شما — قالب میلاد از مجموعه سکّان';
    const desc = $('meta[name="description"]');
    if (desc) desc.setAttribute('content', isEn ? EN.docDesc : 'سکّان، مجموعه قالب‌های پریمیوم ایرانی؛ قالب میلاد برای استودیوی دیجیتال، طراحی وب‌سایت، اپلیکیشن، برندینگ و دیجیتال مارکتینگ. موتورِ رشد کسب‌وکار شما.');

    buildTicker();
    store.set('sokkan-lang', l);
  }

  const langToggle = $('#langToggle');
  if (langToggle) langToggle.addEventListener('click', () => applyLang(lang === 'fa' ? 'en' : 'fa'));

  /* ---------------- THEME ---------------- */
  const themeToggle = $('#themeToggle');
  let theme = store.get('sokkan-theme');
  if (!theme) {
    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.setAttribute('data-theme', theme);
  themeToggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    store.set('sokkan-theme', theme);
    if (matrix) matrixTheme();
  });

  /* ---------------- PRELOADER ---------------- */
  const loader = $('#loader');
  function hideLoader() {
    if (!loader || loader.classList.contains('done')) return;
    loader.classList.add('done');
  }
  window.addEventListener('load', () => setTimeout(hideLoader, 450));
  setTimeout(hideLoader, 3200); // safety net

  /* ---------------- TICKER ---------------- */
  function buildTicker() {
    const items = lang === 'en' ? EN.tickerItems : [
      'حل هوش مصنوعی', 'طراحی وب‌سایت', 'اپلیکیشن موبایل', 'دیجیتال مارکتینگ',
      'محصول SaaS', 'هویت بصری', 'اتوماسیون', 'مشاورهٔ رشد'
    ];
    // two full copies = seamless loop
    const html = items.map(t => `<span class="ticker-item">${t}</span>`).join('');
    const a = $('#tickerA'), b = $('#tickerB');
    if (a) a.innerHTML = html + html;
    if (b) b.innerHTML = html + html;
  }
  buildTicker();

  /* ---------------- MATRIX CANVAS (data stream) ----------------
     Numeric / binary-inspired glyphs only — no kanji.
     Dim, sparse and blurred by CSS: an atmosphere, not a text. */
  const canvas = $('#matrixCanvas');
  let matrix = null;
  let matrixCtx = null;
  let drops = [];
  const GLYPHS = '01 23456789#+/=<>'.split(''); // the space = occasional gap in the data stream

  function hexToRgba(hex, alpha) {
    const h = hex.replace('#', '');
    const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
    const n = parseInt(full, 16);
    return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
  }

  function matrixTheme() {
    if (!matrix) return;
    const cs = getComputedStyle(document.documentElement);
    matrix.bg = cs.getPropertyValue('--bg').trim();
    matrix.glyph = cs.getPropertyValue('--accent-2').trim();
    matrix.glyphRgb = hexToRgba(matrix.glyph, 1);
  }

  function initMatrix() {
    if (!canvas || REDUCED) return;
    matrixCtx = canvas.getContext('2d');
    if (!matrixCtx) return;
    const hero = $('#hero');
    const size = () => {
      const r = hero.getBoundingClientRect();
      canvas.width = r.width * devicePixelRatio;
      canvas.height = r.height * devicePixelRatio;
      matrixCtx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      const w = r.width, h = r.height;
      const fs = Math.max(16, Math.round(w / 52));
      const cols = Math.floor(w / (fs * 1.8));
      matrix = { w, h, fs, cols, bg: '#0b0b0e', glyph: '#2dd4a0', speed: 46 };
      matrixTheme();
      drops = Array.from({ length: cols }, () => Math.random() * -100);
    };
    size();
    window.addEventListener('resize', size);

    let last = 0, acc = 0;
    function frame(t) {
      if (!matrix) return;
      acc += t - last; last = t;
      if (acc >= matrix.speed) {
        acc = 0;
        // stronger fade per frame → shorter, softer trails
        matrixCtx.fillStyle = hexToRgba(matrix.bg, 0.13);
        matrixCtx.fillRect(0, 0, matrix.w, matrix.h);
        matrixCtx.font = `${matrix.fs}px 'JetBrains Mono', monospace`;
        drops.forEach((y, i) => {
          const x = i * matrix.fs * 1.8;
          const ch = GLYPHS[(Math.random() * GLYPHS.length) | 0];
          const nearTop = y < matrix.h / 3;
          const isHead = nearTop && Math.random() < 0.4;
          if (isHead) {
            matrixCtx.fillStyle = 'rgba(255,244,214,0.95)';
          } else {
            // most glyphs are deep-glow; a few bright sparks add rhythm
            matrixCtx.fillStyle = Math.random() < 0.06
              ? hexToRgba(matrix.glyph, 0.75)
              : hexToRgba(matrix.glyph, 0.28);
          }
          matrixCtx.fillText(ch, x, y * matrix.fs);
          drops[i] = y * matrix.fs > matrix.h && Math.random() > 0.955 ? 0 : y + 1;
        });
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  initMatrix();

  /* ---------------- SCROLL REVEAL ---------------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        if (e.target.classList.contains('features-panel')) e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------------- SCROLL PROGRESS (top progress line) ---------------- */
  const progress = document.createElement('progress');
  progress.className = 'scroll-progress';
  progress.max = 100;
  progress.value = 0;
  progress.setAttribute('aria-hidden', 'true');
  document.body.prepend(progress);

  function updateProgress() {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.value = h > 0 ? (window.scrollY / h) * 100 : 0;
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  /* ---------------- PARALLAX (rAF-throttled, transform-only) ---------------- */
  const pxEls = $$('.parallax');
  if (pxEls.length && !REDUCED) {
    const state = { y: window.scrollY };
    let ticking = false;
    let resizeTimer = null;

    const apply = () => {
      const vh = window.innerHeight;
      pxEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        // element's position relative to viewport center
        const rel = (rect.top + rect.height / 2 - vh / 2) / vh;
        const speed = parseFloat(el.dataset.speed || '0.12');
        const shift = rel * speed * 100; // px
        el.style.transform = `translate3d(0, ${shift.toFixed(2)}px, 0)`;
      });
      ticking = false;
    };
    const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(apply); } };

    window.addEventListener('scroll', () => {
      state.y = window.scrollY;
      request();
    }, { passive: true });
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(request, 100);
    });
    request();
  }

  /* ---------------- COUNTERS ---------------- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10) || 0;
    const t0 = performance.now();
    const dur = 1600;
    function tick(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = lang === 'en' ? val.toLocaleString('en-US') : faNum(val.toLocaleString('fa-IR'));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
    });
  }, { threshold: 0.6 });
  $$('.count').forEach(el => cio.observe(el));

  /* ---------------- HEADER / NAV ---------------- */
  const header = $('#siteHeader');
  const toTop = $('#toTop');
  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('scrolled', y > 24);
    toTop.classList.toggle('show', y > 700);
    if (y > 700) toTop.hidden = false; else toTop.hidden = true;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // scrollspy
  const navLinks = $$('.main-nav a[href^="#"]');
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' });
  ['intro', 'services', 'features', 'process', 'capabilities', 'works', 'testimonials', 'pricing', 'faq', 'cta'].forEach(id => {
    const s = document.getElementById(id);
    if (s) spy.observe(s);
  });

  /* ---------------- MOBILE NAV ---------------- */
  // full-screen scrim: dims the page, click/tap = close
  const scrim = document.createElement('button');
  scrim.type = 'button';
  scrim.className = 'nav-scrim';
  scrim.setAttribute('aria-hidden', 'true');
  scrim.setAttribute('tabindex', '-1');
  scrim.setAttribute('aria-label', 'بستن منو');
  document.body.appendChild(scrim);

  const burger = $('#navBurger');
  function setNav(open) {
    document.body.classList.toggle('nav-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open
      ? (lang === 'en' ? 'Close menu' : 'بستن منو')
      : (lang === 'en' ? 'Open menu' : 'بازکردن منو'));
    scrim.setAttribute('aria-hidden', String(!open));
  }
  burger.addEventListener('click', () => setNav(!document.body.classList.contains('nav-open')));
  scrim.addEventListener('click', () => setNav(false));
  $$('.main-nav a').forEach(a => a.addEventListener('click', () => setNav(false)));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') setNav(false);
  });

  /* ---------------- FAQ ---------------- */
  $$('.faq-item').forEach(item => {
    const btn = $('.faq-q', item);
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      $$('.faq-item.open').forEach(o => { o.classList.remove('open'); $('.faq-q', o).setAttribute('aria-expanded', 'false'); });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------------- TERMINAL ---------------- */
  const termOut = $('#termOut');
  if (termOut && !REDUCED) {
    const tio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        tio.disconnect();
        const lines = lang === 'en' ? EN.termLines : [
          '⣿ تحلیل پروژه ………………… OK',
          '⣿ آماده‌سازی دارایی‌ها ……… OK',
          '⣿ استقرار روی سرور ………… OK',
          '✓ موتور روشن شد — ۰٫۸ ثانیه'
        ];
        lines.forEach((ln, i) => {
          setTimeout(() => {
            const p = document.createElement('p');
            p.className = 'term-line ' + (i === lines.length - 1 ? 'done term-cursor' : 'ok');
            p.textContent = ln;
            termOut.appendChild(p);
          }, 550 + i * 650);
        });
      });
    }, { threshold: 0.5 });
    tio.observe($('.cap-terminal'));
  }

  /* ---------------- POINTER TILT (subtle 3D depth) ----------------
     Max ~1.5°, only on fine pointers (no touch), transform-only. */
  if (!REDUCED && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const tiltCards = $$('.work-card, .price-card, .file-card, .quote-card');
    tiltCards.forEach(card => {
      let rect = null;
      card.addEventListener('pointerenter', () => { rect = card.getBoundingClientRect(); });
      card.addEventListener('pointermove', e => {
        if (!rect) return;
        const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        card.style.transform = `translateY(-6px) perspective(900px) rotateX(${(-dy * 1.2).toFixed(2)}deg) rotateY(${(dx * 1.5).toFixed(2)}deg)`;
      });
      card.addEventListener('pointerleave', () => { rect = null; card.style.transform = ''; });
    });
    $$('.card-ico').forEach(ico => {
      let rect = null;
      ico.addEventListener('pointerenter', () => { rect = ico.getBoundingClientRect(); });
      ico.addEventListener('pointermove', e => {
        if (!rect) return;
        const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
        const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
        ico.style.transform = `perspective(220px) rotateX(${(-dy * 8).toFixed(1)}deg) rotateY(${(dx * 8).toFixed(1)}deg)`;
      });
      ico.addEventListener('pointerleave', () => { rect = null; ico.style.transform = ''; });
    });
  }

  /* ---------------- FORM & TOAST ---------------- */
  const toast = $('#toast');
  let toastTimer;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3400);
  }

  const form = $('#ctaForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#fName'), phone = $('#fPhone');
    const valid = name.value.trim().length > 1 && phone.value.trim().length > 4;
    if (!valid) {
      showToast(lang === 'en' ? EN.toastError : 'لطفاً نام و شمارهٔ تماس را کامل وارد کنید.');
      (name.value.trim().length > 1 ? phone : name).focus();
      return;
    }
    form.classList.add('submitted');
    showToast(lang === 'en' ? EN.toastSuccess : '✓ درخواست شما ثبت شد — تا ۲۴ ساعت آینده با شما تماس می‌گیریم.');
  });

  /* ---------------- 3D DEVICE INTERACTION ---------------- */
  // Smooth, clamped mouse-tilt on desktop.
  // Separated from float animation to prevent conflicts.
  const device = $('.hero-device');
  if (device && !REDUCED && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const hero = $('#hero');
    const tiltLayer = device.querySelector('.device-tilt');
    if (!tiltLayer) return;

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let heroRect = null;
    let rafId = null;

    const MAX_ROTATE_X = 5;   // strict limits
    const MAX_ROTATE_Y = 8;
    const LERP_FACTOR = 0.08; // smooth easing

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    function updateTilt() {
      // Smooth interpolation toward target
      currentX = lerp(currentX, targetX, LERP_FACTOR);
      currentY = lerp(currentY, targetY, LERP_FACTOR);

      // Apply transform (perspective + rotation)
      tiltLayer.style.transform = `rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg)`;

      // Continue animation if not settled
      if (Math.abs(currentX - targetX) > 0.01 || Math.abs(currentY - targetY) > 0.01) {
        rafId = requestAnimationFrame(updateTilt);
      } else {
        rafId = null;
      }
    }

    function onMouseMove(e) {
      if (!heroRect) heroRect = hero.getBoundingClientRect();

      // Calculate normalized position (-1 to 1)
      const cx = heroRect.left + heroRect.width / 2;
      const cy = heroRect.top + heroRect.height / 2;
      const dx = (e.clientX - cx) / (heroRect.width / 2);
      const dy = (e.clientY - cy) / (heroRect.height / 2);

      // Clamp to [-1, 1]
      const clampedX = Math.max(-1, Math.min(1, dx));
      const clampedY = Math.max(-1, Math.min(1, dy));

      // Calculate target rotation (inverted for natural feel)
      targetY = clampedX * MAX_ROTATE_Y;
      targetX = -clampedY * MAX_ROTATE_X;

      // Start animation loop if not running
      if (!rafId) rafId = requestAnimationFrame(updateTilt);
    }

    function onMouseEnter() {
      heroRect = hero.getBoundingClientRect();
    }

    function onMouseLeave() {
      heroRect = null;
      targetX = 0;
      targetY = 0;
      if (!rafId) rafId = requestAnimationFrame(updateTilt);
    }

    function onResize() {
      heroRect = null;
    }

    hero.addEventListener('mouseenter', onMouseEnter);
    hero.addEventListener('mousemove', onMouseMove);
    hero.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', onResize);
  }

  /* ---------------- INIT ---------------- */
  applyLang(lang);
})();
