import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { Header } from '@/components/mobile/layout/Header';
import { Footer } from '@/components/mobile/layout/Footer';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';
import { useI18n } from '@/i18n';
import { SeoHead } from '@/components/common/SeoHead';
import config from '@/utils/config';

export const InfoPage = () => {
    const { t } = useI18n();
    return (
        <>
            <SeoHead
                title={t('nav.info.title')}
                description={t('info.text')}
                schema={{ "@type": "WebPage", "name": t('nav.info.title') }}
            />
            <Header />
            <ScreenContainer className="bg-black text-white">
                <div className="pt-24 px-6 pb-24 text-center">
                    <div className="max-w-xs mx-auto space-y-6">
                        <h1 className="text-3xl font-light text-white">{t('info.title')}</h1>

                        <LiquidGlassCard className="p-8 space-y-4" variant="dark">
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {t('info.text')}
                            </p>
                            <a
                                href={config.infoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3 bg-white text-black font-bold text-sm rounded hover:bg-gray-200 transition-colors"
                            >
                                {t('info.cta')} ↗
                            </a>
                        </LiquidGlassCard>
                    </div>
                </div>
                <Footer />
            </ScreenContainer>
        </>
    );
};
