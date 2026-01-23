import React from 'react';
import { useI18n } from '@/i18n';
import { SeoHead } from '@/components/common/SeoHead';

export const OracodePage: React.FC = () => {
    const { t } = useI18n();

    return (
        <div className="min-h-screen bg-dark text-white p-8">
            <SeoHead
                title={t('oracode.title')}
                description={t('oracode.subtitle')}
            />
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{t('oracode.title')}</h1>
                <p className="text-xl text-primary mb-8">{t('oracode.subtitle')}</p>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-semibold mb-3">{t('oracode.section1.title')}</h2>
                        <p className="text-text-muted">
                            {t('oracode.section1.body')}
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold mb-2">{t('oracode.section2.title')}</h3>
                        <ul className="list-disc list-inside text-text-muted space-y-2">
                            <li>{t('oracode.section2.item1')}</li>
                            <li>{t('oracode.section2.item2')}</li>
                            <li>{t('oracode.section2.item3')}</li>
                        </ul>
                    </section>

                    <section className="mt-8 p-6 bg-dark-light rounded-lg border border-light">
                        <p className="text-sm text-text-muted">
                            {t('oracode.construction')}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
