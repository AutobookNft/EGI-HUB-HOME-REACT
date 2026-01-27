import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function ButtonPrimary({ children, className = '', ...props }: ButtonProps) {
    return (
        <button
            className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-950 font-medium active:scale-[0.99] transition ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export function ButtonSecondary({ children, className = '', ...props }: ButtonProps) {
    return (
        <button
            className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-zinc-100 bg-transparent font-medium active:scale-[0.99] transition ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
