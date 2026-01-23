import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { Header } from '@/components/mobile/layout/Header';
import { Footer } from '@/components/mobile/layout/Footer';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';
import { techContent } from '@/data/content/tech';
import { useI18n } from '@/i18n';
import { Hexagon, Layers, ShieldCheck, Cpu, Code2, Database } from 'lucide-react';

export const TechPage = () => {
    const { locale } = useI18n();
    const content = techContent[locale];

    return (
        <>
            <Header />
            <ScreenContainer className="bg-black text-white">
                <div className="pt-24 px-6 pb-12 space-y-16">

                    {/* Header */}
                    <div className="space-y-4">
                        <span className="text-xs uppercase tracking-widest text-primary font-bold">Infrastructure</span>
                        <h2 className="text-4xl font-light text-white leading-tight">
                            Architettura<br />
                            <span className="text-gray-500">Hub & Spoke</span>
                        </h2>
                    </div>

                    {/* ORACODE */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                            <Hexagon className="w-5 h-5 text-primary" />
                            <h3 className="text-xs uppercase tracking-[0.2em] text-white font-bold">Oracode System</h3>
                        </div>

                        <div className="space-y-8">
                            <blockquote className="pl-6 border-l-2 border-primary/50">
                                <p className="text-lg text-white font-light italic leading-relaxed">
                                    "{content.oracode.quote}"
                                </p>
                            </blockquote>

                            <div className="grid gap-6">
                                {content.oracode.pillars.slice(0, 3).map((p, i) => (
                                    <div key={i} className="group">
                                        <h4 className="text-white text-base font-medium mb-2 group-hover:text-primary transition-colors">{p.title}</h4>
                                        <p className="text-sm text-gray-500 leading-relaxed font-light">{p.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ALGORAND */}
                    <section className="space-y-6">
                        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                            <Layers className="w-5 h-5 text-emerald-400" />
                            <h3 className="text-xs uppercase tracking-[0.2em] text-white font-bold">Blockchain Layer</h3>
                        </div>

                        <LiquidGlassCard className="p-8 bg-gradient-to-br from-emerald-950/30 to-black border-emerald-500/20">
                            <h4 className="text-2xl text-white font-light mb-6">
                                Algorand <span className="text-sm align-middle ml-2 text-emerald-400 opacity-80 bg-emerald-900/30 px-2 py-1 rounded">Pure PoS</span>
                            </h4>
                            <ul className="grid gap-4">
                                {content.algorand.benefits.map((b, i) => (
                                    <li key={i} className="text-sm text-gray-300 font-light flex items-center gap-3">
                                        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                                        {b.split(':')[0]}
                                    </li>
                                ))}
                            </ul>
                        </LiquidGlassCard>
                    </section>

                    {/* STACK GRID */}
                    <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-12">
                        <div className="text-center space-y-3">
                            <Cpu className="text-white w-8 h-8 mx-auto stroke-1" />
                            <span className="block text-xs uppercase tracking-widest text-gray-500">Frontend</span>
                            <span className="block text-sm text-white">React</span>
                        </div>
                        <div className="text-center space-y-3">
                            <Code2 className="text-white w-8 h-8 mx-auto stroke-1" />
                            <span className="block text-xs uppercase tracking-widest text-gray-500">Backend</span>
                            <span className="block text-sm text-white">Laravel</span>
                        </div>
                        <div className="text-center space-y-3">
                            <Database className="text-white w-8 h-8 mx-auto stroke-1" />
                            <span className="block text-xs uppercase tracking-widest text-gray-500">Data</span>
                            <span className="block text-sm text-white">Postgres</span>
                        </div>
                    </div>

                </div>

                <Footer />
            </ScreenContainer>
        </>
    );
};
