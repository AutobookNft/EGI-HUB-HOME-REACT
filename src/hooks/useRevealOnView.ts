import { useEffect, useRef, useState } from 'react';

export function useRevealOnView(options = { threshold: 0.1 }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isIn, setIsIn] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsIn(true);
                // Once visible, we can unobserve if we only want it to reveal once
                observer.unobserve(element);
            }
        }, options);

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [options.threshold]);

    return { ref, isIn, className: `reveal ${isIn ? 'is-in' : ''}` };
}
