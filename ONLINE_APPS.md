# 🌐 EGI Ecosystem Apps - Online URLs

**IP Server**: `13.53.205.215` (AWS EC2 eu-north-1)  
**Domain**: `sslip.io` (wildcard SSL)  
**Data**: 2026-01-13

---

## 📍 Apps Online (Production)

| App | URL | Descrizione |
|-----|-----|-------------|
| **EGI-HUB** | https://egi-hub.13.53.205.215.sslip.io | Control Center - Orchestratore ecosistema |
| **EGI** | https://egi.13.53.205.215.sslip.io | Florence Art - Collezionismo NFT |
| **NATAN-LOC** | https://natan-loc.13.53.205.215.sslip.io | Documenti Pubblica Amministrazione |
| **EGI-INFO** | https://egi-info.13.53.205.215.sslip.io | Documentazione e Informazioni |

---

## 🔗 Integration nel Frontend React

### Sidebar Navigation

Il componente `Sidebar.tsx` include collegamenti diretti alle app online:

```typescript
const APPS = {
  HUB: 'https://egi-hub.13.53.205.215.sslip.io',
  EGI: 'https://egi.13.53.205.215.sslip.io',
  NATAN: 'https://natan-loc.13.53.205.215.sslip.io',
  INFO: 'https://egi-info.13.53.205.215.sslip.io',
};
```

**Comportamento**: Click su bottone → Apre app in nuova tab (`window.open`)

---

## 🖥️ Development URLs (Local)

| Servizio | Porta | URL |
|----------|-------|-----|
| **EGI-HUB Backend** | 8001 | http://localhost:8001 |
| **EGI-HUB Frontend** | 5174 | http://localhost:5174 |
| **NATAN_LOC** | 8000 | http://localhost:8000 |
| **EGI** | 8004 | http://localhost:8004 |

---

## ✅ Testing Links

Per verificare che i link funzionino:

```bash
# Test connectivity
curl -I https://egi-hub.13.53.205.215.sslip.io
curl -I https://natan-loc.13.53.205.215.sslip.io
curl -I https://egi.13.53.205.215.sslip.io
curl -I https://egi-info.13.53.205.215.sslip.io
```

Expected response: `HTTP/2 200` o redirect 301/302

---

## 🔐 Security Note

**sslip.io**: Servizio che fornisce SSL wildcard automatico basato su IP.

- ✅ SSL/TLS certificato valido
- ✅ No configurazione DNS necessaria
- ⚠️ Cambio IP server richiede aggiornamento URL

---

## 🚀 Come Usare

1. Avvia frontend React locale:
   ```bash
   cd /home/fabio/EGI-HUB-HOME-REACT
   npm run dev
   ```

2. Apri browser: `http://localhost:5174`

3. Click su icone sidebar:
   - **HUB** → Apre EGI-HUB online
   - **NATAN** → Apre NATAN-LOC online
   - **EGI** → Apre EGI (Art) online
   - **INFO** → Apre EGI-INFO online

**Vantaggio**: Nessun setup locale necessario per le app verticali! ✨

