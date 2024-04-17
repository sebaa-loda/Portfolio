import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginSass from 'vite-plugin-sass';
import { resolve } from 'path';


export default defineConfig({
  plugins: [react(), VitePluginSass()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "${resolve(__dirname, 'src/styles/variables.scss')}";`, 
      },
    },
  },
});