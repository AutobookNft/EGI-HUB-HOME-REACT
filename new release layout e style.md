Ok. Qui sotto hai **un documento unico** (stile “design spec”) che puoi incollare in Copilot.
È **layout + style + component rules + Tailwind tokens**. Niente fuffa.

---

# 📄 FLORENCEEGI — Mobile iPhone-first UI Spec (Layout + Style)

**Uso:** incolla in Copilot per implementare Home + menu.
**Target:** iPhone (Safari), mobile-first.
**Principio:** 1 colonna, 1 idea per schermata, look istituzionale.

---

## 0) Design Tokens (Tailwind-first)

### Container & spacing

* `page px`: `px-5` (20px) su mobile, `sm:px-6` (24px)
* `max width`: `max-w-[520px]` (mobile + phablet), centrato `mx-auto`
* `section padding Y`: `py-16` (base), `py-20` per sezioni “manifesto”
* `gap verticale`: `space-y-6` per blocchi, `space-y-3` per microtesti
* `min height section`: `min-h-[92vh]` (non 100vh rigido), `flex items-center` quando serve

### Typography scale

* H1: `text-4xl leading-[1.08] tracking-tight font-semibold`
* H2: `text-2xl leading-snug font-semibold`
* Body: `text-[16px] leading-7`
* Small: `text-sm leading-6`
* Eyebrow: `text-xs tracking-[0.18em] uppercase`

### Colors (sobrie)

* Background: `bg-zinc-950`
* Surface: `bg-zinc-900/40` (card)
* Border: `border-white/10`
* Text primary: `text-zinc-100`
* Text secondary: `text-zinc-300/80`
* Muted: `text-zinc-400/80`
* Accent (UNO): consigliato `emerald` *oppure* `amber` (scegline uno e basta)

  * Accent text: `text-emerald-300`
  * Accent border: `border-emerald-300/30`
  * Accent bg: `bg-emerald-400/10`

### Radii & shadows

* Card radius: `rounded-2xl`
* Button radius: `rounded-xl`
* Shadow (leggera): `shadow-sm shadow-black/30`

---

## 1) Global Layout Rules (non violare)

1. **Colonna unica sempre** (no griglie affiancate su mobile).
2. **Ogni sezione = 1 schermata cognitiva**: niente muri di testo.
3. **Niente “launcher app”**: le card non devono sembrare icone tappabili.
4. **Animazioni minime e lente**: transizioni soft, niente roba “crypto landing”.
5. **Home è narrativa**; **menu è territori** (pagine dedicate).

---

## 2) App Shell (Header + Menu)

### Header (sticky, minimal)

* `sticky top-0 z-50`
* background: trasparente all’inizio, poi `bg-zinc-950/80 backdrop-blur` quando scroll > 8px
* sinistra: logo (tap => `/`)
* destra: hamburger

**Tailwind suggerito:**

* Wrapper: `sticky top-0 z-50`
* Inner: `mx-auto max-w-[520px] px-5 sm:px-6 py-4 flex items-center justify-between`
* Border bottom: `border-b border-white/5` (solo dopo scroll)

### Hamburger menu (sheet / drawer)

* Overlay: scuro `bg-black/70`
* Panel: `bg-zinc-950 border-l border-white/10`
* Voci: macro-aree, massimo 6
* Sottovoci solo in “Ecosistema”

**Regola:** NON mettere “Home” nel menu. Logo = Home.

---

## 3) Components Spec (Tailwind-ready)

### Button (Primary / Secondary)

**Primary (soft, istituzionale)**

* `inline-flex items-center justify-center gap-2`
* `px-5 py-3 rounded-xl`
* `bg-white text-zinc-950`
* hover/active: `active:scale-[0.99] transition`

**Secondary (outline)**

* `px-5 py-3 rounded-xl`
* `border border-white/15 text-zinc-100`
* `bg-transparent`

### Card (non “app launcher”)

* wrapper: `rounded-2xl border border-white/10 bg-zinc-900/30`
* padding: `p-5`
* titolo: `text-lg font-semibold`
* descrizione: `text-sm leading-6 text-zinc-300/80`
* CTA dentro card: link testuale (non bottone gigante)

  * `text-sm font-medium text-emerald-300` + `underline-offset-4 hover:underline`

### Section Title block

* eyebrow opzionale: `text-xs uppercase tracking-[0.18em] text-zinc-400/80`
* h2: `text-2xl font-semibold text-zinc-100`
* divider opzionale: `mt-4 h-px bg-white/10`

