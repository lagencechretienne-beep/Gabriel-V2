# Gabriel — Audit de préparation au lancement

| | |
|---|---|
| **Date de l'audit** | 6 novembre 2026 |
| **Code audité** | branche `feature/salle-cross-createur-psychologue` (dernier commit `b564f33`) + corrections de cet audit (non enregistrées) |
| **Méthode** | Règle : **code + exécution + test = preuve**. Tout ce qui n'a pas été exécuté aujourd'hui est marqué **NON VÉRIFIÉ**. |
| **Données de test** | 26 avis clients rédigés pour l'occasion (freelances / outil de facturation), deux entreprises fictives, comptes de test locaux. Aucune donnée réelle d'utilisateur. |

---

# 1. VERDICT

## **NO-GO aujourd'hui — GO PILOTE dès que la base de données est rétablie**

1. **La base Supabase n'existe plus.** Son adresse (`klngsmjkopgltwturcew.supabase.co`) renvoie « domaine introuvable ». Sans elle, impossible de créer un espace de travail, donc de démarrer une session ; les inscriptions Google, les crédits et l'historique partagé en dépendent aussi.
2. **Le site de production ne répond pas** : `https://gabriel-mvp-y4x8.onrender.com` renvoie 503 sur toutes ses pages.
3. **Le cœur du produit, lui, fonctionne** : j'ai exécuté inscription → analyse → stratégie → livrable avec le vrai modèle ; les trois agents se transmettent réellement le contexte et leurs sorties dépendent de l'entreprise.
4. Quatre défauts de qualité qui contredisaient la promesse du produit (résumé inventé, prix inventé, routage, santé du serveur) ont été **corrigés et testés** pendant l'audit.
5. Avec un utilisateur accompagné et une base rétablie, c'est un pilote crédible. Sans accompagnement, voir §24 : **partiellement**.

---

# 2. PARCOURS UTILISATEUR RÉEL

```
 Visiteur ─► Landing (/)  ───────────────── OK (hero allégé, photo)
     │
     ▼
 Inscription (/register : nom, e-mail, mot de passe ×2)  ── OK, 300 crédits offerts
     │        (pas de Google visible en local, pas de "mot de passe oublié", pas de CGU)
     ▼
 Guide rapide (5 écrans)  ─────────────────── OK, clair
     │
     ▼
 Accueil Psychologue : « Collez le lien… »  ── OK (aperçu de la vidéo, 121 commentaires détectés)
     │        (2 clics : vérifier, puis analyser)
     ▼
 Analyse  ≈ 2 min 15 à 2 min 40  ──────────── OK (écran de progression en 3 phases)
     │
     ├──► Résultats (5 onglets)  ──────────── OK
     ▼
 Ariane : entretien business (7 sujets)  ─── NON VÉRIFIÉ aujourd'hui (testé par code, et en juillet–septembre)
     │   ou profil business transmis        ─── OK (exécuté, 2 entreprises)
     ▼
 Stratégie  ≈ 2 min  ─────────────────────── OK
     ▼
 Créateur  ≈ 2 min 30 (post) à 5 min  ────── OK, utilise analyse + stratégie
     ▼
 Retour / mémoire / historique  ──────────── PARTIEL (persistance OK en repli ; mémoire de conversation : NON VÉRIFIÉE, bloquée par la base)
```

**Temps jusqu'à la première valeur (mesuré)** : inscription → première analyse lisible ≈ **3 minutes** si l'utilisateur a un lien ou des avis sous la main.

---

# 3. PSYCHOLOGUE

**Disponible (exécuté)** : analyse d'un lien (YouTube : aperçu + 121 commentaires détectés), d'avis collés, de fichiers ; émotions, positions, objections visibles et invisibles, accroches, verbatims réels, personas, recommandations ; Cross Analyse (voir §23). 5 chemins d'entrée sur l'accueil.

**Tests effectués** : analyse de 26 avis ×2 (avant/après `torch`), lecture après redémarrage, comparaison aux avis d'origine.

**Valeur** : les champs structurés sont **fidèles aux avis** (« 29 €/mois avant le 1er client », peur de la TVA, méfiance envers « zéro stress », engagement 12 mois, sécurité des données…).

