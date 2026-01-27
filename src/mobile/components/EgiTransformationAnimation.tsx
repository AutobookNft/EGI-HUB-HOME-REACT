import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const ASSETS = [
    { src: '/images/statue_source.png', label: 'Art' },
    { src: '/images/collectible_source.png', label: 'Collectible' },
    { src: '/images/product_source.png', label: 'Product' }
];

export const EgiTransformationAnimation = () => {
    const [index, setIndex] = useState(0);

    // Cycle through assets every 8 seconds (matching animation duration)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % ASSETS.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const currentAsset = ASSETS[index];

    return (
        <div className="relative w-full h-[300px] flex items-center justify-center overflow-visible">

            <div className="relative w-[220px] h-[220px] flex items-center justify-center">

                {/* 1. LAYER PHYSICAL OBJECT (Cycling) */}
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentAsset.src} // Key change triggers re-render/animation
                        animate={{
                            opacity: [1, 1, 0, 0, 1], // visible -> fade out -> hidden -> fade in reset
                            scale: [1, 1, 0.95, 0.95, 1],
                            filter: ['grayscale(0%)', 'grayscale(0%)', 'grayscale(100%)', 'grayscale(100%)', 'grayscale(0%)']
                        }}
                        transition={{
                            duration: 8,
                            ease: "easeInOut",
                            times: [0, 0.25, 0.35, 0.8, 1]
                        }}
                        className="absolute inset-0 z-10"
                    >
                        <img
                            src={currentAsset.src}
                            alt="Physical Item"
                            className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply"
                        />
                        {/* Fixed Position: Inside container at bottom-2, not -bottom-8 */}
                        <div className="absolute bottom-2 left-0 right-0 text-center">
                            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium bg-white/50 px-2 py-1 rounded-full backdrop-blur-sm">
                                {currentAsset.label}
                            </span>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* 2. SCANNER LIGHT */}
                <motion.div
                    animate={{
                        top: ["0%", "150%", "150%", "0%"],
                        opacity: [0, 1, 0, 0]
                    }}
                    transition={{
                        duration: 8,
                        ease: "linear",
                        repeat: Infinity,
                        times: [0.2, 0.3, 0.45, 1]
                    }}
                    className="absolute left-[-20%] right-[-20%] h-[2px] z-30 flex items-center justify-center"
                >
                    <div className="w-full h-full bg-amber-400/80 shadow-[0_0_40px_rgba(251,191,36,1)] blur-[2px]" />
                </motion.div>

                {/* 3. LAYER GOLD CARD */}
                <motion.div
                    animate={{
                        opacity: [0, 0, 1, 1, 0],
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
                    {/* Fixed Position: Inside container at bottom-2 */}
                    <div className="absolute bottom-2 left-0 right-0 text-center">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold drop-shadow-md bg-white/80 px-2 py-1 rounded-full backdrop-blur-sm">
                            Digital Asset
                        </span>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
