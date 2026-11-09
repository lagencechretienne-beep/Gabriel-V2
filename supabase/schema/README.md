# Schéma Supabase de Gabriel — mode d'emploi

Refonte complète du 8 novembre 2026. **Ce dossier remplace** tous les anciens fichiers de `supabase/`
(`*_migration.sql`, `security_policies.sql`) et `docs/supabase_migration_rls.sql`, qu'il ne faut plus exécuter.
Les cinq tables de base (comptes, analyses, stratégies, retours, exports) n'avaient **jamais** été écrites dans
le dépôt : elles avaient été créées à la main dans le tableau de bord. Elles le sont maintenant.

## Avant de recréer : le projet est-il récupérable ?

Un projet Supabase gratuit **mis en pause** se restaure en un clic (bouton *Restore*) pendant environ 90 jours,
avec toutes ses données (comptes, analyses, crédits). C'est préférable à une recréation. Si le projet est
**supprimé**, il n'y a rien à migrer : repartez de zéro avec ce schéma.

## Étapes

1. Supabase → **New project** (région proche de vos utilisateurs, notez le mot de passe de la base).
2. **SQL Editor** → New query → coller le contenu de `00_ALL_IN_ONE.sql` → **Run**.
   (Ou exécuter `01` à `07` dans cet ordre.) Rejouable sans risque.
3. Coller `99_verify.sql` → Run : toutes les lignes doivent afficher `ok`, et la dernière requête doit rendre **0 ligne**.
4. **Project Settings → API** : copier l'adresse du projet (*Project URL*) et la clé **secrète** (*secret* / *service_role*).
   Jamais la clé « anon / publishable ».
5. Dans le fichier `.env` **et** sur Render : `SUPABASE_URL=…` et `SUPABASE_KEY=<clé secrète>`.
6. Relancer le serveur et ouvrir `/health/ready` : `"database": "ok"`.

## Ce que contient le schéma

| Famille | Tables |
|---|---|
| Comptes | `gabriel_users` (plan, crédits) |
| Espaces de travail | `gabriel_folders` |
| Résultats | `gabriel_analyses`, `gabriel_strategies`, `gabriel_feedbacks`, `gabriel_exports` |
| Travaux longs | `gabriel_analysis_jobs` |
| Cross Analyse | `gabriel_psychologue_sources`, `gabriel_cross_analyses`, `gabriel_cross_analysis_sources`, `gabriel_source_comments` |
| Entretien d'Ariane | `gabriel_context_sessions`, `gabriel_context_messages`, `gabriel_context_fields` |
| Conversation et mémoire | `gabriel_chat_conversations`, `gabriel_chat_messages`, `gabriel_memory_cases` |
| Enquêtes et conformité | `gabriel_survey_events`, `gabriel_survey_responses`, `gabriel_consent_records`, `gabriel_training_candidates` |
| Interface | `gabriel_ux_settings` |
| Registre de crédits (V3) | `gabriel_credit_accounts`, `_grants`, `_legacy_snapshots`, `_reservations`, `_allocations`, `_provider_usage`, `_ledger` (journal inaltérable) |
| Budgets fournisseurs IA (V3) | `gabriel_provider_budget_policies`, `_policy_events`, `_periods`, `_attempts` |

**33 tables, 20 fonctions, déclencheurs `updated_at`, 3 liaisons en cascade + celles du registre de crédits.**

Les fichiers `05`, `06`, `07` viennent du Release Candidate V3 de Zinsoust (commit `f7efda3`) et sont repris tels quels (seul écart : `IF NOT EXISTS` ajouté dans `06` pour pouvoir rejouer). Le `07` (accès réservé au serveur) doit toujours passer en dernier. **Gabriel Prospect n'est pas inclus** (retiré du produit lancé) : son SQL reste dans `supabase/20261012_gabriel_prospect_mvp3.sql`.

`gabriel_deduct_credits` (ancien solde dans `gabriel_users.credits`) reste en place : le registre ne s'active que si `GABRIEL_PAID_AI_ENABLED`/ledger est configuré côté application. `gabriel_delete_user_data` ne touche pas au registre de crédits : c'est un journal financier à conserver.

## Les liaisons naturelles

```
gabriel_users ─ user_id (texte, sans liaison forcée : voir 02) ─► toutes les tables
gabriel_folders.folder_id ◄── analyses · strategies · jobs · cross_analyses · context_sessions   (lien souple)
gabriel_analyses.analysis_id ◄── strategies · feedbacks · exports · memory_cases.case_id · cross_analysis_sources
gabriel_cross_analyses ──(cascade)──► gabriel_cross_analysis_sources ◄──(cascade)── gabriel_psychologue_sources
                                                                                         └──(cascade)──► gabriel_source_comments
```

## Ce qui change par rapport à l'ancien schéma

- `user_id` est **toujours du texte** (l'ancienne `gabriel_memory_cases.user_id` était un uuid, ce qui refusait la valeur `'global'`).
- `gabriel_chat_conversations.id` et `gabriel_survey_events.id` sont du **texte** (le code peut y écrire un identifiant tronqué).
- **Sécurité** : RLS sur toutes les tables ; plus aucun droit pour les clés publiques (`anon`) ni `authenticated`. Le serveur utilise
  uniquement la clé secrète. L'isolation entre comptes est assurée par le code (testée).
- Contraintes d'intégrité : crédits ≥ 0, progression 0-100, notes 1-5, confiance 0-1, un seul compte à mot de passe par adresse,
  un seul `google_id`, identifiants d'analyse/stratégie uniques.
- `updated_at` automatique (déclencheur) — il sert de battement de cœur pour repérer les travaux orphelins.

## Fonctions réservées au serveur (non encore appelées par le code)

| Fonction | Ce qu'elle règle | Branchement à faire dans le code |
|---|---|---|
| `gabriel_deduct_credits(user, coût)` | débit **atomique** (aujourd'hui lire puis réécrire : deux générations simultanées peuvent perdre un débit) | `api/db.py:deduct_credits` → `_supabase.rpc('gabriel_deduct_credits', {...})` |
| `gabriel_delete_user_data(user)` | suppression de compte **tout ou rien** (aujourd'hui 20 requêtes séparées) | `app.py:account_delete` → `rpc('gabriel_delete_user_data', …)` |
| `gabriel_mark_stale_jobs(secondes)` | balayage des travaux orphelins en SQL | optionnel (le serveur le fait déjà au démarrage) |
| `gabriel_purge_old_jobs(jours)` | ménage des vieux résultats de travaux | à planifier (Supabase → Database → Cron) |

Le code actuel fonctionne **sans** ces branchements.

## Comment ce schéma a été validé

Exécuté sur un vrai PostgreSQL (deux fois de suite) avec les rôles et fonctions propres à Supabase simulés : 40 tests de
comportement (écritures reproduisant celles du code, contraintes, cascades, débit atomique, suppression de compte, droits des
clés publiques) et un contrôle automatique des 150 colonnes que le code lit ou écrit. Aucun test n'a été fait sur un vrai projet
Supabase : le contrôle `99_verify.sql` sert à le confirmer chez vous.
