/**
 * CAVE Interaction System v1.0
 * Mobile-Only Touch Interactions
 */

(function() {
  'use strict';

  // ─── Scroll Reveal ───
  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // ─── Torch Effect ───
  function initTorch() {
    document.querySelectorAll('.torch-glow').forEach(el => {
      el.addEventListener('touchstart', () => el.classList.add('lit'), { passive: true });
      el.addEventListener('touchend', () => {
        setTimeout(() => el.classList.remove('lit'), 1000);
      }, { passive: true });
    });
  }

  // ─── Long Press Easter Eggs ───
  function initLongPress() {
    let timer;
    document.querySelectorAll('[data-secret]').forEach(el => {
      el.addEventListener('touchstart', () => {
        timer = setTimeout(() => {
          el.classList.toggle('secret-revealed');
        }, 800);
      }, { passive: true });

      el.addEventListener('touchend', () => clearTimeout(timer), { passive: true });
      el.addEventListener('touchmove', () => clearTimeout(timer), { passive: true });
    });
  }

  // ─── Pull to Refresh (back to entrance) ───
  function initPullRefresh() {
    let startY = 0;
    document.addEventListener('touchstart', (e) => {
      if (window.scrollY === 0) startY = e.touches[0].pageY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      const diff = e.changedTouches[0].pageY - startY;
      if (diff > 150 && window.scrollY === 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      startY = 0;
    }, { passive: true });
  }

  // ─── Swipe Navigation ───
  function initSwipe() {
    let startX = 0;
    const zones = document.querySelectorAll('.cave-section');
    if (zones.length === 0) return;

    document.addEventListener('touchstart', (e) => {
      startX = e.touches[0].pageX;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      const diff = startX - e.changedTouches[0].pageX;
      if (Math.abs(diff) > 100) {
        const event = new CustomEvent('cave-swipe', {
          detail: { direction: diff > 0 ? 'left' : 'right' }
        });
        document.dispatchEvent(event);
      }
    }, { passive: true });
  }

  // ─── Gate (Password) System ───
  function initGate() {
    const digits = document.querySelectorAll('.gate-digit');
    if (digits.length === 0) return;

    digits.forEach((digit, i) => {
      digit.addEventListener('input', (e) => {
        const val = e.target.value;
        if (val.length === 1 && i < digits.length - 1) {
          digits[i + 1].focus();
        }
        checkGateCode();
      });

      digit.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !e.target.value && i > 0) {
          digits[i - 1].focus();
        }
      });
    });
  }

  function checkGateCode() {
    const digits = document.querySelectorAll('.gate-digit');
    const code = Array.from(digits).map(d => d.value).join('');
    const target = document.querySelector('[data-gate-code]');
    if (!target) return;

    const correctCode = target.dataset.gateCode;
    if (code.length === digits.length) {
      if (code === correctCode) {
        document.querySelector('.gate-overlay').style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => {
          document.querySelector('.gate-overlay').style.display = 'none';
          sessionStorage.setItem('cave_auth', 'true');
        }, 500);
      } else {
        digits.forEach(d => {
          d.value = '';
          d.style.borderColor = '#ff3333';
          setTimeout(() => d.style.borderColor = '', 500);
        });
        digits[0].focus();
      }
    }
  }

  // ─── Init ───
  document.addEventListener('DOMContentLoaded', () => {
    initReveal();
    initTorch();
    initLongPress();
    initPullRefresh();
    initSwipe();
    initGate();
  });
})();
