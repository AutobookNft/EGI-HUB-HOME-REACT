import { homepageContent } from '../data/homepage';
import { useI18n } from '@/i18n';
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
                {/* Custom Gradient Title */}
                <div className="mb-12">
                    <span className="text-xs font-bold tracking-[0.2em] text-[var(--muted)] uppercase mb-2 block">
                        Environment
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent leading-tight">
                        {eppData.title}
                    </h2>
                </div>

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
                            className="relative min-h-[550px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer flex flex-col justify-end"
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* High Contrast Gradient Overlay (Deep Dark) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-50% to-transparent opacity-95" />

                            {/* Content Overlay - Always Visible */}
                            <div className="relative z-10 p-8 pb-12">
                                <h3 className="text-3xl font-bold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-100 text-base leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] font-medium">
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
