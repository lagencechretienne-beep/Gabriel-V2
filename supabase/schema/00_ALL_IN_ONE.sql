-- ═══════════════════════════════════════════════════════════════════════════
-- GABRIEL — SCHÉMA SUPABASE COMPLET — VERSION TOUT-EN-UN (fichiers 01 à 07 réunis)
-- À coller en UNE fois dans Supabase → SQL Editor → Run. Idempotent.
-- Ensuite, exécuter 99_verify.sql pour vérifier.
-- Inclut le registre de crédits, le garde-fou de budget et le durcissement de sécurité (Release Candidate V3).
-- Gabriel Prospect n'est PAS inclus (module retiré du produit lancé) : voir supabase/20261012_gabriel_prospect_mvp3.sql.
-- (Fichier généré : ne pas le modifier à la main, modifier 01 à 07 puis régénérer.)
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

-- ################ 05_credit_ledger.sql ################
-- ═══════════════════════════════════════════════════════════════════════════
-- GABRIEL — SCHÉMA SUPABASE — Fichier 05 — REGISTRE DE CRÉDITS (ledger)
-- Origine : Release Candidate V3 de Zinsoust (commit f7efda3), repris TEL QUEL depuis :
--   supabase/20261024_credit_ledger_phase1.sql puis supabase/20261026_credit_ledger_expiration_fix.sql
-- Ne pas modifier ici : corriger le fichier d'origine puis régénérer (voir README).
-- ═══════════════════════════════════════════════════════════════════════════

-- ##### 20261024_credit_ledger_phase1.sql #####
-- Gabriel V3 - Credit ledger, phase 1
-- Local/versioned migration. DO NOT APPLY TO A REMOTE PROJECT before review.
--
-- Non-destructive guarantees:
--   * creates new gabriel_credit_* objects only;
--   * never updates or deletes gabriel_users.credits;
--   * legacy balances are imported only by an explicit, idempotent RPC;
--   * the financial event ledger is append-only.

BEGIN;

