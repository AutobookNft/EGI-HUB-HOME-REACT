import { useEffect, useMemo, useRef, useState } from 'react';
import { useUIStore } from '@/stores/useUIStore';
import { useEcosystemManifest } from '@/hooks/useEcosystemManifest';
import type { EcosystemLayerId, Layer } from '@/contracts/ecosystemManifest';
import { useI18n } from '@/i18n';
import { AmbientBackground } from './AmbientBackground';
import { CoordinatesHUD } from './CoordinatesHUD';
import { ProgressIndicator } from './ProgressIndicator';
import { TelemetryStrip } from './TelemetryStrip';
import { StackSection } from './StackSection';

const ORDERED_LAYER_IDS: EcosystemLayerId[] = [
    'hub',
    'egi',
    'projects',
    'environment',
    'oracode',
    'info',
];

export const EcosystemEntranceMobile = () => {
    const { data } = useEcosystemManifest();
    const navigate = useUIStore((state) => state.navigate);
    const { t } = useI18n();

    const layersById = useMemo(
        () => new Map(data.layers.map((layer) => [layer.id, layer])),
        [data.layers]
    );

    const layersOrdered = useMemo(
        () =>
            ORDERED_LAYER_IDS.map((id, index) => {
                const layer = layersById.get(id);
                if (!layer) {
                    return {
                        id,
                        title: id.toUpperCase(),
                        subtitle: '',
                        entryPath: '/',
                        level: index + 1,
                    } as Layer;
                }
                return layer;
            }),
        [layersById]
    );

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
    const coordinates = activeLayer?.coordinates
        ? activeLayer.coordinates
        : `HUB • ${t('general.layer')}: ${activeLayer?.title ?? 'HUB'} • ${t('general.node')}: ${activeLayer?.node ?? 'Core'}`;

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
        <div className="relative h-dvh w-full overflow-hidden bg-black text-white">
            <AmbientBackground activeIndex={activeIndex} reducedMotion={reducedMotion} />

            <div className="pointer-events-none fixed left-5 top-0 z-20 h-dvh w-px bg-gradient-to-b from-white/5 via-white/25 to-white/5" />

            <div className="fixed left-0 top-0 z-30 w-full px-5 pt-4">
                <div className="rounded-2xl bg-black/35 p-4 backdrop-blur">
                    <div className="flex items-center justify-between gap-4">
                        <CoordinatesHUD coordinates={coordinates} />
                        <ProgressIndicator current={activeIndex + 1} total={layersOrdered.length} />
                    </div>
                    <div className="mt-3">
                        <TelemetryStrip telemetry={data.telemetry} />
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
                        onSecondaryAction={
                            layer.secondaryEntryPath
                                ? () => handleAction(layer.secondaryEntryPath)
                                : undefined
                        }
                    />
                ))}
            </div>
        </div>
    );
};
