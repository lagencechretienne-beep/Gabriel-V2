-- ═══════════════════════════════════════════════════════════════════════════
-- GABRIEL — SCHÉMA SUPABASE COMPLET — VERSION TOUT-EN-UN (fichiers 01 à 04 réunis)
-- À coller en UNE fois dans Supabase → SQL Editor → Run. Idempotent.
-- Ensuite, exécuter 99_verify.sql pour vérifier.
-- (Fichier généré : ne pas le modifier à la main, modifier 01 à 04 puis régénérer.)
-- ═══════════════════════════════════════════════════════════════════════════


-- ################ 01_tables.sql ################
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
  credits        integer     not null default 300 check (credits >= 0),
  created_at     timestamptz not null default now(),
  last_login     timestamptz not null default now()
);

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

-- ################ 02_indexes_constraints.sql ################
-- ═══════════════════════════════════════════════════════════════════════════
-- GABRIEL — SCHÉMA SUPABASE COMPLET
-- Fichier 2/5 — INDEX ET LIAISONS ENTRE TABLES
--
-- Chaque index correspond à une requête réelle du code (filtre + tri), indiquée en
-- commentaire. Les liaisons (clés étrangères) ne relient que des tables qui naissent
-- ensemble : on évite volontairement une liaison vers gabriel_users, car le code tolère
-- l'absence de la ligne du compte (mode développement, session restée ouverte après une
-- suppression de compte) et une liaison transformerait cela en erreur d'écriture.
-- ═══════════════════════════════════════════════════════════════════════════

-- ── Comptes ────────────────────────────────────────────────────────────────
-- Connexion Google : eq('google_id', sub)
create unique index if not exists gabriel_users_google_id_uidx on public.gabriel_users (google_id) where google_id is not null;
-- Inscription e-mail : un seul compte à mot de passe par adresse (insensible à la casse)
create unique index if not exists gabriel_users_email_password_uidx on public.gabriel_users (lower(email)) where password_hash is not null;
-- Connexion / contrôle de doublon : eq('email', …)
create index if not exists gabriel_users_email_idx on public.gabriel_users (lower(email));

-- ── Espaces de travail ─────────────────────────────────────────────────────
-- get_folders : eq('user_id') + order('updated_at' desc)
create index if not exists gabriel_folders_user_updated_idx on public.gabriel_folders (user_id, updated_at desc);
create index if not exists gabriel_folders_cross_analysis_idx on public.gabriel_folders (cross_analysis_id);

-- ── Analyses / stratégies / retours / exports ──────────────────────────────
-- get_history : eq('user_id') [+ eq('folder_id')] + order('created_at' desc)
create index if not exists gabriel_analyses_user_created_idx on public.gabriel_analyses (user_id, created_at desc);
create index if not exists gabriel_analyses_user_folder_idx  on public.gabriel_analyses (user_id, folder_id, created_at desc);
-- get_strategies : eq('user_id') [+ eq('folder_id')] + order('created_at' desc)
create index if not exists gabriel_strategies_user_created_idx on public.gabriel_strategies (user_id, created_at desc);
create index if not exists gabriel_strategies_user_folder_idx  on public.gabriel_strategies (user_id, folder_id, created_at desc);
create index if not exists gabriel_strategies_analysis_idx     on public.gabriel_strategies (analysis_id);
-- get_feedbacks / _feedback_index : eq('user_id') + order('created_at' desc)
create index if not exists gabriel_feedbacks_user_created_idx on public.gabriel_feedbacks (user_id, created_at desc);
create index if not exists gabriel_feedbacks_analysis_idx     on public.gabriel_feedbacks (analysis_id);
create index if not exists gabriel_feedbacks_strategy_idx     on public.gabriel_feedbacks (strategy_id);
create index if not exists gabriel_exports_user_created_idx   on public.gabriel_exports (user_id, created_at desc);

-- ── Travaux longs ──────────────────────────────────────────────────────────
create index if not exists gabriel_jobs_user_created_idx on public.gabriel_analysis_jobs (user_id, created_at desc);
-- mark_stale_jobs_interrupted : in_('status', pending/running) + lt('updated_at', …)
create index if not exists gabriel_jobs_status_updated_idx on public.gabriel_analysis_jobs (status, updated_at);

