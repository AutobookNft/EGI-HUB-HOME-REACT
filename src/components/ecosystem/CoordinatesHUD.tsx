type CoordinatesHUDProps = {
    coordinates: string;
};

export const CoordinatesHUD = ({ coordinates }: CoordinatesHUDProps) => {
    return (
        <div className="text-xs uppercase tracking-[0.28em] text-white/80 truncate">
            {coordinates}
        </div>
    );
};
