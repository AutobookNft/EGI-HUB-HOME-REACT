export const Loader = () => {
    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold tracking-[8px] text-white mb-8">
                HUB-EGI
            </div>
            <div className="w-64 h-0.5 bg-[#222]">
                <div className="h-full bg-primary animate-load"></div>
            </div>
        </div>
    );
};
