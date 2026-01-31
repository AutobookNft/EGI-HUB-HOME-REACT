import { useState } from 'react';
import { useI18n } from '@/i18n';
import { homepageContent } from '@/data/content/homepage';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import { useDraggableScroll } from '@/hooks/useDraggableScroll';
import '@/mobile/styles/motion.css';

const EXAMPLE_IMAGES = [
    '/images/icon_idea_cinematic.png',
    '/images/icon_art_cinematic.png',
    '/images/icon_collectible_cinematic.png',
    '/images/icon_product_cinematic.png',
    '/images/icon_document_cinematic.png'
];

export function DesktopExamplesSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    const { ref: scrollRef, events, isDragging } = useDraggableScroll();
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const index = Math.round(scrollLeft / clientWidth);
            setActiveIndex(index);
        }
    };

    const scrollToSlide = (index: number) => {
        if (scrollRef.current) {
            const slideWidth = scrollRef.current.clientWidth;
            scrollRef.current.scrollTo({
                left: slideWidth * index,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-16 px-6 relative">
            <div className={`space-y-2 mb-8 ${className}`}>
                <h2 className="text-2xl font-semibold text-white leading-snug tracking-tight">
                    {content.examples.title}
                </h2>
                <div className="mt-4 h-px bg-white/10" />
            </div>

            <div ref={ref} className={`w-full ${className}`} style={{ transitionDelay: '0.2s' }}>
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    {...events}
                    className={`flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory no-scrollbar px-1 -mx-2 ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'
                        }`}
                >
                    {content.examples.items.map((item, idx) => (
                        // Changed w-[75vw] to w-[85%] relative to sidebar width
                        <div key={idx} className="snap-center shrink-0 w-[85%] relative aspect-square rounded-2xl overflow-hidden group shadow-lg border border-[var(--border)]">
                            <img
                                src={EXAMPLE_IMAGES[idx]}
                                alt={item.label}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                <span className="text-2xl font-bold text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wide">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-3 mt-4">
                    {content.examples.items.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToSlide(idx)}
                            className={`transition-all duration-300 rounded-full shadow-sm cursor-pointer hover:opacity-80 ${idx === activeIndex
                                ? 'w-8 h-2 bg-white'
                                : 'w-2 h-2 bg-gray-600'
                                }`}
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
