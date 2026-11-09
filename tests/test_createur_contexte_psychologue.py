"""Le Créateur doit réellement écrire à partir de la lecture du Psychologue.

Trouvé le 13/09/2026 : le brief lisait des clés disparues (brief.synthese,
brief.insight_cle, objections_principales, nlp.mots_frequents) — l'insight,
les objections et les mots de l'audience n'arrivaient jamais au rédacteur.
La stratégie d'Ariane, elle, s'imposait dès qu'elle existait dans l'espace.
"""
import json
import os
import time

os.environ.setdefault('FLASK_SECRET_KEY', 'test-secret-createur')
os.environ.setdefault('MISTRAL_API_KEY', 'test-key')

FIXTURE = os.path.join(os.path.dirname(__file__), '..', 'frontend-react', 'src', 'gabriel-v2',
                       'components', '__tests__', 'fixtures', 'psychologue-analyse-youtube.json')


def _analyse():
    with open(FIXTURE, encoding='utf-8') as f:
        return json.load(f)


def test_le_brief_de_redaction_reprend_la_lecture_reelle_du_psychologue():
    from agents.createur import Createur
    analyse = _analyse()
    brief = Createur().build_writing_brief('script', 'youtube', 'direct', '', analyse, {}, None, {}, 'Script vidéo')

    assert analyse['brief']['qui'][:60] in brief
    assert analyse['brief']['insight'][:60] in brief
    assert analyse['emotions']['commentaires_revelateurs'][0].strip()[:40] in brief
    assert str(analyse['recommandations']['message_central'])[:40] in brief
    assert analyse['marketing']['objections_visibles'][0][:40] in brief
    top = analyse['dashboard']['lexique']['top_mots'][0]
    assert (top[0] if isinstance(top, list) else top) in brief


def test_le_createur_fonctionne_sans_aucun_agent():
    from agents.createur import Createur
    brief = Createur().build_writing_brief('script', '', '', '', {}, {}, None, {}, 'Script vidéo sur la productivité')
    assert 'Script vidéo sur la productivité' in brief


def test_la_strategie_et_l_analyse_sont_activables_separement(monkeypatch):
    import app as _app
    import api.db as _db
    recu = {}

    monkeypatch.setattr(_db, 'has_enough_credits', lambda *a, **k: True)
    monkeypatch.setattr(_db, 'deduct_credits', lambda *a, **k: None)
    monkeypatch.setattr(_db, 'create_job', lambda *a, **k: None)
    monkeypatch.setattr(_db, 'update_job', lambda *a, **k: None)
    monkeypatch.setattr(_app, '_resolve_psycho', lambda data, uid: {'brief': {'qui': 'audience réelle'}})
    monkeypatch.setattr(_app, '_resolve_strategy', lambda data, uid: {'angle_positionnel': 'stratégie Ariane'})
    monkeypatch.setattr(_app, '_resolve_business_context', lambda data, uid: {})

    import agents.creation as creation

    def faux_generate(**kw):
        recu.clear(); recu.update(psycho=kw['psycho_data'], strategy=kw['strategy'])
        return {'content': {'texte': 'ok'}, 'full_text': 'ok', 'success': True}
    monkeypatch.setattr(creation, 'generate_result', faux_generate)

    client = _app.app.test_client()
    with client.session_transaction() as s:
        s['user_id'] = 'createur-tester'; s['user_email'] = 'c@example.com'

    def lancer(**options):
        r = client.post('/api/v2/agents/createur/generate', json={'content_type': 'script', 'user_request': 'Un script', **options})
        assert r.status_code == 200, r.get_data(as_text=True)
        for _ in range(50):
            if recu:
                return dict(recu)
            time.sleep(0.05)
        raise AssertionError('génération jamais lancée')

    assert lancer(use_psycho=True, use_strategy=False) == {'psycho': {'brief': {'qui': 'audience réelle'}}, 'strategy': {}}
    assert lancer(use_psycho=True, use_strategy=True)['strategy'] == {'angle_positionnel': 'stratégie Ariane'}
    assert lancer(use_psycho=False, use_strategy=False) == {'psycho': {}, 'strategy': {}}


def test_les_creations_ne_sont_plus_coupees_a_3000_tokens():
    from agents.createur import CREATION_MAX_TOKENS
    assert CREATION_MAX_TOKENS >= 8000


def test_le_brief_interdit_les_chiffres_et_sources_inventes():
    from agents.createur import Createur
    brief = Createur().build_writing_brief('script', '', '', '', _analyse(), {}, None, {}, 'Script')
    assert "N'invente JAMAIS de chiffre" in brief
    assert '[chiffre réel à insérer]' in brief


