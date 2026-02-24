/**
 * useEcosystemRef
 * Legge il parametro ?ref= dall'URL e restituisce il chiamante dell'ecosistema FlorenceEGI.
 * Usato per mostrare un bottone "← Torna a ..." nella navbar quando si arriva
 * da un altro sottodominio dell'ecosistema.
 *
 * Siti supportati:
 *   ?ref=hub   → florenceegi.com
 *   ?ref=art   → art.florenceegi.com
 *   ?ref=natan → natan-loc.florenceegi.com
 */

export interface EcosystemRefInfo {
    key: string;
    name: string;
    url: string;
    shortName: string;
}

const ECOSYSTEM_REFS: Record<string, EcosystemRefInfo> = {
    hub: {
        key: 'hub',
        name: 'Florence EGI',
        shortName: 'Hub',
        url: 'https://florenceegi.com',
    },
    art: {
        key: 'art',
        name: 'Florence Art EGI',
        shortName: 'Art',
        url: 'https://art.florenceegi.com',
    },
    natan: {
        key: 'natan',
        name: 'NATAN-LOC',
        shortName: 'NATAN',
        url: 'https://natan-loc.florenceegi.com',
    },
};

export function useEcosystemRef(): EcosystemRefInfo | null {
    if (typeof window === 'undefined') return null;
    const ref = new URLSearchParams(window.location.search).get('ref');
    if (!ref) return null;
    return ECOSYSTEM_REFS[ref] ?? null;
}
