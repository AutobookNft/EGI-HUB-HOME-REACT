// Ecosystem data types
export interface EcosystemNode {
    label: string;
    tagline: string;
    cat: string;
    color: number;
    desc: string;
    bullets?: string[];
    egi_link: string;
    route: string;
}

export interface OrbitalConfig {
    id: string;
    orbit: number;
}

export interface EcosystemData {
    core: EcosystemNode;
    orbitalConfig?: OrbitalConfig[];
    [key: string]: EcosystemNode | OrbitalConfig[] | undefined;
}

// API Response types
export interface ApiResponse<T> {
    data: T;
    message?: string;
    status: string;
}

export interface EcosystemMetrics {
    tenants: number;
    status: 'online' | 'offline' | 'degraded' | 'maintenance';
    projects: number;
    timestamp: string;
}

export type SystemMetrics = EcosystemMetrics;
