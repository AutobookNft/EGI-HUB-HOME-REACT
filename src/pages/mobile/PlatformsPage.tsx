import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { TabBar } from '@/components/mobile/layout/TabBar';
import { PlatformCard } from '@/components/mobile/cards/PlatformCard';
import { platforms } from '@/data/content/platforms';
import { useI18n } from '@/i18n';

export const PlatformsPage = () => {
    const { locale } = useI18n();
    const platformsList = platforms[locale];

    return (
        <>
            <ScreenContainer>
                <div className="px-5 py-8 space-y-6">
                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-white font-rajdhani">
                            Piattaforme
                        </h1>
                        <p className="text-sm text-text-muted mt-2">
                            L'ecosistema EGI Hub
                        </p>
                    </div>

                    {/* Platforms List */}
                    <div className="space-y-3">
                        {platformsList.map((platform) => (
                            <PlatformCard
                                key={platform.id}
                                platform={platform}
                                onClick={() => {
                                    if (platform.status === 'active') {
                                        window.open(platform.url, '_blank', 'noopener,noreferrer');
                                    } else {
                                        // Coming soon - no action
                                    }
                                }}
                            />
                        ))}
                    </div>

                    {/* Empty state if no platforms */}
                    {platformsList.length === 0 && (
                        <div className="text-center py-12 text-text-muted">
                            <p>Nessuna piattaforma disponibile</p>
                        </div>
                    )}
                </div>
            </ScreenContainer>

            <TabBar />
        </>
    );
};
