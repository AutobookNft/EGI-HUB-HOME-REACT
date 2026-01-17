import React from 'react';
import { useI18n } from '@/i18n';
import { useUIStore } from '@/stores/useUIStore';

export const CorporatePage: React.FC = () => {
    const { t } = useI18n();
    const navigate = useUIStore((state) => state.navigate);

    return (
        <div className="min-h-screen bg-dark text-white">
            {/* Back Button */}
            <div className="fixed top-8 left-8 z-50">
                <button
                    onClick={() => navigate('/hub-mobile')}
                    className="flex items-center gap-2 px-4 py-2 bg-dark-light border border-light rounded-lg hover:bg-light/10 transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm uppercase tracking-wider">Indietro</span>
                </button>
            </div>

            <div className="max-w-5xl mx-auto px-8 py-16">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-6xl font-bold mb-4">CORPORATE</h1>
                    <p className="text-2xl text-primary">
                        Frangette · Team · Legal · Contatti
                    </p>
                </div>

                {/* Intro */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold mb-4">Chi c'è dietro e chi risponde?</h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                        Trasparenza totale su chi siamo, come operiamo e come contattarci.
                        Florence EGI non è solo tecnologia: è un organismo con governance duale
                        che bilancia crescita economica e impatto sociale.
                    </p>
                </section>

                {/* Governance Duale */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold mb-6 pb-4 border-b border-light">
                        Governance Duale
                    </h2>
                    <p className="text-lg text-text-muted mb-12 leading-relaxed">
                        Equilibrio tra <strong className="text-white">impresa</strong> e{' '}
                        <strong className="text-white">missione</strong> attraverso due entità complementari.
                    </p>

                    {/* Florence EGI SRL */}
                    <div className="mb-12 p-8 bg-dark-light rounded-xl border border-primary/30">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-3 h-3 mt-2 rounded-full bg-primary" />
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-2">
                                    Florence EGI SRL
                                </h3>
                                <p className="text-sm uppercase tracking-wider text-primary/60">
                                    Motore Operativo
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-3 text-white">Responsabilità:</h4>
                                <ul className="space-y-2 text-text-muted">
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Sviluppo tecnologico</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Partnership strategiche</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Marketing e revenue</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Crescita scalabile</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-primary mt-1">•</span>
                                        <span>Gestione operativa quotidiana</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-light/20">
                                <p className="text-sm">
                                    <strong className="text-white">Focus:</strong>{' '}
                                    <span className="text-primary">Sostenibilità economica e innovazione tecnologica</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Associazione Frangette APS */}
                    <div className="mb-12 p-8 bg-dark-light rounded-xl border border-secondary/30">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="w-3 h-3 mt-2 rounded-full bg-secondary" />
                            <div>
                                <h3 className="text-2xl font-bold text-secondary mb-2">
                                    Associazione Frangette APS
                                </h3>
                                <p className="text-sm uppercase tracking-wider text-secondary/60">
                                    Custode dei Valori
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-semibold mb-3 text-white">Responsabilità:</h4>
                                <ul className="space-y-2 text-text-muted">
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Vigila sui principi fondativi</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>
                                            <strong className="text-white">Tutela destinazione 20% EPP</strong>{' '}
                                            (obbligo statutario)
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Garantisce coerenza artistico-sociale</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>Protegge la missione ambientale</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-secondary mt-1">•</span>
                                        <span>
                                            <strong className="text-white">Potere di VETO</strong>{' '}
                                            su decisioni contrarie ai valori
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-light/20">
                                <p className="text-sm">
                                    <strong className="text-white">Focus:</strong>{' '}
                                    <span className="text-secondary">Etica, impatto sociale e ambientale</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Come Funziona */}
                    <div className="mb-12 p-8 bg-gradient-to-br from-dark-light to-dark rounded-xl border border-light/20">
                        <h3 className="text-2xl font-bold mb-6">Come Funziona</h3>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                            <div className="text-center">
                                <div className="w-48 h-32 flex items-center justify-center border-2 border-primary rounded-lg bg-dark-light mb-4">
                                    <span className="text-sm font-bold text-primary">Florence EGI SRL</span>
                                </div>
                                <p className="text-xs text-text-muted uppercase">Operativa</p>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                                <p className="text-xs text-white/30 uppercase">Dialogo</p>
                            </div>

                            <div className="text-center">
                                <div className="w-48 h-32 flex items-center justify-center border-2 border-secondary rounded-lg bg-dark-light mb-4">
                                    <span className="text-sm font-bold text-secondary">Associazione APS</span>
                                </div>
                                <p className="text-xs text-text-muted uppercase">Etica</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-lg">
                                <p className="text-sm font-semibold text-green-400 mb-2">✓ Se Allineata</p>
                                <p className="text-sm text-text-muted">
                                    Decisione approvata e implementata
                                </p>
                            </div>
                            <div className="p-6 bg-red-500/10 border border-red-500/30 rounded-lg">
                                <p className="text-sm font-semibold text-red-400 mb-2">✗ Se NON Allineata</p>
                                <p className="text-sm text-text-muted">
                                    <strong className="text-white">VETO</strong> - Decisione bloccata
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Esempio Pratico */}
                    <div className="mb-12 p-8 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                        <h3 className="text-xl font-bold mb-4 text-amber-400">📋 Esempio Pratico</h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <span className="text-primary font-bold mt-1">SRL propone:</span>
                                <p className="text-text-muted">
                                    "Ridurre quota EPP da 20% a 10% per aumentare margini"
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-secondary font-bold mt-1">APS risponde:</span>
                                <p className="text-red-400 font-semibold">
                                    <strong>VETO</strong> (viola statuto e missione)
                                </p>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-white/40 font-bold mt-1">Risultato:</span>
                                <p className="text-white">Decisione NON passa</p>
                            </div>
                        </div>
                    </div>

                    {/* Benefici */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-dark-light rounded-lg border border-light/10">
                            <h4 className="font-semibold mb-2 text-primary">✓ Previene Greenwashing</h4>
                            <p className="text-sm text-text-muted">
                                Impossibile ridurre impegni ambientali per profitto
                            </p>
                        </div>
                        <div className="p-6 bg-dark-light rounded-lg border border-light/10">
                            <h4 className="font-semibold mb-2 text-primary">✓ Garantisce Impatto Reale</h4>
                            <p className="text-sm text-text-muted">
                                20% EPP obbligatorio per statuto APS
                            </p>
                        </div>
                        <div className="p-6 bg-dark-light rounded-lg border border-light/10">
                            <h4 className="font-semibold mb-2 text-primary">✓ Tutela Valori Fondativi</h4>
                            <p className="text-sm text-text-muted">
                                Mission etica protetta indipendentemente dal business
                            </p>
                        </div>
                        <div className="p-6 bg-dark-light rounded-lg border border-light/10">
                            <h4 className="font-semibold mb-2 text-primary">✓ Equilibrio Profit/Purpose</h4>
                            <p className="text-sm text-text-muted">
                                Crescita economica sostenibile e responsabile
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team & Contacts Section */}
                <section className="mb-16">
                    <h2 className="text-4xl font-bold mb-6 pb-4 border-b border-light">
                        Team & Contatti
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-6 bg-dark-light rounded-lg border border-light/10">
                            <h3 className="text-xl font-semibold mb-4">👥 Team Members</h3>
                            <p className="text-text-muted text-sm mb-4">
                                Chi lavora al progetto
                            </p>
                            <p className="text-xs text-white/40">📧 Coming soon</p>
                        </div>

                        <div className="p-6 bg-dark-light rounded-lg border border-light/10">
                            <h3 className="text-xl font-semibold mb-4">⚖️ Legal Framework</h3>
                            <p className="text-text-muted text-sm mb-4">
                                Struttura legale e compliance
                            </p>
                            <p className="text-xs text-white/40">📧 Coming soon</p>
                        </div>

                        <div className="p-6 bg-dark-light rounded-lg border border-light/10">
                            <h3 className="text-xl font-semibold mb-4">📧 Contatti Diretti</h3>
                            <p className="text-text-muted text-sm mb-4">
                                Come raggiungerci
                            </p>
                            <p className="text-xs text-white/40">📧 Coming soon</p>
                        </div>

                        <div className="p-6 bg-dark-light rounded-lg border border-light/10">
                            <h3 className="text-xl font-semibold mb-4">🏢 Sede Legale</h3>
                            <p className="text-text-muted text-sm">
                                Florence EGI SRL<br />
                                Italia
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-light/20 text-center">
                    <p className="text-lg mb-4">
                        <strong>Trasparenza è il nostro principio fondante.</strong>
                    </p>
                    <p className="text-sm text-text-muted">
                        Florence EGI certifica, non custodisce. Facilita, non intermedia. Garantisce trasparenza, non opacità.
                    </p>
                </div>
            </div>
        </div>
    );
};
