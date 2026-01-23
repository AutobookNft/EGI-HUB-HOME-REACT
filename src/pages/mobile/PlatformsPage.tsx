import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { TabBar } from '@/components/mobile/layout/TabBar';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';
import { platforms } from '@/data/content/platforms';
import { useI18n } from '@/i18n';
import { ExternalLink, Tag } from 'lucide-react';

export const PlatformsPage = () => {
    const { locale } = useI18n();
    const platformsList = platforms[locale];

    return (
        <>
            <ScreenContainer>
                {/* Top Header Fixed */}
                <div className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md px-6 py-5 border-b border-white/[0.05]">
                    <h1 className="text-lg font-medium text-white tracking-wide">Piattaforme</h1>
                </div>

                <div className="px-6 pt-24 pb-32 space-y-8">
                    <div className="space-y-1">
                        <h2 className="text-3xl font-light text-white">Ecosistema</h2>
                        <p className="text-sm text-gray-400">Strumenti decentralizzati per il valore.</p>
                    </div>

                    <div className="grid gap-4">
                        {platformsList.map((platform) => (
                            <LiquidGlassCard
                                key={platform.id}
                                className="p-0 group"
                                onClick={() => {
                                    if (platform.status === 'active') {
                                        window.open(platform.url, '_blank', 'noopener,noreferrer');
                                    }
                                }}
                            >
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl font-rajdhani font-bold text-white">
                                            {platform.name.substring(0, 2).toUpperCase()}
                                        </div>
                                        {platform.status === 'active' ? (
                                            <div className="bg-primary/10 text-primary px-2 py-1 rounded text-[10px] font-medium tracking-wide border border-primary/20 uppercase">
                                                Active
                                            </div>
                                        ) : (
                                            <div className="bg-white/5 text-gray-500 px-2 py-1 rounded text-[10px] font-medium tracking-wide border border-white/10 uppercase">
                                                Coming Soon
                                            </div>
                                        )}
                                    </div>

                                    <h3 className="text-lg font-medium text-white mb-1 group-hover:text-primary transition-colors">
                                        {platform.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                                        {platform.category}
                                    </p>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {platform.description}
                                    </p>
                                </div>

                                {/* Action Bar */}
                                {platform.status === 'active' && (
                                    <div className="border-t border-white/[0.05] px-6 py-3 bg-white/[0.02] flex items-center justify-between text-xs text-gray-400 group-hover:text-white transition-colors">
                                        <span>Visita piattaforma</span>
                                        <ExternalLink className="w-3 h-3" />
                                    </div>
                                )}
                            </LiquidGlassCard>
                        ))}
                    </div>
                </div>
            </ScreenContainer>
            <TabBar />
        </>
    );
};
