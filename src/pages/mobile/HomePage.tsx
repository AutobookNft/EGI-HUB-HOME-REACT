import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { Header } from '@/components/mobile/layout/Header';
import { Footer } from '@/components/mobile/layout/Footer';
import { platforms } from '@/data/content/platforms';
import { useI18n } from '@/i18n';
import { useUIStore } from '@/stores/useUIStore';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import { EgiExplainer } from '@/components/mobile/ui/EgiExplainer';
import config from '@/utils/config';
import { homepageContent } from '@/data/content/homepage';
import { SeoHead } from '@/components/common/SeoHead';

export const HomePage = () => {
    const { locale, t } = useI18n();
    const navigate = useUIStore((state) => state.navigate);
    const platformsList = platforms[locale];

    return (
        <>
            <SeoHead
                title={homepageContent[locale].hero.headline}
                description={homepageContent[locale].hero.subheadline}
                schema={{
                    "@type": "WebSite",
                    "name": config.appName,
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": `${config.appUrl}/?q={search_term_string}`,
                        "query-input": "required name=search_term_string"
                    }
                }}
            />
            <Header />
            <ScreenContainer className="bg-black text-white">

                {/* HERO SECTION - REAL VISUAL with IMPROVED SPACING */}
                <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col pb-safe pt-safe">
                    {/* Background Image: Hub Hero - Gold Spheres */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={config.heroPath}
                            alt={`${config.appName} Ecosystem`}
                            className="w-full h-full object-cover opacity-80"
                        />
                        {/* Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
                    </div>

                    {/* Content Container - Distributed with Golden Ratio Rhythm */}
                    <div
                        className="relative z-10 flex flex-col min-h-[100dvh] px-6 pb-12"
                        style={{ paddingTop: '25vh' }}
                    >

                        {/* 1. Header Block - Textual Weight */}
                        <div className="flex flex-col gap-4 mb-4">
                            <div className="flex justify-start">
                                <span className="inline-block py-1.5 px-3 rounded text-[10px] uppercase tracking-[0.2em] font-bold text-white border border-white/20 backdrop-blur-md bg-white/5">
                                    {homepageContent[locale].hero.badge}
                                </span>
                            </div>
                            <h1 className="text-5xl font-medium leading-[1.05] tracking-tight text-white drop-shadow-2xl">
                                FlorenceEGI<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white font-normal text-3xl block mt-2">
                                    {homepageContent[locale].hero.headline}
                                </span>
                            </h1>
                            <p className="text-lg text-gray-300 font-light leading-relaxed max-w-[90%]">
                                {homepageContent[locale].hero.subheadline}
                            </p>
                        </div>

                        {/* SPACER 1 - Golden Ratio Primary Space (Larger) */}
                        <div className="flex-grow-[1.618]" />

                        {/* 2. Visual Explainer - The Artifact */}
                        <div className="w-full flex justify-center">
                            <EgiExplainer />
                        </div>

                        {/* SPACER 2 - Golden Ratio Secondary Space (Smaller) */}
                        <div className="flex-grow-[1]" />

                        {/* 3. Action Block - Grounded */}
                        <div className="mt-4">
                            <button
                                onClick={() => navigate('/platforms')}
                                className="w-full bg-white text-black font-medium py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                            >
                                {homepageContent[locale].hero.cta_primary} <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* PRODUCTS CAROUSEL - VISUAL CARDS */}
                <section className="py-16 bg-[#050505] relative z-20 -mt-8 rounded-t-3xl border-t border-white/10 shadow-[0_-20px_60px_rgba(0,0,0,1)]">
                    <div className="px-6 mb-8 flex justify-between items-end">
                        <div>
                            <h2 className="text-2xl font-light text-white mb-2">{t('platforms.title')}</h2>
                            <p className="text-xs text-gray-500 uppercase tracking-widest">{t('platforms.subtitle')}</p>
                        </div>
                    </div>

                    {/* Horizontal Scroll Snap */}
                    <div className="flex overflow-x-auto snap-x snap-mandatory px-6 gap-5 pb-8 no-scrollbar">
                        {platformsList
                            .filter(platform => platform.type === 'manipulator') // Solo manipolatori EGI nella homepage
                            .map((platform) => {
                                // Select specific image based on ID
                                let bgImage = config.projectsHeroPath;
                                if (platform.id === 'florence-art-egi') bgImage = config.florenceHeroPath; // Purple Visual
                                if (platform.id === 'natan-loc') bgImage = config.infoHeroPath; // Doc Visual

                                return (
                                    <div
                                        key={platform.id}
                                        onClick={() => platform.status === 'active' && window.open(platform.url, '_blank')}
                                        className="snap-center shrink-0 w-[85%] h-[420px] bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden relative group active:scale-[0.98] transition-transform shadow-lg"
                                    >
                                        {/* Full Card Image Background */}
                                        <div className="absolute inset-0 z-0">
                                            <img src={bgImage} alt={platform.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                            <div className="flex justify-between items-end mb-4">
                                                <h3 className="text-3xl font-medium text-white leading-tight">{platform.name}</h3>
                                                {platform.status === 'active' && <div className="p-2 bg-white rounded-full text-black"><ArrowRight className="w-4 h-4" /></div>}
                                            </div>

                                            <p className="text-sm text-gray-300 mb-4 line-clamp-2 leading-relaxed">{platform.description}</p>

                                            <div className="flex items-center gap-2">
                                                {platform.status === 'active' ? (
                                                    <span className="text-[10px] text-black bg-primary px-2 py-1 rounded font-bold uppercase">{t('general.status.live')}</span>
                                                ) : (
                                                    <span className="text-[10px] text-white bg-white/20 backdrop-blur px-2 py-1 rounded font-bold uppercase">{t('general.status.coming_soon')}</span>
                                                )}
                                                <span className="text-[10px] text-gray-400 uppercase tracking-wider">{platform.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </section>

                {/* WHY US - 3 Pilastri */}
                <section className="py-20 px-6 relative bg-black border-t border-white/5">
                    <h2 className="text-2xl font-light text-white mb-12 text-center tracking-wide">{homepageContent[locale].pillars.title}</h2>

                    <div className="space-y-12">
                        {homepageContent[locale].pillars.items.map((item, index) => {
                            const Icon = [Shield, Zap, Globe][index] || Shield;
                            return (
                                <div key={index} className="flex gap-6 items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 text-white border border-white/10 shadow-inner">
                                        <Icon className="w-6 h-6 text-gray-300" strokeWidth={1} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl text-white font-medium mb-2">{item.title}</h3>
                                        <p className="text-base text-gray-500 font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                <Footer />
            </ScreenContainer >
        </>
    );
};
