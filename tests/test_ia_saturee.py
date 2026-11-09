"""Plafond de requêtes de l'IA (429) : on patiente, et on le dit clairement.

Constaté le 09/11/2026 : le Créateur échouait sur « Erreur génération contenu. » après un seul
réessai de 4 s face à un 429 de Mistral, sans que l'utilisateur sache que rien n'avait été débité.
"""
import os
os.environ.setdefault('FLASK_SECRET_KEY', 'test-secret-ia-saturee')
os.environ.setdefault('MISTRAL_API_KEY', 'test-key')

import core.llm_client as llm


class _Sature(Exception):
    def __init__(self, status):
        self.status_code = status


def _fournisseur(echecs, statut=429):
    appels = []

    class P:
        name = "sature"
        def complete(self, prompt, *, model, max_tokens, temperature=None, timeout_ms=300_000, system=None):
            appels.append(1)
            if len(appels) <= echecs:
                raise _Sature(statut)
            return llm.LLMResponse(text="ok", model=model)
    return P(), appels


def test_quatre_429_de_suite_finissent_par_passer(monkeypatch):
    monkeypatch.setattr(llm.time, 'sleep', lambda s: None)
    p, appels = _fournisseur(4)
    assert llm.complete("d", provider=p, throttled=False, retry=llm.RETRY_SIMPLE).text == "ok"
    assert len(appels) == 5


def test_une_erreur_d_entree_n_est_pas_reessayee(monkeypatch):
    monkeypatch.setattr(llm.time, 'sleep', lambda s: None)
    p, appels = _fournisseur(10, statut=400)
    try:
        llm.complete("d", provider=p, throttled=False, retry=llm.RETRY_SIMPLE)
        assert False
    except _Sature:
        pass
    assert len(appels) == 1


def test_message_utilisateur_ia_saturee():
    import app as application
    msg = application._llm_message(_Sature(429), "Erreur générique")
    assert "sollicité" in msg and "Aucun crédit" in msg
    assert application._llm_message(_Sature(500), "Erreur générique") == "Erreur générique"
    assert application._llm_message(ValueError("x"), "Erreur générique") == "Erreur générique"
