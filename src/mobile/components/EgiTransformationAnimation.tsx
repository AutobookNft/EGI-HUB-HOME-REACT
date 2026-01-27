import { motion } from 'framer-motion';
import { Image, ShieldCheck, Sparkles } from 'lucide-react';

export const EgiTransformationAnimation = () => {
    return (
        <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-bre from-blue-500/5 to-purple-500/5" />

            <div className="relative w-20 h-20 flex items-center justify-center">

                {/* 1. PHYSICAL OBJECT (Fades Out) */}
                <motion.div
                    initial={{ opacity: 1, scale: 1, filter: 'grayscale(100%)' }}
                    animate={{
                        opacity: [1, 1, 0, 0, 1],
                        scale: [1, 1, 0.9, 0.9, 1],
                        filter: ['grayscale(100%)', 'grayscale(0%)', 'grayscale(0%)', 'grayscale(100%)']
                    }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        times: [0, 0.4, 0.45, 0.9, 1]
                    }}
                    className="absolute inset-0 flex items-center justify-center z-10"
                >
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-white/5 rounded-lg blur-sm" />
                        <Image className="w-12 h-12 text-white/80" strokeWidth={1.5} />
                    </div>
                </motion.div>

                {/* 2. EGI ASSET (Fades In) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0, 0, 1, 1, 0],
                        scale: [0.8, 0.8, 1.1, 1, 0.8]
                    }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        times: [0, 0.4, 0.5, 0.9, 1]
                    }}
                    className="absolute inset-0 flex items-center justify-center z-20"
                >
                    <div className="relative">
                        {/* Golden Glow effect */}
                        <div className="absolute -inset-4 bg-amber-500/20 rounded-full blur-md animate-pulse" />
                        <ShieldCheck className="w-14 h-14 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" strokeWidth={1.5} />

                        {/* Floating particles */}
                        <motion.div
                            animate={{ y: [-2, 2, -2], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-2 -right-2"
                        >
                            <Sparkles className="w-4 h-4 text-amber-200" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* 3. SCANNING LASER */}
                <motion.div
                    initial={{ top: "-10%", opacity: 0 }}
                    animate={{
                        top: ["0%", "120%", "120%", "120%"],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 4,
                        ease: "linear",
                        repeat: Infinity,
                        times: [0.1, 0.4, 0.45, 1]
                    }}
                    className="absolute left-[-20%] right-[-20%] h-1 bg-amber-400/80 shadow-[0_0_15px_rgba(251,191,36,0.8)] z-30"
                />

                {/* Text Label Transition */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <motion.span
                        animate={{ opacity: [1, 0, 0, 1] }}
                        transition={{ duration: 4, times: [0.3, 0.4, 0.9, 1], repeat: Infinity }}
                        className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-medium"
                    >
                        Physical
                    </motion.span>
                    <motion.span
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ duration: 4, times: [0.3, 0.45, 0.85, 1], repeat: Infinity }}
                        className="absolute inset-0 text-[10px] tracking-[0.2em] text-amber-400/90 uppercase font-bold"
                    >
                        Certified
                    </motion.span>
                </div>

            </div>
        </div>
    );
};