---

## 4) Home — Sezione per sezione (layout + style)

### Section 1: HERO (min-h, centro)

**Layout**

* `min-h-[92vh] flex items-center`
* contenuto allineato a sinistra
* max 2 righe per titolo

**Style**

* H1 grande, tracking tight
* sottotitolo muted
* 1 CTA primaria

**Tailwind skeleton**

* Section: `min-h-[92vh] flex items-center`
* Stack: `space-y-6`
* H1: `text-4xl leading-[1.08] tracking-tight font-semibold`
* P: `text-[16px] leading-7 text-zinc-300/80`
* CTA row: `flex flex-col gap-3`

---

### Section 2: COS’È UN EGI (definizione)

**Layout**

* no card
* testo breve (max 4 righe)

**Style**

* h2 + paragrafo
* niente box “come funziona” qui

---

### Section 3: COSA PUÒ ESSERE (lista)

**Layout**

* lista verticale con micro-icon
* una riga per item, max 4

**Style**

* items con `flex gap-3`
* icona in `text-zinc-100`, testo `text-zinc-300/80`

---

### Section 4: ECOSISTEMA (visual)

**Layout**

* 1 visual centrale (immagine / canvas / video leggero)
* no interazione complessa
* caption 1 riga

**Style**

* visual dentro container `rounded-2xl border border-white/10 overflow-hidden`
* caption small, muted

---

### Section 5: SISTEMI OPERATIVI EGI (2 card)

**Layout**

* 2 card in colonna
* CTA testuale dentro

**Style**

* Titolo card molto chiaro
* descrizione max 2 righe
* link “Scopri …” come text-link accent

---

### Section 6: PILASTRI (3 blocchi manifesto)

**I TUOI PILASTRI UFFICIALI**

1. Concretezza
2. Equilibrium
3. Accessibilità

**Layout**

* 3 blocchi verticali (non card cliccabili)
* molto respiro `py-20`
* ogni blocco: titolo + 1–2 righe

**Style**

* Titoli più “duri”, testo breve
* Divisori sottili `h-px bg-white/10` tra blocchi

---

### Section 7: PER CHI È (lista tappabile)

**Layout**

* lista tipo “table view”
* row con freccia
* tap => pagina dedicata

**Style**

* row: `flex items-center justify-between py-4 border-b border-white/5`
* label: `text-zinc-100 font-medium`
* icon: `text-zinc-400`

---

### Section 8: CTA finale

**Layout**

* 2 bottoni: primary + secondary
* testo breve sopra

**Style**

* niente hype
* orientamento: “Esplora” / “Come funziona”

---

## 5) Pagine da Hamburger vs Home (regola implementativa)

### Home (scroll)

* accenni
* 1 idea per sezione
* CTA verso pagine dedicate

### Pagine (menu)

Sono pagine verticali vere, con contenuto completo:

* Cos’è un EGI (approfondita)
* Come funziona (protocollo, flussi)
* Ecosistema (mappa dettagliata)
* Azienda (Chi siamo, Governance, Contatti)

**Importante:** “Chi siamo” e “Contatti” stanno **solo** in “Azienda”, non nella home.

---

## 6) Copilot Task List (implementazione)

1. Implementare layout `AppShell` con header sticky + hamburger drawer.
2. Implementare `HomePage` con 8 section components:

   * `HeroSection`
   * `WhatIsEgiSection`
   * `EgiExamplesSection`
   * `EcosystemOverviewSection`
   * `EgiOperationalSystemsSection`
   * `PillarsSection`
   * `ForWhoSection`
   * `FinalCtaSection`
3. Implementare component library minima:

   * `ButtonPrimary`, `ButtonSecondary`
   * `Card`
   * `SectionTitle`
   * `ListRowLink`
4. Applicare tokens e classi standard sopra (coerenza).
5. Animazioni: massimo `transition`, `active:scale-[0.99]`, fade leggero su apertura menu.

---

Se vuoi, nel prossimo messaggio ti preparo anche un **prompt Copilot “vibe coding”** che dice:

* cartelle
* nomi file
* componenti
* routing
* classi Tailwind già dentro

Ok: **React + Tailwind come default**, e **CSS “puro” solo dove dà un vantaggio reale** (mobile iPhone-first).

Qui sotto hai la regola pratica + una struttura file + snippet pronti.

---

## Regola pratica: quando Tailwind, quando CSS

### Usa **Tailwind** per (90%)

