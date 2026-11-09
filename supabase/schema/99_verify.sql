-- ═══════════════════════════════════════════════════════════════════════════
-- GABRIEL — SCHÉMA SUPABASE COMPLET
-- Fichier 5/5 — VÉRIFICATION  (à exécuter en dernier ; ne modifie rien)
-- Si une ligne affiche « ECHEC », le script de la section concernée n'a pas été exécuté entièrement.
-- ═══════════════════════════════════════════════════════════════════════════

with attendu(t) as (values
  ('gabriel_users'),('gabriel_folders'),('gabriel_analyses'),('gabriel_strategies'),('gabriel_feedbacks'),
  ('gabriel_exports'),('gabriel_analysis_jobs'),('gabriel_psychologue_sources'),('gabriel_cross_analyses'),
  ('gabriel_cross_analysis_sources'),('gabriel_source_comments'),('gabriel_context_sessions'),
  ('gabriel_context_messages'),('gabriel_context_fields'),('gabriel_chat_conversations'),
  ('gabriel_chat_messages'),('gabriel_memory_cases'),('gabriel_survey_events'),('gabriel_survey_responses'),
  ('gabriel_consent_records'),('gabriel_training_candidates'),('gabriel_ux_settings'),
  ('gabriel_credit_accounts'),('gabriel_credit_grants'),('gabriel_credit_legacy_snapshots'),('gabriel_credit_reservations'),
  ('gabriel_credit_allocations'),('gabriel_credit_provider_usage'),('gabriel_credit_ledger'),
  ('gabriel_provider_budget_policies'),('gabriel_provider_budget_policy_events'),('gabriel_provider_budget_periods'),('gabriel_provider_budget_attempts'))
select a.t                                                   as "table",
       case when c.oid is null then 'ECHEC : table absente'
            when not c.relrowsecurity then 'ECHEC : RLS désactivée'
            else 'ok' end                                    as "état",
       (select count(*) from pg_indexes i where i.schemaname='public' and i.tablename=a.t) as "index"
from attendu a
left join pg_class c on c.relname = a.t and c.relnamespace = 'public'::regnamespace
order by a.t;

-- Fonctions réservées au serveur
select p.proname as "fonction",
       case when has_function_privilege('anon', p.oid, 'execute') or has_function_privilege('authenticated', p.oid, 'execute')
            then 'ECHEC : exécutable par une clé publique' else 'ok (réservée au serveur)' end as "état"
from pg_proc p
where p.pronamespace = 'public'::regnamespace and p.proname like 'gabriel\_%'
order by 1;

-- Liaisons entre tables
select conname as "liaison", conrelid::regclass as "table", confrelid::regclass as "vers", confdeltype as "suppression (c = en cascade)"
from pg_constraint where contype = 'f' and connamespace = 'public'::regnamespace order by 1;

-- Droits des clés publiques : doit rendre 0 ligne
select grantee, table_name, privilege_type
from information_schema.role_table_grants
where table_schema = 'public' and grantee in ('anon','authenticated')
limit 20;
