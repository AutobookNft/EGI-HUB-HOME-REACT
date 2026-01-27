import type { SupportedLocale } from '@/i18n/translations';

export interface HomepageContent {
    hero: {
        headline: string;
        subheadline: string;
        badge: string;
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
        // Hero - Focus su EGI: certificazione blockchain + protezione ambientale
        hero: {
            badge: "EGI Protocol",
            headline: "EGI: Trasforma ciò che esiste in valore certificato.",
            subheadline: "Blockchain, certificazione e protezione ambientale. Se esiste, Egizzalo. Se lo Egizzi, vale.",
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
            badge: "[TBD]",
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
        hero: { badge: "[TBD]", headline: "[TBD]", subheadline: "[TBD]", cta_primary: "[TBD]", cta_secondary: "[TBD]" },
        pillars: { title: "[TBD]", items: [] },
        socialProof: { title: "[TBD]", metrics: [] }
    },

    es: {
        hero: { badge: "[TBD]", headline: "[TBD]", subheadline: "[TBD]", cta_primary: "[TBD]", cta_secondary: "[TBD]" },
        pillars: { title: "[TBD]", items: [] },
        socialProof: { title: "[TBD]", metrics: [] }
    },

    fr: {
        hero: { badge: "[TBD]", headline: "[TBD]", subheadline: "[TBD]", cta_primary: "[TBD]", cta_secondary: "[TBD]" },
        pillars: { title: "[TBD]", items: [] },
        socialProof: { title: "[TBD]", metrics: [] }
    },

    pt: {
        hero: { badge: "[TBD]", headline: "[TBD]", subheadline: "[TBD]", cta_primary: "[TBD]", cta_secondary: "[TBD]" },
        pillars: { title: "[TBD]", items: [] },
        socialProof: { title: "[TBD]", metrics: [] }
    }
};
