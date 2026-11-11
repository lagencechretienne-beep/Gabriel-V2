import React, { useEffect, useState } from 'react';
import { ThinkingOrb } from 'thinking-orbs';
import './thinking-pill.css';

/* Orbe de réflexion (Libraries.dev « Orb », paquet thinking-orbs 0.3.2) : remplace le point qui pulse ou le
   sablier pendant que Gabriel travaille. `ThinkingPill` = l'orbe + le texte d'état qui brille, dans une
   pastille ; `ThinkingOrbMark` = l'orbe seule. Le texte reste lisible par les lecteurs d'écran
   (role="status") ; l'orbe est décorative. */

/** Lit le thème réel de l'application (classe gv2-theme-dark sur le shell) et le suit s'il change. */
function useShellDark() {
  const lire = () => (typeof document !== 'undefined'
    ? !document.querySelector('.gv2-shell')?.classList.contains('gv2-theme-light')
      && (document.querySelector('.gv2-shell')?.classList.contains('gv2-theme-dark') ?? true)
    : true);
  const [sombre, setSombre] = useState(lire);
  useEffect(() => {
    const shell = document.querySelector('.gv2-shell');
    if (!shell || typeof MutationObserver === 'undefined') return undefined;
    const observer = new MutationObserver(() => setSombre(lire()));
    observer.observe(shell, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);
  return sombre;
}

function useReducedMotion() {
  const [reduit, setReduit] = useState(() => typeof window !== 'undefined' && !!window.matchMedia
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const maj = () => setReduit(media.matches);
    media.addEventListener?.('change', maj);
    return () => media.removeEventListener?.('change', maj);
  }, []);
  return reduit;
}

export function ThinkingOrbMark({ state = 'working', size = 64 }) {
  const dark = useShellDark();
  const paused = useReducedMotion();
  return <span className="gv2-orb-mark" aria-hidden="true"><ThinkingOrb state={state} size={size} dark={dark} paused={paused} /></span>;
}

export function ThinkingPill({ state = 'working', size = 64, children }) {
  return <div className="gv2-thinking-pill" role="status" aria-live="polite">
    <ThinkingOrbMark state={state} size={size} />
    <span className="gv2-thinking-text">{children}</span>
  </div>;
}
