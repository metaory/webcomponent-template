import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/__LIB_NAME__/examples/vite-react/',
  server: {
    port: 5174
  }
})

