import { SectionTitle } from '../ui/SectionTitle';
import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';
import { Card } from '../ui/Card';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import '../styles/motion.css';

export function WhatIsEgiSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    return (
        <section className="py-24 px-6 relative">
            {/* Visual anchor provided by atmosphere, but we can keep a subtle one if needed */}

            <SectionTitle title={content.whatIsEgi.title} className={className} />

            <div ref={ref} className={className} style={{ transitionDelay: '0.2s' }}>
                <Card
                    title={content.whatIsEgi.cardTitle}
                    description={content.whatIsEgi.description}
                    glowColor="value"
                >
                    <div className="mt-4 flex gap-4">
                        <div className="h-1 w-12 bg-[var(--accent2)]/50 rounded-full" />
                        <div className="h-1 w-4 bg-[var(--accent2)]/20 rounded-full" />
                    </div>
                </Card>
            </div>
        </section>
    );
}
