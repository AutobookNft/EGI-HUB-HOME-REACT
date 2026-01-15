type ProgressIndicatorProps = {
    current: number;
    total: number;
};

export const ProgressIndicator = ({ current, total }: ProgressIndicatorProps) => {
    const dots = Array.from({ length: total });

    return (
        <div className="flex items-center gap-3">
            <div className="text-xs font-semibold text-white/90 tracking-widest">
                {current}/{total}
            </div>
            <div className="flex items-center gap-1">
                {dots.map((_, index) => (
                    <span
                        key={`dot-${index}`}
                        className={
                            'h-1.5 w-1.5 rounded-full transition-colors ' +
                            (index < current
                                ? 'bg-white/90'
                                : 'bg-white/30')
                        }
                    />
                ))}
            </div>
        </div>
    );
};
