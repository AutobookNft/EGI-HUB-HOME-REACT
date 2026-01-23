import type { SupportedLocale } from '@/i18n/translations';

export interface MissionContent {
    hero: {
        title: string;
        subtitle: string;
    };
    vision: string;
    mission: string;
    values: {
        title: string;
        description: string;
        icon: string;
    }[];
    roadmap: {
        title: string;
        quarters: {
            quarter: string;
            items: string[];
        }[];
    };
    impact: {
        title: string;
        metrics: {
            label: string;
            value: string;
        }[];
    };
    cta: {
        investor_deck: string;
        contact_partner: string;
    };
}

// Fonte: /home/fabio/EGI/docs/FlorenceEGI/01_Fondamenti_e_Visione.md
export const missionContent: Record<SupportedLocale, MissionContent> = {
    it: {
        hero: {
            title: "Mission & Vision",
            subtitle: "Il Rinascimento Digitale" // linea 189 Fondamenti
        },

        // Vision (linea 191 Fondamenti)
        vision: "In un mondo che consuma attenzione e brucia significato, noi costruiamo memoria, equilibrio e impatto reale.",

        // Mission - NON PRESENTE LETTERALMENTE nei documenti
        mission: "[TBD - da definire]",

        // Values - I TRE PILASTRI (già usati in homepage, stesso contenuto)
        values: [
            {
                title: "Memoria",
                description: "Traccia permanente su blockchain",
                icon: "🏛️"
            },
            {
                title: "Equilibrio",
                description: "Governance Duale, economia rigenerativa",
                icon: "⚖️"
            },
            {
                title: "Impatto Reale",
                description: "Rigenerazione ambientale tramite EPP",
                icon: "🌍"
            }
        ],

        // Roadmap - NON PRESENTE nei documenti
        roadmap: {
            title: "Roadmap 2026",
            quarters: [
                { quarter: "Q1 2026", items: [] }, // VUOTO
                { quarter: "Q2 2026", items: [] },
                { quarter: "Q3 2026", items: [] },
                { quarter: "Q4 2026", items: [] }
            ]
        },

        // Impact Metrics - NON PRESENTI nei documenti
        impact: {
            title: "[TBD - Metriche d'impatto da definire]",
            metrics: [] // VUOTO - non inventare
        },

        // CTA
        cta: {
            investor_deck: "Scarica Investor Deck",
            contact_partner: "Contatta Team Partner"
        }
    },

    // Altre lingue TBD
    en: {
        hero: { title: "[TBD]", subtitle: "[TBD]" },
        vision: "[TBD]",
        mission: "[TBD]",
        values: [],
        roadmap: { title: "[TBD]", quarters: [] },
        impact: { title: "[TBD]", metrics: [] },
        cta: { investor_deck: "[TBD]", contact_partner: "[TBD]" }
    },

    de: {
        hero: { title: "[TBD]", subtitle: "[TBD]" },
        vision: "[TBD]",
        mission: "[TBD]",
        values: [],
        roadmap: { title: "[TBD]", quarters: [] },
        impact: { title: "[TBD]", metrics: [] },
        cta: { investor_deck: "[TBD]", contact_partner: "[TBD]" }
    },

    es: {
        hero: { title: "[TBD]", subtitle: "[TBD]" },
        vision: "[TBD]",
        mission: "[TBD]",
        values: [],
        roadmap: { title: "[TBD]", quarters: [] },
        impact: { title: "[TBD]", metrics: [] },
        cta: { investor_deck: "[TBD]", contact_partner: "[TBD]" }
    },

    fr: {
        hero: { title: "[TBD]", subtitle: "[TBD]" },
        vision: "[TBD]",
        mission: "[TBD]",
        values: [],
        roadmap: { title: "[TBD]", quarters: [] },
        impact: { title: "[TBD]", metrics: [] },
        cta: { investor_deck: "[TBD]", contact_partner: "[TBD]" }
    },

    pt: {
        hero: { title: "[TBD]", subtitle: "[TBD]" },
        vision: "[TBD]",
        mission: "[TBD]",
        values: [],
        roadmap: { title: "[TBD]", quarters: [] },
        impact: { title: "[TBD]", metrics: [] },
        cta: { investor_deck: "[TBD]", contact_partner: "[TBD]" }
    }
};
