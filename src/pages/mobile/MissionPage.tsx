import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { Header } from '@/components/mobile/layout/Header';
import { Footer } from '@/components/mobile/layout/Footer';
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
            <Header />
            <ScreenContainer className="bg-black text-white">
                <div className="pt-24 px-6 pb-12">

                    {/* Hero Text */}
                    <div className="space-y-8 mb-16">
                        <div className="space-y-4">
                            <span className="text-xs uppercase tracking-widest text-primary font-bold">La Nostra Visione</span>
                            <h1 className="text-4xl font-light text-white leading-[1.2]">
                                {content.hero.title}
                            </h1>
                        </div>

                        <div className="border-l-2 border-primary/30 pl-6 py-2">
                            <p className="text-lg text-gray-300 font-light italic leading-relaxed">
                                "{content.vision}"
                            </p>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="space-y-6 mb-16">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-4">Core Values</h3>
                        <div className="grid gap-4">
                            {content.values.map((value, idx) => (
                                <LiquidGlassCard key={idx} className="p-6 flex flex-col gap-4" variant="dark">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                                        {getIcon(idx)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-2 text-lg">{value.title}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed font-light">{value.description}</p>
                                    </div>
                                </LiquidGlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Roadmap (Minimal) */}
                    <div className="space-y-6">
                        <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-4">{content.roadmap.title}</h3>
                        <div className="p-8 text-center border border-dashed border-white/20 rounded-xl bg-white/5">
                            <span className="text-gray-400 block mb-2 font-mono text-xs uppercase">Milestones</span>
                            <p className="text-white font-light">Roadmap strategica in definizione (Q1-Q4 2026)</p>
                        </div>
                    </div>

                </div>
                <Footer />
            </ScreenContainer>
        </>
    );
};
