import { useEcosystemMetrics } from '@/features/ecosystem/useEcosystemData';

export const TopBar = () => {
    const { data: metrics } = useEcosystemMetrics();

    return (
        <div className="fixed top-0 left-0 right-0 h-[70px] glass-dark border-b border-light flex items-center justify-between px-4 md:px-8 z-20">
            {/* Brand */}
            <div className="flex items-center gap-4">
                <div className="text-xl md:text-2xl font-bold tracking-[2px]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    FLORENCE <span className="text-primary">EGI</span>
                </div>
            </div>

            {/* Motto - Hidden on mobile */}
            <div className="text-sm tracking-[2px] text-text-muted uppercase ml-10 mr-auto hidden lg:block" style={{ fontFamily: 'Share Tech Mono, monospace' }}>
                SE ESISTE, <strong className="text-primary">EGIZZALO</strong>. SE LO EGIZZI, <strong className="text-primary">VALE</strong>.
            </div>

            {/* System Metrics - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-6">
                <div className="flex flex-col items-end">
                    <span className="text-xs text-text-muted uppercase">Tenants</span>
                    <span className="font-mono">
                        {metrics ? metrics.tenants : <span className="animate-pulse">...</span>}
                    </span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-xs text-text-muted uppercase">Status</span>
                    <span className="flex items-center gap-2 font-mono">
                        <span className={`w-2 h-2 rounded-full animate-pulse ${metrics?.status === 'online' ? 'bg-primary' :
                            metrics?.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                            }`} />
                        {metrics?.status ? metrics.status.toUpperCase() : '...'}
                    </span>
                </div>
            </div>
        </div>
    );
};
