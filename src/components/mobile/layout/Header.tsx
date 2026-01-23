import { useState } from 'react';
import { useUIStore } from '@/stores/useUIStore';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useI18n } from '@/i18n';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useUIStore((state) => state.navigate);
    const { locale } = useI18n();

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
            {/* Navbar Fixed - Translucent */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent pb-4 pt-4">
                <div className="px-6 flex items-center justify-between">
                    <div className="font-rajdhani font-bold text-xl tracking-wider text-white drop-shadow-md" onClick={() => navigate('/')}>
                        EGI<span className="text-primary">.HUB</span>
                    </div>
                    <button onClick={() => setIsOpen(true)} className="text-white p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Full Screen Menu Overlay - REFINED TYPOGRAPHY */}
            {isOpen && (
                <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col animate-in fade-in duration-300">
                    <div className="px-6 h-20 flex items-center justify-between border-b border-white/[0.05]">
                        <div className="font-rajdhani font-bold text-xl tracking-wider text-white">
                            EGI<span className="text-primary">.HUB</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white p-2 rounded-full hover:bg-white/10 transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 px-8 py-12 flex flex-col justify-center gap-0">
                        {menuItems.map((item) => (
                            <button
                                key={item.path}
                                onClick={() => handleNav(item.path)}
                                className="text-left text-2xl font-light text-gray-300 hover:text-white py-6 border-b border-white/[0.02] flex justify-between items-center group transition-all"
                            >
                                <span className="group-hover:translate-x-2 transition-transform duration-300">{item.label}</span>
                                <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            </button>
                        ))}

                        <div className="mt-auto pt-12 border-t border-white/5 space-y-6">
                            <a href="https://egi-info.13.53.205.215.sslip.io" target="_blank" rel="noopener" className="flex items-center gap-2 text-gray-500 text-sm hover:text-white transition-colors">
                                Documentazione Esterna ↗
                            </a>
                            <div className="text-[10px] text-gray-700 font-mono uppercase tracking-widest">
                                EGI Holding © 2026 [{locale.toUpperCase()}]
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
