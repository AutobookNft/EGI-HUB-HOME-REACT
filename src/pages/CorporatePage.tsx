import React from 'react';

export const CorporatePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-dark text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">CORPORATE</h1>
                <p className="text-xl text-primary mb-8">Frangette · Team · Legal · Contatti</p>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Chi c'è dietro e chi risponde?</h2>
                        <p className="text-text-muted">
                            Trasparenza totale su chi siamo, come operiamo e come contattarci.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-2">La Struttura</h3>
                        <ul className="list-disc list-inside text-text-muted space-y-2">
                            <li><strong>Frangette SRL</strong>: Società responsabile</li>
                            <li><strong>Team Members</strong>: Chi lavora al progetto</li>
                            <li><strong>Legal Framework</strong>: Struttura legale e compliance</li>
                            <li><strong>Contatti Diretti</strong>: Come raggiungerci</li>
                        </ul>
                    </section>

                    <section className="mt-8 p-6 bg-dark-light rounded-lg border border-light">
                        <p className="text-sm text-text-muted">
                            🚧 Pagina in costruzione - Contenuti in arrivo
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
