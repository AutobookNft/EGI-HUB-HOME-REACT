import { useEffect } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Sidebar } from '@/components/layout/Sidebar';
import { MissionControl } from '@/components/layout/MissionControl';
import { DetailPanel } from '@/components/layout/DetailPanel';
import { BottomBar } from '@/components/layout/BottomBar';
import { platformsSystemData, platformsOrbitConfig } from '@/data/systems/platformsSystemData';

declare global {
    interface Window {
        rebuildEcosystem: (data: any) => void;
        ecosystemData: any;
        orbitalConfig: any;
    }
}

export const PlatformsPage = () => {
    console.log(`🪐 [PlatformsPage] ===== MOUNTING PLATFORMS PAGE =====`);
    console.log(`📦 [PlatformsPage] Data loaded:`, platformsSystemData);

    useEffect(() => {
        console.log("🚀 [PlatformsPage] ===== useEffect TRIGGERED =====");
        console.log("📦 [PlatformsPage] platformsSystemData:", platformsSystemData);
        console.log("🔧 [PlatformsPage] platformsOrbitConfig:", platformsOrbitConfig);
        
        const fullData: any = {
            ...platformsSystemData,
            orbitalConfig: platformsOrbitConfig
        };
        
        console.log("📦 [PlatformsPage] fullData to rebuild:", fullData);
        
        // Force overwrite window globals
        window.ecosystemData = fullData;
        window.orbitalConfig = platformsOrbitConfig;
        
        if (window.rebuildEcosystem) {
            console.log("♻️ [PlatformsPage] Calling rebuildEcosystem NOW...");
            window.rebuildEcosystem(fullData);
            console.log("✅ [PlatformsPage] rebuildEcosystem COMPLETED");
        } else {
            console.error("❌ [PlatformsPage] window.rebuildEcosystem not found!");
        }

        return () => {
            console.log("🧹 [PlatformsPage] Component unmounting...");
        };
    }, []);

    return (
        <>
            {/* Reuse Main Layout Components */}
            <TopBar />
            <Sidebar />
            <MissionControl />
            <DetailPanel />
            <BottomBar />

            {/* Title Overlay for context */}
            <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none fade-in">
                <h2 className="text-gold font-rajdhani text-2xl tracking-[0.5em] opacity-80 backdrop-blur-sm bg-black/30 px-6 py-1 rounded-full border border-gold/20">
                    PLATFORMS
                </h2>
            </div>
        </>
    );
};
