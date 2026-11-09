"""/health/ready dit la vérité sur les dépendances (audit du 06/11/2026 : base disparue, /health « ok »)."""
import os

os.environ.setdefault('FLASK_SECRET_KEY', 'test-secret-ready')
os.environ.setdefault('MISTRAL_API_KEY', 'test-key')
os.environ.setdefault('SUPABASE_URL', '')
os.environ.setdefault('SUPABASE_KEY', '')

import api.db as _db
import app as _app


class _Table:
    def __init__(self, ok): self.ok = ok
    def select(self, *_): return self
    def limit(self, *_): return self
    def execute(self):
        if not self.ok:
            raise OSError('[Errno 8] nodename nor servname provided, or not known')
        return type('R', (), {'data': []})()


class _Base:
    def __init__(self, ok): self.ok = ok
    def table(self, _): return _Table(self.ok)


def _get():
    return _app.app.test_client().get('/health/ready')


def test_sans_base_configuree_le_service_est_disponible(monkeypatch):
    monkeypatch.setattr(_db, '_supabase', None)
    r = _get()
    assert r.status_code == 200 and r.get_json()['database'] == 'not_configured'


def test_base_joignable(monkeypatch):
    monkeypatch.setattr(_db, '_supabase', _Base(True))
    r = _get()
    assert r.status_code == 200 and r.get_json()['database'] == 'ok' and r.get_json()['status'] == 'ok'


def test_base_injoignable_donne_503_et_la_vivacite_reste_ok(monkeypatch):
    monkeypatch.setattr(_db, '_supabase', _Base(False))
    r = _get()
    assert r.status_code == 503 and r.get_json()['database'] == 'unreachable' and r.get_json()['status'] == 'unavailable'
    assert _app.app.test_client().get('/health').status_code == 200          # le processus, lui, répond


def test_le_repli_du_modele_semantique_est_signale(monkeypatch):
    from core import nlp_engine
    monkeypatch.setattr(_db, '_supabase', None)
    monkeypatch.setattr(nlp_engine, '_model_status', 'unavailable')
    assert _get().get_json()['semantic_model'] == 'fallback_tfidf'
    monkeypatch.setattr(nlp_engine, '_model_status', 'loaded')
    assert _get().get_json()['semantic_model'] == 'ok'
