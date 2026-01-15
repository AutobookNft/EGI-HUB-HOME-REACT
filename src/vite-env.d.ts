/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    readonly VITE_EGI_TENANT_URL: string;
    readonly VITE_NATAN_TENANT_URL: string;
    readonly VITE_APP_ENV: string;
    readonly VITE_HUB_API_BASE: string;
    readonly VITE_APP_EGI_URL: string;
    readonly VITE_APP_INFO_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
