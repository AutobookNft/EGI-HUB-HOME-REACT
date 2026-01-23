import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { TabBar } from '@/components/mobile/layout/TabBar';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';
import { homepageContent } from '@/data/content/homepage';
import { useI18n } from '@/i18n';
import { useUIStore } from '@/stores/useUIStore';
import { Bell, ArrowRight, ChevronRight, Layers, Target } from 'lucide-react';

export const HomePage = () => {
    const { locale } = useI18n();
    const navigate = useUIStore((state) => state.navigate);
    const content = homepageContent[locale];

    return (
        <>
            <ScreenContainer>
                {/* TOP BAR: Ultra minimal */}
                <div className="fixed top-0 left-0 right-0 z-50 px-6 py-5 bg-black/80 backdrop-blur-md border-b border-white/[0.05] flex justify-between items-center">
                    <div className="font-rajdhani font-semibold text-lg tracking-widest text-white">
                        EGI<span className="text-primary">.HUB</span>
                    </div>
                    <Bell className="w-5 h-5 text-white/60 stroke-[1.5]" />
                </div>

                <div className="px-6 pt-32 pb-32 space-y-16">

                    {/* HERO: ESSENZIALE, PURO, CORPORATE */}
                    <div className="space-y-6">
                        <h1 className="text-4xl font-light text-white leading-[1.1] tracking-tight">
                            Il valore,<br />
                            <span className="text-gray-500 font-normal">certificato.</span>
                        </h1>

                        <div className="h-0.5 w-16 bg-primary/50" />

                        <p className="text-base text-gray-400 leading-relaxed font-light max-w-[95%]">
                            {content.hero.subheadline}
                        </p>

                        <div className="pt-4 flex gap-4">
                            <button
                                onClick={() => navigate('/platforms')}
                                className="flex-1 py-4 bg-white text-black text-sm font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
                            >
                                Esplora Prodotti <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* NAVIGATION CARDS: Dirette, senza filosofia inutile */}
                    <div className="space-y-4">
                        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-600 font-medium pl-1">
                            Esplora Ecosistema
                        </h2>

                        {/* Card Piattaforme */}
                        <LiquidGlassCard
                            className="p-5 flex items-center justify-between group"
                            variant="dark"
                            onClick={() => navigate('/platforms')}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                                    <Layers className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium">Piattaforme</h3>
                                    <p className="text-xs text-gray-500">Arte, PA, Bandi</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                        </LiquidGlassCard>

                        {/* Card Mission */}
                        <LiquidGlassCard
                            className="p-5 flex items-center justify-between group"
                            variant="dark"
                            onClick={() => navigate('/mission')}
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                                    <Target className="w-5 h-5 stroke-[1.5]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium">Visione & Valori</h3>
                                    <p className="text-xs text-gray-500">I 3 Pilastri, Roadmap</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                        </LiquidGlassCard>
                    </div>

                </div>
            </ScreenContainer>

            <TabBar />
        </>
    );
};
