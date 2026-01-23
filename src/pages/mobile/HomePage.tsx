import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { TabBar } from '@/components/mobile/layout/TabBar';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';
import { homepageContent } from '@/data/content/homepage';
import { platforms } from '@/data/content/platforms';
import { useI18n } from '@/i18n';
import { useUIStore } from '@/stores/useUIStore';
import { Bell, ArrowRight, ExternalLink, Box, Scale, Globe, ChevronRight } from 'lucide-react';

export const HomePage = () => {
    const { locale } = useI18n();
    const navigate = useUIStore((state) => state.navigate);
    const content = homepageContent[locale];
    const platformsList = platforms[locale];

    // Map icons string to Lucide components manually for now to fix emoji issue
    const getPillarIcon = (iconName: string) => {
        if (iconName.includes('🏛')) return <Box className="w-5 h-5 text-primary" />;
        if (iconName.includes('⚖')) return <Scale className="w-5 h-5 text-primary" />;
        if (iconName.includes('🌍')) return <Globe className="w-5 h-5 text-primary" />;
        return <Box className="w-5 h-5 text-white" />;
    };

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

                <div className="px-6 pt-24 pb-32 space-y-12">

                    {/* HERO SECTION: Clean, Typography-led */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-medium text-white leading-[1.2] tracking-tight">
                                Il luogo dove<br />
                                <span className="text-gray-400">un'opera diventa vera.</span>
                            </h1>
                            <p className="text-sm text-gray-400 leading-relaxed font-light max-w-[90%] border-l border-white/20 pl-4">
                                {content.hero.subheadline}
                            </p>
                        </div>

                        <div className="flex gap-4 pt-2">
                            <button
                                onClick={() => navigate('/platforms')}
                                className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                            >
                                Esplora <ArrowRight className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => navigate('/mission')}
                                className="px-6 py-3 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors"
                            >
                                Visione
                            </button>
                        </div>
                    </div>

                    {/* I TRE PILASTRI: Minimal List (Corporate) */}
                    <div className="space-y-4">
                        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium pl-1">
                            Core Principles
                        </h2>
                        <div className="grid gap-3">
                            {content.pillars.items.map((pillar, idx) => (
                                <LiquidGlassCard key={idx} className="p-5 flex items-start gap-4" variant="dark">
                                    <div className="mt-1 p-2 bg-white/5 rounded-full border border-white/10">
                                        {getPillarIcon(pillar.icon)}
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-white text-base mb-1">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-xs text-gray-400 leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </LiquidGlassCard>
                            ))}
                        </div>
                    </div>

                    {/* PIATTAFORME: Horizontal Scroll or Stack */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between pl-1">
                            <h2 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
                                Piattaforme
                            </h2>
                            <button onClick={() => navigate('/platforms')} className="text-xs text-primary flex items-center gap-1">
                                Tutte <ChevronRight className="w-3 h-3" />
                            </button>
                        </div>

                        <div className="space-y-3">
                            {platformsList.slice(0, 2).map((platform) => (
                                <LiquidGlassCard
                                    key={platform.id}
                                    className="p-0"
                                    onClick={() => platform.status === 'active' && window.open(platform.url, '_blank')}
                                >
                                    <div className="p-5 flex items-center justify-between group">
                                        <div className="flex items-center gap-4">
                                            {/* Placeholder icon container if needed, or using Lucide based on ID later */}
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent border border-white/10`}>
                                                <span className="text-lg">{/* Simple fallback letter */} {platform.name[0]}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-white font-medium">{platform.name}</h3>
                                                <p className="text-xs text-gray-500 mt-0.5">{platform.category}</p>
                                            </div>
                                        </div>
                                        {platform.status === 'active' ? (
                                            <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                                        ) : (
                                            <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-500">Coming</span>
                                        )}
                                    </div>
                                </LiquidGlassCard>
                            ))}
                        </div>
                    </div>

                </div>
            </ScreenContainer>

            <TabBar />
        </>
    );
};
