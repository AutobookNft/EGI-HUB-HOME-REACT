import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EcosystemEntranceMobile } from '@/components/ecosystem/EcosystemEntranceMobile';
import { EcosystemView } from '@/features/ecosystem/EcosystemView';
import { AmbientePage } from '@/pages/AmbientePage';
import { OracodePage } from '@/pages/OracodePage';
import { CorporatePage } from '@/pages/CorporatePage';
import { useUIStore } from '@/stores/useUIStore';

import { PlatformsPage } from '@/pages/PlatformsPage';
import { PlatformsMobilePage } from '@/pages/PlatformsMobilePage';
import { NatanSystemPage } from '@/pages/NatanSystemPage';
import { NatanMobilePage } from '@/pages/NatanMobilePage';
import { UnderConstructionPage } from '@/pages/UnderConstructionPage';

// New mobile pages v2
import { HomePage as MobileHomePage } from '@/pages/mobile/HomePage';
import { PlatformsPage as MobilePlatformsPageV2 } from '@/pages/mobile/PlatformsPage';
import { MissionPage } from '@/pages/mobile/MissionPage';
import { TechPage } from '@/pages/mobile/TechPage';
import { InfoPage } from '@/pages/mobile/InfoPage';

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
    // Inizializza isMobile controllando window subito, se possibile, per evitare FOUC (Flash of Unstyled Content)
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') return false;
        // Check rapido sincrono iniziale
        return window.matchMedia('(max-width: 768px)').matches ||
            /Mobi|Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
    });

    // Per sicurezza, usiamo useLayoutEffect o useEffect per raffinare la stima o gestire resize
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const media = window.matchMedia('(max-width: 768px)');
        const handleViewportChange = () => {
            // Logica più robusta per determinare mobile reale
            const uaMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);
            const uaDataMobile = (window.navigator as Navigator & { userAgentData?: { mobile?: boolean } }).userAgentData?.mobile;
            const hasCoarsePointer = window.matchMedia('(pointer: coarse)').matches; // Touchscreens

            const mobileDetected =
                media.matches ||
                (hasCoarsePointer && window.innerWidth < 1024) || // Touch devices piccoli
                uaMobile ||
                uaDataMobile === true;

            setIsMobile(mobileDetected);
        };

        handleViewportChange(); // Esegui subito una volta per correggere eventuali mis-match iniziali
        media.addEventListener('change', handleViewportChange);
        window.addEventListener('resize', handleViewportChange); // Ascolta anche resize generale per sicurezza

        return () => {
            media.removeEventListener('change', handleViewportChange);
            window.removeEventListener('resize', handleViewportChange);
        };
    }, [currentPath, navigate]);

    // Routing logic
    const renderPage = () => {
        console.log('🔍 [renderPage] currentPath:', currentPath, 'isMobile:', isMobile);

        // Mobile pages v2 (new corporate)
        if (isMobile && currentPath === '/') return <MobileHomePage />;
        if (isMobile && currentPath === '/platforms') return <MobilePlatformsPageV2 />;
        if (isMobile && currentPath === '/mission') return <MissionPage />;
        if (isMobile && currentPath === '/tech') return <TechPage />;
        if (isMobile && currentPath === '/info') return <InfoPage />;

        // Old mobile pages (deprecated - keep for fallback)

        // Old mobile pages (deprecated - keep for fallback)

        // 🚨 FORCE REDIRECT: Se siamo mobile ma su path vecchi, vai a Home
        if (isMobile && (currentPath === '/hub-mobile' || currentPath === '/hub')) {
            window.history.replaceState(null, '', '/');
            return <MobileHomePage />;
        }

        // Static pages (desktop or responsive)
        if (currentPath === '/ambiente') return <AmbientePage />;
        if (currentPath === '/oracode') return <OracodePage />;
        if (currentPath === '/corporate') return <CorporatePage />;
        if (currentPath === '/mission') return <MissionPage />; // Desktop mission (same component)
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

