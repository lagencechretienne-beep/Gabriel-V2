import React, { useMemo } from 'react';
import { TactileGlassFx } from 'tactile-glass-ui';

/* Surface « verre optique » (réfraction WebGL2, paquet tactile-glass-ui) avec repli CSS.
   - Utilisée avec parcimonie : un seul élément de verre par zone d'écran.
   - Repli automatique (surface CSS translucide déjà stylée) si WebGL2 manque, si le visiteur
     préfère moins de mouvement, ou si on coupe l'effet : localStorage 'gabriel_glass_fx' = '0'. */
function verreDisponible() {
  try {
    if (typeof window === 'undefined' || !window.WebGL2RenderingContext) return false;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return window.localStorage.getItem('gabriel_glass_fx') !== '0';
  } catch (_) { return false; }
}

export function GlassFx({ children, className = '', radius = 28, ...optique }) {
  const actif = useMemo(verreDisponible, []);
  if (!actif) return <div className={`gv2-glassfx ${className}`.trim()}>{children}</div>;
  return <TactileGlassFx className={`gv2-glassfx is-webgl ${className}`.trim()}
    style={{ display: 'block', borderRadius: radius }} bevelWidth={0} hoverBrightness={138} {...optique}>
    {children}
  </TactileGlassFx>;
}
