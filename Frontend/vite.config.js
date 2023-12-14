import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Set this to '/' if deploying to the root
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'images', // Set the output assets directory to 'assets'
    rollupOptions: {
      output: {
        manualChunks: {
          // Define your manual chunks here if needed
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Set your desired limit in kilobytes
  },
});
