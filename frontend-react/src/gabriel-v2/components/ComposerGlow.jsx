import React, { useEffect, useState } from 'react';
import { VoiceBeam } from 'voice-glow';

/* Lueur sonore (Libraries.dev « Voice », paquet voice-glow 0.3.0) autour du champ de saisie du Créateur
   et d'Ariane. `processing` fait voyager un faisceau pendant que Gabriel travaille — une génération du
   Créateur dure plusieurs minutes. Sur téléphone, la géométrie « mobile » est conçue pour le bas d'écran.
   Teinte « gold » = le champagne de Gabriel. Les animations sont mises en pause si l'utilisateur a demandé
   de les réduire. */
function useMedia(requete) {
  const lire = () => (typeof window !== 'undefined' && window.matchMedia ? window.matchMedia(requete).matches : false);
  const [vrai, setVrai] = useState(lire);
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const media = window.matchMedia(requete);
    const maj = () => setVrai(media.matches);
    maj();
    media.addEventListener?.('change', maj);
    return () => media.removeEventListener?.('change', maj);
  }, [requete]);
  return vrai;
}

export function ComposerGlow({ processing = false, level, stream, children }) {
  const telephone = useMedia('(max-width: 640px)');
  const reduit = useMedia('(prefers-reduced-motion: reduce)');
  return <VoiceBeam
    type={telephone ? 'mobile' : 'default'}
    colorVariant="gold"
    theme="auto"
    processing={processing}
    paused={reduit}
    stream={stream}
    level={level}>
    {children}
  </VoiceBeam>;
}
