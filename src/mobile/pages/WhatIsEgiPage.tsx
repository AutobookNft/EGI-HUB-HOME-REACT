import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useI18n } from '@/i18n';
import {
    Fingerprint, Scroll, HeartHandshake,
    Award, Coins, Bot, Leaf,
    ShieldCheck, Globe, Infinity as InfinityIcon,
    TrendingUp, Landmark, Ticket, Banknote,
    Scale, Eye, Trees,
    Palette, FileSignature, Gem, BookOpen
} from 'lucide-react';
import { InfiniteMarquee } from '@/mobile/components/InfiniteMarquee';

export function WhatIsEgiPage() {
    const { t } = useI18n();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const components = [
        {
            icon: Fingerprint,
            titleKey: 'info_egi.component_1_title',
            descKey: 'info_egi.component_1_desc',
            color: 'text-oro-fiorentino',
            borderColor: 'border-oro-fiorentino'
        },
        {
            icon: Scroll,
            titleKey: 'info_egi.component_2_title',
            descKey: 'info_egi.component_2_desc',
            color: 'text-blu-algoritmo',
            borderColor: 'border-blu-algoritmo'
        },
        {
            icon: HeartHandshake,
            titleKey: 'info_egi.component_3_title',
            descKey: 'info_egi.component_3_desc',
            color: 'text-verde-rinascita',
            borderColor: 'border-verde-rinascita'
        }
    ];

    const functions = [
        { icon: Award, titleKey: 'info_egi.function_1_title', descKey: 'info_egi.function_1_desc', color: 'text-oro-fiorentino' },
        { icon: Coins, titleKey: 'info_egi.function_2_title', descKey: 'info_egi.function_2_desc', color: 'text-viola-innovazione' },
        { icon: Bot, titleKey: 'info_egi.function_3_title', descKey: 'info_egi.function_3_desc', color: 'text-blu-algoritmo' },
        { icon: Leaf, titleKey: 'info_egi.function_4_title', descKey: 'info_egi.function_4_desc', color: 'text-verde-rinascita' }
    ];

    const traits = [
        { icon: ShieldCheck, titleKey: 'info_egi.trait_identity_title', descKey: 'info_egi.trait_identity_desc' },
        { icon: InfinityIcon, titleKey: 'info_egi.trait_perpetuity_title', descKey: 'info_egi.trait_perpetuity_desc' },
        { icon: Globe, titleKey: 'info_egi.trait_universality_title', descKey: 'info_egi.trait_universality_desc' }
    ];

    const utilities = [
        { icon: TrendingUp, titleKey: 'info_egi.utility_trade_title', descKey: 'info_egi.utility_trade_desc' },
        { icon: Landmark, titleKey: 'info_egi.utility_defi_title', descKey: 'info_egi.utility_defi_desc' },
        { icon: Ticket, titleKey: 'info_egi.utility_access_title', descKey: 'info_egi.utility_access_desc' },
        { icon: Banknote, titleKey: 'info_egi.utility_royalty_title', descKey: 'info_egi.utility_royalty_desc' }
    ];

    const advantages = [
        { icon: Scale, titleKey: 'info_egi.advantage_1_title', descKey: 'info_egi.advantage_1_desc' },
        { icon: Eye, titleKey: 'info_egi.advantage_2_title', descKey: 'info_egi.advantage_2_desc' },
        { icon: Trees, titleKey: 'info_egi.advantage_3_title', descKey: 'info_egi.advantage_3_desc' }
    ];

    return (
        <div className="min-h-screen bg-gray-50/95 font-body text-gray-800 pb-20">
            <Helmet>
                <title>{t('info_egi.page_title')}</title>
                <meta name="description" content={t('info_egi.page_description')} />
                <meta name="keywords" content={t('info_egi.meta_keywords')} />
            </Helmet>

            {/* Header / Hero */}
            <header className="bg-gradient-to-r from-[#1a1a1a] to-[#2c3e50] text-white pt-48 pb-16 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/img/pattern-renaissance.png')]"></div> {/* Placeholder pattern */}
                <div className="relative z-10 max-w-4xl mx-auto">
                    <h1 className="font-renaissance text-4xl md:text-6xl text-oro-fiorentino mb-4">
                        {t('info_egi.section_definition_title')}
                    </h1>
                    <p className="text-lg md:text-xl font-light opacity-90 text-gray-300">
                        {t('info_egi.section_definition_text_1')}
                    </p>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12 space-y-20">

                {/* Definition */}
                <section id="definizione" className="prose prose-lg mx-auto text-center">
                    <h2 className="font-renaissance text-3xl text-blu-algoritmo mb-6">
                        {t('info_egi.section_definition_subtitle')}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        {t('info_egi.section_definition_text_2')}
                    </p>
                </section>

                {/* EGI Images Carousel */}
                <section className="w-full">
                    <div className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory no-scrollbar px-2 -mx-2 items-center">
                        {[
                            '/images/egi_01.png',
                            '/images/egi_02.png',
                            '/images/egi_03.png'
                        ].map((imgSrc, idx) => (
                            <div key={idx} className="snap-center shrink-0 h-[500px] w-auto rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                                <img
                                    src={imgSrc}
                                    alt={`EGI Example ${idx + 1}`}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Swipe Indicator */}
                    <div className="flex justify-center gap-2 -mt-4 mb-8">
                        {[0, 1, 2].map((_, idx) => (
                            <div key={idx} className="w-2 h-2 rounded-full bg-gray-300"></div>
                        ))}
                    </div>
                </section>

                {/* Components */}
                <section id="componenti">
                    <div className="text-center mb-10">
                        <h2 className="font-renaissance text-3xl text-gray-800 mb-2">{t('info_egi.section_components_title')}</h2>
                        <p className="text-gray-500">{t('info_egi.section_components_intro')}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {components.map((comp, idx) => (
                            <div key={idx} className={`bg-white p-8 rounded-xl shadow-lg border-t-4 ${comp.borderColor} hover:shadow-xl transition-shadow`}>
                                <div className={`flex justify-center mb-6`}>
                                    <div className={`p-4 rounded-full bg-gray-50 ${comp.color}`}>
                                        <comp.icon size={48} strokeWidth={1.5} />
                                    </div>
                                </div>
                                <h3 className="font-renaissance text-xl font-bold text-gray-800 text-center mb-3">
                                    {t(comp.titleKey)}
                                </h3>
                                <p className="text-gray-600 text-center text-sm leading-relaxed">
                                    {t(comp.descKey)}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* EGI Types Marquee */}
                <section className="py-10 overflow-hidden">
                    <div className="text-center mb-8">
                        <h2 className="font-renaissance text-3xl text-blu-algoritmo mb-2">{t('info_egi.egi_types_title')}</h2>
                    </div>

                    <div className="space-y-6">
                        <InfiniteMarquee
                            speed={50}
                            direction="right"
                            items={[
                                { icon: Palette, text: t('info_egi.egi_type_artwork') },
                                { icon: FileSignature, text: t('info_egi.egi_type_document') },
                                { icon: Ticket, text: t('info_egi.egi_type_utility') },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 text-blu-algoritmo">
                                    <item.icon size={20} className="text-oro-fiorentino" />
                                    <span className="font-medium text-sm" dangerouslySetInnerHTML={{ __html: item.text.replace(/• /g, '') }}></span>
                                </div>
                            ))}
                        />

                        <InfiniteMarquee
                            speed={50}
                            direction="left"
                            items={[
                                { icon: Coins, text: t('info_egi.egi_type_token') },
                                { icon: Gem, text: t('info_egi.egi_type_collectible') },
                                { icon: BookOpen, text: t('info_egi.egi_type_narrative') },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 text-blu-algoritmo">
                                    <item.icon size={20} className="text-verde-rinascita" />
                                    <span className="font-medium text-sm" dangerouslySetInnerHTML={{ __html: item.text.replace(/• /g, '') }}></span>
                                </div>
                            ))}
                        />
                    </div>
                </section>

                {/* Functions */}
                <section id="funzioni" className="bg-white/50 p-8 rounded-2xl border border-gray-200">
                    <div className="text-center mb-10">
                        <h2 className="font-renaissance text-3xl text-blu-algoritmo mb-2">{t('info_egi.section_functions_title')}</h2>
                        <p className="text-gray-500">{t('info_egi.section_functions_subtitle')}</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {functions.map((func, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                                <func.icon className={`${func.color} mt-1`} size={32} />
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">{t(func.titleKey)}</h3>
                                    <p className="text-sm text-gray-600">{t(func.descKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Traits */}
                <section id="tratti" className="bg-gradient-to-br from-[#1B365D] to-[#2c3e50] p-8 md:p-12 rounded-2xl text-white shadow-2xl">
                    <h2 className="font-renaissance text-3xl text-oro-fiorentino text-center mb-10">{t('info_egi.section_traits_title')}</h2>
                    <div className="space-y-8">
                        {traits.map((trait, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 border-b border-white/10 last:border-0 pb-8 last:pb-0">
                                <div className="p-3 bg-white/10 rounded-full text-oro-fiorentino backdrop-blur-sm">
                                    <trait.icon size={36} />
                                </div>
                                <div>
                                    <h3 className="font-renaissance text-2xl mb-2">{t(trait.titleKey)}</h3>
                                    <p className="text-gray-300 font-light">{t(trait.descKey)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Utilities */}
                <section id="utilities">
                    <h2 className="font-renaissance text-3xl text-center text-gray-800 mb-10">{t('info_egi.section_utilities_title')}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {utilities.map((util, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100 hover:-translate-y-1 transition-transform cursor-default">
                                <util.icon className="mx-auto text-gray-400 mb-4" size={32} />
                                <h3 className="font-bold text-gray-800 text-sm mb-2">{t(util.titleKey)}</h3>
                                <p className="text-xs text-gray-500">{t(util.descKey)}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Advantages */}
                <section id="vantaggi" className="bg-gray-100 p-8 rounded-2xl">
                    <h2 className="font-renaissance text-3xl text-center text-verde-rinascita mb-10">{t('info_egi.section_advantages_title')}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {advantages.map((adv, idx) => (
                            <div key={idx} className="text-center">
                                <div className="inline-block p-4 bg-white rounded-full text-verde-rinascita shadow-sm mb-4">
                                    <adv.icon size={32} />
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2">{t(adv.titleKey)}</h3>
                                <p className="text-sm text-gray-600">{t(adv.descKey)}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center py-10">
                    <h2 className="font-renaissance text-4xl text-gray-900 mb-2">{t('info_egi.cta_title')}</h2>
                    <p className="text-xl text-gray-600 font-light mb-8">{t('info_egi.cta_subtitle')}</p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <button className="px-8 py-4 bg-oro-fiorentino text-white font-bold rounded-full shadow-lg hover:bg-[#c49565] transition-colors">
                            {t('info_egi.cta_button_create')}
                        </button>
                        <button className="px-8 py-4 bg-white text-gray-800 border border-gray-300 font-bold rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                            {t('info_egi.cta_button_explore')}
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12 px-6 text-center text-sm">
                <p className="mb-4">&copy; {new Date().getFullYear()} Florence EGI. {t('info_egi.footer_copyright')}</p>
                <div className="flex justify-center gap-6">
                    <a href="#" className="hover:text-white transition-colors">{t('info_egi.footer_privacy')}</a>
                    <a href="#" className="hover:text-white transition-colors">{t('info_egi.footer_terms')}</a>
                </div>
            </footer>
        </div>
    );
}
