/* Vue d'ensemble de la stratégie d'Ariane : choisit, dans la stratégie RÉELLE, ce qui compose les six cartes
   de la grille Bento. Rien n'est inventé : une carte sans donnée n'existe pas. Fonction pure, testée à part.
   `fmt` = le formateur de texte de StrategeView (retire le Markdown, aplatit les objets). */

const liste = v => (Array.isArray(v) ? v : v == null || v === '' ? [] : [v]);
const pct = v => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.round(n <= 1 ? n * 100 : n) : null;
};

export function buildBento(d, fmt = String) {
  if (!d || typeof d !== 'object') return [];
  const t = v => fmt(v).trim();
  const ed = d.executive_decision || {};
  const imp = d.immediate_monetization_plan || {};
  const crit = d.critique_strategique || {};
  const offre = d.offre_recommandee || d.offer_recommendation || {};
  const cartes = [];

  // 1 · Décision prioritaire + plan (grande carte)
  const decision = t(ed.one_sentence_decision || d.decision_centrale || d.message_central || '');
  const plan = d.plan_90_jours && typeof d.plan_90_jours === 'object' ? d.plan_90_jours : {};
  const phases = ['phase_1', 'phase_2', 'phase_3'].map(k => plan[k]).filter(Boolean)
    .map(p => ({ titre: t(p.titre || ''), periode: t(p.periode || '') })).filter(p => p.titre || p.periode);
  const messageCentral = t(d.message_central || '');
  if (decision || phases.length) {
    cartes.push({ key: 'decision', slot: 'integration', titre: 'Décision prioritaire', texte: decision,
      secondaire: messageCentral && messageCentral !== decision ? { label: 'Message central', texte: messageCentral } : null,
      phases, lien: 'plan', lienLabel: 'Voir le plan à 90 jours' });
  }

  // 2 · Indicateurs de succès
  const indicateurs = liste(d.indicateurs_succes).map(t).filter(Boolean);
  if (indicateurs.length) cartes.push({ key: 'indicateurs', slot: 'trackers', titre: 'À mesurer', items: indicateurs.slice(0, 4), lien: 'decision', lienLabel: 'Tous les indicateurs' });

  // 3 · Deux lectures de la décision (stratège + relecture critique)
  const scoreStratege = pct(ed.confidence_score);
  const scoreCritique = pct(crit.confidence_score_independant);
  const verdict = String(crit.verdict || '').toLowerCase();
  if (scoreStratege !== null || scoreCritique !== null) {
    cartes.push({ key: 'scores', slot: 'statistic', titre: 'Solidité de la décision',
      scores: [scoreStratege !== null && { label: 'Stratège', valeur: scoreStratege }, scoreCritique !== null && { label: 'Relecture critique', valeur: scoreCritique }].filter(Boolean),
      verdict: verdict.includes('fragile') ? 'Fragile' : verdict.includes('ajust') ? 'À ajuster' : verdict ? 'Solide' : '',
      lien: 'decision', lienLabel: 'Voir le regard critique' });
  }

  // 4 · Focus : cette semaine
  const focus = [
    ed.what_to_do_this_week && { label: 'Cette semaine', texte: t(ed.what_to_do_this_week) },
    imp.next_24h_action && { label: 'Dans les 24 h', texte: t(imp.next_24h_action) },
    ...liste(imp.next_7_days_action).slice(0, 3).map((a, i) => ({ label: i === 0 ? 'Sous 7 jours' : '', texte: t(a) })),
  ].filter(x => x && x.texte);
  if (focus.length) cartes.push({ key: 'focus', slot: 'focus', titre: 'À faire maintenant', actions: focus, lien: 'plan', lienLabel: 'Toutes les priorités' });

  // 5 · Offre et prix
  const nomOffre = t(offre.nom || offre.name || '');
  const promesse = t(offre.promesse || offre.promise || '');
  const prix = t(offre.prix_recommande || '');
  const logiquePrix = t((d.pricing_logic && (d.pricing_logic.pricing_reasoning || d.pricing_logic.justification)) || offre.justification_prix || '');
  if (nomOffre || promesse || prix || logiquePrix) {
    cartes.push({ key: 'offre', slot: 'productivity', titre: 'Offre recommandée', nom: nomOffre, texte: promesse, prix, note: logiquePrix, lien: 'marketing', lienLabel: "Voir l'offre en détail" });
  }

  // 6 · Risques et points à clarifier (carte large)
  const risques = liste(d.risques).slice(0, 3).map(r => (typeof r === 'object' && r ? { risque: t(r.risque || ''), mitigation: t(r.mitigation || '') } : { risque: t(r), mitigation: '' })).filter(r => r.risque);
  const questions = liste(d.questions_a_clarifier).map(t).filter(Boolean).slice(0, 3);
  if (risques.length || questions.length) cartes.push({ key: 'risques', slot: 'shortcuts', titre: 'Risques et points à clarifier', risques, questions, lien: 'decision', lienLabel: 'Voir la décision complète' });

  return cartes;
}
