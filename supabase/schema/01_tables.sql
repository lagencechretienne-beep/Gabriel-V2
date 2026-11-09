-- ═══════════════════════════════════════════════════════════════════════════
-- GABRIEL — SCHÉMA SUPABASE COMPLET (refonte du 08/11/2026)
-- Fichier 1/5 — LES TABLES
--
-- À exécuter dans Supabase → SQL Editor, dans l'ordre : 01, 02, 03, 04, puis 99.
-- Tout est idempotent (IF NOT EXISTS) : on peut le rejouer sans risque.
--
-- Source de vérité : ce que le code lit et écrit réellement (api/db.py, api/auth.py,
-- app.py). Les noms de tables et de colonnes sont EXACTEMENT ceux du code : rien à
-- modifier côté application.
--
-- Colonnes texte : « default '' » SANS « not null », comme les migrations d'origine qui ont
-- tourné en production — le code peut écrire une valeur vide (None) sans faire échouer l'écriture.
--
-- Choix de conception (tous justifiés par le code) :
--   • user_id est TOUJOURS de type text. Les anciennes tables mélangeaient uuid et text
--     (gabriel_memory_cases.user_id était un uuid, alors que le code y écrit aussi
--     'global' et que le compte de développement est un texte). Une seule convention.
--   • Les identifiants fonctionnels (analysis_id, strategy_id, folder_id, job_id…) sont
--     des text : le code en génère des formes variées (uuid complet, uuid tronqué à 12 ou
--     16 caractères, préfixes cr_ / st_ / cross_).
--   • gabriel_chat_conversations.id est un text, pas un uuid : app.py peut y écrire un
--     identifiant tronqué (str(uuid4())[:16]), refusé par une colonne uuid.
--   • Aucun type énuméré strict sur les statuts : le code évolue, et une valeur nouvelle
--     ne doit pas faire échouer une écriture (voir les commentaires pour les valeurs connues).
-- ═══════════════════════════════════════════════════════════════════════════

-- gen_random_uuid() est natif depuis PostgreSQL 13 (Supabase est en 15+) : aucune extension à installer.

-- ───────────────────────────────────────────────────────────────────────────
-- 1. COMPTES  (api/auth.py, api/db.py : plan, crédits)
-- ───────────────────────────────────────────────────────────────────────────
create table if not exists public.gabriel_users (
  user_id        text        primary key,                 -- uuid4 en texte ; 'dec0de00-…-001' = compte de développement
  email          text        not null,
  name           text        default '',
  picture        text        default '',
  google_id      text,                                    -- null pour un compte e-mail
  password_hash  text,                                    -- null pour un compte Google (pbkdf2:sha256)
  plan           text        not null default 'free',     -- free | early_access | standard | pme (posé par le webhook Stripe)
  credits        integer     not null default 1500 check (credits >= 0),
  created_at     timestamptz not null default now(),
  last_login     timestamptz not null default now()
);

-- Projet déjà créé avant le 09/11/2026 : l'ancien défaut valait 300. Aligne sur 1500 (le serveur envoie aussi la valeur).
alter table public.gabriel_users alter column credits set default 1500;

-- ───────────────────────────────────────────────────────────────────────────
-- 2. ESPACES DE TRAVAIL (« dossiers »)
-- ───────────────────────────────────────────────────────────────────────────
create table if not exists public.gabriel_folders (
  id                 uuid        primary key default gen_random_uuid(),
  folder_id          text        not null unique,
  user_id            text        not null,
  title              text        not null,
  objective          text        default '',
  folder_type        text        not null default 'audience',  -- audience | workspace | concurrent | offre | avis | campagne | autre
  status             text        not null default 'active',    -- draft | active | archived
  step               text        not null default 'source',    -- source | psychologue | stratege | createur | verification
  analysis_id        text        default '',
  cross_analysis_id  text        default '',
  strategy_id        text        default '',
  creator_output_id  text        default '',
  source_type        text        default '',
  source_summary     text        default '',
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

-- ───────────────────────────────────────────────────────────────────────────
-- 3. ANALYSES, STRATÉGIES, RETOURS, EXPORTS
-- ───────────────────────────────────────────────────────────────────────────
create table if not exists public.gabriel_analyses (
  id               uuid        primary key default gen_random_uuid(),
  analysis_id      text        not null unique,
  user_id          text        not null,
  folder_id        text        default '',
  title            text        default '',
  source           text        default '',
  nb_commentaires  integer     not null default 0,
  input_data       jsonb       not null default '{}'::jsonb,
  result_data      jsonb       not null default '{}'::jsonb,   -- le rapport complet du Psychologue
  has_strategy     boolean     not null default false,
  strategy_id      text        default '',
  strategy_result  jsonb       not null default '{}'::jsonb,   -- copie de la stratégie liée
  created_at       timestamptz not null default now()
);

create table if not exists public.gabriel_strategies (
  id                uuid        primary key default gen_random_uuid(),
  strategy_id       text        not null unique,
  user_id           text        not null,
  analysis_id       text        default '',
  folder_id         text        default '',
  business_context  jsonb       not null default '{}'::jsonb,
  strategy_result   jsonb       not null default '{}'::jsonb,
  created_at        timestamptz not null default now()
);

create table if not exists public.gabriel_feedbacks (
  id                uuid        primary key default gen_random_uuid(),
  user_id           text        not null,
  analysis_id       text        default '',
  strategy_id       text        default '',
  usefulness_score  integer     check (usefulness_score between 1 and 5),
  was_useful        boolean,
  comment           text        default '',
  raw_data          jsonb       not null default '{}'::jsonb,   -- contient aussi « resultat » (positif / négatif)
  created_at        timestamptz not null default now()
);

create table if not exists public.gabriel_exports (
  id            uuid        primary key default gen_random_uuid(),
  user_id       text        not null,
  analysis_id   text        default '',
  strategy_id   text        default '',
  export_type   text        not null default 'pdf',
  pdf_path      text        default '',
  full_text     text        default '',
  metadata      jsonb       not null default '{}'::jsonb,
  created_at    timestamptz not null default now()
);

-- ───────────────────────────────────────────────────────────────────────────
-- 4. TRAVAUX LONGS  (/api/v2/jobs/<id>, balayage des orphelins au démarrage)
--    updated_at sert de « battement de cœur » : un travail pending/running dont
--    updated_at a plus de 2 minutes est marqué interrupted au démarrage.
-- ───────────────────────────────────────────────────────────────────────────
create table if not exists public.gabriel_analysis_jobs (
  id             uuid        primary key default gen_random_uuid(),
  job_id         text        not null unique,
  user_id        text        not null,
  folder_id      text        default '',
  analysis_id    text        default '',
  status         text        not null default 'pending',   -- pending | running | completed | failed | interrupted
  progress       integer     not null default 0 check (progress between 0 and 100),
  step           text        default '',
  error_message  text        default '',
  result_data    jsonb,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),
  completed_at   timestamptz
);

