import { ReactNode } from 'react';

interface CardProps {
    title?: string;
    description?: string;
    link?: string;
    linkText?: string;
    children?: ReactNode;
    className?: string;
    glowColor?: 'equilibrium' | 'value' | 'trust' | 'innovation' | 'none';
}

export function Card({
    title,
    description,
    link,
    linkText,
    children,
    className = '',
    glowColor = 'none'
}: CardProps) {

    // Subtle accent mapping (borders/shadows)
    const accents = {
        equilibrium: 'hover:border-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent)]/10',
        value: 'hover:border-[var(--accent2)] hover:shadow-lg hover:shadow-[var(--accent2)]/10',
        trust: 'hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10',
        innovation: 'hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/10',
        none: 'hover:border-[var(--text)]/20'
    };

    return (
        <div className={`
            group relative
            rounded-[var(--r-card)]
            bg-[var(--surface)]
            backdrop-blur-xl
            border border-[var(--border)]
            shadow-[var(--shadow)]
            p-6
            transition-all duration-300 ease-out
            hover:-translate-y-1
            overflow-hidden
            ${accents[glowColor]}
            ${className}
        `}>
            {/* Top Shine Reflection */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
            {(title || description) && (
                <div className="mb-4">
                    {title && (
                        <h3 className="text-xl font-bold text-[var(--text)] mb-2 tracking-tight">
                            {title}
                        </h3>
                    )}
                    {description && (
                        <p className="text-[15px] leading-relaxed text-[var(--muted)] font-light">
                            {description}
                        </p>
                    )}
                </div>
            )}

            <div className="relative z-10 text-[var(--text)]">
                {children}
            </div>

            {link && linkText && (
                <div className="mt-4 pt-4 border-t border-[var(--border)]">
                    <a
                        href={link}
                        className="inline-flex items-center text-sm font-medium text-[var(--accent)] hover:text-[var(--text)] transition-colors"
                    >
                        {linkText}
                        <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                    </a>
                </div>
            )}
        </div>
    );
}
