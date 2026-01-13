import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EcosystemView } from '@/features/ecosystem/EcosystemView';
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

    return (
        <QueryClientProvider client={queryClient}>
            <EcosystemView />
        </QueryClientProvider>
    );
}

export default App;
