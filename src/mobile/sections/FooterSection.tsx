import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';

export function FooterSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-[var(--border)] bg-[var(--surface2)]/30 backdrop-blur-sm">
            <div className="flex flex-col gap-8">
                {/* Brand & Copyright */}
                <div className="flex flex-col gap-2">
                    <span className="text-lg font-bold text-[var(--text)] tracking-tight">FlorenceEGI</span>
                    <p className="text-xs text-[var(--muted)]">
                        © {currentYear} Florence Consulting Group. {content.footer.rights}
                    </p>
                </div>

                {/* Legal Links */}
                <div className="flex flex-col gap-3">
                    <Link to="/privacy" className="text-xs font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                        {content.footer.privacy}
                    </Link>
                    <Link to="/terms" className="text-xs font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                        {content.footer.terms}
                    </Link>
                    <Link to="/cookies" className="text-xs font-medium text-[var(--muted)] hover:text-[var(--text)] transition-colors">
                        {content.footer.cookies}
                    </Link>
                </div>
            </div>
        </footer>
    );
}
