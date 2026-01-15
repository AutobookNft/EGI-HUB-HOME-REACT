// ecosystem_data.js
// DATABASE CENTRALE DELL'ECOSISTEMA FLORENCE EGI - HOME PAGE
// Updated: User Request - Role-Based Navigation

const ecosystemData = {
    // --- CORE: HUB ---
    core: {
        label: "HUB",
        tagline: "Centro di Controllo",
        cat: "CORE",
        color: 0xFFD700, // Gold
        desc: "Il cuore pulsante dell'ecosistema.",
        bullets: [
            "Governance",
            "Identity",
            "System Status"
        ],
        egi_link: "Il punto di partenza.",
        route: "https://egi-hub.13.53.205.215.sslip.io"
    },

    // --- SATELLITES ---
    
    // 1. GLI EGIS
    egis: {
        label: "GLI EGIS",
        tagline: "Asset & Collezioni",
        cat: "ASSETS",
        color: 0xFF00FF, // Magenta
        desc: "Tutto ciò che è stato Egizzato: Arte, Beni, Documenti.",
        bullets: [
            "Marketplace",
            "NFT Collections",
            "My Assets"
        ],
        egi_link: "Se esiste, egizzalo. Se lo egizzi, VALE.",
        route: "https://egi.13.53.205.215.sslip.io"
    },

    // 2. PROGETTI
    project: {
        label: "PROGETTI",
        tagline: "Piattaforme Attive.",
        cat: "CATEGORY",
        color: 0x00FFAA, // Verde Acqua
        desc: "L'universo delle piattaforme EGI: da Florence Art a NATAN.",
        bullets: [
            "Florence Art - Collezionismo",
            "NATAN LOC - Documenti PA",
            "Tosca Bandi - Monitoraggio"
        ],
        egi_link: "Esplora le piattaforme attive dell'ecosistema.",
        route: "/platforms"
    },

    // 3. AMBIENTE
    ambiente: {
        label: "AMBIENTE",
        tagline: "Impatto & Rigenerazione",
        cat: "IMPACT",
        color: 0x00FF00, // Green
        desc: "Il monitoraggio dell'impatto ambientale reale.",
        bullets: [
            "EPP Dashboard",
            "Riforestazione",
            "Certificati Green"
        ],
        egi_link: "Ogni atto crea impatto.",
        route: "#"
    },

    // 4. ORACODE
    oracode: {
        label: "ORACODE",
        tagline: "Verità & Codice",
        cat: "ETHICS",
        color: 0xFFAA00, // Orange/Gold
        desc: "Le regole, l'etica e la documentazione del sistema.",
        bullets: [
            "White Paper",
            "Documentation",
            "Compliance"
        ],
        egi_link: "Il codice non mente.",
        route: "#"
    }
};

// Configurazione Orbite - Balanced 4-point orbit
const orbitalConfig = [
    { id: "egis", orbit: 1 },
    { id: "progetti", orbit: 1 },
    { id: "ambiente", orbit: 1 },
    { id: "oracode", orbit: 1 }
];

// Export for Global Access
window.ecosystemData = ecosystemData;
window.orbitalConfig = orbitalConfig;
