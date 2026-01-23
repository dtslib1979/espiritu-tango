/**
 * Compromiso — El momento de la decisión
 * "No ves el precio hasta que ya moviste el cuerpo."
 *
 * Full-screen transition triggered after reaching B5 (Legado).
 * Information reveals in BPM-timed sequence.
 */

(function() {
  'use strict';

  const BEAT = 857;
  const HALF_BEAT = 428;
  const BREATH = 2571;

  // Academy data
  const ACADEMIA = {
    name: 'Tango Magenta',
    coupon: 'Red Wine 1 Glass',
    classes: [
      { name: '생애 첫 탱고 입문 정규 클래스', price: '₩80,000' },
      { name: '원데이 클래스', price: '₩10,000' }
    ],
    address: '서울특별시 강남구',
    phone: '02-XXX-XXXX',
    hours: '평일 19:00–22:00 / 주말 14:00–18:00',
    station: '역삼역 3번 출구 도보 3분'
  };

  let triggered = false;
  let compromiso = null;

  // ─── Detect B5 (Legado) reach ───
  function initObserver() {
    const footer = document.querySelector('.pie');
    if (!footer) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !triggered) {
          showHandle();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(footer);
  }

  // ─── Pulsing Handle ───
  function showHandle() {
    if (document.getElementById('compromiso-handle')) return;

    const handle = document.createElement('div');
    handle.id = 'compromiso-handle';
    handle.innerHTML = '<span class="compromiso-pulse">¿Entrás?</span>';
    handle.addEventListener('click', openCompromiso);
    document.body.appendChild(handle);

    // Animate in
    requestAnimationFrame(() => {
      handle.classList.add('visible');
    });
  }

  // ─── Full Screen Compromiso ───
  function openCompromiso() {
    if (triggered) return;
    triggered = true;

    // Remove handle
    const handle = document.getElementById('compromiso-handle');
    if (handle) {
      handle.style.opacity = '0';
      setTimeout(() => handle.remove(), HALF_BEAT);
    }

    // Create full-screen world
    compromiso = document.createElement('div');
    compromiso.id = 'compromiso-world';
    compromiso.setAttribute('role', 'dialog');
    compromiso.setAttribute('aria-label', 'Compromiso');

    compromiso.innerHTML = buildHTML();
    document.body.appendChild(compromiso);

    // Animate entrance
    requestAnimationFrame(() => {
      compromiso.classList.add('active');
    });

    // Sequential reveal with BPM timing
    revealSequence();
  }

  function buildHTML() {
    return [
      '<div class="compromiso-container">',
      '  <button class="compromiso-back" id="compromiso-back" aria-label="Volver">✕</button>',
      '',
      '  <!-- Step 1: Question -->',
      '  <div class="compromiso-step step-1">',
      '    <p class="compromiso-whisper">COMPROMISO</p>',
      '    <h2 class="compromiso-monument">¿Entrás?</h2>',
      '  </div>',
      '',
      '  <!-- Step 2: Coupon -->',
      '  <div class="compromiso-step step-2" style="opacity:0; transform: translateY(20px);">',
      '    <div class="compromiso-coupon">',
      '      <p class="compromiso-coupon-label">PRIMERA VEZ</p>',
      '      <p class="compromiso-coupon-offer">' + ACADEMIA.coupon + '</p>',
      '      <p class="compromiso-coupon-sub">Tu primer tango viene con vino.</p>',
      '    </div>',
      '  </div>',
      '',
      '  <!-- Step 3: Classes -->',
      '  <div class="compromiso-step step-3" style="opacity:0; transform: translateY(20px);">',
      '    <div class="compromiso-class">',
      '      <p class="compromiso-class-name">' + ACADEMIA.classes[0].name + '</p>',
      '      <p class="compromiso-class-price">' + ACADEMIA.classes[0].price + '</p>',
      '    </div>',
      '    <div class="compromiso-class">',
      '      <p class="compromiso-class-name">' + ACADEMIA.classes[1].name + '</p>',
      '      <p class="compromiso-class-price">' + ACADEMIA.classes[1].price + '</p>',
      '    </div>',
      '  </div>',
      '',
      '  <!-- Step 4: Location -->',
      '  <div class="compromiso-step step-4" style="opacity:0; transform: translateY(20px);">',
      '    <p class="compromiso-info-line">' + ACADEMIA.station + '</p>',
      '    <p class="compromiso-info-line">' + ACADEMIA.hours + '</p>',
      '    <a href="tel:' + ACADEMIA.phone.replace(/-/g, '') + '" class="compromiso-door">',
      '      Llamar — ' + ACADEMIA.phone,
      '    </a>',
      '  </div>',
      '',
      '</div>'
    ].join('\n');
  }

  function revealSequence() {
    const steps = compromiso.querySelectorAll('.compromiso-step');

    // Step 1: Already visible (the question)
    // Step 2: After 1 breath
    setTimeout(() => {
      animateIn(steps[1]);
    }, BREATH);

    // Step 3: After 2 breaths
    setTimeout(() => {
      animateIn(steps[2]);
    }, BREATH * 2);

    // Step 4: After 3 breaths
    setTimeout(() => {
      animateIn(steps[3]);
    }, BREATH * 3);

    // Close button
    setTimeout(() => {
      document.getElementById('compromiso-back').addEventListener('click', closeCompromiso);
    }, 100);
  }

  function animateIn(el) {
    el.style.transition = 'opacity ' + BEAT + 'ms var(--ease-approach), transform ' + BEAT + 'ms var(--ease-approach)';
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  }

  function closeCompromiso() {
    compromiso.classList.remove('active');
    compromiso.classList.add('closing');
    setTimeout(() => {
      compromiso.remove();
      triggered = false;
    }, BEAT);
  }

  // ─── Inject Styles ───
  function injectStyles() {
    const style = document.createElement('style');
    style.id = 'compromiso-styles';
    style.textContent = [
      '/* ─── Handle ─── */',
      '#compromiso-handle {',
      '  position: fixed;',
      '  bottom: 90px;',
      '  left: 50%;',
      '  transform: translateX(-50%) translateY(20px);',
      '  opacity: 0;',
      '  transition: opacity 0.8s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);',
      '  z-index: 80;',
      '  cursor: pointer;',
      '  -webkit-tap-highlight-color: transparent;',
      '}',
      '#compromiso-handle.visible {',
      '  opacity: 1;',
      '  transform: translateX(-50%) translateY(0);',
      '}',
      '.compromiso-pulse {',
      '  display: inline-block;',
      '  font-family: var(--font-monument);',
      '  font-size: 0.9rem;',
      '  color: var(--tango-magenta);',
      '  padding: 10px 24px;',
      '  border: 1px solid rgba(233, 30, 99, 0.4);',
      '  border-radius: 24px;',
      '  background: rgba(10, 0, 8, 0.9);',
      '  backdrop-filter: blur(12px);',
      '  -webkit-backdrop-filter: blur(12px);',
      '  animation: compromisoGlow 2.571s ease-in-out infinite;',
      '}',
      '@keyframes compromisoGlow {',
      '  0%, 100% { box-shadow: 0 0 0 0 rgba(233, 30, 99, 0); border-color: rgba(233, 30, 99, 0.2); }',
      '  50% { box-shadow: 0 0 30px rgba(233, 30, 99, 0.3); border-color: rgba(233, 30, 99, 0.6); }',
      '}',
      '',
      '/* ─── Full Screen World ─── */',
      '#compromiso-world {',
      '  position: fixed;',
      '  inset: 0;',
      '  background: var(--tango-void);',
      '  z-index: 300;',
      '  overflow-y: auto;',
      '  opacity: 0;',
      '  transform: scale(1.05);',
      '  transition: opacity 0.857s var(--ease-approach), transform 0.857s var(--ease-approach);',
      '}',
      '#compromiso-world.active {',
      '  opacity: 1;',
      '  transform: scale(1);',
      '}',
      '#compromiso-world.closing {',
      '  opacity: 0;',
      '  transform: scale(0.95);',
      '  transition: opacity 0.428s var(--ease-retreat), transform 0.428s var(--ease-retreat);',
      '}',
      '',
      '.compromiso-container {',
      '  max-width: 430px;',
      '  margin: 0 auto;',
      '  padding: 80px 24px 120px;',
      '  min-height: 100dvh;',
      '  display: flex;',
      '  flex-direction: column;',
      '  justify-content: center;',
      '  gap: 48px;',
      '}',
      '',
      '.compromiso-back {',
      '  position: fixed;',
      '  top: 20px;',
      '  right: 20px;',
      '  width: 40px;',
      '  height: 40px;',
      '  border-radius: 50%;',
      '  border: 1px solid rgba(240, 232, 236, 0.2);',
      '  background: transparent;',
      '  color: var(--tango-dim);',
      '  font-size: 1.2rem;',
      '  cursor: pointer;',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  -webkit-tap-highlight-color: transparent;',
      '  transition: border-color 0.3s;',
      '}',
      '.compromiso-back:active {',
      '  border-color: var(--tango-magenta);',
      '}',
      '',
      '/* ─── Steps ─── */',
      '.compromiso-step { text-align: center; }',
      '',
      '.compromiso-whisper {',
      '  font-size: 0.7rem;',
      '  letter-spacing: 0.2em;',
      '  text-transform: uppercase;',
      '  color: var(--tango-magenta);',
      '  margin-bottom: 12px;',
      '}',
      '',
      '.compromiso-monument {',
      '  font-family: var(--font-monument);',
      '  font-size: clamp(2.5rem, 12vw, 5rem);',
      '  font-weight: 900;',
      '  color: var(--tango-glow);',
      '  letter-spacing: -0.03em;',
      '}',
      '',
      '/* ─── Coupon ─── */',
      '.compromiso-coupon {',
      '  background: linear-gradient(135deg, rgba(233, 30, 99, 0.08), rgba(136, 14, 79, 0.12));',
      '  border: 1px solid rgba(233, 30, 99, 0.25);',
      '  border-radius: 16px;',
      '  padding: 24px;',
      '  text-align: center;',
      '}',
      '.compromiso-coupon-label {',
      '  font-size: 0.65rem;',
      '  letter-spacing: 0.15em;',
      '  text-transform: uppercase;',
      '  color: var(--tango-magenta);',
      '  margin-bottom: 8px;',
      '}',
      '.compromiso-coupon-offer {',
      '  font-family: var(--font-monument);',
      '  font-size: 1.5rem;',
      '  color: var(--tango-glow);',
      '  font-weight: 700;',
      '}',
      '.compromiso-coupon-sub {',
      '  font-size: 0.8rem;',
      '  color: var(--tango-dim);',
      '  margin-top: 8px;',
      '}',
      '',
      '/* ─── Classes ─── */',
      '.compromiso-class {',
      '  display: flex;',
      '  justify-content: space-between;',
      '  align-items: center;',
      '  padding: 16px 20px;',
      '  background: var(--tango-smoke);',
      '  border: 1px solid rgba(233, 30, 99, 0.08);',
      '  border-radius: 12px;',
      '  margin-bottom: 8px;',
      '}',
      '.compromiso-class-name {',
      '  font-size: 0.85rem;',
      '  color: var(--tango-glow);',
      '  flex: 1;',
      '}',
      '.compromiso-class-price {',
      '  font-family: var(--font-monument);',
      '  font-size: 1.1rem;',
      '  color: var(--tango-magenta);',
      '  font-weight: 600;',
      '  margin-left: 16px;',
      '}',
      '',
      '/* ─── Info ─── */',
      '.compromiso-info-line {',
      '  font-size: 0.8rem;',
      '  color: var(--tango-dim);',
      '  margin-bottom: 8px;',
      '  text-align: center;',
      '}',
      '.compromiso-door {',
      '  display: block;',
      '  margin-top: 20px;',
      '  padding: 16px;',
      '  background: rgba(233, 30, 99, 0.12);',
      '  border: 1px solid rgba(233, 30, 99, 0.4);',
      '  border-radius: 12px;',
      '  color: var(--tango-glow);',
      '  font-family: var(--font-voice);',
      '  font-size: 1rem;',
      '  text-decoration: none;',
      '  text-align: center;',
      '  transition: all 0.428s var(--ease-approach);',
      '  -webkit-tap-highlight-color: transparent;',
      '}',
      '.compromiso-door:active {',
      '  background: rgba(233, 30, 99, 0.25);',
      '  transform: scale(0.97);',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  // ─── Init ───
  function init() {
    injectStyles();
    initObserver();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
