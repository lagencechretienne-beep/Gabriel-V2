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
