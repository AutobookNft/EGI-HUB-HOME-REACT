import React from 'react';
import { useUIStore } from '@/stores/useUIStore';

export const CorporatePage: React.FC = () => {
    const navigate = useUIStore((state) => state.navigate);

    return (
        <div className="h-screen bg-dark text-white overflow-y-scroll">
            {/* Back Button - Mobile optimized */}
            <div className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-light/10 p-4">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 px-3 py-2 bg-dark-light border border-light rounded-lg hover:bg-light/10 transition-colors active:scale-95"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-xs uppercase tracking-wider">Indietro</span>
                </button>
            </div>

            <div className="px-4 py-8 pb-16">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-3">CORPORATE</h1>
                    <p className="text-lg sm:text-xl text-primary">
                        Frangette · Team · Legal · Contatti
                    </p>
                </div>

                {/* Intro */}
                <section className="mb-10">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-3">Chi c'è dietro e chi risponde?</h2>
                    <p className="text-base text-text-muted leading-relaxed">
                        Trasparenza totale su chi siamo, come operiamo e come contattarci.
                        Florence EGI non è solo tecnologia: è un organismo con governance duale
                        che bilancia crescita economica e impatto sociale.
                    </p>
                </section>

                {/* Governance Duale */}
                <section className="mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 pb-3 border-b border-light">
                        Governance Duale
                    </h2>
                    <p className="text-base text-text-muted mb-8 leading-relaxed">
                        Equilibrio tra <strong className="text-white">impresa</strong> e{' '}
                        <strong className="text-white">missione</strong> attraverso due entità complementari.
                    </p>

                    {/* Florence EGI SRL */}
                    <div className="mb-8 p-5 bg-dark-light rounded-xl border border-primary/30">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1">
                                    Florence EGI SRL
                                </h3>
                                <p className="text-xs uppercase tracking-wider text-primary/60">
                                    Motore Operativo
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-base font-semibold mb-2 text-white">Responsabilità:</h4>
                                <ul className="space-y-1.5 text-sm text-text-muted">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                        <span>Sviluppo tecnologico</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                        <span>Partnership strategiche</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                        <span>Marketing e revenue</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                        <span>Crescita scalabile</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                        <span>Gestione operativa quotidiana</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-3 border-t border-light/20">
                                <p className="text-xs">
                                    <strong className="text-white">Focus:</strong>{' '}
                                    <span className="text-primary">Sostenibilità economica e innovazione tecnologica</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Associazione Frangette APS */}
                    <div className="mb-8 p-5 bg-dark-light rounded-xl border border-secondary/30">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0" />
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-1">
                                    Associazione Frangette APS
                                </h3>
                                <p className="text-xs uppercase tracking-wider text-secondary/60">
                                    Custode dei Valori
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-base font-semibold mb-2 text-white">Responsabilità:</h4>
                                <ul className="space-y-1.5 text-sm text-text-muted">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                                        <span>Vigila sui principi fondativi</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                                        <span>
                                            <strong className="text-white">Tutela destinazione 20% EPP</strong>{' '}
                                            (obbligo statutario)
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                                        <span>Garantisce coerenza artistico-sociale</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                                        <span>Protegge la missione ambientale</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                                        <span>
                                            <strong className="text-white">Potere di VETO</strong>{' '}
                                            su decisioni contrarie ai valori
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-3 border-t border-light/20">
                                <p className="text-xs">
                                    <strong className="text-white">Focus:</strong>{' '}
                                    <span className="text-secondary">Etica, impatto sociale e ambientale</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Come Funziona */}
                    <div className="mb-8 p-5 bg-gradient-to-br from-dark-light to-dark rounded-xl border border-light/20">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4">Come Funziona</h3>

                        <div className="flex flex-col items-center gap-4 mb-6">
                            <div className="w-full text-center">
                                <div className="p-4 flex items-center justify-center border-2 border-primary rounded-lg bg-dark-light mb-2">
                                    <span className="text-xs font-bold text-primary">Florence EGI SRL</span>
                                </div>
                                <p className="text-xs text-text-muted uppercase">Operativa</p>
                            </div>

                            <div className="flex flex-col items-center gap-1">
                                <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                                <p className="text-xs text-white/30 uppercase">Dialogo</p>
                            </div>

                            <div className="w-full text-center">
                                <div className="p-4 flex items-center justify-center border-2 border-secondary rounded-lg bg-dark-light mb-2">
                                    <span className="text-xs font-bold text-secondary">Associazione APS</span>
                                </div>
                                <p className="text-xs text-text-muted uppercase">Etica</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                                <p className="text-sm font-semibold text-green-400 mb-1">✓ Se Allineata</p>
                                <p className="text-xs text-text-muted">
                                    Decisione approvata e implementata
                                </p>
                            </div>
                            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                                <p className="text-sm font-semibold text-red-400 mb-1">✗ Se NON Allineata</p>
                                <p className="text-xs text-text-muted">
                                    <strong className="text-white">VETO</strong> - Decisione bloccata
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Esempio Pratico */}
                    <div className="mb-8 p-5 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                        <h3 className="text-lg font-bold mb-3 text-amber-400">📋 Esempio Pratico</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-0.5 flex-shrink-0 text-xs">SRL:</span>
                                <p className="text-text-muted text-xs">
                                    "Ridurre quota EPP da 20% a 10% per aumentare margini"
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-secondary font-bold mt-0.5 flex-shrink-0 text-xs">APS:</span>
                                <p className="text-red-400 font-semibold text-xs">
                                    <strong>VETO</strong> (viola statuto e missione)
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-white/40 font-bold mt-0.5 flex-shrink-0 text-xs">Risultato:</span>
                                <p className="text-white text-xs">Decisione NON passa</p>
                            </div>
                        </div>
                    </div>

                    {/* Benefici */}
                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 bg-dark-light rounded-lg border border-light/10">
                            <h4 className="font-semibold mb-1.5 text-primary text-sm">✓ Previene Greenwashing</h4>
                            <p className="text-xs text-text-muted">
                                Impossibile ridurre impegni ambientali per profitto
                            </p>
                        </div>
                        <div className="p-4 bg-dark-light rounded-lg border border-light/10">
                            <h4 className="font-semibold mb-1.5 text-primary text-sm">✓ Garantisce Impatto Reale</h4>
                            <p className="text-xs text-text-muted">
                                20% EPP obbligatorio per statuto APS
                            </p>
                        </div>
                        <div className="p-4 bg-dark-light rounded-lg border border-light/10">
                            <h4 className="font-semibold mb-1.5 text-primary text-sm">✓ Tutela Valori Fondativi</h4>
                            <p className="text-xs text-text-muted">
                                Mission etica protetta indipendentemente dal business
                            </p>
                        </div>
                        <div className="p-4 bg-dark-light rounded-lg border border-light/10">
                            <h4 className="font-semibold mb-1.5 text-primary text-sm">✓ Equilibrio Profit/Purpose</h4>
                            <p className="text-xs text-text-muted">
                                Crescita economica sostenibile e responsabile
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team & Contacts Section */}
                <section className="mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 pb-3 border-b border-light">
                        Team & Contatti
                    </h2>

                    <div className="space-y-4">
                        <div className="p-5 bg-dark-light rounded-lg border border-light/10">
                            <h3 className="text-lg font-semibold mb-2">👥 Team Members</h3>
                            <p className="text-text-muted text-sm mb-2">
                                Chi lavora al progetto
                            </p>
                            <p className="text-xs text-white/40">📧 Coming soon</p>
                        </div>

                        <div className="p-5 bg-dark-light rounded-lg border border-light/10">
                            <h3 className="text-lg font-semibold mb-2">⚖️ Legal Framework</h3>
                            <p className="text-text-muted text-sm mb-2">
                                Struttura legale e compliance
                            </p>
                            <p className="text-xs text-white/40">📧 Coming soon</p>
                        </div>

                        <div className="p-5 bg-dark-light rounded-lg border border-light/10">
                            <h3 className="text-lg font-semibold mb-2">📧 Contatti Diretti</h3>
                            <p className="text-text-muted text-sm mb-2">
                                Come raggiungerci
                            </p>
                            <p className="text-xs text-white/40">📧 Coming soon</p>
                        </div>

                        <div className="p-5 bg-dark-light rounded-lg border border-light/10">
                            <h3 className="text-lg font-semibold mb-2">🏢 Sede Legale</h3>
                            <p className="text-text-muted text-sm">
                                Florence EGI SRL<br />
                                Italia
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-light/20 text-center">
                    <p className="text-base mb-3 font-semibold">
                        Trasparenza è il nostro principio fondante.
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed">
                        Florence EGI certifica, non custodisce. Facilita, non intermedia. Garantisce trasparenza, non opacità.
                    </p>
                </div>
            </div>
        </div>
    );
};
