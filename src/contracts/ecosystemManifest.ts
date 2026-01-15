export type ProjectStatus = 'active' | 'paused' | 'planned' | 'archived' | 'unknown';

export type EcosystemLayerId =
    | 'hub'
    | 'egi'
    | 'projects'
    | 'environment'
    | 'oracode'
    | 'info';

export interface Layer {
    id: EcosystemLayerId;
    title: string;
    subtitle?: string;
    description?: string;
    entryPath: string;
    secondaryEntryPath?: string;
    level: number;
    coordinates?: string;
    node?: string;
}

export interface Project {
    id: string;
    name: string;
    status: ProjectStatus;
    layerId?: EcosystemLayerId;
    entryPath?: string;
}

export interface Telemetry {
    layers: number;
    nodes: number;
    modules: number;
    version?: string;
}

export interface Manifest {
    telemetry?: Telemetry;
    layers: Layer[];
    projects: Project[];
}
