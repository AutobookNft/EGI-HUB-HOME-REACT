import { useUIStore } from '@/stores/useUIStore';

interface Tab {
    id: string;
    label: string;
    icon: string;
    route: string;
    isExternal?: boolean;
}

const tabs: Tab[] = [
    { id: 'home', label: 'Home', icon: '🏠', route: '/' },
    { id: 'platforms', label: 'Piattaforme', icon: '📊', route: '/platforms' },
    { id: 'mission', label: 'Mission', icon: '🎯', route: '/mission' },
    {
        id: 'info',
        label: 'Info',
        icon: 'ℹ️',
        route: 'https://egi-info.13.53.205.215.sslip.io',
        isExternal: true
    },
    { id: 'more', label: 'Altro', icon: '●●●', route: '/more' }
];

export const TabBar = () => {
    const navigate = useUIStore((state) => state.navigate);
    const currentPath = useUIStore((state) => state.currentPath);

    const handleTabClick = (tab: Tab) => {
        if (tab.isExternal) {
            window.open(tab.route, '_blank', 'noopener,noreferrer');
        } else {
            navigate(tab.route);
        }
    };

    const isActive = (route: string) => currentPath === route;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-black/95 backdrop-blur-lg">
            <div className="flex items-center justify-around h-16 px-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab)}
                        className={`flex flex-col items-center justify-center gap-1 px-3 py-2 transition-colors ${!tab.isExternal && isActive(tab.route)
                                ? 'text-primary'
                                : 'text-text-muted hover:text-white'
                            }`}
                    >
                        <span className="text-xl">{tab.icon}</span>
                        <span className="text-[10px] uppercase tracking-wide font-mono">
                            {tab.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};
