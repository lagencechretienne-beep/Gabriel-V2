# Gabriel.ai — Architecture actuelle et architecture cible

| | |
|---|---|
| **Document** | Architecture technique de Gabriel.ai |
| **État décrit** | Commit `b564f33` (branche `feature/salle-cross-createur-psychologue`, aussi `main` du dépôt `Gabriel-V2`) |
| **Date** | 11 octobre 2026 |
| **Public** | Équipe produit et technique |
| **Langue du code et de l'interface** | Français |

**Comment lire ce document.** Chaque affirmation de la partie « Architecture actuelle » a été vérifiée dans le code. Les chiffres (lignes, routes, tests) sont ceux du commit ci-dessus. La partie « Architecture cible » est une **proposition** : elle distingue ce qui était déjà prévu dans `docs/AUDIT_ARCHITECTURE.md` de ce qui découle des problèmes constatés depuis. Rien n'y est décidé tant que l'équipe ne l'a pas validé (voir §12).

---

## Sommaire

**Partie A — Architecture actuelle**
1. Vue d'ensemble
2. Pile technique et déploiement
3. Arborescence du dépôt
4. Le socle : LLM, registres, planification, critique, mémoires
5. Les agents et leurs pipelines
6. Travaux longs et persistance
7. Données : Supabase, fichiers locaux, caches
8. API : familles de routes
9. Interface (frontend)
10. Sécurité et isolation entre utilisateurs
11. Qualité, tests et limites connues

**Partie B — Architecture cible**
12. Principes et décisions à prendre
13. Schéma cible
14. Feuille de route par phases
15. Risques et critères de fin de phase

**Annexes** : variables d'environnement, glossaire, commandes.

---

# PARTIE A — ARCHITECTURE ACTUELLE

## 1. Vue d'ensemble

Gabriel est un **système multi-agents d'analyse du comportement humain**. Le **Psychologue** est l'agent principal et la porte d'entrée ; **Ariane** (le Stratège) et le **Créateur** prolongent son analyse.

```
                           ┌──────────────────────────────────────────────┐
   Utilisateur ───────────►│  Interface React « gabriel-v2 » (un seul shell)│
                           │  Psychologue · Ariane · Créateur · Conversation│
                           └───────────────────────┬──────────────────────┘
                                                   │ HTTP/JSON (fetchV2)
                           ┌───────────────────────▼──────────────────────┐
                           │  Flask — app.py (4 595 lignes, 94 routes)     │
                           │  auth · crédits · jobs · routes agents · PDF  │
                           └───┬───────────┬───────────┬──────────────┬───┘
                               │           │           │              │
                  ┌────────────▼──┐ ┌──────▼─────┐ ┌───▼────────┐ ┌───▼────────────┐
                  │ Psychologue   │ │ Ariane     │ │ Créateur   │ │ Orchestrateur   │
                  │ core/analyzer │ │ agents/    │ │ agents/    │ │ conversationnel │
                  │ + Cross       │ │ stratege   │ │ creation/  │ │ agents/         │
                  │               │ │            │ │ (10 étapes)│ │ orchestrator/   │
                  └──────┬────────┘ └─────┬──────┘ └─────┬──────┘ └───────┬────────┘
                         └────────────────┴──────┬───────┴────────────────┘
                                                 │
        ┌─────────────────────────────────────────▼────────────────────────────────┐
        │ SOCLE : core/llm_client · tools/ (22) · skills/ (10) · agents/registry    │
        │         core/planner · core/executor · core/critic · core/memory_manager  │
        └───────┬──────────────────┬───────────────────┬───────────────────────────┘
                │                  │                   │
         ┌──────▼─────┐    ┌───────▼───────┐   ┌───────▼────────┐
         │ Mistral    │    │ Supabase      │   │ Fichiers locaux │
         │ (OpenAI    │    │ (Postgres, 22 │   │ data/ (repli +  │
         │  option)   │    │  tables)      │   │ profils)        │
         └────────────┘    └───────────────┘   └────────────────┘
```

**Le parcours utilisateur principal :**

```
 Source (lien YouTube / TikTok / Instagram, fichier, texte)
        │
        ▼
 PSYCHOLOGUE ──► analyse simple  ──┐
        │                          ├──► résultats (5 onglets) ─► PDF
        └──► CROSS ANALYSE (2-5 sources) ─► Salle Cross
                                   │
                    ┌──────────────┴──────────────┐
                    ▼                             ▼
              ARIANE (stratégie)            CRÉATEUR (contenu)
              + entretien business          script, post, email…
                    └──────────────┬──────────────┘
                                   ▼
                  espace de travail (« dossier » / folder)
```

Les trois agents sont **joignables seuls** (contrainte produit, déclarée dans le registre d'agents) : le Créateur fonctionne sans analyse, Ariane sans Psychologue (via l'entretien), etc.

---

## 2. Pile technique et déploiement

| Couche | Technologie |
|---|---|
| Serveur | Python 3.9, Flask ≥ 3.0, gunicorn |
| Modèles de langage | **Mistral** par défaut (SDK `mistralai==1.10.0`), OpenAI en option (`LLM_PROVIDER`) ; l'Orchestrateur conversationnel appelle OpenAI (API Responses) avec repli sur Mistral |
| NLP / ML | `sentence-transformers` (modèle `paraphrase-multilingual-MiniLM-L12-v2`), `vaderSentiment`, `scikit-learn` (TF-IDF, KMeans), `numpy`, `pandas` |
| Base de données | **Supabase** (Postgres), accès côté serveur uniquement |
| Authentification | Google OAuth (`authlib`) + e-mail / mot de passe (`pbkdf2:sha256`, 8 caractères minimum) ; sessions par cookie |
| Paiement | Stripe (Checkout + webhook signé) |
| Voix | ElevenLabs (transcription et synthèse) via l'interface `VoiceProvider` |
| Frontend | React + Vite, compilé vers `static/gabriel-v2/` |
| Tests | pytest (backend), Vitest + Testing Library (frontend) |

