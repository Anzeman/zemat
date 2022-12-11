import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  root: process.cwd(),
  base: '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [
      {find: "@", replacement: '/src'}
    ],
  },
  build: {
    rollupOptions: {},
  },
  optimizeDeps: {
  },
});
