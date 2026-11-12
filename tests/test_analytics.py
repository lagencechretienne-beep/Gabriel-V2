"""Statistiques de visites : désactivées par défaut, limitées aux pages publiques, CSP ouverte seulement si configuré."""
import os
os.environ.setdefault('FLASK_SECRET_KEY', 'test-secret-analytics-0123456789abcdef')
os.environ.setdefault('MISTRAL_API_KEY', 'test-key')
os.environ['AUTH_ENABLED'] = 'false'
os.environ['NLP_PRELOAD'] = 'false'
os.environ['RATE_LIMIT_ENABLED'] = 'false'

import pytest
from core.analytics import analytics_config, csp_avec_analytics
import app as application

PLAUSIBLE = {'ANALYTICS_PROVIDER': 'plausible', 'ANALYTICS_DOMAIN': 'gabriel.onrender.com'}
UMAMI = {'ANALYTICS_PROVIDER': 'umami', 'ANALYTICS_SITE_ID': '11111111-2222-3333-4444-555555555555',
         'ANALYTICS_SRC': 'https://cloud.umami.is/script.js', 'ANALYTICS_CONNECT_SRC': 'https://api-gateway.umami.dev'}


def test_rien_n_est_charge_par_defaut():
    assert analytics_config({}) is None
    assert analytics_config({'ANALYTICS_PROVIDER': ''}) is None


def test_plausible_a_une_adresse_par_defaut_et_un_domaine_obligatoire():
    c = analytics_config(PLAUSIBLE)
    assert c['src'] == 'https://plausible.io/js/script.js' and c['attrs'] == {'data-domain': 'gabriel.onrender.com'}
    assert analytics_config({'ANALYTICS_PROVIDER': 'plausible'}) is None


def test_umami_exige_identifiant_et_adresse_et_autorise_l_envoi():
    c = analytics_config(UMAMI)
    assert c['attrs'] == {'data-website-id': UMAMI['ANALYTICS_SITE_ID']}
    assert c['connect_origins'] == ['https://api-gateway.umami.dev', 'https://cloud.umami.is']
    assert analytics_config({**UMAMI, 'ANALYTICS_SRC': ''}) is None


@pytest.mark.parametrize('mauvais', [
    {'ANALYTICS_SRC': 'http://plausible.io/js/script.js'},                       # pas de https
    {'ANALYTICS_SRC': 'https://evil.com/x.js" onload="alert(1)'},                 # injection
    {'ANALYTICS_DOMAIN': 'a" onerror="x'},                                         # injection dans le domaine
])
def test_une_configuration_douteuse_est_refusee(mauvais):
    assert analytics_config({**PLAUSIBLE, **mauvais}) is None


def test_la_csp_n_est_ouverte_que_si_configure():
    base = "default-src 'self'; script-src 'self' 'unsafe-inline' https://js.stripe.com; connect-src 'self' https://api.stripe.com; "
    assert csp_avec_analytics(base, None) == base
    ouverte = csp_avec_analytics(base, analytics_config(UMAMI))
    assert "script-src 'self' 'unsafe-inline' https://cloud.umami.is https://js.stripe.com" in ouverte
    assert "connect-src 'self' https://api-gateway.umami.dev https://cloud.umami.is https://api.stripe.com" in ouverte


def _get(url, connecte=False):
    client = application.app.test_client()
    if connecte:
        with client.session_transaction() as session:
            session['user_id'] = 'test-analytics'
            session['user_email'] = 'a@example.test'
    return client.get(url)


def test_le_script_n_apparait_que_sur_les_pages_publiques_et_seulement_si_configure(monkeypatch):
    monkeypatch.setenv('AUTH_ENABLED', 'true')
    monkeypatch.setenv('GABRIEL_ACCOUNTS_ENABLED', 'true')
    for cle in list(PLAUSIBLE) + list(UMAMI):
        monkeypatch.delenv(cle, raising=False)
    assert 'plausible.io' not in _get('/').get_data(as_text=True)                  # désactivé par défaut

    for cle, valeur in PLAUSIBLE.items():
        monkeypatch.setenv(cle, valeur)
    for publique in ('/', '/login', '/tarifs', '/en-savoir-plus'):
        html = _get(publique).get_data(as_text=True)
        assert 'src="https://plausible.io/js/script.js"' in html and 'data-domain="gabriel.onrender.com"' in html, publique
    for privee in ('/orchestrateur', '/profil'):
        assert 'plausible.io' not in _get(privee, connecte=True).get_data(as_text=True), f"{privee} ne doit jamais être mesurée"
    assert 'https://plausible.io' in _get('/').headers['Content-Security-Policy']
