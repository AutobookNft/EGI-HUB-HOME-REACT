import { Brain, Globe, Info, Home } from 'lucide-react';
import { useUIStore } from '@/stores/useUIStore';

// Online app URLs (sslip.io - IP: 13.53.205.215)
const APPS = {
    HUB: 'https://egi-hub.13.53.205.215.sslip.io',
    EGI: 'https://egi.13.53.205.215.sslip.io',
    NATAN: 'https://natan-loc.13.53.205.215.sslip.io',
    INFO: 'https://egi-info.13.53.205.215.sslip.io',
};

export const Sidebar = () => {
    const navigate = useUIStore((state) => state.navigate);
    const currentPath = useUIStore((state) => state.currentPath);

    const isActive = (path: string) => currentPath === path;

    return (
        <div className="fixed left-0 top-[70px] bottom-[40px] w-20 glass-dark border-r border-light hidden md:flex flex-col items-center pt-8 gap-4 z-20">
            {/* Navigation Buttons */}
            <NavButton
                icon={<Home />}
                label="HUB"
                onClick={() => navigate('/')}
                active={isActive('/')}
                title="EGI-HUB Control Center"
            />
            {/* PROJECTS Button (Internal) */}
            <NavButton
                icon={<Brain />}
                label="PROJECTS"
                onClick={() => navigate('/projects')}
                active={isActive('/projects')}
                title="Ecosystem Projects"
            />
            {/* External Apps */}
            <NavButton
                icon={<Globe />}
                label="EGI"
                href={APPS.EGI}
                title="EGI - Florence Art"
            />
            <NavButton
                icon={<Brain />}
                label="NATAN"
                href={APPS.NATAN}
                title="NATAN LOC - Documenti PA"
            />
            <NavButton
                icon={<Info />}
                label="INFO"
                href={APPS.INFO}
                title="EGI Info & Docs"
            />
        </div>
    );
};

interface NavButtonProps {
    icon: React.ReactNode;
    label: string;
    href?: string;
    onClick?: () => void;
    active?: boolean;
    title?: string;
}

const NavButton = ({ icon, label, href, onClick, active, title }: NavButtonProps) => {
    const handleClick = () => {
        console.log(`[Sidebar] Clicked ${label}`, { href, hasOnClick: !!onClick });
        if (onClick) {
            onClick();
        } else if (href) {
            window.open(href, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`
        w-full h-[60px] flex flex-col items-center justify-center gap-1
        transition-all duration-200 border-l-[3px] border-transparent
        ${active
                    ? 'text-white bg-white/5 border-l-primary'
                    : 'text-text-muted hover:text-white hover:bg-white/5 hover:border-l-primary'
                }
        ${href || onClick ? 'cursor-pointer hover:scale-105' : 'cursor-default opacity-50'}
      `}
            title={title || (href ? `Apri ${label}` : label)}
            disabled={!href && !onClick}
            style={{ fontFamily: 'Share Tech Mono, monospace' }}
        >
            <div className="w-5 h-5">{icon}</div>
            <span className="text-[9px] tracking-wider uppercase">{label}</span>
        </button>
    );
};
