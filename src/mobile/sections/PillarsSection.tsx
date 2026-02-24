import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import { SectionTitle } from '../ui/SectionTitle';
import { CssPillarsCube } from '../components/CssPillarsCube';
import '../styles/motion.css';

export function PillarsSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const { ref, className } = useRevealOnView();

    return (
        <section className="py-24 px-6 relative overflow-hidden" id="pillars-section">
            <div ref={ref} className={className}>
                <SectionTitle title={content.pillars.title} />

                <div className="flex justify-center relative mt-8 rounded-2xl overflow-hidden" style={{ height: 260, background: 'radial-gradient(ellipse at 50% 30%, rgba(8,14,32,0.97) 0%, rgba(3,6,16,0.99) 100%)', border: '1px solid rgba(16,185,129,0.15)', boxShadow: '0 4px 30px rgba(0,0,0,0.25)' }}>
                    <CssPillarsCube />
                </div>

                <div className="mt-8 space-y-4 max-w-lg mx-auto">
                    {content.pillars.items.map((pillar, idx) => (
                        <div key={idx} className="flex gap-4 items-start p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] backdrop-blur-sm shadow-sm">
                            <span className="text-xl font-mono text-[var(--accent)] font-bold shrink-0">
                                0{idx + 1}
                            </span>
                            <div>
                                <h3 className="text-lg font-bold text-[var(--text)] mb-1 font-[Rajdhani]">
                                    {pillar.title}
                                </h3>
                                <p className="text-sm text-[var(--muted)] leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
