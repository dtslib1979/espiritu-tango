/**
 * Body Interaction Protocol v1.0
 * "En este sistema, el botón no es la mano.
 *  Es el peso del cuerpo moviéndose."
 *
 * Scroll  = Acercarse (approach)
 * Tap     = Compromiso (commitment)
 * Hold    = Esperar (wait/sense)
 * Swipe   = Girar (turn/rotate)
 * Idle    = Respirar (breathe)
 * Back    = Soltar (release)
 */

(function() {
  'use strict';

  // ─── BPM Constants (70 BPM Tango Lento) ───
  const BEAT = 857;
  const HALF_BEAT = 428;
  const BREATH = 2571;

  // ─── Scroll = Acercarse ───
  function initAcercarse() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.revelar').forEach(el => observer.observe(el));
  }

  // ─── Hold = Esperar (Long Press) ───
  function initEsperar() {
    let timer;
    document.querySelectorAll('[data-secreto]').forEach(el => {
      el.addEventListener('touchstart', () => {
        timer = setTimeout(() => {
          el.classList.add('secreto-visible');
          el.setAttribute('aria-expanded', 'true');
        }, BEAT);
      }, { passive: true });

      el.addEventListener('touchend', () => clearTimeout(timer), { passive: true });
      el.addEventListener('touchmove', () => clearTimeout(timer), { passive: true });
    });
  }

  // ─── Idle = Respirar (3s idle detection) ───
  function initRespirar() {
    let idleTimer;
    const body = document.body;

    function resetIdle() {
      body.classList.remove('respirando');
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        body.classList.add('respirando');
      }, 3000);
    }

    ['touchstart', 'scroll', 'click'].forEach(evt => {
      document.addEventListener(evt, resetIdle, { passive: true });
    });

    resetIdle();
  }

  // ─── Swipe = Girar (Zone Navigation) ───
  function initGirar() {
    let startX = 0;
    let startTime = 0;

    document.addEventListener('touchstart', (e) => {
      startX = e.touches[0].pageX;
      startTime = Date.now();
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
      const diff = startX - e.changedTouches[0].pageX;
      const elapsed = Date.now() - startTime;

      if (Math.abs(diff) > 80 && elapsed < 500) {
        const direction = diff > 0 ? 'izquierda' : 'derecha';
        document.dispatchEvent(new CustomEvent('girar', {
          detail: { direction }
        }));
      }
    }, { passive: true });
  }

  // ─── Navigation between layers ───
  function initNavegación() {
    const layers = [
      '/tango-magenta/',
      '/tango-magenta/emisión/',
      '/tango-magenta/cuerpo/',
      '/tango-magenta/laboratorio/',
      '/tango-magenta/control/',
      '/tango-magenta/legado/'
    ];

    document.addEventListener('girar', (e) => {
      const current = window.location.pathname;
      const idx = layers.findIndex(l => current.endsWith(l) || current === l);
      if (idx === -1) return;

      let next;
      if (e.detail.direction === 'izquierda' && idx < layers.length - 1) {
        next = layers[idx + 1];
      } else if (e.detail.direction === 'derecha' && idx > 0) {
        next = layers[idx - 1];
      }

      if (next) {
        document.body.style.opacity = '0';
        document.body.style.transition = `opacity ${HALF_BEAT}ms var(--ease-retreat)`;
        setTimeout(() => { window.location.href = next; }, HALF_BEAT);
      }
    });
  }

  // ─── Init ───
  document.addEventListener('DOMContentLoaded', () => {
    initAcercarse();
    initEsperar();
    initRespirar();
    initGirar();
    initNavegación();
  });
})();
