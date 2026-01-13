export const MissionControl = () => {
    return (
        <>
            {/* Desktop Version - Right Sidebar */}
            <div className="fixed right-8 top-[38%] z-10 pointer-events-none max-w-sm hidden lg:block">
                <span
                    className="text-xs text-primary uppercase tracking-wider block mb-3"
                    style={{ fontFamily: 'Share Tech Mono, monospace' }}
                >
                    Cosa Facciamo Per Te
                </span>
                <h2
                    className="text-xl mb-3 leading-tight"
                    style={{ fontFamily: 'Rajdhani, sans-serif', textShadow: '0 0 20px rgba(0,255,221,0.5)' }}
                >
                    TRASFORMIAMO I TUOI ASSET IN VALORE LIQUIDO
                </h2>
                <p
                    className="text-sm leading-relaxed text-text-muted mb-4"
                    style={{ textShadow: '0 0 5px rgba(0,0,0,1)' }}
                >
                    Certifichi arte, immobili, beni reali sulla blockchain. Li rendi frazionabili, scambiabili, liquidi. Pagamenti in tempo reale. Diritti garantiti on-chain.
                </p>

                {/* Benefits Grid */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                    {[
                        { top: 'ASSET', bottom: 'CERTIFICATI' },
                        { top: 'PAGAMENTI', bottom: 'ISTANTANEI' },
                        { top: 'PROPRIETÀ', bottom: 'FRAZIONATA' },
                        { top: 'DIRITTI', bottom: 'GARANTITI' },
                    ].map((benefit, idx) => (
                        <div key={idx} className="pt-2">
                            <div
                                className="text-xs text-primary"
                                style={{ fontFamily: 'Share Tech Mono, monospace', textShadow: '0 0 10px rgba(0,0,0,0.8)' }}
                            >
                                {benefit.top}
                            </div>
                            <div className="text-sm mt-1">{benefit.bottom}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Version - Bottom Overlay */}
            <div className="fixed bottom-[50px] left-0 right-0 z-10 lg:hidden px-4 pb-2">
                <div className="glass-dark backdrop-blur-md border border-light rounded-lg p-4 pointer-events-auto">
                    <h3
                        className="text-sm font-bold mb-2 leading-tight text-center"
                        style={{ fontFamily: 'Rajdhani, sans-serif', textShadow: '0 0 20px rgba(0,255,221,0.5)' }}
                    >
                        TRASFORMIAMO I TUOI ASSET IN VALORE LIQUIDO
                    </h3>
                    <p
                        className="text-xs leading-tight text-text-muted text-center mb-3"
                        style={{ textShadow: '0 0 5px rgba(0,0,0,1)' }}
                    >
                        Certificazione blockchain, asset frazionabili, pagamenti istantanei, diritti garantiti.
                    </p>

                    {/* Compact Benefits Row */}
                    <div className="grid grid-cols-4 gap-2 text-center">
                        {[
                            { icon: '🎨', label: 'ASSET' },
                            { icon: '⚡', label: 'INSTANT' },
                            { icon: '🔗', label: 'LIQUID' },
                            { icon: '✓', label: 'SAFE' },
                        ].map((item, idx) => (
                            <div key={idx}>
                                <div className="text-lg mb-1">{item.icon}</div>
                                <div className="text-[9px] text-primary uppercase" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
