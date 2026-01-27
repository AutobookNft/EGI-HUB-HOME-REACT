import { SectionTitle } from '../ui/SectionTitle';
import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';
import { Card } from '../ui/Card';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import '../styles/motion.css';

const EXAMPLE_IMAGES = [
    '/images/icon_idea_cinematic.png',
    '/images/icon_art_cinematic.png',
    '/images/icon_collectible_cinematic.png',
    '/images/icon_product_cinematic.png',
    '/images/icon_document_cinematic.png'
];

export function EgiExamplesSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    return (
        <section className="py-24 px-6 relative">
            <SectionTitle title={content.examples.title} className={className} />

            <div ref={ref} className={`grid grid-cols-1 gap-4 ${className}`} style={{ transitionDelay: '0.2s' }}>
                <Card
                    title=""
                    description=""
                    glowColor="trust"
                >
                    <div className="space-y-6">
                        {content.examples.items.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-5 group">
                                <div className="w-16 h-16 shrink-0 rounded-2xl bg-black/50 border border-[var(--border)] overflow-hidden shadow-sm group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={EXAMPLE_IMAGES[idx]}
                                        alt={item.label}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <span className="text-base font-medium text-[var(--text)] leading-relaxed py-1 group-hover:text-[var(--accent)] transition-colors">
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
