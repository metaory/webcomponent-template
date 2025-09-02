import { defineConfig } from 'vite'
import angular from '@vitejs/plugin-angular'

export default defineConfig({
  plugins: [angular()],
  base: '/__LIB_NAME__/examples/vite-angular/',
  server: {
    port: 4200
  }
})
