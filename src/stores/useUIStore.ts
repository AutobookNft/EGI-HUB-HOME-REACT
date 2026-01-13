import { create } from 'zustand';

interface UIStore {
    // Detail panel state
    detailPanelOpen: boolean;
    selectedNodeId: string | null;
    openDetailPanel: (nodeId: string) => void;
    closeDetailPanel: () => void;

    // Sidebar state
    sidebarCollapsed: boolean;
    toggleSidebar: () => void;

    // Loading state
    isLoading: boolean;
    setLoading: (loading: boolean) => void;

    // Routing state
    currentPath: string;
    navigate: (path: string) => void;
}

export const useUIStore = create<UIStore>((set) => ({
    // Detail panel
    detailPanelOpen: false,
    selectedNodeId: null,
    openDetailPanel: (nodeId) =>
        set({ detailPanelOpen: true, selectedNodeId: nodeId }),
    closeDetailPanel: () =>
        set({ detailPanelOpen: false, selectedNodeId: null }),

    // Sidebar
    sidebarCollapsed: false,
    toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),

    // Loading
    isLoading: false,
    setLoading: (loading) => set({ isLoading: loading }),

    // Routing
    currentPath: typeof window !== 'undefined' ? window.location.pathname : '/',
    navigate: (path) => {
        console.log(`[Zustand Router] Navigating to: ${path}`);
        window.history.pushState({}, '', path);
        set({ currentPath: path });
        console.log(`[Zustand Router] State updated, currentPath now: ${path}`);
    },
}));

// Sync with browser back/forward buttons
if (typeof window !== 'undefined') {
    window.addEventListener('popstate', () => {
        useUIStore.setState({ currentPath: window.location.pathname });
    });
}
