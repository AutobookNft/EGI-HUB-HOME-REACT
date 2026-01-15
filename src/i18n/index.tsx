import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { SUPPORTED_LOCALES, translations, type SupportedLocale } from './translations';

const STORAGE_KEY = 'egi_locale';

type I18nContextValue = {
    locale: SupportedLocale;
    setLocale: (locale: SupportedLocale) => void;
    t: (key: string, params?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const normalizeLocale = (value: string | null | undefined): SupportedLocale => {
    if (!value) return 'it';
    const normalized = value.toLowerCase().split('-')[0] as SupportedLocale;
    return SUPPORTED_LOCALES.includes(normalized) ? normalized : 'it';
};

const translateString = (
    locale: SupportedLocale,
    key: string,
    params?: Record<string, string | number>
): string => {
    const dictionary = translations[locale];
    let value = dictionary[key] ?? translations.it[key] ?? key;

    if (params) {
        Object.entries(params).forEach(([paramKey, paramValue]) => {
            value = value.replace(new RegExp(`{${paramKey}}`, 'g'), String(paramValue));
        });
    }

    return value;
};

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
    const [locale, setLocaleState] = useState<SupportedLocale>(() => {
        if (typeof window === 'undefined') return 'it';
        const stored = normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
        if (stored) return stored;
        return normalizeLocale(window.navigator.language);
    });

    const setLocale = useCallback((nextLocale: SupportedLocale) => {
        setLocaleState(nextLocale);
        if (typeof window !== 'undefined') {
            window.localStorage.setItem(STORAGE_KEY, nextLocale);
        }
    }, []);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.lang = locale;
        }
    }, [locale]);

    const t = useCallback(
        (key: string, params?: Record<string, string | number>) =>
            translateString(locale, key, params),
        [locale]
    );

    const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within I18nProvider');
    }
    return context;
};
