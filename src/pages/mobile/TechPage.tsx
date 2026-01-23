import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { TabBar } from '@/components/mobile/layout/TabBar';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';
import { techContent } from '@/data/content/tech';
import { useI18n } from '@/i18n';
import { Hexagon, Layers, ShieldCheck, Cpu, Code2, Database } from 'lucide-react';

export const TechPage = () => {
    const { locale } = useI18n();
    const content = techContent[locale];

    return (
        <>
            <ScreenContainer>
                <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md px-6 py-5 border-b border-white/[0.05]">
                    <h1 className="text-lg font-medium text-white tracking-wide">Tecnologia</h1>
                </div>

                <div className="px-6 pt-24 pb-32 space-y-12">

                    {/* Header */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-light text-white leading-tight">
                            Architettura<br />
                            <span className="text-gray-500 font-mono text-lg">Hub & Spoke</span>
                        </h2>
                    </div>

                    {/* ORACODE */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Hexagon className="w-4 h-4 text-primary" />
                            <h3 className="text-xs uppercase tracking-[0.2em] text-white font-medium">Oracode System</h3>
                        </div>

                        <LiquidGlassCard className="p-6 space-y-6" variant="dark">
                            <blockquote className="border-l-2 border-primary/50 pl-4 py-1">
                                <p className="text-lg text-white font-light italic leading-relaxed">
                                    "{content.oracode.quote}"
                                </p>
                            </blockquote>

                            <div className="space-y-4 pt-2">
                                {content.oracode.pillars.slice(0, 2).map((p, i) => ( // Show only top 2 for mobile conciseness
                                    <div key={i} className="group">
                                        <h4 className="text-white text-sm font-medium mb-1 group-hover:text-primary transition-colors">{p.title}</h4>
                                        <p className="text-xs text-gray-500 leading-relaxed font-light">{p.description}</p>
                                    </div>
                                ))}
                            </div>
                        </LiquidGlassCard>
                    </section>

                    {/* ALGORAND */}
                    <section className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Layers className="w-4 h-4 text-emerald-400" />
                            <h3 className="text-xs uppercase tracking-[0.2em] text-white font-medium">Infrastructure</h3>
                        </div>

                        <LiquidGlassCard className="p-6 bg-gradient-to-br from-emerald-950/20 to-black border-emerald-500/10">
                            <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                                Algorand Blockchain <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Pure PoS</span>
                            </h4>
                            <ul className="grid grid-cols-1 gap-3">
                                {content.algorand.benefits.map((b, i) => (
                                    <li key={i} className="text-xs text-gray-400 flex items-start gap-3">
                                        <ShieldCheck className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0" />
                                        {b.split(':')[0]} {/* Solo titolo per brevità mobile */}
                                    </li>
                                ))}
                            </ul>
                        </LiquidGlassCard>
                    </section>

                    {/* STACK GRID */}
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-white/5 rounded-lg p-3 flex flex-col items-center justify-center gap-2 border border-white/5 aspect-square">
                            <Cpu className="text-white w-6 h-6" strokeWidth={1} />
                            <span className="text-[10px] text-gray-500">React</span>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 flex flex-col items-center justify-center gap-2 border border-white/5 aspect-square">
                            <Code2 className="text-white w-6 h-6" strokeWidth={1} />
                            <span className="text-[10px] text-gray-500">Laravel</span>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 flex flex-col items-center justify-center gap-2 border border-white/5 aspect-square">
                            <Database className="text-white w-6 h-6" strokeWidth={1} />
                            <span className="text-[10px] text-gray-500">Postgres</span>
                        </div>
                    </div>

                </div>
            </ScreenContainer>
            <TabBar />
        </>
    );
};
