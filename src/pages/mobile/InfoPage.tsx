import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { Header } from '@/components/mobile/layout/Header';
import { Footer } from '@/components/mobile/layout/Footer';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';

export const InfoPage = () => {
    return (
        <>
            <Header />
            <ScreenContainer className="bg-black text-white">
                <div className="pt-24 px-6 pb-24 text-center">
                    <div className="max-w-xs mx-auto space-y-6">
                        <h1 className="text-3xl font-light text-white">Documentazione</h1>

                        <LiquidGlassCard className="p-8 space-y-4" variant="dark">
                            <p className="text-gray-400 text-sm leading-relaxed">
                                La documentazione tecnica completa è disponibile sul portale EGI INFO.
                            </p>
                            <a
                                href="https://egi-info.13.53.205.215.sslip.io"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full py-3 bg-white text-black font-bold text-sm rounded hover:bg-gray-200 transition-colors"
                            >
                                Vai al Portale Info ↗
                            </a>
                        </LiquidGlassCard>
                    </div>
                </div>
                <Footer />
            </ScreenContainer>
        </>
    );
};
