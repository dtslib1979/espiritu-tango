/**
 * Translation Overlay — 번역 안내
 * 모든 페이지에서 브라우저 번역 기능을 유도하는 오버레이
 * Chrome / Edge(Bing) / Samsung Internet 호환
 */

(function() {
  'use strict';

  // 이미 닫았으면 다시 안 보여줌
  if (sessionStorage.getItem('tango_translate_dismissed') === 'true') return;

  // 이미 한국어 번역된 상태면 안 보여줌
  if (document.documentElement.lang === 'ko' || navigator.language.startsWith('ko') === false) {
    // 한국어 사용자에게만 표시
    if (!navigator.language.startsWith('ko')) return;
  }

  var overlay = document.createElement('div');
  overlay.id = 'translate-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', '번역 안내');
  overlay.innerHTML = [
    '<div class="translate-box">',
    '  <p class="translate-flag">🇰🇷</p>',
    '  <h2 class="translate-title">한국어로 읽기</h2>',
    '  <p class="translate-desc">이 사이트는 아르헨티나 스페인어로 작성되었습니다.<br>브라우저 번역 기능으로 한국어로 전환하세요.</p>',
    '  <div class="translate-steps">',
    '    <div class="translate-step">',
    '      <p class="translate-step-label">Chrome</p>',
    '      <p class="translate-step-text">주소창 오른쪽 번역 아이콘 🌐 클릭<br>→ "한국어로 번역"</p>',
    '    </div>',
    '    <div class="translate-step">',
    '      <p class="translate-step-label">Edge / Bing</p>',
    '      <p class="translate-step-text">주소창 오른쪽 번역 아이콘 클릭<br>→ "한국어로 번역" 또는 자동 감지</p>',
    '    </div>',
    '    <div class="translate-step">',
    '      <p class="translate-step-label">모바일</p>',
    '      <p class="translate-step-text">하단 팝업 "이 페이지를 번역하시겠습니까?" → 번역</p>',
    '    </div>',
    '  </div>',
    '  <button class="translate-close" id="translate-close">확인 — 번역 설정하기</button>',
    '  <button class="translate-skip" id="translate-skip">원문 그대로 보기</button>',
    '</div>'
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = [
    '#translate-overlay {',
    '  position: fixed;',
    '  inset: 0;',
    '  background: rgba(10, 0, 8, 0.95);',
    '  z-index: 9999;',
    '  display: flex;',
    '  align-items: center;',
    '  justify-content: center;',
    '  padding: 24px;',
    '  animation: tOverlayIn 0.5s ease;',
    '}',
    '@keyframes tOverlayIn {',
    '  from { opacity: 0; }',
    '  to { opacity: 1; }',
    '}',
    '.translate-box {',
    '  max-width: 380px;',
    '  width: 100%;',
    '  text-align: center;',
    '  padding: 32px 24px;',
    '}',
    '.translate-flag {',
    '  font-size: 3rem;',
    '  margin-bottom: 16px;',
    '}',
    '.translate-title {',
    '  font-family: "Playfair Display", serif;',
    '  font-size: 1.5rem;',
    '  font-weight: 700;',
    '  color: #f0e8ec;',
    '  margin-bottom: 12px;',
    '}',
    '.translate-desc {',
    '  font-size: 0.9rem;',
    '  color: rgba(240, 232, 236, 0.6);',
    '  line-height: 1.6;',
    '  margin-bottom: 24px;',
    '}',
    '.translate-steps {',
    '  text-align: left;',
    '  margin-bottom: 24px;',
    '}',
    '.translate-step {',
    '  background: #1a1118;',
    '  border: 1px solid rgba(233, 30, 99, 0.15);',
    '  border-radius: 12px;',
    '  padding: 12px 16px;',
    '  margin-bottom: 8px;',
    '}',
    '.translate-step-label {',
    '  font-size: 0.7rem;',
    '  text-transform: uppercase;',
    '  letter-spacing: 0.1em;',
    '  color: #E91E63;',
    '  margin-bottom: 4px;',
    '  font-weight: 500;',
    '}',
    '.translate-step-text {',
    '  font-size: 0.8rem;',
    '  color: rgba(240, 232, 236, 0.7);',
    '  line-height: 1.5;',
    '}',
    '.translate-close {',
    '  display: block;',
    '  width: 100%;',
    '  padding: 14px;',
    '  background: rgba(233, 30, 99, 0.15);',
    '  border: 1px solid rgba(233, 30, 99, 0.4);',
    '  border-radius: 12px;',
    '  color: #f0e8ec;',
    '  font-size: 0.9rem;',
    '  font-weight: 500;',
    '  cursor: pointer;',
    '  margin-bottom: 8px;',
    '  -webkit-tap-highlight-color: transparent;',
    '}',
    '.translate-close:active {',
    '  background: rgba(233, 30, 99, 0.3);',
    '}',
    '.translate-skip {',
    '  display: block;',
    '  width: 100%;',
    '  padding: 10px;',
    '  background: transparent;',
    '  border: none;',
    '  color: rgba(240, 232, 236, 0.4);',
    '  font-size: 0.75rem;',
    '  cursor: pointer;',
    '  -webkit-tap-highlight-color: transparent;',
    '}',
    '.translate-skip:active {',
    '  color: rgba(240, 232, 236, 0.7);',
    '}'
  ].join('\n');

  document.head.appendChild(style);
  document.body.appendChild(overlay);

  function dismiss() {
    sessionStorage.setItem('tango_translate_dismissed', 'true');
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.4s ease';
    setTimeout(function() {
      overlay.remove();
    }, 400);
  }

  document.getElementById('translate-close').addEventListener('click', dismiss);
  document.getElementById('translate-skip').addEventListener('click', dismiss);
})();
