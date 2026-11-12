/* Dates de l'historique : le serveur les envoie en « jj/mm/aaaa hh:mm ». */
import { describe, it, expect } from 'vitest';
import { lireDate } from '../dates.js';

describe('lireDate', () => {
  it('lit le format français : le 12/11 est le 12 novembre, pas le 11 décembre', () => {
    const d = lireDate('12/11/2026 16:45');
    expect([d.getDate(), d.getMonth() + 1, d.getFullYear(), d.getHours(), d.getMinutes()]).toEqual([12, 11, 2026, 16, 45]);
  });

  it('lit aussi les jours supérieurs à 12, qui devenaient « Invalid Date »', () => {
    const d = lireDate('25/11/2026 08:05');
    expect([d.getDate(), d.getMonth() + 1]).toEqual([25, 11]);
  });

  it('lit une date sans heure et le format ISO', () => {
    expect(lireDate('03/01/2027').getMonth()).toBe(0);
    expect(lireDate('2026-11-12T16:45:00').getDate()).toBe(12);
  });

  it('refuse les dates impossibles, vides ou illisibles plutôt que de les décaler', () => {
    expect(lireDate('31/02/2026 10:00')).toBeNull();
    expect(lireDate('')).toBeNull();
    expect(lireDate(null)).toBeNull();
    expect(lireDate('pas une date')).toBeNull();
  });
});
