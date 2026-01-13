import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useUIStore } from '@/stores/useUIStore';
import { useEcosystemData } from '@/features/ecosystem/useEcosystemData';

export const DetailPanel = () => {
    const { detailPanelOpen, selectedNodeId, closeDetailPanel } = useUIStore();
    const { data: ecosystem } = useEcosystemData();

    if (!ecosystem || !selectedNodeId) return null;

    const nodeData = ecosystem[selectedNodeId];
    // Type guard: ensure it's an EcosystemNode, not OrbitalConfig[]
    if (!nodeData || Array.isArray(nodeData)) return null;

    return (
        <AnimatePresence>
            {detailPanelOpen && (
                <motion.div
                    className="fixed right-0 top-0 h-screen w-full md:w-[450px] glass-dark backdrop-blur-lg border-l border-light p-6 md:p-12 overflow-y-auto z-30"
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 300,
                    }}
                >
                    {/* Close button */}
                    <button
                        onClick={closeDetailPanel}
                        className="absolute top-4 right-4 p-2 text-text-muted hover:text-white transition-colors"
                        aria-label="Close panel"
                    >
                        <X size={24} />
                    </button>

                    {/* Category */}
                    <motion.span
                        className="text-xs uppercase tracking-wider border-b border-light pb-2 block mb-4"
                        style={{
                            fontFamily: 'Share Tech Mono, monospace',
                            color: `#${nodeData.color.toString(16).padStart(6, '0')}`,
                        }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        {nodeData.cat}
                    </motion.span>

                    {/* Title */}
                    <motion.h2
                        className="text-5xl font-bold uppercase leading-tight mb-4"
                        style={{ fontFamily: 'Rajdhani, sans-serif' }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                    >
                        {nodeData.label}
                    </motion.h2>

                    {/* Tagline */}
                    <motion.div
                        className="text-sm italic text-text-muted mb-8"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        {nodeData.tagline}
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        className="text-text-muted leading-relaxed mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25 }}
                    >
                        {nodeData.desc}
                    </motion.p>

                    {/* Bullets */}
                    {nodeData.bullets && (
                        <motion.ul className="space-y-2 mb-8">
                            {nodeData.bullets.map((bullet, idx) => (
                                <motion.li
                                    key={idx}
                                    className="text-sm pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + idx * 0.05 }}
                                >
                                    {bullet}
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}

                    {/* EGI Link */}
                    <motion.div
                        className="bg-primary/5 border border-primary/30 p-4 text-xs text-primary mb-8"
                        style={{ fontFamily: 'Share Tech Mono, monospace' }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {nodeData.egi_link}
                    </motion.div>

                    {/* Button */}
                    {nodeData.route && nodeData.route !== '#' && (
                        <motion.button
                            className="w-full py-4 border border-primary text-primary uppercase tracking-wider hover:bg-primary hover:text-black transition-colors"
                            style={{ fontFamily: 'Share Tech Mono, monospace' }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                                if (nodeData.route.startsWith('/')) {
                                    // Internal SPA Navigation
                                    import('@/router').then(({ navigate }) => {
                                        navigate(nodeData.route);
                                        closeDetailPanel(); // Close panel after navigating
                                    });
                                } else {
                                    // External Link
                                    window.open(nodeData.route, '_blank');
                                }
                            }}
                        >
                            APRI PROGETTO
                        </motion.button>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
