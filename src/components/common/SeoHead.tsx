import { Helmet } from 'react-helmet-async';
import { useI18n } from '@/i18n';
import config from '@/utils/config';

interface SeoProps {
    title: string;
    description: string;
    type?: 'website' | 'article' | 'profile';
    image?: string;
    schema?: Record<string, any>;
}

export const SeoHead = ({ title, description, type = 'website', image, schema }: SeoProps) => {
    const { locale } = useI18n();
    const fullTitle = `${title} | ${config.appName}`;
    const fullImage = image || config.heroPath; // Default to hero image if not provided

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <html lang={locale} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content={config.appName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />

            {/* Schema.org Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": config.appName,
                    "url": config.appUrl,
                    "logo": config.logoPath,
                    ...schema
                })}
            </script>
        </Helmet>
    );
};
