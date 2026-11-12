"""Statistiques de visites (Plausible ou Umami), activées UNIQUEMENT par des variables d'environnement.

Rien n'est chargé par défaut : sans ANALYTICS_PROVIDER, aucune page ne contient de script d'analyse et l'en-tête de
sécurité (CSP) n'autorise aucun domaine externe supplémentaire. L'outil n'est monté que sur les pages PUBLIQUES
(accueil, tarifs, en savoir plus, connexion) — jamais dans l'application privée, dont les adresses portent des
identifiants de dossiers. Plausible et Umami fonctionnent sans cookie : pas de bandeau de consentement.

Variables :
  ANALYTICS_PROVIDER    plausible | umami
  ANALYTICS_DOMAIN      (plausible) le domaine déclaré dans Plausible, ex. monsite.onrender.com
  ANALYTICS_SITE_ID     (umami) l'identifiant du site
  ANALYTICS_SRC         adresse https du script (défaut Plausible : https://plausible.io/js/script.js ; Umami : obligatoire)
  ANALYTICS_CONNECT_SRC (facultatif) autres origines https à autoriser pour l'envoi des mesures,
                        ex. https://api-gateway.umami.dev pour Umami Cloud
"""
import os
import re
from urllib.parse import urlparse

_DOMAINE = re.compile(r'^[A-Za-z0-9.-]{1,253}$')
_SITE_ID = re.compile(r'^[A-Za-z0-9-]{8,64}$')
PLAUSIBLE_SRC = 'https://plausible.io/js/script.js'


def _origine(url):
    u = urlparse((url or '').strip())
    if u.scheme != 'https' or not u.netloc or any(c in url for c in ' \t\r\n"\'<>;'):
        return None
    return f'{u.scheme}://{u.netloc}'


def analytics_config(env=None):
    """Configuration validée, ou None si l'outil n'est pas (correctement) configuré."""
    env = os.environ if env is None else env
    fournisseur = (env.get('ANALYTICS_PROVIDER') or '').strip().lower()
    src = (env.get('ANALYTICS_SRC') or '').strip()
    if fournisseur == 'plausible':
        domaine = (env.get('ANALYTICS_DOMAIN') or '').strip()
        if not _DOMAINE.match(domaine):
            return None
        src = src or PLAUSIBLE_SRC
        attrs = {'data-domain': domaine}
    elif fournisseur == 'umami':
        site = (env.get('ANALYTICS_SITE_ID') or '').strip()
        if not _SITE_ID.match(site) or not src:
            return None
        attrs = {'data-website-id': site}
    else:
        return None
    origine = _origine(src)
    if not origine:
        return None
    origines = {origine}
    for brut in (env.get('ANALYTICS_CONNECT_SRC') or '').replace(',', ' ').split():
        o = _origine(brut)
        if o:
            origines.add(o)
    return {'provider': fournisseur, 'src': src, 'attrs': attrs, 'script_origin': origine,
            'connect_origins': sorted(origines)}


def csp_avec_analytics(csp, config):
    """Ajoute à la CSP l'origine du script (script-src) et celles d'envoi des mesures (connect-src)."""
    if not config:
        return csp
    csp = csp.replace("script-src 'self' 'unsafe-inline'", f"script-src 'self' 'unsafe-inline' {config['script_origin']}", 1)
    csp = csp.replace("connect-src 'self'", "connect-src 'self' " + ' '.join(config['connect_origins']), 1)
    return csp
