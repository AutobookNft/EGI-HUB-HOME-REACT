import { useSidebarScroll } from '@/hooks/useSidebarScroll';

export function DesktopPlatformSidebar() {
    const { scrollRef } = useSidebarScroll();

    return (
        <div className="fixed right-0 top-0 h-screen overflow-hidden z-30 pointer-events-none" style={{ width: '25vw', minWidth: '360px' }}>
            <div
                ref={scrollRef}
                className="h-full overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gold/30 bg-black/95 backdrop-blur-xl border-l border-white/10 pointer-events-auto"
            >
                {/* Hero Section */}
                <section className="min-h-screen flex flex-col justify-center px-12 py-20">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-5xl font-rajdhani font-bold text-gold tracking-wider">
                                PLATFORM
                            </h1>
                            <p className="text-xl text-white/80 font-light leading-relaxed">
                                Sistemi Operativi per la Manipolazione degli EGI
                            </p>
                        </div>

                        <div className="w-20 h-1 bg-gradient-to-r from-gold to-transparent"></div>

                        <p className="text-lg text-white/60 leading-relaxed">
                            Le Platform EGI sono infrastrutture software progettate per creare, gestire e
                            trasformare asset fisici in token digitali certificati. Ogni piattaforma è
                            specializzata per un settore specifico.
                        </p>
                    </div>
                </section>

                {/* What Are Platforms Section */}
                <section className="min-h-screen px-12 py-20 border-t border-white/5">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-rajdhani font-bold text-white">
                                Cosa Sono le Platform
                            </h2>
                            <div className="w-16 h-1 bg-gold"></div>
                        </div>

                        <div className="space-y-8 text-white/70 leading-relaxed">
                            <p>
                                Le Platform EGI sono <span className="text-gold font-semibold">ecosistemi verticali</span> che
                                applicano la tecnologia di certificazione 4D a domini specifici:
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 rounded-lg border border-gold/20">
                                    <h3 className="text-xl font-rajdhani text-gold mb-3">Florence EGI</h3>
                                    <p className="text-white/60">
                                        Marketplace d'arte con certificazione 4D per opere fisiche e digitali.
                                        NFT con royalties perpetue per artisti e co-creator.
                                    </p>
                                </div>

                                <div className="p-6 bg-white/5 rounded-lg border border-cyan/20">
                                    <h3 className="text-xl font-rajdhani text-cyan mb-3">NATAN LOC</h3>
                                    <p className="text-white/60">
                                        Certificazione documentale per Pubblica Amministrazione con albo pretorio
                                        blockchain e trasparenza immutabile.
                                    </p>
                                </div>

                                <div className="p-6 bg-white/5 rounded-lg border border-purple/20">
                                    <h3 className="text-xl font-rajdhani text-purple mb-3">NATAN COMPANY</h3>
                                    <p className="text-white/60">
                                        Suite aziendale per supply chain, invoice tracking e compliance ESG su blockchain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operating Systems Section */}
                <section className="min-h-screen px-12 py-20 border-t border-white/5">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-rajdhani font-bold text-white">
                                Sistemi Operativi Manipolatori
                            </h2>
                            <div className="w-16 h-1 bg-gold"></div>
                        </div>

                        <div className="space-y-8">
                            <p className="text-white/70 leading-relaxed">
                                Ogni Platform è un <span className="text-gold">sistema operativo specializzato</span> che
                                orchestra complesse operazioni di trasformazione EGI:
                            </p>

                            <div className="grid grid-cols-1 gap-6">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-gold"></div>
                                        <h4 className="text-lg font-rajdhani text-white">Acquisizione Dati</h4>
                                    </div>
                                    <p className="text-white/60 pl-5">
                                        Scansione 4D, metadata extraction, certificazione di autenticità
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-cyan"></div>
                                        <h4 className="text-lg font-rajdhani text-white">Tokenizzazione</h4>
                                    </div>
                                    <p className="text-white/60 pl-5">
                                        Creazione EGI wrapper, smart contract deployment, registro blockchain
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-purple"></div>
                                        <h4 className="text-lg font-rajdhani text-white">Gestione Lifecycle</h4>
                                    </div>
                                    <p className="text-white/60 pl-5">
                                        Trasferimenti ownership, royalty distribution, audit trail completo
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                        <h4 className="text-lg font-rajdhani text-white">Valore Dinamico</h4>
                                    </div>
                                    <p className="text-white/60 pl-5">
                                        Price discovery, valutazione mercato, liquidità garantita
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Capabilities Section */}
                <section className="min-h-screen px-12 py-20 border-t border-white/5">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-rajdhani font-bold text-white">
                                Funzionalità e Capacità
                            </h2>
                            <div className="w-16 h-1 bg-gold"></div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-8 bg-gradient-to-br from-gold/10 to-transparent rounded-xl border border-gold/30">
                                <h3 className="text-2xl font-rajdhani text-gold mb-4">Interoperabilità</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Tutte le Platform comunicano via standard EGI, permettendo cross-platform transactions
                                    e composability tra ecosistemi diversi.
                                </p>
                            </div>

                            <div className="p-8 bg-gradient-to-br from-cyan/10 to-transparent rounded-xl border border-cyan/30">
                                <h3 className="text-2xl font-rajdhani text-cyan mb-4">Multi-Tenant</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Architettura scalabile che supporta migliaia di utenti e organizzazioni simultaneamente
                                    con isolamento dati garantito.
                                </p>
                            </div>

                            <div className="p-8 bg-gradient-to-br from-purple/10 to-transparent rounded-xl border border-purple/30">
                                <h3 className="text-2xl font-rajdhani text-purple mb-4">AI-Powered</h3>
                                <p className="text-white/70 leading-relaxed">
                                    Motori AI integrati per valutazione automatica, fraud detection, recommendation systems
                                    e customer support intelligente.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer Section */}
                <section className="px-12 py-16 border-t border-white/5">
                    <div className="space-y-8">
                        <div className="text-center space-y-4">
                            <p className="text-white/40 text-sm tracking-widest">
                                FLORENCE EGI ECOSYSTEM
                            </p>
                            <p className="text-white/60">
                                Platform Network in Espansione
                            </p>
                        </div>

                        <div className="flex justify-center gap-8 text-sm text-white/40">
                            <a href="#" className="hover:text-gold transition-colors">Documentazione</a>
                            <a href="#" className="hover:text-gold transition-colors">API Access</a>
                            <a href="#" className="hover:text-gold transition-colors">Developer Hub</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
