import { SupportedLocale } from '@/i18n/translations';

export interface HomepageContent {
    hero: {
        badge: string;
        headline: string;
        subheadline: string;
        cta_primary: string;
    };
    whatIsEgi: {
        title: string;
        cardTitle: string;
        description: string;
    };
    examples: {
        title: string;
        cardTitle: string;
        items: Array<{ icon: string; label: string }>;
    };
    ecosystem: {
        title: string;
        visualLabel: string;
        caption: string;
    };
    systems: {
        eyebrow: string;
        title: string;
        florenceArt: {
            title: string;
            description: string;
            linkText: string;
        };
        natan: {
            title: string;
            description: string;
            linkText: string;
        };
    };
    pillars: {
        title: string;
        items: Array<{
            title: string;
            description: string;
        }>;
    };
    forWho: {
        title: string;
        items: Array<{ label: string; href: string }>;
    };
    finalCta: {
        text: string;
        primaryButton: string;
        secondaryButton: string;
        copyright: string;
    };
    footer: {
        privacy: string;
        terms: string;
        cookies: string;
        rights: string;
    };
    transition: {
        headline: string;
        subheadline: string;
        description: string;
    };
}

export const homepageContent: Record<SupportedLocale, HomepageContent> = {
    it: {
        transition: {
            headline: 'Dal semplice possesso.',
            subheadline: 'Alla generazione di valore.',
            description: 'Oggi i tuoi beni sono statici. Con EGI diventano asset digitali dinamici: certificati, protetti e pronti per essere scambiati o monetizzati in un mercato globale.',
        },
        hero: {
            badge: 'EGI Protocol',
            headline: 'Un EGI trasforma qualcosa che già esiste in un bene che può generare valore nel tempo.',
            subheadline: 'Se esiste, Egizzalo. Se lo Egizzi, vale.',
            cta_primary: 'Scopri come fare',
        },
        whatIsEgi: {
            title: 'Cos\'è un EGI',
            cardTitle: 'Definizione',
            description: 'Un EGI trasforma qualcosa che già esiste in un bene che può generare valore nel tempo.',
        },
        examples: {
            title: 'Cosa può essere un EGI',
            cardTitle: 'Esempi Concreti',
            items: [
                { icon: '💡', label: 'Un’idea che vuoi proteggere e mettere a frutto' },
                { icon: '🎨', label: 'Un’opera d’arte che continua a generare valore dopo la vendita' },
                { icon: '🏆', label: 'Un oggetto da collezione che cresce nel tempo' },
                { icon: '📦', label: 'Un prodotto che guadagna anche nelle rivendite' },
                { icon: '📄', label: 'Un documento che diventa certificato, verificabile e permanente' },
            ],
        },
        ecosystem: {
            title: 'Ecosistema',
            visualLabel: 'Hub & Spoke',
            caption: 'Architettura distribuita con EGI-HUB al centro',
        },
        systems: {
            eyebrow: 'Manipolatori',
            title: 'Sistemi Operativi EGI',
            florenceArt: {
                title: 'Florence Art EGI',
                description: 'Manipola EGI per arricchire opere d\'arte con CoA, Utility, Traits e sistemi di marketing avanzati.',
                linkText: 'Scopri Florence Art',
            },
            natan: {
                title: 'NATAN-LOC',
                description: 'Manipola EGI per certificare e autenticare atti della Pubblica Amministrazione. Ogni documento diventa un EGI certificato on-chain.',
                linkText: 'Scopri NATAN',
            },
        },
        pillars: {
            title: 'I Nostri 4 Pilastri',
            items: [
                {
                    title: 'Concretezza',
                    description: 'Beni reali, valore tangibile. Ogni EGI rappresenta qualcosa che esiste nel mondo fisico.',
                },
                {
                    title: 'Equilibrium',
                    description: 'Bilanciamento tra economia e ambiente. Ogni transazione contribuisce alla protezione ambientale.',
                },
                {
                    title: 'Accessibilità',
                    description: 'Tecnologia per tutti. EGI rende la blockchain comprensibile e utilizzabile da chiunque.',
                },
                {
                    title: 'Impatto Reale',
                    description: 'Ogni EGI genera un beneficio ambientale misurabile e tracciabile on-chain.',
                },
            ],
        },
        forWho: {
            title: 'Per chi è',
            items: [
                { label: 'Artisti', href: '/for/artists' },
                { label: 'Collezionisti', href: '/for/collectors' },
                { label: 'Pubblica Amministrazione', href: '/for/pa' },
                { label: 'Investitori', href: '/for/investors' },
            ],
        },
        finalCta: {
            text: 'Pronto a trasformare i tuoi asset in valore certificato?',
            primaryButton: 'Esplora l\'ecosistema',
            secondaryButton: 'Come funziona',
            copyright: 'FlorenceEGI © 2026',
        },
        footer: {
            privacy: 'Privacy Policy',
            terms: 'Termini di Servizio',
            cookies: 'Cookie Policy',
            rights: 'Tutti i diritti riservati.',
        },
    },
    en: {
        transition: {
            headline: 'From simple possession.',
            subheadline: 'To value generation.',
            description: 'Today your goods are static. With EGI they become dynamic digital assets: certified, protected, and ready to be exchanged or monetized in a global market.',
        },
        hero: {
            badge: 'EGI Protocol',
            headline: 'An EGI transforms something that already exists into an asset that can generate value over time.',
            subheadline: 'If it exists, EGI it. If you EGI it, it\'s worth it.',
            cta_primary: 'Find out how',
        },
        whatIsEgi: {
            title: 'What is an EGI',
            cardTitle: 'Definition',
            description: 'An EGI transforms something that already exists into an asset that can generate value over time.',
        },
        examples: {
            title: 'What can be an EGI',
            cardTitle: 'Concrete Examples',
            items: [
                { icon: '💡', label: 'An idea you want to protect and monetize' },
                { icon: '🎨', label: 'An artwork that continues to generate value after sale' },
                { icon: '🏆', label: 'A collectible that grows in value over time' },
                { icon: '📦', label: 'A product that earns even on resales' },
                { icon: '📄', label: 'A document that becomes certified, verifiable, and permanent' },
            ],
        },
        ecosystem: {
            title: 'Ecosystem',
            visualLabel: 'Hub & Spoke',
            caption: 'Distributed architecture with EGI-HUB at the center',
        },
        systems: {
            eyebrow: 'Manipulators',
            title: 'EGI Operating Systems',
            florenceArt: {
                title: 'Florence Art EGI',
                description: 'Manipulates EGI to enrich artworks with CoA, Utility, Traits, and advanced marketing systems.',
                linkText: 'Discover Florence Art',
            },
            natan: {
                title: 'NATAN-LOC',
                description: 'Manipulates EGI to certify and authenticate Public Administration deeds. Every document becomes an on-chain certified EGI.',
                linkText: 'Discover NATAN',
            },
        },
        pillars: {
            title: 'Our 4 Pillars',
            items: [
                {
                    title: 'Concreteness',
                    description: 'Real goods, tangible value. Every EGI represents something that exists in the physical world.',
                },
                {
                    title: 'Equilibrium',
                    description: 'Balance between economy and environment. Every transaction contributes to environmental protection.',
                },
                {
                    title: 'Accessibility',
                    description: 'Technology for everyone. EGI makes blockchain understandable and usable by anyone.',
                },
                {
                    title: 'Real Impact',
                    description: 'Every EGI generates a measurable and on-chain traceable environmental benefit.',
                },
            ],
        },
        forWho: {
            title: 'For Whom',
            items: [
                { label: 'Artists', href: '/for/artists' },
                { label: 'Collectors', href: '/for/collectors' },
                { label: 'Public Admin', href: '/for/pa' },
                { label: 'Investors', href: '/for/investors' },
            ],
        },
        finalCta: {
            text: 'Ready to transform your assets into certified value?',
            primaryButton: 'Explore Ecosystem',
            secondaryButton: 'How it works',
            copyright: 'FlorenceEGI © 2026',
        },
        footer: {
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            cookies: 'Cookie Policy',
            rights: 'All rights reserved.',
        },
    },
    pt: {
        transition: {
            headline: 'Da simples posse.',
            subheadline: 'À geração de valor.',
            description: 'Hoje seus bens são estáticos. Com EGI tornam-se ativos digitais dinâmicos: certificados, protegidos e prontos para serem trocados ou monetizados num mercado global.',
        },
        hero: {
            badge: 'Protocolo EGI',
            headline: 'Um EGI transforma algo que já existe em um ativo que pode gerar valor ao longo do tempo.',
            subheadline: 'Se existe, EGI. Se você faz EGI, vale.',
            cta_primary: 'Descubra como',
        },
        whatIsEgi: {
            title: 'O que é um EGI',
            cardTitle: 'Definição',
            description: 'Um EGI transforma algo que já existe em um ativo que pode gerar valor ao longo do tempo.',
        },
        examples: {
            title: 'O que pode ser um EGI',
            cardTitle: 'Exemplos Concretos',
            items: [
                { icon: '💡', label: 'Uma ideia que você quer proteger e rentabilizar' },
                { icon: '🎨', label: 'Uma obra de arte que continua gerando valor após a venda' },
                { icon: '🏆', label: 'Um item colecionável que cresce no tempo' },
                { icon: '📦', label: 'Um produto que ganha também nas revendas' },
                { icon: '📄', label: 'Um documento que se torna certificado, verificável e permanente' },
            ],
        },
        ecosystem: {
            title: 'Ecossistema',
            visualLabel: 'Hub & Spoke',
            caption: 'Arquitetura distribuída com EGI-HUB no centro',
        },
        systems: {
            eyebrow: 'Manipuladores',
            title: 'Sistemas Operacionais EGI',
            florenceArt: {
                title: 'Florence Art EGI',
                description: 'Manipula EGI para enriquecer obras de arte com CoA, Utilidade, Traits e sistemas de marketing avançados.',
                linkText: 'Descubra Florence Art',
            },
            natan: {
                title: 'NATAN-LOC',
                description: 'Manipula EGI para certificar e autenticar atos da Administração Pública. Cada documento torna-se um EGI certificado on-chain.',
                linkText: 'Descubra NATAN',
            },
        },
        pillars: {
            title: 'Os Nossos 4 Pilares',
            items: [
                {
                    title: 'Concretude',
                    description: 'Bens reais, valor tangível. Cada EGI representa algo que existe no mundo físico.',
                },
                {
                    title: 'Equilíbrio',
                    description: 'Balanço entre economia e ambiente. Cada transação contribui para a proteção ambiental.',
                },
                {
                    title: 'Acessibilidade',
                    description: 'Tecnologia para todos. EGI torna a blockchain compreensível e utilizável por qualquer pessoa.',
                },
                {
                    title: 'Impacto Real',
                    description: 'Cada EGI gera um benefício ambiental mensurável e rastreável on-chain.',
                },
            ],
        },
        forWho: {
            title: 'Para quem',
            items: [
                { label: 'Artistas', href: '/for/artists' },
                { label: 'Colecionadores', href: '/for/collectors' },
                { label: 'Admin Pública', href: '/for/pa' },
                { label: 'Investidores', href: '/for/investors' },
            ],
        },
        finalCta: {
            text: 'Pronto para transformar seus ativos em valor certificado?',
            primaryButton: 'Explorar Ecossistema',
            secondaryButton: 'Como funciona',
            copyright: 'FlorenceEGI © 2026',
        },
        footer: {
            privacy: 'Política de Privacidade',
            terms: 'Termos de Serviço',
            cookies: 'Política de Cookies',
            rights: 'Todos os direitos reservados.',
        },
    },
    es: {
        transition: {
            headline: 'De la simple posesión.',
            subheadline: 'A la generación de valor.',
            description: 'Hoy tus bienes son estáticos. Con EGI se convierten en activos digitales dinámicos: certificados, protegidos y listos para ser intercambiados o monetizados en un mercado global.',
        },
        hero: {
            badge: 'Protocolo EGI',
            headline: 'Un EGI transforma algo que ya existe en un activo que puede generar valor en el tiempo.',
            subheadline: 'Si existe, Egizzalo. Si lo Egizzas, vale.',
            cta_primary: 'Descubre cómo',
        },
        whatIsEgi: {
            title: 'Qué es un EGI',
            cardTitle: 'Definición',
            description: 'Un EGI transforma algo que ya existe en un activo que puede generar valor en el tiempo.',
        },
        examples: {
            title: 'Qué puede ser un EGI',
            cardTitle: 'Ejemplos Concretos',
            items: [
                { icon: '💡', label: 'Una idea que quieres proteger y rentabilizar' },
                { icon: '🎨', label: 'Una obra de arte que sigue generando valor tras la venta' },
                { icon: '🏆', label: 'Un objeto de colección que crece en el tiempo' },
                { icon: '📦', label: 'Un producto que gana también en las reventas' },
                { icon: '📄', label: 'Un documento que se vuelve certificado, verificable y permanente' },
            ],
        },
        ecosystem: {
            title: 'Ecosistema',
            visualLabel: 'Hub & Spoke',
            caption: 'Arquitectura distribuida con EGI-HUB en el centro',
        },
        systems: {
            eyebrow: 'Manipuladores',
            title: 'Sistemas Operativos EGI',
            florenceArt: {
                title: 'Florence Art EGI',
                description: 'Manipula EGI para enriquecer obras de arte con CoA, Utilidad, Traits y sistemas de marketing avanzados.',
                linkText: 'Descubre Florence Art',
            },
            natan: {
                title: 'NATAN-LOC',
                description: 'Manipula EGI para certificar y autenticar actos de la Administración Pública. Cada documento se convierte en un EGI certificado on-chain.',
                linkText: 'Descubre NATAN',
            },
        },
        pillars: {
            title: 'Nuestros 4 Pilares',
            items: [
                {
                    title: 'Concreteza',
                    description: 'Bienes reales, valor tangible. Cada EGI representa algo que existe en el mundo físico.',
                },
                {
                    title: 'Equilibrio',
                    description: 'Balance entre economía y ambiente. Cada transacción contribuye a la protección ambiental.',
                },
                {
                    title: 'Accesibilidad',
                    description: 'Tecnología para todos. EGI hace que la blockchain sea comprensible y utilizable por cualquiera.',
                },
                {
                    title: 'Impacto Real',
                    description: 'Cada EGI genera un beneficio ambiental medible y rastreable on-chain.',
                },
            ],
        },
        forWho: {
            title: 'Para quién',
            items: [
                { label: 'Artistas', href: '/for/artists' },
                { label: 'Coleccionistas', href: '/for/collectors' },
                { label: 'Admin Pública', href: '/for/pa' },
                { label: 'Inversores', href: '/for/investors' },
            ],
        },
        finalCta: {
            text: '¿Listo para transformar tus activos en valor certificado?',
            primaryButton: 'Explorar Ecosistema',
            secondaryButton: 'Cómo funciona',
            copyright: 'FlorenceEGI © 2026',
        },
        footer: {
            privacy: 'Política de Privacidad',
            terms: 'Términos de Servicio',
            cookies: 'Política de Cookies',
            rights: 'Todos los derechos reservados.',
        },
    },
    fr: {
        transition: {
            headline: 'De la simple possession.',
            subheadline: 'À la création de valeur.',
            description: 'Aujourd\'hui vos biens sont statiques. Avec EGI ils deviennent des actifs numériques dynamiques : certifiés, protégés et prêts à être échangés ou monétisés sur un marché mondial.',
        },
        hero: {
            badge: 'Protocole EGI',
            headline: 'Un EGI transforme quelque chose qui existe déjà en un actif capable de générer de la valeur dans le temps.',
            subheadline: 'Si ça existe, EGI-le. Si tu l\'EGI, ça vaut.',
            cta_primary: 'Découvrir comment',
        },
        whatIsEgi: {
            title: 'Qu\'est-ce qu\'un EGI',
            cardTitle: 'Définition',
            description: 'Un EGI transforme quelque chose qui existe déjà en un actif capable de générer de la valeur dans le temps.',
        },
        examples: {
            title: 'Ce qui peut être un EGI',
            cardTitle: 'Exemples Concrets',
            items: [
                { icon: '💡', label: 'Une idée que vous voulez protéger et rentabiliser' },
                { icon: '🎨', label: 'Une œuvre d’art qui continue de générer de la valeur après la vente' },
                { icon: '🏆', label: 'Un objet de collection qui grandit dans le temps' },
                { icon: '📦', label: 'Un produit qui gagne aussi à la revente' },
                { icon: '📄', label: 'Un document qui devient certifié, vérifiable et permanent' },
            ],
        },
        ecosystem: {
            title: 'Écosystème',
            visualLabel: 'Hub & Spoke',
            caption: 'Architecture distribuée avec EGI-HUB au centre',
        },
        systems: {
            eyebrow: 'Manipulateurs',
            title: 'Systèmes d\'Exploitation EGI',
            florenceArt: {
                title: 'Florence Art EGI',
                description: 'Manipule les EGI pour enrichir les œuvres d\'art avec CoA, Utilité, Traits et systèmes marketing avancés.',
                linkText: 'Découvrir Florence Art',
            },
            natan: {
                title: 'NATAN-LOC',
                description: 'Manipule les EGI pour certifier et authentifier les actes de l\'Administration Publique. Chaque document devient un EGI certifié on-chain.',
                linkText: 'Découvrir NATAN',
            },
        },
        pillars: {
            title: 'Nos 4 Piliers',
            items: [
                {
                    title: 'Concrétude',
                    description: 'Biens réels, valeur tangible. Chaque EGI représente quelque chose qui existe dans le monde physique.',
                },
                {
                    title: 'Équilibre',
                    description: 'Équilibre entre économie et environnement. Chaque transaction contribue à la protection de l\'environnement.',
                },
                {
                    title: 'Accessibilité',
                    description: 'Technologie pour tous. EGI rend la blockchain compréhensible et utilisable par tous.',
                },
                {
                    title: 'Impact Réel',
                    description: 'Chaque EGI génère un bénéfice environnemental mesurable et traçable on-chain.',
                },
            ],
        },
        forWho: {
            title: 'Pour qui',
            items: [
                { label: 'Artistes', href: '/for/artists' },
                { label: 'Collectionneurs', href: '/for/collectors' },
                { label: 'Admin Publique', href: '/for/pa' },
                { label: 'Investisseurs', href: '/for/investors' },
            ],
        },
        finalCta: {
            text: 'Prêt à transformer vos actifs en valeur certifiée ?',
            primaryButton: 'Explorer l\'Écosystème',
            secondaryButton: 'Comment ça marche',
            copyright: 'FlorenceEGI © 2026',
        },
        footer: {
            privacy: 'Politique de Confidentialité',
            terms: 'Conditions d\'Utilisation',
            cookies: 'Politique de Cookies',
            rights: 'Tous droits réservés.',
        },
    },
    de: {
        transition: {
            headline: 'Vom bloßen Besitz.',
            subheadline: 'Zur Wertschöpfung.',
            description: 'Heute sind Ihre Güter statisch. Mit EGI werden sie zu dynamischen digitalen Vermögenswerten: zertifiziert, geschützt und bereit, auf einem globalen Markt gehandelt oder monetarisiert zu werden.',
        },
        hero: {
            badge: 'EGI-Protokoll',
            headline: 'Ein EGI verwandelt etwas, das bereits existiert, in einen Vermögenswert, der im Laufe der Zeit Wert generieren kann.',
            subheadline: 'Wenn es existiert, EGI es. Wenn du es EGIsierst, ist es wertvoll.',
            cta_primary: 'Erfahren Sie wie',
        },
        whatIsEgi: {
            title: 'Was ist ein EGI',
            cardTitle: 'Definition',
            description: 'Ein EGI verwandelt etwas, das bereits existiert, in einen Vermögenswert, der im Laufe der Zeit Wert generieren kann.',
        },
        examples: {
            title: 'Was kann ein EGI sein',
            cardTitle: 'Konkrete Beispiele',
            items: [
                { icon: '💡', label: 'Eine Idee, die Sie schützen und monetarisieren wollen' },
                { icon: '🎨', label: 'Ein Kunstwerk, das auch nach dem Verkauf Werte generiert' },
                { icon: '🏆', label: 'Ein Sammlerstück, das im Laufe der Zeit wächst' },
                { icon: '📦', label: 'Ein Produkt, das auch beim Wiederverkauf verdient' },
                { icon: '📄', label: 'Ein Dokument, das zertifiziert, überprüfbar und dauerhaft wird' },
            ],
        },
        ecosystem: {
            title: 'Ökosystem',
            visualLabel: 'Hub & Spoke',
            caption: 'Verteilte Architektur mit EGI-HUB im Zentrum',
        },
        systems: {
            eyebrow: 'Manipulatoren',
            title: 'EGI-Betriebssysteme',
            florenceArt: {
                title: 'Florence Art EGI',
                description: 'Manipuliert EGI, um Kunstwerke mit CoA, Utility, Traits und fortschrittlichen Marketingsystemen anzureichern.',
                linkText: 'Entdecken Sie Florence Art',
            },
            natan: {
                title: 'NATAN-LOC',
                description: 'Manipuliert EGI, um Akte der öffentlichen Verwaltung zu zertifizieren und authentifizieren. Jedes Dokument wird ein On-Chain-zertifiziertes EGI.',
                linkText: 'Entdecken Sie NATAN',
            },
        },
        pillars: {
            title: 'Unsere 4 Säulen',
            items: [
                {
                    title: 'Konkretheit',
                    description: 'Reale Güter, greifbarer Wert. Jedes EGI repräsentiert etwas, das in der physischen Welt existiert.',
                },
                {
                    title: 'Gleichgewicht',
                    description: 'Balance zwischen Wirtschaft und Umwelt. Jede Transaktion trägt zum Umweltschutz bei.',
                },
                {
                    title: 'Zugänglichkeit',
                    description: 'Technologie für alle. EGI macht Blockchain für jeden verständlich und nutzbar.',
                },
                {
                    title: 'Reale Wirkung',
                    description: 'Jedes EGI generiert einen messbaren und on-chain rückverfolgbaren Umweltnutzen.',
                },
            ],
        },
        forWho: {
            title: 'Für wen',
            items: [
                { label: 'Künstler', href: '/for/artists' },
                { label: 'Sammler', href: '/for/collectors' },
                { label: 'Öffentliche Verw.', href: '/for/pa' },
                { label: 'Investoren', href: '/for/investors' },
            ],
        },
        finalCta: {
            text: 'Bereit, Ihre Vermögenswerte in zertifizierten Wert zu verwandeln?',
            primaryButton: 'Ökosystem erkunden',
            secondaryButton: 'Wie es funktioniert',
            copyright: 'FlorenceEGI © 2026',
        },
        footer: {
            privacy: 'Datenschutzrichtlinie',
            terms: 'Nutzungsbedingungen',
            cookies: 'Cookie-Richtlinie',
            rights: 'Alle Rechte vorbehalten.',
        },
    },
};