CREATE TABLE IF NOT EXISTS public.gabriel_credit_accounts (
    user_id                 text PRIMARY KEY,
    available_credits       bigint NOT NULL DEFAULT 0 CHECK (available_credits >= 0),
    reserved_credits        bigint NOT NULL DEFAULT 0 CHECK (reserved_credits >= 0),
    lifetime_granted        bigint NOT NULL DEFAULT 0 CHECK (lifetime_granted >= 0),
    lifetime_captured       bigint NOT NULL DEFAULT 0 CHECK (lifetime_captured >= 0),
    created_at              timestamptz NOT NULL DEFAULT now(),
    updated_at              timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.gabriel_credit_grants (
    grant_id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id                 text NOT NULL REFERENCES public.gabriel_credit_accounts(user_id),
    source_type             text NOT NULL CHECK (source_type IN (
                                'legacy_migration', 'signup', 'subscription',
                                'topup', 'refund', 'adjustment'
                            )),
    source_key              text NOT NULL,
    granted_credits         bigint NOT NULL CHECK (granted_credits > 0),
    remaining_credits       bigint NOT NULL CHECK (remaining_credits >= 0),
    reserved_credits        bigint NOT NULL DEFAULT 0 CHECK (reserved_credits >= 0),
    starts_at               timestamptz NOT NULL DEFAULT now(),
    expires_at              timestamptz,
    metadata                jsonb NOT NULL DEFAULT '{}'::jsonb,
    created_at              timestamptz NOT NULL DEFAULT now(),
    UNIQUE (user_id, source_key),
    CHECK (remaining_credits + reserved_credits <= granted_credits),
    CHECK (expires_at IS NULL OR expires_at > starts_at)
);

CREATE INDEX IF NOT EXISTS idx_gabriel_credit_grants_spend_order
    ON public.gabriel_credit_grants (user_id, expires_at, created_at)
    WHERE remaining_credits > 0;

CREATE TABLE IF NOT EXISTS public.gabriel_credit_legacy_snapshots (
    user_id                 text PRIMARY KEY REFERENCES public.gabriel_credit_accounts(user_id),
    legacy_credits          bigint NOT NULL CHECK (legacy_credits >= 0),
    snapshot_key            text NOT NULL UNIQUE,
    imported_at             timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.gabriel_credit_reservations (
    reservation_id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id                 text NOT NULL REFERENCES public.gabriel_credit_accounts(user_id),
    operation_type          text NOT NULL,
    idempotency_key         text NOT NULL,
    request_hash            text NOT NULL,
    pricing_version         text NOT NULL DEFAULT 'phase1-provisional',
    quoted_credits          bigint NOT NULL CHECK (quoted_credits > 0),
    provider_budget_micros  bigint NOT NULL CHECK (provider_budget_micros >= 0),
    provider_spent_micros   bigint NOT NULL DEFAULT 0 CHECK (provider_spent_micros >= 0),
    uncertain_provider_micros bigint NOT NULL DEFAULT 0 CHECK (uncertain_provider_micros >= 0),
    captured_credits        bigint NOT NULL DEFAULT 0 CHECK (captured_credits >= 0),
    status                  text NOT NULL DEFAULT 'reserved' CHECK (status IN (
                                'reserved', 'running', 'uncertain',
                                'captured', 'released'
                            )),
    created_at              timestamptz NOT NULL DEFAULT now(),
    updated_at              timestamptz NOT NULL DEFAULT now(),
    finalised_at            timestamptz,
    UNIQUE (user_id, idempotency_key),
    CHECK (captured_credits <= quoted_credits),
    CHECK (provider_spent_micros <= provider_budget_micros),
    CHECK (uncertain_provider_micros <= provider_budget_micros)
);

CREATE INDEX IF NOT EXISTS idx_gabriel_credit_reservations_open
    ON public.gabriel_credit_reservations (user_id, created_at)
    WHERE status IN ('reserved', 'running', 'uncertain');

CREATE TABLE IF NOT EXISTS public.gabriel_credit_allocations (
    reservation_id          uuid NOT NULL REFERENCES public.gabriel_credit_reservations(reservation_id),
    grant_id                uuid NOT NULL REFERENCES public.gabriel_credit_grants(grant_id),
    reserved_credits        bigint NOT NULL CHECK (reserved_credits > 0),
    captured_credits        bigint NOT NULL DEFAULT 0 CHECK (captured_credits >= 0),
    released_credits        bigint NOT NULL DEFAULT 0 CHECK (released_credits >= 0),
    PRIMARY KEY (reservation_id, grant_id),
    CHECK (captured_credits + released_credits <= reserved_credits)
);

CREATE TABLE IF NOT EXISTS public.gabriel_credit_provider_usage (
    usage_id                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    reservation_id          uuid NOT NULL REFERENCES public.gabriel_credit_reservations(reservation_id),
    attempt_no              integer NOT NULL CHECK (attempt_no > 0),
    provider                text NOT NULL,
    model                   text NOT NULL,
    state                   text NOT NULL DEFAULT 'started' CHECK (state IN (
                                'started', 'succeeded', 'failed', 'uncertain'
                            )),
    max_cost_micros         bigint NOT NULL CHECK (max_cost_micros >= 0),
    actual_cost_micros      bigint CHECK (actual_cost_micros >= 0),
    input_tokens            bigint CHECK (input_tokens >= 0),
    output_tokens           bigint CHECK (output_tokens >= 0),
    provider_request_id     text,
    created_at              timestamptz NOT NULL DEFAULT now(),
    updated_at              timestamptz NOT NULL DEFAULT now(),
    UNIQUE (reservation_id, attempt_no),
    CHECK (actual_cost_micros IS NULL OR actual_cost_micros <= max_cost_micros)
);

CREATE UNIQUE INDEX IF NOT EXISTS uq_gabriel_credit_provider_request
    ON public.gabriel_credit_provider_usage (provider, provider_request_id)
    WHERE provider_request_id IS NOT NULL;

CREATE TABLE IF NOT EXISTS public.gabriel_credit_ledger (
    sequence_no             bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    event_id                uuid NOT NULL UNIQUE DEFAULT gen_random_uuid(),
    user_id                 text NOT NULL,
    event_type              text NOT NULL CHECK (event_type IN (
                                'grant', 'legacy_import', 'reserve', 'capture',
                                'release', 'uncertain', 'expire', 'adjustment'
                            )),
    grant_id                uuid REFERENCES public.gabriel_credit_grants(grant_id),
    reservation_id          uuid REFERENCES public.gabriel_credit_reservations(reservation_id),
    delta_available         bigint NOT NULL DEFAULT 0,
    delta_reserved          bigint NOT NULL DEFAULT 0,
    delta_consumed          bigint NOT NULL DEFAULT 0,
    provider_micros         bigint NOT NULL DEFAULT 0 CHECK (provider_micros >= 0),
    metadata                jsonb NOT NULL DEFAULT '{}'::jsonb,
    created_at              timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_gabriel_credit_ledger_user_sequence
    ON public.gabriel_credit_ledger (user_id, sequence_no);

CREATE OR REPLACE FUNCTION public.gabriel_credit_ledger_immutable()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = pg_catalog, pg_temp
AS $$
BEGIN
    RAISE EXCEPTION 'gabriel_credit_ledger is append-only';
END;
$$;

DROP TRIGGER IF EXISTS trg_gabriel_credit_ledger_immutable
    ON public.gabriel_credit_ledger;
CREATE TRIGGER trg_gabriel_credit_ledger_immutable
BEFORE UPDATE OR DELETE ON public.gabriel_credit_ledger
FOR EACH ROW EXECUTE FUNCTION public.gabriel_credit_ledger_immutable();

CREATE OR REPLACE FUNCTION public.gabriel_credit_assert_actor(
    p_authenticated_user_id text,
    p_user_id text
) RETURNS void
LANGUAGE plpgsql
IMMUTABLE
SET search_path = pg_catalog, pg_temp
AS $$
BEGIN
    IF nullif(btrim(p_authenticated_user_id), '') IS NULL
       OR p_authenticated_user_id IS DISTINCT FROM p_user_id THEN
        RAISE EXCEPTION 'credit ledger identity mismatch' USING ERRCODE = '42501';
    END IF;
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_credit_grant(
    p_authenticated_user_id text,
    p_user_id text,
    p_credits bigint,
    p_source_type text,
    p_source_key text,
    p_expires_at timestamptz DEFAULT NULL,
    p_metadata jsonb DEFAULT '{}'::jsonb
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_existing public.gabriel_credit_grants%ROWTYPE;
    v_grant public.gabriel_credit_grants%ROWTYPE;
BEGIN
    PERFORM public.gabriel_credit_assert_actor(p_authenticated_user_id, p_user_id);
    IF p_credits <= 0 OR nullif(btrim(p_source_key), '') IS NULL THEN
        RAISE EXCEPTION 'invalid credit grant';
    END IF;

    INSERT INTO public.gabriel_credit_accounts (user_id)
    VALUES (p_user_id) ON CONFLICT (user_id) DO NOTHING;
    PERFORM 1 FROM public.gabriel_credit_accounts
      WHERE user_id = p_user_id FOR UPDATE;

    SELECT * INTO v_existing
      FROM public.gabriel_credit_grants
     WHERE user_id = p_user_id AND source_key = p_source_key;
    IF FOUND THEN
        IF v_existing.granted_credits <> p_credits
           OR v_existing.source_type <> p_source_type
           OR v_existing.expires_at IS DISTINCT FROM p_expires_at THEN
            RAISE EXCEPTION 'grant idempotency conflict';
        END IF;
        RETURN to_jsonb(v_existing) || jsonb_build_object('idempotent', true);
    END IF;

    INSERT INTO public.gabriel_credit_grants (
        user_id, source_type, source_key, granted_credits,
        remaining_credits, expires_at, metadata
    ) VALUES (
        p_user_id, p_source_type, p_source_key, p_credits,
        p_credits, p_expires_at, coalesce(p_metadata, '{}'::jsonb)
    ) RETURNING * INTO v_grant;

    UPDATE public.gabriel_credit_accounts
       SET available_credits = available_credits + p_credits,
           lifetime_granted = lifetime_granted + p_credits,
           updated_at = now()
     WHERE user_id = p_user_id;

    INSERT INTO public.gabriel_credit_ledger (
        user_id, event_type, grant_id, delta_available, metadata
    ) VALUES (
        p_user_id, 'grant', v_grant.grant_id, p_credits,
        jsonb_build_object('source_type', p_source_type, 'source_key', p_source_key)
    );
    RETURN to_jsonb(v_grant) || jsonb_build_object('idempotent', false);
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_credit_import_legacy_balance(
    p_authenticated_user_id text,
    p_user_id text,
    p_legacy_credits bigint,
    p_snapshot_key text
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_snapshot public.gabriel_credit_legacy_snapshots%ROWTYPE;
    v_grant_id uuid;
BEGIN
    PERFORM public.gabriel_credit_assert_actor(p_authenticated_user_id, p_user_id);
    IF p_legacy_credits < 0 OR nullif(btrim(p_snapshot_key), '') IS NULL THEN
        RAISE EXCEPTION 'invalid legacy snapshot';
    END IF;

    INSERT INTO public.gabriel_credit_accounts (user_id)
    VALUES (p_user_id) ON CONFLICT (user_id) DO NOTHING;
    PERFORM 1 FROM public.gabriel_credit_accounts
      WHERE user_id = p_user_id FOR UPDATE;

    SELECT * INTO v_snapshot FROM public.gabriel_credit_legacy_snapshots
     WHERE user_id = p_user_id;
    IF FOUND THEN
        IF v_snapshot.legacy_credits <> p_legacy_credits
           OR v_snapshot.snapshot_key <> p_snapshot_key THEN
            RAISE EXCEPTION 'legacy balance already snapshotted with different data';
        END IF;
        RETURN jsonb_build_object(
            'user_id', p_user_id, 'legacy_credits', p_legacy_credits,
            'snapshot_key', p_snapshot_key, 'idempotent', true
        );
    END IF;

    INSERT INTO public.gabriel_credit_legacy_snapshots
        (user_id, legacy_credits, snapshot_key)
    VALUES (p_user_id, p_legacy_credits, p_snapshot_key);

    IF p_legacy_credits > 0 THEN
        INSERT INTO public.gabriel_credit_grants (
            user_id, source_type, source_key, granted_credits,
            remaining_credits, metadata
        ) VALUES (
            p_user_id, 'legacy_migration', 'legacy:' || p_snapshot_key,
            p_legacy_credits, p_legacy_credits,
            jsonb_build_object('snapshot_key', p_snapshot_key)
        ) RETURNING grant_id INTO v_grant_id;

        UPDATE public.gabriel_credit_accounts
           SET available_credits = available_credits + p_legacy_credits,
               lifetime_granted = lifetime_granted + p_legacy_credits,
               updated_at = now()
         WHERE user_id = p_user_id;
        INSERT INTO public.gabriel_credit_ledger (
            user_id, event_type, grant_id, delta_available, metadata
        ) VALUES (
            p_user_id, 'legacy_import', v_grant_id, p_legacy_credits,
            jsonb_build_object('snapshot_key', p_snapshot_key)
        );
    END IF;

    RETURN jsonb_build_object(
        'user_id', p_user_id, 'legacy_credits', p_legacy_credits,
        'snapshot_key', p_snapshot_key, 'idempotent', false
    );
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_credit_reserve(
    p_authenticated_user_id text,
    p_user_id text,
    p_operation_type text,
    p_idempotency_key text,
    p_request_hash text,
    p_credits bigint,
    p_provider_budget_micros bigint,
    p_pricing_version text DEFAULT 'phase1-provisional'
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_account public.gabriel_credit_accounts%ROWTYPE;
    v_existing public.gabriel_credit_reservations%ROWTYPE;
    v_reservation public.gabriel_credit_reservations%ROWTYPE;
    v_grant public.gabriel_credit_grants%ROWTYPE;
    v_remaining bigint;
    v_allocated bigint;
BEGIN
    PERFORM public.gabriel_credit_assert_actor(p_authenticated_user_id, p_user_id);
    IF p_credits <= 0 OR p_provider_budget_micros < 0
       OR nullif(btrim(p_operation_type), '') IS NULL
       OR nullif(btrim(p_idempotency_key), '') IS NULL
       OR nullif(btrim(p_request_hash), '') IS NULL THEN
        RAISE EXCEPTION 'invalid reservation';
    END IF;

    SELECT * INTO v_account FROM public.gabriel_credit_accounts
     WHERE user_id = p_user_id FOR UPDATE;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'insufficient credits' USING ERRCODE = 'P0001';
    END IF;

    SELECT * INTO v_existing FROM public.gabriel_credit_reservations
     WHERE user_id = p_user_id AND idempotency_key = p_idempotency_key;
    IF FOUND THEN
        IF v_existing.operation_type <> p_operation_type
           OR v_existing.request_hash <> p_request_hash
           OR v_existing.quoted_credits <> p_credits
           OR v_existing.provider_budget_micros <> p_provider_budget_micros
           OR v_existing.pricing_version <> p_pricing_version THEN
            RAISE EXCEPTION 'reservation idempotency conflict';
        END IF;
        RETURN to_jsonb(v_existing) || jsonb_build_object('idempotent', true);
    END IF;
    IF v_account.available_credits < p_credits THEN
        RAISE EXCEPTION 'insufficient credits' USING ERRCODE = 'P0001';
    END IF;

    INSERT INTO public.gabriel_credit_reservations (
        user_id, operation_type, idempotency_key, request_hash,
        pricing_version, quoted_credits, provider_budget_micros
    ) VALUES (
        p_user_id, p_operation_type, p_idempotency_key, p_request_hash,
        p_pricing_version, p_credits, p_provider_budget_micros
    ) RETURNING * INTO v_reservation;

    v_remaining := p_credits;
    FOR v_grant IN
        SELECT * FROM public.gabriel_credit_grants
         WHERE user_id = p_user_id AND remaining_credits > 0
           AND starts_at <= now()
           AND (expires_at IS NULL OR expires_at > now())
         ORDER BY expires_at ASC NULLS LAST, created_at, grant_id
         FOR UPDATE
    LOOP
        EXIT WHEN v_remaining = 0;
        v_allocated := least(v_remaining, v_grant.remaining_credits);
        UPDATE public.gabriel_credit_grants
           SET remaining_credits = remaining_credits - v_allocated,
               reserved_credits = reserved_credits + v_allocated
         WHERE grant_id = v_grant.grant_id;
        INSERT INTO public.gabriel_credit_allocations
            (reservation_id, grant_id, reserved_credits)
        VALUES (v_reservation.reservation_id, v_grant.grant_id, v_allocated);
        v_remaining := v_remaining - v_allocated;
    END LOOP;
    IF v_remaining <> 0 THEN
        RAISE EXCEPTION 'account and grant balances diverged';
    END IF;

    UPDATE public.gabriel_credit_accounts
       SET available_credits = available_credits - p_credits,
           reserved_credits = reserved_credits + p_credits,
           updated_at = now()
     WHERE user_id = p_user_id;
    INSERT INTO public.gabriel_credit_ledger (
        user_id, event_type, reservation_id, delta_available,
        delta_reserved, provider_micros, metadata
    ) VALUES (
        p_user_id, 'reserve', v_reservation.reservation_id,
        -p_credits, p_credits, p_provider_budget_micros,
        jsonb_build_object('operation_type', p_operation_type,
                           'pricing_version', p_pricing_version)
    );
    RETURN to_jsonb(v_reservation) || jsonb_build_object('idempotent', false);
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_credit_record_provider_attempt(
    p_authenticated_user_id text,
    p_user_id text,
    p_reservation_id uuid,
    p_attempt_no integer,
    p_provider text,
    p_model text,
    p_max_cost_micros bigint,
    p_provider_request_id text DEFAULT NULL
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_reservation public.gabriel_credit_reservations%ROWTYPE;
    v_existing public.gabriel_credit_provider_usage%ROWTYPE;
    v_usage public.gabriel_credit_provider_usage%ROWTYPE;
    v_reserved bigint;
BEGIN
    PERFORM public.gabriel_credit_assert_actor(p_authenticated_user_id, p_user_id);
    SELECT * INTO v_reservation FROM public.gabriel_credit_reservations
     WHERE reservation_id = p_reservation_id AND user_id = p_user_id FOR UPDATE;
    IF NOT FOUND THEN RAISE EXCEPTION 'reservation not found'; END IF;

    SELECT * INTO v_existing FROM public.gabriel_credit_provider_usage
     WHERE reservation_id = p_reservation_id AND attempt_no = p_attempt_no;
    IF FOUND THEN
        IF v_existing.provider <> p_provider OR v_existing.model <> p_model
           OR v_existing.max_cost_micros <> p_max_cost_micros
           OR v_existing.provider_request_id IS DISTINCT FROM p_provider_request_id THEN
            RAISE EXCEPTION 'provider attempt idempotency conflict';
        END IF;
        RETURN to_jsonb(v_existing) || jsonb_build_object('idempotent', true);
    END IF;
    IF v_reservation.status NOT IN ('reserved', 'running') THEN
        RAISE EXCEPTION 'provider attempt not allowed from state %', v_reservation.status;
    END IF;
    SELECT coalesce(sum(max_cost_micros), 0) INTO v_reserved
      FROM public.gabriel_credit_provider_usage
     WHERE reservation_id = p_reservation_id;
    IF p_attempt_no <= 0 OR p_max_cost_micros < 0
       OR v_reserved + p_max_cost_micros > v_reservation.provider_budget_micros THEN
        RAISE EXCEPTION 'provider attempt exceeds reservation budget';
    END IF;

    INSERT INTO public.gabriel_credit_provider_usage (
        reservation_id, attempt_no, provider, model, max_cost_micros,
        provider_request_id
    ) VALUES (
        p_reservation_id, p_attempt_no, p_provider, p_model,
        p_max_cost_micros, p_provider_request_id
    ) RETURNING * INTO v_usage;
    UPDATE public.gabriel_credit_reservations
       SET status = 'running', updated_at = now()
     WHERE reservation_id = p_reservation_id;
    RETURN to_jsonb(v_usage) || jsonb_build_object('idempotent', false);
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_credit_settle_provider_attempt(
    p_authenticated_user_id text,
    p_user_id text,
    p_reservation_id uuid,
    p_attempt_no integer,
    p_state text,
    p_actual_cost_micros bigint DEFAULT NULL,
    p_input_tokens bigint DEFAULT NULL,
    p_output_tokens bigint DEFAULT NULL
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_usage public.gabriel_credit_provider_usage%ROWTYPE;
BEGIN
    PERFORM public.gabriel_credit_assert_actor(p_authenticated_user_id, p_user_id);
    PERFORM 1 FROM public.gabriel_credit_reservations
     WHERE reservation_id = p_reservation_id AND user_id = p_user_id FOR UPDATE;
    IF NOT FOUND THEN RAISE EXCEPTION 'reservation not found'; END IF;
    SELECT * INTO v_usage FROM public.gabriel_credit_provider_usage
     WHERE reservation_id = p_reservation_id AND attempt_no = p_attempt_no FOR UPDATE;
    IF NOT FOUND THEN RAISE EXCEPTION 'provider attempt not found'; END IF;
    IF p_state NOT IN ('succeeded', 'failed', 'uncertain')
       OR (p_state IN ('succeeded', 'failed') AND p_actual_cost_micros IS NULL)
       OR p_actual_cost_micros < 0
       OR p_actual_cost_micros > v_usage.max_cost_micros THEN
        RAISE EXCEPTION 'invalid provider settlement';
    END IF;
    IF v_usage.state <> 'started'
       AND NOT (v_usage.state = 'uncertain'
                AND p_state IN ('succeeded', 'failed')
                AND p_actual_cost_micros IS NOT NULL) THEN
        IF v_usage.state <> p_state
           OR v_usage.actual_cost_micros IS DISTINCT FROM p_actual_cost_micros
           OR v_usage.input_tokens IS DISTINCT FROM p_input_tokens
           OR v_usage.output_tokens IS DISTINCT FROM p_output_tokens THEN
            RAISE EXCEPTION 'provider settlement idempotency conflict';
        END IF;
        RETURN to_jsonb(v_usage) || jsonb_build_object('idempotent', true);
    END IF;
    UPDATE public.gabriel_credit_provider_usage
       SET state = p_state, actual_cost_micros = p_actual_cost_micros,
           input_tokens = p_input_tokens, output_tokens = p_output_tokens,
           updated_at = now()
     WHERE usage_id = v_usage.usage_id RETURNING * INTO v_usage;
    RETURN to_jsonb(v_usage) || jsonb_build_object('idempotent', false);
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_credit_release(
    p_authenticated_user_id text,
    p_user_id text,
    p_reservation_id uuid
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_reservation public.gabriel_credit_reservations%ROWTYPE;
    v_allocation public.gabriel_credit_allocations%ROWTYPE;
BEGIN
    PERFORM public.gabriel_credit_assert_actor(p_authenticated_user_id, p_user_id);
    SELECT * INTO v_reservation FROM public.gabriel_credit_reservations
     WHERE reservation_id = p_reservation_id AND user_id = p_user_id FOR UPDATE;
    IF NOT FOUND THEN RAISE EXCEPTION 'reservation not found'; END IF;
    IF v_reservation.status = 'released' THEN
        RETURN to_jsonb(v_reservation) || jsonb_build_object('idempotent', true);
    END IF;
    IF v_reservation.status <> 'reserved'
       OR EXISTS (SELECT 1 FROM public.gabriel_credit_provider_usage
                   WHERE reservation_id = p_reservation_id) THEN
        RAISE EXCEPTION 'only a never-started reservation can be released';
    END IF;

    FOR v_allocation IN SELECT * FROM public.gabriel_credit_allocations
                         WHERE reservation_id = p_reservation_id FOR UPDATE
    LOOP
        UPDATE public.gabriel_credit_grants
           SET reserved_credits = reserved_credits - v_allocation.reserved_credits,
               remaining_credits = remaining_credits + v_allocation.reserved_credits
         WHERE grant_id = v_allocation.grant_id;
        UPDATE public.gabriel_credit_allocations
           SET released_credits = reserved_credits
         WHERE reservation_id = p_reservation_id
           AND grant_id = v_allocation.grant_id;
    END LOOP;
    UPDATE public.gabriel_credit_accounts
       SET available_credits = available_credits + v_reservation.quoted_credits,
           reserved_credits = reserved_credits - v_reservation.quoted_credits,
           updated_at = now() WHERE user_id = p_user_id;
    UPDATE public.gabriel_credit_reservations
       SET status = 'released', finalised_at = now(), updated_at = now()
     WHERE reservation_id = p_reservation_id RETURNING * INTO v_reservation;
    INSERT INTO public.gabriel_credit_ledger (
        user_id, event_type, reservation_id, delta_available, delta_reserved
    ) VALUES (
        p_user_id, 'release', p_reservation_id,
        v_reservation.quoted_credits, -v_reservation.quoted_credits
    );
    RETURN to_jsonb(v_reservation) || jsonb_build_object('idempotent', false);
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_credit_capture(
    p_authenticated_user_id text,
    p_user_id text,
    p_reservation_id uuid,
    p_captured_credits bigint DEFAULT NULL,
    p_provider_spent_micros bigint DEFAULT 0
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_reservation public.gabriel_credit_reservations%ROWTYPE;
    v_allocation public.gabriel_credit_allocations%ROWTYPE;
    v_capture bigint;
    v_alloc_capture bigint;
    v_alloc_release bigint;
    v_remaining_capture bigint;
    v_released bigint := 0;
    v_attempts bigint;
    v_billable_ceiling bigint;
    v_pending_attempts bigint;
BEGIN
    PERFORM public.gabriel_credit_assert_actor(p_authenticated_user_id, p_user_id);
    SELECT * INTO v_reservation FROM public.gabriel_credit_reservations
     WHERE reservation_id = p_reservation_id AND user_id = p_user_id FOR UPDATE;
    IF NOT FOUND THEN RAISE EXCEPTION 'reservation not found'; END IF;
    v_capture := coalesce(p_captured_credits, v_reservation.quoted_credits);
    IF v_capture < 0 OR v_capture > v_reservation.quoted_credits
       OR p_provider_spent_micros < 0
       OR p_provider_spent_micros > v_reservation.provider_budget_micros THEN
        RAISE EXCEPTION 'capture exceeds reservation';
    END IF;
    IF v_reservation.status = 'captured' THEN
        IF v_reservation.captured_credits <> v_capture
           OR v_reservation.provider_spent_micros <> p_provider_spent_micros THEN
            RAISE EXCEPTION 'capture idempotency conflict';
        END IF;
        RETURN to_jsonb(v_reservation) || jsonb_build_object('idempotent', true);
    END IF;
    IF v_reservation.status NOT IN ('reserved', 'running', 'uncertain') THEN
        RAISE EXCEPTION 'reservation cannot be captured from state %', v_reservation.status;
    END IF;
    SELECT count(*),
           count(*) FILTER (WHERE state IN ('started', 'uncertain')),
           coalesce(sum(actual_cost_micros), 0)
      INTO v_attempts, v_pending_attempts, v_billable_ceiling
      FROM public.gabriel_credit_provider_usage
     WHERE reservation_id = p_reservation_id;
    IF v_capture > 0 AND v_attempts = 0 THEN
        RAISE EXCEPTION 'credits cannot be captured before a provider attempt';
    END IF;
    IF v_pending_attempts > 0 THEN
        RAISE EXCEPTION 'provider usage must be reconciled before capture';
    END IF;
    IF p_provider_spent_micros > v_billable_ceiling THEN
        RAISE EXCEPTION 'provider spend exceeds settled usage';
    END IF;

    v_remaining_capture := v_capture;
    FOR v_allocation IN SELECT * FROM public.gabriel_credit_allocations
                         WHERE reservation_id = p_reservation_id
                         ORDER BY grant_id FOR UPDATE
    LOOP
        v_alloc_capture := least(v_remaining_capture, v_allocation.reserved_credits);
        v_alloc_release := v_allocation.reserved_credits - v_alloc_capture;
        v_remaining_capture := v_remaining_capture - v_alloc_capture;
        v_released := v_released + v_alloc_release;
        UPDATE public.gabriel_credit_allocations
           SET captured_credits = v_alloc_capture,
               released_credits = v_alloc_release
         WHERE reservation_id = p_reservation_id
           AND grant_id = v_allocation.grant_id;
        UPDATE public.gabriel_credit_grants
           SET reserved_credits = reserved_credits - v_allocation.reserved_credits,
               remaining_credits = remaining_credits + v_alloc_release
         WHERE grant_id = v_allocation.grant_id;
    END LOOP;
    IF v_remaining_capture <> 0 THEN
        RAISE EXCEPTION 'allocation total lower than capture';
    END IF;

    UPDATE public.gabriel_credit_accounts
       SET available_credits = available_credits + v_released,
           reserved_credits = reserved_credits - v_reservation.quoted_credits,
           lifetime_captured = lifetime_captured + v_capture,
           updated_at = now() WHERE user_id = p_user_id;
    UPDATE public.gabriel_credit_reservations
       SET status = 'captured', captured_credits = v_capture,
           provider_spent_micros = p_provider_spent_micros,
           uncertain_provider_micros = 0,
           finalised_at = now(), updated_at = now()
     WHERE reservation_id = p_reservation_id RETURNING * INTO v_reservation;
    IF v_capture > 0 THEN
        INSERT INTO public.gabriel_credit_ledger (
            user_id, event_type, reservation_id, delta_reserved,
            delta_consumed, provider_micros
        ) VALUES (
            p_user_id, 'capture', p_reservation_id, -v_capture,
            v_capture, p_provider_spent_micros
        );
    END IF;
    IF v_released > 0 THEN
        INSERT INTO public.gabriel_credit_ledger (
            user_id, event_type, reservation_id, delta_available, delta_reserved
        ) VALUES (p_user_id, 'release', p_reservation_id, v_released, -v_released);
    END IF;
    RETURN to_jsonb(v_reservation) || jsonb_build_object('idempotent', false);
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_credit_mark_uncertain(
    p_authenticated_user_id text,
    p_user_id text,
    p_reservation_id uuid,
    p_uncertain_provider_micros bigint
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_reservation public.gabriel_credit_reservations%ROWTYPE;
BEGIN
    PERFORM public.gabriel_credit_assert_actor(p_authenticated_user_id, p_user_id);
    SELECT * INTO v_reservation FROM public.gabriel_credit_reservations
     WHERE reservation_id = p_reservation_id AND user_id = p_user_id FOR UPDATE;
    IF NOT FOUND THEN RAISE EXCEPTION 'reservation not found'; END IF;
    IF p_uncertain_provider_micros < 0
       OR p_uncertain_provider_micros > v_reservation.provider_budget_micros THEN
        RAISE EXCEPTION 'uncertain provider amount exceeds reservation';
    END IF;
    IF v_reservation.status = 'uncertain' THEN
        IF v_reservation.uncertain_provider_micros <> p_uncertain_provider_micros THEN
            RAISE EXCEPTION 'uncertain state idempotency conflict';
        END IF;
        RETURN to_jsonb(v_reservation) || jsonb_build_object('idempotent', true);
    END IF;
    IF v_reservation.status NOT IN ('reserved', 'running') THEN
        RAISE EXCEPTION 'reservation cannot become uncertain';
    END IF;
    UPDATE public.gabriel_credit_reservations
       SET status = 'uncertain',
           uncertain_provider_micros = p_uncertain_provider_micros,
           updated_at = now()
     WHERE reservation_id = p_reservation_id RETURNING * INTO v_reservation;
    INSERT INTO public.gabriel_credit_ledger (
        user_id, event_type, reservation_id, provider_micros
    ) VALUES (p_user_id, 'uncertain', p_reservation_id, p_uncertain_provider_micros);
    RETURN to_jsonb(v_reservation) || jsonb_build_object('idempotent', false);
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_credit_expire_grants(
    p_cutoff timestamptz DEFAULT now()
) RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_grant public.gabriel_credit_grants%ROWTYPE;
    v_count bigint := 0;
BEGIN
    FOR v_grant IN
        SELECT * FROM public.gabriel_credit_grants
         WHERE expires_at IS NOT NULL AND expires_at <= p_cutoff
           AND remaining_credits > 0
         ORDER BY user_id, expires_at, grant_id FOR UPDATE
    LOOP
        UPDATE public.gabriel_credit_grants
           SET remaining_credits = 0 WHERE grant_id = v_grant.grant_id;
        UPDATE public.gabriel_credit_accounts
           SET available_credits = available_credits - v_grant.remaining_credits,
               updated_at = now() WHERE user_id = v_grant.user_id;
        INSERT INTO public.gabriel_credit_ledger (
            user_id, event_type, grant_id, delta_available
        ) VALUES (
            v_grant.user_id, 'expire', v_grant.grant_id,
            -v_grant.remaining_credits
        );
        v_count := v_count + 1;
    END LOOP;
    RETURN v_count;
END;
$$;

ALTER TABLE public.gabriel_credit_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gabriel_credit_grants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gabriel_credit_legacy_snapshots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gabriel_credit_reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gabriel_credit_allocations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gabriel_credit_provider_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gabriel_credit_ledger ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.gabriel_credit_accounts FROM anon, authenticated;
REVOKE ALL ON TABLE public.gabriel_credit_grants FROM anon, authenticated;
REVOKE ALL ON TABLE public.gabriel_credit_legacy_snapshots FROM anon, authenticated;
REVOKE ALL ON TABLE public.gabriel_credit_reservations FROM anon, authenticated;
REVOKE ALL ON TABLE public.gabriel_credit_allocations FROM anon, authenticated;
REVOKE ALL ON TABLE public.gabriel_credit_provider_usage FROM anon, authenticated;
REVOKE ALL ON TABLE public.gabriel_credit_ledger FROM anon, authenticated;

-- Internal functions are invoked only by their trigger or by SECURITY DEFINER
-- RPCs. Callers, including service_role, do not need direct EXECUTE rights.
REVOKE ALL ON FUNCTION public.gabriel_credit_ledger_immutable()
    FROM PUBLIC, anon, authenticated, service_role;
REVOKE ALL ON FUNCTION public.gabriel_credit_assert_actor(text, text)
    FROM PUBLIC, anon, authenticated, service_role;

-- Financial RPCs are backend-only. Revoke first so an idempotent re-run also
-- removes any obsolete grants before restoring the one required identity.
REVOKE ALL ON FUNCTION public.gabriel_credit_grant(text, text, bigint, text, text, timestamptz, jsonb) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.gabriel_credit_import_legacy_balance(text, text, bigint, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.gabriel_credit_reserve(text, text, text, text, text, bigint, bigint, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.gabriel_credit_record_provider_attempt(text, text, uuid, integer, text, text, bigint, text) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.gabriel_credit_settle_provider_attempt(text, text, uuid, integer, text, bigint, bigint, bigint) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.gabriel_credit_release(text, text, uuid) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.gabriel_credit_capture(text, text, uuid, bigint, bigint) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.gabriel_credit_mark_uncertain(text, text, uuid, bigint) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.gabriel_credit_expire_grants(timestamptz) FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.gabriel_credit_grant(text, text, bigint, text, text, timestamptz, jsonb) TO service_role;
GRANT EXECUTE ON FUNCTION public.gabriel_credit_import_legacy_balance(text, text, bigint, text) TO service_role;
GRANT EXECUTE ON FUNCTION public.gabriel_credit_reserve(text, text, text, text, text, bigint, bigint, text) TO service_role;
GRANT EXECUTE ON FUNCTION public.gabriel_credit_record_provider_attempt(text, text, uuid, integer, text, text, bigint, text) TO service_role;
GRANT EXECUTE ON FUNCTION public.gabriel_credit_settle_provider_attempt(text, text, uuid, integer, text, bigint, bigint, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.gabriel_credit_release(text, text, uuid) TO service_role;
GRANT EXECUTE ON FUNCTION public.gabriel_credit_capture(text, text, uuid, bigint, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.gabriel_credit_mark_uncertain(text, text, uuid, bigint) TO service_role;
GRANT EXECUTE ON FUNCTION public.gabriel_credit_expire_grants(timestamptz) TO service_role;

-- No automatic backfill is intentionally included. A future, separately
-- approved migration must read gabriel_users.credits and call
-- gabriel_credit_import_legacy_balance once per user with a stable snapshot key.

COMMIT;

-- ##### 20261026_credit_ledger_expiration_fix.sql #####
-- Gabriel V3 - P0 correction: expired reserved credits must never reappear.
-- Additive migration. Apply only after 20261024_credit_ledger_phase1.sql.
-- A cutoff is authoritative and irreversible. Production schedulers must pass
-- clock_timestamp(); a future cutoff is reserved for explicitly approved
-- administrative operations and isolated certification tests.

BEGIN;

ALTER TABLE public.gabriel_credit_grants
    ADD COLUMN IF NOT EXISTS expired_at timestamptz;
ALTER TABLE public.gabriel_credit_grants
    ADD COLUMN IF NOT EXISTS expiration_cutoff timestamptz;
ALTER TABLE public.gabriel_credit_allocations
    ADD COLUMN IF NOT EXISTS expired_credits bigint NOT NULL DEFAULT 0
        CHECK (expired_credits >= 0);

DO $constraints$
BEGIN
    IF NOT EXISTS (
        SELECT 1
          FROM pg_catalog.pg_constraint
         WHERE conrelid = 'public.gabriel_credit_grants'::pg_catalog.regclass
           AND conname = 'gabriel_credit_grants_expiration_state_check'
    ) THEN
        ALTER TABLE public.gabriel_credit_grants
            ADD CONSTRAINT gabriel_credit_grants_expiration_state_check
            CHECK (
                (expired_at IS NULL AND expiration_cutoff IS NULL)
                OR
                (
                    expired_at IS NOT NULL
                    AND expiration_cutoff IS NOT NULL
                    AND expires_at IS NOT NULL
                    AND expiration_cutoff >= expires_at
                )
            ) NOT VALID;
        ALTER TABLE public.gabriel_credit_grants
            VALIDATE CONSTRAINT gabriel_credit_grants_expiration_state_check;
    END IF;

    IF NOT EXISTS (
        SELECT 1
          FROM pg_catalog.pg_constraint
         WHERE conrelid = 'public.gabriel_credit_allocations'::pg_catalog.regclass
           AND conname = 'gabriel_credit_allocations_finalisation_check'
    ) THEN
        ALTER TABLE public.gabriel_credit_allocations
            ADD CONSTRAINT gabriel_credit_allocations_finalisation_check
            CHECK (
                captured_credits + released_credits + expired_credits
                <= reserved_credits
            ) NOT VALID;
        ALTER TABLE public.gabriel_credit_allocations
            VALIDATE CONSTRAINT gabriel_credit_allocations_finalisation_check;
    END IF;
END
$constraints$;

-- Phase 1 already emitted append-only expire events for available credits.
-- Backfill only the newly added state columns; never rewrite balances/events.
WITH first_expiration AS (
    SELECT grant_id, min(created_at) AS expired_at
      FROM public.gabriel_credit_ledger
     WHERE event_type = 'expire' AND grant_id IS NOT NULL
     GROUP BY grant_id
)
UPDATE public.gabriel_credit_grants AS credit_grant
   SET expired_at = first_expiration.expired_at,
       expiration_cutoff = credit_grant.expires_at
  FROM first_expiration
 WHERE credit_grant.grant_id = first_expiration.grant_id
   AND credit_grant.expired_at IS NULL;

CREATE OR REPLACE FUNCTION public.gabriel_credit_release(
    p_authenticated_user_id text,
    p_user_id text,
    p_reservation_id uuid
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_reservation public.gabriel_credit_reservations%ROWTYPE;
    v_item record;
    v_finalise_time timestamptz;
    v_released bigint;
    v_expired bigint;
    v_released_total bigint := 0;
    v_expired_total bigint := 0;
    v_available_expired bigint;
    v_newly_expired boolean;
BEGIN
    PERFORM public.gabriel_credit_assert_actor(
        p_authenticated_user_id, p_user_id
    );
    SELECT * INTO v_reservation
      FROM public.gabriel_credit_reservations
     WHERE reservation_id = p_reservation_id AND user_id = p_user_id
     FOR UPDATE;
    IF NOT FOUND THEN RAISE EXCEPTION 'reservation not found'; END IF;
    IF v_reservation.status = 'released' THEN
        RETURN to_jsonb(v_reservation) || jsonb_build_object('idempotent', true);
    END IF;
    IF v_reservation.status <> 'reserved'
       OR EXISTS (
           SELECT 1 FROM public.gabriel_credit_provider_usage
            WHERE reservation_id = p_reservation_id
       ) THEN
        RAISE EXCEPTION 'only a never-started reservation can be released';
    END IF;

    -- Account -> grant lock order matches reserve/expire and prevents a stale
    -- release racing an authoritative expiration. Lock every allocation/grant
    -- before choosing the single financial linearisation timestamp.
    PERFORM 1 FROM public.gabriel_credit_accounts
     WHERE user_id = p_user_id FOR UPDATE;
    PERFORM 1
      FROM public.gabriel_credit_allocations AS allocation
      JOIN public.gabriel_credit_grants AS credit_grant
        ON credit_grant.grant_id = allocation.grant_id
     WHERE allocation.reservation_id = p_reservation_id
     ORDER BY credit_grant.expires_at ASC NULLS LAST,
              credit_grant.created_at, credit_grant.grant_id
     FOR UPDATE OF allocation, credit_grant;
    v_finalise_time := clock_timestamp();

    FOR v_item IN
        SELECT allocation.*,
               credit_grant.expires_at AS grant_expires_at,
               credit_grant.expired_at AS grant_expired_at,
               credit_grant.expiration_cutoff AS grant_expiration_cutoff,
               credit_grant.remaining_credits AS grant_remaining_credits,
               credit_grant.reserved_credits AS grant_reserved_credits,
               credit_grant.created_at AS grant_created_at
          FROM public.gabriel_credit_allocations AS allocation
          JOIN public.gabriel_credit_grants AS credit_grant
            ON credit_grant.grant_id = allocation.grant_id
         WHERE allocation.reservation_id = p_reservation_id
         ORDER BY credit_grant.expires_at ASC NULLS LAST,
                  credit_grant.created_at, credit_grant.grant_id
    LOOP
        v_newly_expired := false;
        v_available_expired := 0;
        IF v_item.grant_expired_at IS NULL
           AND v_item.grant_expires_at IS NOT NULL
           AND v_item.grant_expires_at <= v_finalise_time THEN
            v_newly_expired := true;
            v_available_expired := v_item.grant_remaining_credits;
            UPDATE public.gabriel_credit_grants
               SET remaining_credits = 0,
                   expired_at = v_finalise_time,
                   expiration_cutoff = v_finalise_time
             WHERE grant_id = v_item.grant_id;
            UPDATE public.gabriel_credit_accounts
               SET available_credits = available_credits - v_available_expired,
                   updated_at = v_finalise_time
             WHERE user_id = p_user_id;
            INSERT INTO public.gabriel_credit_ledger (
                user_id, event_type, grant_id, delta_available, metadata
            ) VALUES (
                p_user_id, 'expire', v_item.grant_id, -v_available_expired,
                jsonb_build_object(
                    'phase', 'grant_expiration',
                    'cutoff', v_finalise_time,
                    'available_expired', v_available_expired,
                    'reserved_at_expiration', v_item.grant_reserved_credits
                )
            );
        END IF;

        v_expired := CASE
            WHEN v_item.grant_expired_at IS NOT NULL OR v_newly_expired
            THEN v_item.reserved_credits ELSE 0
        END;
        v_released := v_item.reserved_credits - v_expired;
        v_expired_total := v_expired_total + v_expired;
        v_released_total := v_released_total + v_released;

        UPDATE public.gabriel_credit_allocations
           SET captured_credits = 0,
               released_credits = v_released,
               expired_credits = v_expired
         WHERE reservation_id = p_reservation_id
           AND grant_id = v_item.grant_id;
        UPDATE public.gabriel_credit_grants
           SET reserved_credits = reserved_credits - v_item.reserved_credits,
               remaining_credits = remaining_credits + v_released
         WHERE grant_id = v_item.grant_id;

        IF v_expired > 0 THEN
            INSERT INTO public.gabriel_credit_ledger (
                user_id, event_type, grant_id, reservation_id,
                delta_reserved, metadata
            ) VALUES (
                p_user_id, 'expire', v_item.grant_id, p_reservation_id,
                -v_expired,
                jsonb_build_object(
                    'phase', 'reserved_finalisation',
                    'final_status', 'released',
                    'reserved_expired', v_expired,
                    'expiration_cutoff', coalesce(
                        v_item.grant_expiration_cutoff, v_finalise_time
                    )
                )
            );
        END IF;
    END LOOP;

    IF v_released_total + v_expired_total <> v_reservation.quoted_credits THEN
        RAISE EXCEPTION 'allocation finalisation does not conserve credits';
    END IF;
    UPDATE public.gabriel_credit_accounts
       SET available_credits = available_credits + v_released_total,
           reserved_credits = reserved_credits - v_reservation.quoted_credits,
           updated_at = v_finalise_time
     WHERE user_id = p_user_id;
    UPDATE public.gabriel_credit_reservations
       SET status = 'released', finalised_at = v_finalise_time,
           updated_at = v_finalise_time
     WHERE reservation_id = p_reservation_id
     RETURNING * INTO v_reservation;
    INSERT INTO public.gabriel_credit_ledger (
        user_id, event_type, reservation_id,
        delta_available, delta_reserved, metadata
    ) VALUES (
        p_user_id, 'release', p_reservation_id,
        v_released_total, -v_released_total,
        jsonb_build_object(
            'returned_to_available', v_released_total,
            'expired_instead_of_released', v_expired_total
        )
    );
    RETURN to_jsonb(v_reservation) || jsonb_build_object('idempotent', false);
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_credit_capture(
    p_authenticated_user_id text,
    p_user_id text,
    p_reservation_id uuid,
    p_captured_credits bigint DEFAULT NULL,
    p_provider_spent_micros bigint DEFAULT 0
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_reservation public.gabriel_credit_reservations%ROWTYPE;
    v_item record;
    v_capture bigint;
    v_alloc_capture bigint;
    v_alloc_release bigint;
    v_alloc_expire bigint;
    v_remaining_capture bigint;
    v_released_total bigint := 0;
    v_expired_total bigint := 0;
    v_attempts bigint;
    v_billable_ceiling bigint;
    v_pending_attempts bigint;
    v_finalise_time timestamptz;
    v_available_expired bigint;
    v_newly_expired boolean;
BEGIN
    PERFORM public.gabriel_credit_assert_actor(
        p_authenticated_user_id, p_user_id
    );
    SELECT * INTO v_reservation
      FROM public.gabriel_credit_reservations
     WHERE reservation_id = p_reservation_id AND user_id = p_user_id
     FOR UPDATE;
    IF NOT FOUND THEN RAISE EXCEPTION 'reservation not found'; END IF;
    v_capture := coalesce(p_captured_credits, v_reservation.quoted_credits);
    IF v_capture < 0 OR v_capture > v_reservation.quoted_credits
       OR p_provider_spent_micros < 0
       OR p_provider_spent_micros > v_reservation.provider_budget_micros THEN
        RAISE EXCEPTION 'capture exceeds reservation';
    END IF;
    IF v_reservation.status = 'captured' THEN
        IF v_reservation.captured_credits <> v_capture
           OR v_reservation.provider_spent_micros <> p_provider_spent_micros THEN
            RAISE EXCEPTION 'capture idempotency conflict';
        END IF;
        RETURN to_jsonb(v_reservation) || jsonb_build_object('idempotent', true);
    END IF;
    IF v_reservation.status NOT IN ('reserved', 'running', 'uncertain') THEN
        RAISE EXCEPTION 'reservation cannot be captured from state %',
            v_reservation.status;
    END IF;
    SELECT count(*),
           count(*) FILTER (WHERE state IN ('started', 'uncertain')),
           coalesce(sum(actual_cost_micros), 0)
      INTO v_attempts, v_pending_attempts, v_billable_ceiling
      FROM public.gabriel_credit_provider_usage
     WHERE reservation_id = p_reservation_id;
    IF v_capture > 0 AND v_attempts = 0 THEN
        RAISE EXCEPTION 'credits cannot be captured before a provider attempt';
    END IF;
    IF v_pending_attempts > 0 THEN
        RAISE EXCEPTION 'provider usage must be reconciled before capture';
    END IF;
    IF p_provider_spent_micros > v_billable_ceiling THEN
        RAISE EXCEPTION 'provider spend exceeds settled usage';
    END IF;

    PERFORM 1 FROM public.gabriel_credit_accounts
     WHERE user_id = p_user_id FOR UPDATE;
    -- Lock the complete allocation set before choosing the capture
    -- linearisation timestamp. No expiry decision uses a pre-lock clock.
    PERFORM 1
      FROM public.gabriel_credit_allocations AS allocation
      JOIN public.gabriel_credit_grants AS credit_grant
        ON credit_grant.grant_id = allocation.grant_id
     WHERE allocation.reservation_id = p_reservation_id
     ORDER BY credit_grant.expires_at ASC NULLS LAST,
              credit_grant.created_at, credit_grant.grant_id
     FOR UPDATE OF allocation, credit_grant;
    v_finalise_time := clock_timestamp();
    v_remaining_capture := v_capture;
    FOR v_item IN
        SELECT allocation.*,
               credit_grant.expires_at AS grant_expires_at,
               credit_grant.expired_at AS grant_expired_at,
               credit_grant.expiration_cutoff AS grant_expiration_cutoff,
               credit_grant.remaining_credits AS grant_remaining_credits,
               credit_grant.reserved_credits AS grant_reserved_credits,
               credit_grant.created_at AS grant_created_at
          FROM public.gabriel_credit_allocations AS allocation
          JOIN public.gabriel_credit_grants AS credit_grant
            ON credit_grant.grant_id = allocation.grant_id
         WHERE allocation.reservation_id = p_reservation_id
         ORDER BY credit_grant.expires_at ASC NULLS LAST,
                  credit_grant.created_at, credit_grant.grant_id
    LOOP
        v_newly_expired := false;
        v_available_expired := 0;
        IF v_item.grant_expired_at IS NULL
           AND v_item.grant_expires_at IS NOT NULL
           AND v_item.grant_expires_at <= v_finalise_time THEN
            v_newly_expired := true;
            v_available_expired := v_item.grant_remaining_credits;
            UPDATE public.gabriel_credit_grants
               SET remaining_credits = 0,
                   expired_at = v_finalise_time,
                   expiration_cutoff = v_finalise_time
             WHERE grant_id = v_item.grant_id;
            UPDATE public.gabriel_credit_accounts
               SET available_credits = available_credits - v_available_expired,
                   updated_at = v_finalise_time
             WHERE user_id = p_user_id;
            INSERT INTO public.gabriel_credit_ledger (
                user_id, event_type, grant_id, delta_available, metadata
            ) VALUES (
                p_user_id, 'expire', v_item.grant_id, -v_available_expired,
                jsonb_build_object(
                    'phase', 'grant_expiration',
                    'cutoff', v_finalise_time,
                    'available_expired', v_available_expired,
                    'reserved_at_expiration', v_item.grant_reserved_credits
                )
            );
        END IF;

        v_alloc_capture := least(
            v_remaining_capture, v_item.reserved_credits
        );
        v_remaining_capture := v_remaining_capture - v_alloc_capture;
        IF v_item.grant_expired_at IS NOT NULL OR v_newly_expired THEN
            v_alloc_expire := v_item.reserved_credits - v_alloc_capture;
            v_alloc_release := 0;
        ELSE
            v_alloc_expire := 0;
            v_alloc_release := v_item.reserved_credits - v_alloc_capture;
        END IF;
        v_expired_total := v_expired_total + v_alloc_expire;
        v_released_total := v_released_total + v_alloc_release;

        UPDATE public.gabriel_credit_allocations
           SET captured_credits = v_alloc_capture,
               released_credits = v_alloc_release,
               expired_credits = v_alloc_expire
         WHERE reservation_id = p_reservation_id
           AND grant_id = v_item.grant_id;
        UPDATE public.gabriel_credit_grants
           SET reserved_credits = reserved_credits - v_item.reserved_credits,
               remaining_credits = remaining_credits + v_alloc_release
         WHERE grant_id = v_item.grant_id;

        IF v_alloc_expire > 0 THEN
            INSERT INTO public.gabriel_credit_ledger (
                user_id, event_type, grant_id, reservation_id,
                delta_reserved, metadata
            ) VALUES (
                p_user_id, 'expire', v_item.grant_id, p_reservation_id,
                -v_alloc_expire,
                jsonb_build_object(
                    'phase', 'reserved_finalisation',
                    'final_status', 'captured',
                    'reserved_expired', v_alloc_expire,
                    'expiration_cutoff', coalesce(
                        v_item.grant_expiration_cutoff, v_finalise_time
                    )
                )
            );
        END IF;
    END LOOP;
    IF v_remaining_capture <> 0 THEN
        RAISE EXCEPTION 'allocation total lower than capture';
    END IF;
    IF v_capture + v_released_total + v_expired_total
       <> v_reservation.quoted_credits THEN
        RAISE EXCEPTION 'allocation finalisation does not conserve credits';
    END IF;

    UPDATE public.gabriel_credit_accounts
       SET available_credits = available_credits + v_released_total,
           reserved_credits = reserved_credits - v_reservation.quoted_credits,
           lifetime_captured = lifetime_captured + v_capture,
           updated_at = v_finalise_time
     WHERE user_id = p_user_id;
    UPDATE public.gabriel_credit_reservations
       SET status = 'captured', captured_credits = v_capture,
           provider_spent_micros = p_provider_spent_micros,
           uncertain_provider_micros = 0,
           finalised_at = v_finalise_time, updated_at = v_finalise_time
     WHERE reservation_id = p_reservation_id
     RETURNING * INTO v_reservation;
    IF v_capture > 0 THEN
        INSERT INTO public.gabriel_credit_ledger (
            user_id, event_type, reservation_id, delta_reserved,
            delta_consumed, provider_micros
        ) VALUES (
            p_user_id, 'capture', p_reservation_id, -v_capture,
            v_capture, p_provider_spent_micros
        );
    END IF;
    IF v_released_total > 0 THEN
        INSERT INTO public.gabriel_credit_ledger (
            user_id, event_type, reservation_id,
            delta_available, delta_reserved, metadata
        ) VALUES (
            p_user_id, 'release', p_reservation_id,
            v_released_total, -v_released_total,
            jsonb_build_object(
                'returned_to_available', v_released_total,
                'expired_instead_of_released', v_expired_total
            )
        );
    END IF;
    RETURN to_jsonb(v_reservation) || jsonb_build_object('idempotent', false);
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_credit_expire_grants(
    p_cutoff timestamptz DEFAULT clock_timestamp()
) RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_candidate record;
    v_grant public.gabriel_credit_grants%ROWTYPE;
    v_account public.gabriel_credit_accounts%ROWTYPE;
    v_event_time timestamptz;
    v_wall_time timestamptz;
    v_future_cutoff boolean;
    v_approval_ref text;
    v_session_is_superuser boolean := false;
    v_count bigint := 0;
BEGIN
    IF p_cutoff IS NULL THEN
        RAISE EXCEPTION 'expiration cutoff is required';
    END IF;
    v_wall_time := clock_timestamp();
    v_future_cutoff := p_cutoff > v_wall_time;
    IF v_future_cutoff THEN
        v_approval_ref := nullif(btrim(current_setting(
            'gabriel.credit_expiration_future_cutoff_approval', true
        )), '');
        SELECT role.rolsuper INTO v_session_is_superuser
          FROM pg_catalog.pg_roles AS role
         WHERE role.rolname = session_user;
        IF coalesce(v_session_is_superuser, false) IS NOT TRUE
           OR v_approval_ref IS NULL
           OR length(v_approval_ref) > 200 THEN
            RAISE EXCEPTION 'future expiration cutoff requires privileged explicit approval'
                USING ERRCODE = '42501';
        END IF;
    END IF;
    FOR v_candidate IN
        SELECT grant_id, user_id, expires_at
          FROM public.gabriel_credit_grants
         WHERE expires_at IS NOT NULL
           AND expires_at <= p_cutoff
           AND expired_at IS NULL
         ORDER BY user_id, expires_at, grant_id
    LOOP
        SELECT * INTO v_account
          FROM public.gabriel_credit_accounts
         WHERE user_id = v_candidate.user_id
         FOR UPDATE;
        IF NOT FOUND THEN
            RAISE EXCEPTION 'credit account missing for grant';
        END IF;
        SELECT * INTO v_grant
          FROM public.gabriel_credit_grants
         WHERE grant_id = v_candidate.grant_id
         FOR UPDATE;
        IF NOT FOUND OR v_grant.expired_at IS NOT NULL
           OR v_grant.expires_at IS NULL
           OR v_grant.expires_at > p_cutoff THEN
            CONTINUE;
        END IF;
        IF v_account.available_credits < v_grant.remaining_credits THEN
            RAISE EXCEPTION 'account and grant balances diverged';
        END IF;

        v_event_time := clock_timestamp();
        UPDATE public.gabriel_credit_grants
           SET remaining_credits = 0,
               expired_at = v_event_time,
               expiration_cutoff = p_cutoff
         WHERE grant_id = v_grant.grant_id;
        UPDATE public.gabriel_credit_accounts
           SET available_credits = available_credits - v_grant.remaining_credits,
               updated_at = v_event_time
         WHERE user_id = v_grant.user_id;
        INSERT INTO public.gabriel_credit_ledger (
            user_id, event_type, grant_id, delta_available, metadata
        ) VALUES (
            v_grant.user_id, 'expire', v_grant.grant_id,
            -v_grant.remaining_credits,
            jsonb_build_object(
                'phase', 'grant_expiration',
                'cutoff', p_cutoff,
                'future_cutoff', v_future_cutoff,
                'future_cutoff_approval', v_approval_ref,
                'approved_by_session_user', CASE
                    WHEN v_future_cutoff THEN session_user ELSE NULL
                END,
                'available_expired', v_grant.remaining_credits,
                'reserved_at_expiration', v_grant.reserved_credits
            )
        );
        v_count := v_count + 1;
    END LOOP;
    RETURN v_count;
END;
$$;

REVOKE ALL ON FUNCTION public.gabriel_credit_release(text, text, uuid)
    FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.gabriel_credit_capture(
    text, text, uuid, bigint, bigint
) FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.gabriel_credit_expire_grants(timestamptz)
    FROM PUBLIC, anon, authenticated;

GRANT EXECUTE ON FUNCTION public.gabriel_credit_release(text, text, uuid)
    TO service_role;
GRANT EXECUTE ON FUNCTION public.gabriel_credit_capture(
    text, text, uuid, bigint, bigint
) TO service_role;
GRANT EXECUTE ON FUNCTION public.gabriel_credit_expire_grants(timestamptz)
    TO service_role;

COMMIT;

-- ################ 06_provider_budget.sql ################
-- ═══════════════════════════════════════════════════════════════════════════
-- GABRIEL — SCHÉMA SUPABASE — Fichier 06 — GARDE-FOU DE BUDGET FOURNISSEURS (plafonds de dépense IA)
-- Origine : Release Candidate V3 de Zinsoust (commit f7efda3), repris TEL QUEL depuis :
--   supabase/20261028_provider_budget_guard.sql
-- SEUL ÉCART avec l'original : CREATE TABLE/INDEX ... IF NOT EXISTS et DROP TRIGGER IF EXISTS ajoutés pour que le script soit rejouable.
-- Ne pas modifier ici : corriger le fichier d'origine puis régénérer (voir README).
-- ═══════════════════════════════════════════════════════════════════════════

-- Gabriel V3 - authoritative persistent provider budgets
-- Additive migration. Requires 20261024_credit_ledger_phase1.sql and
-- 20261026_credit_ledger_expiration_fix.sql. Never runs automatically.
-- The application supplies only a conservative maximum cost. PostgreSQL owns
-- the active policy, UTC period boundaries and both user/global limits.

BEGIN;

CREATE TABLE IF NOT EXISTS public.gabriel_provider_budget_policies (
    policy_id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid(),
    provider text NOT NULL UNIQUE,
    policy_version text NOT NULL,
    period_kind text NOT NULL CHECK (period_kind IN ('day', 'month')),
    user_limit_micros bigint NOT NULL CHECK (user_limit_micros > 0),
    global_limit_micros bigint NOT NULL CHECK (global_limit_micros > 0),
    enabled boolean NOT NULL DEFAULT false,
    effective_from timestamptz NOT NULL,
    effective_until timestamptz,
    created_at timestamptz NOT NULL DEFAULT pg_catalog.clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT pg_catalog.clock_timestamp(),
    CHECK (provider = pg_catalog.lower(pg_catalog.btrim(provider)) AND provider <> ''),
    CHECK (policy_version = pg_catalog.btrim(policy_version) AND policy_version <> ''),
    CHECK (user_limit_micros <= global_limit_micros),
    CHECK (effective_until IS NULL OR effective_until > effective_from)
);

CREATE TABLE IF NOT EXISTS public.gabriel_provider_budget_policy_events (
    policy_event_id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    provider text NOT NULL,
    event_type text NOT NULL CHECK (event_type IN ('provisioned', 'disabled')),
    previous_policy jsonb,
    resulting_policy jsonb NOT NULL,
    occurred_at timestamptz NOT NULL DEFAULT pg_catalog.clock_timestamp()
);

CREATE TABLE IF NOT EXISTS public.gabriel_provider_budget_periods (
    budget_id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid(),
    policy_id uuid NOT NULL REFERENCES public.gabriel_provider_budget_policies(policy_id),
    policy_version text NOT NULL,
    provider text NOT NULL,
    period_kind text NOT NULL CHECK (period_kind IN ('day', 'month')),
    scope_type text NOT NULL CHECK (scope_type IN ('global', 'user')),
    scope_key text NOT NULL,
    period_start timestamptz NOT NULL,
    period_end timestamptz NOT NULL,
    limit_micros bigint NOT NULL CHECK (limit_micros > 0),
    reserved_micros bigint NOT NULL DEFAULT 0 CHECK (reserved_micros >= 0),
    settled_micros bigint NOT NULL DEFAULT 0 CHECK (settled_micros >= 0),
    uncertain_micros bigint NOT NULL DEFAULT 0 CHECK (uncertain_micros >= 0),
    created_at timestamptz NOT NULL DEFAULT pg_catalog.clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT pg_catalog.clock_timestamp(),
    UNIQUE (provider, scope_type, scope_key, period_start),
    CHECK (provider = pg_catalog.lower(pg_catalog.btrim(provider)) AND provider <> ''),
    CHECK (scope_key <> ''),
    CHECK ((scope_type = 'global' AND scope_key = 'global') OR scope_type = 'user'),
    CHECK (period_end > period_start),
    CHECK (reserved_micros + settled_micros + uncertain_micros <= limit_micros)
);

CREATE TABLE IF NOT EXISTS public.gabriel_provider_budget_attempts (
    budget_attempt_id uuid PRIMARY KEY DEFAULT pg_catalog.gen_random_uuid(),
    reservation_id uuid NOT NULL REFERENCES public.gabriel_credit_reservations(reservation_id),
    attempt_no integer NOT NULL CHECK (attempt_no > 0),
    user_id text NOT NULL,
    provider text NOT NULL,
    model text NOT NULL,
    policy_id uuid NOT NULL REFERENCES public.gabriel_provider_budget_policies(policy_id),
    policy_version text NOT NULL,
    period_kind text NOT NULL CHECK (period_kind IN ('day', 'month')),
    period_start timestamptz NOT NULL,
    period_end timestamptz NOT NULL,
    global_budget_id uuid NOT NULL REFERENCES public.gabriel_provider_budget_periods(budget_id),
    user_budget_id uuid NOT NULL REFERENCES public.gabriel_provider_budget_periods(budget_id),
    max_cost_micros bigint NOT NULL CHECK (max_cost_micros > 0),
    actual_cost_micros bigint CHECK (
        actual_cost_micros IS NULL OR
        (actual_cost_micros >= 0 AND actual_cost_micros <= max_cost_micros)
    ),
    state text NOT NULL DEFAULT 'reserved'
        CHECK (state IN ('reserved', 'succeeded', 'failed', 'uncertain')),
    created_at timestamptz NOT NULL DEFAULT pg_catalog.clock_timestamp(),
    updated_at timestamptz NOT NULL DEFAULT pg_catalog.clock_timestamp(),
    UNIQUE (reservation_id, attempt_no),
    CHECK (provider = pg_catalog.lower(pg_catalog.btrim(provider)) AND provider <> ''),
    CHECK (model = pg_catalog.btrim(model) AND model <> ''),
    CHECK (period_end > period_start),
    CHECK (global_budget_id <> user_budget_id)
);

CREATE INDEX IF NOT EXISTS gabriel_provider_budget_attempts_user_period_idx
    ON public.gabriel_provider_budget_attempts (user_id, provider, period_start);

ALTER TABLE public.gabriel_provider_budget_policies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gabriel_provider_budget_policy_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gabriel_provider_budget_periods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gabriel_provider_budget_attempts ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON TABLE public.gabriel_provider_budget_policies FROM PUBLIC, anon, authenticated, service_role;
REVOKE ALL ON TABLE public.gabriel_provider_budget_policy_events FROM PUBLIC, anon, authenticated, service_role;
REVOKE ALL ON TABLE public.gabriel_provider_budget_periods FROM PUBLIC, anon, authenticated, service_role;
REVOKE ALL ON TABLE public.gabriel_provider_budget_attempts FROM PUBLIC, anon, authenticated, service_role;
REVOKE ALL ON SEQUENCE public.gabriel_provider_budget_policy_events_policy_event_id_seq
    FROM PUBLIC, anon, authenticated, service_role;

DROP TRIGGER IF EXISTS gabriel_provider_budget_policy_events_immutable
    ON public.gabriel_provider_budget_policy_events;
CREATE TRIGGER gabriel_provider_budget_policy_events_immutable
BEFORE UPDATE OR DELETE ON public.gabriel_provider_budget_policy_events
FOR EACH ROW EXECUTE FUNCTION public.gabriel_credit_ledger_immutable();

-- Separate administrative operation. No runtime role receives EXECUTE.
CREATE OR REPLACE FUNCTION public.gabriel_provider_budget_admin_set_policy(
    p_provider text,
    p_policy_version text,
    p_period_kind text,
    p_user_limit_micros bigint,
    p_global_limit_micros bigint,
    p_enabled boolean,
    p_effective_from timestamptz,
    p_effective_until timestamptz
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_provider text := pg_catalog.lower(pg_catalog.btrim(p_provider));
    v_existing public.gabriel_provider_budget_policies%ROWTYPE;
    v_result public.gabriel_provider_budget_policies%ROWTYPE;
    v_now timestamptz := pg_catalog.clock_timestamp();
    v_material_change boolean;
BEGIN
    IF v_provider IS NULL OR v_provider = '' OR p_provider IS DISTINCT FROM v_provider
       OR nullif(pg_catalog.btrim(p_policy_version), '') IS NULL
       OR p_policy_version IS DISTINCT FROM pg_catalog.btrim(p_policy_version)
       OR p_period_kind NOT IN ('day', 'month')
       OR p_user_limit_micros IS NULL OR p_global_limit_micros IS NULL
       OR p_user_limit_micros <= 0 OR p_global_limit_micros <= 0
       OR p_user_limit_micros > p_global_limit_micros
       OR p_enabled IS NULL OR p_effective_from IS NULL
       OR (p_effective_until IS NOT NULL AND p_effective_until <= p_effective_from) THEN
        RAISE EXCEPTION 'invalid provider budget policy' USING ERRCODE = '22023';
    END IF;

    SELECT * INTO v_existing
      FROM public.gabriel_provider_budget_policies
     WHERE provider = v_provider
     FOR UPDATE;

    IF FOUND THEN
        v_material_change :=
            v_existing.policy_version IS DISTINCT FROM p_policy_version
            OR v_existing.period_kind IS DISTINCT FROM p_period_kind
            OR v_existing.user_limit_micros IS DISTINCT FROM p_user_limit_micros
            OR v_existing.global_limit_micros IS DISTINCT FROM p_global_limit_micros
            OR v_existing.effective_from IS DISTINCT FROM p_effective_from
            OR v_existing.effective_until IS DISTINCT FROM p_effective_until;
        IF v_material_change AND EXISTS (
            SELECT 1 FROM public.gabriel_provider_budget_periods
             WHERE provider = v_provider
               AND period_start <= v_now AND period_end > v_now
        ) THEN
            RAISE EXCEPTION 'provider budget policy cannot change inside an active period'
                USING ERRCODE = 'P0001';
        END IF;
    END IF;

    INSERT INTO public.gabriel_provider_budget_policies (
        provider, policy_version, period_kind,
        user_limit_micros, global_limit_micros, enabled,
        effective_from, effective_until
    ) VALUES (
        v_provider, p_policy_version, p_period_kind,
        p_user_limit_micros, p_global_limit_micros, p_enabled,
        p_effective_from, p_effective_until
    )
    ON CONFLICT (provider) DO UPDATE SET
        policy_version = EXCLUDED.policy_version,
        period_kind = EXCLUDED.period_kind,
        user_limit_micros = EXCLUDED.user_limit_micros,
        global_limit_micros = EXCLUDED.global_limit_micros,
        enabled = EXCLUDED.enabled,
        effective_from = EXCLUDED.effective_from,
        effective_until = EXCLUDED.effective_until,
        updated_at = pg_catalog.clock_timestamp()
    RETURNING * INTO v_result;

    INSERT INTO public.gabriel_provider_budget_policy_events (
        provider, event_type, previous_policy, resulting_policy
    ) VALUES (
        v_provider,
        CASE WHEN p_enabled THEN 'provisioned' ELSE 'disabled' END,
        CASE WHEN v_existing.policy_id IS NULL THEN NULL ELSE pg_catalog.to_jsonb(v_existing) END,
        pg_catalog.to_jsonb(v_result)
    );
    RETURN pg_catalog.to_jsonb(v_result);
END;
$$;

-- Internal helper. Every policy value comes from a locked PostgreSQL row.
CREATE OR REPLACE FUNCTION public.gabriel_provider_budget_lock_period(
    p_policy_id uuid,
    p_policy_version text,
    p_provider text,
    p_period_kind text,
    p_scope_type text,
    p_scope_key text,
    p_period_start timestamptz,
    p_period_end timestamptz,
    p_limit_micros bigint
) RETURNS public.gabriel_provider_budget_periods
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_period public.gabriel_provider_budget_periods%ROWTYPE;
BEGIN
    IF p_policy_id IS NULL
       OR nullif(pg_catalog.btrim(p_policy_version), '') IS NULL
       OR nullif(pg_catalog.btrim(p_provider), '') IS NULL
       OR p_provider IS DISTINCT FROM pg_catalog.lower(pg_catalog.btrim(p_provider))
       OR p_period_kind NOT IN ('day', 'month')
       OR p_scope_type NOT IN ('global', 'user')
       OR nullif(pg_catalog.btrim(p_scope_key), '') IS NULL
       OR (p_scope_type = 'global' AND p_scope_key <> 'global')
       OR p_period_start IS NULL OR p_period_end <= p_period_start
       OR p_limit_micros IS NULL OR p_limit_micros <= 0 THEN
        RAISE EXCEPTION 'invalid provider budget period' USING ERRCODE = '22023';
    END IF;
    IF (p_period_kind = 'day' AND (
            p_period_start IS DISTINCT FROM
                (pg_catalog.date_trunc('day', p_period_start AT TIME ZONE 'UTC') AT TIME ZONE 'UTC')
            OR p_period_end IS DISTINCT FROM p_period_start + interval '1 day'
        )) OR (p_period_kind = 'month' AND (
            p_period_start IS DISTINCT FROM
                (pg_catalog.date_trunc('month', p_period_start AT TIME ZONE 'UTC') AT TIME ZONE 'UTC')
            OR p_period_end IS DISTINCT FROM p_period_start + interval '1 month'
        )) THEN
        RAISE EXCEPTION 'non-canonical provider budget period' USING ERRCODE = '22023';
    END IF;

    INSERT INTO public.gabriel_provider_budget_periods (
        policy_id, policy_version, provider, period_kind,
        scope_type, scope_key, period_start, period_end, limit_micros
    ) VALUES (
        p_policy_id, p_policy_version, p_provider, p_period_kind,
        p_scope_type, p_scope_key, p_period_start, p_period_end, p_limit_micros
    ) ON CONFLICT (provider, scope_type, scope_key, period_start) DO NOTHING;

    SELECT * INTO v_period
      FROM public.gabriel_provider_budget_periods
     WHERE provider = p_provider
       AND scope_type = p_scope_type
       AND scope_key = p_scope_key
       AND period_start = p_period_start
     FOR UPDATE;

    IF v_period.policy_id IS DISTINCT FROM p_policy_id
       OR v_period.policy_version IS DISTINCT FROM p_policy_version
       OR v_period.period_kind IS DISTINCT FROM p_period_kind
       OR v_period.period_end IS DISTINCT FROM p_period_end
       OR v_period.limit_micros <> p_limit_micros THEN
        RAISE EXCEPTION 'provider budget policy changed inside an active period'
            USING ERRCODE = 'P0001';
    END IF;
    RETURN v_period;
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_provider_budget_reserve_attempt(
    p_authenticated_user_id text,
    p_user_id text,
    p_reservation_id uuid,
    p_attempt_no integer,
    p_provider text,
    p_model text,
    p_max_cost_micros bigint,
    p_provider_request_id text
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_provider text := pg_catalog.lower(pg_catalog.btrim(p_provider));
    v_now timestamptz := pg_catalog.clock_timestamp();
    v_period_start timestamptz;
    v_period_end timestamptz;
    v_policy public.gabriel_provider_budget_policies%ROWTYPE;
    v_existing public.gabriel_provider_budget_attempts%ROWTYPE;
    v_global public.gabriel_provider_budget_periods%ROWTYPE;
    v_user public.gabriel_provider_budget_periods%ROWTYPE;
    v_attempt public.gabriel_provider_budget_attempts%ROWTYPE;
BEGIN
    PERFORM public.gabriel_credit_assert_actor(p_authenticated_user_id, p_user_id);
    IF p_attempt_no IS NULL OR p_max_cost_micros IS NULL
       OR p_attempt_no <= 0 OR p_max_cost_micros <= 0
       OR v_provider IS NULL OR v_provider = '' OR p_provider IS DISTINCT FROM v_provider
       OR nullif(pg_catalog.btrim(p_model), '') IS NULL
       OR p_model IS DISTINCT FROM pg_catalog.btrim(p_model) THEN
        RAISE EXCEPTION 'invalid provider attempt' USING ERRCODE = '22023';
    END IF;

    PERFORM public.gabriel_credit_record_provider_attempt(
        p_authenticated_user_id, p_user_id, p_reservation_id, p_attempt_no,
        v_provider, p_model, p_max_cost_micros, p_provider_request_id
    );

    SELECT * INTO v_existing
      FROM public.gabriel_provider_budget_attempts
     WHERE reservation_id = p_reservation_id AND attempt_no = p_attempt_no;
    IF FOUND THEN
        IF v_existing.user_id <> p_user_id
           OR v_existing.provider <> v_provider
           OR v_existing.model <> p_model
           OR v_existing.max_cost_micros <> p_max_cost_micros THEN
            RAISE EXCEPTION 'provider budget attempt idempotency conflict'
                USING ERRCODE = 'P0001';
        END IF;
        RETURN pg_catalog.to_jsonb(v_existing)
            || pg_catalog.jsonb_build_object('idempotent', true);
    END IF;

    SELECT * INTO v_policy
      FROM public.gabriel_provider_budget_policies
     WHERE provider = v_provider
       AND enabled
       AND effective_from <= v_now
       AND (effective_until IS NULL OR effective_until > v_now)
     FOR SHARE;
    IF NOT FOUND THEN
        RAISE EXCEPTION 'provider budget policy unavailable' USING ERRCODE = 'P0001';
    END IF;

    IF v_policy.period_kind = 'day' THEN
        v_period_start := pg_catalog.date_trunc('day', v_now AT TIME ZONE 'UTC') AT TIME ZONE 'UTC';
        v_period_end := v_period_start + interval '1 day';
    ELSIF v_policy.period_kind = 'month' THEN
        v_period_start := pg_catalog.date_trunc('month', v_now AT TIME ZONE 'UTC') AT TIME ZONE 'UTC';
        v_period_end := v_period_start + interval '1 month';
    ELSE
        RAISE EXCEPTION 'invalid stored provider budget policy' USING ERRCODE = 'P0001';
    END IF;

    -- Stable lock order: credit reservation -> policy -> global -> user.
    v_global := public.gabriel_provider_budget_lock_period(
        v_policy.policy_id, v_policy.policy_version, v_provider,
        v_policy.period_kind, 'global', 'global',
        v_period_start, v_period_end, v_policy.global_limit_micros
    );
    v_user := public.gabriel_provider_budget_lock_period(
        v_policy.policy_id, v_policy.policy_version, v_provider,
        v_policy.period_kind, 'user', p_user_id,
        v_period_start, v_period_end, v_policy.user_limit_micros
    );
    IF v_global.reserved_micros + v_global.settled_micros
       + v_global.uncertain_micros + p_max_cost_micros > v_global.limit_micros THEN
        RAISE EXCEPTION 'global provider budget exceeded' USING ERRCODE = 'P0001';
    END IF;
    IF v_user.reserved_micros + v_user.settled_micros
       + v_user.uncertain_micros + p_max_cost_micros > v_user.limit_micros THEN
        RAISE EXCEPTION 'user provider budget exceeded' USING ERRCODE = 'P0001';
    END IF;

    INSERT INTO public.gabriel_provider_budget_attempts (
        reservation_id, attempt_no, user_id, provider, model,
        policy_id, policy_version, period_kind, period_start, period_end,
        global_budget_id, user_budget_id, max_cost_micros
    ) VALUES (
        p_reservation_id, p_attempt_no, p_user_id, v_provider, p_model,
        v_policy.policy_id, v_policy.policy_version, v_policy.period_kind,
        v_period_start, v_period_end, v_global.budget_id, v_user.budget_id,
        p_max_cost_micros
    ) RETURNING * INTO v_attempt;

    UPDATE public.gabriel_provider_budget_periods
       SET reserved_micros = reserved_micros + p_max_cost_micros,
           updated_at = pg_catalog.clock_timestamp()
     WHERE budget_id IN (v_global.budget_id, v_user.budget_id);
    RETURN pg_catalog.to_jsonb(v_attempt)
        || pg_catalog.jsonb_build_object('idempotent', false);
END;
$$;

CREATE OR REPLACE FUNCTION public.gabriel_provider_budget_settle_attempt(
    p_authenticated_user_id text,
    p_user_id text,
    p_reservation_id uuid,
    p_attempt_no integer,
    p_state text,
    p_actual_cost_micros bigint,
    p_input_tokens bigint,
    p_output_tokens bigint
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = pg_catalog, pg_temp
AS $$
DECLARE
    v_attempt public.gabriel_provider_budget_attempts%ROWTYPE;
    v_actual bigint;
    v_global public.gabriel_provider_budget_periods%ROWTYPE;
    v_user public.gabriel_provider_budget_periods%ROWTYPE;
    v_reconcile_uncertain boolean := false;
    v_updated integer;
BEGIN
    PERFORM public.gabriel_credit_assert_actor(p_authenticated_user_id, p_user_id);
    IF p_state IS NULL OR p_state NOT IN ('succeeded', 'failed', 'uncertain') THEN
        RAISE EXCEPTION 'invalid provider budget settlement state' USING ERRCODE = '22023';
    END IF;

    PERFORM public.gabriel_credit_settle_provider_attempt(
        p_authenticated_user_id, p_user_id, p_reservation_id, p_attempt_no,
        p_state, p_actual_cost_micros, p_input_tokens, p_output_tokens
    );
    SELECT * INTO v_attempt
      FROM public.gabriel_provider_budget_attempts
     WHERE reservation_id = p_reservation_id AND attempt_no = p_attempt_no
     FOR UPDATE;
    IF NOT FOUND OR v_attempt.user_id <> p_user_id THEN
        RAISE EXCEPTION 'provider budget attempt not found' USING ERRCODE = 'P0001';
    END IF;
    IF v_attempt.state <> 'reserved' THEN
        IF v_attempt.state = 'uncertain'
           AND p_state IN ('succeeded', 'failed')
           AND p_actual_cost_micros IS NOT NULL THEN
            v_reconcile_uncertain := true;
        ELSIF v_attempt.state <> p_state
           OR v_attempt.actual_cost_micros IS DISTINCT FROM p_actual_cost_micros THEN
            RAISE EXCEPTION 'provider budget settlement idempotency conflict'
                USING ERRCODE = 'P0001';
        ELSE
            RETURN pg_catalog.to_jsonb(v_attempt)
                || pg_catalog.jsonb_build_object('idempotent', true);
        END IF;
    END IF;

    SELECT * INTO v_global FROM public.gabriel_provider_budget_periods
     WHERE budget_id = v_attempt.global_budget_id FOR UPDATE;
    SELECT * INTO v_user FROM public.gabriel_provider_budget_periods
     WHERE budget_id = v_attempt.user_budget_id FOR UPDATE;
    IF v_global.budget_id IS NULL OR v_user.budget_id IS NULL
       OR v_global.policy_id <> v_attempt.policy_id
       OR v_user.policy_id <> v_attempt.policy_id
       OR v_global.policy_version <> v_attempt.policy_version
       OR v_user.policy_version <> v_attempt.policy_version
       OR v_global.provider <> v_attempt.provider
       OR v_user.provider <> v_attempt.provider
       OR v_global.scope_type <> 'global' OR v_global.scope_key <> 'global'
       OR v_user.scope_type <> 'user' OR v_user.scope_key <> p_user_id
       OR v_global.period_start <> v_attempt.period_start
       OR v_user.period_start <> v_attempt.period_start THEN
        RAISE EXCEPTION 'provider budget period integrity failure' USING ERRCODE = 'P0001';
    END IF;

    IF v_reconcile_uncertain THEN
        IF p_actual_cost_micros < 0 OR p_actual_cost_micros > v_attempt.max_cost_micros THEN
            RAISE EXCEPTION 'invalid actual provider cost' USING ERRCODE = '22023';
        END IF;
        UPDATE public.gabriel_provider_budget_periods
           SET uncertain_micros = uncertain_micros - v_attempt.max_cost_micros,
               settled_micros = settled_micros + p_actual_cost_micros,
               updated_at = pg_catalog.clock_timestamp()
         WHERE budget_id IN (v_global.budget_id, v_user.budget_id);
        v_actual := p_actual_cost_micros;
    ELSIF p_state = 'uncertain' THEN
        UPDATE public.gabriel_provider_budget_periods
           SET reserved_micros = reserved_micros - v_attempt.max_cost_micros,
               uncertain_micros = uncertain_micros + v_attempt.max_cost_micros,
               updated_at = pg_catalog.clock_timestamp()
         WHERE budget_id IN (v_global.budget_id, v_user.budget_id);
        v_actual := NULL;
    ELSE
        IF p_actual_cost_micros IS NULL OR p_actual_cost_micros < 0
           OR p_actual_cost_micros > v_attempt.max_cost_micros THEN
            RAISE EXCEPTION 'invalid actual provider cost' USING ERRCODE = '22023';
        END IF;
        UPDATE public.gabriel_provider_budget_periods
           SET reserved_micros = reserved_micros - v_attempt.max_cost_micros,
               settled_micros = settled_micros + p_actual_cost_micros,
               updated_at = pg_catalog.clock_timestamp()
         WHERE budget_id IN (v_global.budget_id, v_user.budget_id);
        v_actual := p_actual_cost_micros;
    END IF;
    GET DIAGNOSTICS v_updated = ROW_COUNT;
    IF v_updated <> 2 THEN
        RAISE EXCEPTION 'provider budget period update incomplete' USING ERRCODE = 'P0001';
    END IF;

    UPDATE public.gabriel_provider_budget_attempts
       SET state = p_state, actual_cost_micros = v_actual,
           updated_at = pg_catalog.clock_timestamp()
     WHERE budget_attempt_id = v_attempt.budget_attempt_id
     RETURNING * INTO v_attempt;
    RETURN pg_catalog.to_jsonb(v_attempt)
        || pg_catalog.jsonb_build_object('idempotent', false);
END;
$$;

REVOKE ALL ON FUNCTION public.gabriel_provider_budget_admin_set_policy(
    text, text, text, bigint, bigint, boolean, timestamptz, timestamptz
) FROM PUBLIC, anon, authenticated, service_role;
REVOKE ALL ON FUNCTION public.gabriel_provider_budget_lock_period(
    uuid, text, text, text, text, text, timestamptz, timestamptz, bigint
) FROM PUBLIC, anon, authenticated, service_role;
REVOKE ALL ON FUNCTION public.gabriel_provider_budget_reserve_attempt(
    text, text, uuid, integer, text, text, bigint, text
) FROM PUBLIC, anon, authenticated, service_role;
REVOKE ALL ON FUNCTION public.gabriel_provider_budget_settle_attempt(
    text, text, uuid, integer, text, bigint, bigint, bigint
) FROM PUBLIC, anon, authenticated, service_role;

GRANT EXECUTE ON FUNCTION public.gabriel_provider_budget_reserve_attempt(
    text, text, uuid, integer, text, text, bigint, text
) TO service_role;
GRANT EXECUTE ON FUNCTION public.gabriel_provider_budget_settle_attempt(
    text, text, uuid, integer, text, bigint, bigint, bigint
) TO service_role;

COMMIT;

-- ################ 07_preprod_security.sql ################
-- ═══════════════════════════════════════════════════════════════════════════
-- GABRIEL — SCHÉMA SUPABASE — Fichier 07 — DURCISSEMENT FINAL (accès réservé au serveur) — À EXÉCUTER EN DERNIER
-- Origine : Release Candidate V3 de Zinsoust (commit f7efda3), repris TEL QUEL depuis :
--   supabase/20261029_preproduction_backend_only_security.sql
-- Ne pas modifier ici : corriger le fichier d'origine puis régénérer (voir README).
-- ═══════════════════════════════════════════════════════════════════════════

-- Gabriel private beta: backend-only Supabase access.
--
-- Gabriel currently authenticates users in the Flask application. Its UUIDs
-- are not Supabase Auth UUIDs, so auth.uid()-based policies cannot be the
-- authority for this beta. Browser roles must have no direct data or RPC
-- access; the server is the only database client and always derives user_id
-- from its signed session.

BEGIN;

SET LOCAL search_path = pg_catalog, pg_temp;

DO $gabriel$
DECLARE
    v_role text;
    v_table text;
    v_missing text[];
    v_object record;
    v_required_tables constant text[] := ARRAY[
        'gabriel_users',
        'gabriel_analyses',
        'gabriel_strategies',
        'gabriel_feedbacks',
        'gabriel_exports',
        'gabriel_survey_events',
        'gabriel_survey_responses',
        'gabriel_consent_records',
        'gabriel_chat_conversations',
        'gabriel_chat_messages',
        'gabriel_training_candidates',
        'gabriel_folders',
        'gabriel_context_sessions',
        'gabriel_context_messages',
        'gabriel_context_fields',
        'gabriel_memory_cases',
        'gabriel_ux_settings',
        'gabriel_cross_analyses',
        'gabriel_psychologue_sources',
        'gabriel_cross_analysis_sources',
        'gabriel_source_comments',
        'gabriel_analysis_jobs',
        'gabriel_credit_accounts',
        'gabriel_credit_grants',
        'gabriel_credit_legacy_snapshots',
        'gabriel_credit_reservations',
        'gabriel_credit_allocations',
        'gabriel_credit_provider_usage',
        'gabriel_credit_ledger',
        'gabriel_provider_budget_policies',
        'gabriel_provider_budget_policy_events',
        'gabriel_provider_budget_periods',
        'gabriel_provider_budget_attempts'
    ];
BEGIN
    FOREACH v_role IN ARRAY ARRAY['anon', 'authenticated', 'service_role'] LOOP
        IF NOT EXISTS (SELECT 1 FROM pg_catalog.pg_roles WHERE rolname = v_role) THEN
            RAISE EXCEPTION 'required Supabase role missing: %', v_role
                USING ERRCODE = '42704';
        END IF;
    END LOOP;

    SELECT pg_catalog.array_agg(required_name ORDER BY required_name)
      INTO v_missing
      FROM pg_catalog.unnest(v_required_tables) AS required_table(required_name)
     WHERE pg_catalog.to_regclass('public.' || required_name) IS NULL;

    IF v_missing IS NOT NULL THEN
        RAISE EXCEPTION 'required Gabriel tables missing: %', v_missing
            USING ERRCODE = '42P01';
    END IF;

    -- RLS remains a second barrier. Direct browser roles are denied at the
    -- privilege layer because their auth.uid() cannot represent Gabriel's
    -- current application UUIDs.
    FOR v_object IN
        SELECT c.relname
          FROM pg_catalog.pg_class AS c
          JOIN pg_catalog.pg_namespace AS n ON n.oid = c.relnamespace
         WHERE n.nspname = 'public'
           AND c.relkind IN ('r', 'p')
           AND c.relname LIKE 'gabriel\_%' ESCAPE '\'
    LOOP
        EXECUTE pg_catalog.format(
            'ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', v_object.relname
        );
        EXECUTE pg_catalog.format(
            'REVOKE ALL PRIVILEGES ON TABLE public.%I FROM PUBLIC, anon, authenticated',
            v_object.relname
        );
    END LOOP;

    FOR v_object IN
        SELECT c.relname
          FROM pg_catalog.pg_class AS c
          JOIN pg_catalog.pg_namespace AS n ON n.oid = c.relnamespace
         WHERE n.nspname = 'public'
           AND c.relkind = 'S'
           AND c.relname LIKE 'gabriel\_%' ESCAPE '\'
    LOOP
        EXECUTE pg_catalog.format(
            'REVOKE ALL PRIVILEGES ON SEQUENCE public.%I FROM PUBLIC, anon, authenticated',
            v_object.relname
        );
    END LOOP;

    FOR v_object IN
        SELECT p.oid::pg_catalog.regprocedure AS signature
          FROM pg_catalog.pg_proc AS p
          JOIN pg_catalog.pg_namespace AS n ON n.oid = p.pronamespace
         WHERE n.nspname = 'public'
           AND p.proname LIKE 'gabriel\_%' ESCAPE '\'
    LOOP
        EXECUTE pg_catalog.format(
            'REVOKE ALL PRIVILEGES ON FUNCTION %s FROM PUBLIC, anon, authenticated',
            v_object.signature
        );
    END LOOP;
END;
$gabriel$;

COMMIT;
