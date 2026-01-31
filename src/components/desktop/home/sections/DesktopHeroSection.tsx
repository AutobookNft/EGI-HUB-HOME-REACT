import { useI18n } from '@/i18n';
import { homepageContent } from '@/data/content/homepage';
import { useSidebarScroll } from '../DesktopHomeSidebar';
import { EgiTransformationAnimation } from '@/mobile/components/EgiTransformationAnimation';
import '@/mobile/styles/motion.css'; // Reusing global motion styles

export function DesktopHeroSection() {
    const { locale } = useI18n();
    const content = homepageContent[locale];
    const progress = useSidebarScroll();

    // Adjusted dynamics for sidebar scroll context
    // The sidebar scroll is relative to the sidebar height, which is much larger than viewport
    // So we need to be more sensitive or check scroll position relative to THIS section
    // For simplicity in V1, we use global sidebar progress but heavily amplified for the top section
    const localProgress = Math.min(progress * 10, 1);

    const scale = 1 + (Math.min(localProgress, 0.2) * 0.25);
    const opacity = 1 - Math.min(localProgress * 3, 1);

    return (
        <section className="min-h-[80vh] flex flex-col justify-center px-8 py-20 relative overflow-hidden">
            <div
                className="space-y-8 relative z-10"
                style={{ opacity }}
            >
                <div className="reveal is-in inline-flex items-center px-3 py-1 rounded-full border border-[var(--border)] bg-[var(--surface)] backdrop-blur-sm">
                    <span className="text-xs font-medium tracking-widest text-[var(--accent)] uppercase">
                        {content.hero.badge}
                    </span>
                </div>

                <div
                    className="origin-left will-change-transform"
                    style={{ transform: `scale(${scale})` }}
                >
                    <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-sm">
                        {content.hero.headline.split(/(EGI)/g).map((part, i) =>
                            part === 'EGI' ? (
                                <span
                                    key={i}
                                    className="font-extrabold bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent inline-block"
                                >
                                    EGI
                                </span>
                            ) : (
                                part
                            )
                        )}
                    </h1>
                </div>

                <div className="reveal is-in" style={{ animationDelay: '0.2s' }}>
                    <p className="text-base leading-relaxed text-gray-300">
                        {content.hero.subheadline}
                    </p>
                </div>

                <div className="my-8 reveal is-in flex justify-center w-full min-h-[250px]" style={{ animationDelay: '0.4s' }}>
                    <div className="w-full flex justify-center scale-90 origin-top">
                        {/* Reusing the animation component as it's self-contained */}
                        <EgiTransformationAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
}
