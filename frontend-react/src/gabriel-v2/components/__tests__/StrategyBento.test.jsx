/* Vue d'ensemble Bento de la stratégie : les six cartes viennent de la stratégie réelle d'Ariane,
   une carte sans donnée n'existe pas, et rien n'est inventé. */
import React from 'react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StrategyBento } from '../StrategyBento.jsx';
import { buildBento } from '../strategyBento.js';

// Forme relevée sur une vraie stratégie (09/11/2026) : objets, listes, Markdown, deux scores.
const STRATEGIE = {
  executive_decision: { one_sentence_decision: 'Lancer un **audit IA locale express** (30 min).', confidence_score: 0.9,
    what_to_do_this_week: 'Publier une vidéo LinkedIn de 90 secondes.' },
  decision_centrale: 'Lancer un audit express pour diagnostiquer les blocages techniques.',
  message_central: "Tu bloques sur la technique ? En 30 minutes, 3 actions faites pour toi.",
  plan_90_jours: { phase_1: { titre: 'Fondations', periode: 'Jours 1-30' }, phase_2: { titre: 'Traction', periode: 'Jours 31-60' } },
  indicateurs_succes: ['Taux de conversion diagnostic → vente', 'Nombre de membres actifs', 'Revenus de l’offre principale', 'Satisfaction clients', 'Un cinquième'],
  critique_strategique: { confidence_score_independant: 0.7, verdict: 'À ajuster : dépendance à un seul canal' },
  immediate_monetization_plan: { next_24h_action: 'Créer le formulaire.', next_7_days_action: ['Publier la vidéo', 'Relayer dans 2 groupes'] },
  offre_recommandee: { nom: 'Audit IA Locale Express', promesse: '3 actions concrètes en 30 minutes.', prix_recommande: '[montant à définir]',
    justification_prix: 'Entre le guide et la visio.' },
  risques: [{ risque: 'Faible conversion', mitigation: 'Personnaliser le diagnostic' }, { risque: 'Concurrence gratuite' }],
  questions_a_clarifier: ['Quel budget alloué ?'],
  social_media_decision: { first_post_or_video_to_create: { titre: 'L’erreur qui fait perdre 3h' } },
};
const fmt = v => (v && typeof v === 'object' ? JSON.stringify(v) : String(v)).replace(/\*\*(.+?)\*\*/g, '$1');

afterEach(cleanup);

describe('buildBento', () => {
  it('compose les six cartes à partir de la stratégie réelle', () => {
    const cartes = buildBento(STRATEGIE, fmt);
    expect(cartes.map(c => c.slot)).toEqual(['integration', 'trackers', 'statistic', 'focus', 'productivity', 'shortcuts']);
    expect(cartes[0].texte).toBe('Lancer un audit IA locale express (30 min).');       // Markdown retiré
    expect(cartes[0].phases).toHaveLength(2);
    expect(cartes[1].items).toHaveLength(4);                                            // 4 indicateurs au plus
    expect(cartes[2].scores.map(s => s.valeur)).toEqual([90, 70]);
    expect(cartes[2].verdict).toBe('À ajuster');
    expect(cartes[3].actions.map(a => a.texte)).toEqual(['Publier une vidéo LinkedIn de 90 secondes.', 'Créer le formulaire.', 'Publier la vidéo', 'Relayer dans 2 groupes']);
    expect(cartes[4].nom).toBe('Audit IA Locale Express');
    expect(cartes[5].risques[1]).toEqual({ risque: 'Concurrence gratuite', mitigation: '' });
  });

  it('n’invente rien : sans donnée, la carte n’existe pas', () => {
    expect(buildBento({}, fmt)).toEqual([]);
    expect(buildBento(null, fmt)).toEqual([]);
    const cartes = buildBento({ decision_centrale: 'Une décision.', indicateurs_succes: [] }, fmt);
    expect(cartes.map(c => c.key)).toEqual(['decision']);
  });

  it('accepte un score en pourcentage ou en fraction', () => {
    expect(buildBento({ executive_decision: { confidence_score: 82 } }, fmt)[0].scores[0].valeur).toBe(82);
    expect(buildBento({ executive_decision: { confidence_score: 0.82 } }, fmt)[0].scores[0].valeur).toBe(82);
  });
});

describe('StrategyBento', () => {
  it('affiche les cartes avec leurs libellés, sans « [object Object] »', () => {
    render(<StrategyBento strategy={STRATEGIE} fmt={fmt} onOpenSection={() => {}} />);
    const vue = screen.getByRole('region', { name: /Vue d’ensemble de la stratégie/ });
    for (const titre of ['Décision prioritaire', 'À mesurer', 'Solidité de la décision', 'À faire maintenant', 'Offre recommandée', 'Risques et points à clarifier']) {
      expect(within(vue).getByRole('heading', { name: titre })).toBeInTheDocument();
    }
    expect(vue).toHaveTextContent('Audit IA Locale Express');
    expect(vue).toHaveTextContent('90%');
    expect(vue).not.toHaveTextContent('[object Object]');
    expect(vue).not.toHaveTextContent('**');
  });

  it('chaque carte renvoie vers sa section détaillée', async () => {
    const ouvrir = vi.fn();
    render(<StrategyBento strategy={STRATEGIE} fmt={fmt} onOpenSection={ouvrir} />);
    await userEvent.click(screen.getByRole('button', { name: /Voir le plan à 90 jours/ }));
    await userEvent.click(screen.getByRole('button', { name: /Voir l'offre en détail/ }));
    expect(ouvrir.mock.calls.map(c => c[0])).toEqual(['plan', 'marketing']);
  });

  it('ne rend rien sans stratégie exploitable', () => {
    const { container } = render(<StrategyBento strategy={{}} fmt={fmt} />);
    expect(container).toBeEmptyDOMElement();
  });
});
