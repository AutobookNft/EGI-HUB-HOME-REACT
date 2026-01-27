import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import '../styles/motion.css';

export function TransitionSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    return (
        <section className="py-24 px-8 relative flex flex-col items-center justify-center min-h-[40vh] text-center">
            <div ref={ref} className={`space-y-8 max-w-2xl mx-auto ${className}`}>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight drop-shadow-lg leading-tight">
                    {content.transition.headline}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                        {content.transition.subheadline}
                    </span>
                </h2>

                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    {content.transition.description}
                </p>
            </div>
        </section>
    );
}
