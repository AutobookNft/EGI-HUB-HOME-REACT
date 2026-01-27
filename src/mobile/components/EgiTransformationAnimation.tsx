import { motion } from 'framer-motion';

export const EgiTransformationAnimation = () => {
    // Total Duration: 8 seconds
    // 0% - 25%: Statue Static
    // 25% - 35%: CROSSFADE (Statue Out, Card In) + LASER SCAN
    // 35% - 75%: Card Static
    // 75% - 100%: Reset

    return (
        <div className="relative w-full h-[300px] flex items-center justify-center overflow-visible">

            <div className="relative w-[220px] h-[220px] flex items-center justify-center">

                {/* 1. LAYER STATUA (The Past) */}
                <motion.div
                    animate={{
                        opacity: [1, 1, 0, 0, 1], // Fades OUT at 0.25-0.35, Fades IN at end
                        scale: [1, 1, 0.95, 0.95, 1],
                        filter: ['grayscale(0%)', 'grayscale(0%)', 'grayscale(100%)', 'grayscale(100%)', 'grayscale(0%)']
                    }}
                    transition={{
                        duration: 8,
                        ease: "easeInOut",
                        repeat: Infinity,
                        times: [0, 0.25, 0.35, 0.8, 1]
                    }}
                    className="absolute inset-0 z-10"
                >
                    {/* Added mix-blend-multiply to hide white/grey background if possible, and rounded corners */}
                    <img
                        src="/images/statue_source.png"
                        alt="Physical Art"
                        className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply"
                    />
                    <div className="absolute -bottom-8 left-0 right-0 text-center">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">Physical</span>
                    </div>
                </motion.div>

                {/* 2. SCANNER LIGHT (The Transformation) */}
                <motion.div
                    animate={{
                        top: ["0%", "150%", "150%", "0%"],
                        opacity: [0, 1, 0, 0]
                    }}
                    transition={{
                        duration: 8,
                        ease: "linear",
                        repeat: Infinity,
                        times: [0.2, 0.3, 0.45, 1] // Laser runs across the crossfade window
                    }}
                    className="absolute left-[-20%] right-[-20%] h-[2px] z-30 flex items-center justify-center"
                >
                    <div className="w-full h-full bg-amber-400/80 shadow-[0_0_40px_rgba(251,191,36,1)] blur-[2px]" />
                </motion.div>

                {/* 3. LAYER GOLD CARD (The Future) */}
                <motion.div
                    animate={{
                        opacity: [0, 0, 1, 1, 0], // Fades IN at 0.25-0.35
                        scale: [0.9, 0.9, 1.1, 1.1, 0.9],
                        y: [10, 10, -10, -10, 10]
                    }}
                    transition={{
                        duration: 8,
                        ease: "easeInOut",
                        repeat: Infinity,
                        times: [0, 0.25, 0.35, 0.8, 1]
                    }}
                    className="absolute inset-0 z-20"
                >
                    <img
                        src="/images/egi_token_gold.png"
                        alt="EGI Token"
                        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                    />
                    <div className="absolute -bottom-8 left-0 right-0 text-center">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold drop-shadow-md">Digital Asset</span>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
