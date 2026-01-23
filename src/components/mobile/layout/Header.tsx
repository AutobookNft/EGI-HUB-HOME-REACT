import { useState } from 'react';
import { useUIStore } from '@/stores/useUIStore';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { useI18n } from '@/i18n';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useUIStore((state) => state.navigate);
    const { locale } = useI18n(); // Ready for lang switch

    const menuItems = [
        { label: 'Home', path: '/' },
        { label: 'Piattaforme', path: '/platforms' },
        { label: 'Mission', path: '/mission' },
        { label: 'Tecnologia', path: '/tech' },
    ];

    const handleNav = (path: string) => {
        navigate(path);
        setIsOpen(false);
    };

    return (
        <>
            {/* Navbar Fixed */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
                <div className="px-6 h-16 flex items-center justify-between">
                    <div className="font-rajdhani font-bold text-xl tracking-wider text-white" onClick={() => navigate('/')}>
                        EGI<span className="text-primary">.HUB</span>
                    </div>
                    <button onClick={() => setIsOpen(true)} className="text-white p-2">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Full Screen Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-[60] bg-black flex flex-col animate-in fade-in duration-200">
                    <div className="px-6 h-16 flex items-center justify-between border-b border-white/10">
                        <div className="font-rajdhani font-bold text-xl tracking-wider text-white">
                            EGI<span className="text-primary">.HUB</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white p-2">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 px-6 py-12 flex flex-col gap-6">
                        {menuItems.map((item) => (
                            <button
                                key={item.path}
                                onClick={() => handleNav(item.path)}
                                className="text-left text-3xl font-light text-white border-b border-white/10 pb-4 flex justify-between items-center group"
                            >
                                {item.label}
                                <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        ))}

                        <div className="mt-auto space-y-4">
                            <a href="https://egi-info.13.53.205.215.sslip.io" target="_blank" rel="noopener" className="block text-gray-400 text-sm">
                                Documentazione Esterna ↗
                            </a>
                            <div className="text-xs text-gray-600 font-mono">
                                v2.0.2 Corporate
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
