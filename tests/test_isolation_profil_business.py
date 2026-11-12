"""Le profil business d'un utilisateur ne doit JAMAIS devenir celui d'un autre.

Constaté le 12/11/2026 (parcours d'un nouveau compte) : /profil/data d'un compte tout neuf renvoyait « test » partout —
le profil d'un autre — via un fichier commun réécrit à chaque enregistrement.
"""
import os
os.environ.setdefault('FLASK_SECRET_KEY', 'test-secret-isolation-profil-0123456789')
os.environ.setdefault('MISTRAL_API_KEY', 'test-key')

import pytest
import core.business_context as bc


@pytest.fixture
def dossier(monkeypatch, tmp_path):
    monkeypatch.setattr(bc, '_PROFILES_DIR', str(tmp_path / 'profiles'))
    monkeypatch.setattr(bc, '_BRAIN_FILE', str(tmp_path / 'brain_profile.json'))
    os.makedirs(bc._PROFILES_DIR, exist_ok=True)
    return tmp_path


def test_un_nouvel_utilisateur_ne_recoit_pas_le_profil_d_un_autre(dossier):
    bc.save_user_profile('alice', {'activite': 'Coaching', 'offre': 'Programme 12 semaines', 'objectif_principal': '10 clients'})
    assert bc.get_user_profile('bob') == {}
    assert bc.get_user_profile('alice')['activite'] == 'Coaching'


def test_l_enregistrement_d_un_profil_n_ecrit_pas_dans_le_fichier_commun(dossier):
    bc.save_user_profile('alice', {'activite': 'Coaching'})
    assert not os.path.exists(bc._BRAIN_FILE)


def test_un_fichier_commun_herite_n_est_jamais_servi_a_un_utilisateur_identifie(dossier):
    with open(bc._BRAIN_FILE, 'w', encoding='utf-8') as f:
        f.write('{"activite": "test", "offre": "test"}')
    assert bc.get_user_profile('bob') == {}
    assert bc.get_user_profile(None) == {'activite': 'test', 'offre': 'test'}        # sans identité : comportement de développement


def test_le_contexte_du_createur_et_d_ariane_d_un_nouvel_utilisateur_est_vide(dossier, monkeypatch):
    bc.save_user_profile('alice', {'activite': 'Coaching'})
    monkeypatch.setattr(bc._db, 'get_context_fields', lambda uid: {})
    assert bc.resolve_business_context({}, 'bob') == {}
