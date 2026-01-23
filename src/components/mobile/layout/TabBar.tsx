import { useUIStore } from '@/stores/useUIStore';
import { Home, BarChart2, Target, Info, MoreHorizontal } from 'lucide-react';

interface Tab {
    id: string;
    label: string;
    icon: any; // Lucide component
    route: string;
    isExternal?: boolean;
}

const tabs: Tab[] = [
    { id: 'home', label: 'Home', icon: Home, route: '/' },
    { id: 'platforms', label: 'Prodotti', icon: BarChart2, route: '/platforms' },
    { id: 'mission', label: 'Mission', icon: Target, route: '/mission' },
    {
        id: 'info',
        label: 'Info',
        icon: Info,
        route: 'https://egi-info.13.53.205.215.sslip.io',
        isExternal: true
    },
    { id: 'more', label: 'More', icon: MoreHorizontal, route: '/more' }
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
        <div className="fixed bottom-0 left-0 right-0 z-50">
            {/* Blur gradient fade up for sleek integration */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

            <div className="relative bg-black/40 backdrop-blur-xl border-t border-white/10 pb-safe">
                <div className="flex items-center justify-around h-[60px] px-2">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const active = !tab.isExternal && isActive(tab.route);

                        return (
                            <button
                                key={tab.id}
                                onClick={() => handleTabClick(tab)}
                                className={`group flex flex-col items-center justify-center gap-1 px-1 py-1 w-16 transition-all duration-300`}
                            >
                                <div className={`p-1.5 rounded-xl transition-all ${active ? 'bg-white/10' : 'bg-transparent group-hover:bg-white/5'}`}>
                                    <Icon
                                        className={`w-5 h-5 stroke-[1.5px] transition-colors ${active ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                                            }`}
                                    />
                                </div>
                                {/* Micro label opzionale, spesso in luxury si nasconde se non attivo o si usa solo icona */}
                                {/* <span className={`text-[9px] font-medium tracking-wide ${active ? 'text-white' : 'text-gray-600'}`}>
                  {tab.label}
                </span> */}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