* layout (padding, max-width, stack, grid)
* tipografia base
* colori, bordi, radius
* componenti standard (card, button, list rows)
* responsive (sm/md…)

### Usa **CSS puro** quando è più funzionale

1. **Animazioni/Keyframes** (micro-motion, fade, drawer)
2. **Header sticky con blur + state scroll** (più pulito in CSS)
3. **Sezioni full-screen** con finezze iOS (safe-area, 100vh bug)
4. **Tokens globali** (colori/spacing in `:root`, temi)
5. **Effetti speciali**: grain overlay, gradient molto controllati, backdrop, mask
6. **Componenti “difficili”**: scrollbar styling, `-webkit-` mobile quirks

---

## Struttura consigliata (pulita, AI-friendly)

```
src/
  app/
    AppShell.tsx
    routes.tsx
  pages/
    HomePage.tsx
  sections/
    HeroSection.tsx
    WhatIsEgiSection.tsx
    EgiExamplesSection.tsx
    EcosystemOverviewSection.tsx
    EgiOperationalSystemsSection.tsx
    PillarsSection.tsx
    ForWhoSection.tsx
    FinalCtaSection.tsx
  ui/
    Button.tsx
    Card.tsx
    SectionTitle.tsx
    ListRowLink.tsx
  styles/
    tokens.css
    app.css
    ios.css
  main.tsx
  index.css   // tailwind base + import css
```

---

## CSS tokens: il modo giusto (non duplicare in 100 classi)

**`src/styles/tokens.css`**

```css
:root{
  --bg: #09090b;          /* zinc-950 */
  --text: #f4f4f5;        /* zinc-100 */
  --muted: rgba(212,212,216,.82);
  --border: rgba(255,255,255,.10);

  --r-card: 16px;
  --r-btn: 14px;

  --px: 20px;             /* iPhone padding */
  --maxw: 520px;

  --shadow: 0 1px 20px rgba(0,0,0,.35);

  /* scegli UN accento */
  --accent: #6ee7b7;       /* emerald-300 */
  --accent-bg: rgba(52, 211, 153, .10);
  --accent-border: rgba(52, 211, 153, .25);
}
```

Poi in Tailwind usi classi normali, e quando serve:

* `style={{ color: "var(--accent)" }}` oppure classi custom in CSS.

---

## iPhone quirks (100vh, safe-area) — meglio CSS

**`src/styles/ios.css`**

```css
/* iOS: evita il casino del 100vh */
.full-screen {
  min-height: 92vh;
  min-height: 92svh; /* supportato su molti browser moderni */
}

/* padding safe-area per notch */
.safe-x {
  padding-left: max(var(--px), env(safe-area-inset-left));
  padding-right: max(var(--px), env(safe-area-inset-right));
}

/* blur header più stabile */
.header-blur {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
```

---

## Header sticky con cambio stato allo scroll (Tailwind + 2 classi CSS)

**CSS (`src/styles/app.css`)**

```css
.header {
  transition: background-color .2s ease, border-color .2s ease;
}
.header.is-scrolled{
  background: rgba(9, 9, 11, .82);
  border-bottom: 1px solid rgba(255,255,255,.06);
}
```

**React**

```tsx
import { useEffect, useState } from "react";

export function AppShell({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className={`header header-blur sticky top-0 z-50 ${scrolled ? "is-scrolled" : ""}`}>
        <div className="safe-x mx-auto max-w-[520px] py-4 flex items-center justify-between">
          <a href="/" className="font-semibold tracking-tight">FlorenceEGI</a>
          <button className="rounded-xl border border-white/15 px-3 py-2">☰</button>
        </div>
      </header>

      <main className="mx-auto max-w-[520px] safe-x">{children}</main>
    </div>
  );
}
```

---

## Animazioni: keyframes in CSS, layout in Tailwind

**`src/styles/app.css`**

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up { animation: fadeUp .35s ease both; }
```

Poi:

```tsx
<section className="full-screen flex items-center">
  <div className="fade-up space-y-6">
    ...
  </div>
</section>
```

---

## Import CSS (Vite/React)

In `src/index.css` (o `main.tsx`) importa i tuoi CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import "./styles/tokens.css";
@import "./styles/ios.css";
@import "./styles/app.css";
```

---

## Sintesi decisionale (rapida)

* **Tailwind** = struttura e consistenza
* **CSS puro** = tokens globali + iOS quirks + animazioni + header “serio”
* Risultato: UI più pulita, meno classi ripetute, più controllo

---


