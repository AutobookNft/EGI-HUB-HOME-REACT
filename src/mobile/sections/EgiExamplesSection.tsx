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
                <div className="grid grid-cols-1 gap-6">
                    {content.examples.items.map((item, idx) => (
                        <div key={idx} className="relative w-full aspect-square rounded-2xl overflow-hidden group shadow-lg border border-[var(--border)]">
                            {/* Cinematic Background Image */}
                            <img
                                src={EXAMPLE_IMAGES[idx]}
                                alt={item.label}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Dark Gradient Overlay for Contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

                            {/* Text Overlay - Centered & High Contrast */}
                            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                <span className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
