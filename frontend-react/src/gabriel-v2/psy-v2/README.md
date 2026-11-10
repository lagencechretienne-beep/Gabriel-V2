# Psychologue v2 — branchement

Mapping between `PsychologueView` (real app) and `PsychologueFlow` (v2). Network, polling, localStorage/sessionStorage stay in the container.

| PsychologueView state | PsychologueFlow prop |
|---|---|
| `stage==='input'` | `status="entry"` |
| `stage==='loading'` (+`resultKind`) | `status="loading"`, `isCross={resultKind==='cross'}`, `progress`, `step` |
| `stage==='error'`, `errorMsg` | `status="error"`, `errorMessage` |
| `stage==='result' && resultKind==='single'`, `result` | `status="result"`, `result` |
| `stage==='result' && resultKind==='cross'`, `crossResult` | `status="cross-result"`, `crossResult` |
| `tab, platform, url, manualText, checking, statusMsg, statusTone, previewCount, file, uploading, crossMode, crossSources, recentAnalyses` | same names (PsychoInput props) |
| `changeTab, changePlatform, changeUrl, setManualText, checkLink, uploadFile, launch, toggleCrossMode, addCrossSource, removeCrossSource, moveCrossSource, clearCrossSources, launchCrossAnalysis, openSavedAnalysis, suggest` | `onTabChange, onPlatformChange, onUrlChange, onManualTextChange, onCheck, onFilePick/onColumnChange, onLaunch, onToggleCross, onAddCrossSource, onRemoveCrossSource, onMoveCrossSource, onClearCrossSources, onLaunchCross, onOpenAnalysis, onSuggest` |
| `reset` (also used as retry in the original) | `reset` (`retry` optional, defaults to `reset`) |
| `goToStratege` | `onGoToStratege`, `onStrategeAudience` |
| `goToStrategeFromCross` | `onStrategeCross` |
| `goToCreateurFor` | `onCreateurAudience` |
| `onNavigateAgent` (prop) | `onNavigateAgent`; `onGoToCreateur = onNavigateAgent ? () => onNavigateAgent('createur') : undefined` |
| `fetchV2('/history/<id>/load')` inside CrossAudienceView | `onLoadAudience(id) => Promise<full_result>` |
| `workspace`, `onWorkspaceChange`, `openAnalysisRequest`, `onAnalysisReady` | stay in the container (effects only, nothing to render) |

Transition: loading → result/cross-result shows the orb card ("Analyse prête" + "Ouvrir le rapport"); any other path into a result (recent analysis, workspace restore, openAnalysisRequest) opens the report directly.
Known limit: a job restored from localStorage on mount enters `loading` without a bar submit, so the orb has no armed promise; the container should then open the report directly.
