import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), legacy({
    targets: ['defaults', 'not IE 11'],
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});