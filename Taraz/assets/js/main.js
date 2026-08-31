/* ============================================================
   Taraz | تراز — main.js
   Theme · Language · Mobile Menu · FAQ · Forms · Scroll · Reveal
   ============================================================ */

(function() {
  'use strict';

  // ==================== Theme ====================
  let currentTheme = localStorage.getItem('taraz_theme') || 'light';

  function updateTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }

  function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('taraz_theme', currentTheme);
    updateTheme();
  }

  // ==================== Language ====================
  let currentLang = localStorage.getItem('taraz_lang') || 'fa';

  function updateLanguage() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    
    // Update language toggle label
    const langLabel = document.querySelector('[data-lang-label]');
    const langShort = document.querySelector('[data-lang-short]');
    if (langLabel) langLabel.textContent = currentLang === 'fa' ? 'EN' : 'فا';
    if (langShort) langShort.textContent = currentLang === 'fa' ? 'EN' : 'FA';
  }

  function toggleLanguage() {
    currentLang = currentLang === 'fa' ? 'en' : 'fa';
    localStorage.setItem('taraz_lang', currentLang);
    updateLanguage();
  }

  // ==================== Mobile Menu ====================
  function initMobileMenu() {
    const burger = document.querySelector('.nav-burger');
    const scrim = document.querySelector('.nav-scrim');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (!burger || !mobileNav) return;

    function openMenu() {
      document.body.classList.add('nav-open');
      burger.setAttribute('aria-expanded', 'true');
    }

    function closeMenu() {
      document.body.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
    }

    function toggleMenu() {
      if (document.body.classList.contains('nav-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    burger.addEventListener('click', toggleMenu);
    
    if (scrim) {
      scrim.addEventListener('click', closeMenu);
    }

    // Close on mobile nav link click
    document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        closeMenu();
      }
    });

    // Close on resize to desktop
    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 992 && document.body.classList.contains('nav-open')) {
          closeMenu();
        }
      }, 100);
    });
  }

  // ==================== Header Scroll ====================
  function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    let ticking = false;

    function update() {
      const scrollY = window.scrollY;
      
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = scrollY;
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
  }

  // ==================== Smooth Scroll ====================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
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
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(faq => {
          faq.classList.remove('active');
        });
        
        // Toggle current item
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
          showToast('پیام شما با موفقیت ارسال شد!', 'success');
          form.reset();
        } else {
          showToast('لطفاً تمامی فیلدها را پر کنید.', 'error');
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

  // ==================== Reveal Animations ====================
  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => {
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
          if (!target) return;
          
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.textContent = target.toLocaleString('fa-IR') + '+';
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

  // ==================== Active Nav Link ====================
  function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '-100px 0px -50% 0px'
    });

    sections.forEach(section => observer.observe(section));
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
    initReveal();
    initCounters();
    initActiveNav();

    document.querySelector('.theme-toggle')?.addEventListener('click', toggleTheme);
    document.querySelector('.lang-toggle')?.addEventListener('click', toggleLanguage);
  });

})();
