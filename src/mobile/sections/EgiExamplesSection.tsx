import { SectionTitle } from '../ui/SectionTitle';
import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';
import { Card } from '../ui/Card';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import '../styles/motion.css';

export function EgiExamplesSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    return (
        <section className="py-24 px-6 relative">
            {/* Visual Anchor */}

            <SectionTitle title={content.examples.title} className={className} />

            <div ref={ref} className={`grid grid-cols-1 gap-4 ${className}`} style={{ transitionDelay: '0.2s' }}>
                <Card
                    title=""
                    description=""
                    glowColor="trust"
                >
                    <div className="space-y-6">
                        {content.examples.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-4 group">
                                <div className="w-12 h-12 shrink-0 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 mt-1 shadow-sm">
                                    <span role="img" aria-label={item.label}>{item.icon}</span>
                                </div>
                                <span className="text-base md:text-lg font-medium text-[var(--text)] leading-relaxed py-1 group-hover:text-[var(--accent)] transition-colors">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </section>
    );
}
