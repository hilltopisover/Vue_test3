import { HttpProxy, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver({})],
    })
  ],
  server: {
    port :7070,
    host: "0.0.0.0",
    proxy: {
      '/api': {
        target : 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})
