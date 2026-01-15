import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EcosystemView } from '@/features/ecosystem/EcosystemView';
import { EcosystemEntranceMobile } from '@/components/ecosystem/EcosystemEntranceMobile';
import { AmbientePage } from '@/pages/AmbientePage';
import { OracodePage } from '@/pages/OracodePage';
import { CorporatePage } from '@/pages/CorporatePage';
import { useUIStore } from '@/stores/useUIStore';

import { PlatformsPage } from '@/pages/PlatformsPage';
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
            const knownRoutes = ['/hub-mobile', '/ambiente', '/oracode', '/corporate', '/projects', '/platforms', '/under-construction'];
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
        
        // Mobile home
        if (currentPath === '/hub-mobile') return <EcosystemEntranceMobile />;
        
        // Static pages
        if (currentPath === '/ambiente') return <AmbientePage />;
        if (currentPath === '/oracode') return <OracodePage />;
        if (currentPath === '/corporate') return <CorporatePage />;
        if (currentPath === '/platforms') return <PlatformsPage />;
        if (currentPath === '/projects') return <PlatformsPage />;
        if (currentPath === '/under-construction') return <UnderConstructionPage />;

        // Home page routing
        const path = typeof window !== 'undefined' ? window.location.pathname : currentPath;
        const isHomePath = path === '/' || currentPath === '/' || path.endsWith('/index.html');
        
        if (isMobile && isHomePath) {
            console.log('📱 Rendering mobile home');
            return <EcosystemEntranceMobile />;
        }
        
        // Default: 3D Ecosystem View (desktop home)
        console.log('🖥️ Rendering desktop 3D view');
        return <EcosystemView />;
    };

    return (
        <QueryClientProvider client={queryClient}>
            {renderPage()}
        </QueryClientProvider>
    );
}

export default App;

