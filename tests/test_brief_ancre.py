"""Le résumé d'ouverture du Psychologue reste ancré dans les signaux observés.

Audit du 06/11/2026 : sur 26 avis de freelances parlant de prix, de TVA et de confiance, le résumé
écrivait « soldats de l'invisible… guerriers de l'intime… baptême de freelance » — un récit absent
des avis, en contradiction avec la promesse « Aucune pensée devinée ».
"""
import os

os.environ.setdefault('FLASK_SECRET_KEY', 'test-secret-brief')
os.environ.setdefault('MISTRAL_API_KEY', 'test-key')


def _prompt(monkeypatch):
    import core.analyzer as an
    vus = []
    monkeypatch.setattr(an, 'call_llm', lambda prompt, **kw: vus.append(prompt) or '{"brief": {"qui": "a", "insight": "b", "action": "c"}}')
    an._generate_brief({'emotions': {'dominante': 'Frustration'}, 'psychologie': {}, 'marketing': {}, 'aspirations': {}},
                       {'engagement': {'score': 50}, 'opportunite': {'score': 50}}, '', 'Avis clients')
    return vus[0]


def test_le_prompt_du_resume_interdit_le_recit_invente(monkeypatch):
    p = _prompt(monkeypatch)
    assert 'Aucune pensée devinée' in p and 'PRÉSENT dans la SYNTHESE ANALYSE' in p
    for interdit in ('soldats', 'guerriers', 'rituel', 'baptême'):
        assert interdit in p                                    # cités comme INTERDITS
    assert 'Interdits' in p


def test_le_prompt_ne_demande_plus_l_essence_ni_l_appel_interieur(monkeypatch):
    p = _prompt(monkeypatch)
    for ancien in ('Leur essence', 'appel interieur', 'au-dela des apparences. Leur', 'leur besoin de signifiance'):
        assert ancien not in p
