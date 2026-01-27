interface SectionTitleProps {
    eyebrow?: string;
    title: string;
    showDivider?: boolean;
    className?: string; // Added opacity/transform control
}

export function SectionTitle({ eyebrow, title, showDivider = true, className = '' }: SectionTitleProps) {
    return (
        <div className={`space-y-2 mb-8 ${className}`}>
            {eyebrow && (
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] font-medium">
                    {eyebrow}
                </p>
            )}
            <h2 className="text-2xl font-semibold text-[var(--text)] leading-snug tracking-tight">
                {title}
            </h2>
            {showDivider && <div className="mt-4 h-px bg-[var(--border)]" />}
        </div>
    );
}
