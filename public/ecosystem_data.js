// ecosystem_data.js
// DATABASE CENTRALE DELL'ECOSISTEMA FLORENCE EGI - HOME PAGE
// Updated: OS3 Refactor - EGI Core & Large Uniform Satellites

console.log("🌍 [ecosystem_data.js] Loading configuration vOS3.5 (EGI Core)...");
const ecosystemData = {
    // --- CORE: EGI ---
    // User Request: Center sphere must be EGI
    core: {
        label: "EGI",
        tagline: "Ecosistema Genesi",
        cat: "CORE",
        color: 0xFFD700, // Gold
        desc: "Il cuore pulsante dell'ecosistema.",
        bullets: [
            "Governance",
            "Identity",
            "System Status"
        ],
        egi_link: "Il punto di partenza.",
        route: "/what-is",
        radius: 65 // Larger core
    },

    // --- SATELLITES ---
    // User Request: All spheres equal size and 50% larger (Default was ~28, setting to 45-50)
    
    // 1. GLI EGIS
    egis: {
        label: "GLI EGIS",
        tagline: "Asset & Collezioni",
        cat: "ASSETS",
        color: 0xFF00FF, // Magenta
        desc: "Tutto ciò che è stato Egizzato: Arte, Beni, Documenti.",
        bullets: ["Marketplace", "NFT Collections", "My Assets"],
        egi_link: "Se esiste, egizzalo. Se lo egizzi, VALE.",
        route: "https://art.florenceegi.com",
        radius: 42 // EXACTLY 50% larger than original 28 (28 * 1.5 = 42)
    },

    // 2. PROGETTI (Piattaforme Attive)
    project: {
        label: "PROGETTI",
        tagline: "Piattaforme Attive",
        cat: "CATEGORY",
        color: 0x00FFAA, // Verde Acqua
        desc: "L'universo delle piattaforme EGI: da Florence Art a NATAN.",
        bullets: ["Florence Art", "NATAN LOC", "Tosca Bandi"],
        egi_link: "Esplora le piattaforme attive dell'ecosistema.",
        route: "/platforms",
        radius: 42 // EXACTLY 50% larger than original 28
    },

    // 3. AMBIENTE
    ambiente: {
        label: "AMBIENTE",
        tagline: "Impatto & Rigenerazione",
        cat: "IMPACT",
        color: 0x00FF00, // Green
        desc: "Il monitoraggio dell'impatto ambientale reale.",
        bullets: ["EPP Dashboard", "Riforestazione", "Certificati Green"],
        egi_link: "Ogni atto crea impatto.",
        route: "/ambiente", // Fixed internal route
        radius: 42 // EXACTLY 50% larger than original 28
    },

    // 4. ORACODE
    oracode: {
        label: "ORACODE",
        tagline: "Verità & Codice",
        cat: "ETHICS",
        color: 0xFFAA00, // Orange
        desc: "Le regole, l'etica e la documentazione del sistema.",
        bullets: ["White Paper", "Documentation", "Compliance"],
        egi_link: "Il codice non mente.",
        route: "/oracode", // Fixed internal route
        radius: 42 // EXACTLY 50% larger than original 28
    }
};

// Configurazione Orbite - Balanced 4-point orbit
const orbitalConfig = [
    { id: "egis", orbit: 1 },
    { id: "project", orbit: 1 },
    { id: "ambiente", orbit: 1 },
    { id: "oracode", orbit: 1 }
];

// Export for Global Access
window.ecosystemData = ecosystemData;
window.orbitalConfig = orbitalConfig;
