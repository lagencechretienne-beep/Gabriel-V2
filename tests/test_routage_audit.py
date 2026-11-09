"""Routage de Gabriel Core — les demandes de l'audit du 06/11/2026, avec l'état réel de l'espace."""
import os

os.environ.setdefault('FLASK_SECRET_KEY', 'test-secret-routage')
os.environ.setdefault('MISTRAL_API_KEY', 'test-key')

import pytest
from agents.orchestrator import classify_intent


@pytest.mark.parametrize('message, psycho, strategie, attendu', [
    ("Analyse mon audience.", False, False, 'psychologue'),
    ("Construis-moi une stratégie d'acquisition.", True, False, 'stratege'),
    ("Construis-moi une stratégie d'acquisition.", False, False, 'stratege'),
    # L'ancien bug : « stratégie » et « script » à égalité → Stratège.
    ("Écris-moi trois scripts basés sur cette stratégie.", True, True, 'createur'),
    ("Rédige un post LinkedIn à partir de ma stratégie.", True, True, 'createur'),
    ("Génère trois emails selon mon analyse.", True, True, 'createur'),
])
def test_les_demandes_vont_au_bon_agent(message, psycho, strategie, attendu):
    assert classify_intent(message, has_psycho=psycho, has_strategy=strategie)['agent'] == attendu


def test_sans_strategie_une_demande_d_ecriture_renvoie_vers_l_etape_manquante():
    """Comportement voulu et conservé : on ne produit pas de contenu sans décision en amont."""
    assert classify_intent("Écris-moi trois scripts.", has_psycho=True, has_strategy=False)['agent'] == 'stratege'
    assert classify_intent("Écris-moi trois scripts.", has_psycho=False, has_strategy=False)['agent'] == 'psychologue'


def test_une_strategie_demandee_n_est_pas_prise_pour_une_demande_d_ecriture():
    for message in ("Construis-moi une stratégie de contenu pour LinkedIn.", "Crée une stratégie d'acquisition."):
        assert classify_intent(message, has_psycho=True, has_strategy=True)['agent'] == 'stratege', message
