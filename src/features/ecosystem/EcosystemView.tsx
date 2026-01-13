import { TopBar } from '@/components/layout/TopBar';
import { Sidebar } from '@/components/layout/Sidebar';
import { MissionControl } from '@/components/layout/MissionControl';
import { DetailPanel } from '@/components/layout/DetailPanel';
import { BottomBar } from '@/components/layout/BottomBar';
import { Loader } from '@/components/ui/Loader';
import { useEcosystemData } from './useEcosystemData';

interface EcosystemViewProps {
    view?: string;
}

export const EcosystemView = () => {
    console.log(`📺 [EcosystemView] Rendering`);
    const { data: ecosystem, loading: isLoading } = useEcosystemData();

    if (isLoading || !ecosystem) {
        return <Loader />;
    }

    return (
        <>
            {/* React UI Overlay (z-index > 3D scene) */}
            <TopBar />
            <Sidebar />
            <MissionControl />
            <DetailPanel />
            <BottomBar />

            {/* 3D Scene renders via engine.js loaded in index.html */}
        </>
    );
};
