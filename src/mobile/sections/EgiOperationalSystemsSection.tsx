import { SectionTitle } from '../ui/SectionTitle';
import { Card } from '../ui/Card';
import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import '../styles/motion.css';

export function EgiOperationalSystemsSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    return (
        <section className="py-24 px-6 relative">
            <SectionTitle
                title={content.systems.title}
                eyebrow={content.systems.eyebrow}
                className={className}
            />

            <div ref={ref} className={`space-y-6 ${className}`} style={{ transitionDelay: '0.2s' }}>
                <Card
                    title={content.systems.florenceArt.title}
                    description={content.systems.florenceArt.description}
                    link="/platforms/florence-art"
                    linkText={content.systems.florenceArt.linkText}
                    glowColor="value" // Gold for Art
                />

                <Card
                    title={content.systems.natan.title}
                    description={content.systems.natan.description}
                    link="/platforms/natan"
                    linkText={content.systems.natan.linkText}
                    glowColor="trust" // Blue for PA
                />

                <Card
                    title={content.systems.egiPt.title}
                    description={content.systems.egiPt.description}
                    link="/platforms/egi-pt"
                    linkText={content.systems.egiPt.linkText}
                    glowColor="innovation" // Violet/Pink for Pure Trading
                />
            </div>
        </section>
    );
}
