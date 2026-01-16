/**
 * @file NatanSystemPage.tsx
 * @description NATAN Subsystem Page - Solar system view for NATAN variants
 * @author Padmin D. Curtis (OS3.0)
 */

import { useEffect } from 'react';
import { TopBar } from '@/components/layout/TopBar';
import { Sidebar } from '@/components/layout/Sidebar';
import { MissionControl } from '@/components/layout/MissionControl';
import { DetailPanel } from '@/components/layout/DetailPanel';
import { BottomBar } from '@/components/layout/BottomBar';
import { natanSystemData, natanOrbitConfig } from '@/data/systems/natanSystemData';

declare global {
    interface Window {
        rebuildEcosystem: (data: any) => void;
        ecosystemData: any;
        orbitalConfig: any;
    }
}

export const NatanSystemPage = () => {
    console.log(`🪐 [NatanSystemPage] Rendering NATAN Subsystem`);

    useEffect(() => {
        // Build NATAN solar system when component mounts
        if (window.rebuildEcosystem) {
            console.log("🚀 Switching to NATAN System");
            const fullData = {
                ...natanSystemData
            };
            
            // Remove orbitalConfig from data keys (it's not a node)
            delete fullData.orbitalConfig;
            
            // Re-add as separate property
            fullData.orbitalConfig = natanOrbitConfig;
            
            window.ecosystemData = fullData;
            window.orbitalConfig = natanOrbitConfig;
            window.rebuildEcosystem(fullData);
        }

        return () => {
            // No cleanup needed - parent will handle route change
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
                <h2 className="text-orange-500 font-rajdhani text-2xl tracking-[0.5em] opacity-80 backdrop-blur-sm bg-black/30 px-6 py-1 rounded-full border border-orange-500/20">
                    NATAN SYSTEM
                </h2>
            </div>
        </>
    );
};
