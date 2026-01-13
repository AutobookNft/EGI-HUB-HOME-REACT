import { useState, useEffect } from 'react';
import { useUIStore } from '@/stores/useUIStore';
import { ecosystemAPI } from '@/services/endpoints/ecosystem';
import type { EcosystemData } from '@/types/ecosystem';
import { useQuery } from '@tanstack/react-query';

export const useEcosystemData = () => {
    // Read view from Zustand store directly
    const currentPath = useUIStore((state) => state.currentPath);
    const view = currentPath.includes('projects') ? 'projects' : 'main';

    console.log(`🎣 [useEcosystemData] Hook called, currentPath: ${currentPath}, view: ${view}`);

    const [data, setData] = useState<EcosystemData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Initial load
    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            setError(null);
            try {
                const config = await ecosystemAPI.getEcosystem(view);
                setData(config);

                // Expose to window for engine.js
                (window as any).ecosystemData = config;
                (window as any).orbitalConfig = config.orbitalConfig || [];

                // Trigger Full Scene Rebuild
                if ((window as any).rebuildEcosystem) {
                    (window as any).rebuildEcosystem(config);
                } else if ((window as any).updateEcosystem) {
                    (window as any).updateEcosystem(config);
                }
                console.log(`✅ Ecosystem data ("${view}") synced with backend`);

            } catch (err) {
                console.error("Failed to load ecosystem:", err);
                setError('Failed to load ecosystem configuration');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [view]);


    // Connect UI interaction
    const { openDetailPanel } = useUIStore();
    useEffect(() => {
        // Fallback
        (window as any).openDetailPanel = (nodeId: string) => {
            openDetailPanel(nodeId);
        };

        // Smart Click Handler (Navigation vs Details)
        (window as any).handleNodeClick = (nodeId: string) => {
            if (!data) return;
            const node = data[nodeId];
            // Type guard: ensure it's an EcosystemNode, not OrbitalConfig[]
            if (!node || Array.isArray(node)) return;

            // 1. Internal Route (e.g. /projects) -> Direct Navigate
            if (node.route && node.route.startsWith('/')) {
                console.log(`🚀 [Sphere Click] Navigating: ${node.route}`);
                useUIStore.getState().navigate(node.route);
                return;
            }

            // 2. External Route -> Open in New Tab (only if explicitly separate app)
            // But User wants 'Projects' to be direct.
            // If it's a documentation node or has no route, open panel.

            // Standard behavior: 
            // - If route exists and is NOT '#', assume navigation
            // - BUT user hates panel. So prioritize link.

            if (node.route && node.route !== '#' && node.route !== '') {
                // Check if it's an absolute URL
                if (node.route.startsWith('http')) {
                    window.open(node.route, '_blank');
                } else {
                    useUIStore.getState().navigate(node.route);
                }
            } else {
                // 3. No route -> Open Detail Panel (Info/Docs)
                openDetailPanel(nodeId);
            }
        };
    }, [openDetailPanel, data]);

    return { data, loading, error };
};

export const useEcosystemMetrics = () => {
    return useQuery({
        queryKey: ['ecosystem', 'metrics'],
        queryFn: ecosystemAPI.getMetrics,
        refetchInterval: 5000, // Frequent updates for live feel
    });
};
