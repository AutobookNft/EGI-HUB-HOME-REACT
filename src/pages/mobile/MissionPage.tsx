import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { TabBar } from '@/components/mobile/layout/TabBar';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';
import { missionContent } from '@/data/content/mission';
import { useI18n } from '@/i18n';

export const MissionPage = () => {
    const { locale } = useI18n();
    const content = missionContent[locale];

    return (
        <>
            <ScreenContainer>
                <div className="px-5 py-8 space-y-8">
                    {/* Hero */}
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold text-white font-rajdhani">
                            {content.hero.title}
                        </h1>
                        <p className="text-sm text-primary font-mono">
                            {content.hero.subtitle}
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-bold text-white font-rajdhani">
                            Vision
                        </h2>
                        <LiquidGlassCard className="p-5">
                            <p className="text-sm text-text-main leading-relaxed">
                                {content.vision}
                            </p>
                        </LiquidGlassCard>
                    </div>

                    {/* Mission (if not TBD) */}
                    {content.mission !== '[TBD - da definire]' && (
                        <div className="space-y-3">
                            <h2 className="text-xl font-bold text-white font-rajdhani">
                                Mission
                            </h2>
                            <LiquidGlassCard className="p-5">
                                <p className="text-sm text-text-main leading-relaxed">
                                    {content.mission}
                                </p>
                            </LiquidGlassCard>
                        </div>
                    )}

                    {/* Core Values */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-bold text-white font-rajdhani">
                            Core Values
                        </h2>
                        <div className="space-y-3">
                            {content.values.map((value, idx) => (
                                <LiquidGlassCard key={idx} className="p-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-3xl flex-shrink-0">{value.icon}</span>
                                        <div>
                                            <h3 className="font-bold text-white mb-1 font-rajdhani">
                                                {value.title}
                                            </h3>
                                            <p className="text-xs text-text-muted">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </LiquidGlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Roadmap */}
                    <div className="space-y-3">
                        <h2 className="text-xl font-bold text-white font-rajdhani">
                            {content.roadmap.title}
                        </h2>
                        {content.roadmap.quarters.some(q => q.items.length > 0) ? (
                            <div className="space-y-3">
                                {content.roadmap.quarters.map((quarter, idx) => (
                                    quarter.items.length > 0 && (
                                        <LiquidGlassCard key={idx} className="p-4">
                                            <h3 className="font-bold text-primary mb-2 font-mono text-sm">
                                                {quarter.quarter}
                                            </h3>
                                            <ul className="space-y-1">
                                                {quarter.items.map((item, itemIdx) => (
                                                    <li key={itemIdx} className="text-xs text-text-muted flex items-start gap-2">
                                                        <span className="text-primary">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </LiquidGlassCard>
                                    )
                                ))}
                            </div>
                        ) : (
                            <LiquidGlassCard className="p-5">
                                <p className="text-sm text-text-muted text-center">
                                    [TBD - Roadmap in definizione]
                                </p>
                            </LiquidGlassCard>
                        )}
                    </div>

                    {/* CTA */}
                    <div className="space-y-3 pt-4">
                        <button className="w-full py-4 bg-primary text-black font-bold rounded-full">
                            {content.cta.investor_deck}
                        </button>
                        <button className="w-full py-4 border border-white/20 text-white font-bold rounded-full">
                            {content.cta.contact_partner}
                        </button>
                    </div>
                </div>
            </ScreenContainer>

            <TabBar />
        </>
    );
};
