import { motion } from 'framer-motion';
import { Image, ShieldCheck, Sparkles, ScanLine } from 'lucide-react';

export const EgiTransformationAnimation = () => {
    return (
        <div className="relative w-full h-40 flex items-center justify-center">
            {/* Center Stage - No Background Box */}

            <div className="relative w-32 h-32 flex items-center justify-center">

                {/* 1. PHYSICAL OBJECT (The Input) */}
                <motion.div
                    animate={{
                        opacity: [1, 1, 0, 0, 1], // Fades out when scanned
                        scale: [1, 1, 0.9, 1.1, 1],
                        filter: ['grayscale(100%) blur(0px)', 'grayscale(0%) blur(0px)', 'grayscale(0%) blur(10px)', 'grayscale(100%) blur(0px)']
                    }}
                    transition={{
                        duration: 5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        times: [0, 0.3, 0.5, 0.8, 1]
                    }}
                    className="absolute inset-0 flex items-center justify-center z-10"
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                            <Image className="w-12 h-12 text-white/90" strokeWidth={1} />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Original</span>
                    </div>
                </motion.div>

                {/* 2. SCANNER EFFECT (The Process) */}
                <motion.div
                    animate={{
                        top: ["-20%", "120%"],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        times: [0.3, 0.5] // Syncs with fade out
                    }}
                    className="absolute left-[-20%] right-[-20%] h-[2px] z-30 flex items-center justify-center"
                >
                    <div className="w-full h-full bg-amber-400 shadow-[0_0_20px_rgba(251,191,36,1)]" />
                    <ScanLine className="absolute text-amber-400 w-6 h-6 animate-pulse" />
                </motion.div>

                {/* 3. EGI ASSET (The Output) */}
                <motion.div
                    animate={{
                        opacity: [0, 0, 1, 1, 0],
                        scale: [0.5, 0.5, 1, 1, 0.5],
                        y: [0, 0, -5, 0, 0]
                    }}
                    transition={{
                        duration: 5,
                        ease: "anticipate",
                        repeat: Infinity,
                        times: [0, 0.45, 0.55, 0.8, 1]
                    }}
                    className="absolute inset-0 flex items-center justify-center z-20"
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="relative p-4 rounded-2xl bg-gradient-to-b from-amber-500/20 to-amber-500/5 border border-amber-500/50 backdrop-blur-md shadow-[0_0_30px_rgba(251,191,36,0.2)]">
                            <ShieldCheck className="w-12 h-12 text-amber-400 drop-shadow-md" strokeWidth={1.5} />

                            {/* Particles */}
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-1 -right-1"
                            >
                                <Sparkles className="w-4 h-4 text-white" />
                            </motion.div>
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold font-mono shadow-black drop-shadow-sm">EGI Certified</span>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
