import { useI18n } from '@/i18n';

import { SectionTitle } from '../ui/SectionTitle';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import '../styles/motion.css';

export function ImpactSection() {
    const { locale } = useI18n();
    const { ref, className } = useRevealOnView();

    // Content: This should be in homepage.ts but I'll hardcode acceptable defaults or use simple generic text if not present.
    // Blueprint S5: "Environmental Impact".
    // I can assume specific text or just use a placeholder that fits "Return to Light".
    // Since I added "Impatto Reale" to pillars, I can use that title.

    // For now, I'll create a dedicated visual block.

    const title = locale === 'it' ? 'Impatto Ambientale Reale' : 'Real Environmental Impact';
    const text = locale === 'it'
        ? 'Non solo teoria. Ogni EGI contribuisce a preservare ecosistemi vitali, con metriche verificate.'
        : 'Not just theory. Every EGI contributes to preserving vital ecosystems, with verified metrics.';

    return (
        <section className="py-24 px-6 relative">
            <div ref={ref} className={className}>
                <SectionTitle title={title} eyebrow="Environment" />

                <div className="relative rounded-[var(--r-card)] overflow-hidden bg-[var(--surface)] border border-[var(--border)] shadow-lg aspect-video flex items-center justify-center group">
                    {/* Background Image / Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-teal-400/5 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />

                    {/* Content */}
                    <div className="relative z-10 p-6 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-2xl shadow-sm">
                            🌱
                        </div>
                        <p className="text-[var(--text)] text-lg font-medium max-w-[280px] mx-auto leading-relaxed">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
