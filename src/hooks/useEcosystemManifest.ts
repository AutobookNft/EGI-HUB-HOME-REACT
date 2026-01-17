import { useEffect, useMemo, useState } from 'react';
import type { Manifest, Layer, Telemetry } from '@/contracts/ecosystemManifest';
import { useI18n } from '@/i18n';

export type ManifestStatus = 'idle' | 'loading' | 'ready' | 'error';

const MANIFEST_CACHE_KEY = 'ecosystem_manifest_cache_v1';
const MANIFEST_ETAG_KEY = 'ecosystem_manifest_etag_v1';

const APP_EGI_URL = import.meta.env.VITE_APP_EGI_URL;

const FALLBACK_TELEMETRY: Telemetry = {
    layers: 7,
    nodes: 0,
    modules: 0,
};

const buildFallbackLayers = (t: (key: string) => string): Layer[] => [
    {
        id: 'florence',
        title: 'FLORENCE EGI',
        subtitle: t('mobile.subtitle.florence'),
        description: t('mobile.description.florence'),
        entryPath: '#',
        level: 1,
        coordinates: t('mobile.coordinates.florence'),
        node: 'Benvenuto',
    },
    {
        id: 'hub',
        title: 'HUB',
        subtitle: t('mobile.subtitle.hub'),
        description: t('mobile.description.hub'),
        entryPath: 'https://egi-hub.13.53.205.215.sslip.io',
        level: 2,
        coordinates: t('mobile.coordinates.hub'),
        node: 'Entrata',
    },
    {
        id: 'egi',
        title: 'EGI',
        subtitle: t('mobile.subtitle.egi'),
        description: t('mobile.description.egi'),
        entryPath: APP_EGI_URL || '/egi',
        level: 3,
        coordinates: t('mobile.coordinates.egi'),
        node: 'Collezione',
    },
    {
        id: 'projects',
        title: 'PROGETTI',
        subtitle: t('mobile.subtitle.projects'),
        description: t('mobile.description.projects'),
        entryPath: '/platforms',
        level: 4,
        coordinates: t('mobile.coordinates.projects'),
        node: 'Costellazione',
    },
    {
        id: 'environment',
        title: 'AMBIENTE',
        subtitle: t('mobile.subtitle.environment'),
        description: t('mobile.description.environment'),
        entryPath: '/ambiente',
        level: 5,
        coordinates: t('mobile.coordinates.environment'),
        node: 'Ecosfera',
    },
    {
        id: 'oracode',
        title: 'ORACODE',
        subtitle: t('mobile.subtitle.oracode'),
        description: t('mobile.description.oracode'),
        entryPath: '/oracode',
        level: 6,
        coordinates: t('mobile.coordinates.oracode'),
        node: 'Dottrina',
    },
    {
        id: 'info',
        title: 'INFO',
        subtitle: t('mobile.subtitle.info'),
        description: t('mobile.description.info'),
        entryPath: 'https://egi-info.13.53.205.215.sslip.io',
        level: 7,
        coordinates: t('mobile.coordinates.info'),
        node: 'Info',
    },
    {
        id: 'corporate',
        title: 'CORPORATE',
        subtitle: t('mobile.subtitle.corporate'),
        description: t('mobile.description.corporate'),
        entryPath: '/corporate',
        level: 8,
        coordinates: t('mobile.coordinates.corporate'),
        node: 'Corporate',
    },
];

const buildFallbackManifest = (t: (key: string) => string): Manifest => ({
    telemetry: FALLBACK_TELEMETRY,
    layers: buildFallbackLayers(t),
    projects: [],
});

const normalizeManifest = (
    payload: Partial<Manifest> | null,
    fallbackLayers: Layer[]
): Manifest => {
    if (!payload) {
        return {
            telemetry: FALLBACK_TELEMETRY,
            layers: fallbackLayers,
            projects: [],
        };
    }

    const layerMap = new Map(
        Array.isArray(payload.layers)
            ? payload.layers.map((layer) => [layer.id, layer])
            : []
    );

    const layers = fallbackLayers.map((fallback) => ({
        ...fallback,
        ...(layerMap.get(fallback.id) ?? {}),
    }));

    const telemetry = payload.telemetry
        ? { ...FALLBACK_TELEMETRY, ...payload.telemetry }
        : FALLBACK_TELEMETRY;

    return {
        telemetry,
        layers,
        projects: Array.isArray(payload.projects) ? payload.projects : [],
    };
};

const readCache = (fallbackLayers: Layer[]): Manifest | null => {
    try {
        const cached = localStorage.getItem(MANIFEST_CACHE_KEY);
        if (!cached) return null;
        return normalizeManifest(JSON.parse(cached), fallbackLayers);
    } catch {
        return null;
    }
};

const writeCache = (manifest: Manifest, etag?: string | null) => {
    try {
        localStorage.setItem(MANIFEST_CACHE_KEY, JSON.stringify(manifest));
        if (etag) {
            localStorage.setItem(MANIFEST_ETAG_KEY, etag);
        }
    } catch {
        // ignore cache write errors
    }
};

const readEtag = () => {
    try {
        return localStorage.getItem(MANIFEST_ETAG_KEY);
    } catch {
        return null;
    }
};

export const useEcosystemManifest = () => {
    const { t } = useI18n();
    const fallbackLayers = useMemo(() => buildFallbackLayers(t), [t]);
    const fallbackManifest = useMemo(() => buildFallbackManifest(t), [t]);
    const cached = useMemo(() => readCache(fallbackLayers), [fallbackLayers]);
    const [status, setStatus] = useState<ManifestStatus>('loading');
    const [data, setData] = useState<Manifest>(cached ?? fallbackManifest);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        const baseUrl = import.meta.env.VITE_HUB_API_BASE;

        const fetchManifest = async () => {
            if (!baseUrl) {
                if (!isMounted) return;
                setStatus('error');
                setError('Missing VITE_HUB_API_BASE');
                setData(cached ?? fallbackManifest);
                return;
            }

            const url = `${baseUrl.replace(/\/$/, '')}/api/public/ecosystem/manifest`;
            const etag = readEtag();

            try {
                const response = await fetch(url, {
                    headers: etag ? { 'If-None-Match': etag } : undefined,
                });

                if (response.status === 304) {
                    const cachedManifest = cached ?? readCache(fallbackLayers);
                    if (cachedManifest) {
                        if (!isMounted) return;
                        setData(cachedManifest);
                        setStatus('ready');
                        return;
                    }
                }

                if (!response.ok) {
                    throw new Error(`Manifest fetch failed: ${response.status}`);
                }

                const json = (await response.json()) as Partial<Manifest>;
                const normalized = normalizeManifest(json, fallbackLayers);
                writeCache(normalized, response.headers.get('ETag'));

                if (!isMounted) return;
                setData(normalized);
                setStatus('ready');
                setError(null);
            } catch (fetchError) {
                const cachedManifest = cached ?? readCache(fallbackLayers);
                if (!isMounted) return;
                setData(cachedManifest ?? fallbackManifest);
                setStatus('error');
                setError(fetchError instanceof Error ? fetchError.message : 'Unknown error');
            }
        };

        fetchManifest();

        return () => {
            isMounted = false;
        };
    }, [cached, fallbackLayers, fallbackManifest]);

    return { status, data, error };
};
