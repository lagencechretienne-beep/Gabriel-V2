"""Les utilisateurs sur téléphone sont prévenus que Gabriel est conçu pour ordinateur."""
import os
os.environ.setdefault('FLASK_SECRET_KEY', 'test-secret-avis-ordinateur-0123456789')
os.environ.setdefault('MISTRAL_API_KEY', 'test-key')
os.environ['AUTH_ENABLED'] = 'false'
os.environ['NLP_PRELOAD'] = 'false'
os.environ['RATE_LIMIT_ENABLED'] = 'false'

import app as application


def _page(url):
    # Connecté : selon l'ordre des tests, l'authentification peut déjà être active (sinon sans effet).
    client = application.app.test_client()
    with client.session_transaction() as session:
        session['user_id'] = 'test-avis-ordinateur'
        session['user_email'] = 'avis@example.test'
    r = client.get(url)
    assert r.status_code == 200, (url, r.status_code)
    return r.get_data(as_text=True)


def test_la_page_d_accueil_previent_les_utilisateurs_mobiles():
    html = _page('/')
    assert 'id="avis-ordinateur"' in html and 'conçu pour ordinateur' in html
    assert '@media (max-width: 820px)' in html


def test_l_application_previent_les_utilisateurs_mobiles():
    html = _page('/orchestrateur')
    assert 'id="avis-ordinateur"' in html and 'conçu pour ordinateur' in html


def test_les_pages_heritees_de_base_aussi():
    html = _page('/tarifs')
    assert 'id="avis-ordinateur"' in html


def test_le_hero_ne_deborde_plus_sur_petit_ecran():
    """Constaté le 10/11/2026 à 375 px : « 1fr » seul laissait la colonne du Hero s'élargir au contenu
    (423 px dans un écran de 375) — bouton et mention de confiance coupés à droite."""
    html = _page('/')
    assert 'grid-template-columns: minmax(0, 1fr);' in html
    assert '@media (max-width: 560px)' in html
    assert 'repeat(3, minmax(0, 1fr))' in html
