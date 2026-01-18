import type { Layer } from '@/contracts/ecosystemManifest';
import { useI18n } from '@/i18n';

type StackSectionProps = {
    layer: Layer;
    index: number;
    total: number;
    setRef: (element: HTMLElement | null) => void;
    onPrimaryAction: () => void;
    onSecondaryAction?: () => void;
};

// Color mapping per layer
const LAYER_COLORS: Record<string, { primary: string; glow: string; gradient: string }> = {
    florence: {
        primary: '#FF6B35',
        glow: 'rgba(255, 107, 53, 0.3)',
        gradient: 'radial-gradient(circle at 30% 40%, rgba(255, 107, 53, 0.15) 0%, transparent 60%)',
    },
    hub: {
        primary: '#FFD700',
        glow: 'rgba(255, 215, 0, 0.3)',
        gradient: 'radial-gradient(circle at 30% 40%, rgba(255, 215, 0, 0.15) 0%, transparent 60%)',
    },
    egi: {
        primary: '#00FF88',
        glow: 'rgba(0, 255, 136, 0.3)',
        gradient: 'radial-gradient(circle at 30% 40%, rgba(0, 255, 136, 0.15) 0%, transparent 60%)',
    },
    projects: {
        primary: '#00BFFF',
        glow: 'rgba(0, 191, 255, 0.3)',
        gradient: 'radial-gradient(circle at 30% 40%, rgba(0, 191, 255, 0.15) 0%, transparent 60%)',
    },
    environment: {
        primary: '#50C878',
        glow: 'rgba(80, 200, 120, 0.3)',
        gradient: 'radial-gradient(circle at 30% 40%, rgba(80, 200, 120, 0.15) 0%, transparent 60%)',
    },
    oracode: {
        primary: '#9370DB',
        glow: 'rgba(147, 112, 219, 0.3)',
        gradient: 'radial-gradient(circle at 30% 40%, rgba(147, 112, 219, 0.15) 0%, transparent 60%)',
    },
    info: {
        primary: '#FF6B9D',
        glow: 'rgba(255, 107, 157, 0.3)',
        gradient: 'radial-gradient(circle at 30% 40%, rgba(255, 107, 157, 0.15) 0%, transparent 60%)',
    },
};

export const StackSection = ({
    layer,
    index,
    total,
    setRef,
    onPrimaryAction,
    onSecondaryAction,
}: StackSectionProps) => {
    const { t } = useI18n();
    const levelValue = String(layer.level ?? index + 1).padStart(2, '0');
    const colors = LAYER_COLORS[layer.id] || LAYER_COLORS.hub;

    return (
        <section
            ref={setRef}
            data-index={index}
            className="relative h-dvh snap-start flex items-center justify-center"
            style={{ background: colors.gradient }}
        >
            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes glowPulse {
                    0%, 100% { box-shadow: 0 0 20px ${colors.glow}, 0 0 40px ${colors.glow}; }
                    50% { box-shadow: 0 0 30px ${colors.glow}, 0 0 60px ${colors.glow}; }
                }
                @keyframes shimmer {
                    0% { background-position: -1000px 0; }
                    100% { background-position: 1000px 0; }
                }
                .animate-fade-in {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                .animate-glow {
                    animation: glowPulse 3s ease-in-out infinite;
                }
                .text-shimmer {
                    background: linear-gradient(90deg, ${colors.primary} 0%, white 50%, ${colors.primary} 100%);
                    background-size: 200% 100%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: shimmer 3s linear infinite;
                }
            `}</style>

            {/* Hero image background per florence layer */}
            {layer.id === 'florence' && (
                <>
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: 'url(/assets/hero-images/florence-egi-hero.png)',
                            backgroundPosition: 'center 40%',
                            opacity: 0.5,
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
                </>
            )}

            <div className="w-full px-8 max-w-2xl animate-fade-in">
                {/* Level indicator */}
                <div className="flex items-center gap-3 text-white/50 text-xs uppercase tracking-[0.4em] mb-8">
                    <span
                        className="inline-flex h-3 w-3 rounded-full animate-pulse"
                        style={{ backgroundColor: colors.primary }}
                    />
                    <span>{t('general.level')} {levelValue}</span>
                </div>

                {/* Hero image per florence - NELLO SPAZIO TRA LEVEL E TITOLO */}
                {layer.id === 'florence' && (
                    <div className="mb-6">
                        <img
                            src="/assets/hero-images/florence-egi-hero.png"
                            alt="Florence EGI Hero"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                )}

                {/* Titolo MASSICCIO */}
                <h2
                    className="text-7xl sm:text-8xl font-bold tracking-tighter text-shimmer mb-6"
                    style={{ lineHeight: '0.9' }}
                >
                    {layer.title}
                </h2>

                {/* Subtitle LEGGIBILE */}
                {layer.subtitle && (
                    <p
                        className="text-lg sm:text-xl font-medium leading-relaxed mb-4"
                        style={{ color: colors.primary }}
                    >
                        {layer.subtitle}
                    </p>
                )}

                {/* Description con peso giusto */}
                {layer.description && (
                    <p className="text-base sm:text-lg leading-relaxed text-white/80 mb-12 max-w-xl">
                        {layer.description}
                    </p>
                )}

                {/* Bottoni con glow */}
                {layer.entryPath && layer.entryPath !== '#' && (
                    <div className="flex flex-col gap-4">
                        <button
                            type="button"
                            onClick={onPrimaryAction}
                            className="w-full rounded-full border-2 px-8 py-5 text-base font-bold uppercase tracking-[0.3em] text-white backdrop-blur-md transition-all duration-300 hover:scale-105 animate-glow"
                            style={{
                                borderColor: colors.primary,
                                backgroundColor: `${colors.primary}20`,
                            }}
                        >
                            {t('general.cta.enter')}
                        </button>

                        {onSecondaryAction && (
                            <button
                                type="button"
                                onClick={onSecondaryAction}
                                className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                            >
                                {t('general.cta.corporate')}
                            </button>
                        )}
                    </div>
                )}

                {/* Scroll indicator - ENHANCED */}
                <div className="mt-16 flex flex-col items-center gap-4">
                    <span className="text-sm uppercase tracking-[0.4em] text-white/70 font-semibold animate-pulse">
                        {t('general.scroll_explore')}
                    </span>
                    <div className="flex items-center gap-3 animate-bounce">
                        <span className="h-px w-12 bg-white/30" />
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: colors.primary }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                        <span className="h-px w-12 bg-white/30" />
                    </div>
                </div>
            </div>

            {/* Counter laterale con animazione */}
            <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-sm uppercase tracking-[0.3em] text-white/30">
                <span className="text-2xl font-bold" style={{ color: colors.primary }}>
                    {levelValue}
                </span>
                <span className="h-20 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                <span className="text-xs">{total.toString().padStart(2, '0')}</span>
            </div>
        </section>
    );
};