**Limites constatées**
- Résumé d'ouverture : avant correction, récit inventé (« soldats de l'invisible… baptême de freelance ») → **corrigé** (§11, P1-2).
- Seuls 10 commentaires sur 26 sont réellement analysés (filtrage) ; affiché, mais peu expliqué.
- Personas : poids qui dépassent 100 % au total (61,5 + 42 + 34) et noms voisins → à revoir (P2).
- Modèle sémantique : voir §11 (P1-5).

**Verdict : VALEUR FORTE sur les données structurées, MOYENNE sur la prose.**

---

# 4. STRATÈGE (Ariane)

**Disponible (exécuté)** : stratégie complète (décision, offre, canal, prix, plan 90 jours, risques) depuis une analyse + un profil business ; relecture critique ; garde-fou des chiffres.

**Connexion Psychologue → Stratège : RÉELLE.** Payload inspecté : 14 000 caractères du rapport (48 % du prompt) + profil business (1 %). Les personas, émotions, peurs, désirs, positions sont bien transmis.

**Test « deux entreprises, même audience »** : A = logiciel de facturation à 19 €, 140 abonnés ; B = cabinet à 89 €, 620 clients, engagement 12 mois. Similarité textuelle des décisions : **0,16** (très différentes). Chaque stratégie reprend **son** offre, **son** prix, **son** objectif (A : « 500 abonnés » ; B : « 900 clients », « comptable dédié », « 12 mois »).

**Limites**
- Les deux convergent vers la même tactique (audit gratuit + essai 7 jours + LinkedIn/Instagram) : le fond dépend surtout du modèle, pas d'une méthode propre.
- Le budget publicitaire de B (15 000 €/mois) n'est pas exploité.
- Les verbatims réels ne sont **pas** transmis au Stratège (seulement des agrégats) ; une donnée de verbatim (« 1 800 € récupérés ») a été réutilisée à tort dans la stratégie de B.
- Prix : voir P1-1 (corrigé).

**Verdict : VALEUR MOYENNE à FORTE** (spécifique, mais pas encore profonde).

---

# 5. CRÉATEUR

**Disponible (exécuté)** : post LinkedIn depuis analyse + stratégie. Formats déclarés : script, YouTube, post, email, hooks, page de vente, publicité, discours… (autres formats : NON VÉRIFIÉS aujourd'hui).

**Continuité : RÉELLE.** Brief de 6 300 caractères (≈1 600 tokens) : stratégie (angle, décision, message, canal), vrais verbatims, ton. Le post reprend « essai sans carte », « relances », la peur de la TVA et du contrôle perdu — issus de l'audience et de la stratégie. Aucun chiffre inventé.

**Limites**
- Le post affirme « **un humain valide avant chaque envoi** » : fonctionnalité que l'entreprise n'a jamais décrite (le garde-fou couvre les chiffres, pas les promesses produit) → P2.
- « Scène à tourner » dans un post texte (format confondu) → P3.
- Le nom de l'offre de la stratégie n'apparaît pas dans le brief → P3.

**Verdict : VALEUR MOYENNE** (bien relié, mais à relire avant publication).

---

# 6. GABRIEL CORE

- **Routage** (fonctions réelles, sans modèle) : « Analyse mon audience » → Psychologue ✔ ; « Construis une stratégie » → Stratège ✔ ; « Écris trois scripts basés sur cette stratégie » → **Stratège ✘** avant correction, **Créateur ✔** après ; sans stratégie existante, renvoi voulu vers l'étape manquante ✔.
- **Demande multi-étapes** (« comprendre, puis stratégie, puis campagne ») : route vers le **seul premier agent** ; aucun plan multi-agents exécuté → P2.
- **Exécution depuis la conversation** : seul le Psychologue est lançable ; Ariane et le Créateur se lancent par leurs onglets.
- **Conversation complète** (compréhension, clarification, mémoire) : **NON VÉRIFIÉE** (exige la base).
- **Verdict : VALEUR FAIBLE à MOYENNE.** C'est aujourd'hui un routeur à mots-clés fiable, pas encore un orchestrateur.

---

# 7. CONTEXT ENGINEERING

```
Psychologue : commentaires ─► nettoyage/filtrage (10/26 retenus) ─► NLP + scores (Python) ─► RAG ─► 1 appel profond
                                ─► 6 appels parallèles ─► rapport JSON complet
Stratège    : rapport (réduit à 11 blocs, ≈14 000 car.) + profil business (≈550 car.) + mémoire de cas
                (chiffres retirés) + règles RAG ─► 1 appel (≈7 250 tokens) ─► garde-fou ─► critique
Créateur    : analyse (verbatims, mots, peurs, désirs) + stratégie (angle, décision, message, plan canal)
                + persona + profil ─► brief ≈1 600 tokens ─► pipeline 10 étapes
```

- **Intelligent** : sélection par pertinence côté Psychologue, plan d'accès au contexte côté conversation, mémoire de cas filtrée et cloisonnée par compte, chiffres autorisés = données mesurées uniquement.
- **Accumulatif** : le Stratège reçoit 48 % de rapport psychologique pour 1 % de contexte business ; ses sections « culturel, identitaire, transformation, recommandations du Psychologue » ne lui sont pas transmises ; les verbatims non plus.
- **Fuite entre utilisateurs** : aucune constatée (tests + HTTP, §8).

---

# 8. MÉMOIRE

| Test | Résultat |
|---|---|
| 2. Psychologue → Stratège | ✔ analyse réellement utilisée (payload inspecté) |
| 3. Stratège → Créateur | ✔ stratégie réellement utilisée (brief inspecté, texte produit cohérent) |
| 4. Redémarrage serveur | ✔ analyses et stratégies relues (repli fichiers) ; ✘ travaux en cours perdus (connu) |
| 5. Deux utilisateurs | ✔ aucune fuite (profil, historique, espace de A inaccessible à B : 404) |
| 1. Information donnée puis redemandée (conversation) | **NON VÉRIFIÉ** — exige la base |

Faits : le profil business enregistré par l'ancienne route et celui de l'entretien d'Ariane sont deux stockages distincts (la lecture croisée est en place, mais un enregistrement par l'ancienne route n'alimente pas l'avancement de l'entretien).

---

# 9. TOOLS / SKILLS

- **Tools : 22 déclarés** (14 catégories), enveloppes sur des fonctions qui marchent. **Seuls 2 sont appelés via le registre** (`knowledge.search`, `adaptation.psycho_to_strategy_context`) ; le reste est appelé directement par le code. Le registre est donc un **catalogue**, pas un mécanisme d'exécution. Valeur utilisateur : indirecte.
- **Skills : 10 déclarés**, 6 rendus à l'exécution (grille de compréhension, raisonnement stratégique, structure de contenu, directive d'émotion, discipline de ton, anti-fuite technique).
- **Agents : 5 fiches** (Psychologue, Stratège, Créateur, Design : disponibles ; Architecte : non implémenté).

