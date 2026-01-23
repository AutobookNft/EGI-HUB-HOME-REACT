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
            <ScreenContainer>
                <div className="px-5 py-8 space-y-8">
                    {/* Hero - Implementation Plan lines 58-64 */}
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-bold text-white font-rajdhani leading-tight">
                            {content.hero.headline}
                        </h1>
                        <p className="text-sm text-text-muted">
                            {content.hero.subheadline}
                        </p>
                        <div className="flex gap-3 justify-center pt-2">
                            <button
                                onClick={() => navigate('/platforms')}
                                className="px-6 py-3 bg-primary text-black font-bold rounded-full text-sm"
                            >
                                {content.hero.cta_primary}
                            </button>
                            <button
                                onClick={() => navigate('/mission')}
                                className="px-6 py-3 border border-white/20 text-white font-bold rounded-full text-sm"
                            >
                                {content.hero.cta_secondary}
                            </button>
                        </div>
                    </div>

                    {/* I Tre Pilastri - Implementation Plan lines 66-86 */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-white font-rajdhani text-center">
                            {content.pillars.title}
                        </h2>
                        <div className="space-y-3">
                            {content.pillars.items.map((pillar, idx) => (
                                <LiquidGlassCard key={idx} className="p-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-3xl flex-shrink-0">{pillar.icon}</span>
                                        <div>
                                            <h3 className="font-bold text-white mb-1 font-rajdhani">
                                                {pillar.title}
                                            </h3>
                                            <p className="text-xs text-text-muted">
                                                {pillar.description}
                                            </p>
                                        </div>
                                    </div>
                                </LiquidGlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Preview Piattaforme - Implementation Plan line 331 */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-white font-rajdhani">
                                Piattaforme
                            </h2>
                            <button
                                onClick={() => navigate('/platforms')}
                                className="text-primary text-sm font-mono"
                            >
                                Vedi tutte →
                            </button>
                        </div>
                        <div className="space-y-3">
                            {platformsList.slice(0, 2).map((platform) => (
                                <PlatformCard
                                    key={platform.id}
                                    platform={platform}
                                    onClick={() => {
                                        if (platform.status === 'active') {
                                            window.open(platform.url, '_blank', 'noopener,noreferrer');
                                        }
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Social Proof - Implementation Plan lines 88-92 (VUOTO OK) */}
                    {content.socialProof.metrics.length > 0 && (
                        <div className="space-y-4">
                            <h2 className="text-xl font-bold text-white font-rajdhani text-center">
                                {content.socialProof.title}
                            </h2>
                            {/* Metrics cards qui quando disponibili */}
                        </div>
                    )}
                </div>
            </ScreenContainer>

            <TabBar />
        </>
    );
};
