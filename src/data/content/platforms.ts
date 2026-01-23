import type { SupportedLocale } from '@/i18n/translations';

export interface Platform {
    id: string;
    name: string;
    tagline: string;
    description: string;
    status: 'active' | 'coming_soon';
    category: string;
    url: string;
    icon: string;
    color: string;
    features: string[];
}

// Fonte: /home/fabio/EGI-HUB/docs/01_PLATFORME_ARCHITECTURE_03.md (linee 171-188)
import config from '@/utils/config';

export const platforms: Record<SupportedLocale, Platform[]> = {
    it: [
        // NATAN_LOC (linee 172, Architecture doc)
        {
            id: 'natan-loc',
            name: 'NATAN LOC',
            tagline: 'AI Assistant per PA',
            description: 'AI Assistant per PA (Comuni, Enti)',
            status: 'active',
            category: 'Pubblica Amministrazione',
            url: config.natanUrl,
            icon: '📄',
            color: '#FF4500',
            features: [] // [TBD - da definire]
        },

        // FlorenceArtEGI (linea 173)
        {
            id: 'florence-art-egi',
            name: 'Florence Art EGI',
            tagline: 'Piattaforma NFT per artisti',
            description: 'Piattaforma NFT per artisti',
            status: 'coming_soon', // "futuro" in Architecture doc
            category: 'Arte & Collezionismo',
            url: config.florenceUrl,
            icon: '🎨',
            color: '#00FF88',
            features: [] // [TBD]
        },

        // EGI-HUB (linea 175 - Control Plane)
        {
            id: 'egi-hub',
            name: 'EGI-HUB',
            tagline: 'Orchestratore centrale',
            description: 'Orchestratore centrale',
            status: 'active',
            category: 'Infrastructure',
            url: config.infoUrl,
            icon: '⚙️',
            color: '#FFD700',
            features: [] // [TBD]
        }
    ],

    // Altre lingue TBD
    en: [],
    de: [],
    es: [],
    fr: [],
    pt: []
};