---

# 10. TESTS

| Suite | Total | Réussis | Échoués | Ignorés |
|---|---|---|---|---|
| Backend (pytest) | 962 | **962** | 0 | 0 |
| Frontend (Vitest) | 222 | **222** | 0 | 0 |

17 tests ajoutés par cet audit (garde-fou, routage, résumé ancré, santé). Chacun a été **falsifié** (échec quand le code est cassé). Note : la suite écrit dans `data/` (stratégies de test mélangées aux vraies, P3).

---

# 11. BUGS

## P0 — BLOCKERS
| # | Problème | Preuve | État |
|---|---|---|---|
| P0-1 | **Base Supabase introuvable** (NXDOMAIN) | `nslookup` : domaine inexistant ; GitHub et Mistral joignables ; création d'espace → erreur 500 | **À faire par vous** : rétablir/restaurer le projet (ou en créer un, appliquer `supabase/*.sql`), puis mettre à jour `SUPABASE_URL`/`SUPABASE_KEY` |
| P0-2 | **Production en 503** | `GET /`, `/health` → 503 sur Render | **À faire par vous** : redéployer / réveiller le service après P0-1 |

## P1 — CRITIQUES AVANT LANCEMENT
| # | Problème | Cause racine | État |
|---|---|---|---|
| P1-1 | Un **prix inventé** (« 9,90 €/mois ») traversait le garde-fou d'Ariane | Le texte rédigé par le Psychologue servait de « source » de chiffres | **CORRIGÉ** : seules les données mesurées + verbatims + profil autorisent un chiffre |
| P1-2 | **Résumé d'ouverture inventé** (« soldats de l'invisible… ») | Le prompt demandait « l'essence », « l'appel intérieur », « la vérité cachée » | **CORRIGÉ** : prompt ancré (interdits, un élément observé par phrase). Vérifié avec le vrai modèle |
| P1-3 | « **Écris trois scripts basés sur cette stratégie** » → Stratège | Égalité de mots-clés + « stratégie » pris pour la demande | **CORRIGÉ** (matière de départ neutralisée, verbes de production) |
| P1-4 | `/health` répondait « ok » base morte | Contrôle de vivacité seul | **CORRIGÉ** : `/health/ready` (503 si base injoignable, signale le repli sémantique). **À faire** : l'utiliser comme contrôle de santé Render |
| P1-5 | Modèle sémantique cassé en local (`torch` incomplet) → repli TF-IDF silencieux (1 cluster, RAG appauvri) | Installation corrompue du venv | Local **réparé** (réinstallation) ; production : NON VÉRIFIÉ |
| P1-6 | **Aucun « mot de passe oublié »**, aucune CGU/politique de confidentialité à l'inscription | Absents du code et du gabarit | **Non corrigé** : requis avant ouverture publique ; acceptable pour un pilote accompagné |