-- ── Cross Analyse ──────────────────────────────────────────────────────────
create index if not exists gabriel_psychologue_sources_lookup_idx on public.gabriel_psychologue_sources (user_id, platform, external_id);
-- list_cross_analyses : eq('user_id') + order('created_at' desc)
create index if not exists gabriel_cross_analyses_user_created_idx   on public.gabriel_cross_analyses (user_id, created_at desc);
create index if not exists gabriel_cross_analyses_folder_created_idx on public.gabriel_cross_analyses (folder_id, created_at desc);
create index if not exists gabriel_cross_analyses_job_idx            on public.gabriel_cross_analyses (job_id);
create index if not exists gabriel_cross_sources_position_idx        on public.gabriel_cross_analysis_sources (cross_analysis_id, position);
create index if not exists gabriel_cross_sources_analysis_idx        on public.gabriel_cross_analysis_sources (analysis_id);
create index if not exists gabriel_source_comments_source_idx        on public.gabriel_source_comments (source_id, created_at);
create index if not exists gabriel_source_comments_user_idx          on public.gabriel_source_comments (user_id, source_id);

-- Une Cross Analyse supprimée emporte ses liens ; une source supprimée emporte ses commentaires.
do $$ begin
  if not exists (select 1 from pg_constraint where conname = 'gabriel_cross_sources_cross_fk') then
    alter table public.gabriel_cross_analysis_sources
      add constraint gabriel_cross_sources_cross_fk foreign key (cross_analysis_id)
      references public.gabriel_cross_analyses (cross_analysis_id) on delete cascade;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'gabriel_cross_sources_source_fk') then
    alter table public.gabriel_cross_analysis_sources
      add constraint gabriel_cross_sources_source_fk foreign key (source_id)
      references public.gabriel_psychologue_sources (source_id) on delete cascade;
  end if;
  if not exists (select 1 from pg_constraint where conname = 'gabriel_source_comments_source_fk') then
    alter table public.gabriel_source_comments
      add constraint gabriel_source_comments_source_fk foreign key (source_id)
      references public.gabriel_psychologue_sources (source_id) on delete cascade;
  end if;
end $$;

-- ── Entretien business ─────────────────────────────────────────────────────
-- resume_or_start : eq('user_id') + eq('status') [+ folder_id]
create index if not exists gabriel_ctx_sessions_user_status_idx on public.gabriel_context_sessions (user_id, status, current_step);
create index if not exists gabriel_ctx_sessions_folder_idx      on public.gabriel_context_sessions (folder_id);
create index if not exists gabriel_ctx_messages_session_idx     on public.gabriel_context_messages (session_id, created_at);
create index if not exists gabriel_ctx_messages_user_idx        on public.gabriel_context_messages (user_id);
create index if not exists gabriel_ctx_fields_user_idx          on public.gabriel_context_fields (user_id);

-- ── Conversation et mémoire stratégique ────────────────────────────────────
-- get_orchestrator_session_state : eq('id') + eq('user_id') + eq('agent')
create index if not exists gabriel_chat_conv_user_agent_idx on public.gabriel_chat_conversations (user_id, agent, updated_at desc);
create index if not exists gabriel_chat_msg_conversation_idx on public.gabriel_chat_messages (conversation_id, created_at);
create index if not exists gabriel_chat_msg_user_idx         on public.gabriel_chat_messages (user_id);
-- get_memory_cases : eq('user_id') + order('created_at' desc) ; pool global : order('created_at' desc) limit 300
create index if not exists gabriel_memory_cases_user_idx   on public.gabriel_memory_cases (user_id, created_at desc);
create index if not exists gabriel_memory_cases_recent_idx on public.gabriel_memory_cases (created_at desc);

-- ── Enquêtes, consentements, entraînement ──────────────────────────────────
create index if not exists gabriel_survey_events_user_idx    on public.gabriel_survey_events (user_id, shown_at desc);
create index if not exists gabriel_survey_responses_user_idx on public.gabriel_survey_responses (user_id, created_at desc);
create index if not exists gabriel_survey_responses_agent_idx on public.gabriel_survey_responses (agent);
-- get_consent : eq('user_id') + eq('consent_type') + order('created_at' desc) limit 1
create index if not exists gabriel_consent_lookup_idx        on public.gabriel_consent_records (user_id, consent_type, created_at desc);
create index if not exists gabriel_training_candidates_approved_idx on public.gabriel_training_candidates (approved_for_use);

