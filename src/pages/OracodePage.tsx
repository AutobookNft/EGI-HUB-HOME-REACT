import React from 'react';

export const OracodePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-dark text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">ORACODE</h1>
                <p className="text-xl text-primary mb-8">OS3 · OS4 · NATAN Method</p>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">Che intelligenza governa questo sistema?</h2>
                        <p className="text-text-muted">
                            Il sistema operativo cognitivo che governa l'ecosistema. Non è una piattaforma. È un organismo.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-2">I Tre Pilastri</h3>
                        <ul className="list-disc list-inside text-text-muted space-y-2">
                            <li><strong>OS3</strong>: AI discipline - Protocollo per governare l'output dell'AI</li>
                            <li><strong>OS4</strong>: Human education - Framework per educare gli umani all'uso dell'AI</li>
                            <li><strong>NATAN</strong>: AI framework - Intelligenza applicata alla compliance</li>
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
