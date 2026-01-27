import { SectionTitle } from '../ui/SectionTitle';
import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';
import { Card } from '../ui/Card';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import '../styles/motion.css';

export function WhatIsEgiSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    return (
        <section className="py-24 px-6 relative">
            <SectionTitle title={content.whatIsEgi.title} className={className} />

            <div ref={ref} className={`${className} mt-8`} style={{ transitionDelay: '0.2s' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                    <Card
                        title={content.whatIsEgi.cardTitle}
                        description={content.whatIsEgi.description}
                        glowColor="value"
                        className="border-l-4 border-l-[var(--accent)]"
                    >
                        <div className="mt-6 flex items-center justify-between">
                            <div className="flex gap-2">
                                <div className="h-1.5 w-12 bg-[var(--accent)] rounded-full animate-pulse" />
                                <div className="h-1.5 w-4 bg-[var(--accent)]/30 rounded-full" />
                            </div>
                            <Sparkles className="w-6 h-6 text-[var(--accent)] opacity-50" />
                        </div>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
