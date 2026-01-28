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
        egiPt: {
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
    epp_section: {
        title: string;
        description: string;
        items: Array<{
            title: string;
            description: string;
            image: string;
        }>;
    };
}

export const homepageContent: Record<SupportedLocale, HomepageContent> = {
    it: {
        transition: {
            headline: 'Dal semplice possesso.',
            subheadline: 'Alla generazione di valore.',
            description: 'EGI sta per "Environmental Good Invent". È un involucro digitale che custodisce la tua opera, la tua idea o il tuo prodotto, arricchendolo con attributi distintivi e un certificato di autenticità immutabile. Può connettere il tuo asset a innumerevoli utility personalizzate. Piattaforme come Florence Art e NATAN-LOC sono solo i primi sistemi di manipolazione in grado di gestire e valorizzare gli EGI.',
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
            egiPt: {
                title: 'EGI-PT',
                description: 'Piattaforma di donazione libera e circolazione no-fee di cloni digitai EGI unici. Zero guadagni, solo marketing virale e visibilità tramite cloni puri.',
                linkText: 'Scopri EGI-PT',
            },
        },
        pillars: {
            title: 'I Nostri 3 Pilastri',
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
                    title: 'Accessibilità & Zero Cost',
                    description: 'Tecnologia semplice per tutti. Inizia a certificare i tuoi asset senza costi iniziali.',
                },
            ],
        },
        epp_section: {
            title: 'EPP - Environmental Protection Project',
            description: 'Il cuore pulsante di EGI. Un\'economia progettata per rigenerare il pianeta: ogni transazione finanzia direttamente il ripristino degli ecosistemi.',
            items: [
                {
                    title: 'Aquatic Plastic Removal',
                    description: 'Questa campagna si dedica alla pulizia delle acque del pianeta, rimuovendo la plastica da mari, oceani, laghi e corsi d\'acqua. Gli EGI supportano iniziative che affrontano la crescente minaccia dell\'inquinamento da plastica, contribuendo alla purificazione degli ecosistemi acquatici vitali per la biodiversità e la salute umana.',
                    image: '/images/epp_campaign_aquatic.png',
                },
                {
                    title: 'Appropriate Restoration Forestry',
                    description: 'Questo progetto si concentra sul rimboschimento e la ricreazione di foreste e boschi, rispettando la biodiversità e l\'habitat naturale. Gli EGI finanziano sforzi per ripristinare questi preziosi ecosistemi, fondamentali per l\'equilibrio climatico e l\'habitat di innumerevoli specie.',
                    image: '/images/epp_campaign_forest.png',
                },
                {
                    title: 'Bee Population Enhancement',
                    description: 'Gli EGI partecipano attivamente al sostegno della popolazione delle api, essenziali per la pollinizzazione e la biodiversità. Questa campagna mira a contrastare il declino delle api, sostenendo progetti che promuovono la loro salute e l\'accrescimento delle loro popolazioni.',
                    image: '/images/epp_campaign_bees.png',
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
            egiPt: {
                title: 'EGI-PT',
                description: 'Free donation platform and no-fee circulation of unique EGI digital clones. Zero earnings, only viral marketing and visibility via pure clones.',
                linkText: 'Discover EGI-PT',
            },
        },
        pillars: {
            title: 'Our 3 Pillars',
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
                    title: 'Accessibility & Zero Cost',
                    description: 'Simple technology for everyone. Start certifying your assets with no upfront costs.',
                },
            ],
        },
        epp_section: {
            title: 'EPP - Environmental Protection Project',
            description: 'The beating heart of EGI. An economy designed to regenerate the planet: every transaction directly funds ecosystem restoration.',
            items: [
                {
                    title: 'Aquatic Plastic Removal',
                    description: 'Dedicated to cleaning the planet\'s waters by removing plastic from seas, oceans, lakes, and rivers. EGI supports initiatives tackling plastic pollution, purifying vital aquatic ecosystems.',
                    image: '/images/epp_campaign_aquatic.png',
                },
                {
                    title: 'Appropriate Restoration Forestry',
                    description: 'Focused on reforestation and recreating forests while respecting biodiversity. EGI funds efforts to restore these precious ecosystems, fundamental for climate balance.',
                    image: '/images/epp_campaign_forest.png',
                },
                {
                    title: 'Bee Population Enhancement',
                    description: 'Actively supporting bee populations, essential for pollination. This campaign combats bee decline by funding projects that promote their health and population growth.',
                    image: '/images/epp_campaign_bees.png',
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
            egiPt: {
                title: 'EGI-PT',
                description: 'Plataforma de doação livre e circulação sem taxas de clones digitais EGI únicos. Zero ganhos, apenas marketing viral e visibilidade via clones puros.',
                linkText: 'Descubra EGI-PT',
            },
        },
        pillars: {
            title: 'Os Nossos 3 Pilares',
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
                    title: 'Acessibilidade e Custo Zero',
                    description: 'Tecnologia simples para todos. Comece a certificar seus ativos sem custos iniciais.',
                },
            ],
        },
        epp_section: {
            title: 'EPP - Environmental Protection Project',
            description: 'O coração pulsante do EGI. Uma economia projetada para regenerar o planeta: cada transação financia diretamente a restauração dos ecossistemas.',
            items: [
                {
                    title: 'Remoção de Plástico Aquático',
                    description: 'Dedicada à limpeza das águas do planeta, removendo plásticos de mares, oceanos e rios. EGI apoia iniciativas vitais para a purificação dos ecossistemas aquáticos.',
                    image: '/images/epp_campaign_aquatic.png',
                },
                {
                    title: 'Reflorestamento Apropriado',
                    description: 'Focada no reflorestamento respeitando a biodiversidade. EGI financia esforços para restaurar estes ecossistemas preciosos, fundamentais para o equilíbrio climático.',
                    image: '/images/epp_campaign_forest.png',
                },
                {
                    title: 'Aumento da População de Abelhas',
                    description: 'Apoio ativo às populações de abelhas, essenciais para a polinização. Esta campanha combate o declínio das abelhas promovendo sua saúde e crescimento.',
                    image: '/images/epp_campaign_bees.png',
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
            egiPt: {
                title: 'EGI-PT',
                description: 'Plataforma de donación libre y circulación sin tarifas de clones digitales EGI únicos. Cero ganancias, solo marketing viral y visibilidad a través de clones puros.',
                linkText: 'Descubre EGI-PT',
            },
        },
        pillars: {
            title: 'Nuestros 3 Pilares',
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
                    title: 'Accesibilidad y Costo Cero',
                    description: 'Tecnología simple para todos. Comienza a certificar tus activos sin costos iniciales.',
                },
            ],
        },
        epp_section: {
            title: 'EPP - Environmental Protection Project',
            description: 'El corazón palpitante de EGI. Una economía diseñada para regenerar el planeta: cada transacción financia directamente la restauración de los ecosistemas.',
            items: [
                {
                    title: 'Eliminación de Plástico Acuático',
                    description: 'Dedicada a limpiar las aguas del planeta, eliminando plásticos de mares y ríos. EGI apoya iniciativas vitales para purificar los ecosistemas acuáticos.',
                    image: '/images/epp_campaign_aquatic.png',
                },
                {
                    title: 'Reforestación Apropiada',
                    description: 'Centrada en la reforestación respetando la biodiversidad. EGI financia esfuerzos para restaurar estos ecosistemas preciosos, fundamentales para el clima.',
                    image: '/images/epp_campaign_forest.png',
                },
                {
                    title: 'Mejora de Población de Abejas',
                    description: 'Apoyo activo a las poblaciones de abejas, esenciales para la polinización. Esta campaña combate el declive de las abejas promoviendo su salud.',
                    image: '/images/epp_campaign_bees.png',
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
            egiPt: {
                title: 'EGI-PT',
                description: 'Plateforme de don libre et circulation sans frais de clones numériques EGI uniques. Zéro gain, uniquement du marketing viral et de la visibilité via des clones purs.',
                linkText: 'Découvrir EGI-PT',
            },
        },
        pillars: {
            title: 'Nos 3 Piliers',
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
                    title: 'Accessibilité et Zéro Coût',
                    description: 'Technologie simple pour tous. Commencez à certifier vos actifs sans frais initiaux.',
                },
            ],
        },
        epp_section: {
            title: 'EPP - Environmental Protection Project',
            description: 'Le cœur battant d\'EGI. Une économie conçue pour régénérer la planète : chaque transaction finance directement la restauration des écosystèmes.',
            items: [
                {
                    title: 'Élimination du Plastique Aquatique',
                    description: 'Dédiée au nettoyage des eaux, éliminant le plastique des mers et rivières. EGI soutient des initiatives vitales pour purifier les écosystèmes aquatiques.',
                    image: '/images/epp_campaign_aquatic.png',
                },
                {
                    title: 'Reforestation Appropriée',
                    description: 'Axée sur la reforestation respectant la biodiversité. EGI finance les efforts pour restaurer ces écosystèmes précieux, fondamentaux pour le climat.',
                    image: '/images/epp_campaign_forest.png',
                },
                {
                    title: 'Amélioration de la Population d\'Abeilles',
                    description: 'Soutien actif aux populations d\'abeilles, essentielles pour la pollinisation. Cette campagne combat le déclin des abeilles en promouvant leur santé.',
                    image: '/images/epp_campaign_bees.png',
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
            egiPt: {
                title: 'EGI-PT',
                description: 'Plattform für freie Spenden und gebührenfreie Zirkulation einzigartiger digitaler EGI-Klone. Null Einnahmen, nur virales Marketing und Sichtbarkeit durch reine Klone.',
                linkText: 'Entdecke EGI-PT',
            },
        },
        pillars: {
            title: 'Unsere 3 Säulen',
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
                    title: 'Zugänglichkeit & Null Kosten',
                    description: 'Einfache Technologie für alle. Beginnen Sie ohne Vorlaufkosten, Ihre Vermögenswerte zu zertifizieren.',
                },
            ],
        },
        epp_section: {
            title: 'EPP - Environmental Protection Project',
            description: 'Das schlagende Herz von EGI. Eine Wirtschaft zur Regeneration des Planeten: Jede Transaktion finanziert direkt die Wiederherstellung von Ökosystemen.',
            items: [
                {
                    title: 'Entfernung von Wasserplastik',
                    description: 'Gewidmet der Reinigung der Gewässer von Plastik. EGI unterstützt Initiativen zur Reinigung lebenswichtiger aquatischer Ökosysteme.',
                    image: '/images/epp_campaign_aquatic.png',
                },
                {
                    title: 'Angemessene Wiederaufforstung',
                    description: 'Fokussiert auf Wiederaufforstung unter Respektierung der Biodiversität. EGI finanziert die Wiederherstellung dieser für das Klima wichtigen Ökosysteme.',
                    image: '/images/epp_campaign_forest.png',
                },
                {
                    title: 'Förderung der Bienenpopulation',
                    description: 'Aktive Unterstützung der Bienenpopulationen, essenziell für die Bestäubung. Diese Kampagne bekämpft das Bienensterben.',
                    image: '/images/epp_campaign_bees.png',
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
