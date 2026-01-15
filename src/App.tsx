import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EcosystemView } from '@/features/ecosystem/EcosystemView';
import { EcosystemEntranceMobile } from '@/components/ecosystem/EcosystemEntranceMobile';
import { AmbientePage } from '@/pages/AmbientePage';
import { OracodePage } from '@/pages/OracodePage';
import { CorporatePage } from '@/pages/CorporatePage';
import { useUIStore } from '@/stores/useUIStore';

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

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const media = window.matchMedia('(max-width: 768px)');

        const handleViewportChange = () => {
            const isMobile =
                media.matches ||
                window.matchMedia('(pointer: coarse)').matches ||
                /Mobi|Android|iPhone|iPad|iPod/i.test(window.navigator.userAgent);

            const path = window.location.pathname;
            const knownRoutes = ['/hub-mobile', '/ambiente', '/oracode', '/corporate', '/projects'];
            const isKnownRoute = knownRoutes.some((route) => path.endsWith(route));
            const isHomePath =
                path === '/' ||
                path.endsWith('/index.html') ||
                (!isKnownRoute && path.endsWith('/'));

            if (isMobile && isHomePath && currentPath !== '/hub-mobile') {
                navigate('/hub-mobile');
                return;
            }

            if (!isMobile && path.endsWith('/hub-mobile')) {
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
        if (currentPath === '/hub-mobile') return <EcosystemEntranceMobile />;
        if (currentPath === '/ambiente') return <AmbientePage />;
        if (currentPath === '/oracode') return <OracodePage />;
        if (currentPath === '/corporate') return <CorporatePage />;

        // Default: 3D Ecosystem View
        return <EcosystemView />;
    };

    return (
        <QueryClientProvider client={queryClient}>
            {renderPage()}
        </QueryClientProvider>
    );
}

export default App;

