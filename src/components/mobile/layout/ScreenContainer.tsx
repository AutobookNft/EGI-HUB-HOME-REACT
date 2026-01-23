interface ScreenContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const ScreenContainer = ({ children, className = '' }: ScreenContainerProps) => {
    return (
        <div className={`min-h-screen bg-black pb-20 ${className}`}>
            {/* Top padding for status bar + top bar */}
            <div className="pt-safe">
                {children}
            </div>
        </div>
    );
};
