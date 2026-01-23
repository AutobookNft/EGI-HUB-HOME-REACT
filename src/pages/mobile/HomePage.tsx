import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { TabBar } from '@/components/mobile/layout/TabBar';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';
import { PlatformCard } from '@/components/mobile/cards/PlatformCard';
import { homepageContent } from '@/data/content/homepage';
import { platforms } from '@/data/content/platforms';
import { useI18n } from '@/i18n';
import { useUIStore } from '@/stores/useUIStore';

export const HomePage = () => {
    const { locale } = useI18n();
    const navigate = useUIStore((state) => state.navigate);
    const content = homepageContent[locale];
    const platformsList = platforms[locale];

    return (
        <>
            <ScreenContainer className="pb-20">
                {/* TOP BAR - wireframe line 744 */}
                <div className="fixed top-0 left-0 right-0 z-20 px-5 py-4 bg-black/80 backdrop-blur-lg border-b border-white/10">
                    <div className="flex items-center justify-between">
                        <div className="text-primary font-rajdhani font-bold text-xl">EGI HUB</div>
                        <button className="text-2xl">🔔</button>
                    </div>
                </div>

                {/* Content - starts after top bar */}
                <div className="pt-20 px-5 pb-8 space-y-8">
                    {/* HERO CARD (Liquid Glass) - wireframe lines 747-752 */}
                    <LiquidGlassCard className="p-6 text-center space-y-4">
                        <h1 className="text-2xl font-bold text-white font-rajdhani">
                            EGI Hub
                        </h1>
                        <p className="text-sm text-white">
                            L'ecosistema blockchain che certifica valore
                        </p>
                        <button
                            onClick={() => navigate('/platforms')}
                            className="inline-flex items-center gap-2 text-primary text-sm font-mono"
                        >
                            Scopri di più →
                        </button>
                    </LiquidGlassCard>

                    {/* PIATTAFORME ACTIVE - wireframe lines 754-766 */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold text-white font-rajdhani">
                                Piattaforme Active
                            </h2>
                            <button
                                onClick={() => navigate('/platforms')}
                                className="text-primary text-sm font-mono"
                            >
                                Vedi tutte →
                            </button>
                        </div>
                        <div className="space-y-3">
                            {platformsList
                                .filter(p => p.status === 'active')
                                .slice(0, 2)
                                .map((platform) => (
                                    <PlatformCard
                                        key={platform.id}
                                        platform={platform}
                                        onClick={() => {
                                            window.open(platform.url, '_blank', 'noopener,noreferrer');
                                        }}
                                    />
                                ))}
                        </div>
                    </div>

                    {/* TECNOLOGIA - wireframe lines 768-773 */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-bold text-white font-rajdhani">
                            Tecnologia
                        </h2>
                        <LiquidGlassCard className="p-5 space-y-3">
                            <p className="text-sm text-white font-bold">
                                Costruito su Oracode
                            </p>
                            <p className="text-xs text-text-muted">
                                Blockchain Algorand
                            </p>
                            <button
                                onClick={() => navigate('/mission')}
                                className="inline-flex items-center gap-2 text-primary text-sm font-mono"
                            >
                                Scopri →
                            </button>
                        </LiquidGlassCard>
                    </div>
                </div>
            </ScreenContainer>

            {/* TAB BAR - wireframe line 776 */}
            <TabBar />
        </>
    );
};
