import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            // Proxy API requests to your Spring Boot backend
            '/quotes': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/quotes/, '')
            },
        },
        port: 5173, // Change the dev server port if needed
    },
});