-- ───────────────────────────────────────────────────────────────────────────
-- 5. CROSS ANALYSE
-- ───────────────────────────────────────────────────────────────────────────
create table if not exists public.gabriel_psychologue_sources (
  id               uuid        primary key default gen_random_uuid(),
  source_id        text        not null unique,
  user_id          text        not null,
  platform         text        not null,
  external_id      text        not null,
  canonical_url    text        not null,
  source_metadata  jsonb       not null default '{}'::jsonb,
  created_at       timestamptz not null default now()
);

create table if not exists public.gabriel_cross_analyses (
  id                 uuid        primary key default gen_random_uuid(),
  cross_analysis_id  text        not null unique,
  user_id            text        not null,
  folder_id          text        default '',
  job_id             text        default '',
  status             text        not null default 'prepared',  -- prepared | running | completed | partial_success | failed | interrupted
  schema_version     text        not null default '1.0',
  pipeline_version   text        not null default 'cross-v1',
  model_version      text        default '',
  embedding_version  text        default '',
  source_count       integer     not null default 0,
  result_data        jsonb       not null default '{}'::jsonb,  -- synthèse, profils, personas, source_analyses…
  error_message      text        default '',
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

create table if not exists public.gabriel_cross_analysis_sources (
  id                 uuid        primary key default gen_random_uuid(),
  cross_analysis_id  text        not null,
  source_id          text        not null,
  user_id            text        not null,
  analysis_id        text        default '',
  position           integer     not null,
  status             text        not null default 'prepared',
  source_snapshot    jsonb       not null default '{}'::jsonb,
  source_analysis    jsonb       not null default '{}'::jsonb,
  created_at         timestamptz not null default now(),
  unique (cross_analysis_id, source_id),
  unique (cross_analysis_id, position)
);

create table if not exists public.gabriel_source_comments (
  id                   uuid        primary key default gen_random_uuid(),
  comment_id           text        not null unique,
  source_id            text        not null,
  user_id              text        not null,
  external_comment_id  text        default '',
  video_id             text        default '',
  text                 text        not null,
  author               text        default '',
  likes                integer     not null default 0,
  comment_metadata     jsonb       not null default '{}'::jsonb,
  created_at           timestamptz not null default now()
);

-- ───────────────────────────────────────────────────────────────────────────
-- 6. ENTRETIEN BUSINESS D'ARIANE  (agents/context_builder, core/strategy_session)
-- ───────────────────────────────────────────────────────────────────────────
create table if not exists public.gabriel_context_sessions (
  id                 uuid        primary key default gen_random_uuid(),
  session_id         text        not null unique,
  user_id            text        not null,
  folder_id          text        default '',
  status             text        not null default 'active',
  current_dimension  text        default '',          -- clé de agents/context_builder/schema.py
  current_step       text        not null default 'welcome',   -- étape du parcours stratégique
  analysis           jsonb       not null default '{}'::jsonb,
  marketing          jsonb       not null default '{}'::jsonb,
  branding           jsonb       not null default '{}'::jsonb,
  action_plan        jsonb       not null default '{}'::jsonb,
  decision           jsonb       not null default '{}'::jsonb,
  step_history       jsonb       not null default '[]'::jsonb,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now(),
  completed_at       timestamptz
);

create table if not exists public.gabriel_context_messages (
  id             uuid        primary key default gen_random_uuid(),
  session_id     text        not null,
  user_id        text        not null,
  role           text        not null,                          -- user | assistant
  content        text        not null,
  dimension_key  text        default '',
  created_at     timestamptz not null default now()
);

create table if not exists public.gabriel_context_fields (
  id                 uuid        primary key default gen_random_uuid(),
  user_id            text        not null,
  field_key          text        not null,
  value              text        not null,
  status             text        not null default 'extracted',
  confidence         real        not null default 1.0 check (confidence between 0 and 1),
  source_session_id  text        default '',
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now(),
  unique (user_id, field_key)                                   -- une valeur courante par champ et par utilisateur
);

-- ───────────────────────────────────────────────────────────────────────────
-- 7. CONVERSATION (Orchestrateur) ET MÉMOIRE STRATÉGIQUE
-- ───────────────────────────────────────────────────────────────────────────
create table if not exists public.gabriel_chat_conversations (
  id          text        primary key,                          -- fourni par le code (voir en-tête)
  user_id     text        not null,
  agent       text        not null default 'orchestrateur',
  title       text        default '',
  metadata    jsonb       not null default '{}'::jsonb,         -- folder_id, messages[-40:], mental_model
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create table if not exists public.gabriel_chat_messages (
  id                   uuid        primary key default gen_random_uuid(),
  user_id              text        not null,
  conversation_id      text        default '',
  role                 text        not null,
  message_text         text        default '',
  agent                text        default '',
  is_training_allowed  boolean     not null default false,      -- jamais true sans consentement explicite
  is_redacted          boolean     not null default false,
  metadata             jsonb       not null default '{}'::jsonb,
  created_at           timestamptz not null default now()
);

create table if not exists public.gabriel_memory_cases (
  id                 bigserial   primary key,
  case_id            text        not null unique,               -- = analysis_id ; cible de l'upsert (on_conflict='case_id')
  user_id            text        not null,
  case_date          date        not null default current_date,
  fingerprint        jsonb       not null default '{}'::jsonb,
  audience           jsonb       not null default '{}'::jsonb,
  strategie          jsonb       not null default '{}'::jsonb,
  contexte_business  jsonb       not null default '{}'::jsonb,
  feedback           jsonb,
  satisfaction       jsonb,
  performance        jsonb,
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

-- ───────────────────────────────────────────────────────────────────────────
-- 8. ENQUÊTES, CONSENTEMENTS, CANDIDATS D'ENTRAÎNEMENT, RÉGLAGES D'INTERFACE
-- ───────────────────────────────────────────────────────────────────────────
create table if not exists public.gabriel_survey_events (
  id            text        primary key,                        -- uuid fourni par le code
  user_id       text        not null,
  event_type    text        not null,                           -- after_analysis | after_strategy | after_creation | after_chat
  target_type   text        default '',
  target_id     text        default '',
  status        text        not null default 'shown',           -- shown | responded | dismissed | later
  shown_at      timestamptz not null default now(),
  responded_at  timestamptz,
  dismissed_at  timestamptz,
  metadata      jsonb       not null default '{}'::jsonb
);

create table if not exists public.gabriel_survey_responses (
  id                   uuid        primary key default gen_random_uuid(),
  user_id              text        not null,
  survey_event_id      text        default '',
  target_type          text        default '',
  target_id            text        default '',
  agent                text        default '',
  quick_answer         text        default '',
  relevance_score      integer     check (relevance_score between 1 and 5),
  clarity_score        integer     check (clarity_score between 1 and 5),
  usefulness_score     integer     check (usefulness_score between 1 and 5),
  actionability_score  integer     check (actionability_score between 1 and 5),
  free_feedback        text        default '' check (char_length(free_feedback) <= 2000),
  created_at           timestamptz not null default now()
);

create table if not exists public.gabriel_consent_records (
  id             uuid        primary key default gen_random_uuid(),
  user_id        text        not null,
  consent_type   text        not null,                          -- product_improvement | survey | analytics
  status         text        not null,                          -- granted | withdrawn
  source         text        default '',
  created_at     timestamptz not null default now(),
  withdrawn_at   timestamptz,
  metadata       jsonb       not null default '{}'::jsonb
);

create table if not exists public.gabriel_training_candidates (
  id                uuid        primary key default gen_random_uuid(),
  user_id           text,
  source_type       text        not null,
  source_id         text,
  content_summary   text,
  content_hash      text,
  quality_score     integer,
  risk_level        text        not null default 'unknown',
  anonymized        boolean     not null default false,
  approved_for_use  boolean     not null default false,         -- jamais true automatiquement
  reviewed_by       text,
  created_at        timestamptz not null default now(),
  metadata          jsonb       not null default '{}'::jsonb
);

create table if not exists public.gabriel_ux_settings (
  page_key      text        primary key,
  draft         jsonb       not null default '{}'::jsonb,
  published     jsonb       not null default '{}'::jsonb,
  history       jsonb       not null default '[]'::jsonb,
  version       integer     not null default 0,
  updated_by    text,
  updated_at    timestamptz not null default now(),
  published_at  timestamptz
);
