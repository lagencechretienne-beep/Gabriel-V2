import { useEffect, useMemo, useRef, useState } from "react";
import { Activity, ArrowUp, Check, ChevronDown, ChevronLeft, ChevronRight, Paperclip, Plus, RefreshCw, X } from "./icons";
import MorphOrb, { type Phase } from "./MorphOrb";
import {
  CROSS_MAX_SOURCES, CROSS_MIN_SOURCES, INTENTIONS, LINK_SOURCES, LOADING_STAGES,
  dateCourte, fmtCount, fmtDuration, loadingPhase, makeSourcePreview,
} from "./psy-helpers";
import type { PsyPlatform, PsyTab, PsychoSceneProps } from "./types";
import "./psy-v2.css";

const DEFAULT_SUMMARY = "Votre audience a été lue. Ouvrez le rapport pour voir ses émotions, ses objections et ses personas.";

/**
 * Scène Psychologue v2 : saisie (PsychoInput), chargement (PsychoLoading) et erreur (PsychoError)
 * dans une seule scène animée. Purement présentationnel : tout l'état vit chez le conteneur.
 */
export function PsychoScene(props: PsychoSceneProps) {
  const {
    tab, onTabChange, platform, onPlatformChange, url, onUrlChange, manualText, onManualTextChange,
    checking, onCheck, statusMsg, statusTone, previewCount, file, onFilePick, onColumnChange, uploading,
    onLaunch, crossMode, crossSources, onToggleCross, onAddCrossSource, onRemoveCrossSource,
    onMoveCrossSource, onClearCrossSources, onLaunchCross, recentAnalyses = [], onOpenAnalysis,
    onSuggest, onNavigateAgent, status, progress, step, isCross, errorMessage, onRetry, onOpenReport, onCancel,
    resultSummary, sourceDetails,
  } = props;

  const [menuOpen, setMenuOpen] = useState(false);
  const [phase, setPhase] = useState<Phase>("idle");

  // ── Même logique de décision que PsychoInput ──
  const config = LINK_SOURCES[platform];
  const linkReady = Boolean(config) && previewCount > 0;
  const manualCount = manualText.trim().split("\n").filter(Boolean).length;
  const canLaunch = tab === "link" ? linkReady : tab === "manual" ? manualCount >= 3 : Boolean(file && file.count >= 3);
  const sourcePreview = useMemo(() => (tab === "link" ? makeSourcePreview(url, platform) : null), [tab, url, platform]);
  const duplicateCrossSource = Boolean(sourcePreview && crossSources.some((s) => s.url === sourcePreview.url));
  const canAddCrossSource = Boolean(crossMode && sourcePreview && !duplicateCrossSource && crossSources.length < CROSS_MAX_SOURCES);
  const canLaunchCross = crossMode && crossSources.length >= CROSS_MIN_SOURCES;
  const currentLabel = tab === "manual" ? "Commentaires" : tab === "file" ? "Fichier" : config?.label || "Google";
  const currentMark = tab === "manual" ? "≡" : tab === "file" ? "↥" : config?.mark || "G";
  const canSubmit = crossMode
    ? canAddCrossSource || (canLaunchCross && !url.trim())
    : tab === "link" ? Boolean(config && url.trim()) : canLaunch;
  const submitLabel = crossMode
    ? canAddCrossSource ? "Ajouter cette audience" : `Comparer ${crossSources.length} audiences`
    : tab === "link" && !linkReady ? "Vérifier le lien" : "Lancer l'analyse";

  // ── Pont entre l'état du conteneur et l'animation ──
  const deferred = useRef<{ res: (s: string) => void; rej: (e: Error) => void; promise: Promise<string> } | null>(null);
  const arm = () => {
    let res!: (s: string) => void, rej!: (e: Error) => void;
    const promise = new Promise<string>((a, b) => { res = a; rej = b; });
    deferred.current = { res, rej, promise };
  };
  useEffect(() => {
    const d = deferred.current;
    if (!d) return;
    if (status === "done") { d.res(resultSummary || DEFAULT_SUMMARY); deferred.current = null; }
    if (status === "error") { d.rej(new Error(errorMessage || "Une erreur est survenue.")); deferred.current = null; }
  }, [status, errorMessage, resultSummary]);

  // Annulation : Échap est déjà géré par MorphOrb (retour à la barre) ; on prévient le conteneur.
  const cancel = () => {
    deferred.current = null;
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
  };
  useEffect(() => {
    if (status !== "loading" || !onCancel) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { deferred.current = null; onCancel(); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [status, onCancel]);

  const onBarSubmit = (): string | null => {
    setMenuOpen(false);
    if (crossMode) {
      if (canAddCrossSource && sourcePreview) onAddCrossSource(sourcePreview);
      else if (canLaunchCross && !url.trim()) { arm(); onLaunchCross(); return "cross"; }
      return null;
    }
    if (tab === "link") {
      if (linkReady) { arm(); onLaunch(); return url; }
      if (config && url.trim()) onCheck();
      return null;
    }
    if (canLaunch) { arm(); onLaunch(); return tab; }
    return null;
  };

  const selectSource = (next: PsyPlatform | "manual" | "file") => {
    setMenuOpen(false);
    if (next === "manual" || next === "file") { onTabChange(next as PsyTab); return; }
    onTabChange("link");
    onPlatformChange(next);
  };

  const busy = checking || uploading;
  const stage = loadingPhase(progress);
  const loadingSources = isCross ? crossSources : [];
  const duration = fmtDuration(sourceDetails?.duration);
  const views = fmtCount(sourceDetails?.viewCount);
  const comments = previewCount > 0 ? fmtCount(previewCount) : null;

  const bar = (
    <>
      <div className="gv2-psy2-picker">
        <button type="button" className="gv2-psy2-chip" onClick={() => setMenuOpen((o) => !o)} aria-haspopup="listbox" aria-expanded={menuOpen}
          aria-label={`Source d'analyse : ${currentLabel}. Changer de source`}>
          <span className="gv2-psy2-mark" aria-hidden="true">{currentMark}</span>
          <span className="gv2-psy2-chip-label">{currentLabel}</span>
          <ChevronDown className={menuOpen ? "is-open" : ""} size={15} />
        </button>
        {menuOpen && (
          <div className="gv2-psy2-menu" role="listbox" aria-label="Choisir une source">
            {Object.entries(LINK_SOURCES).map(([key, meta]) => (
              <button key={key} type="button" role="option" aria-selected={tab === "link" && platform === key} onClick={() => selectSource(key)}>
                <span className="gv2-psy2-mark" aria-hidden="true">{meta.mark}</span>{meta.label}
                {tab === "link" && platform === key && <Check size={15} />}
              </button>
            ))}
            <hr />
            <button type="button" role="option" aria-selected={tab === "manual"} onClick={() => selectSource("manual")}>
              <span className="gv2-psy2-mark" aria-hidden="true">≡</span>Commentaires{tab === "manual" && <Check size={15} />}
            </button>
            <button type="button" role="option" aria-selected={tab === "file"} onClick={() => selectSource("file")}>
              <span className="gv2-psy2-mark" aria-hidden="true">↥</span>Fichier{tab === "file" && <Check size={15} />}
            </button>
          </div>
        )}
      </div>

      <button type="button" className={`gv2-psy2-chip gv2-psy2-cross${crossMode ? " is-active" : ""}`} onClick={onToggleCross}
        aria-pressed={crossMode} aria-label="Cross Analyse — comparer plusieurs audiences">
        <Activity size={15} />
        <span className="gv2-psy2-chip-label">Cross{crossSources.length ? ` ${crossSources.length}` : ""}</span>
      </button>

      {tab === "link" && (
        <input className="gv2-psy2-field" type="url" value={url} disabled={!config} onChange={(e) => onUrlChange(e.target.value)}
          aria-label="Lien à analyser"
          placeholder={crossMode ? "Ajoutez une audience à comparer…" : config ? "Collez le lien d'une vidéo…" : "La collecte Google arrive prochainement…"} />
      )}
      {tab === "manual" && (
        <textarea className="gv2-psy2-field gv2-psy2-textarea" value={manualText} rows={1} aria-label="Commentaires à analyser"
          onChange={(e) => onManualTextChange(e.target.value)} placeholder="Collez vos commentaires ici, un par ligne…" />
      )}
      {tab === "file" && (
        <label className="gv2-psy2-field gv2-psy2-file">
          <input type="file" accept=".csv,.xlsx,.xls,.json,.txt" hidden onChange={(e) => onFilePick(e.target.files?.[0] ?? null)} />
          <Paperclip size={16} />
          <span>{uploading ? "Lecture du fichier…" : file ? file.name : "Ajoutez un fichier de commentaires"}</span>
        </label>
      )}
      {tab === "link" && crossMode && sourcePreview && (
        <span className={`gv2-psy2-recognized${duplicateCrossSource ? " is-duplicate" : ""}`}>
          {duplicateCrossSource ? <X size={14} /> : <Check size={14} />}{duplicateCrossSource ? "Déjà ajoutée" : "Lien reconnu"}
        </span>
      )}
      <button type="submit" className="mo-send" data-ready={canSubmit ? "" : undefined} disabled={busy || !canSubmit} aria-label={submitLabel} title={submitLabel}>
        {busy ? <RefreshCw size={18} className="gv2-psy2-spin" /> : crossMode && canAddCrossSource ? <Plus size={18} /> : <ArrowUp size={18} />}
      </button>
    </>
  );

  const greeting = (
    <span className="gv2-psy2-title">
      <span style={{ ["--i" as string]: 0 }}>Psychologie</span> <span style={{ ["--i" as string]: 1 }}>avancée.</span>
    </span>
  );
  const sub = (
    <>
      <p>Découvrez <em>le marché caché</em>, <em>les peurs</em> et <em>les aspirations</em> de votre audience.</p>
    </>
  );

  return (
    <MorphOrb
      onSubmit={() => deferred.current?.promise ?? Promise.resolve(resultSummary || DEFAULT_SUMMARY)}
      minThinkMs={1200}
      progress={status === "loading" ? progress / 100 : null}
      stepLabel={status === "loading" ? step || "Gabriel analyse votre audience…" : null}
      slot={bar}
      onBarSubmit={onBarSubmit}
      onPhaseChange={setPhase}
      greeting={greeting}
      sub={sub}
      hint={null}
      answerTitle={isCross ? "Cross Analyse prête" : "Analyse prête"}
      reportLabel="Ouvrir le rapport"
      errorTitle="Analyse interrompue"
      retryLabel="Réessayer"
      onRetry={onRetry}
      onOpenReport={onOpenReport}
    >
      {/* Au-dessus de la barre : aperçu, file d'audiences, intentions */}
      <div className="gv2-psy2-above" data-show={phase === "idle" ? "" : undefined}>
        {crossMode && crossSources.length > 0 && (
          <div className="gv2-psy2-queue" aria-label="Audiences à comparer">
            {crossSources.map((source, index) => (
              <div className="gv2-psy2-qchip" key={source.url}>
                <span className="gv2-psy2-qnum">{index + 1}</span>
                <span className="gv2-psy2-qtitle" title={source.title || source.label || source.url}>{source.title || source.label || source.url}</span>
                <button type="button" onClick={() => onMoveCrossSource(index, -1)} disabled={index === 0} aria-label={`Déplacer l’audience ${index + 1} vers la gauche`}><ChevronLeft size={14} /></button>
                <button type="button" onClick={() => onMoveCrossSource(index, 1)} disabled={index === crossSources.length - 1} aria-label={`Déplacer l’audience ${index + 1} vers la droite`}><ChevronRight size={14} /></button>
                <button type="button" onClick={() => onRemoveCrossSource(index)} aria-label={`Retirer l’audience ${index + 1}`}><X size={14} /></button>
              </div>
            ))}
            <button type="button" className="gv2-psy2-link" onClick={onClearCrossSources}>Tout effacer</button>
          </div>
        )}

        {sourcePreview && (
          <div className="gv2-psy2-preview" aria-live="polite">
            {sourcePreview.thumbnail
              ? <img src={sourcePreview.thumbnail} alt={`Vignette de ${sourcePreview.title}`} />
              : <span className="gv2-psy2-preview-fallback">{sourcePreview.source}</span>}
            <div className="gv2-psy2-preview-text">
              <strong>{sourcePreview.title}</strong>
              <span>{[sourcePreview.source, sourceDetails?.channel, duration, views && `${views} vues`, comments && `${comments} commentaires`].filter(Boolean).join(" · ") || sourcePreview.subtitle}</span>
            </div>
            {linkReady && !crossMode && <span className="gv2-psy2-ok"><Check size={14} />Prêt</span>}
          </div>
        )}

        {crossMode && crossSources.length > 0 && (
          <div className="gv2-psy2-crossready" role="status">
            <span>{crossSources.length < CROSS_MIN_SOURCES
              ? `Ajoutez encore ${CROSS_MIN_SOURCES - crossSources.length} audience pour lancer la Cross Analyse.`
              : `Cross Analyse prête — ${crossSources.length} audiences à croiser.`}</span>
            {canLaunchCross && (
              <button type="button" className="gv2-psy2-cta" onClick={() => { const f = document.querySelector<HTMLFormElement>(".mo-input"); f?.requestSubmit(); }}>
                Comparer {crossSources.length} audiences <span aria-hidden="true">→</span>
              </button>
            )}
          </div>
        )}

        {!sourcePreview && !(crossMode && crossSources.length) && onSuggest && (
          <div className="gv2-psy2-intents" aria-label="Que voulez-vous comprendre ?">
            {INTENTIONS.map((it) => (
              <button key={it.id} type="button" className="gv2-psy2-intent" title={it.detail} onClick={() => onSuggest(it.mode)}>{it.titre}</button>
            ))}
          </div>
        )}

        {tab === "file" && file?.columns && file.columns.length > 1 && (
          <label className="gv2-psy2-column">
            <span>Colonne à analyser</span>
            <select value={file.column || ""} onChange={(e) => onColumnChange(e.target.value)}>
              {file.columns.map((col) => <option key={col} value={col}>{col}</option>)}
            </select>
          </label>
        )}
      </div>

      {/* Sous la barre : statut, compteur, entrée Cross */}
      <div className="gv2-psy2-below" data-show={phase === "idle" ? "" : undefined} role="status">
        {tab === "manual" && <span className="gv2-psy2-count" data-ok={manualCount >= 3 ? "" : undefined}>{manualCount} / 3 min.</span>}
        {tab === "file" && <span className="gv2-psy2-count">{file ? file.warning || `${file.count} commentaire${file.count === 1 ? "" : "s"} lu${file.count === 1 ? "" : "s"}` : "CSV, Excel, JSON ou TXT · 5 Mo maximum"}</span>}
        <span className={statusTone ? `gv2-psy2-status is-${statusTone}` : "gv2-psy2-status"}>
          {tab === "link" ? statusMsg || "Aucune pensée devinée. Chaque lecture part de signaux observables." : statusMsg || "Prêt à analyser votre audience."}
        </span>
        {!crossMode && <button type="button" className="gv2-psy2-link" onClick={onToggleCross}>Comparer plusieurs audiences →</button>}
      </div>

      {/* Pendant la réflexion : étapes réelles + audiences comparées */}
      <div className="gv2-psy2-thinking" data-show={phase === "think" && status === "loading" ? "" : undefined} aria-label="Étapes de l’analyse">
        <ol className="gv2-psy2-stages">
          {LOADING_STAGES.map((label, i) => (
            <li key={label} className={i === stage ? "is-active" : i < stage ? "is-complete" : ""}>{label}</li>
          ))}
        </ol>
        {loadingSources.length > 0 && (
          <div className="gv2-psy2-lsources">
            {loadingSources.map((s, i) => <span key={s.url}><b>{i + 1}</b>{s.title || s.label || s.url}</span>)}
          </div>
        )}
        {onCancel && <button type="button" className="gv2-psy2-link" onClick={cancel}>Annuler l’analyse</button>}
      </div>

      {/* Filet de sécurité : analyse reprise après rechargement, ou erreur sans animation en cours.
          Le message ne dépend jamais de l'animation. */}
      {status === "error" && phase === "idle" && (
        <div className="gv2-psy2-fallback" role="alert">
          <strong>Analyse interrompue</strong>
          <p>{errorMessage || "Une erreur est survenue."}</p>
          <button type="button" className="gv2-psy2-cta" onClick={onRetry}>Réessayer</button>
        </div>
      )}
      {status === "loading" && phase === "idle" && (
        <div className="gv2-psy2-fallback" role="status" aria-live="polite">
          <strong>{step || "Gabriel analyse votre audience…"}</strong>
          <div className="gv2-psy2-fallback-bar" aria-hidden="true"><i style={{ width: `${Math.max(4, Math.min(100, progress))}%` }} /></div>
          <p>{Math.round(progress)} %</p>
        </div>
      )}

      {/* Après la lecture */}
      {onNavigateAgent && (
        <nav className="gv2-psy2-after" data-show={phase === "answered" && status === "done" ? "" : undefined} aria-label="Prolonger l’analyse">
          <button type="button" onClick={() => onNavigateAgent("stratege")}>Transformer en stratégie <span>Stratège</span></button>
          <button type="button" onClick={() => onNavigateAgent("createur")}>Transformer en contenu <span>Le Créateur</span></button>
        </nav>
      )}
    </MorphOrb>
  );
}
