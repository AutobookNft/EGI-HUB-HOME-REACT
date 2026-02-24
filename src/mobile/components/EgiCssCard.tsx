import { FlorenceEgiLogo } from '@/components/ui/FlorenceEgiLogo';

export const EgiCssCard = () => (
    <>
        <style>{`
            @keyframes egi-float {
                0%, 100% { transform: translateY(0px) rotate(-1deg); }
                50%       { transform: translateY(-12px) rotate(1deg); }
            }
            @keyframes egi-glow {
                0%, 100% { box-shadow: 0 0 30px rgba(16,185,129,0.3), 0 0 60px rgba(16,185,129,0.1); }
                50%       { box-shadow: 0 0 50px rgba(16,185,129,0.6), 0 0 100px rgba(16,185,129,0.2); }
            }
            @keyframes egi-shimmer {
                0%   { background-position: -200% center; }
                100% { background-position: 200% center; }
            }
            @keyframes egi-scan {
                0%   { top: -4px; opacity: 0; }
                5%   { opacity: 1; }
                90%  { opacity: 0.8; }
                100% { top: 100%; opacity: 0; }
            }
            @keyframes egi-logo-pulse {
                0%, 100% { filter: drop-shadow(0 0 8px rgba(16,185,129,0.4)); }
                50%       { filter: drop-shadow(0 0 20px rgba(16,185,129,0.9)); }
            }
            @keyframes egi-badge-in {
                0%   { opacity: 0; transform: translateY(6px); }
                100% { opacity: 1; transform: translateY(0); }
            }

            .egi-card {
                animation: egi-float 6s ease-in-out infinite, egi-glow 3s ease-in-out infinite;
            }
            .egi-border {
                background: linear-gradient(90deg,
                    transparent 0%,
                    rgba(16,185,129,0.8) 20%,
                    rgba(251,191,36,0.9) 50%,
                    rgba(16,185,129,0.8) 80%,
                    transparent 100%
                );
                background-size: 200% auto;
                animation: egi-shimmer 3s linear infinite;
            }
            .egi-scan-line {
                animation: egi-scan 4s ease-in-out infinite;
            }
            .egi-logo {
                animation: egi-logo-pulse 2s ease-in-out infinite;
            }
            .egi-badge {
                animation: egi-badge-in 0.6s ease-out 0.5s both;
            }
        `}</style>

        <div className="relative w-full h-[300px] flex items-center justify-center">
            {/* Card container */}
            <div className="egi-card relative w-[220px] h-[220px] rounded-2xl overflow-hidden"
                style={{ background: 'rgba(5, 8, 18, 0.95)' }}>

                {/* Shimmer border */}
                <div className="egi-border absolute inset-x-0 top-0 h-[2px] z-20" />
                <div className="egi-border absolute inset-x-0 bottom-0 h-[2px] z-20"
                    style={{ animationDelay: '1.5s' }} />

                {/* Inner glass surface */}
                <div className="absolute inset-[1px] rounded-2xl"
                    style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(5,8,18,0.98) 60%)' }} />

                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.06]"
                    style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, rgba(16,185,129,0.5) 0px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, rgba(16,185,129,0.5) 0px, transparent 1px, transparent 28px)',
                    }} />

                {/* Scanner line */}
                <div className="egi-scan-line absolute left-0 right-0 h-[2px] z-30 pointer-events-none"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(251,191,36,0.9) 20%, rgba(251,191,36,1) 50%, rgba(251,191,36,0.9) 80%, transparent)' }}>
                    <div style={{
                        position: 'absolute', inset: 0,
                        boxShadow: '0 0 16px 4px rgba(251,191,36,0.6)',
                    }} />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3 px-6">

                    {/* Logo */}
                    <div className="egi-logo text-emerald-400">
                        <FlorenceEgiLogo className="h-14 w-14" />
                    </div>

                    {/* EGI lettering */}
                    <div className="text-center">
                        <div className="text-xs tracking-[0.35em] text-emerald-400/60 uppercase font-medium mb-1">
                            Certificato digitale
                        </div>
                        <div className="text-3xl font-extrabold tracking-[0.15em] text-white"
                            style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                            FLORENCE <span style={{ color: '#10b981' }}>EGI</span>
                        </div>
                    </div>

                    {/* Bottom badge */}
                    <div className="egi-badge mt-2 px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10">
                        <span className="text-[10px] tracking-widest uppercase text-emerald-400 font-semibold">
                            Blockchain · Algorand
                        </span>
                    </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-emerald-500/50 rounded-tl" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-emerald-500/50 rounded-tr" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-emerald-500/50 rounded-bl" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-emerald-500/50 rounded-br" />
            </div>
        </div>
    </>
);
