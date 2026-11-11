import React from 'react';
import { buildBento } from './strategyBento.js';
import './strategy-bento.css';

/* Vue d'ensemble « Bento » de la stratégie d'Ariane (inspirée du composant BentoGridShowcase : une grande carte,
   quatre moyennes, une large). Réécrite en CSS pur : Gabriel n'utilise ni Tailwind ni framer-motion, l'apparition
   en cascade est une animation CSS. Chaque carte renvoie vers la section détaillée du rapport. */
function Lien({ carte, onOpen }) {
  if (!carte.lien || !onOpen) return null;
  return <button type="button" className="gv2-bento-link" onClick={() => onOpen(carte.lien)}>{carte.lienLabel} →</button>;
}

function Carte({ carte, onOpen }) {
  return <article className={`gv2-bento-card gv2-bento-card--${carte.slot}`} data-card={carte.key}>
    <h3 className="gv2-bento-title">{carte.titre}</h3>

    {carte.key === 'decision' && <>
      {carte.texte && <p className="gv2-bento-hero">{carte.texte}</p>}
      {carte.secondaire && <div className="gv2-bento-sub"><span>{carte.secondaire.label}</span><p>{carte.secondaire.texte}</p></div>}
      {carte.phases.length > 0 && <ol className="gv2-bento-phases">
        {carte.phases.map((p, i) => <li key={i}><b>{p.titre || `Phase ${i + 1}`}</b>{p.periode && <span>{p.periode}</span>}</li>)}
      </ol>}
    </>}

    {carte.items && <ul className="gv2-bento-list">{carte.items.map((x, i) => <li key={i}><span className="gv2-bento-clamp">{x}</span></li>)}</ul>}

    {carte.scores && <>
      <div className="gv2-bento-scores">
        {carte.scores.map(s => <div key={s.label} className="gv2-bento-score">
          <strong>{s.valeur}<small>%</small></strong>
          <span>{s.label}</span>
          <i style={{ '--v': `${Math.max(0, Math.min(100, s.valeur))}%` }} />
        </div>)}
      </div>
      {carte.verdict && <p className="gv2-bento-verdict">Relecture critique : <b>{carte.verdict}</b></p>}
    </>}

    {carte.actions && <ul className="gv2-bento-actions">
      {carte.actions.map((a, i) => <li key={i}>{a.label && <span>{a.label}</span>}<p>{a.texte}</p></li>)}
    </ul>}

    {carte.key === 'offre' && <>
      {carte.nom && <p className="gv2-bento-offer-name">{carte.nom}</p>}
      {carte.texte && <p className="gv2-bento-text">{carte.texte}</p>}
      {carte.prix && <p className="gv2-bento-price">{carte.prix}</p>}
      {carte.note && <p className="gv2-bento-note">{carte.note}</p>}
    </>}

    {carte.key === 'risques' && <div className="gv2-bento-two">
      {carte.risques.length > 0 && <div><h4>Risques</h4><ul className="gv2-bento-list">
        {carte.risques.map((r, i) => <li key={i}><span className="gv2-bento-clamp"><b>{r.risque}</b>{r.mitigation && <span> — {r.mitigation}</span>}</span></li>)}</ul></div>}
      {carte.questions.length > 0 && <div><h4>À clarifier</h4><ul className="gv2-bento-list">
        {carte.questions.map((q, i) => <li key={i}><span className="gv2-bento-clamp">{q}</span></li>)}</ul></div>}
    </div>}

    <Lien carte={carte} onOpen={onOpen} />
  </article>;
}

export function StrategyBento({ strategy, fmt, onOpenSection }) {
  const cartes = buildBento(strategy, fmt);
  if (!cartes.length) return null;
  return <section className="gv2-bento" aria-label="Vue d’ensemble de la stratégie">
    <div className="gv2-bento-head"><span className="gv2-ariane-label" style={{ color: 'var(--muted)' }}>Vue d’ensemble</span></div>
    <div className="gv2-bento-grid">
      {cartes.map((carte, i) => <div key={carte.key} className={`gv2-bento-slot gv2-bento-slot--${carte.slot}`} style={{ '--i': i }}>
        <Carte carte={carte} onOpen={onOpenSection} />
      </div>)}
    </div>
  </section>;
}
