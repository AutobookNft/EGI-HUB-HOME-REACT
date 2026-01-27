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

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

function App() {
    console.log(`🧭 [App] Rendering - Desktop Only Mode`);
    const currentPath = useUIStore((state) => state.currentPath);

    // Routing logic - Desktop only
    const renderPage = () => {
        console.log('🔍 [renderPage] currentPath:', currentPath);

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
            console.log('🏠 Rendering desktop 3D view');
            return <EcosystemView />;
        }

        // Default fallback: desktop 3D
        console.log('🏠 Fallback to desktop 3D view');
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
