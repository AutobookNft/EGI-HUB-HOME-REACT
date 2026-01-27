# FlorenceEGI – Mobile iPhone-first
## Layout B – Percorso di Trasformazione (Copilot Spec Completa)

**Stato:** Layout delle pagine OK. Qui definiamo **layout + dinamica + stile** per la Home pubblica.  
**Scelta:** ✅ **Layout B – Percorso di trasformazione** (light-first + profondità dinamica).  

Obiettivo: una Home che *non si legge e basta*, ma **cambia mentre la attraversi**.

---

## 0) Vincoli globali (non negoziabili)

1. **Light-first**: base chiara/neutra. Il dark è solo una **fase** del percorso.
2. **Niente nero puro** (#000). Anche nelle fasi scure usare navy/charcoal.
3. **Ogni sezione ha una “atmosfera”** (luce, contrasto, profondità) diversa.
4. **Movimento minimale ma continuo**: nessun effetto gaming, ma sempre “respiro”.
5. **Header fisso**: logo + hamburger **non devono sparire mai**.

---

## 1) Definizione EGI (testi vincolanti, ma il focus è dinamica)

**EGI = Environmental Goods Invent**

### Home (Livello 1 – above the fold)
> **Un EGI trasforma qualcosa che già esiste in un bene che può generare valore nel tempo.**

### Scroll (Livello 2 – esempi)
- un’idea che vuoi proteggere e mettere a frutto
- un’opera d’arte che continua a generare valore dopo la vendita
- un oggetto da collezione che cresce nel tempo
- un prodotto che guadagna anche nelle rivendite
- un documento che diventa certificato, verificabile e permanente

### Impatto ambientale (Livello 2B – obbligatorio)
> **Con EGI, ogni valore economico genera anche un valore ambientale misurabile.**

---

## 2) Layout B – Struttura a STATI (la chiave)

La Home è divisa in 3 **stati**.  
Ogni stato è composto da 1–3 sezioni, ma ciò che conta è il **cambio di atmosfera**.

### Stato 1 – PRIMA (aria, neutralità, apertura)
- look: chiaro, ampio, “museo”
- scopo: far capire che stai entrando in un mondo ordinato e serio

### Stato 2 – ATTO (profondità, trasformazione, transizione)
- look: scurisce gradualmente (non diventa nero)
- scopo: far percepire l’atto di “egizzare” come passaggio reale

### Stato 3 – DOPO (luce, struttura, fiducia)
- look: ritorna la luce + accenti (verde/oro) + chiarezza
- scopo: far percepire valore + impatto + ecosistema

---

## 3) Palette & Tokens (CSS variables obbligatorie)

Creare `src/styles/tokens.css` e usare variabili.

```css
:root{
  /* Base light */
  --bg: #F6F7F4;
  --surface: rgba(255,255,255,.65);
  --surface2: rgba(255,255,255,.40);
  --text: #0B1220;
  --muted: rgba(11,18,32,.65);
  --border: rgba(11,18,32,.10);

  /* Accenti (coerenti, pochi) */
  --accent: #0EA5A4;         /* teal/emerald controllato */
  --accent2: #B08D2A;        /* oro/ambra sobrio */

  /* Stato 2 (scuro controllato) */
  --dark-bg: #0A1222;        /* navy scuro, non nero */
  --dark-surface: rgba(255,255,255,.08);
  --dark-text: rgba(255,255,255,.92);
  --dark-muted: rgba(255,255,255,.70);
  --dark-border: rgba(255,255,255,.12);

  --r-card: 18px;
  --r-btn: 14px;
  --shadow: 0 12px 60px rgba(0,0,0,.14);
}
```

---

## 4) Background system (profondità senza casino)

Creare un wrapper `HomeAtmosphere` che applica un background continuo con layer.

### Regole
- Stato 1: gradienti **radiali** molto soft
- Stato 2: overlay scuro progressivo
- Stato 3: ritorno luce + micro-glow accent

### CSS consigliato (`src/styles/home-atmosphere.css`)
```css
.atmo{
  background: var(--bg);
  position: relative;
  overflow: hidden;
}

/* Layer 1: luce diffusa */
.atmo::before{
  content:"";
  position:absolute; inset:-20vh -20vw;
  background:
    radial-gradient(60vh 60vh at 20% 10%, rgba(14,165,164,.12), transparent 60%),
    radial-gradient(70vh 70vh at 85% 30%, rgba(176,141,42,.10), transparent 62%),
    radial-gradient(90vh 90vh at 45% 95%, rgba(10,18,34,.06), transparent 65%);
  filter: blur(10px);
  transform: translateZ(0);
  pointer-events:none;
}

/* Layer 2: grana leggerissima */
.atmo::after{
  content:"";
  position:absolute; inset:0;
  opacity:.06;
  background-image: url('/noise.png');
  background-size: 280px 280px;
  pointer-events:none;
}

/* Overlay che controlla lo Stato 2 */
.atmoOverlay{
  position:absolute; inset:0;
  background: var(--dark-bg);
  opacity: 0; /* guidato dallo scroll */
  pointer-events:none;
}
```

Nota: `noise.png` è una texture piccola. Se non disponibile, sostituire con un pattern leggero.

---

## 5) Motion system (minimale, continuo)

Usare IntersectionObserver per animare l’ingresso delle sezioni.

### CSS (`src/styles/motion.css`)
```css
.reveal{
  opacity: 0;
  transform: translateY(14px);
  transition: opacity .6s ease, transform .6s ease;
}
.reveal.is-in{
  opacity: 1;
  transform: translateY(0);
}

@keyframes drift {
  0%{ transform: translateY(0) }
  50%{ transform: translateY(-6px) }
  100%{ transform: translateY(0) }
}
.drift{ animation: drift 10s ease-in-out infinite; }
```

### Hook React (obbligatorio)
Creare `useRevealOnView.ts` che aggiunge `is-in` quando l’elemento entra in viewport.

---

## 6) Header (non sparisce mai)

### Requisiti
- sticky top
- blur leggero
- cambia stile su scroll (ma resta)

CSS:
```css
.header{
  position: sticky; top:0; z-index:50;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: background-color .2s ease, border-color .2s ease;
}
.header.scrolled{
  background: rgba(246,247,244,.72);
  border-bottom: 1px solid rgba(11,18,32,.10);
}
```

---

## 7) Component system (card & surfaces)

### Card (light)
- bg: `var(--surface)`
- border: `var(--border)`
- shadow: `var(--shadow)`

### Card (dark)
- bg: `var(--dark-surface)`
- border: `var(--dark-border)`
- text: `var(--dark-text)`

Tailwind base:
- `rounded-[var(--r-card)] border shadow-[var(--shadow)]`

---

## 8) Home – Sezioni concrete (con stati)

### S1 – HERO (Stato 1)
**Obiettivo:** aria + invito a scendere + primo segnale di “spazio vivo”.

Layout:
- titolo grande
- micro-label “EGI PROTOCOL”
- CTA primaria
- hint scroll (chevron o “Scorri”)

Dinamica:
- parallax lieve sul background
- titolo scala di 2–3% nei primi 150px di scroll

---

### S2 – COS’È (Stato 1)
- card definizione breve
- niente tecnica

---

### S3 – COSA PUÒ ESSERE (Stato 1)
- lista con icone coerenti
- tile chiare, leggibili

---

### S4 – TRANSIZIONE “ATTO” (Stato 2)
**Obiettivo:** far sentire il passaggio.

Implementazione:
- quando lo scroll supera la soglia (es. 35% progress), aumentare `atmoOverlay.opacity` da 0 → 0.92
- cambiare progressivamente i colori testo da light → dark

Regole:
- transizione graduale
- nessun jump

---

### S5 – IMPATTO AMBIENTALE (Stato 2 → 3)
**Obiettivo:** rendere centrale l’ambiente.

UI:
- sezione dedicata, non bullet
- 3 pill: “Misurabile”, “Tracciabile”, “Verificabile”
- glow verde molto soft

---

### S6 – ECOSISTEMA (Stato 3)
**Obiettivo:** relazione visiva.

UI:
- card grande “hub & spoke”
- sotto: 2–4 pill cliccabili (Hub / Art / Natan / Info)

---

### S7 – SISTEMI OPERATIVI EGI (Stato 3)
- 2 card (Florence Art EGI, NATAN-LOC)
- CTA testuale
- glow leggero sugli accenti

---

### S8 – PILASTRI (Stato 3)
**Vincolanti (4):**
1. Concretezza
2. Equilibrium
3. Impatto Ambientale Reale
4. Accessibilità

Regole:
- ogni pilastro ha un micro-segno visivo (linea + glow)
- testo breve

---

### S9 – PER CHI È (Stato 3)
Lista tappabile.

Nota: valutare sostituzione “Investitori” con “Aziende/Organizzazioni” se richiesto.

---

### S10 – CTA FINALE (Stato 3)
- 2 bottoni
- chiusura luminosa

---

## 9) Implementazione Scroll-driven overlay (obbligatoria)

Creare `useScrollProgress.ts` che ritorna un progress 0..1 rispetto alla pagina.

Usarlo per:
- controllare `atmoOverlay.opacity`
- controllare transizione light→dark→light
- controllare micro-scale del titolo nel hero

Logica:
- progress 0..0.35: Stato 1
- progress 0.35..0.70: Stato 2 (overlay sale)
- progress 0.70..1: Stato 3 (overlay scende)

---

## 10) Checklist QA

- [ ] Header sempre visibile (logo + hamburger)
- [ ] Contrasto ok: tile e card leggibili subito
- [ ] Background vivo ma non rumoroso
- [ ] Atmosfera cambia gradualmente con lo scroll
- [ ] Impatto ambientale è centrale
- [ ] Motion minimale presente (reveal + drift)

---

## 11) File suggeriti

- `src/styles/tokens.css`
- `src/styles/home-atmosphere.css`
- `src/styles/motion.css`
- `src/hooks/useRevealOnView.ts`
- `src/hooks/useScrollProgress.ts`
- `src/components/HomeAtmosphere.tsx`
- `src/pages/HomePage.tsx`

---

**Fine spec.**

