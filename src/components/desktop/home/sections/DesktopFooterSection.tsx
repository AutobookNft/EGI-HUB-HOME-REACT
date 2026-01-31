import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { homepageContent } from '@/data/content/homepage';

export function DesktopFooterSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-[var(--border)] bg-[var(--surface2)]/30 backdrop-blur-sm mt-auto">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-bold text-white tracking-tight">FlorenceEGI</span>
                    <p className="text-xs text-gray-400">
                        © {currentYear} Florence Consulting Group. {content.footer.rights}
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <Link to="/privacy" className="text-xs font-medium text-gray-400 hover:text-white transition-colors">
                        {content.footer.privacy}
                    </Link>
                    <Link to="/terms" className="text-xs font-medium text-gray-400 hover:text-white transition-colors">
                        {content.footer.terms}
                    </Link>
                    <Link to="/cookies" className="text-xs font-medium text-gray-400 hover:text-white transition-colors">
                        {content.footer.cookies}
                    </Link>
                </div>
            </div>
        </footer>
    );
}