## P2 — IMPORTANT, LANCEMENT PILOTE POSSIBLE
- Le Créateur invente des **promesses produit** non décrites (« un humain valide avant chaque envoi »).
- Un résultat de job n'est **livré qu'une fois** (relecture = « introuvable » si la base est absente).
- Travaux en cours **perdus** au redémarrage (connu, bouton « Relancer » présent).
- Personas : poids > 100 %, noms voisins ; « 10 commentaires analysés sur 26 » peu expliqué.
- Orchestrateur : pas de plan multi-agents ; seul le Psychologue est lançable depuis la conversation.
- Message d'erreur opaque quand la base tombe (« Impossible de préparer cette session »).
- Aucun parcours « je n'ai pas encore de données d'audience » mis en avant pour l'entrepreneur débutant.
- Le bouton d'analyse demande 2 clics (vérifier, puis analyser).
- Pas de CI ; Python 3.9 en fin de vie.
- Aucun profil/poste demandé à l'inscription (l'entreprise n'est demandée que chez Ariane).

## P3 — AMÉLIORATIONS
Registre d'outils non exécutif ; suppression de compte incomplète en mode repli fichiers ; tests qui écrivent dans `data/` ; « scène à tourner » dans un post texte ; nom d'offre absent du brief ; aucun `run_id` de bout en bout.

**Sécurité (critique)** : aucune vulnérabilité critique trouvée — pas de secret dans le frontend ni dans Git ; routes protégées (401/302) ; isolation vérifiée ; fichiers non autorisés refusés ; taille limitée (100 000 caractères) ; en-têtes de sécurité (CSP, HSTS, nosniff…) ; mots de passe hachés (pbkdf2-sha256) ; démarrage refusé en déploiement sans authentification ; suppression de compte sur 20 tables ; pas d'e-mail dans les journaux.

---

# 12. VALEUR PRODUIT

| Agent | Problème | Capacité | Sortie | Valeur |
|---|---|---|---|---|
| Psychologue | « Que pensent vraiment mes clients ? » | Mesure déterministe + lecture structurée de commentaires réels | Objections, peurs, verbatims, accroches | **FORTE** (données) / MOYENNE (prose) |
| Stratège | « Que faire maintenant ? » | Décision à partir de l'audience + profil business | Stratégie datée, chiffrée sans inventer | **MOYENNE à FORTE** |
| Créateur | « Comment le dire ? » | Brief relié à l'audience et à la stratégie | Post/script/email cohérents | **MOYENNE** |
| Gabriel Core | « Par où commencer ? » | Routage par intention, parcours guidé | Orientation vers le bon agent | **FAIBLE à MOYENNE** |

---

# 13. POURQUOI GABRIEL PLUTÔT QU'UN LLM GÉNÉRALISTE ?

Réponse factuelle, d'après ce qui a été observé :

- **Ce qu'un bon prompt ne fait pas facilement** : mesurer sur *tous* les commentaires (sentiment, positions, KPIs, clusters) avant de faire écrire le modèle ; citer des **verbatims réels** ; garder le contexte **entre trois étapes** sans recopier ; **interdire les chiffres inventés** avec un contrôle mécanique ; comparer **2 à 5 audiences** sans les fusionner et vérifier que chaque rapprochement cite un signal réel.
- **Ce qu'il fait aussi bien** : la prose du résumé, la tactique générale d'une stratégie (audit gratuit + essai), la rédaction d'un post.
- **Conclusion** : la valeur différenciante est **l'ancrage dans les données et la continuité entre agents**. Elle est réelle côté Psychologue, plus discrète côté Stratège et Créateur. Ne pas promettre davantage.

---

