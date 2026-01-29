import { useMemo, useState, useEffect } from 'react';
import { useUIStore } from '@/stores/useUIStore';
import { ecosystemAPI } from '@/services/endpoints/ecosystem';
import type { EcosystemData } from '@/types/ecosystem';
import { useQuery } from '@tanstack/react-query';
import { createFallbackEcosystemData } from './fallbackEcosystemData';
import { useI18n } from '@/i18n';

export const useEcosystemData = () => {
    // Read view from Zustand store directly
    const currentPath = useUIStore((state) => state.currentPath);
    const view = currentPath.includes('projects') ? 'projects' : 'main';
    const { t } = useI18n();
    const fallbackEcosystemData = useMemo(() => createFallbackEcosystemData(t), [t]);

    console.log(`🎣 [useEcosystemData] Hook called, currentPath: ${currentPath}, view: ${view}`);

    const [data, setData] = useState<EcosystemData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const syncEcosystemData = (config: EcosystemData) => {
        setData(config);

        // Check if we're on a "system page" (Platforms, Natan, etc.)
        // These pages manage their own 3D scene data
        const systemPages = ['/platforms', '/platforms/natan'];
        const isSystemPage = systemPages.some(page => currentPath.startsWith(page));

        if (isSystemPage) {
            console.log(`⚠️ [useEcosystemData] On system page ${currentPath}, skipping rebuild to avoid override`);
            return;
        }

        // Expose to window for engine.js
        (window as any).ecosystemData = config;
        (window as any).orbitalConfig = config.orbitalConfig || [];

        // Trigger Full Scene Rebuild
        if ((window as any).rebuildEcosystem) {
            console.log(`♻️ [useEcosystemData] Rebuilding ecosystem for home view`);
            (window as any).rebuildEcosystem(config);
        } else if ((window as any).updateEcosystem) {
            (window as any).updateEcosystem(config);
        }
    };

    // Initial load
    useEffect(() => {
        // ⚠️ SKIP loadData on system pages - they manage their own data
        const systemPages = ['/platforms', '/platforms/natan'];
        const isSystemPage = systemPages.some(page => currentPath.startsWith(page));

        if (isSystemPage) {
            console.log(`⚠️ [useEcosystemData] On system page ${currentPath}, SKIPPING loadData entirely`);
            return; // Don't load fallback data on system pages
        }

        const loadData = async () => {
            setLoading(true);
            setError(null);
            try {
                const config = await ecosystemAPI.getEcosystem(view);
                syncEcosystemData(config);
                console.log(`✅ Ecosystem data ("${view}") synced with backend`);

            } catch (err) {
                console.error("Failed to load ecosystem:", err);
                syncEcosystemData(fallbackEcosystemData);
                setError('Failed to load ecosystem configuration');
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [view, fallbackEcosystemData, currentPath]);


    // Connect UI interaction
    const { openDetailPanel } = useUIStore();
    useEffect(() => {
        // ⭐ Expose internal navigation for HyperspaceEffect
        (window as any).navigateInternal = (path: string) => {
            console.log(`🚀 [navigateInternal] Navigating to: ${path}`);
            useUIStore.getState().navigate(path);
        };

        // Fallback
        (window as any).openDetailPanel = (nodeId: string) => {
            openDetailPanel(nodeId);
        };

        // Smart Click Handler (Navigation vs Details)
        (window as any).handleNodeClick = (nodeId: string) => {
            console.log(`🖱️ [handleNodeClick] Clicked node: ${nodeId}`);

            // Use window.ecosystemData instead of state data (for system pages)
            const currentData = (window as any).ecosystemData || data;
            console.log(`📦 [handleNodeClick] Using data from:`, currentData === data ? 'React state' : 'window.ecosystemData');

            if (!currentData) {
                console.error(`❌ [handleNodeClick] No data available!`);
                return;
            }

            const node = currentData[nodeId];
            console.log(`🎯 [handleNodeClick] Found node:`, node);

            // Type guard: ensure it's an EcosystemNode, not OrbitalConfig[]
            if (!node || Array.isArray(node)) {
                console.error(`❌ [handleNodeClick] Invalid node or is array`);
                return;
            }

            // Get sphere mesh for hyperspace effect
            const nodes = (window as any).nodes;
            const sphereMesh = nodes?.[nodeId]?.glassMesh || nodes?.[nodeId]?.coreMesh;
            const hyperspaceEffect = (window as any).hyperspaceEffect;

            console.log(`🎨 [handleNodeClick] sphereMesh:`, sphereMesh);
            console.log(`✨ [handleNodeClick] hyperspaceEffect:`, hyperspaceEffect);
            console.log(`🛤️ [handleNodeClick] node.route:`, node.route);

            // ⭐ Hyperspace whitelist: internal routes that should trigger effect
            const hyperspaceInternalRoutes = ['/ambiente', '/oracode', '/corporate', '/platforms', '/platforms/natan', '/under-construction', '/what-is'];

            // 1. Internal Route -> Check if should trigger hyperspace
            if (node.route && node.route.startsWith('/')) {
                console.log(`🔍 [handleNodeClick] Internal route detected: ${node.route}`);

                if (hyperspaceInternalRoutes.includes(node.route) && hyperspaceEffect && sphereMesh) {
                    console.log(`✨ [Hyperspace Internal] Warping to: ${node.route}`);
                    // Trigger hyperspace, then navigate internally
                    hyperspaceEffect.warpToSphere(sphereMesh, node.route, true);
                } else {
                    console.log(`🚀 [Direct Navigate] ${node.route} (no hyperspace or missing effect/mesh)`);
                    useUIStore.getState().navigate(node.route);
                }
                return;
            }

            // 2. External Route -> Hyperspace Warp Animation
            if (node.route && node.route !== '#' && node.route !== '') {

                if (hyperspaceEffect && sphereMesh && node.route.startsWith('http')) {
                    // ⭐ Trigger Star Wars-style hyperspace transition
                    console.log(`✨ [Hyperspace] Warping to: ${node.route}`);
                    hyperspaceEffect.warpToSphere(sphereMesh, node.route);
                } else if (node.route.startsWith('http')) {
                    // Fallback: instant navigation
                    console.warn('⚠️ Hyperspace fallback to window.open');
                    window.open(node.route, '_blank');
                } else {
                    // Internal SPA navigation
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
