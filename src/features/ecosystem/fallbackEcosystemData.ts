import type { EcosystemData } from '@/types/ecosystem';
import config from '@/utils/config';

export const createFallbackEcosystemData = (
    _t: (key: string) => string
): EcosystemData => ({
    core: {
        label: 'EGI',
        tagline: 'Ecosistema Genesi',
        cat: 'CORE',
        color: 0xFFD700,
        desc: 'Il cuore pulsante dell\'ecosistema.',
        bullets: ['Governance', 'Identity', 'System Status'],
        egi_link: 'Il punto di partenza.',
        route: '/what-is', // Updated: Links to Definition/Co-Creation Page
        radius: 65
    },
    egis: {
        label: 'GLI EGIS',
        tagline: 'Asset & Collezioni',
        cat: 'ASSETS',
        color: 0xFF00FF,
        desc: 'Tutto ciò che è stato Egizzato.',
        bullets: ['Marketplace', 'NFT Collections', 'My Assets'],
        egi_link: 'Se esiste, egizzalo.',
        route: config.florenceUrl,
        radius: 42
    },
    project: {
        label: 'PROGETTI',
        tagline: 'Piattaforme Attive',
        cat: 'CATEGORY',
        color: 0x00FFAA,
        desc: 'L\'universo delle piattaforme EGI.',
        bullets: ['Florence Art', 'NATAN LOC', 'Tosca Bandi'],
        egi_link: 'Esplora le piattaforme.',
        route: '/platforms',
        radius: 42
    },
    ambiente: {
        label: 'AMBIENTE',
        tagline: 'Impatto & Rigenerazione',
        cat: 'IMPACT',
        color: 0x00FF00,
        desc: 'Il monitoraggio dell\'impatto ambientale.',
        bullets: ['EPP Dashboard', 'Riforestazione', 'Certificati'],
        egi_link: 'Ogni atto crea impatto.',
        route: '/ambiente',
        radius: 42
    },
    oracode: {
        label: 'ORACODE',
        tagline: 'Verità & Codice',
        cat: 'ETHICS',
        color: 0xFFAA00,
        desc: 'Le regole del sistema.',
        bullets: ['White Paper', 'Documentation', 'Compliance'],
        egi_link: 'Il codice non mente.',
        route: '/oracode',
        radius: 42
    },
    orbitalConfig: [
        { id: 'egis', orbit: 1 },
        { id: 'project', orbit: 1 },
        { id: 'ambiente', orbit: 1 },
        { id: 'oracode', orbit: 1 },
    ],
});
