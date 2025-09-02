// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  base: '/__LIB_NAME__',
  site: 'https://github.com/void/__LIB_NAME__',
  vite: {
    server: {
      proxy: {
        '/__LIB_NAME__/examples/vite-vanilla': {
          target: 'http://localhost:5173',
          changeOrigin: true,
          rewrite: (path) => path.replace('/__LIB_NAME__/examples/vite-vanilla', '')
        },
        '/__LIB_NAME__/examples/vite-react': {
          target: 'http://localhost:5174',
          changeOrigin: true,
          rewrite: (path) => path.replace('/__LIB_NAME__/examples/vite-react', '')
        },
        '/__LIB_NAME__/examples/vite-vue': {
          target: 'http://localhost:5175',
          changeOrigin: true,
          rewrite: (path) => path.replace('/__LIB_NAME__/examples/vite-vue', '')
        },
        '/__LIB_NAME__/examples/vite-angular': {
          target: 'http://localhost:4200',
          changeOrigin: true,
          rewrite: (path) => path.replace('/__LIB_NAME__/examples/vite-angular', '')
        }
      }
    },
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@styles': '/src/styles',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@root': '../../'
      }
    }
  }
});
