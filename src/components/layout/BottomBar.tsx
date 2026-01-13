import { Mouse } from 'lucide-react';

export const BottomBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 h-[40px] bg-black border-t border-light flex items-center px-3 md:px-5 gap-3 md:gap-5 z-20">
            <div
                className="text-[10px] md:text-xs text-primary flex-grow opacity-70"
                style={{ fontFamily: 'Share Tech Mono, monospace' }}
            >
                EVENT BUS &gt; System Ready.
            </div>
            <div
                className="hidden sm:flex text-[10px] md:text-xs text-text-muted items-center gap-2"
                style={{ fontFamily: 'Share Tech Mono, monospace' }}
            >
                <Mouse size={14} />
                DRAG TO ROTATE
            </div>
        </div>
    );
};
