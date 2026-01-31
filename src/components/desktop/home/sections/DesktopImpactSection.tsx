import { useState } from 'react';
import { homepageContent } from '@/data/content/homepage';
import { useI18n } from '@/i18n';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import { useDraggableScroll } from '@/hooks/useDraggableScroll';
import '@/mobile/styles/motion.css';

export function DesktopImpactSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();
    const eppData = content.epp_section;

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
            <div ref={ref} className={className}>
                <div className="mb-8">
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2 block">
                        Environment
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent leading-tight">
                        {eppData.title}
                    </h2>
                </div>

                <div className="relative rounded-3xl overflow-hidden shadow-2xl group mb-8 hover:scale-[1.02] transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-500 opacity-90 backdrop-blur-xl" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none mix-blend-overlay" />

                    <div className="relative z-10 p-6 flex flex-col items-center text-center">
                        <div className="w-32 h-32 mb-4 relative">
                            <div className="absolute inset-0 bg-blue-400/30 blur-3xl rounded-full animate-pulse" />
                            <img
                                src="/images/epp_glass_icon.png"
                                alt="EPP Crystal"
                                className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.6)]"
                            />
                        </div>
                        <p className="text-base font-medium leading-relaxed text-white drop-shadow-sm">
                            {eppData.description}
                        </p>
                    </div>
                </div>

                <div className="w-full">
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        {...events}
                        className={`flex overflow-x-auto gap-4 pb-8 snap-x snap-mandatory no-scrollbar px-1 -mx-2 ${isDragging ? 'cursor-grabbing snap-none' : 'cursor-grab'
                            }`}
                    >
                        {eppData.items.map((item, idx) => (
                            // Optimizing width for sidebar: w-[85%]
                            <div
                                key={idx}
                                className="snap-center shrink-0 w-[85%] relative min-h-[400px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer flex flex-col justify-end"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-50% to-transparent opacity-95" />
                                <div className="relative z-10 p-6 pb-8">
                                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-100 text-sm leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] font-medium">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-3 mt-4">
                        {eppData.items.map((_, idx) => (
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
            </div>
        </section>
    );
}
