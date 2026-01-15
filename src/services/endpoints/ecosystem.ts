import { api } from '../api';
import type { EcosystemData, EcosystemMetrics } from '@/types/ecosystem';

export const ecosystemAPI = {
    // Get full node configuration with colors based on active status
    // @ts-expect-error - view parameter reserved for future multi-view support
    getEcosystem: async (view: string = 'main'): Promise<EcosystemData> => {
        // DISABLED: Prefer fallback data instead of API for now
        // The backend API returns outdated structure
        throw new Error('Using fallback data');
    },

    // Get live system metrics (tenants, status, etc)
    getMetrics: async (): Promise<EcosystemMetrics> => {
        const { data } = await api.get<EcosystemMetrics>('/ecosystem/metrics');
        return data;
    }
};
