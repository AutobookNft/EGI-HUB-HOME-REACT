import React from 'react';

export const AmbientePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-dark text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">AMBIENTE</h1>
                <p className="text-xl text-primary mb-8">Environmental Protection Protocol</p>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Dove va l'impatto?</h2>
                        <p className="text-text-muted">
                            Monitoraggio dell'impatto ambientale certificato attraverso l'Environmental Protection Protocol (EPP).
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-2">Percentuali Trasparenti</h3>
                        <ul className="list-disc list-inside text-text-muted space-y-2">
                            <li>Tracciabilità on-chain delle donazioni</li>
                            <li>Progetti di riforestazione verificati</li>
                            <li>Report impatto ambientale certificato</li>
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
