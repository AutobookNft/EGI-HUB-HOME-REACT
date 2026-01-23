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

                {/* HERO SECTION - REAL VISUAL with IMPROVED SPACING */}
                <section className="relative h-[85vh] w-full overflow-hidden flex flex-col justify-end pb-32 px-6">
                    {/* Background Image: Hub Hero - Gold Spheres */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/assets/hero-images/hub-hero.png"
                            alt="EGI Hub Ecosystem"
                            className="w-full h-full object-cover opacity-80"
                        />
                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
                    </div>

                    <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <span className="inline-block py-1.5 px-3 rounded text-[10px] uppercase tracking-[0.2em] font-bold text-white border border-white/20 backdrop-blur-md mb-6 bg-white/5">
                            Ecosystem V2.1
                        </span>
                        <h1 className="text-5xl font-medium leading-[1.05] mb-6 tracking-tight text-white drop-shadow-2xl">
                            Certifichiamo<br />
                            il <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white font-normal">Valore Reale.</span>
                        </h1>
                        <p className="text-lg text-gray-200 font-light leading-relaxed mb-10 max-w-[90%] drop-shadow-md">
                            Tecnologia blockchain enterprise per la Pubblica Amministrazione e l'Arte. Immutabilità garantita.
                        </p>

                        <button
                            onClick={() => navigate('/platforms')}
                            className="w-full bg-white text-black font-medium py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                        >
                            Esplora le Piattaforme <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </section>

                {/* PRODUCTS CAROUSEL - VISUAL CARDS */}
                <section className="py-16 bg-[#050505] relative z-20 -mt-8 rounded-t-3xl border-t border-white/10 shadow-[0_-20px_60px_rgba(0,0,0,1)]">
                    <div className="px-6 mb-8 flex justify-between items-end">
                        <div>
                            <h2 className="text-2xl font-light text-white mb-2">Piattaforme</h2>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">Enterprise Solutions</p>
                        </div>
                    </div>

                    {/* Horizontal Scroll Snap */}
                    <div className="flex overflow-x-auto snap-x snap-mandatory px-6 gap-5 pb-8 no-scrollbar">
                        {platformsList.map((platform) => {
                            // Select specific image based on ID
                            let bgImage = '/assets/hero-images/projects-hero.png';
                            if (platform.id === 'florence-art-egi') bgImage = '/assets/hero-images/florence-egi-hero.png'; // Purple Visual
                            if (platform.id === 'natan-loc') bgImage = '/assets/hero-images/info-hero.png'; // Doc Visual

                            return (
                                <div
                                    key={platform.id}
                                    onClick={() => platform.status === 'active' && window.open(platform.url, '_blank')}
                                    className="snap-center shrink-0 w-[85%] h-[420px] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden relative group active:scale-[0.98] transition-transform shadow-lg"
                                >
                                    {/* Full Card Image Background */}
                                    <div className="absolute inset-0 z-0">
                                        <img src={bgImage} alt={platform.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                        <div className="flex justify-between items-end mb-4">
                                            <h3 className="text-3xl font-medium text-white leading-tight">{platform.name}</h3>
                                            {platform.status === 'active' && <div className="p-2 bg-white rounded-full text-black"><ArrowRight className="w-4 h-4" /></div>}
                                        </div>

                                        <p className="text-sm text-gray-300 mb-4 line-clamp-2 leading-relaxed">{platform.description}</p>

                                        <div className="flex items-center gap-2">
                                            {platform.status === 'active' ? (
                                                <span className="text-[10px] text-black bg-primary px-2 py-1 rounded font-bold uppercase">LIVE</span>
                                            ) : (
                                                <span className="text-[10px] text-white bg-white/20 backdrop-blur px-2 py-1 rounded font-bold uppercase">COMING SOON</span>
                                            )}
                                            <span className="text-[10px] text-gray-400 uppercase tracking-wider">{platform.category}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* WHY US - 3 Pilastri */}
                <section className="py-20 px-6 relative bg-black border-t border-white/5">
                    <h2 className="text-2xl font-light text-white mb-12 text-center tracking-wide">L'Ecosistema EGI</h2>

                    <div className="space-y-12">
                        <div className="flex gap-6 items-start">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 text-white border border-white/10 shadow-inner">
                                <Shield className="w-6 h-6 text-gray-300" strokeWidth={1} />
                            </div>
                            <div>
                                <h3 className="text-xl text-white font-medium mb-2">Memoria Immutabile</h3>
                                <p className="text-base text-gray-500 font-light leading-relaxed">
                                    Ogni atto viene tracciato permanentemente sulla blockchain Algorand. Nessuna manomissione possibile.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 text-white border border-white/10 shadow-inner">
                                <Globe className="w-6 h-6 text-gray-300" strokeWidth={1} />
                            </div>
                            <div>
                                <h3 className="text-xl text-white font-medium mb-2">Impatto Reale</h3>
                                <p className="text-base text-gray-500 font-light leading-relaxed">
                                    Parte del valore generato finanzia progetti di rigenerazione ambientale (EPP).
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-6 items-start">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 text-white border border-white/10 shadow-inner">
                                <Zap className="w-6 h-6 text-gray-300" strokeWidth={1} />
                            </div>
                            <div>
                                <h3 className="text-xl text-white font-medium mb-2">Tecnologia Oracode</h3>
                                <p className="text-base text-gray-500 font-light leading-relaxed">
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
