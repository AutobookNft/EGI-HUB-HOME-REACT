import { api } from '../api';
import type { EcosystemData, EcosystemMetrics } from '@/types/ecosystem';

export const ecosystemAPI = {
    // Get full node configuration with colors based on active status
    getEcosystem: async (view: string = 'main'): Promise<EcosystemData> => {
        // PRODUCTION SAFE: Use environment variable or api default URL
        const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8010/api';
        console.log(`Fetching ecosystem (${view}) from: ${baseURL}`);

        // Use native fetch to keep the cache-busting behavior but with correct URL
        const response = await fetch(`${baseURL}/ecosystem?view=${view}&t=${Date.now()}`);
        if (!response.ok) throw new Error('Failed to fetch ecosystem');
        const data = await response.json();
        return data;    
    },

    // Get live system metrics (tenants, status, etc)
    getMetrics: async (): Promise<EcosystemMetrics> => {
        const { data } = await api.get<EcosystemMetrics>('/ecosystem/metrics');
        return data;
    }
};
