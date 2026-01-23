import type { SupportedLocale } from '@/i18n/translations';

export interface TechContent {
    hero: {
        title: string;
        subtitle: string;
    };
    stack: {
        title: string;
        description: string;
        items: {
            name: string;
            description: string;
            icon: string;
        }[];
    };
    oracode: {
        title: string;
        definition: string;
        quote: string;
        pillars: {
            title: string;
            description: string;
        }[];
    };
    algorand: {
        title: string;
        description: string;
        benefits: string[];
    };
}

// Fonte: /home/fabio/EGI/docs/FlorenceEGI/08_Oracode_System.md + 02_Architettura_Tecnica.md
export const techContent: Record<SupportedLocale, TechContent> = {
    it: {
        hero: {
            title: "Tecnologia",
            subtitle: "Stack World-Class & Paradigma Oracode"
        },

        // Stack Tecnologico (da 02_Architettura_Tecnica.md linee 1-11)
        stack: {
            title: "Stack Tecnologico",
            description: "FlorenceEGI è un SaaS multi-tenant con architettura hub-and-spoke",
            items: [
                {
                    name: "Algorand Blockchain",
                    description: "Protocol Layer", // linea 9 Architettura
                    icon: "⛓️"
                },
                {
                    name: "Laravel",
                    description: "Backend framework",
                    icon: "🔧"
                },
                {
                    name: "PostgreSQL",
                    description: "Database", // da Architecture doc v3.0
                    icon: "🗄️"
                }
            ]
        },

        // Oracode (da 08_Oracode_System.md linee 1-8)
        oracode: {
            title: "Oracode System",
            definition: "Paradigma filosofico-tecnico che fonde ingegneria rigorosa e simbolismo etico, trasformando il software in un organismo di senso.", // linea 5
            quote: "Non solo codice che funziona, ma codice che ha un significato.", // linea 7

            // I QUATTRO PILASTRI (linee 85-235 Oracode doc)
            pillars: [
                {
                    title: "Documentazione Totale", // linea 87
                    description: "Ogni file, funzione, classe, modulo ha documentazione contestuale. Ogni decisione architetturale tracciata in ADR."
                },
                {
                    title: "Regola Zero: Mai Dedurre Senza Dati", // linea 124
                    description: "Zero assunzioni senza validazione. Zero deduzione senza evidenza. Zero 'probabilmente funziona' senza test."
                },
                {
                    title: "Trasparenza Etica", // linea 163
                    description: "Ogni utente può interrogare il sistema su 'perché questa decisione?'. Ogni algoritmo è auditabile (no black box)."
                },
                {
                    title: "Funzionalità Verificabile", // linea 204
                    description: "Ogni processo è tracciato (event sourcing). Ogni stato è ricostruibile (immutabilità). Ogni errore è riproducibile."
                }
            ]
        },

        // Algorand (da 02_Architettura_Tecnica.md linee 164-176)
        algorand: {
            title: "Perché Algorand?",
            description: "Blockchain sostenibile scelta per FlorenceEGI",
            benefits: [
                "Carbon-Negative: Blockchain sostenibile", // linea 168
                "Proof-of-Stake Pura: Nessun mining, basso consumo", // linea 169
                "Scalabilità: 1000+ TPS", // linea 170
                "Finalità Immediata: 4.5 secondi per blocco", // linea 171
                "Sicurezza: Byzantine fault tolerance" // linea 172
            ]
        }
    },

    // Altre lingue TBD
    en: {
        hero: { title: "[TBD]", subtitle: "[TBD]" },
        stack: { title: "[TBD]", description: "[TBD]", items: [] },
        oracode: { title: "[TBD]", definition: "[TBD]", quote: "[TBD]", pillars: [] },
        algorand: { title: "[TBD]", description: "[TBD]", benefits: [] }
    },

    de: {
        hero: { title: "[TBD]", subtitle: "[TBD]" },
        stack: { title: "[TBD]", description: "[TBD]", items: [] },
        oracode: { title: "[TBD]", definition: "[TBD]", quote: "[TBD]", pillars: [] },
        algorand: { title: "[TBD]", description: "[TBD]", benefits: [] }
    },

    es: {
        hero: { title: "[TBD]", subtitle: "[TBD]" },
        stack: { title: "[TBD]", description: "[TBD]", items: [] },
        oracode: { title: "[TBD]", definition: "[TBD]", quote: "[TBD]", pillars: [] },
        algorand: { title: "[TBD]", description: "[TBD]", benefits: [] }
    },

    fr: {
        hero: { title: "[TBD]", subtitle: "[TBD]" },
        stack: { title: "[TBD]", description: "[TBD]", items: [] },
        oracode: { title: "[TBD]", definition: "[TBD]", quote: "[TBD]", pillars: [] },
        algorand: { title: "[TBD]", description: "[TBD]", benefits: [] }
    },

    pt: {
        hero: { title: "[TBD]", subtitle: "[TBD]" },
        stack: { title: "[TBD]", description: "[TBD]", items: [] },
        oracode: { title: "[TBD]", definition: "[TBD]", quote: "[TBD]", pillars: [] },
        algorand: { title: "[TBD]", description: "[TBD]", benefits: [] }
    }
};
