/* Helpers repris tels quels du code réel (PsychologueView.jsx), typés. */
import { createElement, type ReactNode } from "react";
import type { PsyPlatform, SourcePreview, SuggestMode } from "./types";

export const LINK_SOURCES: Record<string, { label: string; mark: string; placeholder: string; example: string }> = {
  youtube: { label: "YouTube", mark: "▶", placeholder: "Collez le lien de la vidéo YouTube ici…", example: "Exemple : youtube.com/watch?v=…" },
  instagram: { label: "Instagram", mark: "◎", placeholder: "Collez le lien de la publication Instagram ici…", example: "Exemple : instagram.com/reel/…" },
  tiktok: { label: "TikTok", mark: "♪", placeholder: "Collez le lien de la vidéo TikTok ici…", example: "Exemple : tiktok.com/@compte/video/…" },
};
export const CROSS_MIN_SOURCES = 2;
export const CROSS_MAX_SOURCES = 5;

export function youtubeIdFromUrl(raw: unknown): string | null {
  const value = String(raw || "").trim();
  return (
    value.match(/[?&]v=([\w-]{6,})/)?.[1] ||
    value.match(/youtu\.be\/([\w-]{6,})/)?.[1] ||
    value.match(/\/shorts\/([\w-]{6,})/)?.[1] ||
    null
  );
}

export function makeSourcePreview(raw: unknown, platform: PsyPlatform): SourcePreview | null {
  const url = String(raw || "").trim();
  if (!url) return null;
  const config = LINK_SOURCES[platform];
  if (!config) return null;
  if (platform === "youtube") {
    const id = youtubeIdFromUrl(url);
    if (!id) return null;
    return {
      url, source: config.label, title: `Vidéo YouTube · ${id}`,
      subtitle: "Commentaires et discussions publiques",
      thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    };
  }
  const looksLikeUrl = /^(https?:\/\/)?[\w-]+(\.[\w-]+)+\S*$/i.test(url);
  if (!looksLikeUrl) return null;
  return {
    url, source: config.label, title: config.label === "Instagram" ? "Publication Instagram" : "Vidéo TikTok",
    subtitle: "Commentaires et discussions publiques", thumbnail: null,
  };
}

export function esc(value: unknown): string {
  if (Array.isArray(value)) return value.map(esc).filter(Boolean).join(" · ");
  return String(value ?? "").replace(/\*+/g, "");
}

export function fmtCount(value: unknown): string | null {
  if (value === null || value === undefined) return null;
  const n = Number(value);
  if (!Number.isFinite(n)) return null;
  if (n >= 1000000) return (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1) + "k";
  return String(n);
}

export function fmtDuration(iso: unknown): string | null {
  if (!iso || typeof iso !== "string") return null;
  const m = iso.match(/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!m || (!m[1] && !m[2] && !m[3])) return null;
  const h = parseInt(m[1] || "0", 10), mi = parseInt(m[2] || "0", 10), s = parseInt(m[3] || "0", 10);
  const pad = (v: number) => String(v).padStart(2, "0");
  return h > 0 ? `${h}:${pad(mi)}:${pad(s)}` : `${mi}:${pad(s)}`;
}

export const QUALITY_META: Record<string, { cls: string; label: string }> = {
  strong: { cls: "is-strong", label: "Solide" },
  moderate: { cls: "is-moderate", label: "Modérée" },
  exploratory: { cls: "is-exploratory", label: "Exploratoire" },
  insufficient: { cls: "is-insufficient", label: "Insuffisante" },
};
export function qualityMeta(level: string | null | undefined) {
  return (level && QUALITY_META[level]) || { cls: "is-exploratory", label: level || "—" };
}
export const CONFIDENCE_LABELS: Record<string, string> = { high: "Élevée", medium: "Moyenne", low: "Faible" };
export const CATEGORY_LABELS: Record<string, string> = {
  emotions: "Émotions", themes: "Thèmes", behavioral_signals: "Signaux comportementaux",
  fears: "Peurs", aspirations: "Aspirations", frustrations: "Frustrations",
  beliefs: "Croyances", motivations: "Motivations", objections: "Objections",
};
export function categoryLabel(cat: string | null | undefined): string {
  return (cat && CATEGORY_LABELS[cat]) || (cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : "Signal");
}

