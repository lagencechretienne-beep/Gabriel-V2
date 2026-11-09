"""Ariane doit afficher la question qu'elle pose.

Constaté le 09/11/2026 : le modèle rangeait sa question dans `next_question` et terminait son texte
par « il manque une précision cruciale pour affiner la stratégie. » ; l'écran n'affichait que
`display_text` — le testeur ne savait pas quoi répondre.
"""
import json
import os
os.environ.setdefault('FLASK_SECRET_KEY', 'test-secret-ariane')
os.environ.setdefault('MISTRAL_API_KEY', 'test-key')

from agents.context_builder import tone_renderer as tr


def _brut(display, question, speech=None):
    return json.dumps({"display_text": display, "speech_text": speech or display, "stance": "clarify",
                       "tone": "calm", "strategic_observation": "obs", "next_question": question})


def test_la_question_separee_est_ajoutee_au_texte_affiche_et_lu():
    r = tr._try_parse(_brut("Votre offre est claire. Il manque une précision cruciale.",
                            "Combien de clients paient aujourd'hui pour l'accompagnement ?"), "clarify")
    assert r["display_text"].endswith("Combien de clients paient aujourd'hui pour l'accompagnement ?")
    assert "Combien de clients" in r["speech_text"]


def test_une_question_deja_dans_le_texte_n_est_pas_dupliquee():
    q = "Combien de clients paient aujourd'hui ?"
    r = tr._try_parse(_brut(f"Bien. {q}", q), "clarify")
    assert r["display_text"].count("Combien de clients") == 1
    assert r["speech_text"].count("Combien de clients") == 1


def test_sans_question_le_texte_est_inchange():
    r = tr._try_parse(_brut("Merci, c'est clair.", ""), "clarify")
    assert r["display_text"] == "Merci, c'est clair."
