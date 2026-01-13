# 🚀 EGI-HUB Full Stack - Quick Start

Script aggiornato per avviare **TUTTO** automaticamente!

## ⚡ Avvio Completo

```bash
cd /home/fabio/EGI-HUB-HOME-REACT
./start.sh
```

Lo script ora:
1. ✅ **Avvia backend** Laravel (porta 8001) in background
2. ✅ **Aspetta** che il backend sia pronto
3. ✅ **Avvia frontend** React (porta 5174)
4. ✅ **Health check** automatico
5. ✅ **Log** backend salvati in `/tmp/egi-hub-backend.log`

## 🛑 Stop Completo

```bash
./stop.sh
```

Ferma **entrambi** i servizi (backend + frontend).

## 📊 Servizi Disponibili

Dopo l'avvio:
- **Backend API**: `http://localhost:8001`
- **Frontend React**: `http://localhost:5174`

## 🔍 Troubleshooting

### Backend non si avvia

Controlla i log:
```bash
tail -f /tmp/egi-hub-backend.log
```

### Backend già in esecuzione

Lo script rileva se il backend è già attivo e **non lo riavvia**.

### Solo Frontend

Se il backend non c'è, lo script continua comunque con solo il frontend.

## 📝 Note

- Backend avviato in **background** (nohup)
- Frontend in **foreground** (Ctrl+C per fermare tutto)
- Log backend in `/tmp/egi-hub-backend.log`
