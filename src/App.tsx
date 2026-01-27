import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EcosystemView } from '@/features/ecosystem/EcosystemView';
import { AmbientePage } from '@/pages/AmbientePage';
import { OracodePage } from '@/pages/OracodePage';
import { CorporatePage } from '@/pages/CorporatePage';
import { useUIStore } from '@/stores/useUIStore';

import { PlatformsPage } from '@/pages/PlatformsPage';
import { NatanSystemPage } from '@/pages/NatanSystemPage';
import { UnderConstructionPage } from '@/pages/UnderConstructionPage';

// Mobile components
import { AppShell } from '@/mobile/app/AppShell';
import { HomePage as MobileHomePage } from '@/mobile/pages/HomePage';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

function App() {
    const currentPath = useUIStore((state) => state.currentPath);

    // Mobile detection
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window === 'undefined') return false;
        return window.matchMedia('(max-width: 768px)').matches ||
            /iPhone|iPad|iPod/i.test(navigator.userAgent);
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const media = window.matchMedia('(max-width: 768px)');
        const handleChange = () => {
            const uaMobile = /iPhone|iPad|iPod/i.test(navigator.userAgent);
            setIsMobile(media.matches || uaMobile);
        };

        handleChange();
        media.addEventListener('change', handleChange);
        return () => media.removeEventListener('change', handleChange);
    }, []);

    // Mobile routing
    if (isMobile) {
        return (
            <HelmetProvider>
                <QueryClientProvider client={queryClient}>
                    <AppShell>
                        <MobileHomePage />
                    </AppShell>
                </QueryClientProvider>
            </HelmetProvider>
        );
    }

    // Desktop routing
    const renderPage = () => {
        // Static pages
        if (currentPath === '/ambiente') return <AmbientePage />;
        if (currentPath === '/oracode') return <OracodePage />;
        if (currentPath === '/corporate') return <CorporatePage />;
        if (currentPath === '/under-construction') return <UnderConstructionPage />;

        // Desktop-specific pages
        if (currentPath === '/platforms') return <PlatformsPage />;
        if (currentPath === '/platforms/natan') return <NatanSystemPage />;
        if (currentPath === '/projects') return <PlatformsPage />;

        // Home page routing - Desktop 3D view
        const path = typeof window !== 'undefined' ? window.location.pathname : currentPath;
        const isHomePath = path === '/' || currentPath === '/' || path.endsWith('/index.html');

        if (isHomePath) {
            return <EcosystemView />;
        }

        // Default fallback: desktop 3D
        return <EcosystemView />;
    };

    return (
        <HelmetProvider>
            <QueryClientProvider client={queryClient}>
                {renderPage()}
            </QueryClientProvider>
        </HelmetProvider>
    );
}

export default App;
