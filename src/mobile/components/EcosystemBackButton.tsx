import { useEcosystemRef } from '@/hooks/useEcosystemRef';

/**
 * EcosystemBackButton
 * Compare nella navbar SOLO quando l'utente è arrivato da un altro
 * sottodominio dell'ecosistema FlorenceEGI tramite ?ref=<key>.
 * Esempio: https://florenceegi.com?ref=art → mostra "← Florence Art EGI"
 */
export function EcosystemBackButton() {
    const refInfo = useEcosystemRef();
    if (!refInfo) return null;

    return (
        <a
            href={refInfo.url}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200"
            style={{
                background: 'rgba(14,165,164,0.10)',
                borderColor: 'rgba(14,165,164,0.4)',
                color: 'var(--accent)',
            }}
            aria-label={`Torna a ${refInfo.name}`}
        >
            <span aria-hidden="true">←</span>
            <span>{refInfo.shortName}</span>
        </a>
    );
}