-- ################ 03_security_rls.sql ################
-- ═══════════════════════════════════════════════════════════════════════════
-- GABRIEL — SCHÉMA SUPABASE COMPLET
-- Fichier 3/5 — SÉCURITÉ (RLS et droits)
--
-- Constat sur lequel repose ce fichier : le serveur Gabriel n'utilise QUE la clé secrète
-- (« service role »), qui contourne les règles RLS. Les rôles « anon » et « authenticated »
-- de Supabase ne servent à rien dans l'application (les comptes sont gérés par Gabriel, pas
-- par Supabase Auth). La posture la plus sûre est donc :
--   1. RLS activée sur CHAQUE table (aucune table lisible par défaut) ;
--   2. aucun droit pour anon et authenticated (une clé publique, si elle fuitait, ne lirait rien) ;
--   3. une politique « mes lignes » conservée, au cas où l'on passerait un jour à Supabase Auth
--      (il suffirait alors de rendre les droits à « authenticated »).
-- L'isolation entre utilisateurs repose, elle, sur le code (chaque requête filtre user_id) :
-- elle est vérifiée par tests/test_isolation_utilisateurs.py.
-- ═══════════════════════════════════════════════════════════════════════════

do $$
declare
  t text;
begin
  foreach t in array array[
    'gabriel_users','gabriel_folders','gabriel_analyses','gabriel_strategies','gabriel_feedbacks',
    'gabriel_exports','gabriel_analysis_jobs','gabriel_psychologue_sources','gabriel_cross_analyses',
    'gabriel_cross_analysis_sources','gabriel_source_comments','gabriel_context_sessions',
    'gabriel_context_messages','gabriel_context_fields','gabriel_chat_conversations',
    'gabriel_chat_messages','gabriel_memory_cases','gabriel_survey_events','gabriel_survey_responses',
    'gabriel_consent_records','gabriel_training_candidates'
  ] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists %I on public.%I', t || '_own_rows', t);
    execute format(
      'create policy %I on public.%I for all to authenticated using (auth.uid()::text = user_id) with check (auth.uid()::text = user_id)',
      t || '_own_rows', t);
  end loop;
end $$;

-- gabriel_users : l'identifiant du compte est user_id (déjà couvert ci-dessus).
-- gabriel_training_candidates.user_id peut être nul : la politique ci-dessus ne laisse alors rien passer.

-- Réglages d'interface : jamais d'accès direct, uniquement par le serveur.
alter table public.gabriel_ux_settings enable row level security;
drop policy if exists gabriel_ux_settings_no_direct_access on public.gabriel_ux_settings;
create policy gabriel_ux_settings_no_direct_access on public.gabriel_ux_settings
  for all using (false) with check (false);

-- Aucun droit pour les clés publiques (anon) ni pour les utilisateurs Supabase Auth.
revoke all on all tables    in schema public from anon, authenticated;
revoke all on all sequences in schema public from anon, authenticated;
revoke all on all functions in schema public from anon, authenticated;

-- Les futures tables du schéma public ne devront pas non plus être ouvertes par défaut.
alter default privileges in schema public revoke all on tables    from anon, authenticated;
alter default privileges in schema public revoke all on sequences from anon, authenticated;
alter default privileges in schema public revoke all on functions from anon, authenticated;

-- ################ 04_functions_triggers.sql ################
-- ═══════════════════════════════════════════════════════════════════════════
-- GABRIEL — SCHÉMA SUPABASE COMPLET
-- Fichier 4/5 — FONCTIONS ET DÉCLENCHEURS
--
-- Ce que ces fonctions règlent (constaté dans le code) :
--   • updated_at : le code le met à jour à la main, et pas partout. Le déclencheur le rend fiable
--     (il sert de « battement de cœur » pour repérer les travaux orphelins).
--   • Crédits : api/db.py:deduct_credits lit le solde puis le réécrit (deux requêtes). Deux
--     générations simultanées peuvent donc se marcher dessus et perdre un débit.
--     gabriel_deduct_credits le fait en UNE instruction atomique.
--   • Suppression de compte : app.py:account_delete efface 20 tables en 20 requêtes séparées
--     « au mieux » ; en cas d'échec au milieu, des données restent. gabriel_delete_user_data
--     le fait en UNE transaction : tout ou rien.
--   • Travaux orphelins et ménage des anciens travaux.
-- Ces fonctions sont réservées au serveur (service_role) : ni anon ni authenticated.
-- Le code actuel continue de fonctionner sans elles ; voir la fin du fichier 99 pour les brancher.
-- ═══════════════════════════════════════════════════════════════════════════

-- ── updated_at automatique ─────────────────────────────────────────────────
create or replace function public.gabriel_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end $$;

do $$
declare
  t text;
