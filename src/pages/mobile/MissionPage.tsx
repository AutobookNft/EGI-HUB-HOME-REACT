import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { TabBar } from '@/components/mobile/layout/TabBar';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';
import { missionContent } from '@/data/content/mission';
import { useI18n } from '@/i18n';
import { Target, Users, Globe, Download, Mail } from 'lucide-react';

export const MissionPage = () => {
    const { locale } = useI18n();
    const content = missionContent[locale];

    const getIcon = (i: number) => {
        if (i === 0) return <Target className="w-5 h-5" />;
        if (i === 1) return <Users className="w-5 h-5" />;
        return <Globe className="w-5 h-5" />;
    };

    return (
        <>
            <ScreenContainer>
                <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md px-6 py-5 border-b border-white/[0.05]">
                    <h1 className="text-lg font-medium text-white tracking-wide">Mission</h1>
                </div>

                <div className="px-6 pt-24 pb-32 space-y-10">

                    {/* Hero Text */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-light text-white leading-tight">
                            {content.hero.title}
                        </h2>
                        <div className="h-1 w-12 bg-primary/50 rounded-full" />
                        <p className="text-lg text-gray-300 font-light italic leading-relaxed pt-2">
                            "{content.vision}"
                        </p>
                    </div>

                    {/* Values */}
                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">Core Values</h3>
                        <div className="grid gap-3">
                            {content.values.map((value, idx) => (
                                <LiquidGlassCard key={idx} className="p-5 flex gap-4 items-start" variant="dark">
                                    <div className="text-primary mt-0.5">
                                        {getIcon(idx)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">{value.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed font-light">{value.description}</p>
                                    </div>
                                </LiquidGlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Roadmap (Minimal) */}
                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">{content.roadmap.title}</h3>
                        <LiquidGlassCard className="p-8 text-center border-dashed border-white/10 bg-transparent shadow-none" variant="dark">
                            <span className="text-gray-600 block mb-2 font-mono text-xs">Timeline</span>
                            <p className="text-gray-400 text-sm">Strategia in definizione (Q1-Q4)</p>
                        </LiquidGlassCard>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3 pt-4">
                        <button className="w-full py-4 bg-white text-black font-medium text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
                            <Download className="w-4 h-4" /> {content.cta.investor_deck}
                        </button>
                        <button className="w-full py-4 bg-transparent border border-white/10 text-white font-medium text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-white/5 transition-colors">
                            <Mail className="w-4 h-4" /> {content.cta.contact_partner}
                        </button>
                    </div>

                </div>
            </ScreenContainer>
            <TabBar />
        </>
    );
};
