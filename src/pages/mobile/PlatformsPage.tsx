import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { Header } from '@/components/mobile/layout/Header';
import { Footer } from '@/components/mobile/layout/Footer';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';
import { platforms } from '@/data/content/platforms';
import { useI18n } from '@/i18n';
import { ExternalLink } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';

export const PlatformsPage = () => {
    const { locale, t } = useI18n();
    const platformsList = platforms[locale];

    return (
        <>
            <SeoHead
                title={t('platforms.title')}
                description={t('platforms.hero.description')}
                schema={{
                    "@type": "CollectionPage",
                    "name": t('platforms.title'),
                    "description": t('platforms.hero.description'),
                    "hasPart": platformsList.map(p => ({
                        "@type": "SoftwareApplication",
                        "name": p.name,
                        "description": p.description,
                        "applicationCategory": p.category,
                        "operatingSystem": "Web"
                    }))
                }}
            />
            <Header />
            <ScreenContainer className="bg-black text-white">
                <div className="pt-24 px-6 pb-12">
                    {/* Hero interna */}
                    <div className="space-y-4 mb-12">
                        <span className="text-xs uppercase tracking-widest text-primary font-bold">{t('platforms.hero.label')}</span>
                        <h1 className="text-4xl font-light text-white leading-tight">{t('platforms.title')}</h1>
                        <p className="text-sm text-gray-500 max-w-[90%] font-light leading-relaxed">
                            {t('platforms.hero.description')}
                        </p>
                    </div>

                    {/* === SEZIONE MANIPOLATORI EGI === */}
                    <div className="mb-16">
                        <div className="mb-6">
                            <h2 className="text-2xl font-light text-white mb-2">Piattaforme EGI</h2>
                            <p className="text-xs text-gray-500 font-light leading-relaxed">
                                Sistemi che manipolano EGI per scopi specifici
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {platformsList
                                .filter(p => p.type === 'manipulator')
                                .map((platform) => (
                                    <LiquidGlassCard
                                        key={platform.id}
                                        className="p-0 group overflow-hidden border border-white/10"
                                        variant="dark"
                                        onClick={() => {
                                            if (platform.status === 'active') {
                                                window.open(platform.url, '_blank', 'noopener,noreferrer');
                                            }
                                        }}
                                    >
                                        {/* Visual Header Colored */}
                                        <div className={`h-2 bg-gradient-to-r ${platform.status === 'active' ? 'from-primary to-transparent' : 'from-gray-700 to-transparent'}`} />

                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                                                    {platform.icon || platform.name.substring(0, 1)}
                                                </div>
                                                {platform.status === 'active' ? (
                                                    <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border border-primary/20 uppercase">
                                                        {t('general.status.live')}
                                                    </div>
                                                ) : (
                                                    <div className="bg-white/5 text-gray-500 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border border-white/10 uppercase">
                                                        {t('general.status.coming_soon')}
                                                    </div>
                                                )}
                                            </div>

                                            <h3 className="text-2xl font-light text-white mb-2 group-hover:text-primary transition-colors">
                                                {platform.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                                                {platform.category}
                                            </p>
                                            <p className="text-sm text-gray-400 leading-relaxed font-light mb-4">
                                                {platform.description}
                                            </p>

                                            {/* Features */}
                                            {platform.features.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {platform.features.map((feature, idx) => (
                                                        <span key={idx} className="text-[10px] bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/10">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Action Bar */}
                                        {platform.status === 'active' && (
                                            <div className="border-t border-white/5 px-6 py-4 bg-white/[0.02] flex items-center justify-between text-xs text-gray-400 group-hover:text-white transition-colors">
                                                <span className="uppercase tracking-widest font-medium">{t('platforms.card.access')}</span>
                                                <ExternalLink className="w-4 h-4" />
                                            </div>
                                        )}
                                    </LiquidGlassCard>
                                ))}
                        </div>
                    </div>

                    {/* === SEZIONE ECOSYSTEM === */}
                    <div>
                        <div className="mb-6">
                            <h2 className="text-2xl font-light text-white mb-2">Ecosystem</h2>
                            <p className="text-xs text-gray-500 font-light leading-relaxed">
                                Siti accessori che orbitano nell'ecosistema Florence EGI
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {platformsList
                                .filter(p => p.type === 'ecosystem')
                                .map((platform) => (
                                    <LiquidGlassCard
                                        key={platform.id}
                                        className="p-0 group overflow-hidden border border-white/10"
                                        variant="dark"
                                        onClick={() => {
                                            if (platform.status === 'active') {
                                                window.open(platform.url, '_blank', 'noopener,noreferrer');
                                            }
                                        }}
                                    >
                                        {/* Visual Header Colored */}
                                        <div className={`h-2 bg-gradient-to-r ${platform.status === 'active' ? 'from-blue-500 to-transparent' : 'from-gray-700 to-transparent'}`} />

                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
                                                    {platform.icon || platform.name.substring(0, 1)}
                                                </div>
                                                {platform.status === 'active' && (
                                                    <div className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest border border-blue-500/20 uppercase">
                                                        {t('general.status.live')}
                                                    </div>
                                                )}
                                            </div>

                                            <h3 className="text-2xl font-light text-white mb-2 group-hover:text-blue-400 transition-colors">
                                                {platform.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                                                {platform.category}
                                            </p>
                                            <p className="text-sm text-gray-400 leading-relaxed font-light mb-4">
                                                {platform.description}
                                            </p>

                                            {/* Features */}
                                            {platform.features.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {platform.features.map((feature, idx) => (
                                                        <span key={idx} className="text-[10px] bg-white/5 text-gray-400 px-2 py-1 rounded border border-white/10">
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Action Bar */}
                                        {platform.status === 'active' && (
                                            <div className="border-t border-white/5 px-6 py-4 bg-white/[0.02] flex items-center justify-between text-xs text-gray-400 group-hover:text-white transition-colors">
                                                <span className="uppercase tracking-widest font-medium">{t('platforms.card.access')}</span>
                                                <ExternalLink className="w-4 h-4" />
                                            </div>
                                        )}
                                    </LiquidGlassCard>
                                ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </ScreenContainer>
        </>
    );
};
