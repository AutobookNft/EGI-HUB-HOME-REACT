import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import { SectionTitle } from '../ui/SectionTitle';
import { ThreePillarsPyramid } from '../components/ThreePillarsPyramid';
import '../styles/motion.css';

export function PillarsSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="pillars-section">
            <div ref={ref} className={className}>
                <SectionTitle title={content.pillars.title} />

                <div className="flex justify-center -mx-6 mt-8">
                    <ThreePillarsPyramid />
                </div>

                <div className="mt-8 space-y-4 max-w-lg mx-auto">
                    {content.pillars.items.map((pillar, idx) => (
                        <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <span className="text-xl font-mono text-[var(--accent)] font-bold opacity-80">
                                0{idx + 1}
                            </span>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1 font-[Rajdhani]">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
