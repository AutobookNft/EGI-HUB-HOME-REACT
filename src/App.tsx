import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EcosystemEntranceMobile } from '@/components/ecosystem/EcosystemEntranceMobile';
import { EcosystemView } from '@/components/ecosystem/EcosystemView';
import { AmbientePage } from '@/pages/AmbientePage';
import { OracodePage } from '@/pages/OracodePage';
import { CorporatePage } from '@/pages/CorporatePage';
import { useUIStore } from '@/stores/useUIStore';

import { PlatformsPage } from '@/pages/PlatformsPage';
import { PlatformsMobilePage } from '@/pages/PlatformsMobilePage';
import { NatanSystemPage } from '@/pages/NatanSystemPage';
import { NatanMobilePage } from '@/pages/NatanMobilePage';
import { UnderConstructionPage } from '@/pages/UnderConstructionPage';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

function App() {
    console.log(`🧭 [App] Rendering`);
    const currentPath = useUIStore((state) => state.currentPath);
    const navigate = useUIStore((state) => state.navigate);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const media = window.matchMedia('(max-width: 768px)');

        const handleViewportChange = () => {
            const uaMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
            const uaDataMobile = (window.navigator as Navigator & { userAgentData?: { mobile?: boolean } }).userAgentData?.mobile;
            const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

            const mobileDetected =
                media.matches ||
                hasCoarsePointer ||
                uaMobile ||
                uaDataMobile === true;

            setIsMobile(mobileDetected);

            const path = window.location.pathname;
            const knownRoutes = ['/hub-mobile', '/ambiente', '/oracode', '/corporate', '/projects', '/platforms', '/platforms/natan', '/under-construction'];
            const isKnownRoute = knownRoutes.some((route) => path.endsWith(route));
            const isHomePath =
                path === '/' ||
                path.endsWith('/index.html') ||
                (!isKnownRoute && path.endsWith('/'));

            if (mobileDetected && isHomePath && currentPath !== '/hub-mobile') {
                navigate('/hub-mobile');
                return;
            }

            if (!mobileDetected && path.endsWith('/hub-mobile')) {
                navigate('/');
            }
        };

        handleViewportChange();
        media.addEventListener('change', handleViewportChange);

        return () => {
            media.removeEventListener('change', handleViewportChange);
        };
    }, [currentPath, navigate]);

    // Routing logic
    const renderPage = () => {
        console.log('🔍 [renderPage] currentPath:', currentPath, 'isMobile:', isMobile);

        // Mobile-specific pages
        if (currentPath === '/hub-mobile') return <EcosystemEntranceMobile />;
        if (isMobile && currentPath === '/platforms') return <PlatformsMobilePage />;
        if (isMobile && currentPath === '/platforms/natan') return <NatanMobilePage />;

        // Static pages (desktop or responsive)
        if (currentPath === '/ambiente') return <AmbientePage />;
        if (currentPath === '/oracode') return <OracodePage />;
        if (currentPath === '/corporate') return <CorporatePage />;
        if (currentPath === '/under-construction') return <UnderConstructionPage />;

        // Desktop-specific pages
        if (currentPath === '/platforms') return <PlatformsPage />;
        if (currentPath === '/platforms/natan') return <NatanSystemPage />;
        if (currentPath === '/projects') return <PlatformsPage />;

        // Home page routing - Always mobile home (no more 3D view)
        const path = typeof window !== 'undefined' ? window.location.pathname : currentPath;
        const isHomePath = path === '/' || currentPath === '/' || path.endsWith('/index.html');

        if (isHomePath) {
            console.log('🏠 Rendering home - desktop 3D view');
            return <EcosystemView />;
        }

        // Default fallback: desktop 3D
        console.log('🏠 Fallback to desktop 3D view');
        return <EcosystemView />;
    };

    return (
        <QueryClientProvider client={queryClient}>
            {renderPage()}
        </QueryClientProvider>
    );
}

export default App;

