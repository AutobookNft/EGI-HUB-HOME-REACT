import type { SupportedLocale } from '@/i18n/translations';

export interface Platform {
    id: string;
    name: string;
    tagline: string;
    description: string;
    status: 'active' | 'coming_soon';
    category: string;
    type: 'manipulator' | 'ecosystem'; // manipulator = manipola EGI, ecosystem = sito accessorio
    url: string;
    icon: string;
    color: string;
    features: string[];
}

// Fonte: /home/fabio/EGI-HUB/docs/01_PLATFORME_ARCHITECTURE_03.md (linee 171-188)
import config from '@/utils/config';

export const platforms: Record<SupportedLocale, Platform[]> = {
    it: [
        // === MANIPOLATORI DI EGI ===
        // Piattaforme che manipolano EGI per scopi specifici

        // NATAN-LOC: Manipolatore EGI per Pubblica Amministrazione
        {
            id: 'natan-loc',
            name: 'NATAN LOC',
            tagline: 'Certificazione documenti PA',
            description: 'Manipola EGI per certificare e autenticare atti della Pubblica Amministrazione. Ogni documento diventa un EGI certificato on-chain.',
            status: 'active',
            category: 'Pubblica Amministrazione',
            type: 'manipulator',
            url: config.natanUrl,
            icon: '📄',
            color: '#FF4500',
            features: ['Certificazione atti', 'Autenticazione documenti', 'Tracciabilità blockchain']
        },

        // Florence Art EGI: Manipolatore EGI per Arte
        {
            id: 'florence-art-egi',
            name: 'Florence Art EGI',
            tagline: 'EGI per opere d\'arte',
            description: 'Manipola EGI per arricchire opere d\'arte con Utility, Certificate of Authenticity (CoA), Traits e sistemi di marketing avanzati.',
            status: 'coming_soon',
            category: 'Arte & Collezionismo',
            type: 'manipulator',
            url: config.florenceUrl,
            icon: '🎨',
            color: '#00FF88',
            features: ['CoA on-chain', 'Utility personalizzate', 'Traits & Metadata', 'Marketing automation']
        },

        // === SITI ECOSYSTEM ===
        // Siti accessori che orbitano nell'ecosistema (non manipolano EGI)

        // EGI-HUB: Orchestratore centrale
        {
            id: 'egi-hub',
            name: 'EGI-HUB',
            tagline: 'Centro di controllo',
            description: 'Orchestratore centrale dell\'ecosistema Florence EGI. Coordina tutte le piattaforme e fornisce accesso unificato.',
            status: 'active',
            category: 'Infrastructure',
            type: 'ecosystem',
            url: config.appUrl, // Questo stesso sito
            icon: '⚙️',
            color: '#FFD700',
            features: ['Orchestrazione', 'Accesso unificato', 'Dashboard centrale']
        },

        // EGI-INFO: Documentazione
        {
            id: 'egi-info',
            name: 'EGI-INFO',
            tagline: 'Documentazione & Guide',
            description: 'Hub informativo completo: whitepaper, guide tecniche, API reference, tutorial e documentazione dell\'ecosistema.',
            status: 'active',
            category: 'Documentation',
            type: 'ecosystem',
            url: config.infoUrl,
            icon: '📚',
            color: '#3B82F6',
            features: ['Whitepaper', 'API Docs', 'Tutorial', 'Guide tecniche']
        }
    ],

    // Altre lingue TBD
    en: [],
    de: [],
    es: [],
    fr: [],
    pt: []
};
