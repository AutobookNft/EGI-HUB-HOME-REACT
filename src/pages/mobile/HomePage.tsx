import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { Header } from '@/components/mobile/layout/Header';
import { Footer } from '@/components/mobile/layout/Footer';
import { platforms } from '@/data/content/platforms';
import { useI18n } from '@/i18n';
import { useUIStore } from '@/stores/useUIStore';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';

export const HomePage = () => {
    const { locale } = useI18n();
    const navigate = useUIStore((state) => state.navigate);
    const platformsList = platforms[locale];

    return (
        <>
            <Header />
            <ScreenContainer className="bg-black text-white">

                {/* HERO SECTION - Corporate & Visual */}
                <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                    {/* Background Abstract Gradient - dà profondità/colore */}
                    <div className="absolute top-0 right-0 w-[80%] h-[70%] bg-gradient-to-b from-primary/20 to-transparent blur-[80px] opacity-40 pointer-events-none" />

                    <div className="relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-[10px] uppercase tracking-widest font-bold text-primary mb-6">
                            Ecosystem V2.0
                        </span>
                        <h1 className="text-4xl md:text-5xl font-medium leading-[1.1] mb-6 tracking-tight">
                            Certifichiamo<br />
                            il <span className="text-gray-500">Valore Reale.</span>
                        </h1>
                        <p className="text-base text-gray-400 font-light leading-relaxed mb-8 max-w-[90%]">
                            Piattaforme blockchain enterprise per la Pubblica Amministrazione e l'Arte.
                            Tecnologia Algorand per immutabilità e trasparenza.
                        </p>

                        <button
                            onClick={() => navigate('/platforms')}
                            className="w-full bg-white text-black font-medium py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
                        >
                            Esplora le Piattaforme <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </section>

                {/* PRODUCTS CAROUSEL - Vetrina vera */}
                <section className="py-12 border-t border-white/5 bg-[#050505]">
                    <div className="px-6 mb-8 flex justify-between items-end">
                        <div>
                            <h2 className="text-2xl font-light text-white mb-2">Piattaforme</h2>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">Enterprise Solutions</p>
                        </div>
                    </div>

                    {/* Horizontal Scroll Snap */}
                    <div className="flex overflow-x-auto snap-x snap-mandatory px-6 gap-4 pb-8 no-scrollbar">
                        {platformsList.map((platform) => (
                            <div
                                key={platform.id}
                                onClick={() => platform.status === 'active' && window.open(platform.url, '_blank')}
                                className="snap-center shrink-0 w-[85%] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden relative group active:scale-[0.98] transition-transform"
                            >
                                {/* Fake Product Image/Visual Area */}
                                <div className={`h-40 w-full bg-gradient-to-br ${platform.id === 'florence-art-egi' ? 'from-purple-900/40 to-black' : 'from-orange-900/40 to-black'} relative`}>
                                    <div className="absolute bottom-4 left-4 p-3 bg-black/50 backdrop-blur border border-white/10 rounded-xl">
                                        {/* Placeholder icon text - sostituire con vera icona se disponibile */}
                                        <span className="text-2xl">
                                            {platform.id === 'florence-art-egi' ? '🎨' : (platform.id === 'natan-loc' ? '📄' : '⚙️')}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-medium text-white mb-1">{platform.name}</h3>
                                    <p className="text-sm text-gray-400 mb-4 h-10">{platform.tagline}</p>

                                    <div className="flex items-center justify-between mt-4">
                                        {platform.status === 'active' ? (
                                            <span className="text-xs text-primary font-bold flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> LIVE
                                            </span>
                                        ) : (
                                            <span className="text-xs text-gray-500 font-bold bg-white/5 px-2 py-1 rounded">COMING SOON</span>
                                        )}
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* WHY US - 3 Pilastri in versione Corporate Grid */}
                <section className="py-16 px-6 relative bg-black">
                    <h2 className="text-2xl font-light text-white mb-10 text-center">Perché EGI Hub</h2>

                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white border border-white/10">
                                <Shield className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Memoria Immutabile</h3>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">
                                    Ogni atto viene tracciato permanentemente sulla blockchain Algorand. Nessuna manomissione possibile.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white border border-white/10">
                                {/* Scale icon fallback */}
                                <Globe className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Impatto Reale</h3>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">
                                    Parte del valore generato finanzia progetti di rigenerazione ambientale (EPP).
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-white border border-white/10">
                                <Zap className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Tecnologia Oracode</h3>
                                <p className="text-sm text-gray-500 font-light leading-relaxed">
                                    Software progettato non solo per funzionare, ma per dare senso e documentare le decisioni.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />

            </ScreenContainer>
        </>
    );
};
