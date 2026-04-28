import '../css/normalize.css';
import '../css/styles.css';

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Initialize Glide.js Carousel with Enhanced Settings ---
  if (document.querySelector('.glide')) {
    const glideInstance = new Glide('.glide', {
      type: 'carousel',
      startAt: 0,
      perView: 1,
      autoplay: 4000, // Auto-scroll every 4 seconds
      hoverpause: true,
      gap: 20,
      animationDuration: 800
    }).mount();
  }

  // --- 2. Tab Switching Logic ---
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach((b) => b.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.classList.add('active');
      }
    });
  });

  // --- 3. Enhanced Scroll Animations (Intersection Observer) ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add staggered animation for multiple elements
        const delay = Array.from(entry.target.parentElement?.children || []).indexOf(entry.target) * 100;
        setTimeout(() => {
          entry.target.classList.add('show-element');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll('.hidden-element');
  hiddenElements.forEach((el) => observer.observe(el));

  // --- 4. Smooth Scrolling for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // --- 5. Enhanced Result Cards Animation on Hover ---
  const resultCards = document.querySelectorAll('.result-card');
  resultCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;

    card.addEventListener('mouseenter', function () {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // --- 6. Navbar Scroll Effect ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 8px 40px rgba(157, 78, 221, 0.2)';
      } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.8)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
      }
    });
  }

  // --- 7. Parallax Effect for Metrics ---
  const metrics = document.querySelectorAll('.metric');
  window.addEventListener('scroll', () => {
    metrics.forEach((metric) => {
      const rect = metric.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;

      if (scrollPercent > 0 && scrollPercent < 1) {
        metric.style.transform = `translateY(${scrollPercent * 20 - 10}px)`;
      }
    });
  });

  // --- 8. Counter Animation for Metrics ---
  const animateCounters = () => {
    const metricValues = document.querySelectorAll('.metric h3');

    metricValues.forEach((element) => {
      const finalValue = element.textContent;
      const isDecimal = finalValue.includes('.');
      const parseFunc = isDecimal ? parseFloat : parseInt;
      const target = parseFunc(finalValue);

      let current = 0;
      const increment = target / 40;

      const counter = setInterval(() => {
        current += increment;

        if (current >= target) {
          element.textContent = finalValue;
          clearInterval(counter);
        } else {
          element.textContent = isDecimal ? current.toFixed(3) : Math.floor(current);
        }
      }, 30);
    });
  };

  // Trigger counter animation when metrics are visible
  const metricsSection = document.querySelector('.hero-metrics');
  if (metricsSection) {
    const metricsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.dataset.animated) {
            animateCounters();
            entry.target.dataset.animated = 'true';
            metricsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    metricsObserver.observe(metricsSection);
  }

  // --- 9. Add Loading Animation to Images ---
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.addEventListener('load', () => {
      img.style.opacity = '1';
    });

    if (img.complete) {
      img.style.opacity = '1';
    } else {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.5s ease';
    }
  });

  // --- 11. Add Floating Animation to Badge ---
  const badge = document.querySelector('.badge');
  if (badge) {
    setInterval(() => {
      const randomX = (Math.random() - 0.5) * 10;
      const randomY = (Math.random() - 0.5) * 10;
      badge.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }, 2000);
  }

  console.log('✨ IgAN AI Review website initialized successfully!');
});
