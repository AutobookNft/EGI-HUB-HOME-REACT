import { ScreenContainer } from '@/components/mobile/layout/ScreenContainer';
import { TabBar } from '@/components/mobile/layout/TabBar';
import { useUIStore } from '@/stores/useUIStore';
import { Zap, Info, Construction, ChevronRight, X } from 'lucide-react';

export const MorePage = () => {
    const navigate = useUIStore((state) => state.navigate);

    const menuItems = [
        { label: 'Tecnologia', route: '/tech', icon: Zap, desc: 'Oracode & Stack' },
        { label: 'Documentazione', route: '/info', icon: Info, desc: 'EGI Info Portal' },
        { label: 'Coming Soon', route: '/under-construction', icon: Construction, desc: 'Future releases' },
    ];

    return (
        <>
            <ScreenContainer>
                <div className="px-6 pt-16 pb-32">
                    {/* Header Minimal */}
                    <div className="flex items-center justify-between mb-8 px-1">
                        <h1 className="text-2xl font-light text-white">Menu</h1>
                        <button onClick={() => navigate('/')} className="p-2 bg-white/5 rounded-full hover:bg-white/10 text-white">
                            <X className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="space-y-2">
                        {menuItems.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => navigate(item.route)}
                                    className="w-full p-4 flex items-center gap-4 bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08] active:scale-[0.98] transition-all rounded-xl group text-left"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                                        <Icon className="w-5 h-5 stroke-[1.5]" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="block text-white font-medium text-sm">{item.label}</span>
                                        <span className="block text-gray-600 text-xs mt-0.5">{item.desc}</span>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-gray-700 group-hover:text-gray-400" />
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-12 text-center border-t border-white/[0.05] pt-8">
                        <p className="text-[10px] text-gray-600 font-mono tracking-widest uppercase mb-2">
                            EGI HUB Mobile
                        </p>
                        <p className="text-[10px] text-gray-700">
                            v2.0.1 • Build 2026.01
                        </p>
                    </div>
                </div>
            </ScreenContainer>
            <TabBar />
        </>
    );
};
