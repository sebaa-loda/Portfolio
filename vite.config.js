import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import VitePluginSass from 'vite-plugin-sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePluginSass()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "${resolve(__dirname, 'src/styles/variables.scss')}";`, // Importa tus variables SCSS
      },
    },
  },
})
