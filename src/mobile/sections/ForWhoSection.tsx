import { SectionTitle } from '../ui/SectionTitle';
import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import { ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import '../styles/motion.css';

export function ForWhoSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    return (
        <section className="py-24 px-6 relative">
            <div ref={ref} className={className}>
                <SectionTitle title={content.forWho.title} />

                <Card className="p-0 overflow-hidden bg-[var(--surface)] border border-[var(--border)] shadow-[var(--shadow)]">
                    {content.forWho.items.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className={`
                                flex items-center justify-between p-5
                                bg-transparent
                                hover:bg-[var(--accent)]/5
                                transition-colors
                                group
                                ${idx !== content.forWho.items.length - 1 ? 'border-b border-[var(--border)]' : ''}
                            `}
                        >
                            <span className="text-lg font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                                {item.label}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-[var(--bg)] flex items-center justify-center text-[var(--muted)] group-hover:text-white group-hover:bg-[var(--accent)] transition-all">
                                <ArrowRight size={14} />
                            </div>
                        </a>
                    ))}
                </Card>
            </div>
        </section>
    );
}
