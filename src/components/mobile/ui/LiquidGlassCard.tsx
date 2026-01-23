// Simple utility removed as unused


interface LiquidGlassCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    variant?: 'dark' | 'light';
}

export const LiquidGlassCard = ({
    children,
    className = '',
    onClick,
    variant = 'dark'
}: LiquidGlassCardProps) => {
    return (
        <div
            onClick={onClick}
            className={`
        relative overflow-hidden
        ${variant === 'dark' ? 'bg-[#0A0A0A]/60' : 'bg-white/5'}
        backdrop-blur-xl
        border border-white/[0.08]
        rounded-xl
        /* Shadow sottile corporate, non glow neon */
        shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        ${onClick ? 'cursor-pointer active:scale-[0.99] transition-all duration-200 hover:border-white/[0.15]' : ''}
        ${className}
      `}
        >
            {/* Noise texture opacity bassissima per materialità premium (opzionale) */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};
