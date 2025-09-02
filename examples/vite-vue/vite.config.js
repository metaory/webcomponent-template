import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/__LIB_NAME__/examples/vite-vue/',
  server: {
    port: 5175
  }
})
