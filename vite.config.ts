import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        port: 5174,
        open: true,
    },
    build: {
        target: 'esnext',
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
            },
        },
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].[hash].${Date.now()}.js`,
                chunkFileNames: `assets/[name].[hash].${Date.now()}.js`,
                assetFileNames: `assets/[name].[hash].${Date.now()}.[ext]`,
            },
        },
    },
});
