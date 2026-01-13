import axios from 'axios';

// Base API instance
export const api = axios.create({
    baseURL: 'http://localhost:8010/api', // FORCED LOCALHOST FIX
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    timeout: 10000,
});

// Request interceptor (add auth token if available)
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Multi-tenant support
        const tenantId = localStorage.getItem('tenant_id');
        if (tenantId) {
            config.headers['X-Tenant-ID'] = tenantId;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor (handle errors)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Clear auth and redirect to login
            localStorage.removeItem('auth_token');
            localStorage.removeItem('tenant_id');
            window.location.href = '/login';
        }

        return Promise.reject(error);
    }
);
