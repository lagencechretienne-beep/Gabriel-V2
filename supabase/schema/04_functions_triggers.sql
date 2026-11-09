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
