"""Circuit de paiement Stripe : l'utilisateur doit être retrouvé par le webhook après un paiement.

Constaté le 13/11/2026 en relisant le code : la session de paiement portait l'utilisateur dans ses métadonnées, mais le
webhook (événements customer.subscription.*) le lit sur l'ABONNEMENT, où Stripe ne copie pas les métadonnées de la
session. Résultat : un client qui payait restait au plan gratuit.
"""
import json
import os
import sys
import types

os.environ.setdefault('FLASK_SECRET_KEY', 'test-secret-stripe-0123456789abcdefghij')
os.environ.setdefault('MISTRAL_API_KEY', 'test-key')
os.environ['AUTH_ENABLED'] = 'false'
os.environ['NLP_PRELOAD'] = 'false'
os.environ['RATE_LIMIT_ENABLED'] = 'false'

import pytest
import app as application


@pytest.fixture
def faux_stripe(monkeypatch):
    appels = {'session': None, 'evenement': None}

    class Session:
        @staticmethod
        def create(**kwargs):
            appels['session'] = kwargs
            return types.SimpleNamespace(url='https://checkout.stripe.test/s/abc')

    class Webhook:
        @staticmethod
        def construct_event(payload, signature, secret):
            if signature != 'signature-valide':
                raise ValueError('signature invalide')
            return object()

    module = types.SimpleNamespace(api_key=None, checkout=types.SimpleNamespace(Session=Session), Webhook=Webhook)
    monkeypatch.setitem(sys.modules, 'stripe', module)
    monkeypatch.setattr(application, '_STRIPE_SECRET', 'sk_test_x')
    monkeypatch.setattr(application, '_STRIPE_WEBHOOK_SECRET', 'whsec_x')
    monkeypatch.setattr(application, '_STRIPE_PLANS', {'standard': 'price_standard', 'early_access': 'price_early'})
    monkeypatch.setattr(application, '_STRIPE_PLAN_BY_PRICE_ID', {'price_standard': 'standard', 'price_early': 'early_access'})
    return appels


def _client():
    client = application.app.test_client()
    with client.session_transaction() as session:
        session['user_id'] = 'user-42'
        session['user_email'] = 'client@example.test'
    return client


def test_la_session_de_paiement_transmet_l_utilisateur_a_l_abonnement(faux_stripe):
    reponse = _client().post('/stripe/checkout', json={'plan': 'standard'})
    assert reponse.status_code == 200 and reponse.get_json()['url'].startswith('https://checkout.stripe.test')
    session = faux_stripe['session']
    assert session['mode'] == 'subscription' and session['line_items'] == [{'price': 'price_standard', 'quantity': 1}]
    # sans subscription_data.metadata, le webhook ne retrouve jamais l'utilisateur
    assert session['subscription_data'] == {'metadata': {'user_id': 'user-42', 'plan_slug': 'standard'}}


def _webhook(client, evenement, signature='signature-valide'):
    return client.post('/stripe/webhook', data=json.dumps(evenement), headers={'Stripe-Signature': signature},
                       content_type='application/json')


def _abonnement(statut='active', price='price_standard', metadata=None):
    return {'type': 'customer.subscription.created', 'data': {'object': {
        'status': statut, 'metadata': metadata if metadata is not None else {'user_id': 'user-42', 'plan_slug': 'standard'},
        'items': {'data': [{'price': {'id': price}}]}}}}


def test_un_abonnement_actif_met_le_plan_de_l_utilisateur_a_jour(faux_stripe, monkeypatch):
    plans = []
    monkeypatch.setattr(application._db, 'upgrade_user_plan', lambda uid, plan: plans.append((uid, plan)) or True)
    assert _webhook(application.app.test_client(), _abonnement()).status_code == 200
    assert plans == [('user-42', 'standard')]


def test_un_abonnement_impaye_ou_supprime_ramene_au_plan_gratuit(faux_stripe, monkeypatch):
    plans = []
    monkeypatch.setattr(application._db, 'upgrade_user_plan', lambda uid, plan: plans.append((uid, plan)) or True)
    client = application.app.test_client()
    _webhook(client, _abonnement(statut='past_due'))
    _webhook(client, {'type': 'customer.subscription.deleted', 'data': {'object': {'metadata': {'user_id': 'user-42'}}}})
    assert plans == [('user-42', 'free'), ('user-42', 'free')]


def test_une_signature_invalide_est_refusee_et_ne_change_aucun_plan(faux_stripe, monkeypatch):
    plans = []
    monkeypatch.setattr(application._db, 'upgrade_user_plan', lambda uid, plan: plans.append((uid, plan)) or True)
    assert _webhook(application.app.test_client(), _abonnement(), signature='fausse').status_code == 400
    assert plans == []


def test_un_plan_inconnu_ou_non_configure_est_refuse_proprement(faux_stripe):
    reponse = _client().post('/stripe/checkout', json={'plan': 'inexistant'})
    assert reponse.status_code == 503
