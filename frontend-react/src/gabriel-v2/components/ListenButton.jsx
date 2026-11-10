import React, { useEffect, useRef, useState } from 'react';
import { Icon } from '../icons.jsx';
import { fetchV2 } from '../api-client.js';

/* Lecture à voix haute d'un texte du rapport.
   - Voix : celle choisie dans l'entretien d'Ariane (même clé), servie par /voice/speak.
   - Si la voix serveur n'est pas disponible, repli sur la synthèse du navigateur.
   - Un seul texte est lu à la fois ; le texte est découpé (le serveur limite à 2 000 signes). */
const VOICE_ID_KEY = 'gabriel_voice_id';
const CHUNK = 1500;
let stopCurrent = null;

export function textePourLecture(brut) {
  return String(brut || '')
    .replace(/\*\*/g, '')
    .replace(/\s+—\s+/g, '. ')
    .replace(/\s+/g, ' ')
    .trim();
}

function decouper(texte) {
  const phrases = texte.match(/[^.!?…]+[.!?…]*\s*/g) || [texte];
  const morceaux = [];
  let courant = '';
  for (const phrase of phrases) {
    if ((courant + phrase).length > CHUNK && courant) { morceaux.push(courant.trim()); courant = ''; }
    courant += phrase;
  }
  if (courant.trim()) morceaux.push(courant.trim());
  return morceaux;
}

export function ListenButton({ getText, label = 'Écouter', className = 'gv2-psy-listen' }) {
  const [etat, setEtat] = useState('repos'); // repos | prepare | lit | pause
  const audioRef = useRef(null);
  const annuleRef = useRef(false);
  const urlsRef = useRef([]);

  function nettoyer() {
    annuleRef.current = true;
    try { audioRef.current?.pause(); } catch (_) { /* rien */ }
    audioRef.current = null;
    try { window.speechSynthesis?.cancel(); } catch (_) { /* rien */ }
    urlsRef.current.forEach(u => { try { URL.revokeObjectURL(u); } catch (_) { /* rien */ } });
    urlsRef.current = [];
  }
  useEffect(() => () => { nettoyer(); if (stopCurrent === arreter) stopCurrent = null; }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function arreter() { nettoyer(); setEtat('repos'); }

  async function jouerNavigateur(morceaux) {
    if (!window.speechSynthesis) { setEtat('repos'); return; }
    window.speechSynthesis.cancel();
    setEtat('lit');
    morceaux.forEach((m, i) => {
      const u = new SpeechSynthesisUtterance(m);
      u.lang = 'fr-FR';
      if (i === morceaux.length - 1) u.onend = () => setEtat('repos');
      window.speechSynthesis.speak(u);
    });
  }

  async function lancer() {
    if (stopCurrent && stopCurrent !== arreter) stopCurrent();
    stopCurrent = arreter;
    annuleRef.current = false;
    const morceaux = decouper(textePourLecture(getText()));
    if (!morceaux.length) return;
    setEtat('prepare');
    let voiceId = '';
    try { voiceId = window.localStorage.getItem(VOICE_ID_KEY) || ''; } catch (_) { /* rien */ }
    const demander = async (texte) => {
      const reponse = await fetchV2('/voice/speak', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: texte, voice_id: voiceId || undefined, pace: 'measured' }),
      });
      if (!reponse.ok) throw new Error('voix indisponible');
      const url = URL.createObjectURL(await reponse.blob());
      urlsRef.current.push(url);
      return url;
    };
    try {
      let suivante = demander(morceaux[0]);
      for (let i = 0; i < morceaux.length; i += 1) {
        const url = await suivante;
        if (annuleRef.current) return;
        suivante = i + 1 < morceaux.length ? demander(morceaux[i + 1]) : null;
        await new Promise((resolve, reject) => {
          const audio = new Audio(url);
          audioRef.current = audio;
          audio.onplay = () => setEtat('lit');
          audio.onended = resolve;
          audio.onerror = () => reject(new Error('lecture'));
          audio.play().catch(reject);
        });
        if (annuleRef.current) return;
      }
      setEtat('repos');
    } catch (_) {
      if (annuleRef.current) return;
      await jouerNavigateur(morceaux);
    }
  }

  function basculerPause() {
    const audio = audioRef.current;
    if (audio) {
      if (etat === 'pause') { audio.play().catch(() => {}); setEtat('lit'); }
      else { audio.pause(); setEtat('pause'); }
      return;
    }
    const synth = window.speechSynthesis;
    if (!synth) return;
    if (etat === 'pause') { synth.resume(); setEtat('lit'); } else { synth.pause(); setEtat('pause'); }
  }

  if (etat === 'repos') {
    return <button type="button" className={className} onClick={lancer}>
      <Icon name="volume" size={16} /> {label}
    </button>;
  }
  return <span className={`${className} is-active`} role="group" aria-label="Lecture à voix haute">
    {etat === 'prepare'
      ? <span className="gv2-psy-listen-wait">Préparation de la voix…</span>
      : <button type="button" className="gv2-psy-listen-btn" onClick={basculerPause} aria-label={etat === 'pause' ? 'Reprendre la lecture' : 'Mettre en pause'}>
          <Icon name={etat === 'pause' ? 'play' : 'pause'} size={16} />
        </button>}
    <span className="gv2-psy-listen-bars" aria-hidden="true" data-paused={etat !== 'lit' ? '' : undefined}><i /><i /><i /><i /></span>
    <button type="button" className="gv2-psy-listen-btn" onClick={arreter} aria-label="Arrêter la lecture"><Icon name="square" size={14} /></button>
  </span>;
}
