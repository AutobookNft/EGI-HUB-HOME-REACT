import { LiquidGlassCard } from '../ui/LiquidGlassCard';
import type { Platform } from '@/data/content/platforms';

interface PlatformCardProps {
    platform: Platform;
    onClick?: () => void;
}

export const PlatformCard = ({ platform, onClick }: PlatformCardProps) => {
    const isActive = platform.status === 'active';

    return (
        <LiquidGlassCard onClick={onClick} className="p-5">
            <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="text-4xl flex-shrink-0">
                    {platform.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-lg text-white font-rajdhani">
                            {platform.name}
                        </h3>
                        <span
                            className={`text-xs px-2 py-0.5 rounded-full font-mono ${isActive
                                    ? 'bg-primary/20 text-primary'
                                    : 'bg-white/10 text-text-muted'
                                }`}
                        >
                            {isActive ? 'Active' : 'Coming'}
                        </span>
                    </div>

                    <p className="text-sm text-text-muted mb-2">
                        {platform.tagline}
                    </p>

                    <p className="text-xs text-text-muted/80">
                        {platform.description}
                    </p>
                </div>

                {/* Arrow */}
                {onClick && (
                    <div className="text-primary text-xl flex-shrink-0">
                        →
                    </div>
                )}
            </div>
        </LiquidGlassCard>
    );
};
