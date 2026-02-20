import { useEffect } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Sidebar } from '@/components/layout/Sidebar';
import { DesktopPlatformSidebar } from '@/components/desktop/platform/DesktopPlatformSidebar';
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
            {/* Top Navigation Bar */}
            <TopBar />

            {/* Left Navigation Sidebar */}
            <Sidebar />

            {/* Right Platform Sidebar (Content) */}
            <DesktopPlatformSidebar />

            {/* 3D Scene renders via engine.js loaded in index.html */}
            {/* The canvas is usually appended to body or a container by engine.js */}
        </>
    );
};
