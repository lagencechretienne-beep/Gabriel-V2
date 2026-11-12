/* Le serveur envoie les dates au format français « 12/11/2026 16:45 » ; new Date() les lit au format américain
   (mois/jour) : le 12 novembre devenait « 11 déc. », et tout jour après le 12 donnait « Invalid Date » — la date
   disparaissait de l'historique (constaté le 12/11/2026). On lit explicitement le format français, puis l'ISO. */
export function lireDate(valeur) {
  if (!valeur) return null;
  if (valeur instanceof Date) return Number.isNaN(valeur.getTime()) ? null : valeur;
  const texte = String(valeur).trim();
  const fr = texte.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:[ T](\d{1,2}):(\d{2})(?::(\d{2}))?)?$/);
  if (fr) {
    const [, jour, mois, annee, h = '0', mn = '0', s = '0'] = fr;
    const d = new Date(Number(annee), Number(mois) - 1, Number(jour), Number(h), Number(mn), Number(s));
    // « 31/02/2026 » ne doit pas devenir un 3 mars : on refuse les dates qui ne tombent pas sur le jour demandé.
    return d.getDate() === Number(jour) && d.getMonth() === Number(mois) - 1 ? d : null;
  }
  const d = new Date(texte);
  return Number.isNaN(d.getTime()) ? null : d;
}