# 14. CE QUI MANQUE POUR LE LANCEMENT

1. **Rétablir la base de données** (P0-1) et appliquer les migrations.
2. **Redéployer la production** et brancher `/health/ready` comme contrôle de santé (P0-2, P1-4).
3. Vérifier en production que le modèle sémantique se charge (`/health/ready` → `semantic_model: ok`).
4. **Enregistrer les corrections de cet audit** (7 fichiers modifiés, 17 tests ajoutés) puis redéployer.
5. Tester **en réel** : connexion Google, un paiement Stripe, l'entretien d'Ariane de bout en bout, la conversation et sa mémoire (tout cela dépend de la base).
6. Ajouter « mot de passe oublié » et un lien vers les CGU/confidentialité (obligatoire avant ouverture publique).
7. Prévenir les pilotes : un travail en cours est perdu si le serveur redémarre ; une génération prend 2 à 5 minutes.

---

# 15. CE QUI PEUT ATTENDRE

Orchestration multi-agents, plan automatique « analyse → stratégie → campagne », registre d'outils exécutif, découpage de `app.py`, CI, Python ≥ 3.11, promesses produit inventées dans le Créateur (relecture humaine en attendant), personas à revoir, parcours « sans données », bouton d'analyse en un clic, observabilité (`run_id`), tests qui écrivent dans `data/`.

---

# 23. TABLEAU FINAL

| Élément | Existe | Fonctionne | Testé | Valeur utilisateur | Bloquant |
|---|---|---|---|---|---|
| Auth (e-mail) | oui | **oui** | oui (HTTP + tests) | moyenne | non (sans « mot de passe oublié ») |
| Auth Google | oui | NON VÉRIFIÉ | non | — | à vérifier |
| Onboarding (guide) | oui | oui | oui | moyenne | non |
| Profil/Poste | **non** (entreprise demandée chez Ariane) | — | — | faible | non (pilote) |
| Psychologue | oui | **oui** | oui | **forte** (données) | non |
| Cross Analyse | oui | oui (vérifiée le 24/09, non rejouée aujourd'hui) | oui | forte | non |
| Stratège | oui | **oui** | oui (2 entreprises) | moyenne–forte | non |
| Créateur | oui | **oui** | oui | moyenne | non |
| Gabriel Core | oui | partiel (routage oui, orchestration non) | oui (routage) | faible–moyenne | non |
| Context Engine | oui | oui | inspecté | moyenne | non |
| Mémoire | oui | partiel | oui (sauf conversation) | moyenne | non |
| Tools | oui (22) | oui (2 via registre) | oui | indirecte | non |
| Skills | oui (10) | oui (6 rendus) | oui | indirecte | non |
| Agent handoff | oui | **oui** | payload inspecté | forte | non |
| Dashboard | oui | oui | oui | forte | non |
| Persistence | oui | **NON : base introuvable** (repli fichiers OK) | oui | — | **OUI (P0-1)** |
| Sécurité critique | oui | oui | oui | — | non |

---

# 24. DERNIÈRE QUESTION

> *Un entrepreneur, un marketeur ou une entreprise qui s'inscrit sans que Nalay soit derrière lui arrive-t-il seul jusqu'à une valeur concrète ?*

## **PARTIELLEMENT**

- **Où il comprend la valeur** : à l'accueil (« Collez le lien d'une vidéo ») puis aux résultats : verbatims, objections et accroches fidèles à ses commentaires.
- **Où il hésite** : au premier clic (deux étapes pour lancer), s'il n'a **pas de lien ni d'avis** sous la main, devant la différence entre Ariane et le Créateur, et face à l'absence de CGU et de « mot de passe oublié ».
- **Où il se perd** : s'il n'a pas de données d'audience (aucun chemin évident), et dès que la base est absente (« Impossible de préparer cette session » sans explication).
- **Où Gabriel devient réellement utile** : dès l'analyse (≈ 3 minutes), puis lorsqu'il enchaîne stratégie et contenu sans rien ressaisir.
- **À corriger absolument avant de lui envoyer le lien** : rétablir la base et la production (P0), brancher la santé réelle, ajouter la réinitialisation du mot de passe et les mentions légales, relire les livrables du Créateur.

*Le standard « un premier utilisateur réel peut utiliser Gabriel seul, obtenir un résultat utile et avoir envie de revenir » est **presque atteint** sur le cœur du produit ; il est **bloqué par l'infrastructure**, pas par le produit.*
