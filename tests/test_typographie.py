"""Pas de tiret de ponctuation dans les textes écrits par l'IA (12/11/2026) : signature des textes machine."""
import os
os.environ.setdefault('FLASK_SECRET_KEY', 'test-secret-typographie-0123456789abcdefgh')
os.environ.setdefault('MISTRAL_API_KEY', 'test-key')

import json
import pytest
from core.typographie import retirer_tirets
import core.llm_client as llm


@pytest.mark.parametrize('avant, apres', [
    ('Ton PC — la vérité', 'Ton PC, la vérité'),
    ('[Hook — 0-3]', '[Hook, 0-3]'),
    ('Il pleut. — Et alors', 'Il pleut. Et alors'),
    ('mot - mot', 'mot, mot'),
    ('30–60 sec', '30-60 sec'),
    ('— Bonjour dit-il', 'Bonjour dit-il'),
    ('Fin de ligne —\nsuite', 'Fin de ligne\nsuite'),
    ('dit \\u2014 puis', 'dit, puis'),
])
def test_le_tiret_de_ponctuation_disparait(avant, apres):
    assert retirer_tirets(avant) == apres


@pytest.mark.parametrize('intact', [
    "peut-être c'est-à-dire week-end", '0-3 et -5 et 3-4 jours', 'https://mon-site.com/a-b',
    '- puce en début de ligne', 'a\n  - puce indentée', 'Texte sans aucun tiret.', '',
])
def test_les_traits_d_union_nombres_adresses_et_puces_sont_conserves(intact):
    assert retirer_tirets(intact) == intact


def test_un_json_reste_un_json_valide_apres_nettoyage():
    brut = '{"titre": "Mon PC — le vrai test", "scores": [-2.5, 3], "liste": ["a - b", "c–d"], "ok": true}'
    donnees = json.loads(retirer_tirets(brut))
    assert donnees['titre'] == 'Mon PC, le vrai test' and donnees['scores'] == [-2.5, 3] and donnees['liste'][0] == 'a, b'


def test_tout_ce_que_le_modele_renvoie_passe_par_le_filtre():
    class Fournisseur:
        name = 'faux'
        def complete(self, prompt, *, model, max_tokens, temperature=None, timeout_ms=300_000, system=None):
            return llm.LLMResponse(text='Ton PC — la vérité sur les modèles légers', model=model)

    reponse = llm.complete('x', provider=Fournisseur(), throttled=False, retry=llm.RETRY_NONE)
    assert reponse.text == 'Ton PC, la vérité sur les modèles légers'


def test_la_consigne_du_createur_interdit_le_tiret_long():
    from agents.createur import _HUMAN_VOICE
    assert 'tiret long' in _HUMAN_VOICE
