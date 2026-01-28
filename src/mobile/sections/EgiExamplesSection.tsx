import { useState, useRef } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';

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

    // Carousel Logic
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const index = Math.round(scrollLeft / clientWidth);
            setActiveIndex(index);
        }
    };

    return (
        <section className="py-24 px-6 relative">
            <SectionTitle title={content.examples.title} className={className} />

            <div ref={ref} className={`w-full ${className}`} style={{ transitionDelay: '0.2s' }}>
                {/* Scrollable Container with Snap */}
                <div
                    ref={scrollContainerRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory no-scrollbar px-2 -mx-2"
                >
                    {content.examples.items.map((item, idx) => (
                        // Width reduced to 75vw to show more of the next slide (Peek effect)
                        <div key={idx} className="snap-center shrink-0 w-[75vw] relative aspect-square rounded-2xl overflow-hidden group shadow-lg border border-[var(--border)]">
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
                                <span className="text-3xl font-bold text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Swipe Indicator (High Contrast + Active State) */}
                <div className="flex justify-center gap-3 mt-4">
                    {content.examples.items.map((_, idx) => (
                        <div
                            key={idx}
                            className={`transition-all duration-300 rounded-full shadow-sm ${idx === activeIndex
                                    ? 'w-8 h-2 bg-white'     // Active: Wide & White
                                    : 'w-2 h-2 bg-gray-600'  // Inactive: Darker Grey (Visible)
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
