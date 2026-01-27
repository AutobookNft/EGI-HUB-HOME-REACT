Perfetto.
Qui ti do **indicazioni chiare di Layout e Style**, **iPhone-first**, pensate per essere **tradotte direttamente in CSS / Tailwind / componenti React** da Copilot.

Non parlo di “gusti”.
Parlo di **regole strutturali**.

---

# 📐 LAYOUT — REGOLE MADRI

## 1️⃣ Colonna unica. Sempre.

* **Max width:** 100%
* **Padding laterale:** 20–24px
* Niente griglie multiple
* Niente affiancamenti su mobile

👉 Se qualcosa sembra “desktop adattato”, è sbagliato.

---

## 2️⃣ Ogni sezione = un blocco verticale pieno

* Altezza: **min-height: 100vh** (con tolleranza)
* Le sezioni **non devono competere visivamente**
* Una entra, l’altra esce

Mentalità:

> “Sto leggendo un capitolo, non una lista.”

---

## 3️⃣ Gerarchia verticale fissa (non improvvisare)

Ogni sezione usa **sempre lo stesso schema**:

```
[ Titolo ]
[ Spazio ]
[ Contenuto breve ]
[ (eventuale CTA) ]
```

Se rompi questa coerenza → confusione cognitiva.

---

# 🎨 STYLE — IDENTITÀ VISIVA

## 4️⃣ Colori: pochi, profondi, non gridati

### Palette consigliata

* **Background principale:** nero / antracite profondo
* **Testo primario:** bianco sporco (#F2F2F2)
* **Testo secondario:** grigio medio
* **Accent:** UNO solo (verde / oro / neutro elegante)

❌ No gradienti aggressivi
❌ No neon
❌ No arcobaleni

Deve sembrare:

> istituzionale, solido, durevole

---

## 5️⃣ Contrasto alto, ma non violento

* Titoli molto leggibili
* Testi mai sotto i 15–16px
* Line-height generoso

Mobile = **comfort visivo**, non spettacolo.

---

# ✍️ TIPOGRAFIA

## 6️⃣ Tipografia semplice, seria

* **Una famiglia** (max due)
* Sans serif pulita
* Niente font “crypto”

### Gerarchia tipo

* H1: grande, poche parole
* H2: netto, mai decorativo
* Body: lineare, leggibile
* CTA: testo semplice, niente slogan

👉 Il testo deve sembrare **una dichiarazione**, non una pubblicità.

---

# 🧱 COMPONENTI (come devono apparire)

## 7️⃣ Card: solo dove servono davvero

Usale per:

* Sistemi Operativi EGI
* “Per chi è”

Stile card:

* bordo sottile o ombra leggera
* angoli morbidi (non pillola)
* niente effetto “app launcher”

Le card **non devono sembrare bottoni**.

---

## 8️⃣ CTA: poche, calme, coerenti

* CTA primaria: 1 per sezione (max)
* Stile: rettangolo semplice
* Testo descrittivo, non marketing

Esempi corretti:

* “Cos’è un EGI”
* “Scopri Florence Art”
* “Esplora l’ecosistema”

❌ “Inizia ora”
❌ “Scopri il futuro”

---

# 🧭 NAVIGAZIONE VISIVA

## 9️⃣ Header minimale

* Logo a sinistra
* Hamburger a destra
* Sfondo trasparente → diventa solido allo scroll

Niente menu secondari.
Niente CTA nel header.

---

## 🔄 ANIMAZIONI (molto importante)

## 🔟 Movimento lento o nullo

* Transizioni **lente**
* Scroll naturale
* Eventuali animazioni: **decorative**, non funzionali

Se l’utente deve “capire come muoversi” → fallimento.

---

# 🧠 ATMOSFERA (questa è la parte sottile)

Deve comunicare:

* **tempo lungo**
* **serietà**
* **assenza di hype**
* **fiducia silenziosa**

Se sembra:

* startup rumorosa → sbagliato
* progetto crypto → sbagliato
* landing marketing → sbagliato

Deve sembrare:

> “Questa cosa esisterà ancora tra 10 anni.”

---

# ✅ CHECKLIST RAPIDA (per Copilot)

Quando Copilot genera UI, verifica che:

* [ ] una sola colonna
* [ ] sezioni verticali nette
* [ ] testi brevi e leggibili
* [ ] colori sobri
* [ ] CTA poche e descrittive
* [ ] nessuna UI “da app”

Se anche **una sola** non è rispettata → correggi.

---

## Prossimo passo possibile

Posso:

1. trasformare tutto questo in **linee guida CSS/Tailwind**
2. scrivere **prompt Copilot specifico per layout**
3. fare **audit visivo** della home attuale punto per punto

Dimmi cosa vuoi fare adesso.
