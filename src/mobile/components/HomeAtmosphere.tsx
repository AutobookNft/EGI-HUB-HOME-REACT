import { ReactNode } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import '../styles/home-atmosphere.css';

interface HomeAtmosphereProps {
    children: ReactNode;
}

export function HomeAtmosphere({ children }: HomeAtmosphereProps) {
    const progress = useScrollProgress();

    // Logic:
    // 0..0.35: State 1 (Light) -> Opacity 0
    // 0.35..0.70: State 2 (Darkening) -> Opacity increases to ~0.95
    // 0.70..1.0: State 3 (Returning Light) -> Opacity decreases

    let overlayOpacity = 0;

    if (progress < 0.35) {
        overlayOpacity = 0;
    } else if (progress < 0.70) {
        // Map 0.35..0.70 to 0..0.92
        overlayOpacity = ((progress - 0.35) / (0.70 - 0.35)) * 0.92;
    } else {
        // Map 0.70..1.0 to 0.92..0
        overlayOpacity = 0.92 - ((progress - 0.70) / (1.0 - 0.70)) * 0.92;
    }

    return (
        <div className="atmo relative">
            {/* The Overlay controlled by scroll */}
            <div
                className="atmoOverlay"
                style={{ opacity: overlayOpacity }}
            />

            {/* Content sits above */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
