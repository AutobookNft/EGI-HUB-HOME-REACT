import { homepageContent } from '../data/homepage';
import { useI18n } from '@/i18n';
import { SectionTitle } from '../ui/SectionTitle';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import '../styles/motion.css';


export function ImpactSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    // Use the dedicated EPP section data
    const eppData = content.epp_section;

    return (
        <section className="py-24 px-6 relative">
            <div ref={ref} className={className}>
                <SectionTitle title={eppData.title} eyebrow="Environment" />

                {/* Main EPP Intro Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group mb-8 transition-transform duration-500 hover:scale-[1.02]">
                    {/* Blue-Green Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-teal-500 to-emerald-500 opacity-90 backdrop-blur-xl" />

                    {/* Glass Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50 pointer-events-none mix-blend-overlay" />

                    <div className="relative z-10 p-8 flex flex-col items-center text-center">
                        <div className="w-48 h-48 mb-6 relative">
                            {/* 3D Crystal/Asset Display */}
                            <div className="absolute inset-0 bg-blue-400/30 blur-3xl rounded-full animate-pulse" />
                            <img
                                src="/images/epp_glass_icon.png"
                                alt="EPP Crystal"
                                className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(56,189,248,0.6)] animate-float"
                            />
                        </div>

                        <p className="text-xl font-medium leading-relaxed text-white drop-shadow-sm">
                            {eppData.description}
                        </p>
                    </div>
                </div>

                {/* Campaigns List */}
                <div className="flex flex-col gap-6">
                    {eppData.items.map((item, idx) => (
                        <div
                            key={idx}
                            className="relative h-80 rounded-3xl overflow-hidden shadow-xl group cursor-pointer"
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Dark Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <h3 className="text-2xl font-bold text-white mb-3 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
