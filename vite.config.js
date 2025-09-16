
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const base = mode === 'production' ? '/Website/' : '/'

  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: 'dist',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            icons: ['lucide-react']
          }
        }
      },
      chunkSizeWarningLimit: 1000,
      assetsDir: 'assets'
    },
    publicDir: 'public',
    server: {
      port: 3000,
      host: true
    }
  }
})
