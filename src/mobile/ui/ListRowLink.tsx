import { ReactNode } from 'react';

interface ListRowLinkProps {
    label: string;
    href: string;
    icon?: ReactNode;
}

export function ListRowLink({ label, href, icon }: ListRowLinkProps) {
    return (
        <a
            href={href}
            className="flex items-center justify-between py-4 border-b border-white/5 active:bg-white/5 transition"
        >
            <span className="text-zinc-100 font-medium">{label}</span>
            {icon || (
                <svg
                    className="w-5 h-5 text-zinc-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            )}
        </a>
    );
}
