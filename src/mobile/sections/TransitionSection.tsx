import { useI18n } from '@/i18n';
import { useRevealOnView } from '@/hooks/useRevealOnView';
import '../styles/motion.css';

export function TransitionSection() {
    const { locale } = useI18n();
    const { ref, className } = useRevealOnView();

    // Blueprint S4: "Transizione Atto (Stato 2)". 
    // Text: "Dal possesso alla custodia. Dall'inerzia all'azione."
    const text1 = locale === 'it' ? 'Dal possesso alla custodia.' : 'From possession to custody.';
    const text2 = locale === 'it' ? "Dall'inerzia all'azione." : 'From inertia to action.';

    return (
        <section className="py-32 px-6 relative flex flex-col items-center justify-center min-h-[50vh] text-center">
            {/* 
                This section appears when the atmosphere is DARK (State 2).
                So text must be LIGHT (white).
            */}
            <div ref={ref} className={`space-y-6 ${className}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-lg leading-tight">
                    {text1}
                    <br />
                    <span className="text-emerald-400">{text2}</span>
                </h2>

                <div className="w-[1px] h-24 bg-gradient-to-b from-emerald-400 to-transparent mx-auto opacity-50" />
            </div>
        </section>
    );
}
