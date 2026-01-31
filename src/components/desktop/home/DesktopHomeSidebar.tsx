import { useRef, useState, createContext, useContext } from 'react';
import { DesktopHeroSection } from './sections/DesktopHeroSection';
import { DesktopExamplesSection } from './sections/DesktopExamplesSection';
import { DesktopImpactSection } from './sections/DesktopImpactSection';
import { DesktopPillarsSection } from './sections/DesktopPillarsSection';
import { DesktopFooterSection } from './sections/DesktopFooterSection';

// Context to share scroll progress within the sidebar
const SidebarScrollContext = createContext<number>(0);

export const useSidebarScroll = () => useContext(SidebarScrollContext);

export const DesktopHomeSidebar = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    const handleScroll = () => {
        if (!containerRef.current) return;

        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const totalScrollable = scrollHeight - clientHeight;

        if (totalScrollable > 0) {
            const currentProgress = scrollTop / totalScrollable;
            setProgress(Math.min(Math.max(currentProgress, 0), 1));
        }
    };

    return (
        <SidebarScrollContext.Provider value={progress}>
            <aside
                ref={containerRef}
                onScroll={handleScroll}
                className="fixed right-0 top-0 bottom-0 w-[480px] z-30 overflow-y-auto bg-black/90 border-l border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl no-scrollbar"
                style={{ background: '#05080ce6' }}
            >
                <div className="flex flex-col min-h-full">
                    <DesktopHeroSection />
                    <DesktopExamplesSection />
                    <DesktopImpactSection />
                    <DesktopPillarsSection />
                    <DesktopFooterSection />
                </div>
            </aside>
        </SidebarScrollContext.Provider>
    );
};
