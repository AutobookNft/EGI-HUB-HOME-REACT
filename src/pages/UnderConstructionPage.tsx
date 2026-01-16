import { useUIStore } from '@/stores/useUIStore';

export const UnderConstructionPage = () => {
    // Simple back navigation to sender page
    const handleBack = () => {
        window.history.back();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white font-rajdhani overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000000_100%)]"></div>
            <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10"></div>

            {/* Animated Orbs */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-4xl px-6 text-center">
                {/* Header */}
                <div className="mb-4 text-gold uppercase tracking-[0.3em] text-sm md:text-base animate-fade-in-down">
                    System Status: Expanding
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-bx from-white via-gray-200 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-scale-in">
                    UNDER<br />CONSTRUCTION
                </h1>

                {/* Divider */}
                <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8"></div>

                {/* Description */}
                <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light mb-12 animate-fade-in-up">
                    Questa sezione dell'Universo <strong className="text-white">EGI</strong> è in fase di costruzione.
                    <br />
                    Stiamo forgiando nuovi mondi per espandere le possibilità.
                </p>

                {/* Back Button */}
                <button
                    onClick={handleBack}
                    className="group relative px-8 py-3 bg-transparent border border-white/20 hover:border-gold/50 transition-all duration-300 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gold/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <span className="relative font-mono text-sm uppercase tracking-widest group-hover:text-gold transition-colors">
                        ← Torna Indietro
                    </span>
                </button>
            </div>

            {/* Footer Tech Details */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-xs text-white/30 font-mono">
                    OS3.0 ARCHITECTURE // NODE_PENDING // 2026
                </p>
            </div>
        </div>
    );
};
