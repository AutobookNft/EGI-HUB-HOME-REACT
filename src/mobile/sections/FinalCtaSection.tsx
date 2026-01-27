import { ButtonPrimary } from '../ui/Button';
import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import '../styles/motion.css';

export function FinalCtaSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    return (
        <section className="py-32 px-6 relative overflow-hidden text-center">
            <div ref={ref} className={`relative z-10 space-y-8 ${className}`}>
                <p className="text-xl md:text-2xl font-light text-[var(--text)] leading-relaxed max-w-[80%] mx-auto">
                    {content.finalCta.text}
                </p>

                <div className="flex flex-col gap-4 max-w-[300px] mx-auto">
                    <ButtonPrimary aria-label={content.finalCta.primaryButton} className="shadow-[var(--shadow)] hover:shadow-lg bg-[var(--accent)] border-none">
                        {content.finalCta.primaryButton}
                    </ButtonPrimary>

                    <div className="pt-2">
                        <a href="/how-it-works" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors uppercase tracking-widest border-b border-transparent hover:border-[var(--text)] pb-1">
                            {content.finalCta.secondaryButton}
                        </a>
                    </div>
                </div>

                <p className="text-xs text-[var(--muted)] uppercase tracking-widest pt-12 opacity-60">
                    FlorenceEGI © 2026
                </p>
            </div>
        </section>
    );
}
