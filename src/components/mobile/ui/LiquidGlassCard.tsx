interface LiquidGlassCardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const LiquidGlassCard = ({ children, className = '', onClick }: LiquidGlassCardProps) => {
    return (
        <div
            onClick={onClick}
            className={`
        bg-white/5 
        backdrop-blur-[40px] 
        saturate-[180%]
        border border-white/10
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]
        ${onClick ? 'cursor-pointer active:scale-[0.98] transition-transform' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
};
