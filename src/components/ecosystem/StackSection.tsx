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

    return (
        <section
            ref={setRef}
            data-index={index}
            className="relative h-dvh snap-start flex items-center"
        >
            <div className="w-full px-6 pt-32 pb-20">
                <div className="max-w-md">
                    <div className="flex items-center gap-3 text-white/60 text-xs uppercase tracking-[0.3em]">
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/70" />
                        <span>{t('general.level')} {levelValue}</span>
                    </div>

                    <h2 className="mt-6 text-5xl font-semibold tracking-tight text-white">
                        {layer.title}
                    </h2>

                    {layer.subtitle && (
                        <p className="mt-3 text-base text-white/70">
                            {layer.subtitle}
                        </p>
                    )}

                    {layer.description && (
                        <p className="mt-4 text-sm leading-relaxed text-white/60">
                            {layer.description}
                        </p>
                    )}

                    <div className="mt-10 flex flex-col gap-3">
                        <button
                            type="button"
                            onClick={onPrimaryAction}
                            className="w-full rounded-full border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-black/40 backdrop-blur"
                        >
                            {t('general.cta.enter')}
                        </button>

                        {onSecondaryAction && (
                            <button
                                type="button"
                                onClick={onSecondaryAction}
                                className="w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/80"
                            >
                                {t('general.cta.corporate')}
                            </button>
                        )}
                    </div>

                    <div className="mt-12 text-[11px] uppercase tracking-[0.4em] text-white/40">
                        {t('general.scroll_down')}
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40 md:flex">
                <span>0{index + 1}</span>
                <span className="h-14 w-px bg-white/20" />
                <span>{total.toString().padStart(2, '0')}</span>
            </div>
        </section>
    );
};
