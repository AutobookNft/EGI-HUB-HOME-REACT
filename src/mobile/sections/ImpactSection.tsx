import { homepageContent } from '../data/homepage';
import { useI18n } from '@/i18n';
import { SectionTitle } from '../ui/SectionTitle';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import '../styles/motion.css';


export function ImpactSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    // Use the 4th Pillar (EPP) as the source for this section to ensure consistency
    const eppPillar = content.pillars.items[3];

    const title = eppPillar.title;
    const text = eppPillar.description;

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
