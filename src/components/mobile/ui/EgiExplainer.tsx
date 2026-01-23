import React from 'react';
import { ShieldCheck, Leaf, Layers } from 'lucide-react';

export const EgiExplainer = () => {
    return (
        <div className="w-full max-w-[90%] mx-auto mt-8 mb-12 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <h3 className="text-white/80 text-xs font-bold tracking-widest uppercase mb-6 text-center">
                La Formula EGI
            </h3>

            <div className="flex items-center justify-between relative">
                {/* Step 1: L'Opera */}
                <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <Layers className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Opera</span>
                </div>

                {/* Connector Line */}
                <div className="absolute top-6 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -z-0"></div>

                {/* Step 2: Wrapper (Blockchain + EPP) */}
                <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/30 shadow-[0_0_20px_rgba(255,215,0,0.2)]">
                        <div className="relative">
                            <ShieldCheck className="w-8 h-8 text-primary absolute -top-1 -left-1 opacity-80" />
                            <Leaf className="w-4 h-4 text-emerald-400 absolute bottom-0 right-0" />
                        </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-primary tracking-wider glow-text">EGI Wrapper</span>
                </div>

                {/* Step 3: Asset Completo */}
                <div className="flex flex-col items-center gap-2 z-10">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <span className="text-xl">💎</span>
                    </div>
                    <span className="text-[10px] uppercase font-bold text-white tracking-wider">Asset</span>
                </div>
            </div>

            <p className="text-center text-gray-400 text-xs mt-6 leading-relaxed px-4">
                Protegge. Certifica. Attiva.
            </p>
        </div>
    );
};
