import { homepageContent } from '../data/homepage';
import { useI18n } from '@/i18n';
import { SectionTitle } from '../ui/SectionTitle';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import '../styles/motion.css';


export function ImpactSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    // Use the 4th Pillar (EPP) as the source for this section to ensure consistency
    const eppPillar = content.pillars.items[3];

    const title = eppPillar.title;
    const text = eppPillar.description;

    return (
        <section className="py-24 px-6 relative">
            <div ref={ref} className={className}>
                <SectionTitle title={title} eyebrow="Environment" />

                {/* Ultra-Glass Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">

                    {/* Glass Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-white/5 to-teal-400/10 backdrop-blur-xl border border-white/30" />

                    {/* Inner sheen/reflection */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent opacity-50" />

                    {/* Content */}
                    <div className="relative z-10 p-8 flex flex-col items-center text-center">

                        {/* 3D Glass Icon */}
                        <div className="w-40 h-40 mb-6 relative drop-shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                            <img
                                src="/images/epp_glass_icon.png"
                                alt="EPP Ecosystem"
                                className="w-full h-full object-contain filter brightness-110 contrast-110"
                            />
                        </div>

                        {/* Text */}
                        <p className="text-slate-800 text-lg md:text-xl font-medium leading-relaxed drop-shadow-sm max-w-sm">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
