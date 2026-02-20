import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/globals.css';
import { I18nProvider } from './i18n';
import config from '@/utils/config';

// Patch 3D engine global data with config URLs (public/ecosystem_data.js is static, not processed by Vite)
const w = window as unknown as Record<string, unknown>;
if (w.ecosystemData && typeof w.ecosystemData === 'object') {
    const data = w.ecosystemData as Record<string, Record<string, string>>;
    if (data.egis) data.egis.route = config.florenceUrl;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <I18nProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </I18nProvider>
);
