import { useState, useEffect } from 'react';

export function useScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (totalHeight <= 0) {
                setProgress(0);
                return;
            }
            const currentProgress = window.scrollY / totalHeight;
            // Clamp between 0 and 1
            setProgress(Math.min(Math.max(currentProgress, 0), 1));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial call
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return progress;
}
