/**
 * Entrada — Ritual de Ingreso v3.0
 *
 * The entrance is not a click. It's a ceremony.
 * But ceremonies can be skipped by those who know.
 *
 * Timeline:
 *   0.0s  — Absolute darkness
 *   2.5s  — "Respirá despacio." fades in (CSS animation-delay)
 *   5.4s  — Ritual fades out, system awakens
 *
 * Skip: Button appears at 1s for returning-energy users.
 * Session: Once entered, ritual is instant on revisit.
 */

(function() {
  'use strict';

  const BEAT = 857;
  const BREATH = 2571;
  const TOTAL = 2500 + BREATH;

  function init() {
    const ritual = document.querySelector('.ritual');
    if (!ritual) return;

    // Skip for returning visitors
    if (sessionStorage.getItem('tango_entered') === 'true') {
      ritual.classList.add('despierta');
      return;
    }

    // Skip button
    const skipBtn = ritual.querySelector('.ritual-saltar');
    if (skipBtn) {
      skipBtn.addEventListener('click', () => awaken(ritual), { once: true });
    }

    // Natural timeline: darkness → text → awaken
    const timer = setTimeout(() => awaken(ritual), TOTAL);

    // Store timer reference for skip cleanup
    ritual._timer = timer;
  }

  function awaken(ritual) {
    if (ritual.classList.contains('despierta')) return;

    clearTimeout(ritual._timer);
    ritual.classList.add('despierta');
    sessionStorage.setItem('tango_entered', 'true');

    // Clean up after transition
    ritual.addEventListener('transitionend', () => {
      ritual.setAttribute('aria-hidden', 'true');
    }, { once: true });
  }

  // Execute immediately — ritual must block before first paint
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
