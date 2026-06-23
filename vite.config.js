import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
// import VueLazyload from 'vue-lazyload';
import vue from '@vitejs/plugin-vue'

// Vue.use(VueLazyload);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
