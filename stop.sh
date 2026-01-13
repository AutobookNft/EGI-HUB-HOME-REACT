#!/bin/bash

##################################################
# EGI-HUB-HOME-REACT Stop Script
# Termina il dev server frontend
##################################################

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${RED}🛑 Stop EGI-HUB-HOME-REACT...${NC}"

# Find and kill process on port 5174
if lsof -Pi :5174 -sTCP:LISTEN -t >/dev/null 2>&1; then
    echo -e "${YELLOW}   Terminazione processo sulla porta 5174...${NC}"
    kill -9 $(lsof -ti:5174) 2>/dev/null
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Server arrestato correttamente.${NC}"
    else
        echo -e "${RED}❌ Errore durante l'arresto.${NC}"
        exit 1
    fi
else
    echo -e "${YELLOW}⚠️  Nessun server in esecuzione sulla porta 5174.${NC}"
fi
