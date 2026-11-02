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
  const supportsMatchMedia = typeof window.matchMedia === 'function';
  const REDUCED = supportsMatchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
    introP1: 'Sokkan is a digital services studio where engineering precision meets the spirit of old craftsmanship. We see every project as a motor: every part in its place, running quietly, built to last for years.',
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
    q2: 'Our store’s speed was always painful; after Sokkan’s redesign, speed doubled and monthly sales grew 32%. The post-launch support is outstanding — they even respond on weekends.',
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
    plan2Flag: 'Sokkan’s pick',
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

  // Preview-safe copy: replace every illustrative claim with verified business content before launch.
  Object.assign(EN, {
    skipLink: 'Skip to main content',
    fNamePh: 'Your full name', fPhonePh: 'e.g. 0912 123 4567', fMsgPh: 'Project goals, scope or questions',
    demoNotice: 'Template preview: names, metrics, prices, contacts, testimonials and trust/payment marks are examples. Replace them with accurate, authorized business details before publishing.',
    heroBadge: 'Digital studio template — sample content',
    heroSub: 'From services and portfolio cards to pricing and a contact form, this single-page preview is ready to tailor to your business.',
    introEyebrow: 'Template overview',
    introTitle1: 'A flexible starting point', introTitle2: 'for your digital presence.',
    introP1: 'Milad is a single-page template for digital studios and businesses. Its sections, colors and copy are ready to customize to match your brand identity.',
    introP2: 'This preview brings together services, portfolio cards, pricing, FAQs and a demo contact form. Replace the sample copy with accurate, verifiable information before publishing.',
    signName: 'Your name or team', signRole: 'Your city or service area',
    trustLabel: 'Sample space for client names or logos (use only with permission)',
    trustBrand1: 'Client name 1', trustBrand2: 'Client name 2', trustBrand3: 'Client name 3',
    trustBrand4: 'Client name 4', trustBrand5: 'Client name 5', trustBrand6: 'Client name 6',
    statLabel1: 'Projects (sample)', statLabel2: 'Years active (sample)',
    statLabel3: 'Satisfaction (sample)', statLabel4: 'Team members (sample)',
    sv1Desc: 'Sample copy for a corporate website, online store or campaign landing page. Match the scope to the services you actually provide.',
    sv2Desc: 'Sample copy for mobile app design and development. Platforms, integrations and features depend on the actual project scope.',
    sv3Desc: 'Sample copy for digital marketing, search optimization and analytics. Do not publish outcome figures without reliable supporting evidence.',
    sv4Desc: 'Sample copy for naming, logo design, brand guidelines and tone of voice. Align deliverables with your actual agreement.',
    feat1Desc: 'Describe measured performance only after testing the published site on representative devices and networks.',
    feat3Desc: 'Describe the security controls and backup procedures that are actually configured for the deployed project.',
    feat5Desc: 'Set support hours, response targets and any service-level commitments in your own written agreement.',
    feat6Desc: 'Describe the scalability and documentation that are included in the actual project scope.',
    gaugeNote: 'Illustrative values only; replace after measuring the real site.',
    capSub: 'A sample list of technologies and capabilities. Keep only tools and services your team can actually deliver.',
    spec1: 'HTML/CSS/JS, React and Vue — example options for interface development',
    spec2: 'Node.js, Python and PostgreSQL — example options for server-side development',
    spec3: 'Flutter and React Native — example cross-platform development options',
    spec5: 'GA4, Search Console and dashboards — availability and configuration depend on the project',
    spec6: 'AI assistants and content automation — illustrative service categories, not a delivery claim',
    worksEyebrow: 'Sample portfolio cards',
    worksTitle: 'Editable project examples',
    worksSub: 'These are layout samples. Use real projects only when you have permission to publish the names, work and results.',
    work1Title: 'Sample project 1', work2Title: 'Sample project 2', work3Title: 'Sample project 3',
    work1Desc: 'Add the project brief, scope and your role using a real case study approved for publication.',
    work2Desc: 'Add verified project details and outcomes, with the client’s permission where required.',
    work3Desc: 'Describe the real deliverables and scope without implying unverified results.',
    work1Result: 'Measured result (add evidence)', work2Result: 'Measured result (add evidence)', work3Result: 'Measured result (add evidence)',
    testiEyebrow: 'Sample feedback section',
    testiTitle: 'Publish quotes only with client permission',
    testiNote: 'The copy, names and star ratings below are placeholders; replace them with authentic, authorized feedback.',
    q1: 'Sample quote: describe the client’s challenge, the collaboration and a measurable result in their own words, with permission.',
    q2: 'Sample quote: use authentic client feedback without exaggeration and publish it only with written permission.',
    q3: 'This is a placeholder, not a real endorsement. Verify the wording, name and rating before publication.',
    q1Name: 'Client name 1 (sample)', q2Name: 'Client name 2 (sample)', q3Name: 'Client name 3 (sample)',
    q1Role: 'Client role and organization (sample)', q2Role: 'Client role and organization (sample)', q3Role: 'Client role and organization (sample)',
    pricingEyebrow: 'Sample pricing',
    pricingSub: 'This is a layout for service tiers. Replace amounts, inclusions and commitments with your current written offer.',
    priceFrom: 'Sample', pricePlaceholder: 'Amount',
    pricingNote: 'All amounts and commitments are examples. Replace them with accurate, dated terms that match your contract.',
    faq1a: 'Explain the expected schedule for your own service, including dependencies, milestones and factors that can change delivery time.',
    faq2a: 'Describe whether phased delivery is available for your actual service and how scope changes are agreed.',
    faq3a: 'State the support period, scope and response times that you actually offer in writing.',
    faq4a: 'Explain your real design process and identify any third-party or pre-built components where relevant.',
    faq5a: 'Clarify whether domain registration, hosting and deployment are included, optional or handled by the customer.',
    faq6a: 'Describe your actual contracting, payment schedule, cancellation and delivery terms; have local legal counsel review them.',
    finalEyebrow: 'Customize before publishing',
    finalSub: 'Connect and test a secure form endpoint, then replace this copy with your real response process and contact details.',
    finalAddr: 'Add your business address or service area',
    formTitle: 'Demo contact form',
    phoneHelp: 'Enter a valid Iranian mobile or landline number, including area code where applicable.',
    formNote: 'Demo only. No information is sent or stored until you connect and test a secure endpoint.',
    formSuccessTitle: 'The configured service accepted the request',
    formSuccessDesc: 'This confirmation appears only after the server returns a successful response. Replace it with your real next-step instructions.',
    toastSuccess: 'The configured service accepted the request.',
    toastError: 'Check the required fields and enter a valid Iranian phone number.',
    formDemo: 'Demo form: no information was sent or stored. Connect a secure endpoint before publishing.',
    formServerError: 'The request could not be confirmed. Please try again later or use the listed contact details.',
    formNetworkError: 'Could not reach the configured service. Please try again later.',
    footerDesc: 'Add your business introduction here; the current text is sample content for the Sokkan template preview.',
    fAddr: 'Add your business address or service area',
    footerRights: '© 2026 Sokkan Template Pack — template preview.',
    trustNote: 'Optional demo area. Add only a valid trust mark that belongs to your business and is authorized for use. Payment gateways require separate approval and configuration with a licensed provider.',
    docTitle: 'Milad | Digital studio template preview — Sokkan',
    docDesc: 'A customizable Persian-first HTML landing page template for digital studios and Iranian businesses. Demo content; replace sample details before publishing.'
  });

  Object.assign(EN, {
    legalPageEyebrow: 'Template sample',
    legalPageTitle: 'Terms of use and privacy notice',
    legalDisclaimer: 'Editable sample only — not legal advice. Replace every bracketed field and have the complete text reviewed against current Iranian law and your actual business practices before publication.',
    legalIntro: 'This sample page is provided as a drafting aid. It does not create a contract, guarantee regulatory compliance or describe a real seller’s data practices.',
    legalTermsHeading: 'Terms of use',
    termsIntro: 'Use the following headings to document the actual offer and agreement. Remove any section that does not apply, and do not publish unverified commitments.',
    termsProviderHeading: '1. Provider and contact details',
    termsProviderBody: 'Legal or trading name: [insert]. Registration / national identifier, if applicable: [insert]. Business address: [insert]. Support email and telephone: [insert]. Identify the party responsible for the service and keep these details current.',
    termsOfferHeading: '2. Service scope and delivery',
    termsOfferBody: 'Describe the purchased product or service, inclusions, exclusions, milestones, acceptance criteria, delivery method, required customer inputs and any third-party dependencies in the signed order or statement of work.',
    termsPricingHeading: '3. Price, payment and tax',
    termsPricingBody: 'Specify the currency, final price, applicable taxes or duties, payment schedule, invoices and any recurring charges before checkout or signature. Do not treat the demo prices in this template as an offer.',
    termsIpHeading: '4. Intellectual property and permitted use',
    termsIpBody: 'Identify the rights granted to the buyer, the license duration and scope, permitted modification, project or domain limits, attribution requirements, and restrictions on redistribution. Third-party fonts and assets remain subject to their own licenses.',
    termsCancellationHeading: '5. Cancellation, changes and refunds',
    termsCancellationBody: 'Set out the cancellation process, treatment of work already performed, change requests, delivery delays, refunds and any mandatory consumer rights. Have local counsel verify that the terms are enforceable and do not limit non-waivable rights.',
    termsLiabilityHeading: '6. Warranties, support and liability',
    termsLiabilityBody: 'State what support is included, response targets, warranty period and any lawful limitations. Do not promise uptime, security, search ranking or business results that have not been verified.',
    termsLawHeading: '7. Governing law and disputes',
    termsLawBody: 'Insert the applicable governing law, dispute-resolution route and complaint contact only after legal review. This sample makes no choice of law and does not replace a signed agreement.',
    legalPrivacyHeading: 'Privacy notice',
    privacyIntro: 'This template has no contact-form endpoint or analytics service configured by default. When you connect services, update this notice to reflect the real data flows, vendors and retention periods before collecting personal data.',
    privacyControllerHeading: '1. Controller identity',
    privacyControllerBody: 'Controller / business name: [insert]. Privacy contact: [insert]. Address: [insert]. Identify the entity that decides why and how personal data is processed.',
    privacyDataHeading: '2. Data collected',
    privacyDataBody: 'List each data field actually collected (for example, name, telephone number and message), how it is collected, whether it is required, and any device, log or cookie data generated by the services you enable.',
    privacyPurposeHeading: '3. Purposes and legal basis',
    privacyPurposeBody: 'Describe each processing purpose, the applicable legal basis and how a person can withdraw consent where relevant. Do not collect or reuse contact details for marketing unless you have an appropriate basis and disclose it.',
    privacyStorageHeading: '4. Storage and retention',
    privacyStorageBody: 'Name the systems and locations that store data, the retention period for each category, the deletion schedule and backup handling. Replace [retention period] with a specific, operational rule.',
    privacySharingHeading: '5. Recipients and transfers',
    privacySharingBody: 'List hosting, form, analytics, messaging and payment providers that receive data, the purpose of sharing, and any international transfer or remote access. Add only vendors actually used.',
    privacySecurityHeading: '6. Security',
    privacySecurityBody: 'Describe proportionate safeguards that are actually implemented, such as access controls, transport security and incident handling. Avoid absolute claims that a system is completely secure.',
    privacyRightsHeading: '7. Requests and rights',
    privacyRightsBody: 'Explain how people can request access, correction, deletion or other rights available under applicable law, how identity is verified, and how long responses normally take. Insert the real contact route.',
    privacyCookiesHeading: '8. Cookies and analytics',
    privacyCookiesBody: 'List cookies, analytics, pixels and embedded content after enabling them, including purpose, provider and retention. The static preview itself does not configure a third-party analytics tool.',
    privacyContactHeading: '9. Contact and updates',
    privacyContactBody: 'Privacy inquiries: [insert contact]. State the effective date and how material updates will be announced. Re-review this notice whenever forms, hosting, analytics or other integrations change.',
    legalReviewNote: 'Before launch: replace all bracketed placeholders, check actual form/analytics/payment integrations, and obtain advice from a qualified Iranian lawyer. This sample is not legal advice.',
    legalBackHome: 'Back to Milad preview'
  });

  const EN_ARIA = {
    navLabel: 'Main navigation',
    brandAria: 'Sokkan — return to the top',
    navToggleLabel: 'Open menu',
    trustEnamad: 'Placeholder for an authorized Iranian trust mark',
    langToggleLabel: 'Switch to Persian',
    footerQuickLabel: 'Quick links', footerServicesLabel: 'Services',
    socialInstagram: 'Instagram link — replace with your profile',
    socialLinkedIn: 'LinkedIn link — replace with your profile',
    socialTelegram: 'Telegram link — replace with your channel',
    socialDribbble: 'Dribbble link — replace with your profile',
    starsLabel: 'Sample five-star rating',
    toTopLabel: 'Back to top', scrollToIntro: 'Scroll to the introduction',
    technicalMetrics: 'Illustrative technical metrics',
    legalSectionsLabel: 'Legal notice sections',
    legalHomeLabel: 'Return to Milad preview',
    fServiceLabel: 'Service type', tagsLabel: 'Service and project tags',
    themeToggleLabel: 'Toggle dark/light mode',
    stat1: '128', stat2: '12', stat3: '98', stat4: '9'
  };

  let lang = store.get('sokkan-lang') === 'en' ? 'en' : 'fa';

  // Capture original Persian text once. Translations are always written through textContent.
  $$('[data-i18n]').forEach(el => {
    if (el.dataset.fa === undefined) el.dataset.fa = el.textContent.trim();
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
    root.lang = isEn ? 'en' : 'fa-IR';
    root.dir = isEn ? 'ltr' : 'rtl';

    $$('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      const val = (isEn && EN[k] !== undefined) ? EN[k] : (el.dataset.fa || '');
      el.textContent = val;
    });
    $$('[data-i18n-placeholder]').forEach(el => {
      const k = el.dataset.i18nPlaceholder;
      el.setAttribute('placeholder', isEn && EN[k] !== undefined ? EN[k] : (el.dataset.faPh || ''));
    });
    $$('[data-i18n-aria]').forEach(el => {
      const k = el.dataset.i18nAria;
      el.setAttribute('aria-label', isEn && EN_ARIA[k] !== undefined ? EN_ARIA[k] : (el.dataset.faAria || ''));
    });

    const pageTitle = isEn
      ? (document.body.dataset.pageTitleEn || EN.docTitle)
      : (document.body.dataset.pageTitleFa || 'میلاد | قالب استودیوی دیجیتال — پیش‌نمایش مجموعهٔ سکّان');
    document.title = pageTitle;
    const desc = $('meta[name="description"]');
    const description = isEn
      ? (document.body.dataset.pageDescriptionEn || EN.docDesc)
      : (document.body.dataset.pageDescriptionFa || 'پیش‌نمایش قابل‌ویرایش قالب میلاد برای معرفی استودیوها و کسب‌وکارهای دیجیتال؛ محتوای نمونه را پیش از انتشار با اطلاعات معتبر خود جایگزین کنید.');
    if (desc) desc.setAttribute('content', description);
    const ogTitle = $('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', document.title);
    const ogDesc = $('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);
    const langButton = $('#langToggle');
    if (langButton) langButton.setAttribute('aria-label', isEn ? EN_ARIA.langToggleLabel : 'تغییر زبان به انگلیسی');
    const burger = $('#navBurger');
    if (burger) {
      const isOpen = document.body.classList.contains('nav-open');
      burger.setAttribute('aria-label', isEn ? (isOpen ? 'Close menu' : 'Open menu') : (isOpen ? 'بستن منو' : 'بازکردن منو'));
    }
    const scrim = $('.nav-scrim');
    if (scrim) scrim.setAttribute('aria-label', isEn ? 'Close menu' : 'بستن منو');
    $$('.count[data-counted="true"]').forEach(el => {
      const value = parseInt(el.dataset.count, 10) || 0;
      el.textContent = isEn ? value.toLocaleString('en-US') : faNum(value.toLocaleString('fa-IR'));
    });

    buildTicker();
    store.set('sokkan-lang', isEn ? 'en' : 'fa');
  }

  const langToggle = $('#langToggle');
  if (langToggle) langToggle.addEventListener('click', () => applyLang(lang === 'fa' ? 'en' : 'fa'));

  /* ---------------- THEME ---------------- */
  const themeToggle = $('#themeToggle');
  let theme = store.get('sokkan-theme');
  if (theme !== 'dark' && theme !== 'light') {
    theme = supportsMatchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
  document.documentElement.setAttribute('data-theme', theme);
  const initialThemeColor = $('meta[name="theme-color"]');
  if (initialThemeColor) initialThemeColor.setAttribute('content', theme === 'dark' ? '#0b0b0e' : '#f2ecdc');
  if (themeToggle) themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
  if (themeToggle) themeToggle.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    const themeColor = $('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute('content', theme === 'dark' ? '#0b0b0e' : '#f2ecdc');
    themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
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
    // Two full copies create a seamless loop. Use textContent, never HTML interpolation.
    const a = $('#tickerA'), b = $('#tickerB');
    [a, b].forEach(track => {
      if (!track) return;
      const fragment = document.createDocumentFragment();
      for (let copy = 0; copy < 2; copy += 1) {
        items.forEach(text => {
          const item = document.createElement('span');
          item.className = 'ticker-item';
          item.textContent = text;
          fragment.appendChild(item);
        });
      }
      track.replaceChildren(fragment);
    });
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
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        if (e.target.classList.contains('features-panel')) e.target.classList.add('in-view');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) : null;
  $$('.reveal').forEach(el => {
    if (io) io.observe(el);
    else el.classList.add('in');
  });

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
      else el.dataset.counted = 'true';
    }
    requestAnimationFrame(tick);
  }
  const cio = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCount(e.target); cio.unobserve(e.target); }
    });
  }, { threshold: 0.6 }) : null;
  $$('.count').forEach(el => {
    if (cio) cio.observe(el);
    else {
      const value = parseInt(el.dataset.count, 10) || 0;
      el.textContent = lang === 'en' ? value.toLocaleString('en-US') : faNum(value.toLocaleString('fa-IR'));
    }
  });

  /* ---------------- HEADER / NAV ---------------- */
  const header = $('#siteHeader');
  const toTop = $('#toTop');
  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle('scrolled', y > 24);
    if (toTop) {
      toTop.classList.toggle('show', y > 700);
      toTop.hidden = y <= 700;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: REDUCED ? 'auto' : 'smooth' }));

  // scrollspy
  const navLinks = $$('.main-nav a[href^="#"]');
  const spy = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px' }) : null;
  ['intro', 'services', 'features', 'process', 'capabilities', 'works', 'testimonials', 'pricing', 'faq', 'cta'].forEach(id => {
    const s = document.getElementById(id);
    if (s && spy) spy.observe(s);
  });

  /* ---------------- MOBILE NAV ---------------- */
  // Fix: Move mobile nav out of header's stacking context.
  // The header uses backdrop-filter (blur) which creates a new containing
  // block — causing position:fixed children to be positioned relative to
  // the header instead of the viewport. By moving .main-nav to <body>,
  // it is always positioned relative to the viewport.
  const mainNav = $('#mainNav');
  const headerEl = $('#siteHeader');
  const mobileQuery = supportsMatchMedia ? window.matchMedia('(max-width: 991px)') : { matches: false };
  let navMoved = false;

  function handleNavPlacement() {
    if (!mainNav || !headerEl) return;
    if (mobileQuery.matches && !navMoved) {
      // Mobile: move nav to body (after header) so it's outside the
      // header's stacking context and fixed positioning works correctly
      headerEl.parentNode.insertBefore(mainNav, headerEl.nextSibling);
      mainNav.classList.add('nav-mobile-detached');
      navMoved = true;
    } else if (!mobileQuery.matches && navMoved) {
      // Desktop: move nav back inside header
      headerEl.querySelector('.header-in').appendChild(mainNav);
      mainNav.classList.remove('nav-mobile-detached');
      navMoved = false;
    }
  }
  handleNavPlacement();
  if (mobileQuery.addEventListener) mobileQuery.addEventListener('change', () => {
    handleNavPlacement();
    if (!mobileQuery.matches && document.body.classList.contains('nav-open')) setNav(false, false);
  });
  else if (mobileQuery.addListener) mobileQuery.addListener(() => handleNavPlacement());

  // full-screen scrim: dims the page, click/tap = close
  const scrim = document.createElement('button');
  scrim.type = 'button';
  scrim.className = 'nav-scrim';
  scrim.setAttribute('aria-hidden', 'true');
  scrim.setAttribute('tabindex', '-1');
  scrim.setAttribute('aria-label', lang === 'en' ? 'Close menu' : 'بستن منو');
  document.body.appendChild(scrim);

  const burger = $('#navBurger');
  function setNav(open, restoreFocus = true) {
    document.body.classList.toggle('nav-open', open);
    if (burger) {
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open
        ? (lang === 'en' ? 'Close menu' : 'بستن منو')
        : (lang === 'en' ? 'Open menu' : 'بازکردن منو'));
    }
    scrim.setAttribute('aria-hidden', String(!open));
    scrim.tabIndex = open ? 0 : -1;
    if (open && mainNav) {
      const firstLink = mainNav.querySelector('a[href]');
      if (firstLink) firstLink.focus();
    } else if (restoreFocus && burger) {
      burger.focus();
    }
  }
  if (burger) burger.addEventListener('click', () => setNav(!document.body.classList.contains('nav-open'), false));
  scrim.addEventListener('click', () => setNav(false));
  document.body.addEventListener('click', e => {
    if (e.target.closest('.main-nav a')) setNav(false, false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) setNav(false);
  });

  /* ---------------- FAQ ---------------- */
  $$('.faq-item').forEach(item => {
    const btn = $('.faq-q', item);
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      $$('.faq-item.open').forEach(o => {
        o.classList.remove('open');
        const openButton = $('.faq-q', o);
        const answer = openButton && document.getElementById(openButton.getAttribute('aria-controls'));
        if (openButton) openButton.setAttribute('aria-expanded', 'false');
        if (answer) answer.setAttribute('aria-hidden', 'true');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        const answer = document.getElementById(btn.getAttribute('aria-controls'));
        if (answer) answer.setAttribute('aria-hidden', 'false');
      }
    });
  });

  /* ---------------- TERMINAL ---------------- */
  const termOut = $('#termOut');
  if (termOut && !REDUCED && 'IntersectionObserver' in window) {
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
    const terminalPanel = $('.cap-terminal');
    if (terminalPanel) tio.observe(terminalPanel);
  }

  /* ---------------- POINTER TILT (subtle 3D depth) ----------------
     Max ~1.5°, only on fine pointers (no touch), transform-only. */
  if (!REDUCED && supportsMatchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
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
  function showToast(message, type = 'success') {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('toast-success', 'toast-error');
    toast.classList.add('show', `toast-${type}`);
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show', 'toast-success', 'toast-error');
      toast.hidden = true;
    }, 4200);
  }

  const form = $('#ctaForm');
  if (form) {
    const nameInput = $('#fName', form);
    const phoneInput = $('#fPhone', form);
    const submitButton = $('button[type="submit"]', form);
    const latinDigits = value => String(value)
      .replace(/[۰-۹]/g, digit => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)))
      .replace(/[٠-٩]/g, digit => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)));

    function normalizeIranPhone(raw) {
      const digits = latinDigits(raw).replace(/\D/g, '');
      if (digits.startsWith('0098')) return `0${digits.slice(4)}`;
      if (digits.startsWith('98')) return `0${digits.slice(2)}`;
      if (digits.length === 10 && digits.startsWith('9')) return `0${digits}`;
      return digits;
    }

    function isValidIranPhone(phone) {
      return /^09\d{9}$/.test(phone) || /^0\d{9,10}$/.test(phone);
    }

    if (nameInput) nameInput.addEventListener('input', () => nameInput.setCustomValidity(''));
    if (phoneInput) {
      phoneInput.addEventListener('input', () => {
        phoneInput.setCustomValidity('');
        phoneInput.removeAttribute('aria-invalid');
      });
    }

    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      if (!nameInput || !phoneInput) return;

      const name = nameInput.value.trim();
      const phone = normalizeIranPhone(phoneInput.value);
      if (name.length < 2) {
        nameInput.setCustomValidity(lang === 'en' ? 'Enter at least two characters.' : 'نام باید دست‌کم دو نویسه داشته باشد.');
        nameInput.reportValidity();
        nameInput.focus();
        return;
      }
      nameInput.setCustomValidity('');
      if (!isValidIranPhone(phone)) {
        phoneInput.setCustomValidity(lang === 'en'
          ? 'Enter an Iranian mobile or landline number, with its area code.'
          : 'شمارهٔ موبایل یا تلفن ایران را با پیش‌شمارهٔ شهر وارد کنید.');
        phoneInput.setAttribute('aria-invalid', 'true');
        phoneInput.reportValidity();
        phoneInput.focus();
        return;
      }
      phoneInput.setCustomValidity('');
      phoneInput.removeAttribute('aria-invalid');

      const endpoint = (form.dataset.endpoint || '').trim();
      if (!endpoint) {
        showToast(lang === 'en' ? EN.formDemo : 'فرم نمایشی است؛ اطلاعات ارسال یا ذخیره نشد. پیش از انتشار، endpoint امن را متصل کنید.', 'error');
        return;
      }

      let target;
      try {
        target = new URL(endpoint, window.location.href);
      } catch (error) {
        showToast(lang === 'en' ? EN.formServerError : 'نشانی endpoint معتبر نیست؛ تنظیمات فرم را بررسی کنید.', 'error');
        return;
      }
      if (target.origin !== window.location.origin || (target.protocol !== 'https:' && window.location.hostname !== 'localhost')) {
        showToast(lang === 'en'
          ? 'Use a secure same-origin endpoint; do not send form data to an unverified third party.'
          : 'از endpoint امن و هم‌مبدأ استفاده کنید؛ اطلاعات فرم را به سرویس شخص ثالثِ تأییدنشده نفرستید.', 'error');
        return;
      }

      if (submitButton) submitButton.disabled = true;
      form.setAttribute('aria-busy', 'true');
      try {
        const response = await fetch(`${target.pathname}${target.search}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name,
            phone,
            service: ($('#fService', form) || {}).value || '',
            message: ($('#fMsg', form) || {}).value || ''
          }),
          credentials: 'same-origin'
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        form.classList.add('submitted');
        showToast(lang === 'en' ? EN.toastSuccess : 'ارسال درخواست از سوی سرویس تنظیم‌شده تأیید شد.', 'success');
      } catch (error) {
        showToast(lang === 'en' ? EN.formNetworkError : 'ارسال درخواست تأیید نشد؛ بعداً دوباره تلاش کنید یا از راه‌های تماس درج‌شده استفاده کنید.', 'error');
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
        form.removeAttribute('aria-busy');
      }
    });
    // Keep the static form inert without JavaScript; once the handler is ready,
    // enable it so the demo can explain that no endpoint is connected.
    if (submitButton) submitButton.disabled = false;
  }

  /* ---------------- 3D DEVICE INTERACTION ---------------- */
  // Smooth, clamped mouse-tilt on desktop.
  // Separated from float animation to prevent conflicts.
  const device = $('.hero-device');
  if (device && !REDUCED && supportsMatchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const hero = $('#hero');
    const tiltLayer = device.querySelector('.device-tilt');
    if (tiltLayer && hero) {
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
  }

  /* ---------------- INIT ---------------- */
  applyLang(lang);
})();
