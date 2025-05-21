import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: 'admin',
      filename: 'remoteEntry.js',
      exposes: {
        './AdminApp': './src/main.ts'
      },
      shared: ['svelte']
    })
  ],
  server: {
    port: 3003
  },
  resolve: {
    //TODO its only works for the monorepo structure, change it to the remote entry
    alias: {
      shared: path.resolve(__dirname, '../../shared/state-methods/eventBus.ts')
    }
  }
});
