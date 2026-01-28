import { ReactNode } from 'react';

interface InfiniteMarqueeProps {
    items: ReactNode[];
    speed?: number; // Duration in seconds
    direction?: 'left' | 'right';
}

export function InfiniteMarquee({ items, speed = 40, direction = 'left' }: InfiniteMarqueeProps) {
    const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

    // Duplicate items to create seamless loop
    const duplicatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className="relative flex overflow-hidden w-full py-4 mask-fade">
            <div
                className={`flex gap-8 whitespace-nowrap ${animationClass}`}
                style={{ animationDuration: `${speed}s` }}
            >
                {duplicatedItems.map((item, index) => (
                    <div key={index} className="flex-shrink-0">
                        {item}
                    </div>
                ))}
            </div>

            {/* Fade effect edges */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-50/95 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-50/95 to-transparent z-10 pointer-events-none"></div>
        </div>
    );
}