begin
  foreach t in array array[
    'gabriel_folders','gabriel_analysis_jobs','gabriel_cross_analyses','gabriel_context_sessions',
    'gabriel_context_fields','gabriel_chat_conversations','gabriel_memory_cases'
  ] loop
    execute format('drop trigger if exists %I on public.%I', t || '_set_updated_at', t);
    execute format(
      'create trigger %I before update on public.%I for each row execute function public.gabriel_set_updated_at()',
      t || '_set_updated_at', t);
  end loop;
end $$;

-- ── Débit de crédits atomique ──────────────────────────────────────────────
-- Retourne le nouveau solde, ou NULL si le compte n'existe pas. Ne descend jamais sous zéro
-- (même règle que le code : max(0, solde - coût)).
create or replace function public.gabriel_deduct_credits(p_user_id text, p_cost integer)
returns integer
language plpgsql
as $$
declare
  v_balance integer;
begin
  update public.gabriel_users
     set credits = greatest(0, credits - greatest(coalesce(p_cost, 0), 0))
   where user_id = p_user_id
  returning credits into v_balance;
  return v_balance;
end $$;

-- ── Suppression de compte : tout ou rien ───────────────────────────────────
-- Retourne, par table, le nombre de lignes supprimées.
create or replace function public.gabriel_delete_user_data(p_user_id text)
returns jsonb
language plpgsql
as $$
declare
  t text;
  n bigint;
  result jsonb := '{}'::jsonb;
begin
  if p_user_id is null or p_user_id = '' then
    raise exception 'user_id requis';
  end if;
  -- Ordre : les tables dépendantes d'abord (les liaisons en cascade couvrent le reste).
  foreach t in array array[
    'gabriel_source_comments','gabriel_cross_analysis_sources','gabriel_psychologue_sources',
    'gabriel_cross_analyses','gabriel_analysis_jobs','gabriel_exports','gabriel_feedbacks',
    'gabriel_analyses','gabriel_strategies','gabriel_folders',
    'gabriel_context_messages','gabriel_context_sessions','gabriel_context_fields',
    'gabriel_chat_messages','gabriel_chat_conversations','gabriel_memory_cases',
    'gabriel_survey_events','gabriel_survey_responses','gabriel_consent_records',
    'gabriel_training_candidates'
  ] loop
    execute format('delete from public.%I where user_id = $1', t) using p_user_id;
    get diagnostics n = row_count;
    result := result || jsonb_build_object(t, n);
  end loop;
  delete from public.gabriel_users where user_id = p_user_id;
  get diagnostics n = row_count;
  return result || jsonb_build_object('gabriel_users', n);
end $$;

-- ── Travaux orphelins (équivalent SQL du balayage fait au démarrage du serveur) ──
create or replace function public.gabriel_mark_stale_jobs(p_age_seconds integer default 120)
returns jsonb
language plpgsql
as $$
declare
  n_jobs bigint;
  n_cross bigint;
  cutoff timestamptz := now() - make_interval(secs => greatest(p_age_seconds, 0));
begin
  update public.gabriel_analysis_jobs
     set status = 'interrupted', error_message = 'Interrompu par un redémarrage du serveur.', completed_at = now()
   where status in ('pending','running') and updated_at < cutoff;
  get diagnostics n_jobs = row_count;
  update public.gabriel_cross_analyses
     set status = 'interrupted', error_message = 'Interrompu par un redémarrage du serveur.'
   where status in ('pending','running') and updated_at < cutoff;
  get diagnostics n_cross = row_count;
  return jsonb_build_object('jobs', n_jobs, 'cross', n_cross);
end $$;

-- ── Ménage : les résultats de travaux terminés pèsent lourd et sont déjà copiés ailleurs ──
create or replace function public.gabriel_purge_old_jobs(p_days integer default 30)
returns bigint
language plpgsql
as $$
declare
  n bigint;
begin
  delete from public.gabriel_analysis_jobs
   where status in ('completed','failed','interrupted')
     and coalesce(completed_at, updated_at) < now() - make_interval(days => greatest(p_days, 1));
  get diagnostics n = row_count;
  return n;
end $$;

-- ── Droits : réservées au serveur ──────────────────────────────────────────
revoke all on function public.gabriel_set_updated_at() from public, anon, authenticated;   -- fonction de déclencheur : jamais appelée à la main

do $$
declare
  f text;
begin
  foreach f in array array[
    'gabriel_deduct_credits(text,integer)', 'gabriel_delete_user_data(text)',
    'gabriel_mark_stale_jobs(integer)', 'gabriel_purge_old_jobs(integer)'
  ] loop
    execute format('revoke all on function public.%s from public, anon, authenticated', f);
    execute format('grant execute on function public.%s to service_role', f);
  end loop;
end $$;
