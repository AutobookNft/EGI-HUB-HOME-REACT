import type { SupportedLocale } from '@/i18n/translations';

export interface HomepageContent {
    hero: {
        headline: string;
        subheadline: string;
        cta_primary: string;
        cta_secondary: string;
    };
    pillars: {
        title: string;
        items: {
            title: string;
            description: string;
            icon: string;
        }[];
    };
    socialProof: {
        title: string;
        metrics: {
            label: string;
            value: string;
        }[];
    };
}

// Fonte: /home/fabio/EGI/docs/FlorenceEGI/01_Fondamenti_e_Visione.md
export const homepageContent: Record<SupportedLocale, HomepageContent> = {
    it: {
        // Hero (linee 14-16 Fondamenti)
        hero: {
            headline: "Piattaforma di Certificazione Digitale",
            subheadline: "EGI - Eco Goods Invent: certificazione blockchain per beni frutto dell'ingegno umano",
            cta_primary: "Esplora Piattaforme",
            cta_secondary: "Scopri di più"
        },

        // Value Proposition - I TRE PILASTRI (linee 194-209 Fondamenti)
        pillars: {
            title: "I Tre Pilastri",
            items: [
                {
                    title: "Memoria",
                    description: "Traccia permanente su blockchain di ogni contributo culturale. Immutabilità e verità storica.",
                    icon: "🏛️"
                },
                {
                    title: "Equilibrio",
                    description: "Governance Duale che bilancia profitto e missione. Fee dinamiche: economia rigenerativa.",
                    icon: "⚖️"
                },
                {
                    title: "Impatto Reale",
                    description: "Rigenerazione ambientale tramite EPP integrati. Ogni atto economico genera un atto rigenerativo.",
                    icon: "🌍"
                }
            ]
        },

        // Social Proof - DATI NON PRESENTI NEI DOCUMENTI
        socialProof: {
            title: "[TBD - Numeri chiave da definire]",
            metrics: []  // VUOTO - non inventare dati
        }
    },

    // Altre lingue TBD post-approvazione IT
    en: {
        hero: {
            headline: "[TBD]",
            subheadline: "[TBD]",
            cta_primary: "Explore Platforms",
            cta_secondary: "Learn More"
        },
        pillars: {
            title: "[TBD]",
            items: []
        },
        socialProof: {
            title: "[TBD]",
            metrics: []
        }
    },

    de: {
        hero: { headline: "[TBD]", subheadline: "[TBD]", cta_primary: "[TBD]", cta_secondary: "[TBD]" },
        pillars: { title: "[TBD]", items: [] },
        socialProof: { title: "[TBD]", metrics: [] }
    },

    es: {
        hero: { headline: "[TBD]", subheadline: "[TBD]", cta_primary: "[TBD]", cta_secondary: "[TBD]" },
        pillars: { title: "[TBD]", items: [] },
        socialProof: { title: "[TBD]", metrics: [] }
    },

    fr: {
        hero: { headline: "[TBD]", subheadline: "[TBD]", cta_primary: "[TBD]", cta_secondary: "[TBD]" },
        pillars: { title: "[TBD]", items: [] },
        socialProof: { title: "[TBD]", metrics: [] }
    },

    pt: {
        hero: { headline: "[TBD]", subheadline: "[TBD]", cta_primary: "[TBD]", cta_secondary: "[TBD]" },
        pillars: { title: "[TBD]", items: [] },
        socialProof: { title: "[TBD]", metrics: [] }
    }
};
