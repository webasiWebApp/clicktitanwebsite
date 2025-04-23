import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:"/clicktitanwebsite/",
  server: {
    hmr: {
      timeout: 5000
    }
  }
});