**Déploiement (Render)** — `Procfile` :

```
web: gunicorn app:app --bind 0.0.0.0:$PORT --workers 1 --threads 8 --timeout 300 --worker-tmp-dir /dev/shm
```

- **Un seul worker, 8 threads.** Tout l'état des travaux en cours vit dans la mémoire de ce processus (voir §6). C'est la contrainte structurante de l'architecture actuelle.
- Un serveur déclaré « déployé » (`RENDER` ou `GABRIEL_ENV=production`) **refuse de démarrer** sans `AUTH_ENABLED=true` ou avec une `FLASK_SECRET_KEY` faible.
- Pas de CI/CD dans le dépôt (aucun workflow GitHub Actions).
- Python 3.9 est en fin de vie ; plusieurs bibliothèques Google le signalent au démarrage.

---

## 3. Arborescence du dépôt

| Chemin | Rôle | Taille |
|---|---|---|
| `app.py` | Application Flask : routes, auth, crédits, jobs, lancement des pipelines, PDF | 4 595 l. |
| `api/auth.py`, `api/db.py` | Authentification ; **toute** la couche d'accès Supabase + repli fichiers | 2 196 l. (db) |
| `core/` | Moteur : `analyzer.py` (Psychologue), `nlp_engine.py`, `rag.py`, `cross_*.py` (4 fichiers), `llm_client.py`, `planner.py`, `executor.py`, `critic.py`, `memory*.py`, `security.py`, `network.py` | 24 fichiers, 8 861 l. |
| `agents/` | Les agents : `psychologue.py`, `stratege.py`, `strategy_guard.py`, `createur.py`, `creation/` (pipeline 10 étapes), `orchestrator/` (conversationnel), `context_builder/` (entretien business), `design_agent.py`, `registry.py`, `catalog.py` | 42 fichiers, 7 227 l. |
| `tools/` | 22 capacités **déterministes** déclarées (schéma d'entrées/sorties, agents autorisés) | 17 fichiers |
| `skills/` | 10 savoir-faire (méthodes, grilles, directives) extraits des prompts | 11 fichiers |
| `services/` | Collecte (YouTube, Instagram, TikTok), import de fichiers, PDF | 5 fichiers |
| `frontend-react/` | Sources React ; `src/gabriel-v2/` = l'application ; `src/strategy-studio/` = studio de réglages | — |
| `static/gabriel-v2/` | **Bundle compilé** (`app.js`, `app.css`) servi par Flask | généré |
| `templates/` | Pages Jinja : `gabriel_v2.html` (shell), `landing_psychologue.html`, pages historiques | 19 fichiers |
| `knowledge/_index/` | Index vectoriels du RAG (pickle) | 19 Mo |
| `agents/{psychologue,stratege,createur}/rag/` | Documents sources du RAG, par agent | — |
| `supabase/` | Migrations SQL (jobs, folders, cross, mémoire, politiques RLS, crédits…) | 11 fichiers |
| `data/` | Repli local et profils (voir §7) | — |
| `tests/` | 67 fichiers pytest | 945 tests |
| `docs/` | Audit d'architecture, carte des capacités, protocole bêta, déploiement | — |

**Règle d'imports.** `app.py` est la *feuille* de l'arbre d'imports : aucun autre module ne l'importe. Tout ce qui doit être partagé (mémoires, contexte business) a été extrait vers `core/` pour cette raison.

---

## 4. Le socle

### 4.1 Couche LLM — `core/llm_client.py`

Point d'entrée **unique** vers les modèles (avant août 2026 : trois clients divergents, dont une fonction `_call_claude` qui appelait Mistral).

| Élément | Comportement |
|---|---|
| **Paliers logiques** | `fast` (classification, extraction, reformulation) et `deep` (analyse, stratégie, critique) |
| **Modèles par palier** | Défauts `mistral-small-latest` / `mistral-large-latest`, **surchargeables** par `MISTRAL_MODEL_FAST` / `MISTRAL_MODEL_DEEP` (un plan Mistral limité peut n'autoriser que les modèles `ministral`) |
| **Fournisseur** | `LLM_PROVIDER=mistral` (défaut) ou `openai` (`OPENAI_MODEL_FAST/DEEP`) |
| **Réessais** | Trois politiques explicites : `RETRY_RESILIENT` (6 tentatives, backoff exponentiel + jitter), `RETRY_SIMPLE` (2), `RETRY_NONE` (1) ; statuts réessayés : 429, 529 |
| **Débit** | Sémaphore de concurrence (`MISTRAL_MAX_CONCURRENCY`, défaut **2**) + espacement minimal (`MISTRAL_MIN_INTERVAL`, défaut 1 s), **partagés par tout le processus** ; un appel peut s'en exclure (`throttled=False` — c'est le cas du Stratège, synchrone) |
| **Réponse** | `LLMResponse` : texte, modèle réellement appelé, tokens d'entrée/sortie, `finish_reason` (détection de troncature) |
| **Sorties structurées** | Mode JSON demandé quand disponible, puis réparation (`json-repair`) ; pas de *function calling* |

**Hors périmètre actuel :** l'appel conversationnel de l'Orchestrateur (`app.py`, API Responses d'OpenAI, avec recherche web hébergée) n'est **pas** passé par `llm_client`.

### 4.2 Les quatre registres

Principe : *un Tool fait, un Skill enseigne comment, un Agent décide de quoi mobiliser.* L'enregistrement est vérifié au démarrage (un agent qui déclare un outil inexistant est refusé).

| Registre | Fichier | Contenu actuel |
|---|---|---|
| **Tools** | `tools/registry.py` | **22 outils** en 14 catégories : `adaptation`, `audience` (score, KPIs, dashboard), `collection` (YouTube / Instagram / TikTok), `comparison` (Cross), `content_quality`, `design`, `files`, `grounding` (vérification anti-hallucination), `intent` (classification, plan d'accès au contexte, handoff), `knowledge` (RAG, concept cards), `nlp`, `reporting` (PDF), `statistics`, `strategic_memory`. Chaque outil déclare : entrées, sortie, `deterministic`, `parallel_safe`, `cacheable`, `timeout_s`, `allowed_agents`. |
| **Skills** | `skills/registry.py` | **10 savoir-faire** : `psychology.human_understanding_grid`, `strategy.decision_reasoning`, `strategy.business_corpus` (39 méthodes), `writing.{content_structure, emotion_directive, human_voice, no_technical_leakage, persona_immersion, tone_discipline}`, `design.presentation_composition` |
| **Agents** | `agents/registry.py` + `agents/catalog.py` | **5 fiches** : `psychologue`, `stratege`, `createur`, `design` (disponibles) ; `architecte` (**planned**, non implémenté — `run()` lève `NotImplementedError`). Le statut est *constaté* au chargement (import réussi ou non). |
| **Mémoires** | `core/memory_manager.py` + `core/memories.py` | **5 mémoires**, toutes branchées (voir §4.5) |

> **Écart à connaître.** Les fiches d'agents déclarent peu d'outils : le Psychologue en déclare 3, le Stratège 1, le Créateur **0**, alors que les pipelines appellent en réalité davantage de fonctions. Le registre décrit le contrat visé ; il ne contraint pas encore l'exécution.

### 4.3 Planification et exécution — `core/planner.py`, `core/executor.py`

- Le **Planner ne fait aucun appel LLM** : il déduit l'ordre des agents des dépendances déclarées (tri topologique) et détecte cycles et objectifs inatteignables.
- L'**Executor** vérifie les entrées indispensables *avant* de lancer, déroule le plan, consigne une trace (issue et durée par étape) et nomme le mode dégradé.
- Aujourd'hui, `core/orchestrator.py` (classe `Gabriel`) s'en sert pour deux pipelines : `run_psycho` et `run_stratege`.

### 4.4 Critique — `core/critic.py`

Enveloppe commune de la « pensée adverse » : produire → soumettre à un examinateur → verdict structuré → ne jamais laisser l'examen casser la production. **Uniformise la démarche, pas le résultat** : le Stratège (6 champs, verdict `solide / à ajuster / fragile`) et le Créateur (liste de faiblesses, verdict `livrable / a_ameliorer`) gardent leurs propres schémas. Deux critiques sont déclarées (`critique.strategy`, `critique.creation`).

### 4.5 Les cinq mémoires

| Mémoire | Où elle vit | Portée |
|---|---|---|
| **Conversation** | Supabase `gabriel_chat_conversations` (métadonnées) | utilisateur + conversation + dossier |
| **Utilisateur** | **Fichier JSON par compte** (`data/profiles/`) — mécanisme le plus ancien | compte |
| **Business** | Cascade : requête → entretien stratégique (Supabase `gabriel_context_fields`) → profil utilisateur en dernier recours | compte / dossier |
| **Audience** | Rapports des agents d'un espace de travail (`gabriel_analyses`, `gabriel_strategies`…), chargés à la demande | dossier |
| **Stratégique** | Supabase `gabriel_memory_cases` : empreintes de cas, similarité pondérée (seuil 35/100, top 6), feedback | **cloisonnée par compte par défaut** ; partage inter-comptes sur option `MEMORY_SHARE_ACROSS_USERS=true` |

---

## 5. Les agents et leurs pipelines

### 5.1 Psychologue — `agents/psychologue.py` → `core/analyzer.py` (2 726 l.)

Pipeline d'une **analyse simple** (`analyze_comments`) — le déterministe d'abord, le LLM ensuite :

```
commentaires
  │ 1. NLP (embeddings, TF-IDF, clustering KMeans)              — zéro LLM
  │ 2. Scoring VADER + similarité cosinus                       — zéro LLM   [progress 20]
  │ 3. 6 KPIs mathématiques + livrables statistiques purs       — zéro LLM
  │ 4. Sélection des commentaires à forte valeur                — zéro LLM
  │ 5. Dashboard (avant tout appel LLM, sert de contexte)       — zéro LLM
  │ 6. RAG : base de connaissances + concept cards              — embeddings   [30]
  │ 7. LLM principal (palier deep) : analyse qualitative        — 1 appel      [40]
  │ 8. 6 appels LLM EN PARALLÈLE (ThreadPool, 6 workers)        [65]
  │      personas · recommandations · brief · livrables IA ·
  │      interprétation psychologique · interprétation socio-culturelle
  ▼
 résultat complet (brief, psychologie, émotions, marketing, personas, dashboard…)
```

Principe structurant : **tout ce qui peut être calculé l'est en Python pur**, isolé des appels LLM ; le LLM interprète des signaux mesurés, il ne les invente pas.

### 5.2 Cross Analyse — `core/cross_*.py`

Compare 2 à 5 sources (collecte séquentielle par défaut, 2 en parallèle au maximum) en gardant la provenance de chaque signal.

```
 sources ─► collecte (YouTube Provider) ─► nettoyage / dédoublonnage
        ─► analyse individuelle de chaque source (réutilise analyze_comments)
        ─► build_cross_analysis        : convergences / divergences, DÉTERMINISTE
                                         (rapprochement par libellé exact)
        ─► interpret_cross_analysis    : lecture LLM sur un « evidence pack » borné
        ─► run_dialectic_review        : contestations, hypothèses alternatives
        ─► synthesize_cross            : rapprochement PAR LE SENS (LLM) …
        ─► ground_synthesis            : … vérifié mécaniquement : chaque rapprochement
                                         doit citer un signal réel de chaque audience ;
                                         sinon il est retiré et compté
```

- Sortie : `source_profiles` (déterministe), `cross_synthesis` (rassemble, sépare, sujets, centres d'intérêt, à éviter, message commun), personas croisés.
- Persistée dans `gabriel_cross_analyses` + tables de sources ; réutilisée sans refacturation pendant `CROSS_ANALYSIS_CACHE_TTL_SECONDS` (3 600 s).
- Durée mesurée : ~9 minutes pour 2 vidéos (116 + 87 commentaires).
- `cross_as_psycho()` traduit une Cross dans la forme que lisent le Créateur **et** le Stratège (audiences nommées, jamais fusionnées).

### 5.3 Ariane (Stratège) — `agents/stratege.py` (655 l.)

```
 profil business + rapport Psychologue (JSON) + mémoire de cas + RAG (règles)
        │
        ▼
 1 appel LLM deep (8 000 tokens) ─► stratégie JSON (décision, offre, prix, 90 jours…)
        │
        ▼
 strategy_guard : aucun montant ni pourcentage hors données réelles
   contrôle déterministe → réécriture ciblée passage par passage → emplacement
        │
        ▼
 relecture critique indépendante (2e appel, contrarienne) ─► mêmes garde-fous
```

- **Garde-fou des chiffres** (`agents/strategy_guard.py`) : seules les données réellement fournies (profil business, rapport du Psychologue, titre) cautionnent un montant ; la mémoire de cas n'en est **pas** une source (ses prix viennent de stratégies précédentes de Gabriel).
- Peut partir d'une **Cross Analyse** : l'identifiant `cross_…` est accepté par `/strategize` et résolu en synthèse croisée, propriétaire vérifié.
- **Entretien business** (`agents/context_builder/`) : 7 dimensions (identité, vision, modèle économique, ressources, contraintes, historique, objectif), 33 champs ; extraction par LLM, plafond de 3 tours par dimension, pannes techniques distinguées des réponses vides, mode voix (ElevenLabs).

### 5.4 Créateur — `agents/creation/` (pipeline) + `agents/createur.py`

Pipeline en **10 étapes nommées**, `knowledge` (RAG) tournant en parallèle de `intent/context/emotion` :

```
 intent ─ context ─ emotion ─ [knowledge ∥] ─ planning ─ writing ─ dialectic
        ─ optimization ─ fact_guard ─ quality
```

| Étape | Rôle |
|---|---|
| `intent`, `context`, `emotion` | compréhension de la demande, assemblage du contexte (sans LLM), expérience émotionnelle visée |
| `knowledge` | RAG ciblé |
| `planning` | plan télégraphique (message, promesse, preuves, structure) |
| `writing` | **le seul endroit où le LLM écrit** ; prompt = système du format + règle des sources + plan + brief |
| `dialectic` | critique adverse du brouillon (ne réclame jamais de preuves absentes) |
| `optimization` | corrige uniquement les faiblesses critiques |
| `fact_guard` | **anti-invention** : contrôle déterministe (chiffres + unité, quantités Go/Mo/GHz, pseudos `@…`, devises) puis réécriture ciblée par lots (2 tours) des passages suspects (scènes présentées comme réelles, anecdotes personnelles, produit inventé, emplacements chiffrés) |
| `quality` | auto-évaluation ; si < 80, une passe d'optimisation supplémentaire |

- Sources de contexte **activables** : analyse du Psychologue (ou Cross Analyse), stratégie d'Ariane, ou aucune.
- Un **format inconnu est refusé** (liste des formats valides renvoyée) au lieu de devenir « 10 hooks ».
- Durée mesurée : **4 à 6 minutes** pour un script complet.
- Repli : si le pipeline échoue, retombée silencieuse sur le Créateur historique (`CREATOR_PIPELINE=0` pour le forcer).

### 5.5 Orchestrateur conversationnel — `agents/orchestrator/`

Module **sans appel réseau** (9 fichiers, stdlib) : `intent` (classification par mots-clés, outil déterministe `intent.classify`), `conversation_memory`, `context_access` (quels rapports charger), `mental_model`, `decision` (arbre à 5 issues : `clarify`, `recommend_specialist`, `research_then_answer`, `synthesize_existing`, `answer_directly`), `missions`, `response_directive`, `validator` (nettoyage regex, pas de critique sémantique).
L'appel LLM lui-même vit dans `app.py` (OpenAI, repli Mistral).
**Limite actuelle :** seule la mission *Psychologue* possède un bloc `execution` exploitable (analyse lancée depuis la conversation) ; Ariane et le Créateur ne sont pas pilotables depuis l'Orchestrateur.

### 5.6 Design Agent — `agents/design_agent.py`, `design_recipes.py`, `design_render.py`

Moteur de recettes de présentation pré-validées, **zéro LLM à l'exécution** ; compose une décision de mise en forme à partir de la forme du contenu (`design.describe_content_shape`). Branché en **aperçu** (journalisé, sans effet sur la réponse) après la génération de stratégie.

---

## 6. Travaux longs et persistance

Une analyse, une Cross Analyse ou une génération dure de quelques dizaines de secondes à ~10 minutes. Le serveur répond immédiatement par un `job_id` ; l'interface interroge (`/api/v2/jobs/<id>`, `/status/<id>`).

```
  POST /…/generate ─► crée job (mémoire `_jobs` + table gabriel_analysis_jobs)
                     └─► thread démon (pas de file, pas de broker)
                           ├─ à chaque étape : progression + battement de cœur en base
                           └─ fin : completed + result_data  |  failed + message
  GET  /api/v2/jobs/<id> ─► mémoire d'abord ; sinon base (survit au redémarrage)
```

| Sujet | État actuel |
|---|---|
| Exécution | Threads démons dans le processus Flask — **aucune file d'attente**, aucun worker séparé |
| État en mémoire | `_jobs` (plafond 100, éviction FIFO) ; `_psycho_cache` (analyses récentes) |
| Au redémarrage | Aucune reprise : au démarrage, les travaux « en cours » sans signe de vie depuis > 2 min passent en `interrupted` (`JOB_SWEEP_ON_START`) ; l'interface propose **« Relancer »** |
| Attente côté interface | Au temps réel : Créateur 15 min, analyse 20 min, Cross 40 min ; reprise après rechargement de page ; tolérance aux coupures réseau |
| Messages | Adaptés au type de travail (génération vs analyse) |
| Crédits | Forfaitaires : Psychologue 80, Stratège 50, Créateur 20 ; Cross proportionnelle au nombre de sources ; 300 offerts à l'inscription ; **décorrélés des tokens réellement consommés** |

---

## 7. Données

### 7.1 Supabase — 22 tables (`api/db.py`)

| Famille | Tables |
|---|---|
| Comptes et usage | `gabriel_users`, `gabriel_consent_records`, `gabriel_exports` |
| Analyses | `gabriel_analyses`, `gabriel_analysis_jobs`, `gabriel_folders` |
| Cross Analyse | `gabriel_cross_analyses`, `gabriel_cross_analysis_sources`, `gabriel_psychologue_sources`, `gabriel_source_comments` |
| Stratégies | `gabriel_strategies`, `gabriel_memory_cases`, `gabriel_feedbacks`, `gabriel_ux_settings` |
| Entretien business | `gabriel_context_sessions`, `gabriel_context_messages`, `gabriel_context_fields` |
| Conversation | `gabriel_chat_conversations`, `gabriel_chat_messages`, `gabriel_training_candidates` |
| Enquêtes | `gabriel_survey_events`, `gabriel_survey_responses` |

### 7.2 Fichiers locaux — `data/`

Repli quand Supabase est absent ou échoue (`history.json`, `strategies.json`, `feedbacks.json`, `cross_analyses.json`, `gabriel_memory.json`) **et** stockage des profils utilisateur (`data/profiles/{uid}.json`). Les fichiers racine `brain_profile.json` / `contexte_business.json` sont des vestiges.

### 7.3 Caches mémoire

`_jobs`, `_psycho_cache` (propres au processus), modèle d'embeddings chargé à la demande (`NLP_PRELOAD`), index RAG (`knowledge/_index/*.pkl`, `RAG_PRELOAD`).

---

## 8. API — familles de routes (94 déclarations dans `app.py`)

| Famille | Exemples | Rôle |
|---|---|---|
| Pages | `/`, `/orchestrateur`, `/tarifs`, `/landing-classique` | Landing et shell React ; les pages d'agents historiques **redirigent** vers le shell (`_vers_la_v2`) sauf `embedded=1` |
| `/api/v2/agents/psychologue/*` | `analyze`, `cross-analyses` (liste, création, statut, résultat, sources, personas, preuves) | Psychologue et Cross |
| `/api/v2/agents/stratege/*` | `generate`, `context` | Ariane |
| `/api/v2/agents/createur/*` | `generate`, `refine`, `save`, `history` | Créateur |
| `/api/v2/*` | `bootstrap`, `workspaces`, `jobs/<id>`, `conversations/*` | Shell, espaces de travail, suivi des travaux |
| `/api/folders/*` | CRUD des dossiers | Espaces de travail |
| Routes historiques | `/analyze`, `/strategize`, `/creator/*`, `/history*`, `/strategies*`, `/export/pdf/*`, `/credits`, `/feedback*`, `/voice/*`, `/business-context`, `/stripe/*` | Conservées pour compatibilité ; plusieurs sont des alias des routes v2 |
| `/api/studio/stratege/*`, `/studio/*` | réglages UX du Stratège | Administrateurs (`ADMIN_EMAILS`) |

Toutes les routes de données exigent une connexion, sauf les pages publiques, `/health` et le webhook Stripe (signature vérifiée).

---

## 9. Interface

- **Application** : React, un **shell unique** (`AppShell.jsx`) — rail de navigation, menu latéral (Accueil, Analyses, Cross Analyses, Stratégies, Espaces, Bibliothèque, Agents), onglets d'agents (Psychologue → Ariane, Créateur → Conversation, Activité, Mémoire), panneau de contexte.
- **Vues d'agents** : `PsychologueView.jsx` (2 697 l. — saisie, résultats en 5 onglets, **Salle Cross**), `StrategeView.jsx` (entretien, rapport), `CreatorConversation.jsx` (atelier de création, rendu structuré des résultats), `Conversation.jsx` (Orchestrateur).
- **Contrat avec l'API** : `api-client.js` (`fetchV2`, détection de redirection vers la connexion, lecture tolérante des réponses) ; `agent-registry.js` (agents, onglet par défaut = Psychologue, URL `?agent=`).
- **Design** : thème sombre natif (palette anthracite), mode clair disponible ; jetons `--gdi-*`, couleurs d'audience `--gv2-aud-0..4` ; navigation mobile en tiroir sous 640 px.
- **Transmissions entre agents** : `sessionStorage['gabriel_for_stratege']` (Psychologue/Salle Cross → Ariane), contexte d'analyse remonté au shell (`lastAnalysis`) pour le Créateur, `localStorage` pour la reprise des travaux (`gabriel_pending_job`, `gabriel_pending_creation`).
- **Build** : `npm run build:gabriel-v2` → `static/gabriel-v2/app.js|css` (**le bundle est versionné** ; il doit être recompilé après toute modification du frontend).

---

## 10. Sécurité et isolation

| Sujet | Mécanisme |
|---|---|
| **Authentification** | Google OAuth + e-mail ; sessions cookie (`HttpOnly`, `SameSite=Lax`, `Secure` en production) |
| **Mode développement** | `AUTH_ENABLED=false` : un utilisateur de test unique ; **interdit en déploiement** (démarrage refusé) |
| **Clé Supabase** | Clé **secrète** côté serveur : elle **contourne** les règles RLS. L'isolation entre utilisateurs repose donc **sur le code** ; les politiques RLS (`supabase/security_policies.sql`) sont une seconde barrière pour les accès avec clé publique |
| **Isolation vérifiée par tests** | Aucun utilisateur ne lit, ne liste, ne modifie ni ne supprime les analyses, stratégies, retours, Cross Analyses ni travaux d'un autre — **y compris via le repli fichiers** ; mémoire stratégique cloisonnée par compte |
| **Injection de prompt** | Défense en couches (`core/security.py`) : clause système, encadrement du contenu non fiable (`wrap_untrusted_content`), appliquée aussi au message de l'utilisateur |
| **Entrées** | Limites de taille, import de fichiers sur liste blanche (MIME + extension, 5 Mo, formules Excel neutralisées, rien n'est écrit sur disque) |
| **Débit** | Flask-Limiter par route et par utilisateur (`RATE_LIMIT_*`) |
| **Journalisation** | `safe_log_event` (logger structuré, secrets masqués) ; le reste est du `print()` non filtré |
| **Anti-invention** | `fact_guard` (Créateur), `strategy_guard` (Ariane), `ground_synthesis` (Cross) |

---

## 11. Qualité, tests et limites connues

### 11.1 Tests

- **Backend** : 945 tests pytest (67 fichiers). **Frontend** : 222 tests Vitest (19 fichiers).
- Les tests sensibles s'appuient sur de **vraies sorties** (payloads réels d'analyse, de Cross, de génération) conservées en fixtures.
- Discipline appliquée à chaque règle ajoutée : *falsification* — casser le code, vérifier que le test échoue, restaurer.
- Un test (`test_cross_failure_never_leaks_the_raw_exception_to_the_client`) échoue de façon intermittente quand toute la suite tourne (timing) ; il passe seul.

### 11.2 Limites connues (état des lieux honnête)

| # | Limite | Conséquence |
|---|---|---|
| L1 | **1 worker, threads dans le processus, état en mémoire** | Un redémarrage interrompt tout travail en cours ; impossible de monter à plusieurs workers sans déplacer `_jobs` et `_psycho_cache` |
| L2 | **Capacité LLM = 2 appels simultanés** (partagés par tous les utilisateurs) | Plusieurs utilisateurs en même temps → attente ; une génération complète dure déjà 4 à 6 min seule |
| L3 | `app.py` = 4 595 lignes (routes + logique + prompts + formatage) | Difficile à relire et à tester isolément |
| L4 | **Aucune observabilité de bout en bout** : pas de `run_id`, ~100 `print()`, pas d'APM | Impossible de suivre une mission dans les logs ou de mesurer un coût réel |
| L5 | Crédits forfaitaires, sans lien avec les tokens | Marge non pilotable |
| L6 | Orchestrateur : routage par mots-clés ; seule la mission Psychologue est exécutable | Pas d'orchestration multi-agents pilotée par la conversation |
| L7 | Deux modules « anti-invention » séparés (`fact_guard`, `strategy_guard`), à base de motifs | Duplication ; une scène présentée comme réelle peut encore passer (limite du modèle utilisé pour la réécriture) |
| L8 | Mémoire utilisateur en **fichier JSON** ; repli local actif en production si Supabase échoue | Hors Supabase, pas de sauvegarde ni d'isolation forte |
| L9 | Registre d'agents : déclarations d'outils partielles (Créateur : 0) | Le contrat est descriptif, pas contraignant |
| L10 | `PsychologueView.jsx` (2 697 l.), `AgentWorkspace.jsx` (2 340 l.) | Composants monolithiques |
| L11 | Pas de CI ; Python 3.9 en fin de vie | Régressions non détectées avant le déploiement |
| L12 | Cross : rapprochement mesuré par libellé exact (mitigé par la synthèse sémantique) | Les peurs/aspirations en texte libre se recoupent mal sans la couche LLM |
| L13 | Agent **Architecte** déclaré, non implémenté | — |
| L14 | Parcours d'inscription, connexion Google et paiement **non testés en réel** dans cette phase | À valider avant ouverture |

---

# PARTIE B — ARCHITECTURE CIBLE

> **Statut : proposition.** Les phases 1 à 6 de `docs/AUDIT_ARCHITECTURE.md` (client LLM unifié, registres Tools/Skills/Agents, Planner, Critic, Memory Manager) **sont réalisées** — c'est la partie A. La cible ci-dessous reprend les phases 7 à 9 de cet audit (orchestration multi-agents, sorties structurées, observabilité) et y ajoute les points que le fonctionnement réel a fait apparaître (L1 à L14).

## 12. Principes et décisions à prendre

### Principes (hérités de l'audit, conservés)

1. **Le déterministe d'abord, le LLM ensuite** — déjà la règle du Psychologue ; à généraliser.
2. **Aucun fait inventé** — toute affirmation chiffrée ou attribuée doit remonter à une donnée fournie ou mesurée.
3. **Chaque agent reste joignable seul** — l'orchestration ajoute, ne remplace pas.
4. **Pas d'architecture décorative** — une abstraction n'est introduite que si un besoin réel la justifie (ex. : pas de moteur de workflow générique tant que la Cross Analyse reste un pipeline Python clair).
5. **Isolation par construction** — la sécurité des données d'un compte ne doit pas dépendre de la discipline de chaque appelant.

### Décisions que l'équipe doit trancher

| # | Décision | Options | Impact |
|---|---|---|---|
| D1 | **Technologie d'exécution des travaux longs** | (a) file Redis + worker (RQ/Celery) · (b) file adossée à Supabase + worker dédié · (c) rester sur threads, mais état et reprise en base | Conditionne la montée en charge et la reprise (phase P1) |
| D2 | **Hébergement** | Render mono-worker actuel · plusieurs instances + worker séparé · autre plateforme | Coût, scalabilité |
| D3 | **Stratégie fournisseur LLM** | Mistral seul · Mistral + OpenAI par palier · routage par plan d'abonnement | Capacité (L2), coût |
| D4 | **Modèle de crédits** | Forfaitaire (actuel) · proportionnel aux tokens · mixte | Marge, lisibilité pour l'utilisateur |
| D5 | **Partage de la mémoire stratégique** | Cloisonnée (actuel) · apprentissage global opt-in | Valeur produit vs confidentialité |
| D6 | **Dépôt de référence** | `gabriel-mvp-` (historique) · `Gabriel-V2` (nouveau) | Qui pousse où, protection de `main` |
| D7 | **Propriété du chantier Stratège / Design Agent** | Travail enregistré tel quel depuis une autre session ; non revu dans le navigateur | Revue de code à planifier |

## 13. Schéma cible

```
                          ┌──────────────────────────────────────────────────────┐
                          │ Interface React (composants découpés, tests e2e)      │
                          └───────────────────────┬──────────────────────────────┘
                                                  │
                          ┌───────────────────────▼──────────────────────────────┐
                          │ API (Flask, découpée en blueprints)                   │
                          │ auth · analyses · cross · stratégie · création ·      │
                          │ conversation · facturation · admin                    │
                          │ ─ run_id sur chaque requête, quotas par plan ─        │
                          └───────┬──────────────────────────┬───────────────────┘
                                  │ enfile un travail         │ lit l'état
                          ┌───────▼──────────┐       ┌────────▼──────────────────┐
                          │ File de travaux   │       │ État des travaux (base)    │
                          │ (D1)              │──────►│ étapes, points de reprise  │
                          └───────┬──────────┘       └────────────────────────────┘
                                  │
                          ┌───────▼──────────────────────────────────────────────┐
                          │ Workers (processus séparés, N instances)              │
                          │   Gabriel Core : Planner → Executor (parallèle)       │
                          │   Agents : Psychologue · Ariane · Créateur ·          │
                          │            Design · Architecte                        │
                          │   Contrôle de contenu partagé : grounding + critic    │
                          └───────┬──────────────────────────┬───────────────────┘
                                  │                          │
                       ┌──────────▼─────────┐     ┌──────────▼───────────────────┐
                       │ Couche LLM unique   │     │ Données                       │
                       │ (tous les appels,   │     │ Supabase = seule source ;     │
                       │ y compris l'Orches- │     │ plus de repli local en prod ; │
                       │ trateur) + coûts    │     │ mémoire utilisateur en base   │
                       └──────────┬─────────┘     └───────────────────────────────┘
                                  │
                       ┌──────────▼───────────────────────────────────────────────┐
                       │ Observabilité : run_id · logs structurés · tokens → coût  │
                       └──────────────────────────────────────────────────────────┘
```

## 14. Feuille de route par phases

Ordre proposé : on **sécurise et on mesure avant d'étendre**. Chaque phase est indépendante et livrable seule.

| Phase | Contenu | Problème traité | Critère de fin |
|---|---|---|---|
| **P0 — Hygiène** | CI (tests backend + frontend + build à chaque push) ; passage à Python ≥ 3.11 ; découpage de `app.py` en blueprints **sans changement de comportement** ; suppression du code mort et des fichiers racine obsolètes | L3, L11 | Les 945 + 222 tests passent à l'identique ; `app.py` < 800 lignes ; CI verte obligatoire avant fusion |
| **P1 — Exécution durable** | État des travaux en base avec **points de reprise par étape** (ex. : Psychologue — NLP et scoring sauvegardés avant les appels LLM) ; worker séparé ; sortie de `_jobs` / `_psycho_cache` de la mémoire du processus ; ensuite seulement : plusieurs workers | L1 | Un redémarrage en pleine génération **reprend** au lieu d'interrompre ; test de reprise automatisé |
| **P2 — Observabilité et coûts** | `run_id` propagé de la requête à chaque appel LLM ; logs JSON structurés ; table des appels (modèle, tokens, durée, coût estimé) ; tableau de bord simple ; alerte (Sentry ou équivalent) | L4, L5 | Toute mission est traçable de bout en bout ; coût réel par analyse / stratégie / création connu |
| **P3 — Capacité et fournisseurs** | Orchestrateur conversationnel passé par la couche LLM unique ; quotas et priorités par plan ; plafond de concurrence réglé par plan Mistral ; second fournisseur en repli par palier ; modèle de crédits aligné sur le coût réel (D4) | L2, L5 | Test de charge : N utilisateurs simultanés sans échec, temps d'attente borné et affiché |
| **P4 — Fiabilité du contenu** | **Un seul module de vérification des affirmations** (fusion `fact_guard` + `strategy_guard` + `grounding.ground_claims`) ; sorties structurées distinguant FAIT / INFÉRENCE / HYPOTHÈSE pour Ariane et le Créateur ; jeu d'évaluation « références » (vraies sorties annotées) rejoué à chaque modification de prompt | L7 | Taux d'affirmations non sourcées mesuré et sous un seuil fixé ; régression de qualité détectée automatiquement |
| **P5 — Orchestration multi-agents** | L'Orchestrateur peut **lancer** Ariane et le Créateur (blocs `execution`) ; plan avec branches parallèles quand les dépendances le permettent ; routage par intention avec repli LLM (pas seulement des mots-clés) ; agent **Architecte** (offres, parcours) ; déclarations d'outils des agents rendues contraignantes | L6, L9, L13 | « Fais-moi une stratégie puis trois posts » s'exécute de bout en bout depuis la conversation, avec trace du plan |
| **P6 — Données et mémoire** | Mémoire utilisateur déplacée en base ; contexte business : une seule source de vérité ; suppression du repli fichier en production ; RLS appliquée comme seconde barrière ; politique de rétention et d'export (`/account/delete` existe déjà) | L8 | Aucune donnée utilisateur hors Supabase en production ; test d'isolation étendu à toutes les tables |
| **P7 — Interface** | Découpage de `PsychologueView` / `AgentWorkspace` en composants ; jetons de design partagés ; tests de bout en bout (parcours complet, mobile et ordinateur) ; accessibilité | L10 | Aucun fichier de composant > 800 lignes ; parcours e2e en CI |
| **P8 — Ouverture** | Parcours d'inscription, connexion Google et paiement testés en réel ; protocole bêta (5-10 testeurs) ; support | L14 | Un compte neuf va de l'inscription à une création sans intervention |

**Dépendances.** P0 précède tout. P1 précède P3 (la capacité suppose des travaux reprenables). P2 précède P3 et P4 (on ne règle pas ce qu'on ne mesure pas). P5 suppose P1 et P4.

## 15. Risques et critères de fin de phase

| Risque | Mitigation |
|---|---|
| Régression comportementale pendant le découpage de `app.py` (P0) | Découpage mécanique, tests existants comme filet, une route à la fois |
| Reprise de travaux incorrecte (P1) : double facturation ou résultat partiel | Points de reprise idempotents ; crédits débités une seule fois, à la complétion |
| Coût caché d'un second fournisseur (P3) | Évaluation de qualité (P4) avant bascule |
| Faux sentiment de sécurité du registre d'agents (L9) | Rendre les déclarations contraignantes avant d'orchestrer (P5) |
| Perte de travail non enregistré | Une branche par phase ; pas de fusion sans CI verte |

**Une phase est terminée si et seulement si :**
1. le comportement utilisateur est identique ou amélioré, **vérifié en conditions réelles** (navigateur, vraie source) ;
2. tous les tests existants passent et chaque règle ajoutée est falsifiée (le test échoue quand on casse le code) ;
3. les cas d'erreur (entrée invalide, délai dépassé, API indisponible, sortie illisible) dégradent proprement ;
4. rien n'est simulé, codé en dur ou non branché ;
5. la documentation (ce fichier, `docs/deploiement.md`, `.env.example`) est à jour.

---

# ANNEXES

## A. Variables d'environnement principales

| Variable | Rôle | Défaut |
|---|---|---|
| `FLASK_SECRET_KEY` | Signature des sessions (≥ 24 caractères en déploiement) | — (obligatoire) |
| `AUTH_ENABLED` | Authentification (**doit valoir `true` en déploiement**) | `false` |
| `GABRIEL_ENV` / `RENDER` | Déclare un serveur déployé | — |
| `MISTRAL_API_KEY`, `MISTRAL_MODEL_FAST/DEEP` | Mistral et modèles par palier | `mistral-small/large-latest` |
| `LLM_PROVIDER`, `OPENAI_API_KEY`, `OPENAI_MODEL_*` | Fournisseur alternatif | `mistral` |
| `MISTRAL_MAX_CONCURRENCY`, `MISTRAL_MIN_INTERVAL` | Plafond d'appels simultanés / espacement | `2` / `1.0` s |
| `SUPABASE_URL`, `SUPABASE_KEY` | Base (clé secrète, serveur uniquement) | — |
| `STRIPE_*`, `GOOGLE_CLIENT_*`, `YOUTUBE_API_KEY`, `RAPIDAPI_KEY`, `ELEVENLABS_*` | Services externes | — |
| `MEMORY_SHARE_ACROSS_USERS` | Partage de la mémoire stratégique entre comptes | `false` |
| `JOB_SWEEP_ON_START` | Marque les travaux orphelins au démarrage | `1` |
| `CREATOR_PIPELINE`, `CREATOR_MAX_TOKENS` | Moteur de création, longueur maximale | `1`, `12000` |
| `CROSS_ANALYSIS_CACHE_TTL_SECONDS` | Réutilisation d'une Cross identique | `3600` |
| `NLP_PRELOAD`, `RAG_PRELOAD`, `PREFER_IPV4` | Préchargements, IPv4 forcé | `true`, `false`, `true` |

Liste complète commentée : `.env.example`. Guide de mise en ligne : `docs/deploiement.md`.

## B. Glossaire

| Terme | Sens |
|---|---|
| **Espace de travail / dossier (folder)** | Conteneur d'une mission : source, analyse, stratégie, création |
| **Cross Analyse / Salle Cross** | Comparaison de plusieurs audiences sans les fusionner, et son écran de lecture |
| **Palier (tier)** | Niveau logique de modèle : `fast` ou `deep` |
| **Job** | Travail long exécuté en arrière-plan, suivi par identifiant |
| **Handoff** | Transmission d'un résultat d'un agent à un autre |
| **Grounding (ancrage)** | Vérification qu'une affirmation s'appuie sur une donnée réelle |
| **RAG** | Recherche documentaire sémantique qui enrichit les prompts |
| **Falsification (test)** | Casser volontairement le code pour vérifier que le test échoue |

## C. Commandes utiles

```bash
# Lancer en développement (depuis la racine du dépôt)
AUTH_ENABLED=false NLP_PRELOAD=false ./venv/bin/python3 -u app.py     # http://localhost:5050

# Tests
./venv/bin/python -m pytest tests/ -q                                 # backend
cd frontend-react && npx vitest run --testTimeout=60000               # frontend

# Recompiler l'interface (le bundle est versionné)
cd frontend-react && npm run build:gabriel-v2

# Vérifier l'état
curl localhost:5050/health
```

## D. Documents liés

- `docs/AUDIT_ARCHITECTURE.md` — audit de départ (août 2026) et plan de migration d'origine
- `docs/CAPABILITY_MAP.md` — carte des capacités
- `docs/deploiement.md` — mise en ligne et ouverture à d'autres utilisateurs
- `docs/beta_security_protocol.md` — protocole de bêta fermée
- `GABRIEL_IDENTITE_VISUELLE.md` — identité visuelle
