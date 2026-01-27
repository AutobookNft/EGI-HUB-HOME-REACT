import { motion } from 'framer-motion';

export const EgiTransformationAnimation = () => {
    return (
        <div className="relative w-full h-[300px] flex items-center justify-center overflow-visible">

            <div className="relative w-[220px] h-[220px] flex items-center justify-center">

                {/* 1. LAYER STATUA (The Past) */}
                <motion.div
                    animate={{
                        opacity: [1, 1, 0, 0, 1],
                        scale: [1, 1, 0.95, 1.05, 1],
                        filter: ['grayscale(0%)', 'grayscale(0%)', 'grayscale(100%)', 'grayscale(0%)']
                    }}
                    transition={{
                        duration: 6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        times: [0, 0.3, 0.5, 0.8, 1]
                    }}
                    className="absolute inset-0 z-10"
                >
                    <img
                        src="/images/statue_source.png"
                        alt="Physical Art"
                        className="w-full h-full object-contain drop-shadow-2xl"
                    />
                    <div className="absolute -bottom-8 left-0 right-0 text-center">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">Physical</span>
                    </div>
                </motion.div>

                {/* 2. SCANNER LIGHT (The Transformation) */}
                <motion.div
                    animate={{
                        top: ["-20%", "120%", "120%", "-20%"],
                        opacity: [0, 1, 0, 0]
                    }}
                    transition={{
                        duration: 6,
                        ease: "linear",
                        repeat: Infinity,
                        times: [0.3, 0.5, 0.9, 1]
                    }}
                    className="absolute left-[-20%] right-[-20%] h-[2px] z-30 flex items-center justify-center"
                >
                    <div className="w-full h-full bg-amber-400/80 shadow-[0_0_40px_rgba(251,191,36,1)] blur-[2px]" />
                </motion.div>

                {/* 3. LAYER GOLD CARD (The Future) */}
                <motion.div
                    animate={{
                        opacity: [0, 0, 1, 1, 0],
                        scale: [0.9, 0.9, 1.1, 1, 0.9],
                        y: [0, 0, -10, 0, 0]
                    }}
                    transition={{
                        duration: 6,
                        ease: "backOut",
                        repeat: Infinity,
                        times: [0, 0.4, 0.55, 0.85, 1]
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
