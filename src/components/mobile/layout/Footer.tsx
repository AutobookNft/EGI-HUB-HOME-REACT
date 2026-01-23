export const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-white/10 px-6 py-12 mt-12">
            <div className="flex flex-col gap-8">
                <div>
                    <div className="font-rajdhani font-bold text-2xl tracking-wider text-white mb-4">
                        EGI<span className="text-primary">.HUB</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[80%]">
                        L'ecosistema blockchain che certifica il valore del genio umano.
                        Memoria, Equilibrio, Impatto.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <h4 className="text-white text-xs uppercase tracking-widest font-bold">Azienda</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Chi Siamo</li>
                            <li>Mission</li>
                            <li>Partner</li>
                            <li>Contatti</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-white text-xs uppercase tracking-widest font-bold">Prodotti</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>Florence Art</li>
                            <li>Natan LOC</li>
                            <li>Tosca Bandi</li>
                            <li>EGI Hub</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col gap-4">
                    <div className="text-[10px] text-gray-600 flex gap-4">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookie Settings</span>
                    </div>
                    <div className="text-[10px] text-gray-700 font-mono">
                        © 2026 EGI HOlding. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};
