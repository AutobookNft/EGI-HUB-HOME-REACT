interface Config {
    logoPath: string;
    appName: string;
    isProduction: boolean;
}

const config: Config = {
    logoPath: import.meta.env.VITE_APP_LOGO_PATH || '/assets/logo/FEGI-logo.png',
    appName: import.meta.env.VITE_APP_NAME || 'FlorenceEGI',
    isProduction: import.meta.env.PROD
};

export default config;
