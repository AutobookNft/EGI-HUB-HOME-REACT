/**
 * @package src/pages
 * @author Padmin D. Curtis (AI Partner OS3.0) for Fabio Cherici
 * @version 1.0.0 (FlorenceEGI - EcosystemPage)
 * @date 2026-02-25
 * @purpose Pagina dedicata agli EPP (Environmental Protection Programs).
 *          Spiega il 20% automatico, presenta le 3 campagne stacked (non carousel).
 */
import { SeoHead } from '@/components/common/SeoHead';
import { useI18n } from '@/i18n';
import { useUIStore } from '@/stores/useUIStore';
import { homepageContent } from '@/data/content/homepage';
import { ArrowLeft, Droplets, Trees, Flower2, ArrowRight } from 'lucide-react';

/* ─── Configurazione campagne (colori/icone) ─────────────────────── */
const campaignConfig = [
    {
        accent: 'from-blue-600 to-cyan-500',
        accentText: 'text-cyan-400',
        accentBorder: 'border-cyan-500/30',
        icon: Droplets,
        badge: 'APR',
    },
    {
        accent: 'from-emerald-700 to-green-500',
        accentText: 'text-emerald-400',
        accentBorder: 'border-emerald-500/30',
        icon: Trees,
        badge: 'ARF',
    },
    {
        accent: 'from-amber-600 to-yellow-400',
        accentText: 'text-amber-400',
        accentBorder: 'border-amber-500/30',
        icon: Flower2,
        badge: 'BPE',
    },
];

/* ──────────────────────────────────────────────────────────────────── */

export function EcosystemPage() {
    const { t, locale } = useI18n();
    const navigate = useUIStore((s) => s.navigate);
    const content = homepageContent[locale];
    const eppSection = content.epp_section;

    return (
        <>
            <SeoHead
                title={t('epp.page_title') || 'EPP - Environmental Protection Programs'}
                description={t('epp.hero.subtitle') || ''}
            />

            <main
                id="main-content"
                className="min-h-screen bg-[var(--bg)] text-[var(--text)] pb-24"
            >
                {/* ── Back Button ─────────────────────────────────── */}
                <div className="sticky top-0 z-40 px-6 pt-4 pb-3 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]">
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="flex items-center gap-2 text-sm font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg px-1"
                        aria-label={t('epp.back') || 'Indietro'}
                    >
                        <ArrowLeft size={16} aria-hidden="true" />
                        {t('epp.back') || 'Indietro'}
                    </button>
                </div>

                <div className="max-w-2xl mx-auto px-6">

                    {/* ── Hero ────────────────────────────────────── */}
                    <header className="pt-10 pb-8">
                        <span className="text-xs font-bold tracking-[0.25em] text-emerald-500 uppercase block mb-3">
                            {t('epp.hero.label') || 'SOSTENIBILITÀ'}
                        </span>
                        <h1 className="text-4xl font-bold leading-tight mb-4 tracking-tight">
                            {t('epp.hero.title') || 'Environmental Protection Programs'}
                        </h1>
                        <p className="text-lg text-[var(--muted)] leading-relaxed">
                            {t('epp.hero.subtitle')}
                        </p>
                    </header>

                    {/* ── KPI Strip ───────────────────────────────── */}
                    <div className="grid grid-cols-3 gap-3 mb-10">
                        {[
                            { value: t('epp.kpi.pct') || '20%', label: t('epp.kpi.pct_label') || 'automatico', color: 'text-emerald-400' },
                            { value: t('epp.kpi.campaigns') || '3', label: t('epp.kpi.campaigns_label') || 'campagne', color: 'text-cyan-400' },
                            { value: t('epp.kpi.chain') || 'On-Chain', label: t('epp.kpi.chain_label') || 'tracciabile', color: 'text-amber-400' },
                        ].map((kpi) => (
                            <div
                                key={kpi.value}
                                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-4 text-center"
                            >
                                <div className={`text-2xl font-bold tabular-nums ${kpi.color}`}>
                                    {kpi.value}
                                </div>
                                <div className="text-[10px] text-[var(--muted)] mt-1 leading-tight uppercase tracking-wide">
                                    {kpi.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Intro — Perché il 20% ───────────────────── */}
                    <section
                        aria-label={t('epp.intro.label') || 'Perché il 20%'}
                        className="mb-12"
                    >
                        <div className="bg-gradient-to-br from-emerald-950/60 to-[var(--surface)] border border-emerald-700/30 rounded-3xl p-7">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-500 uppercase block mb-3">
                                {t('epp.intro.label') || 'PERCHÉ IL 20%'}
                            </span>
                            <h2 className="text-2xl font-bold mb-5 leading-snug">
                                {t('epp.intro.title')}
                            </h2>
                            <p className="text-[var(--muted)] leading-relaxed text-base">
                                {t('epp.intro.body')}
                            </p>
                        </div>
                    </section>

                    {/* ── Tre Campagne (stacked) ───────────────────── */}
                    <section aria-label={t('epp.campaigns.title') || 'Le Tre Campagne EPP'}>
                        <div className="mb-6">
                            <span className="text-xs font-bold tracking-[0.2em] text-[var(--muted)] uppercase block mb-2">
                                {t('epp.campaigns.subtitle')}
                            </span>
                            <h2 className="text-3xl font-bold leading-tight">
                                {t('epp.campaigns.title')}
                            </h2>
                        </div>

                        <div className="flex flex-col gap-6">
                            {eppSection.items.map((item, idx) => {
                                const cfg = campaignConfig[idx];
                                const Icon = cfg.icon;

                                return (
                                    <article
                                        key={idx}
                                        className={`relative overflow-hidden rounded-3xl border ${cfg.accentBorder} bg-[var(--surface)] shadow-lg`}
                                    >
                                        {/* Background Image (if available) */}
                                        {item.image && (
                                            <>
                                                <img
                                                    src={item.image}
                                                    alt=""
                                                    aria-hidden="true"
                                                    className="absolute inset-0 w-full h-full object-cover opacity-15"
                                                    loading="lazy"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/90 to-transparent" />
                                            </>
                                        )}

                                        {/* Gradient top bar */}
                                        <div className={`h-1 w-full bg-gradient-to-r ${cfg.accent} rounded-t-3xl`} />

                                        <div className="relative z-10 p-7">
                                            {/* Icon + badge */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cfg.accent} flex items-center justify-center shadow-lg`}>
                                                    <Icon size={22} className="text-white" aria-hidden="true" />
                                                </div>
                                                <span className={`text-xs font-bold tracking-[0.2em] uppercase ${cfg.accentText}`}>
                                                    {cfg.badge}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className={`text-xl font-bold mb-3 leading-snug ${cfg.accentText}`}>
                                                {item.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-[var(--muted)] text-sm leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </section>

                    {/* ── CTA ─────────────────────────────────────── */}
                    <div className="mt-12 bg-gradient-to-br from-emerald-950/40 to-[var(--surface)] border border-emerald-700/20 rounded-3xl p-7 text-center">
                        <p className="text-base text-[var(--muted)] mb-6 leading-relaxed">
                            {t('epp.cta.body')}
                        </p>
                        <a
                            href="https://art.florenceegi.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-[1.03] transition-transform focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            aria-label={t('epp.cta.label') || 'Scopri Florence Art'}
                        >
                            {t('epp.cta.label') || 'Scopri Florence Art'}
                            <ArrowRight size={16} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}
