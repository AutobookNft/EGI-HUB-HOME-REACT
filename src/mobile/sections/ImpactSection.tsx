import { homepageContent } from '../data/homepage';
import { useI18n } from '@/i18n';
import { useUIStore } from '@/stores/useUIStore';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import { Droplets, Trees, Flower2, ArrowRight } from 'lucide-react';
import '../styles/motion.css';

const campaignIcons = [Droplets, Trees, Flower2];
const campaignAccents = ['text-cyan-400', 'text-emerald-400', 'text-amber-400'];
const campaignBorders = ['border-cyan-700/30', 'border-emerald-700/30', 'border-amber-700/30'];
const campaignBadges = ['APR', 'ARF', 'BPE'];

export function ImpactSection() {
    const { locale, t } = useI18n();
    const navigate = useUIStore((s) => s.navigate);
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();
    const eppData = content.epp_section;

    return (
        <section className="py-24 px-6 relative">
            <div ref={ref} className={className}>
                {/* Header */}
                <div className="mb-8">
                    <span className="text-xs font-bold tracking-[0.2em] text-[var(--muted)] uppercase mb-2 block">
                        Environment
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent leading-tight">
                        {eppData.title}
                    </h2>
                    <p className="text-sm text-[var(--muted)] mt-3 leading-relaxed max-w-lg">
                        {eppData.description}
                    </p>
                </div>

                {/* 3 Campagne — card compatte stacked */}
                <div className="flex flex-col gap-4 mb-8">
                    {eppData.items.map((item, idx) => {
                        const Icon = campaignIcons[idx];
                        return (
                            <div
                                key={idx}
                                className={`bg-[var(--surface)] border ${campaignBorders[idx]} rounded-2xl p-5 flex gap-4 items-start`}
                            >
                                <div className="shrink-0 mt-0.5">
                                    <Icon size={20} className={campaignAccents[idx]} aria-hidden="true" />
                                </div>
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-[10px] font-bold tracking-widest uppercase ${campaignAccents[idx]}`}>
                                            {campaignBadges[idx]}
                                        </span>
                                    </div>
                                    <h3 className="text-sm font-bold text-[var(--text)] mb-1 leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-[var(--muted)] leading-relaxed line-clamp-2">
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
                    className="flex items-center gap-2 text-sm font-semibold text-emerald-500 hover:text-emerald-400 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg"
                >
                    {t('epp.cta.label') || 'Scopri di più'}
                    <ArrowRight size={15} aria-hidden="true" />
                </button>
            </div>
        </section>
    );
}
