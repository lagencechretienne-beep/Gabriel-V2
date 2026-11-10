/**
 * Adaptation téléphone : les règles qui évitent les défauts constatés le 10/11/2026 à 375 px
 * (texte du Créateur coupé, sommaire d'Ariane avec 168 px de vide, cibles de 19-24 px, résultats du
 * Psychologue pincés par 40 px de marge). Une feuille de style ne se teste pas dans jsdom : on vérifie
 * que les règles existent et sont portées par la bonne requête, pour qu'une refonte ne les retire pas en silence.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const CSS = readFileSync(resolve(process.cwd(), 'src/gabriel-v2/styles.css'), 'utf-8');

/** Corps d'un bloc @media (max-width: N px) contenant `marqueur`. */
function blocMobile(marqueur) {
  const i = CSS.indexOf(marqueur);
  expect(i, `règle introuvable : ${marqueur}`).toBeGreaterThan(-1);
  const debut = CSS.lastIndexOf('@media (max-width: 640px)', i);
  expect(debut, `« ${marqueur} » doit être dans une requête @media (max-width: 640px)`).toBeGreaterThan(-1);
  return CSS.slice(debut, i + marqueur.length + 200);
}

describe('Adaptation téléphone', () => {
  it('le document du Créateur ne s’élargit plus au contenu (colonne minmax(0, 1fr))', () => {
    expect(CSS).toMatch(/\.gv2-cdoc\s*\{\s*grid-template-columns:\s*minmax\(0,\s*1fr\)/);
  });

  it('la barre des agents a des pastilles tactiles de 44 px', () => {
    expect(blocMobile('.gv2-tabs button { min-height: 44px')).toContain('min-height: 44px');
  });

  it('le sommaire d’Ariane ne garde plus sa hauteur de 168 px de la version ordinateur', () => {
    expect(blocMobile('.gv2-ariane-report-nav { flex: 0 0 auto !important')).toContain('flex: 0 0 auto !important');
  });

  it('les résultats du Psychologue prennent la pleine largeur utile (marges de 14 px)', () => {
    expect(blocMobile('.gv2-psy-result, .gv2-psy-loading, .gv2-psy-error { padding: 16px 14px')).toContain('16px 14px');
  });

  it('la saisie est à 16 px (iOS zoomerait sinon) et la zone de saisie d’Ariane reste en bas', () => {
    expect(blocMobile('input, textarea, select { font-size: 16px !important; }')).toContain('font-size: 16px');
    expect(blocMobile('.gv2-strat-composer-zone { position: sticky; bottom: 0')).toContain('position: sticky');
  });
});
