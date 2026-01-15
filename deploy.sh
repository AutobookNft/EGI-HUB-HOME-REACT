#!/bin/bash

##################################################
# EGI-HUB-HOME-REACT Deploy Script
# Deploy del build Vite su server staging
##################################################

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Configurazione
SERVER="forge@13.53.205.215"
REMOTE_PATH="/home/forge/egi-hub-home.13.53.205.215.sslip.io"

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   EGI-HUB-HOME-REACT - Deploy          ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════╝${NC}"
echo ""

# Check if dist/ exists or force rebuild
echo -e "${YELLOW}⚙️  Eseguo build di produzione (Clean Cache)...${NC}"
rm -rf dist
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Errore: Build fallita! dist/ non trovata.${NC}"
    exit 1
fi

echo -e "${YELLOW}⚠️  Stai per deployare su:${NC}"
echo -e "${GREEN}   ${SERVER}:${REMOTE_PATH}${NC}"
echo ""
echo -e "${YELLOW}   Continuare? (y/n)${NC}"
read -r response

if [[ ! "$response" =~ ^[Yy]$ ]]; then
    echo -e "${RED}❌ Deploy annullato.${NC}"
    exit 0
fi

echo ""
echo -e "${BLUE}📦 Sincronizzazione dist/ → ${REMOTE_PATH}...${NC}"

# rsync con compressione e progresso
# Aggiornamento OS3: Sync dentro la cartella 'dist' remota per rispettare config Nginx
rsync -avz --delete \
    --exclude='.git' \
    --exclude='node_modules' \
    dist/ ${SERVER}:${REMOTE_PATH}/dist/

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}╔════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║           ✅ DEPLOY COMPLETO!          ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${CYAN}🌐 URL: ${NC}http://egi-hub-home.13.53.205.215.sslip.io/"
else
    echo ""
    echo -e "${RED}╔════════════════════════════════════════╗${NC}"
    echo -e "${RED}║           ❌ DEPLOY FALLITO!           ║${NC}"
    echo -e "${RED}╚════════════════════════════════════════╝${NC}"
    exit 1
fi
