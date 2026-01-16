import { useEffect, useMemo, useRef, useState } from 'react';
import { useUIStore } from '@/stores/useUIStore';
import { AmbientBackground } from '@/components/ecosystem/AmbientBackground';
import { CoordinatesHUD } from '@/components/ecosystem/CoordinatesHUD';
import { ProgressIndicator } from '@/components/ecosystem/ProgressIndicator';
import { TelemetryStrip } from '@/components/ecosystem/TelemetryStrip';
import { StackSection } from '@/components/ecosystem/StackSection';
import { platformsSystemData } from '@/data/systems/platformsSystemData';
import type { Layer } from '@/contracts/ecosystemManifest';

export const PlatformsMobilePage = () => {
    const navigate = useUIStore((state) => state.navigate);

    // Transform platformsSystemData to Layer[] format
    const layersOrdered: Layer[] = useMemo(() => [
        // First slide: HUB (center)
        {
            id: 'hub' as any,
            title: platformsSystemData.core.label,
            subtitle: platformsSystemData.core.tagline,
            description: platformsSystemData.core.desc,
            entryPath: platformsSystemData.core.route || '#',
            level: 1,
            coordinates: `PLATFORMS • Layer: ${platformsSystemData.core.label} • Node: Centro`,
            node: 'Centro',
        },
        // Other slides: satellites
        {
            id: 'florenceegi' as any,
            title: (platformsSystemData.florenceegi as any)?.label || 'FLORENCE EGI',
            subtitle: (platformsSystemData.florenceegi as any)?.tagline || '',
            description: (platformsSystemData.florenceegi as any)?.desc || '',
            entryPath: (platformsSystemData.florenceegi as any)?.route || '#',
            level: 2,
            coordinates: `PLATFORMS • Layer: ${(platformsSystemData.florenceegi as any)?.label || 'FLORENCE EGI'} • Node: Piattaforma`,
            node: 'Piattaforma',
        },
        {
            id: 'natan' as any,
            title: (platformsSystemData.natan as any)?.label || 'NATAN',
            subtitle: (platformsSystemData.natan as any)?.tagline || '',
            description: (platformsSystemData.natan as any)?.desc || '',
            entryPath: (platformsSystemData.natan as any)?.route || '#',
            level: 3,
            coordinates: `PLATFORMS • Layer: ${(platformsSystemData.natan as any)?.label || 'NATAN'} • Node: Piattaforma`,
            node: 'Piattaforma',
        },
        {
            id: 'tosca' as any,
            title: (platformsSystemData.tosca as any)?.label || 'TOSCA BANDI',
            subtitle: (platformsSystemData.tosca as any)?.tagline || '',
            description: (platformsSystemData.tosca as any)?.desc || '',
            entryPath: (platformsSystemData.tosca as any)?.route || '#',
            level: 4,
            coordinates: `PLATFORMS • Layer: ${(platformsSystemData.tosca as any)?.label || 'TOSCA'} • Node: Coming Soon`,
            node: 'Coming Soon',
        },
        {
            id: 'partners' as any,
            title: (platformsSystemData.partners as any)?.label || 'PARTNERS',
            subtitle: (platformsSystemData.partners as any)?.tagline || '',
            description: (platformsSystemData.partners as any)?.desc || '',
            entryPath: (platformsSystemData.partners as any)?.route || '#',
            level: 5,
            coordinates: `PLATFORMS • Layer: ${(platformsSystemData.partners as any)?.label || 'PARTNERS'} • Node: Coming Soon`,
            node: 'Coming Soon',
        },
        {
            id: 'back' as any,
            title: (platformsSystemData.back as any)?.label || '← HOME',
            subtitle: (platformsSystemData.back as any)?.tagline || '',
            description: (platformsSystemData.back as any)?.desc || '',
            entryPath: (platformsSystemData.back as any)?.route || '#',
            level: 6,
            coordinates: `PLATFORMS • Layer: Navigation • Node: Back`,
            node: 'Navigation',
        },
    ], []);

    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexRef = useRef(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const sectionRefs = useRef<Array<HTMLElement | null>>([]);
    const rafRef = useRef<number | null>(null);

    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        const media = window.matchMedia('(prefers-reduced-motion: reduce)');
        const update = () => setReducedMotion(media.matches);
        update();
        media.addEventListener('change', update);
        return () => media.removeEventListener('change', update);
    }, []);

    useEffect(() => {
        const root = containerRef.current;
        if (!root) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.6)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (!visible.length) return;
                const entry = visible[0];
                const index = Number((entry.target as HTMLElement).dataset.index ?? 0);

                if (index === activeIndexRef.current) return;
                if (rafRef.current) cancelAnimationFrame(rafRef.current);

                rafRef.current = requestAnimationFrame(() => {
                    activeIndexRef.current = index;
                    setActiveIndex(index);
                });
            },
            {
                root,
                threshold: [0, 0.6, 1],
            }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [layersOrdered.length]);

    const activeLayer = layersOrdered[activeIndex] ?? layersOrdered[0];
    const coordinates = activeLayer?.coordinates || `PLATFORMS • Layer: ${activeLayer?.title}`;

    const telemetry = {
        layers: layersOrdered.length,
        nodes: layersOrdered.length - 1, // exclude center
        modules: 2, // FLORENCE EGI + NATAN active
    };

    const handleAction = (path?: string) => {
        if (!path || path === '#') return;
        if (path.startsWith('http')) {
            window.open(path, '_blank', 'noopener,noreferrer');
            return;
        }
        if (path.startsWith('/')) {
            navigate(path);
        }
    };

    return (
        <div className="relative w-full overflow-hidden text-white bg-black h-dvh">
            <AmbientBackground activeIndex={activeIndex} reducedMotion={reducedMotion} />

            <div className="fixed top-0 z-20 w-px pointer-events-none left-5 h-dvh bg-gradient-to-b from-white/5 via-white/25 to-white/5" />

            <div className="fixed top-0 left-0 z-30 w-full px-5 pt-4">
                <div className="p-4 rounded-2xl bg-black/35 backdrop-blur">
                    <div className="flex items-center justify-between gap-4">
                        <CoordinatesHUD coordinates={coordinates} />
                        <ProgressIndicator current={activeIndex + 1} total={layersOrdered.length} />
                    </div>
                    <div className="mt-3">
                        <TelemetryStrip telemetry={telemetry} />
                    </div>
                </div>
            </div>

            <div
                ref={containerRef}
                className={
                    'h-dvh overflow-y-auto snap-y snap-mandatory overscroll-contain pb-12 ' +
                    (reducedMotion ? '' : 'scroll-smooth')
                }
            >
                {layersOrdered.map((layer, index) => (
                    <StackSection
                        key={layer.id}
                        layer={layer}
                        index={index}
                        total={layersOrdered.length}
                        setRef={(element) => {
                            sectionRefs.current[index] = element;
                        }}
                        onPrimaryAction={() => handleAction(layer.entryPath)}
                    />
                ))}
            </div>
        </div>
    );
};