def test_le_controle_qualite_reconnait_un_texte_nourri_par_l_analyse():
    from agents.createur import Createur
    analyse = _analyse()
    mots = [m[0] for m in analyse['dashboard']['lexique']['top_mots'] if len(m[0]) >= 4][2:5]
    texte = {'texte': 'Un script qui parle de ' + ', '.join(mots) + ' comme le fait vraiment cette communauté.'}
    assert Createur().quality_check_content(texte, analyse, {}, 'script')['based_on_psychology'] is True
    assert Createur().quality_check_content({'texte': 'Un texte sans rapport avec cette audience.'}, analyse, {}, 'script')['based_on_psychology'] is False


def test_un_format_inconnu_est_refuse_au_lieu_de_devenir_des_hooks(monkeypatch):
    import app as _app
    import api.db as _db
    monkeypatch.setattr(_db, 'has_enough_credits', lambda *a, **k: True)
    client = _app.app.test_client()
    with client.session_transaction() as s:
        s['user_id'] = 'createur-tester'; s['user_email'] = 'c@example.com'
    r = client.post('/api/v2/agents/createur/generate', json={'content_type': 'script_video', 'user_request': 'Un script'})
    assert r.status_code == 400
    assert 'Format inconnu : script_video' in r.get_json()['error'] and 'youtube' in r.get_json()['error']


STRATEGIE_CLE_EN_MAIN = {
    'decision_centrale': 'Lancer un diagnostic matériel gratuit puis un guide personnalisé payant.',
    'angle_positionnel': "'L’IA locale n’est pas réservée aux élites.'",
    'social_media_decision': {'first_post_or_video_to_create': "Titre : 'J’ai testé Flux 2 sur une 1080Ti'. CTA 10-15 sec."},
    'immediate_monetization_plan': {
        'first_call_to_action': "Envoie-moi tes specs en MP, je te dis EXACTEMENT ce que tu peux faire. Premier rapport offert !",
        'first_offer_to_test': "Diagnostic gratuit puis guide personnalisé.",
    },
}


def test_le_brief_reprend_le_plan_d_execution_d_ariane():
    """Avant le 09/11/2026, le script disait « pas besoin de me l'envoyer en MP » alors que la
    stratégie demandait « envoie-moi tes specs en MP » : l'appel à l'action n'arrivait pas au rédacteur."""
    from agents.createur import Createur
    brief = Createur().build_writing_brief('script', 'tiktok', 'direct', '', {}, STRATEGIE_CLE_EN_MAIN, None, {}, 'Script')
    assert "Envoie-moi tes specs en MP" in brief
    assert "J’ai testé Flux 2 sur une 1080Ti" in brief
    assert "Diagnostic gratuit puis guide personnalisé" in brief
    assert "ne le contredis jamais" in brief


def test_le_controle_qualite_detecte_si_la_strategie_est_suivie():
    from agents.createur import Createur
    suivi = {'texte': "Envoie-moi tes specs : le diagnostic matériel gratuit te dit exactement ce que ton PC peut faire, "
                      "puis le guide personnalisé te montre comment l'IA locale marche avec ta configuration."}
    ignore = {'texte': "Ton PC a un super-pouvoir caché, réveille-le tout seul avec ces trois réglages."}
    c = Createur()
    assert c.quality_check_content(suivi, {}, STRATEGIE_CLE_EN_MAIN, 'script')['based_on_strategy'] is True
    assert c.quality_check_content(ignore, {}, STRATEGIE_CLE_EN_MAIN, 'script')['based_on_strategy'] is False
    assert c.quality_check_content(suivi, {}, {}, 'script')['based_on_strategy'] is False


def test_une_premiere_creation_sous_forme_d_objet_est_lue_proprement():
    """Constaté le 09/11/2026 : la stratégie renvoie first_post_or_video_to_create en objet
    ({ angle, titre, structure }) ; le Créateur ne doit pas en recopier la représentation brute."""
    from agents.createur import Createur
    strat = {'social_media_decision': {'first_post_or_video_to_create': {
        'titre': "L'erreur qui te fait perdre 3h", 'angle': 'Montrer un blocage réel',
        'structure': ['0:00-0:10 : Accroche', '0:10-0:30 : Scénario réel']}}}
    brief = Createur().build_writing_brief('script', 'tiktok', 'direct', '', {}, strat, None, {}, 'Script')
    assert "L'erreur qui te fait perdre 3h" in brief and '0:10-0:30 : Scénario réel' in brief
    assert "{'" not in brief and "['" not in brief
