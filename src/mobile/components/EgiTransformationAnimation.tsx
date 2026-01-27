import { motion } from 'framer-motion';
import { Scan, Sparkles, Check, Box } from 'lucide-react';

export const EgiTransformationAnimation = () => {
    return (
        <div className="relative w-full h-64 flex flex-col items-center justify-center">

            <div className="relative w-48 h-48 flex items-center justify-center">

                {/* 1. PHYSICAL OBJECT (Framed Painting) */}
                <motion.div
                    animate={{
                        opacity: [1, 1, 0, 0, 1],
                        scale: [1, 1, 0.9, 1.1, 1],
                        filter: ['grayscale(0%)', 'grayscale(0%)', 'grayscale(100%)', 'grayscale(0%)']
                    }}
                    transition={{
                        duration: 6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        times: [0, 0.2, 0.45, 0.9, 1]
                    }}
                    className="absolute inset-0 flex items-center justify-center z-10"
                >
                    <div className="flex flex-col items-center gap-4">
                        {/* CSS Painting representation */}
                        <div className="w-24 h-32 bg-[#e2e2e2] rounded-sm border-8 border-[#3d2c20] shadow-xl flex items-center justify-center overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-600 opacity-80" />
                            <div className="w-8 h-8 rounded-full bg-yellow-100 absolute top-4 right-4 opacity-80 shadow-sm" />
                            <div className="w-full h-12 bg-green-700 absolute bottom-0 transform skew-y-6 scale-125" />
                        </div>
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold bg-white/80 px-2 py-1 rounded">Opera Fisica</span>
                    </div>
                </motion.div>

                {/* 2. SCANNER (Laser Bar) */}
                <motion.div
                    animate={{
                        top: ["-10%", "110%", "110%", "-10%"],
                        opacity: [0, 1, 0, 0]
                    }}
                    transition={{
                        duration: 6,
                        ease: "linear",
                        repeat: Infinity,
                        times: [0.2, 0.45, 0.9, 1]
                    }}
                    className="absolute left-[-20%] right-[-20%] h-2 z-30 flex items-center justify-center"
                >
                    <div className="w-full h-full bg-red-500 shadow-[0_0_25px_rgba(239,68,68,1)]" />
                    <Scan className="absolute text-red-500 w-10 h-10 -mt-4 bg-white/10 rounded-full p-1" />
                </motion.div>

                {/* 3. EGI ASSET (Golden Smart Card) */}
                <motion.div
                    animate={{
                        opacity: [0, 0, 1, 1, 0],
                        scale: [0.8, 0.8, 1, 1, 0.8],
                        rotateY: [0, 0, 0, 180, 0] // 3D flip effect
                    }}
                    transition={{
                        duration: 6,
                        ease: "circOut",
                        repeat: Infinity,
                        times: [0, 0.4, 0.5, 0.85, 1]
                    }}
                    className="absolute inset-0 flex items-center justify-center z-20 perspective-1000"
                >
                    <div className="flex flex-col items-center gap-4">
                        {/* CSS Gold Card */}
                        <div className="w-24 h-32 bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 rounded-xl border border-amber-100 shadow-[0_0_50px_rgba(251,191,36,0.6)] flex flex-col items-center justify-between p-3 relative overflow-hidden">
                            {/* Chip */}
                            <div className="w-8 h-6 bg-yellow-200/50 rounded-md border border-yellow-600/30 self-start" />

                            {/* Logo center */}
                            <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
                                <Check className="w-6 h-6 text-white" strokeWidth={3} />
                            </div>

                            {/* Text lines */}
                            <div className="w-full space-y-1">
                                <div className="h-1 w-full bg-black/10 rounded" />
                                <div className="h-1 w-2/3 bg-black/10 rounded" />
                            </div>

                            {/* Shine effect */}
                            <motion.div
                                animate={{ left: ["-100%", "200%"] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 bottom-0 w-10 bg-white/40 skew-x-12 transform"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                            <span className="text-xs uppercase tracking-[0.2em] text-amber-600 font-extrabold bg-amber-50 px-2 py-1 rounded border border-amber-200">EGI Asset</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
