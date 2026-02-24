import { useI18n } from '@/i18n';
import { homepageContent } from '../data/homepage';

const SIZE = 200; // px per face
const HALF = SIZE / 2;

const FACES = [
    { key: 'front',  color: '#ffaa00', bg: 'rgba(255,170,0,0.13)',   transform: `translateZ(${HALF}px)`,                         pillarIdx: 0 },
    { key: 'right',  color: '#00ffdd', bg: 'rgba(0,255,221,0.13)',   transform: `rotateY(90deg) translateZ(${HALF}px)`,           pillarIdx: 1 },
    { key: 'back',   color: '#aa00ff', bg: 'rgba(170,0,255,0.13)',   transform: `rotateY(180deg) translateZ(${HALF}px)`,          pillarIdx: 2 },
    { key: 'left',   color: '#b91d47', bg: 'rgba(185,29,71,0.13)',   transform: `rotateY(-90deg) translateZ(${HALF}px)`,          pillarIdx: -1 },
    { key: 'top',    color: 'rgba(255,255,255,0.3)', bg: 'rgba(255,255,255,0.04)', transform: `rotateX(90deg) translateZ(${HALF}px)`, pillarIdx: -2 },
    { key: 'bottom', color: 'rgba(255,255,255,0.1)', bg: 'rgba(5,5,20,0.9)',       transform: `rotateX(-90deg) translateZ(${HALF}px)`, pillarIdx: -2 },
];

export function CssPillarsCube() {
    const { locale } = useI18n();
    const pillars = homepageContent[locale].pillars.items;

    return (
        <>
            <style>{`
                @keyframes cube-spin {
                    from { transform: rotateX(-18deg) rotateY(0deg); }
                    to   { transform: rotateX(-18deg) rotateY(360deg); }
                }
                @keyframes cube-glow-gold   { 0%,100%{box-shadow:0 0 30px rgba(255,170,0,0.25)} 50%{box-shadow:0 0 60px rgba(255,170,0,0.5)} }
                @keyframes cube-glow-cyan   { 0%,100%{box-shadow:0 0 30px rgba(0,255,221,0.25)} 50%{box-shadow:0 0 60px rgba(0,255,221,0.5)} }
                @keyframes cube-glow-purple { 0%,100%{box-shadow:0 0 30px rgba(170,0,255,0.25)} 50%{box-shadow:0 0 60px rgba(170,0,255,0.5)} }
                @keyframes cube-glow-red    { 0%,100%{box-shadow:0 0 30px rgba(185,29,71,0.25)}  50%{box-shadow:0 0 60px rgba(185,29,71,0.5)} }

                .cube-scene {
                    perspective: 600px;
                    perspective-origin: 50% 40%;
                }
                .cube-body {
                    width: ${SIZE}px;
                    height: ${SIZE}px;
                    transform-style: preserve-3d;
                    animation: cube-spin 14s linear infinite;
                }
                .cube-face {
                    position: absolute;
                    width: ${SIZE}px;
                    height: ${SIZE}px;
                    backface-visibility: visible;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 16px;
                    gap: 8px;
                    text-align: center;
                    backdrop-filter: blur(4px);
                    -webkit-backdrop-filter: blur(4px);
                }
                .face-front  { animation: cube-glow-gold   3s ease-in-out infinite; }
                .face-right  { animation: cube-glow-cyan   3s ease-in-out infinite 0.75s; }
                .face-back   { animation: cube-glow-purple 3s ease-in-out infinite 1.5s; }
                .face-left   { animation: cube-glow-red    3s ease-in-out infinite 2.25s; }
            `}</style>

            {/* Stars background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div style={{
                    position: 'absolute', inset: 0,
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(20,0,40,0.6) 0%, transparent 70%)',
                }} />
                {[...Array(40)].map((_, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        width: i % 5 === 0 ? 2 : 1,
                        height: i % 5 === 0 ? 2 : 1,
                        borderRadius: '50%',
                        background: 'white',
                        opacity: 0.3 + (i % 3) * 0.2,
                        left: `${(i * 37 + 11) % 100}%`,
                        top: `${(i * 53 + 7) % 100}%`,
                    }} />
                ))}
            </div>

            <div className="cube-scene relative flex items-center justify-center"
                style={{ width: SIZE, height: SIZE + 60 }}>
                <div className="cube-body relative">
                    {FACES.map(({ key, color, bg, transform, pillarIdx }) => {
                        const pillar = pillarIdx >= 0 ? pillars[pillarIdx] : null;
                        const isBranding = pillarIdx === -1;

                        return (
                            <div
                                key={key}
                                className={`cube-face face-${key}`}
                                style={{
                                    transform,
                                    background: bg,
                                    border: `1px solid ${color}`,
                                }}
                            >
                                {pillar && (
                                    <>
                                        <div style={{
                                            fontSize: 9,
                                            letterSpacing: '0.2em',
                                            color,
                                            textTransform: 'uppercase',
                                            fontFamily: 'Share Tech Mono, monospace',
                                            opacity: 0.7,
                                        }}>
                                            0{pillarIdx + 1}
                                        </div>
                                        <div style={{
                                            fontSize: 13,
                                            fontWeight: 700,
                                            color,
                                            letterSpacing: '0.05em',
                                            textTransform: 'uppercase',
                                            lineHeight: 1.2,
                                            fontFamily: 'Rajdhani, sans-serif',
                                        }}>
                                            {pillar.title}
                                        </div>
                                        <div style={{
                                            fontSize: 9,
                                            color: 'rgba(255,255,255,0.6)',
                                            lineHeight: 1.4,
                                            maxWidth: 150,
                                        }}>
                                            {pillar.description.slice(0, 60)}…
                                        </div>
                                    </>
                                )}
                                {isBranding && (
                                    <>
                                        <div style={{ fontSize: 11, color, letterSpacing: '0.15em', fontFamily: 'Share Tech Mono, monospace' }}>
                                            FLORENCE
                                        </div>
                                        <div style={{ fontSize: 22, fontWeight: 900, color, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em' }}>
                                            EGI
                                        </div>
                                        <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                                            Certificazione di Valore
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
