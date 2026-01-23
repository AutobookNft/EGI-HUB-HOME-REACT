import { useI18n } from '@/i18n';
import config from '@/utils/config';

export const Footer = () => {
    const { t } = useI18n();
    return (
        <footer className="bg-[#050505] border-t border-white/10 px-6 py-12 mt-12">
            <div className="flex flex-col gap-8">
                <div>
                    <div className="font-rajdhani font-bold text-2xl tracking-wider text-white mb-4">
                        {config.appName.toUpperCase()}
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[80%]">
                        {t('footer.motto')}
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <h4 className="text-white text-xs uppercase tracking-widest font-bold">{t('footer.company')}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>{t('footer.about')}</li>
                            <li>{t('nav.mission')}</li>
                            <li>{t('footer.partners')}</li>
                            <li>{t('footer.contacts')}</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-white text-xs uppercase tracking-widest font-bold">{t('footer.products')}</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Florence Art</li>
                            <li>Natan LOC</li>
                            <li>Tosca Bandi</li>
                            <li>EGI Hub</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col gap-4">
                    <div className="text-[10px] text-gray-600 flex gap-4">
                        <span>{t('footer.privacy')}</span>
                        <span>{t('footer.terms')}</span>
                        <span>{t('footer.cookies')}</span>
                    </div>
                    <div className="text-[10px] text-gray-700 font-mono">
                        {t('footer.rights')}
                    </div>
                </div>
            </div>
        </footer>
    );
};