export const INTENTIONS: { id: string; mode: SuggestMode; titre: string; detail: string; action: string }[] = [
  { id: "audience", mode: "link", titre: "Comprendre une audience", detail: "Émotions et motivations derrière les commentaires d’une vidéo YouTube, Instagram ou TikTok.", action: "Coller un lien" },
  { id: "cross", mode: "cross", titre: "Comparer plusieurs audiences", detail: "Ce que 2 à 5 communautés partagent, et ce qui les sépare.", action: "Ajouter des audiences" },
  { id: "freins", mode: "link", titre: "Identifier peurs et objections", detail: "Ce qui freine l’adhésion, avec les verbatims qui le montrent.", action: "Coller un lien" },
  { id: "avis", mode: "manual", titre: "Analyser des avis clients", detail: "Collez au moins 3 avis, réponses ou messages, un par ligne.", action: "Coller des commentaires" },
  { id: "enquete", mode: "file", titre: "Importer une enquête ou un export", detail: "Tableur, JSON ou texte brut, jusqu’à 5 Mo.", action: "Choisir un fichier" },
  { id: "personas", mode: "link", titre: "Construire des personas", detail: "Des profils issus des groupes réellement observés, avec leur fiabilité.", action: "Coller un lien" },
];

export function dateCourte(iso: string | null | undefined): string {
  const d = iso ? new Date(iso) : null;
  if (!d || Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
}

/** Phase de PsychoLoading (0 Collecte, 1 Analyse, 2 Interprétation) — même seuils que le code réel. */
export const loadingPhase = (progress: number) => (progress < 35 ? 0 : progress < 70 ? 1 : 2);
export const LOADING_STAGES = ["Collecte", "Analyse", "Interprétation"] as const;

/* ── Piece 2 : helpers des blocs de résultat (repris tels quels, typés) ── */

/** Le backend renvoie tantôt une chaîne, tantôt un objet ({label}, {token}…). */
export function itemText(v: unknown): string {
  if (v === null || v === undefined) return "";
  if (typeof v === "string" || typeof v === "number") return String(v);
  if (Array.isArray(v)) return v.map(itemText).filter(Boolean).join(" · ");
  if (typeof v !== "object") return String(v);
  const o = v as Partial<Record<"token" | "bigram" | "emotion" | "label" | "nom" | "name" | "signal" | "phrase" | "texte" | "text", unknown>>;
  const connu = o.token || o.bigram || o.emotion || o.label || o.nom || o.name || o.signal || o.phrase || o.texte || o.text;
  if (connu) return String(connu);
  return Object.values(o).map(itemText).filter(Boolean).join(" — ");
}

/** **gras** / *italique* ; retire les identifiants internes et les astérisques orphelins. */
export function formatInline(value: unknown): ReactNode[] {
  const text = (Array.isArray(value) ? value.map((v) => itemText(v)).join(" · ")
    : value && typeof value === "object" ? itemText(value) : String(value ?? ""))
    .replace(/\s*\((?:cross|signal|psy):[\w:.-]+\)/g, "");
  const chunks = text.split(/(\*\*[^*\n]+?\*\*|\*[^*\n]+?\*)/g);
  return chunks.map((chunk, index) => {
    if (/^\*\*[^*]+\*\*$/.test(chunk)) return createElement("strong", { key: index }, chunk.slice(2, -2));
    if (/^\*[^*]+\*$/.test(chunk)) return createElement("em", { key: index }, chunk.slice(1, -1));
    return chunk.replace(/\*+/g, "");
  });
}

export interface Paragraphe { libelle?: string; texte: string }
/** Met à plat un objet ({ cible, declaration }) en paragraphes « Libellé — texte ». */
export function enParagraphes(valeur: unknown): Paragraphe[] {
  if (valeur == null) return [];
  if (typeof valeur === "string" || typeof valeur === "number") {
    const t = String(valeur).trim();
    return t ? [{ texte: t }] : [];
  }
  if (Array.isArray(valeur)) return valeur.flatMap(enParagraphes);
  if (typeof valeur === "object") {
    return Object.entries(valeur as Record<string, unknown>).flatMap(([cle, v]) => {
      const libelle = cle.replace(/_/g, " ").replace(/^./, (c) => c.toUpperCase());
      return enParagraphes(v).map((p, i) => (i === 0 ? { libelle, texte: p.texte } : p));
    });
  }
  return [];
}

export type Tone = "pos" | "neg" | "neu";
const TONS_POS = ["favorable", "positif", "admiration", "enthousiasme", "joie", "gratitude", "confiance", "espoir", "soulagement", "fierte"];
const TONS_NEG = ["oppose", "opposé", "negatif", "négatif", "colere", "colère", "frustration", "peur", "deception", "déception", "mepris", "mépris", "tristesse", "anxiete", "anxiété", "doute"];
export function ton(label: unknown): Tone {
  const mot = String(label || "").toLowerCase().trim();
  if (TONS_POS.some((t) => mot.includes(t))) return "pos";
  if (TONS_NEG.some((t) => mot.includes(t))) return "neg";
  return "neu";
}
/** Mot lisible du ton, pour ne jamais coder l'information par la seule couleur. */
export const TONE_WORD: Record<Tone, string> = { pos: "favorable", neg: "frein", neu: "neutre" };

const LIBELLES: Record<string, string> = {
  favorable: "Favorable", oppose: "Opposé", "opposé": "Opposé", neutre: "Neutre",
  nuance: "Nuancé", hors_sujet: "Hors sujet", ironique: "Ironique",
  positive: "Positif", neutral: "Neutre", negative: "Négatif",
  colere: "Colère", mefiance: "Méfiance", curiosite: "Curiosité", fierte: "Fierté",
  deception: "Déception", anxiete: "Anxiété", mepris: "Mépris", gratitude: "Gratitude",
  alignement: "Alignement", authenticite: "Authenticité", engagement: "Engagement",
  opportunite: "Opportunité", persistance: "Persistance", polarisation: "Polarisation",
  preuve_demandee: "Preuve demandée", "preuve_demandée": "Preuve demandée",
  desir: "Désir", besoin: "Besoin",
};
export function libelle(raw: unknown): string {
  const texte = String(raw == null ? "" : raw).trim();
  const connu = LIBELLES[texte.toLowerCase()];
  if (connu) return connu;
  const lisible = texte.replace(/_/g, " ");
  return lisible.charAt(0).toUpperCase() + lisible.slice(1);
}

/** Retire les guillemets que le modèle ajoute lui-même, puis encadre « … ». */
export function citation(texte: unknown): string {
  const brut = esc(texte).trim().replace(/^[«"“\s]+|[»"”\s]+$/g, "");
  return brut ? `« ${brut} »` : "";
}

export function motLexical(entree: unknown): string {
  if (Array.isArray(entree)) return String(entree[0] ?? "");
  if (entree && typeof entree === "object") {
    const o = entree as Partial<Record<"mot" | "token" | "bigram", unknown>>;
    return String(o.mot || o.token || o.bigram || "");
  }
  return String(entree ?? "");
}

/** Portrait randomuser.me — même graine (nom + rang) que l'ancienne page. */
export function personaPhotoUrl(nom: unknown, index: number, genre: unknown): string {
  let h = 5381;
  const graine = `${nom || ""}${index}`;
  for (let i = 0; i < graine.length; i += 1) h = ((h << 5) + h) ^ graine.charCodeAt(i);
  const rang = Math.abs(h) % 70;
  const femme = /femme|woman|^f$/i.test(String(genre || "").trim());
  return `https://randomuser.me/api/portraits/${femme ? "women" : "men"}/${rang}.jpg`;
}

/* Texte brut prêt à coller — IDENTIQUE au code réel. */
export function lignesListe(titre: string, items: unknown): string[] {
  const liste = (Array.isArray(items) ? items : []).map(itemText).filter(Boolean);
  return liste.length ? [`${titre} :`, ...liste.map((x) => `- ${x}`)] : [];
}

type PersonaFields = Partial<Record<"age" | "genre" | "metier" | "poids" | "emotion_dominante_mesuree" | "archetype_jungien" | "vision_monde"
  | "situation_vie" | "etat_esprit" | "langage_typique" | "frustrations" | "aspirations" | "peurs" | "desirs" | "declencheurs_emotionnels"
  | "messages_impactants" | "objections_a_lever" | "objection_principale" | "preuve_attendue" | "ce_qui_le_ferait_acheter"
  | "ce_qui_la_ferait_acheter" | "ce_qui_le_ferait_fuir" | "ce_qui_la_ferait_fuir" | "message_a_lui_dire", unknown>>;
export function personaEnTexte(p: PersonaFields, nom: string): string {
  const ligne = (label: string, val: unknown) => (val ? [`${label} : ${itemText(val)}`] : []);
  return [
    `PERSONA — ${nom}`,
    [p.age ? `${p.age} ans` : "", p.genre, p.metier].filter(Boolean).join(" · "),
    ...ligne("Poids dans l'audience", p.poids),
    ...ligne("Émotion dominante", p.emotion_dominante_mesuree),
    ...ligne("Archétype", p.archetype_jungien),
    ...ligne("Vision du monde", p.vision_monde),
    ...ligne("Situation de vie", p.situation_vie),
    ...ligne("État d'esprit", p.etat_esprit),
    ...ligne("Ce qu'il écrirait", p.langage_typique),
    ...lignesListe("Frustrations", p.frustrations),
    ...lignesListe("Aspirations", p.aspirations),
    ...lignesListe("Peurs", p.peurs),
    ...lignesListe("Désirs cachés", p.desirs),
    ...lignesListe("Déclencheurs émotionnels", p.declencheurs_emotionnels),
    ...lignesListe("Messages qui le toucheraient", p.messages_impactants),
    ...lignesListe("Objections à lever", p.objections_a_lever),
    ...ligne("Objection principale", p.objection_principale),
    ...ligne("Preuve attendue", p.preuve_attendue),
    ...ligne("Ce qui le ferait acheter", p.ce_qui_le_ferait_acheter || p.ce_qui_la_ferait_acheter),
    ...ligne("Ce qui le ferait fuir", p.ce_qui_le_ferait_fuir || p.ce_qui_la_ferait_fuir),
    ...ligne("Message à lui adresser", p.message_a_lui_dire),
  ].filter(Boolean).join("\n");
}

type Brief = Partial<Record<"qui" | "synthese" | "insight" | "insight_cle" | "action" | "action_prioritaire", unknown>>;
type Recos = Partial<Record<"verite_de_l_audience" | "message_central" | "promesse_authentique" | "actions_prioritaires" | "prochaines_etapes", unknown>>;
type Emos = Partial<Record<"dominante" | "espoir_decu" | "aspiration_nourrie", unknown>>;
export function syntheseEnTexte(data: { brief?: Brief; recommandations?: Recos; emotions?: Emos }): string {
  const brief: Brief = data.brief || {};
  const recos: Recos = data.recommandations || {};
  const emo: Emos = data.emotions || {};
  const ligne = (label: string, val: unknown) => (val ? [`${label} : ${itemText(val)}`] : []);
  return [
    "GABRIEL — SYNTHÈSE DU PSYCHOLOGUE",
    ...ligne("Qui", brief.qui || brief.synthese),
    ...ligne("Insight clé", brief.insight || brief.insight_cle),
    ...ligne("Action prioritaire", brief.action || brief.action_prioritaire),
    ...ligne("Vérité de l'audience", recos.verite_de_l_audience),
    ...ligne("Message central", recos.message_central),
    ...ligne("Promesse authentique", recos.promesse_authentique),
    ...ligne("Émotion dominante", emo.dominante),
    ...ligne("Espoir déçu", emo.espoir_decu),
    ...ligne("Aspiration nourrie", emo.aspiration_nourrie),
    ...lignesListe("Actions prioritaires", recos.actions_prioritaires),
    ...lignesListe("Prochaines étapes", recos.prochaines_etapes),
  ].join("\n");
}

/** Palette des visualisations — mêmes noms de tokens que le code réel. */
export const DONUT_COLORS = [
  "var(--champagne)", "var(--psychologist-sage)", "var(--strategist-slate)",
  "var(--creator-terracotta)", "var(--champagne-deep)", "var(--rose)",
  "var(--core-champagne)", "var(--muted)",
];

export const LIVRABLES: [string, string][] = [
  ["lecture_sujet", "Lecture du sujet"], ["ce_qui_rassemble", "Ce qui rassemble"], ["ce_qui_divise", "Ce qui divise"],
  ["tension_centrale", "Tension centrale"], ["synthese_psychologique", "Synthèse psychologique"],
];
export const GRILLE: [string, string][] = [
  ["ce_qu_ils_ressentent", "Ce qu'ils ressentent"], ["ce_qu_ils_veulent", "Ce qu'ils veulent"],
  ["ce_qu_ils_refusent", "Ce qu'ils refusent"], ["ce_qui_les_bloque", "Ce qui les bloque"],
  ["ce_qui_les_rassure", "Ce qui les rassure"], ["ce_qui_les_divise", "Ce qui les divise"],
  ["ce_qui_les_unit", "Ce qui les unit"], ["ce_qu_ils_valorisent", "Ce qu'ils valorisent"],
  ["ce_qu_ils_attendent_comme_preuve", "Preuve attendue"], ["quelle_opportunite_emerge", "Opportunité émergente"],
];
export const TRANSFORMATION_PHASES: [string, string, [string, string][]][] = [
  ["etat_actuel", "État actuel", [["situation", "Situation"], ["frustration_principale", "Frustration principale"], ["croyance_bloquante", "Croyance bloquante"], ["identite_actuelle", "Identité actuelle"], ["conscience_du_probleme", "Conscience du problème"]]],
  ["le_pont", "Le pont", [["ce_dont_ils_ont_besoin", "Ce dont ils ont besoin"], ["obstacle_principal", "Obstacle principal"], ["declencheur_de_transition", "Déclencheur de transition"], ["message_de_passage", "Message de passage"]]],
  ["etat_desire", "État désiré", [["transformation_visee", "Transformation visée"], ["identite_aspiree", "Identité aspirée"], ["vie_revelee", "Vie révélée"], ["indicateur_de_succes", "Indicateur de succès"]]],
];
export const PSY_SENS: [string, string][] = [
  ["potentiel_bloque", "Potentiel bloqué"], ["signal_de_purpose", "Signal de purpose"], ["quete_de_signifiance", "Quête de signifiance"],
  ["besoin_d_appartenance", "Besoin d'appartenance"], ["desir_de_legacy", "Désir de legacy"], ["besoin_de_transformation", "Besoin de transformation"],
];
export const PSY_RAPPORTS: [string, string][] = [
  ["rapport_argent", "Rapport à l'argent"], ["rapport_succes", "Rapport au succès"], ["rapport_autorite", "Rapport à l'autorité"],
  ["rapport_image", "Rapport à l'image"], ["rapport_travail", "Rapport au travail"], ["rapport_famille", "Rapport à la famille"],
  ["rapport_spiritualite", "Rapport à la spiritualité"],
];
export const PREUVES_STATISTIQUES: [string, string][] = [
  ["repartition_camps", "Répartition des camps"], ["positionnement_audience", "Positionnement de l'audience"],
  ["carte_emotionnelle", "Carte émotionnelle"], ["clusters_comportementaux", "Clusters comportementaux"],
  ["signaux_lexicaux_dominants", "Signaux lexicaux dominants"], ["distribution_relevance", "Pertinence des commentaires"],
];
