import { homepageContent } from '@/data/content/homepage';
import { useI18n } from '@/i18n';
import { useUIStore } from '@/stores/useUIStore';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import { Droplets, Trees, Flower2, ArrowRight } from 'lucide-react';
import '@/mobile/styles/motion.css';

const campaignIcons = [Droplets, Trees, Flower2];
const campaignAccents = ['text-cyan-400', 'text-emerald-400', 'text-amber-400'];
const campaignGradients = ['from-blue-600 to-cyan-500', 'from-emerald-700 to-green-500', 'from-amber-600 to-yellow-400'];
const campaignBorders = ['border-cyan-700/30', 'border-emerald-700/30', 'border-amber-700/30'];
const campaignBadges = ['APR', 'ARF', 'BPE'];

export function DesktopImpactSection() {
    const { locale, t } = useI18n();
    const navigate = useUIStore((s) => s.navigate);
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();
    const eppData = content.epp_section;

    return (
        <section className="py-16 px-6 relative">
            <div ref={ref} className={className}>
                {/* Header */}
                <div className="mb-6">
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2 block">
                        Environment
                    </span>
                    <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent leading-tight">
                        {eppData.title}
                    </h2>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                        {eppData.description}
                    </p>
                </div>

                {/* 3 Campagne — card compatte stacked */}
                <div className="flex flex-col gap-3 mb-6">
                    {eppData.items.map((item, idx) => {
                        const Icon = campaignIcons[idx];
                        return (
                            <div
                                key={idx}
                                className={`bg-white/5 border ${campaignBorders[idx]} rounded-2xl p-4 flex gap-3 items-start`}
                            >
                                <div className={`shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br ${campaignGradients[idx]} flex items-center justify-center mt-0.5`}>
                                    <Icon size={16} className="text-white" aria-hidden="true" />
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-[9px] font-bold tracking-widest uppercase ${campaignAccents[idx]}`}>
                                            {campaignBadges[idx]}
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-bold text-white mb-1 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Link to full EPP page */}
                <button
                    type="button"
                    onClick={() => navigate('/ecosystem')}
                    className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg"
                >
                    {t('epp.cta.label') || 'Scopri di più'}
                    <ArrowRight size={13} aria-hidden="true" />
                </button>
            </div>
        </section>
    );
}
