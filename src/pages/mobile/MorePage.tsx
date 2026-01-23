import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { TabBar } from '@/components/mobile/layout/TabBar';
import { LiquidGlassCard } from '@/components/mobile/ui/LiquidGlassCard';
import { useUIStore } from '@/stores/useUIStore';

export const MorePage = () => {
    const navigate = useUIStore((state) => state.navigate);

    const menuItems = [
        { label: 'Technology', route: '/tech', icon: '⚡' },
        { label: 'Info (Page)', route: '/info', icon: 'ℹ️' },
        { label: 'Coming Soon', route: '/under-construction', icon: '🚧' },
    ];

    return (
        <>
            <ScreenContainer>
                <div className="px-5 py-8 space-y-6">
                    <h1 className="text-3xl font-bold text-white font-rajdhani px-1">
                        Menu
                    </h1>

                    <div className="space-y-3">
                        {menuItems.map((item, idx) => (
                            <LiquidGlassCard
                                key={idx}
                                className="p-4 flex items-center gap-4"
                                onClick={() => navigate(item.route)}
                            >
                                <span className="text-2xl">{item.icon}</span>
                                <span className="font-bold text-white">{item.label}</span>
                                <span className="ml-auto text-text-muted">→</span>
                            </LiquidGlassCard>
                        ))}
                    </div>

                    <div className="pt-8 px-1">
                        <p className="text-xs text-text-muted text-center">
                            EGI HUB Mobile v2.0
                        </p>
                    </div>
                </div>
            </ScreenContainer>
            <TabBar />
        </>
    );
};
