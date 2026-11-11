import '@testing-library/jest-dom/vitest';

/* La lueur sonore (voice-glow) dessine en SVG/canvas avec des API que jsdom n'a pas (baseVal, matchMedia).
   Dans les tests elle devient un simple conteneur : on teste la saisie, pas l'animation. */
import { vi } from 'vitest';
vi.mock('voice-glow', () => ({
  VoiceBeam: ({ children }) => children,
  useMicrophone: () => ({ state: 'idle', stream: null, start: () => {}, stop: () => {} }),
}));
