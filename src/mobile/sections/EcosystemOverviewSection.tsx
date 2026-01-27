import { SectionTitle } from '../ui/SectionTitle';
import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import '../styles/motion.css';

export function EcosystemOverviewSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    return (
        <section className="py-24 px-6 relative">
            <SectionTitle title={content.ecosystem.title} className={className} />

            {/* Visual Object - Sospeso (Light Theme) */}
            <div ref={ref} className={`relative aspect-[4/3] rounded-[var(--r-card)] overflow-hidden border border-[var(--border)] shadow-[var(--shadow)] bg-[var(--surface)] ${className}`} style={{ transitionDelay: '0.2s' }}>
                {/* Simulated Backdrop content */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center backdrop-blur-sm">
                    <div className="w-24 h-24 rounded-full bg-[var(--bg)] border border-[var(--accent)]/30 flex items-center justify-center mb-4 shadow-lg animate-pulse">
                        <span className="text-4xl filter drop-shadow-sm" role="img" aria-label="Ecosystem">🌐</span>
                    </div>
                    <p className="text-sm font-medium tracking-widest text-[var(--accent)] uppercase">
                        {content.ecosystem.visualLabel}
                    </p>
                </div>
            </div>

            <div className={`mt-8 ${className}`} style={{ transitionDelay: '0.4s' }}>
                <p className="text-base text-[var(--muted)] text-center max-w-[80%] mx-auto leading-relaxed">
                    {content.ecosystem.caption}
                </p>
            </div>
        </section>
    );
}
