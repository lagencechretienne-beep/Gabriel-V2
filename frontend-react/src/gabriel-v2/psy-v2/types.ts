/* Types tirés du code réel (PsychologueView.jsx) — mêmes noms de champs. */
export type PsyTab = "link" | "manual" | "file";
/** "youtube" | "instagram" | "tiktok" ont une vraie collecte ; toute autre valeur (ex. "google") désactive le champ. */
export type PsyPlatform = "youtube" | "instagram" | "tiktok" | (string & {});
export type StatusTone = "success" | "error" | "warning" | "info" | (string & {});

export interface SourcePreview {
  url: string;
  source: string;
  title: string;
  subtitle: string;
  thumbnail: string | null;
  label?: string | undefined;
}
export type CrossSource = SourcePreview;

/** Détails optionnels de la source (non présents dans makeSourcePreview ; à brancher si le backend les fournit). */
export interface SourceDetails {
  duration?: string | null | undefined; // ISO 8601, ex. "PT12M04S" → fmtDuration
  viewCount?: number | null | undefined; // → fmtCount
  channel?: string | null | undefined;
}

export interface PsyFile {
  name: string;
  count: number;
  columns?: string[] | undefined;
  column?: string | undefined;
  warning?: string | undefined;
}

export interface RecentAnalysis {
  analysis_id: string;
  title?: string | undefined;
  source?: string | undefined;
  nb_commentaires?: number | undefined;
  created_at?: string | undefined;
}

export type SuggestMode = "link" | "cross" | "manual" | "file";
export type NavigateAgent = "stratege" | "createur";

/** Props de PsychoInput — identiques au code réel. */
export interface PsychoInputProps {
  tab: PsyTab;
  onTabChange: (tab: PsyTab) => void;
  platform: PsyPlatform;
  onPlatformChange: (platform: PsyPlatform) => void;
  url: string;
  onUrlChange: (url: string) => void;
  manualText: string;
  onManualTextChange: (text: string) => void;
  checking: boolean;
  onCheck: () => void;
  statusMsg: string;
  statusTone?: StatusTone | null | undefined;
  previewCount: number;
  file: PsyFile | null;
  onFilePick: (file: File | null) => void;
  onColumnChange: (column: string) => void;
  uploading: boolean;
  onLaunch: () => void;
  crossMode: boolean;
  crossSources: CrossSource[];
  onToggleCross: () => void;
  onAddCrossSource: (source: SourcePreview) => void;
  onRemoveCrossSource: (index: number) => void;
  onMoveCrossSource: (index: number, delta: -1 | 1) => void;
  onClearCrossSources: () => void;
  onLaunchCross: () => void;
  recentAnalyses?: RecentAnalysis[] | undefined;
  onOpenAnalysis?: ((analysisId: string) => void) | undefined;
  onSuggest?: ((mode: SuggestMode) => void) | undefined;
  onNavigateAgent?: ((agent: NavigateAgent) => void) | undefined;
}

/** Props de PsychoLoading — identiques au code réel (progress en %, 0–100). */
export interface PsychoLoadingProps {
  progress: number;
  step: string;
  isCross: boolean;
  crossSources: CrossSource[];
}

/** Props de PsychoError — identiques au code réel. */
export interface PsychoErrorProps {
  message?: string | null | undefined;
  onRetry: () => void;
}

/** La scène réunit saisie, chargement et erreur. `status` dit au conteneur où l'on en est. */
export type SceneStatus = "input" | "loading" | "error" | "done";
export interface PsychoSceneProps extends PsychoInputProps {
  status: SceneStatus;
  progress: number;
  step: string;
  isCross: boolean;
  errorMessage?: string | null | undefined;
  onRetry: () => void;
  onOpenReport?: (() => void) | undefined;
  /** Annule l'analyse en cours (bouton « Annuler » ou touche Échap pendant le chargement). */
  onCancel?: (() => void) | undefined;
  /** Phrase de synthèse affichée dans la carte de fin. */
  resultSummary?: string | undefined;
  sourceDetails?: SourceDetails | null | undefined;
}
