#!/bin/bash

##################################################
# EGI-HUB-HOME-REACT Startup (Frontend Only)
# Backend online su https://egi-hub.13.53.205.215.sslip.io
##################################################

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   EGI-HUB-HOME-REACT - Startup         ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Errore: package.json non trovato!${NC}"
    echo -e "${YELLOW}   Assicurati di essere nella directory del progetto.${NC}"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}⚠️  node_modules non trovato. Installazione dipendenze...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Installazione fallita!${NC}"
        exit 1
    fi
fi

# Check if port 5174 is already in use
if lsof -Pi :5174 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Porta 5174 già in uso!${NC}"
    echo -e "${YELLOW}   Vuoi terminare il processo esistente? (y/n)${NC}"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        echo -e "${BLUE}🔪 Terminazione processo sulla porta 5174...${NC}"
        kill -9 $(lsof -ti:5174) 2>/dev/null
        sleep 1
    else
        echo -e "${RED}❌ Avvio annullato.${NC}"
        exit 1
    fi
fi

echo ""
echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║           🎉 TUTTO PRONTO! 🎉          ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
echo ""
echo -e "${CYAN}📍 Configurazione:${NC}"
echo -e "${GREEN}   • Frontend:     ${NC}http://localhost:5174"
echo -e "${GREEN}   • Backend API:  ${NC}https://egi-hub.13.53.205.215.sslip.io/api"
echo ""
echo -e "${YELLOW}   Premi Ctrl+C per fermare${NC}"
echo ""

# Start dev server
npm run dev
