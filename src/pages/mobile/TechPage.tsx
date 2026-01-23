import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { TabBar } from '@/components/mobile/layout/TabBar';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';
import { techContent } from '@/data/content/tech';
import { useI18n } from '@/i18n';

export const TechPage = () => {
    const { locale } = useI18n();
    const content = techContent[locale];

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

                    {/* Oracode System */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-white font-rajdhani">
                            {content.oracode.title}
                        </h2>
                        <LiquidGlassCard className="p-5 space-y-4">
                            <div>
                                <h3 className="font-bold text-white mb-2 font-rajdhani">Definizione</h3>
                                <p className="text-sm text-text-main leading-relaxed">
                                    {content.oracode.definition}
                                </p>
                            </div>

                            <div className="border-l-2 border-primary pl-3 py-1">
                                <p className="text-xs text-text-muted italic">
                                    "{content.oracode.quote}"
                                </p>
                            </div>
                        </LiquidGlassCard>

                        {/* Pillars */}
                        <div className="space-y-3">
                            {content.oracode.pillars.map((pillar, idx) => (
                                <LiquidGlassCard key={idx} className="p-4">
                                    <h3 className="font-bold text-primary mb-1 font-rajdhani text-sm">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs text-text-muted">
                                        {pillar.description}
                                    </p>
                                </LiquidGlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Algorand */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-white font-rajdhani">
                            {content.algorand.title}
                        </h2>
                        <LiquidGlassCard className="p-5 space-y-3">
                            <p className="text-sm text-text-main">
                                {content.algorand.description}
                            </p>
                            <ul className="space-y-2 pt-2">
                                {content.algorand.benefits.map((benefit, idx) => (
                                    <li key={idx} className="text-xs text-text-muted flex items-start gap-2">
                                        <span className="text-primary">✓</span>
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </LiquidGlassCard>
                    </div>

                    {/* Stack */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-white font-rajdhani">
                            {content.stack.title}
                        </h2>
                        <div className="grid grid-cols-1 gap-3">
                            {content.stack.items.map((item, idx) => (
                                <LiquidGlassCard key={idx} className="p-3 flex items-center gap-3">
                                    <div className="text-2xl">{item.icon}</div>
                                    <div>
                                        <div className="font-bold text-white text-sm">{item.name}</div>
                                        <div className="text-xs text-text-muted">{item.description}</div>
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
