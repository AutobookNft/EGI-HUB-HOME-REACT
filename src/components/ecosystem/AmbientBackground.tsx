import { useMemo } from 'react';

type AmbientBackgroundProps = {
    activeIndex: number;
    reducedMotion: boolean;
};

const noiseSvg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'>
        <filter id='n'>
            <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
        </filter>
        <rect width='180' height='180' filter='url(#n)' opacity='0.18'/>
    </svg>`
);

export const AmbientBackground = ({ activeIndex, reducedMotion }: AmbientBackgroundProps) => {
    const transform = useMemo(() => {
        if (reducedMotion) return 'translate3d(0,0,0)';
        const offset = activeIndex * 10;
        return `translate3d(0, ${-offset}px, 0)`;
    }, [activeIndex, reducedMotion]);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div
                className="absolute inset-0 opacity-90"
                style={{
                    transform,
                    transition: reducedMotion ? 'none' : 'transform 600ms ease',
                    backgroundImage: [
                        'radial-gradient(1200px 700px at 20% 10%, rgba(14,165,233,0.14), transparent 60%)',
                        'radial-gradient(900px 600px at 80% 20%, rgba(99,102,241,0.12), transparent 65%)',
                        'linear-gradient(180deg, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.88) 50%, rgba(2,6,23,0.98) 100%)',
                    ].join(', '),
                }}
            />
            <div
                className="absolute inset-0 opacity-35 mix-blend-screen"
                style={{
                    backgroundImage: `url("data:image/svg+xml,${noiseSvg}")`,
                }}
            />
            <div className="absolute inset-0 bg-black/40" />
        </div>
    );
};
