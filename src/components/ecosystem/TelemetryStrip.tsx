import type { Telemetry } from '@/contracts/ecosystemManifest';
import { useI18n } from '@/i18n';

type TelemetryStripProps = {
    telemetry?: Telemetry;
};

export const TelemetryStrip = ({ telemetry }: TelemetryStripProps) => {
    const { t } = useI18n();
    const layers = telemetry?.layers ?? 6;
    const nodes = telemetry?.nodes ?? 0;
    const modules = telemetry?.modules ?? 0;
    const version = telemetry?.version;

    const base = `${t('general.system')} • ${layers} ${t('general.layer')}`;
    const detailed = `${t('general.system')} • ${layers} ${t('general.layer')} • ${nodes} ${t('general.nodes')} • ${modules} ${t('general.modules')}`;
    const content = nodes || modules ? detailed : base;

    return (
        <div className="text-[10px] uppercase tracking-[0.32em] text-white/60">
            {version ? `${content} • ${version}` : content}
        </div>
    );
};
