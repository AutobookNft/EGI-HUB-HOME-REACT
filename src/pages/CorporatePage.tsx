import React from 'react';
import { useUIStore } from '@/stores/useUIStore';
import { useI18n } from '@/i18n';
import { SeoHead } from '@/components/common/SeoHead';

export const CorporatePage: React.FC = () => {
    const navigate = useUIStore((state) => state.navigate);
    const { t } = useI18n();

    return (
        <div className="h-screen bg-dark text-white overflow-y-scroll">
            <SeoHead
                title={t('corporate.title')}
                description={t('corporate.intro.body')}
            />
            {/* Back Button - Mobile optimized */}
            <div className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-light/10 p-4">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 px-3 py-2 bg-dark-light border border-light rounded-lg hover:bg-light/10 transition-colors active:scale-95"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-xs uppercase tracking-wider">{t('corporate.back')}</span>
                </button>
            </div>

            <div className="px-4 py-8 pb-16">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-3">{t('corporate.title')}</h1>
                    <p className="text-lg sm:text-xl text-primary">
                        {t('corporate.subtitle')}
                    </p>
                </div>

                {/* Intro */}
                <section className="mb-10">
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-3">{t('corporate.intro.title')}</h2>
                    <p className="text-base text-text-muted leading-relaxed">
                        {t('corporate.intro.body')}
                    </p>
                </section>

                {/* Governance Duale */}
                <section className="mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 pb-3 border-b border-light">
                        {t('corporate.governance.title')}
                    </h2>
                    <p className="text-base text-text-muted mb-8 leading-relaxed">
                        {t('corporate.governance.subtitle')}
                    </p>

                    {/* Florence EGI SRL */}
                    <div className="mb-8 p-5 bg-dark-light rounded-xl border border-primary/30">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1">
                                    {t('corporate.srl.title')}
                                </h3>
                                <p className="text-xs uppercase tracking-wider text-primary/60">
                                    {t('corporate.srl.tag')}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-base font-semibold mb-2 text-white">{t('corporate.srl.resp.title')}</h4>
                                <ul className="space-y-1.5 text-sm text-text-muted">
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                        <span>{t('corporate.srl.resp.1')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                        <span>{t('corporate.srl.resp.2')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                        <span>{t('corporate.srl.resp.3')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                        <span>{t('corporate.srl.resp.4')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                                        <span>{t('corporate.srl.resp.5')}</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-3 border-t border-light/20">
                                <p className="text-xs">
                                    <strong className="text-white">{t('corporate.srl.focus.label')}</strong>{' '}
                                    <span className="text-primary">{t('corporate.srl.focus.text')}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Associazione Frangette APS */}
                    <div className="mb-8 p-5 bg-dark-light rounded-xl border border-secondary/30">
                        <div className="flex items-start gap-3 mb-4">
                            <div className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0" />
                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-1">
                                    {t('corporate.aps.title')}
                                </h3>
                                <p className="text-xs uppercase tracking-wider text-secondary/60">
                                    {t('corporate.aps.tag')}
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h4 className="text-base font-semibold mb-2 text-white">{t('corporate.aps.resp.title')}</h4>
                                <ul className="space-y-1.5 text-sm text-text-muted">
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                                        <span>{t('corporate.aps.resp.1')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                                        <span>
                                            <strong className="text-white">{t('corporate.aps.resp.2')}</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                                        <span>{t('corporate.aps.resp.3')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                                        <span>{t('corporate.aps.resp.4')}</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-0.5 flex-shrink-0">•</span>
                                        <span>
                                            <strong className="text-white">{t('corporate.aps.resp.5')}</strong>
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-3 border-t border-light/20">
                                <p className="text-xs">
                                    <strong className="text-white">{t('corporate.aps.focus.label')}</strong>{' '}
                                    <span className="text-secondary">{t('corporate.aps.focus.text')}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Come Funziona */}
                    <div className="mb-8 p-5 bg-gradient-to-br from-dark-light to-dark rounded-xl border border-light/20">
                        <h3 className="text-xl sm:text-2xl font-bold mb-4">{t('corporate.how.title')}</h3>

                        <div className="flex flex-col items-center gap-4 mb-6">
                            <div className="w-full text-center">
                                <div className="p-4 flex items-center justify-center border-2 border-primary rounded-lg bg-dark-light mb-2">
                                    <span className="text-xs font-bold text-primary">{t('corporate.how.srl')}</span>
                                </div>
                                <p className="text-xs text-text-muted uppercase">{t('corporate.how.op')}</p>
                            </div>

                            <div className="flex flex-col items-center gap-1">
                                <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                                <p className="text-xs text-white/30 uppercase">{t('corporate.how.dialog')}</p>
                            </div>

                            <div className="w-full text-center">
                                <div className="p-4 flex items-center justify-center border-2 border-secondary rounded-lg bg-dark-light mb-2">
                                    <span className="text-xs font-bold text-secondary">{t('corporate.how.aps')}</span>
                                </div>
                                <p className="text-xs text-text-muted uppercase">{t('corporate.how.ethics')}</p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                                <p className="text-sm font-semibold text-green-400 mb-1">✓ {t('corporate.how.aligned')}</p>
                                <p className="text-xs text-text-muted">
                                    {t('corporate.how.aligned.desc')}
                                </p>
                            </div>
                            <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                                <p className="text-sm font-semibold text-red-400 mb-1">✗ {t('corporate.how.veto')}</p>
                                <p className="text-xs text-text-muted">
                                    <strong className="text-white">VETO</strong> - {t('corporate.how.veto.desc')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Esempio Pratico */}
                    <div className="mb-8 p-5 bg-amber-500/5 border border-amber-500/20 rounded-xl">
                        <h3 className="text-lg font-bold mb-3 text-amber-400">📋 {t('corporate.example.title')}</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start gap-2">
                                <span className="text-primary font-bold mt-0.5 flex-shrink-0 text-xs">{t('corporate.example.srl.label')}</span>
                                <p className="text-text-muted text-xs">
                                    {t('corporate.example.srl.text')}
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-secondary font-bold mt-0.5 flex-shrink-0 text-xs">{t('corporate.example.aps.label')}</span>
                                <p className="text-red-400 font-semibold text-xs">
                                    {t('corporate.example.aps.text')}
                                </p>
                            </div>
                            <div className="flex items-start gap-2">
                                <span className="text-white/40 font-bold mt-0.5 flex-shrink-0 text-xs">{t('corporate.example.result.label')}</span>
                                <p className="text-white text-xs">{t('corporate.example.result.text')}</p>
                            </div>
                        </div>
                    </div>

                    {/* Benefici */}
                    <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 bg-dark-light rounded-lg border border-light/10">
                            <h4 className="font-semibold mb-1.5 text-primary text-sm">✓ {t('corporate.benefit.1.title')}</h4>
                            <p className="text-xs text-text-muted">
                                {t('corporate.benefit.1.text')}
                            </p>
                        </div>
                        <div className="p-4 bg-dark-light rounded-lg border border-light/10">
                            <h4 className="font-semibold mb-1.5 text-primary text-sm">✓ {t('corporate.benefit.2.title')}</h4>
                            <p className="text-xs text-text-muted">
                                {t('corporate.benefit.2.text')}
                            </p>
                        </div>
                        <div className="p-4 bg-dark-light rounded-lg border border-light/10">
                            <h4 className="font-semibold mb-1.5 text-primary text-sm">✓ {t('corporate.benefit.3.title')}</h4>
                            <p className="text-xs text-text-muted">
                                {t('corporate.benefit.3.text')}
                            </p>
                        </div>
                        <div className="p-4 bg-dark-light rounded-lg border border-light/10">
                            <h4 className="font-semibold mb-1.5 text-primary text-sm">✓ {t('corporate.benefit.4.title')}</h4>
                            <p className="text-xs text-text-muted">
                                {t('corporate.benefit.4.text')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team & Contacts Section */}
                <section className="mb-10">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 pb-3 border-b border-light">
                        {t('corporate.team.title')}
                    </h2>

                    <div className="space-y-4">
                        <div className="p-5 bg-dark-light rounded-lg border border-light/10">
                            <h3 className="text-lg font-semibold mb-2">👥 {t('corporate.team.members.title')}</h3>
                            <p className="text-text-muted text-sm mb-2">
                                {t('corporate.team.members.desc')}
                            </p>
                            <p className="text-xs text-white/40">📧 {t('general.status.coming_soon')}</p>
                        </div>

                        <div className="p-5 bg-dark-light rounded-lg border border-light/10">
                            <h3 className="text-lg font-semibold mb-2">⚖️ {t('corporate.team.legal.title')}</h3>
                            <p className="text-text-muted text-sm mb-2">
                                {t('corporate.team.legal.desc')}
                            </p>
                            <p className="text-xs text-white/40">📧 {t('general.status.coming_soon')}</p>
                        </div>

                        <div className="p-5 bg-dark-light rounded-lg border border-light/10">
                            <h3 className="text-lg font-semibold mb-2">📧 {t('corporate.team.contacts.title')}</h3>
                            <p className="text-text-muted text-sm mb-2">
                                {t('corporate.team.contacts.desc')}
                            </p>
                            <p className="text-xs text-white/40">📧 {t('general.status.coming_soon')}</p>
                        </div>

                        <div className="p-5 bg-dark-light rounded-lg border border-light/10">
                            <h3 className="text-lg font-semibold mb-2">🏢 {t('corporate.team.hq.title')}</h3>
                            <p className="text-text-muted text-sm">
                                {t('corporate.team.hq.desc')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Footer CTA */}
                <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-light/20 text-center">
                    <p className="text-base mb-3 font-semibold">
                        {t('corporate.footer.motto')}
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed">
                        {t('corporate.footer.text')}
                    </p>
                </div>
            </div>
        </div>
    );
};
