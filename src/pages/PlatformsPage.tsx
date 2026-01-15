import { useEffect } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Sidebar } from '@/components/layout/Sidebar';
import { MissionControl } from '@/components/layout/MissionControl';
import { DetailPanel } from '@/components/layout/DetailPanel';
import { BottomBar } from '@/components/layout/BottomBar';
import { platformsData, platformsOrbitConfig } from '@/data/platformsData';

declare global {
    interface Window {
        rebuildEcosystem: (data: any) => void;
        ecosystemData: any;
        orbitalConfig: any;
    }
}

export const PlatformsPage = () => {
    console.log(`🪐 [PlatformsPage] Rendering`);

    useEffect(() => {
        // MOUNT: Switch to Platforms Solar System
        if (window.rebuildEcosystem) {
            console.log("🚀 Switching to Piattaforme Attive System");
            // Inject orbital config into data object if engine expects it there (based on engine.js logic)
            // engine.js: constructEcosystem(newData, newData.orbitalConfig || [])
            const fullData = {
                ...platformsData,
                orbitalConfig: platformsOrbitConfig
            };
            window.rebuildEcosystem(fullData);
        }

        return () => {
            // UNMOUNT: Switch back to Main Hub System
            if (window.rebuildEcosystem && window.ecosystemData) {
                console.log("↩️  Reverting to Main Hub System");
                const mainData = {
                    ...window.ecosystemData,
                    orbitalConfig: window.orbitalConfig
                };
                window.rebuildEcosystem(mainData);
            }
        };
    }, []);

    return (
        <>
            {/* Reuse Main Layout Components but potentially with different state/context if needed */}
            {/* For now, identical layout overlay */}
            <TopBar />
            <Sidebar />
            <MissionControl />
            <DetailPanel />
            <BottomBar />

            {/* Title Overlay for context */}
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none fade-in">
                <h2 className="text-gold font-rajdhani text-2xl tracking-[0.5em] opacity-80 backdrop-blur-sm bg-black/30 px-6 py-1 rounded-full border border-gold/20">
                    PIATTAFORME ATTIVE
                </h2>
            </div>
        </>
    );
};
