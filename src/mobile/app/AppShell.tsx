import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/i18n';
import { translations } from '@/i18n/translations';
import config from '@/utils/config';
import { HomeAtmosphere } from '../components/HomeAtmosphere';

export function AppShell({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { locale, setLocale } = useI18n();
    const t = translations[locale];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Layout B Header Styles
    // Sticky, simple blur, transition on scroll
    // Scrolled: slightly more opaque white background
    const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/70 backdrop-blur-md border-b border-[var(--border)] shadow-sm'
        : 'bg-transparent backdrop-blur-[2px]'
        }`;

    return (
        <HomeAtmosphere>
            <div className={`min-h-screen text-[var(--text)] font-sans antialiased selection:bg-[var(--accent)] selection:text-white`}>
                <header className={headerClasses}>
                    <div className="px-6 h-20 pt-4 flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="relative z-50 flex items-center gap-3 group">
                            <img
                                src={config.logoPath}
                                alt="Florence EGI"
                                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
                            />
                            <span className="font-bold text-lg tracking-tight text-[var(--text)]">
                                Florence EGI
                            </span>
                        </Link>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                            {/* Lang Switcher (Mini) */}
                            <button
                                onClick={() => {
                                    const locales: import('@/i18n/translations').SupportedLocale[] = ['it', 'en', 'de', 'fr', 'es', 'pt'];
                                    const currentIndex = locales.indexOf(locale);
                                    const nextIndex = (currentIndex + 1) % locales.length;
                                    setLocale(locales[nextIndex]);
                                }}
                                className="text-xs font-medium uppercase tracking-wider text-[var(--muted)] hover:text-[var(--text)] transition-colors w-6 text-center"
                            >
                                {locale}
                            </button>

                            {/* Menu Toggle */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="relative z-50 p-2 -mr-2 text-[var(--text)] hover:bg-[var(--border)] rounded-full transition-colors"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="relative pt-24 pb-24">
                    {children}
                </main>

                {/* Drawer Menu */}
                <div className={`fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-xl transition-transform duration-500 ease-spring ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    <div className="h-full flex flex-col p-8 pt-24">
                        <nav className="flex flex-col gap-6">

                            <Link
                                to="/platforms"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-3xl font-light tracking-tight text-[var(--text)] opacity-60 hover:opacity-100 transition-opacity"
                            >
                                {t['nav.platforms']}
                            </Link>
                            <Link
                                to="/mission"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-3xl font-light tracking-tight text-[var(--text)] opacity-60 hover:opacity-100 transition-opacity"
                            >
                                {t['nav.mission']}
                            </Link>
                        </nav>

                        <div className="mt-auto pt-8 border-t border-[var(--border)]">
                            <p className="text-sm text-[var(--muted)]">FlorenceEGI © 2026</p>
                        </div>
                    </div>
                </div>
            </div>
        </HomeAtmosphere>
    );
}
