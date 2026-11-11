/* Pastille « Gabriel réfléchit » (orbe thinking-orbs + texte qui brille). L'orbe elle-même est simulée dans
   les tests (jsdom n'a pas de rendu graphique) : on vérifie ce qui nous appartient — le texte d'état annoncé
   aux lecteurs d'écran, les états demandés à l'orbe, et leur branchement dans le Créateur et Ariane. */
import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';

const orbe = vi.fn(() => null);
vi.mock('thinking-orbs', () => ({ ThinkingOrb: props => { orbe(props); return null; } }));

import { ThinkingPill, ThinkingOrbMark } from '../ThinkingPill.jsx';

afterEach(() => { cleanup(); orbe.mockClear(); });

describe('ThinkingPill', () => {
  it('annonce le texte d’état comme un statut lisible par les lecteurs d’écran', () => {
    render(<ThinkingPill state="composing">Le Créateur prépare votre contenu…</ThinkingPill>);
    expect(screen.getByRole('status')).toHaveTextContent('Le Créateur prépare votre contenu…');
  });

  it('demande à l’orbe l’état et la taille voulus, et la cache aux lecteurs d’écran', () => {
    const { container } = render(<ThinkingPill state="weaving" size={64}>Ariane structure votre réponse…</ThinkingPill>);
    expect(orbe).toHaveBeenCalledWith(expect.objectContaining({ state: 'weaving', size: 64 }));
    expect(container.querySelector('.gv2-orb-mark')).toHaveAttribute('aria-hidden', 'true');
  });

  it('l’orbe seule est décorative et ne porte aucun texte', () => {
    const { container } = render(<ThinkingOrbMark state="solving" />);
    expect(container.textContent).toBe('');
    expect(orbe).toHaveBeenCalledWith(expect.objectContaining({ state: 'solving' }));
  });
});
