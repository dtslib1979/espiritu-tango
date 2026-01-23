/**
 * Entrada — Ritual de Ingreso
 * "La entrada no es un click. Es una ceremonia."
 *
 * Step 0: Oscuridad absoluta (3 segundos)
 * Step 1: "Respirá despacio." (aparece lentamente)
 * Step 2: La pantalla despierta al ritmo del corazón
 * Step 3: El monumento aparece
 * Step 4: "Entrá." — una sola puerta
 */

(function() {
  'use strict';

  const BEAT = 857;
  const BREATH = 2571;

  function initEntrada() {
    const ritual = document.querySelector('.ritual-oscuridad');
    if (!ritual) return;

    // Si ya visitó en esta sesión, saltar ritual
    if (sessionStorage.getItem('tango_entered') === 'true') {
      ritual.classList.add('despierta');
      return;
    }

    // Step 0: 3 segundos de oscuridad absoluta
    // Step 1: Texto aparece (handled by CSS animation-delay: 3s)

    // Step 2: Después del texto, esperar un respiro más
    setTimeout(() => {
      ritual.classList.add('despierta');
      sessionStorage.setItem('tango_entered', 'true');
    }, 3000 + BREATH + BEAT);
  }

  // Ejecutar inmediatamente (no esperar DOMContentLoaded para el ritual)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEntrada);
  } else {
    initEntrada();
  }
})();
