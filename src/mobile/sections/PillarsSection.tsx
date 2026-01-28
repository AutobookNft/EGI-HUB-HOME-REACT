import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import '../styles/motion.css';

export function PillarsSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="pillars-section">
            <div ref={ref} className={className}>
                <SectionTitle title={content.pillars.title} />

                <Card className="p-0 overflow-hidden bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow)]">
                    <div className="flex flex-col">
                        {content.pillars.items.map((pillar, idx) => (
                            <div
                                key={idx}
                                className={`
                                    p-6 group
                                    ${idx !== content.pillars.items.length - 1 ? 'border-b border-[var(--border)]' : ''}
                                    hover:bg-[var(--accent)]/5 transition-colors duration-300
                                `}
                                style={{ transitionDelay: `${idx * 0.1}s` }}
                            >
                                <div className="flex items-baseline gap-3 mb-2">
                                    <span className="text-sm font-mono text-[var(--accent)] font-bold opacity-60">
                                        0{idx + 1}
                                    </span>
                                    <h3 className="text-xl font-bold text-[var(--text)] tracking-tight group-hover:text-[var(--accent)] transition-colors">
                                        {pillar.title}
                                    </h3>
                                </div>
                                <p className="text-base leading-relaxed text-[var(--muted)] pl-8">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </section>
    );
}
