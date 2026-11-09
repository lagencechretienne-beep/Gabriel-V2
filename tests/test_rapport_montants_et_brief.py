"""Rapport du Psychologue : pas de montant inventé, et le résumé est réessayé une fois.

Constaté le 09/11/2026 sur une vraie analyse : « config à 300 € », « 20 €/mois » inventés dans les
personas, et un résumé vide après six erreurs 429 d'affilée.
"""
import os
os.environ.setdefault('FLASK_SECRET_KEY', 'test-secret-rapport')
os.environ.setdefault('MISTRAL_API_KEY', 'test-key')

from agents.strategy_guard import scrub_unsourced_amounts, AMOUNT_PLACEHOLDER


def test_montant_invente_retire_montant_reel_conserve():
    doc = {'personas': [{'hook': 'Une config à 300 € ou 20€/mois'}], 'x': 'PC de moins de 500€'}
    out, retires = scrub_unsourced_amounts(doc, "Je cherche un PC de moins de 500€ svp")
    assert AMOUNT_PLACEHOLDER in out['personas'][0]['hook']
    assert '300' not in out['personas'][0]['hook'] and '20€' not in out['personas'][0]['hook']
    assert out['x'] == 'PC de moins de 500€'
    assert set(retires) == {'300 €', '20€'}
    assert '300 €' in doc['personas'][0]['hook']          # l'original n'est jamais modifié


def test_pourcentages_calcules_du_psychologue_intacts():
    txt = '11,6 % des voix (8,3 % + 3,3 %) soit 18.2% favorables'
    out, _ = scrub_unsourced_amounts({'a': txt}, '')
    assert out['a'] == txt


def test_le_resume_est_reessaye_une_fois(monkeypatch, deterministic_vader):
    import core.analyzer as an
    _sans_ia(monkeypatch, an)
    appels = []
    def faux(*a, **k):
        appels.append(1)
        if len(appels) == 1:
            raise RuntimeError('429')
        return {'qui': 'a', 'insight': 'b', 'action': 'c'}
    monkeypatch.setattr(an, '_generate_brief', faux)
    monkeypatch.setattr(an.time, 'sleep', lambda s: None)
    r = _analyse_minimale(an)
    assert len(appels) == 2 and r['brief']['insight'] == 'b'
    assert not r['meta'].get('brief_indisponible')


def test_resume_toujours_vide_est_signale(monkeypatch, deterministic_vader):
    import core.analyzer as an
    _sans_ia(monkeypatch, an)
    def boom(*a, **k): raise RuntimeError('429')
    monkeypatch.setattr(an, '_generate_brief', boom)
    monkeypatch.setattr(an.time, 'sleep', lambda s: None)
    r = _analyse_minimale(an)
    assert r['brief'] == {} and r['meta']['brief_indisponible'] is True


def _analyse_minimale(an):
    comments = [{"text": "Merci, ça m'a débloqué sur mon offre.", "likes": 30},
                {"text": "Pas convaincu, tu simplifies trop le sujet.", "likes": 5},
                {"text": "Combien de temps avant les premiers résultats ?", "likes": 12},
                {"text": "Le tarif me freine vraiment.", "likes": 9},
                {"text": "Excellent, je m'abonne.", "likes": 55}]
    return an.analyze_comments(comments, title="Structurer son offre")


def _sans_ia(monkeypatch, an):
    monkeypatch.setattr(an, "call_llm", lambda *a, **k: '{"placeholder": true}')
    monkeypatch.setattr(an, "_NLP_AVAILABLE", False)
