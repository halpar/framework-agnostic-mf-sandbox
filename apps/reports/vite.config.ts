import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'reports',
      filename: 'remoteEntry.js',
      exposes: {
        './ReportsApp': './src/main.ts'  // export edilen root bileşen
      },
      shared: ['vue']
    })
  ],
  server: {
    port: 3002
  },
  resolve: {
    alias: {
      shared: path.resolve(__dirname, '../../shared')
    }
  }
});
