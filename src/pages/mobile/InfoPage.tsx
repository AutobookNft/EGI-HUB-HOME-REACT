import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { TabBar } from '@/components/mobile/layout/TabBar';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';

export const InfoPage = () => {
    return (
        <>
            <ScreenContainer>
                <div className="px-5 py-8 space-y-6">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-white font-rajdhani">
                            Info
                        </h1>
                    </div>

                    <LiquidGlassCard className="p-5 text-center text-text-muted">
                        <p>[TBD - Placeholder content]</p>
                        <p className="text-xs mt-2">
                            (Use external EGI-INFO site via Tab Bar)
                        </p>
                    </LiquidGlassCard>
                </div>
            </ScreenContainer>
            <TabBar />
        </>
    );
};
