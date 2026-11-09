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
