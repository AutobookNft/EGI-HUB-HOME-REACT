import { Loader } from '@/components/ui/Loader';
import { useEcosystemData } from './useEcosystemData';
import { DesktopHomeSidebar } from '@/components/desktop/home/DesktopHomeSidebar';
import { Sidebar } from '@/components/layout/Sidebar';
import { DesktopEgiCube } from '@/components/desktop/DesktopEgiCube';

import { TopBar } from '@/components/layout/TopBar';

export const EcosystemView = () => {
    console.log(`📺 [EcosystemView] Rendering`);
    const { data: ecosystem, loading: isLoading } = useEcosystemData();

    if (isLoading || !ecosystem) {
        return <Loader />;
    }

    return (
        <>
            {/* Top Navigation Bar */}
            <TopBar />

            {/* Left Navigation Sidebar */}
            <Sidebar />

            {/* EGI Transformation Cube (Center-left) */}
            <DesktopEgiCube />

            {/* New Desktop Sidebar (Content, shifted right) */}
            <DesktopHomeSidebar />

            {/* 3D Scene renders via engine.js loaded in index.html */}
            {/* The canvas is usually appended to body or a container by engine.js */}
            {/* We don't need to render it here, just ensure UI allows it to be seen */}
        </>
    );
};

