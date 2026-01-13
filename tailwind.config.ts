import type { Config } from 'tailwindcss';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#00ffdd',
                secondary: '#0088ff',
                danger: '#ff0044',
                gold: '#ffaa00',
                purple: '#aa00ff',
                'glass-dark': 'rgba(5, 8, 12, 0.95)',
                'border-light': 'rgba(255, 255, 255, 0.1)',
                'border-active': 'rgba(0, 255, 221, 0.5)',
                'text-main': '#e0e0e0',
                'text-muted': '#8090a0',
            },
            fontFamily: {
                sans: ['Rajdhani', 'sans-serif'],
                mono: ['Share Tech Mono', 'monospace'],
            },
            spacing: {
                // 8pt grid system
                ...Array.from({ length: 129 }, (_, i) => i * 8).reduce(
                    (acc, val) => ({ ...acc, [val]: `${val}px` }),
                    {}
                ),
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
} satisfies Config;
