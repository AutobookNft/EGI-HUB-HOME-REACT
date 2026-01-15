import React from 'react';
import { useI18n } from '@/i18n';

export const CorporatePage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="min-h-screen bg-dark text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{t('corporate.title')}</h1>
                <p className="text-xl text-primary mb-8">{t('corporate.subtitle')}</p>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">{t('corporate.section1.title')}</h2>
                        <p className="text-text-muted">
                            {t('corporate.section1.body')}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-2">{t('corporate.section2.title')}</h3>
                        <ul className="list-disc list-inside text-text-muted space-y-2">
                            <li>{t('corporate.section2.item1')}</li>
                            <li>{t('corporate.section2.item2')}</li>
                            <li>{t('corporate.section2.item3')}</li>
                            <li>{t('corporate.section2.item4')}</li>
                        </ul>
                    </section>

                    <section className="mt-8 p-6 bg-dark-light rounded-lg border border-light">
                        <p className="text-sm text-text-muted">
                            {t('corporate.construction')}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
