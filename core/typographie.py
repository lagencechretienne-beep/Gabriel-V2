"""Typographie des textes écrits par l'IA : pas de tiret de ponctuation.

Le tiret long « — » (et le trait d'union entouré d'espaces, « mot - mot ») sont la signature des textes écrits par
une IA. On les remplace par une virgule, ou on les retire quand ils n'ont pas de rôle. Ne sont JAMAIS touchés :
- les traits d'union des mots (peut-être, c'est-à-dire, week-end), des nombres et plages (0-3, 30-60 sec, -5),
- les adresses (https://mon-site.com),
- les puces de liste en début de ligne (« - élément »), que l'interface sait rendre comme des listes.
Fonction pure : appliquée à toute réponse du modèle (voir core/llm_client.py), avant que le JSON soit lu.
"""
import re

# — / – écrits sous forme d'échappement dans un JSON produit par le modèle
_ECHAPPES = re.compile(r'\\u(2014|2013)', re.IGNORECASE)
_LETTRE_OU_PONCT = r"[A-Za-zÀ-ÖØ-öø-ÿŒœ0-9'’\)\]\.\!\?\:;»”\"%]"
_DEBUT_MOT = r"[A-Za-zÀ-ÖØ-öø-ÿŒœ0-9\(\[«“\"'’]"

# 1. Plage numérique avec tiret demi-cadratin : « 30–60 » devient « 30-60 »
_PLAGE = re.compile(r'(?<=\d)\s?–\s?(?=\d)')
# 2. Tiret long ou demi-cadratin, avec les espaces qui l'entourent (sur une même ligne)
_TIRET = re.compile(r'([ \t]*)[—–]([ \t]*)')
# 3. Trait d'union entouré d'espaces entre deux mots : « mot - mot »
_TRAIT_ESPACE = re.compile(rf'(?<={_LETTRE_OU_PONCT})[ \t]+-[ \t]+(?={_DEBUT_MOT})')


def _remplace_tiret(m):
    s, debut = m.string, m.start()
    suite = s[m.end():m.end() + 1]
    avant = s[debut - 1] if debut > 0 else ''
    if avant in ('', '\n'):                       # tiret en début de ligne (dialogue) : on le retire
        return ''
    if suite in ('', '\n', '"', ')', ']', '}'):   # tiret en fin de ligne ou de chaîne : on le retire
        return ''
    if avant in '.!?,;:…»”"':                     # déjà une ponctuation avant : une simple espace
        return ' '
    return ', '


def retirer_tirets(texte):
    """Texte sans tiret de ponctuation. Tout ce qui n'est pas une chaîne est renvoyé tel quel."""
    if not isinstance(texte, str) or not texte:
        return texte
    texte = _ECHAPPES.sub('—', texte)
    texte = _PLAGE.sub('-', texte)
    texte = _TIRET.sub(_remplace_tiret, texte)
    texte = _TRAIT_ESPACE.sub(', ', texte)
    return re.sub(r',(\s*[,.;:!?])', r'\1', texte)   # « , , » ou « ,. » nés du remplacement
